# frozen_string_literal: true

require "pathname"

module Ask
  module CodingHarness
    # Builds the agent system prompt, in the style of the pi coding agent:
    # a composable base (custom or default), tool-aware guidelines, project
    # context files injected as <project_context> (AGENTS.md / CLAUDE.md
    # walked from the workspace up to the filesystem root), an append
    # section, and the working directory as a closing footer.
    #
    #   SystemPrompt.build(workspace: "/path/to/project")
    #   SystemPrompt.build(workspace: "/p", custom: "...", append: "...",
    #                      guidelines: ["Always run tests"])
    class SystemPrompt
      # Files picked up per directory when building project context.
      CONTEXT_FILE_CANDIDATES = %w[AGENTS.md AGENTS.MD CLAUDE.md CLAUDE.MD].freeze

      # Context files larger than this are skipped (token hygiene).
      MAX_CONTEXT_FILE_SIZE = 64 * 1024

      # Guidelines always present, regardless of configuration.
      DEFAULT_GUIDELINES = [
        "Be concise in your responses",
        "Show file paths clearly when working with files",
        "Use absolute paths rooted at your working directory for all file and command operations",
        "Investigate before you act: read the relevant files before editing them",
        "Verify your work: run tests or checks after changing code",
        "Never claim an action you did not take"
      ].freeze

      DEFAULT_PROMPT = <<~PROMPT.chomp
        You are an expert coding assistant operating inside ask-coding-harness, a coding agent
        harness for the ask-rb ecosystem. You help users by reading files, executing commands,
        editing code, and writing new files. Work autonomously: investigate the project, make
        changes, and verify your work.
      PROMPT

      # Build the full system prompt for a workspace.
      #
      # @param workspace [String] the working directory (footer + context walk)
      # @param custom [String, nil] custom base prompt (replaces the default;
      #   project context, append, and footer are still added)
      # @param append [String, nil] extra text appended after project context
      # @param guidelines [Array<String>] extra guideline bullets
      # @param context_files [Array<Hash>, :auto, nil] explicit project context
      #   files ({path:, content:}), auto-discovered from the workspace walk,
      #   or none
      # @return [String]
      def self.build(workspace:, custom: nil, append: nil, guidelines: [],
                     context_files: :auto)
        files =
          case context_files
          when :auto then load_project_context(workspace)
          when nil then []
          else context_files
          end

        parts = []
        parts << (custom.nil? || custom.empty? ? DEFAULT_PROMPT : custom)
        parts << render_guidelines(guidelines)
        parts << render_project_context(files) unless files.empty?
        parts << append unless append.nil? || append.empty?
        parts << "Current working directory: #{workspace.to_s.tr("\\", "/")}"
        parts.reject { |p| p.nil? || p.empty? }.join("\n\n")
      end

      # Walk from the workspace up to the filesystem root, collecting the
      # nearest AGENTS.md / CLAUDE.md in each directory (nearest first,
      # deduplicated by realpath). Mirrors the pi coding agent's project
      # context discovery.
      #
      # @param workspace [String]
      # @return [Array<Hash>] [{path:, content:}]
      def self.load_project_context(workspace)
        files = []
        seen = {}

        dir = File.expand_path(workspace)
        loop do
          candidate = context_file_in(dir)
          if candidate && !seen.key?(candidate[:realpath])
            seen[candidate[:realpath]] = true
            files << candidate[:file]
          end

          parent = File.dirname(dir)
          break if parent == dir
          dir = parent
        end

        # Nearest first: the walk starts at the workspace.
        files
      end

      # The first existing context file in a directory, or nil.
      def self.context_file_in(dir)
        CONTEXT_FILE_CANDIDATES.each do |name|
          path = File.join(dir, name)
          next unless File.file?(path)
          size = File.size(path)
          next if size > MAX_CONTEXT_FILE_SIZE
          content = File.read(path, encoding: "UTF-8")
          return { file: { path: path, content: content }, realpath: File.realpath(path) }
        rescue SystemCallError, EncodingError
          next
        end
        nil
      end

      def self.render_guidelines(extra)
        list = DEFAULT_GUIDELINES.dup
        Array(extra).each do |g|
          normalized = g.to_s.strip
          list << normalized unless normalized.empty? || list.include?(normalized)
        end
        "Guidelines:\n" + list.map { |g| "- #{g}" }.join("\n")
      end

      def self.render_project_context(files)
        body = files.map do |f|
          "<project_instructions path=\"#{f[:path]}\">\n#{f[:content]}\n</project_instructions>"
        end.join("\n\n")
        "<project_context>\n\nProject-specific instructions and guidelines:\n\n#{body}\n</project_context>"
      end
    end
  end
end
