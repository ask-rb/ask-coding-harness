# frozen_string_literal: true

require "roda"
require "json"
require "fileutils"

module Ask
  module CodingHarness
    # HTTP API + static file server for the coding harness.
    #
    # Endpoints:
    #   GET  /api/config          — models, adapter, workspace, features
    #   GET  /api/workspace       — workspace name, root, git branch
    #   GET  /api/conversations   — list conversations (archived filter)
    #   GET  /api/conversations/:id         — conversation with messages
    #   PATCH /api/conversations/:id        — rename
    #   DELETE /api/conversations/:id       — delete
    #   POST /api/conversations/:id/archive — toggle archive
    #   PATCH/DELETE /api/conversations/:id/messages/:index — edit/trim
    #   POST /api/chat            — send a message, stream events via SSE
    #   POST /api/conversations/:id/approvals/:actionId/approve|reject
    #   POST /api/conversations/:id/approvals/approve-all
    #   POST /api/conversations/:id/plan/approve|reject
    #   POST /api/conversations/:id/abort
    #   GET  /*                   — static frontend (PWA), SPA fallback
    class Server < Roda
      # Built frontend (PWA). Shipped inside the gem.
      def self.public_dir
        File.expand_path("../../../public", __dir__)
      end

      plugin :default_headers, {
        "Access-Control-Allow-Origin" => "*",
        "Access-Control-Allow-Methods" => "GET, POST, PATCH, DELETE, OPTIONS",
        "Access-Control-Allow-Headers" => "Content-Type"
      }
      plugin :error_handler do |e|
        if env["PATH_INFO"]&.start_with?("/api/")
          response.status = 500
          { error: e.message }.to_json
        else
          raise e
        end
      end
      plugin :public, root: public_dir
      plugin :streaming

      # Build a server instance wired to the given components. Tests build
      # servers with fakes; the CLI builds with the real store + runner.
      #
      # @param config [Config]
      # @param store [Store]
      # @param runner [AgentRunner]
      def self.build(config:, store:, runner:)
        Class.new(self) do
          define_method(:harness_config) { config }
          define_method(:harness_store) { store }
          define_method(:harness_runner) { runner }
        end
      end

      route do |r|
        # CORS preflight
        if r.request_method == "OPTIONS"
          response.status = 204
          next
        end

        r.on "api" do
          # GET /api/config — models, adapter, workspace, features
          r.get "config" do
            cfg = harness_config
            {
              models: models,
              defaultModel: cfg.model,
              currentAdapter: cfg.adapter,
              workspace: workspace_info,
              features: {
                approvals: cfg.approvals?,
                planMode: cfg.plan_mode,
                todos: cfg.todos
              }
            }.to_json
          end

          # GET /api/workspace — name, root, git branch
          r.get "workspace" do
            workspace_info.to_json
          end

          # POST /api/chat — streaming turn
          r.post "chat" do
            body = JSON.parse(r.body.read)
            input = body["message"].to_s.strip
            conversation_id = body["conversation_id"]
            model = body["model"]

            if input.empty?
              response.status = 400
              next { error: "message is required" }.to_json
            end

            store = harness_store
            existing = conversation_id && store.load(conversation_id)
            conversation = existing || store.build(directory: harness_config.workspace)
            new_conversation = existing.nil?
            conversation = store.save(conversation) if new_conversation

            response.headers["Content-Type"] = "text/event-stream"
            response.headers["Cache-Control"] = "no-cache"
            response.headers["Connection"] = "keep-alive"

            stream do |out|
              out << "event: conversation.created\ndata: #{conversation["id"]}\n\n" if new_conversation

              out << "event: turn.started\ndata: {}\n\n"
              harness_runner.start_turn(conversation, input, model: model) do |ev|
                begin
                  out << "event: #{ev[:type]}\ndata: #{JSON.generate(ev[:data])}\n\n"
                rescue IOError, Errno::EPIPE, Errno::ECONNRESET
                  # Client disconnected — the turn keeps running and the
                  # outcome is persisted by the runner.
                end
              end.join
            end
          end

          # GET /api/conversations
          r.get "conversations" do
            harness_store.list(archived: r.params["archived"] == "true").to_json
          end

          r.on "conversations", String do |id|
            store = harness_store

            # GET /api/conversations/:id
            r.get do
              conv = store.load(id)
              if conv
                conv.to_json
              else
                response.status = 404
                { error: "Conversation not found" }.to_json
              end
            end

            # PATCH /api/conversations/:id — rename
            r.is method: :patch do
              body = JSON.parse(r.body.read)
              title = body["title"].to_s.strip
              if title.empty?
                response.status = 400
                next { error: "title is required" }.to_json
              end
              conv = store.load(id)
              unless conv
                response.status = 404
                next { error: "Conversation not found" }.to_json
              end
              conv["title"] = title
              store.save(conv)
              { id: id, title: title }.to_json
            end

            # DELETE /api/conversations/:id
            r.is method: :delete do
              store.delete(id)
              { deleted: true }.to_json
            end

            # POST /api/conversations/:id/archive
            r.post "archive" do
              conv = store.load(id)
              unless conv
                response.status = 404
                next { error: "Conversation not found" }.to_json
              end
              conv["archived"] = !conv["archived"]
              store.save(conv)
              { id: id, archived: conv["archived"] }.to_json
            end

            # POST /api/conversations/:id/abort
            r.post "abort" do
              harness_runner.abort(id)
              { aborted: true }.to_json
            end

            # ── Approvals ──
            r.on "approvals" do
              # POST /api/conversations/:id/approvals/approve-all
              r.post "approve-all" do
                harness_runner.approve_all(id)
                { approved: true }.to_json
              end

              r.on Integer do |action_id|
                r.post "approve" do
                  harness_runner.approve(id, action_id)
                  { approved: true }.to_json
                end
                r.post "reject" do
                  harness_runner.reject(id, action_id)
                  { rejected: true }.to_json
                end
              end
            end

            # ── Plan ──
            r.on "plan" do
              r.post "approve" do
                harness_runner.approve_plan(id)
                { approved: true }.to_json
              end
              r.post "reject" do
                harness_runner.reject_plan(id)
                { rejected: true }.to_json
              end
            end

            # ── Messages ──
            r.on "messages", Integer do |index|
              # PATCH /api/conversations/:id/messages/:index — edit a user message
              r.on method: :patch do
                body = JSON.parse(r.body.read)
                content = body["content"].to_s.strip
                if content.empty?
                  response.status = 400
                  next { error: "content is required" }.to_json
                end
                conv = store.load(id)
                unless conv
                  response.status = 404
                  next { error: "Conversation not found" }.to_json
                end
                msg = conv["messages"][index]
                unless msg
                  response.status = 404
                  next { error: "Message not found" }.to_json
                end
                if msg["role"] != "user"
                  response.status = 400
                  next { error: "Only user messages can be edited" }.to_json
                end
                msg["content"] = content
                store.save(conv)
                conv.to_json
              end

              # DELETE /api/conversations/:id/messages/:index — trim from here
              r.on method: :delete do
                conv = store.load(id)
                unless conv
                  response.status = 404
                  next { error: "Conversation not found" }.to_json
                end
                if index >= conv["messages"].length
                  response.status = 404
                  next { error: "Message not found" }.to_json
                end
                conv["messages"] = conv["messages"][0...index]
                store.save(conv)
                conv.to_json
              end
            end
          end
        end

        # ── Static files (PWA frontend) ──
        r.public
        # SPA fallback: serve index.html for unmatched GET requests
        r.get do
          file = File.join(self.class.public_dir, "index.html")
          if File.exist?(file)
            response["Content-Type"] = "text/html"
            File.read(file)
          end
        end
      end

      private

      def harness_config
        raise NotImplementedError, "built via Server.build"
      end

      def harness_store
        raise NotImplementedError, "built via Server.build"
      end

      def harness_runner
        raise NotImplementedError, "built via Server.build"
      end

      def workspace_info
        cfg = harness_config
        root = cfg.workspace
        branch = nil
        head = File.join(root, ".git", "HEAD")
        if File.file?(head)
          ref = File.read(head).strip
          branch = ref.split("/").last if ref.start_with?("ref:")
        end
        { name: File.basename(root), root: root, gitBranch: branch }
      rescue SystemCallError
        { name: File.basename(root), root: root, gitBranch: nil }
      end

      def models
        env_models = ENV["ACH_MODELS"]
        if env_models&.length&.positive?
          env_models.split(",").map(&:strip)
        else
          ["deepseek-v4-flash", "claude-sonnet-4", "gpt-4o", "o3-mini"]
        end
      end
    end
  end
end
