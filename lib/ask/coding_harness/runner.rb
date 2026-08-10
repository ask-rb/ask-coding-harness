# frozen_string_literal: true

require "json"

module Ask
  module CodingHarness
    # Headless run of a prompt against the workspace: drives the same
    # AgentRunner as the web server, prints a readable transcript, and
    # returns a Result. This is the dogfooding path — the harness builds
    # itself with `ach run`.
    class Runner
      # Outcome of a headless run.
      Result = Data.define(:success, :response, :events, :conversation_id, :error) do
        def success? = success
      end

      # @param config [Config] harness configuration (duped; approval mode
      #   is overridden for headless operation)
      # @param store [Store, nil] conversation store (defaults to a fresh
      #   Store on config.db_path)
      # @param runner [AgentRunner, nil] agent runner (defaults to a fresh
      #   AgentRunner on the store)
      # @param approval [Symbol] approval mode for headless runs; :off by
      #   default so nothing blocks on human review
      def initialize(config:, store: nil, runner: nil, approval: :off)
        @config = config.dup
        @config.approval = approval
        @store = store || Store.new(db_path: @config.db_path)
        @runner = runner || AgentRunner.new(config: @config, store: @store)
      end

      # Run a prompt and wait for the turn to finish.
      #
      # @param prompt [String] the task
      # @param workspace [String, nil] override config.workspace
      # @param model [String, nil] model override
      # @param quiet [Boolean] suppress the transcript output
      # @return [Result]
      def run(prompt, workspace: nil, model: nil, quiet: false)
        @config.workspace = workspace if workspace
        conversation = @store.build(directory: @config.workspace)
        conversation = @store.save(conversation)

        events = []
        response = +""
        error = nil

        thread = @runner.start_turn(conversation, prompt, model: model) do |ev|
          events << ev
          case ev[:type]
          when "message.delta" then response << ev[:data][:delta].to_s
          when "turn.failed" then error = ev[:data][:error]
          end
          print_transcript(ev) unless quiet
        end
        thread.join

        Result.new(
          success: error.nil?,
          response: response,
          events: events,
          conversation_id: conversation["id"],
          error: error
        )
      end

      private

      def print_transcript(event)
        case event[:type]
        when "turn.started"
          puts "\e[90m── turn started ──\e[0m"
        when "message.delta"
          print event[:data][:delta].to_s
          $stdout.flush
        when "message.thinking"
          print "\e[2m#{event[:data][:delta]}\e[0m"
          $stdout.flush
        when "tool.start"
          args = event[:data][:args]
          args = JSON.generate(args) if args.is_a?(Hash) || args.is_a?(Array)
          puts "\n\e[36m› #{event[:data][:name]}\e[0m #{args.to_s[0, 120]}"
        when "tool.delta"
          print event[:data][:partial].to_s
          $stdout.flush
        when "tool.end"
          output = event[:data][:output].to_s
          puts "" unless output.empty?
          output.lines.first(20).each { |l| puts "  \e[90m#{l.chomp}\e[0m" } unless output.empty?
          puts "  \e[90m… #{output.lines.size - 20} more lines\e[0m" if output.lines.size > 20
        when "approval.required"
          puts "\n\e[33m✋ #{event[:data][:toolName]} requires approval\e[0m"
        when "approval.updated"
          puts "\n\e[33m✋ #{event[:data][:toolName]} → #{event[:data][:status]}\e[0m"
        when "plan.proposed"
          puts "\n\e[35m📋 Plan:\e[0m #{event[:data][:plan]}"
        when "todos.updated"
          # Not printed — the response carries the outcome.
        when "turn.completed"
          puts "\n\e[90m── turn completed ──\e[0m"
        when "turn.failed"
          puts "\n\e[31m✗ #{event[:data][:error]}\e[0m"
        when "turn.aborted"
          puts "\n\e[31m✗ Turn aborted\e[0m"
        end
      end
    end
  end
end
