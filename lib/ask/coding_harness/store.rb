# frozen_string_literal: true

require "securerandom"
require "fileutils"

module Ask
  module CodingHarness
    # Persistence for conversations, backed by ask-state-providers (SQLite).
    #
    # A conversation is a plain Hash with string keys:
    #   id, title, directory, archived, messages, created_at, updated_at
    #
    # Messages are { "role" => "user"|"assistant", "content" => String,
    # "created_at" => String } hashes. The store is the single owner of
    # conversation records; the server and runner only read/write through it.
    class Store
      CONVERSATIONS_KEY = "__conversations__"
      MAX_CONVERSATIONS = 500

      # @param db_path [String] path to the SQLite database file
      def initialize(db_path:)
        @db_path = db_path
        dir = File.dirname(db_path)
        FileUtils.mkdir_p(dir) unless File.directory?(dir)
      end

      # A fresh conversation record. Not persisted until {#save}.
      def build(directory: nil, title: "New conversation")
        now = Time.now.iso8601
        {
          "id" => SecureRandom.uuid,
          "title" => title,
          "directory" => directory,
          "archived" => false,
          "messages" => [],
          "created_at" => now,
          "updated_at" => now
        }
      end

      # Persist a conversation, bumping updated_at and guessing a title when
      # the conversation is still untitled and has messages.
      def save(conv)
        conv["updated_at"] = Time.now.iso8601
        if conv["title"] == "New conversation" && conv["messages"].length >= 1
          conv["title"] = guess_title(conv["messages"])
        end
        db.transaction do
          db.set("conv:#{conv["id"]}", conv)
          db.list_append(CONVERSATIONS_KEY, conv["id"], max_length: MAX_CONVERSATIONS)
        end
        conv
      end

      # Load a conversation by id, or nil when missing.
      def load(id)
        data = db.get("conv:#{id}")
        data&.transform_keys(&:to_s)
      end

      def delete(id)
        db.transaction do
          db.delete("conv:#{id}")
          db.list_remove(CONVERSATIONS_KEY, id)
        end
      end

      # Conversation summaries (no messages), sorted by most recent first.
      def list(archived: false)
        ids = db.list_range(CONVERSATIONS_KEY, 0, -1)
        summaries = ids.filter_map do |id|
          data = db.get("conv:#{id}")
          next unless data
          next if data["archived"] == true && !archived
          summary(data)
        end
        summaries.sort_by { |c| c["updated_at"].to_s }.reverse
      end

      # Summaries for one workspace directory, most recent first.
      def list_for_directory(directory, archived: false)
        list(archived: archived).select { |c| c["directory"] == directory }
      end

      # Workspace directories that have conversations, with counts.
      def projects(archived: false)
        list(archived: archived).each_with_object(Hash.new(0)) do |c, counts|
          dir = c["directory"]
          counts[dir] += 1 if dir
        end.map { |dir, count| { "directory" => dir, "name" => File.basename(dir), "conversation_count" => count } }
      end

      def close
        @db&.close
        @db = nil
      end

      private

      def db
        @db ||= Ask::State::Providers::SQLite.new(path: @db_path)
      end

      def summary(data)
        {
          "id" => data["id"],
          "title" => data["title"] || "New conversation",
          "directory" => data["directory"],
          "archived" => data["archived"] == true,
          "message_count" => data["messages"]&.length || 0,
          "created_at" => data["created_at"],
          "updated_at" => data["updated_at"]
        }
      end

      def guess_title(messages)
        first = messages.find { |m| m["role"] == "user" }
        text = (first && first["content"]).to_s
        text.length > 40 ? text[0..40] + "…" : text
      end
    end
  end
end
