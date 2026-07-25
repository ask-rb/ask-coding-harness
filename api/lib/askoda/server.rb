# frozen_string_literal: true

require "roda"
require "json"
require "find"
require "securerandom"
require "fileutils"
require "ask/coding_providers"
require "ask-state-providers"

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
    plugin :error_handler do |e|
      if env["PATH_INFO"]&.start_with?("/api/")
        response.status = 500
        { error: e.message }.to_json
      else
        raise e
      end
    end
    plugin :public, root: File.expand_path("../../../public", File.dirname(__FILE__))
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
      provider = ENV.fetch("CODING_PROVIDER", "acp")
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
        # GET /api/files — list all project files recursively
        r.get "files" do
          root = Dir.pwd
          ignore = %w[.git node_modules vendor/bundle tmp log .DS_Store coverage]
          binary_ext = %w[.png .jpg .jpeg .gif .ico .svg .woff .woff2 .eot .ttf .otf .mp4 .mp3 .zip .gz .tar .exe .dll .so .o .pyc]
          result = []
          Find.find(root) do |path|
            rel = path.sub("#{root}/", "")
            next if rel.empty?
            # Check if any component of the relative path should be ignored
            parts = rel.split("/")
            next if parts.any? { |p| ignore.include?(p) || p.start_with?(".") }
            next unless File.file?(path)
            ext = File.extname(path).downcase
            next if binary_ext.include?(ext)
            # Skip files > 1MB
            next if File.size(path) > 1_048_576
            result << rel
          end
          { files: result.sort }.to_json
        end

        # GET /api/files/read?path=... — read a file
        r.get "files", "read" do
          file_path = r.params["path"].to_s.strip
          if file_path.empty? || file_path.include?("..")
            response.status = 400
            next { error: "Invalid path" }.to_json
          end
          full = File.join(Dir.pwd, file_path)
          unless File.exist?(full)
            response.status = 404
            next { error: "File not found" }.to_json
          end
          if File.directory?(full)
            response.status = 400
            next { error: "Path is a directory" }.to_json
          end
          content = File.read(full, encoding: "UTF-8")
          { path: file_path, content: content }.to_json
        end

        # GET /api/config — list available models
        r.get "config" do
          default = ENV["ASK_AGENT_MODEL"] || ENV.fetch("ASKODA_DEFAULT_MODEL", "deepseek-v4-flash")
          models_env = ENV["ASKODA_MODELS"]
          models = if models_env&.length&.positive?
            models_env.split(",").map(&:strip)
          else
            %w[deepseek-v4-flash claude-sonnet-4-20250514 gpt-4o o3-mini claude-sonnet-4-20250514-thinking]
          end
          { models: models, defaultModel: default, currentAdapter: ENV.fetch("CODING_PROVIDER", "acp") }.to_json
        end
	        # GET /api/projects — list projects derived from active conversation directories
        r.get "projects" do
          db = open_db
          keys = db.list_range(CONVERSATIONS_KEY, 0, -1)
          dir_counts = Hash.new(0)
          keys.each do |id|
            data = db.get("conv:#{id}")
            next unless data
            next if data["archived"] == true
            dir = data["directory"] || data[:directory]
            dir_counts[dir] += 1 if dir
          end
          db.close
          dir_counts.map { |dir, count| { directory: dir, name: File.basename(dir), conversation_count: count } }.to_json
        end

        # GET /api/projects/:encoded_path/sessions — list conversations for a project dir
        r.on "projects", String do |encoded|
          r.get "sessions" do
            dir = URI.decode_www_form_component(encoded)
            db = open_db
            keys = db.list_range(CONVERSATIONS_KEY, 0, -1)
            conversations = keys.filter_map do |id|
              data = db.get("conv:#{id}")
              next unless data
              conv_dir = data["directory"] || data[:directory]
              next unless conv_dir == dir
              { id: data["id"], title: data["title"] || "New conversation", message_count: (data["messages"] || []).length, updated_at: data["updated_at"] }
            end
            db.close
            conversations.to_json
          end
        end

        # GET /api/sessions/:id — get session/conversation messages (reads from askoda.db)
        r.on "sessions", String do |id|
          r.get do
            db = open_db
            data = db.get("conv:#{id}")
            db.close
            if data
              msgs = data["messages"] || data[:messages] || []
              { id: data["id"], messages: msgs.map { |m| { role: m["role"] || m[:role], content: m["content"] || m[:content] } } }.to_json
            else
              response.status = 404
              { error: "Not found" }.to_json
            end
          end
        end

        # POST /api/chat — streaming chat
        # POST /api/chat — streaming chat
        r.post "chat" do
          body = JSON.parse(r.body.read)
          input = body["message"].to_s.strip
          conversation_id = body["conversation_id"]
          model = body["model"] || ENV["ASK_AGENT_MODEL"]
          directory = body["directory"] || ENV.fetch("ASKODA_WORKSPACE", Dir.pwd)

          if input.empty?
            response.status = 400
            next { error: "message is required" }.to_json
          end

          # Load or create conversation
          db = open_db
          conversation = if conversation_id
            load_conversation(db, conversation_id) || create_conversation(db, directory: directory)
          else
            create_conversation(db, directory: directory)
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
              workspace = conversation[:directory] || Dir.pwd
              sid = adapter.create_session(workspace)

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
                when "tool.use"
                  out << "event: tool.use\ndata: #{JSON.generate(toolUse: ev.dig(:payload, "toolName"), input: ev.dig(:payload, "input"))}\n\n"
                when "tool.result"
                  out << "event: tool.result\ndata: #{JSON.generate(toolResult: ev.dig(:payload, "output"), toolName: ev.dig(:payload, "toolName"))}\n\n"
                end
              end
            rescue => e
              out << "event: error\ndata: #{JSON.generate(error: e.message)}\n\n"
            ensure
              db&.close
            end
          end
        end

        # GET /api/conversations — list active conversations (omit archived by default)
        r.get "conversations" do
          show_archived = r.params["archived"] == "true"
          db = open_db
          keys = db.list_range(CONVERSATIONS_KEY, 0, -1)
          conversations = keys.filter_map { |id|
            summary = load_conversation_summary(db, id)
            summary if summary && (show_archived || !summary[:archived])
          }
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

          # PATCH /api/conversations/:id — rename conversation title (only when path fully consumed)
          r.is method: :patch do
            body = JSON.parse(r.body.read)
            new_title = body["title"].to_s.strip
            if new_title.empty?
              response.status = 400
              next { error: "title is required" }.to_json
            end
            db = open_db
            conv = load_conversation(db, id)
            unless conv
              db.close
              response.status = 404
              next { error: "Conversation not found" }.to_json
            end
            conv[:title] = new_title
            save_conversation(db, conv)
            index_conversation(db, conv)
            db.close
            { id: id, title: new_title }.to_json
          end

          # DELETE /api/conversations/:id (only when path is fully consumed)
          r.is method: :delete do
            db = open_db
            db.delete("conv:#{id}")
            db.list_remove(CONVERSATIONS_KEY, id)
            db.close
            { deleted: true }.to_json
          end

          # POST /api/conversations/:id/archive — toggle archive status
          r.post "archive" do
            db = open_db
            conv = load_conversation(db, id)
            unless conv
              db.close
              response.status = 404
              next { error: "Conversation not found" }.to_json
            end
            conv[:archived] = !conv[:archived]
            save_conversation(db, conv)
            db.close
            { id: id, archived: conv[:archived] }.to_json
          end

          # /api/conversations/:id/messages/:index
          r.on "messages", Integer do |index|
            # PATCH /api/conversations/:id/messages/:index — edit a user message
            r.on method: :patch do
              body = JSON.parse(r.body.read)
              new_content = body["content"].to_s.strip

              if new_content.empty?
                response.status = 400
                next { error: "content is required" }.to_json
              end

              db = open_db
              conv = load_conversation(db, id)
              unless conv
                db.close
                response.status = 404
                next { error: "Conversation not found" }.to_json
              end

              if index >= conv[:messages].length
                db.close
                response.status = 404
                next { error: "Message not found" }.to_json
              end

              msg = conv[:messages][index]
              if msg[:role] != "user"
                db.close
                response.status = 400
                next { error: "Only user messages can be edited" }.to_json
              end

              msg[:content] = new_content
              save_conversation(db, conv)
              db.close
              conv.to_json
            end

            # DELETE /api/conversations/:id/messages/:index — delete from here
            r.on method: :delete do
              db = open_db
              conv = load_conversation(db, id)
              unless conv
                db.close
                response.status = 404
                next { error: "Conversation not found" }.to_json
              end

              if index >= conv[:messages].length
                db.close
                response.status = 404
                next { error: "Message not found" }.to_json
              end

              conv[:messages] = conv[:messages][0...index]
              save_conversation(db, conv)
              db.close
              conv.to_json
            end
          end
        end
      end

      # ── Static files (PWA frontend) ──
      r.public
      # Serve index.html for unmatched GET requests (SPA support)
      r.get do
        public_dir = File.expand_path("../../../public", File.dirname(__FILE__))
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

    def create_conversation(db, directory: nil)
      id = SecureRandom.uuid
      {
        id: id,
        title: "New conversation",
        directory: directory,
        archived: false,
        messages: [],
        created_at: Time.now.iso8601,
        updated_at: Time.now.iso8601
      }
    end

    def save_conversation(db, conv)
      conv[:updated_at] = Time.now.iso8601
      conv[:title] = guess_title(conv[:messages]) if conv[:title] == "New conversation" && conv[:messages].length >= 1
      db.set("conv:#{conv[:id]}", conv)
    end

    def index_conversation(db, conv)
      db.list_append(CONVERSATIONS_KEY, conv[:id], max_length: 500)
    end

    def load_conversation(db, id)
      data = db.get("conv:#{id}")
      data ? symbolize_keys(data) : nil
    end

    def symbolize_keys(obj)
      case obj
      when Hash then obj.each_with_object({}) { |(k, v), h| h[k.to_sym] = symbolize_keys(v) }
      when Array then obj.map { |v| symbolize_keys(v) }
      else obj
      end
    end

    def load_conversation_summary(db, id)
      data = db.get("conv:#{id}")
      return nil unless data
      {
        id: data["id"],
        title: data["title"],
        directory: data["directory"],
        archived: data["archived"] == true,
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
