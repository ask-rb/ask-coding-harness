# frozen_string_literal: true

require "find"
require "set"

module Ask
  module CodingHarness
    # The workspace the agent operates on: file listing and secure reads.
    #
    # All paths are relative to the workspace root and are resolved against
    # it with containment checks (no `..` escapes, no symlinks out of the
    # root, no absolute paths). Binary files, ignored directories, dotfiles,
    # and files above the size cap are excluded from listings.
    class Workspace
      FILE_LIST_CACHE_TTL = 5 # seconds

      DEFAULT_IGNORE_DIRS = %w[.git node_modules vendor/bundle tmp log .DS_Store coverage
                               dist build .svelte-kit data].freeze

      BINARY_EXTS = %w[.png .jpg .jpeg .gif .ico .svg .woff .woff2 .eot .ttf .otf
                       .mp4 .mp3 .zip .gz .tar .exe .dll .so .o .pyc .db .sqlite
                       .sqlite3 .gem].to_set.freeze

      MAX_FILE_SIZE = 1_048_576 # 1 MB

      # @param root [String] absolute path to the workspace root
      def initialize(root:, ignore_dirs: DEFAULT_IGNORE_DIRS, binary_exts: BINARY_EXTS,
                     max_file_size: MAX_FILE_SIZE)
        @root = File.expand_path(root)
        @ignore_dirs = Array(ignore_dirs).to_set
        @binary_exts = binary_exts
        @max_file_size = max_file_size
        @mutex = Mutex.new
        invalidate_cache
      end

      # @return [String] absolute path to the workspace root
      attr_reader :root

      # @return [String] basename of the workspace root (display name)
      def name
        File.basename(@root)
      end

      # Current git branch, or nil when the workspace is not a git repo.
      def git_branch
        head = File.join(@root, ".git", "HEAD")
        return nil unless File.file?(head)
        ref = File.read(head).strip
        return nil unless ref.start_with?("ref:")
        ref.split("/").last
      rescue SystemCallError
        nil
      end

      # Recursively list workspace files, relative to the root.
      # Cached for FILE_LIST_CACHE_TTL seconds; call {#invalidate_cache}
      # when the workspace may have changed.
      #
      # @return [Array<String>] sorted relative paths
      def files
        now = Time.now
        return @cached_files if @cached_files && (now - @cached_at) < FILE_LIST_CACHE_TTL

        list = compute_file_list
        @mutex.synchronize do
          @cached_files = list
          @cached_at = now
        end
        list
      end

      # Read a file relative to the workspace root.
      #
      # @param path [String] relative path
      # @return [String] file contents
      # @raise [ArgumentError] when the path is invalid (escape, absolute, directory)
      # @raise [Errno::ENOENT] when the file does not exist
      def read(path)
        full = resolve(path)
        raise ArgumentError, "Path is a directory" if File.directory?(full)
        File.read(full, encoding: "UTF-8")
      end

      # Whether a relative path exists inside the workspace.
      def exist?(path)
        File.file?(resolve(path))
      rescue ArgumentError
        false
      end

      # Resolve a relative path against the root, guarding against escapes.
      #
      # @raise [ArgumentError] when the path is empty, absolute, or escapes
      #   the workspace root (via `..` or a symlink)
      def resolve(path)
        rel = path.to_s.strip
        raise ArgumentError, "path must not be empty" if rel.empty?
        raise ArgumentError, "path must be relative" if rel.start_with?("/")
        parts = rel.split("/")
        raise ArgumentError, "invalid path" if parts.any? { |p| p == ".." || p.empty? }

        candidate = File.expand_path(rel, @root)
        unless candidate.start_with?(@root + File::SEPARATOR) || candidate == @root
          raise ArgumentError, "invalid path"
        end
        # Reject symlinks that point outside the workspace root.
        real = File.realpath(candidate) rescue candidate
        unless real.start_with?(@root + File::SEPARATOR) || real == @root
          raise ArgumentError, "path escapes workspace"
        end
        candidate
      end

      def invalidate_cache
        @cached_files = nil
        @cached_at = nil
      end

      private

      def compute_file_list
        result = []
        return result unless File.directory?(@root)
        Find.find(@root) do |path|
          rel = path.sub("#{@root}/", "")
          next if rel.empty?
          parts = rel.split("/")
          next if parts.any? { |p| @ignore_dirs.include?(p) || p.start_with?(".") }
          next unless File.file?(path)
          ext = File.extname(path).downcase
          next if @binary_exts.include?(ext)
          next if File.size(path) > @max_file_size
          result << rel
        end
        result.sort!
      end
    end
  end
end
