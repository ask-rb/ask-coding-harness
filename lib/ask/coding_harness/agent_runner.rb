# frozen_string_literal: true

require "thread"

module Ask
  module CodingHarness
    # Runs coding-agent turns for conversations: maps each conversation to
    # an adapter session, streams translated events, and persists assistant
    # messages back into the store.
    #
    # The default runtime is ask-agent (via the ask_agent adapter). Other
    # coding agents (Codex, Claude Code, ACP-based agents) plug in through
    # ask-coding-providers by setting ACH_ADAPTER/CODING_PROVIDER — the
    # runner only needs the adapter's duck-typed surface:
    # create_session, send_and_stream, and (when supported) approve_action,
    # reject_action, approve_all, approve_plan, reject_plan, abort.
    class AgentRunner
      # Tool name → ask-tools-shell class, for the ask_agent runtime.
      TOOL_CLASSES = {
        "bash" => Ask::Tools::Bash,
        "read" => Ask::Tools::Read,
        "write" => Ask::Tools::Write,
        "edit" => Ask::Tools::Edit,
        "glob" => Ask::Tools::Glob,
        "grep" => Ask::Tools::Grep,
        "code" => Ask::Tools::Code,
        "apply_patch" => Ask::Tools::ApplyPatch,
        "repl" => Ask::Tools::Repl
      }.freeze

      # @param config [Config] harness configuration
      # @param store [Store] conversation persistence
      # @param translator [EventTranslator] adapter event → SSE event
      # @param tool_classes [Hash{String => Class}] tool name → class map;
      #   overridable so hosts can register custom tools
      def initialize(config:, store:, translator: EventTranslator.new, tool_classes: TOOL_CLASSES)
        @config = config
        @store = store
        @translator = translator
        @tool_classes = tool_classes
        @adapter = nil
        @mutex = Mutex.new
        @adapter_mutex = Mutex.new
        @turn_mutex = Mutex.new
        @sessions = {}
        @turns = {}
      end

      # The adapter (created lazily on first use). Uses its own mutex so
      # callers holding @mutex (session_for, stop) can still build it.
      def adapter
        @adapter_mutex.synchronize { @adapter ||= build_adapter }
      end

      # Run a turn for a conversation, streaming harness events to the
      # block. Runs in a background thread; returns the thread.
      #
      # @param conversation [Hash] conversation record (from the store)
      # @param prompt [String] the user message
      # @param model [String, nil] model override
      # @yield [Hash] harness events ({ type:, data: })
      # @return [Thread]
      def start_turn(conversation, prompt, model: nil, &on_event)
        raise ArgumentError, "prompt must not be empty" if prompt.to_s.strip.empty?

        thread = Thread.new do
          begin
            run_turn(conversation, prompt, model: model, &on_event)
          rescue => e
            emit(on_event, { type: "error", data: { error: e.message } })
          end
        end
        @mutex.synchronize { @turns[conversation["id"]] = thread }
        thread
      end

      def running?(conversation_id)
        thread = @mutex.synchronize { @turns[conversation_id] }
        thread&.alive? ? true : false
      end

      # ── Approval / plan controls (no-ops when the adapter lacks them) ──

      def approve(conversation_id, action_id)
        send_adapter(conversation_id, :approve_action, action_id)
      end

      def reject(conversation_id, action_id)
        send_adapter(conversation_id, :reject_action, action_id)
      end

      def approve_all(conversation_id)
        send_adapter(conversation_id, :approve_all)
      end

      def approve_plan(conversation_id)
        send_adapter(conversation_id, :approve_plan)
      end

      def reject_plan(conversation_id)
        send_adapter(conversation_id, :reject_plan)
      end

      def abort(conversation_id)
        send_adapter(conversation_id, :abort)
      end

      def pending_approvals(conversation_id)
        sid = @mutex.synchronize { @sessions[conversation_id] }
        return [] unless sid
        if adapter.respond_to?(:pending_approvals)
          adapter.pending_approvals(sid)
        else
          []
        end
      end

      def stop
        @mutex.synchronize do
          @turns.each_value { |t| t.kill if t.alive? }
          @turns.clear
          @sessions.clear
          @adapter&.stop if @adapter.respond_to?(:stop)
          @adapter = nil
        end
      end

      private

      def run_turn(conversation, prompt, model: nil, &on_event)
        workspace = conversation["directory"] || @config.workspace
        sid = session_for(conversation, workspace, model: model)

        conv = @store.load(conversation["id"]) || conversation
        conv["messages"] << { "role" => "user", "content" => prompt, "created_at" => Time.now.iso8601 }
        @store.save(conv)

        outcome = :completed
        accumulated = +""
        with_workspace(workspace) do
          adapter.send_and_stream(sid, prompt, turn_timeout: @config.turn_timeout) do |event|
            translated = @translator.translate(event)
            next unless translated

            case translated[:type]
            when "message.delta"
              accumulated << translated[:data][:delta].to_s
            when "turn.failed"
              outcome = :failed
            when "turn.aborted"
              outcome = :aborted
            end
            emit(on_event, translated)
          end
        end

        persist_outcome(conversation["id"], accumulated, outcome)
      end

      # Run the block with the workspace as the process working directory.
      # The shell tools default to Dir.pwd, so the turn must execute inside
      # its workspace; a turn mutex keeps concurrent workspaces from racing
      # on the process-global directory. Self-hosted single-user: turns
      # serialize, which is both safe and simple.
      def with_workspace(workspace)
        @turn_mutex.synchronize do
          Dir.chdir(workspace) { yield }
        end
      end

      # Persist the assistant turn outcome (response, error, or abort) so
      # the conversation reads correctly when reopened. Best-effort; the
      # streamed events are the source of truth for the live view.
      def persist_outcome(conversation_id, accumulated, outcome)
        conv = @store.load(conversation_id)
        return unless conv
        # Only persist when the last message is still the user's prompt.
        last = conv["messages"].last
        return if last && last["role"] == "assistant"

        content =
          case outcome
          when :aborted then "Turn aborted."
          when :failed then accumulated.empty? ? "The turn failed." : accumulated
          else accumulated
          end
        conv["messages"] << { "role" => "assistant", "content" => content, "created_at" => Time.now.iso8601 }
        @store.save(conv)
      rescue StandardError
        nil
      end

      # One adapter session per conversation, created on first use. Each
      # session gets its workspace's system prompt (pi-style: default or
      # custom base + guidelines + AGENTS.md/CLAUDE.md project context).
      def session_for(conversation, workspace = nil, model: nil)
        workspace ||= conversation["directory"] || @config.workspace
        @mutex.synchronize do
          @sessions[conversation["id"]] ||= adapter.create_session(
            workspace,
            model: model || @config.model,
            system_prompt: system_prompt_for(workspace)
          )
        end
      end

      # The system prompt for a workspace. Adapters that don't accept a
      # per-session prompt (external ACP agents) ignore the extra keyword.
      def system_prompt_for(workspace)
        Ask::CodingHarness::SystemPrompt.build(
          workspace: workspace,
          custom: @config.system_prompt,
          append: @config.system_prompt_append,
          guidelines: @config.system_prompt_guidelines
        )
      end

      # Dispatch a control to the adapter, returning nil when the adapter
      # doesn't support it (e.g. external ACP agents without approvals).
      def send_adapter(conversation_id, method_name, *args)
        sid = @mutex.synchronize { @sessions[conversation_id] }
        return nil unless sid
        return nil unless adapter.respond_to?(method_name)
        adapter.public_send(method_name, sid, *args)
      end

      def emit(on_event, event)
        on_event&.call(event)
      end

      def build_adapter
        case @config.adapter.to_s
        when "ask_agent"
          build_ask_agent_adapter
        else
          build_external_adapter
        end
      end

      def build_ask_agent_adapter
        require "ask-coding-providers"
        adapter = Ask::CodingProviders::AskAgent::Adapter.new(
          model: @config.model,
          provider: ENV.fetch("ASK_AGENT_LLM_PROVIDER", "opencode_go"),
          tools: resolve_tools,
          max_turns: @config.max_turns,
          approval: @config.approval,
          approval_required: @config.approval_policy_tools,
          plan_mode: @config.plan_mode,
          todos: @config.todos
        )
        adapter.start
        # Tools operate relative to the process working directory; the
        # workspace IS the working directory for this server.
        Dir.chdir(@config.workspace) if File.directory?(@config.workspace)
        adapter
      end

      def build_external_adapter
        require "ask/coding_providers"
        adapter = Ask::CodingProviders.build_adapter(
          @config.adapter,
          workspace_path: @config.workspace,
          turn_timeout: @config.turn_timeout,
          approval: @config.approval
        )
        adapter.start if adapter.respond_to?(:start)
        adapter
      end

      def resolve_tools
        @config.tools.filter_map do |name|
          klass = @tool_classes[name.to_s]
          raise ArgumentError, "Unknown tool: #{name}" unless klass
          klass.new
        end
      end

    end
  end
end
