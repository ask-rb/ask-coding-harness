# frozen_string_literal: true

require "roda"
require "json"
require "securerandom"
require "fileutils"
require "ask/coding_providers"
require "ask-state-providers"
require "ask/coder/version"

module Askoda
  # Shared adapter instance (set from config.ru, accessed by routes)
  @_adapter = nil

  class << self
    attr_accessor :_adapter
  end

  # HTTP API + static file server for the Askoda coding assistant.
  #
  # Endpoints:
  #   POST /api/chat         — Send a message, stream response via SSE
  #   GET  /api/conversations — List conversations
  #   GET  /api/conversations/:id  — Get conversation messages
  #   DELETE /api/conversations/:id — Delete a conversation
  #   GET  /*                — Serve static frontend files
  #
  # Usage:
  #   CODING_PROVIDER=ask_agent ASK_AGENT_MODEL=deepseek-v4-flash \
  #     bundle exec rackup config.ru -p 8080
  class Server < Roda
    plugin :default_headers, {
      "Access-Control-Allow-Origin" => "*",
      "Access-Control-Allow-Methods" => "GET, POST, DELETE, OPTIONS",
      "Access-Control-Allow-Headers" => "Content-Type"
    }
    plugin :public, root: File.join(File.dirname(__FILE__), "../../public")
    plugin :streaming

    # Load .env if present
    if File.exist?(File.expand_path(".env"))
      File.readlines(".env").each do |line|
        line = line.strip
        next if line.empty? || line.start_with?("#") || !line.include?("=")
        k, v = line.split("=", 2)
        ENV[k.strip] = v.strip.delete("\"'") unless k.strip.empty?
      end
    end

    DB_PATH = ENV.fetch("ASKODA_DB_PATH", File.join(Dir.pwd, "data", "askoda.db"))
    CONVERSATIONS_KEY = "__conversations__"

    def self.build_provider_adapter
      provider = ENV.fetch("CODING_PROVIDER", "zcode")
      Ask::CodingProviders.build_adapter(
        provider,
        workspace_path: Dir.pwd,
        turn_timeout: (ENV["TURN_TIMEOUT"] || "300").to_i
      )
    end

    route do |r|
      # CORS preflight
      if r.request_method == "OPTIONS"
        response.status = 204
        nil
        next
      end

      # ── API routes ──
      r.on "api" do
        # GET /api/projects — list projects from adapter
        r.get "projects" do
          (Askoda._adapter.list_projects || []).to_json
        end

        # GET /api/projects/:encoded_path/sessions — list sessions for a project dir
        r.on "projects", String do |encoded|
          r.get "sessions" do
            dir = URI.decode_www_form_component(encoded)
            sessions = Askoda._adapter.find_sessions(directory: dir) || []
            sessions.map! do |s|
              { id: s[:session_id], title: s[:title], updated_at: s[:updated], message_count: 0 }
            end
            sessions.to_json
          end
        end

        # GET /api/sessions/:id — get session messages from adapter
        r.on "sessions", String do |id|
          r.get do
            history = Askoda._adapter.session_history(id) || []
            messages = history.map { |m| { role: m[:role] == "You" ? "user" : "assistant", content: m[:text], created_at: Time.now.iso8601 } }
            { id: id, messages: messages }.to_json
          end
        end

        # POST /api/chat — streaming chat
        # POST /api/chat — streaming chat
        r.post "chat" do
          body = JSON.parse(r.body.read)
          input = body["message"].to_s.strip
          conversation_id = body["conversation_id"]
          model = body["model"] || ENV["ASK_AGENT_MODEL"]

          if input.empty?
            response.status = 400
            next { error: "message is required" }.to_json
          end

          # Load or create conversation
          db = open_db
          conversation = if conversation_id
            load_conversation(db, conversation_id) || create_conversation(db)
          else
            create_conversation(db)
          end

          # Append user message
          conversation[:messages] << { role: "user", content: input, created_at: Time.now.iso8601 }
          save_conversation(db, conversation)
          index_conversation(db, conversation)

          # Stream the response
          response.headers["Content-Type"] = "text/event-stream"
          response.headers["Cache-Control"] = "no-cache"
          response.headers["Connection"] = "keep-alive"

          stream do |out|
            out << "event: conversation.created\ndata: #{conversation[:id]}\n\n" unless body["conversation_id"]

            begin
              adapter = Askoda._adapter
              sid = adapter.create_session("/tmp")

              out << "event: turn.started\ndata: {}\n\n"

              accumulated = ""
              adapter.send_and_stream(sid, input) do |ev|
                case ev[:type]
                when "model.streaming"
                  delta = ev.dig(:payload, "delta") || ""
                  accumulated += delta
                  out << "event: model.streaming\ndata: #{JSON.generate(delta: delta)}\n\n" unless delta.empty?
                when "turn.completed"
                  response_text = ev.dig(:payload, "response") || accumulated
                  conversation[:messages] << { role: "assistant", content: response_text, created_at: Time.now.iso8601 }
                  save_conversation(db, conversation)
                  out << "event: turn.completed\ndata: #{JSON.generate(response: response_text)}\n\n"
                when "turn.failed"
                  err = ev.dig(:payload, "error", "message") || "Unknown error"
                  conversation[:messages] << { role: "assistant", content: "Error: #{err}", created_at: Time.now.iso8601 }
                  save_conversation(db, conversation)
                  out << "event: turn.failed\ndata: #{JSON.generate(error: err)}\n\n"
                end
              end
            rescue => e
              out << "event: error\ndata: #{JSON.generate(error: e.message)}\n\n"
            ensure
              db&.close
            end
          end
        end

        # GET /api/conversations
        r.get "conversations" do
          db = open_db
          keys = db.list_range(CONVERSATIONS_KEY, 0, -1)
          conversations = keys.filter_map { |id| load_conversation_summary(db, id) }
          db.close
          conversations.to_json
        end

        # /api/conversations/:id
        r.on "conversations", String do |id|
          # GET /api/conversations/:id
          r.get do
            db = open_db
            conv = load_conversation(db, id)
            db.close
            if conv
              conv.to_json
            else
              response.status = 404
              { error: "Conversation not found" }.to_json
            end
          end

          # DELETE /api/conversations/:id
          r.delete do
            db = open_db
            db.delete("conv:#{id}")
            db.list_remove(CONVERSATIONS_KEY, id)
            db.close
            { deleted: true }.to_json
          end
        end
      end

      # ── Static files (PWA frontend) ──
      r.public
      # Serve index.html for unmatched GET requests (SPA support)
      r.get do
        public_dir = File.join(File.dirname(__FILE__), "../../public")
        file = File.join(public_dir, "index.html")
        if File.exist?(file)
          response["Content-Type"] = "text/html"
          File.read(file)
        end
      end
    end

    private

    def open_db
      dir = File.dirname(DB_PATH)
      FileUtils.mkdir_p(dir) unless File.directory?(dir)
      Ask::State::Providers::SQLite.new(path: DB_PATH)
    end

    def create_conversation(db)
      id = SecureRandom.uuid
      {
        id: id,
        title: "New conversation",
        messages: [],
        created_at: Time.now.iso8601,
        updated_at: Time.now.iso8601
      }
    end

    def save_conversation(db, conv)
      conv[:updated_at] = Time.now.iso8601
      conv[:title] = guess_title(conv[:messages]) if conv[:title] == "New conversation" && conv[:messages].length >= 2
      db.set("conv:#{conv[:id]}", conv)
    end

    def index_conversation(db, conv)
      db.list_append(CONVERSATIONS_KEY, conv[:id], max_length: 500)
    end

    def load_conversation(db, id)
      db.get("conv:#{id}")
    end

    def load_conversation_summary(db, id)
      data = db.get("conv:#{id}")
      return nil unless data
      {
        id: data["id"],
        title: data["title"],
        message_count: data["messages"]&.length || 0,
        created_at: data["created_at"],
        updated_at: data["updated_at"]
      }
    end

    def guess_title(messages)
      first_msg = messages.find { |m| m[:role] == "user" || m["role"] == "user" }
      text = (first_msg&.dig(:content) || first_msg&.dig("content") || "").to_s
      text.length > 40 ? text[0..40] + "…" : text
    end
  end
end
