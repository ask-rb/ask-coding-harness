# frozen_string_literal: true

require "optparse"

module Ask
  module CodingHarness
    # Command-line interface for the coding harness.
    #
    #   ach serve                Start the web server (default)
    #   ach run "task"           Run a prompt headlessly against the workspace
    #   ach sessions             List saved conversations
    #   ach version              Print the version
    #   ach help                 Show help
    #
    # The `ask-coding-harness` executable runs `serve` by default.
    class CLI
      def self.run(argv, stdout: $stdout, stderr: $stderr)
        new(argv, stdout: stdout, stderr: stderr).run
      end

      def initialize(argv, stdout: $stdout, stderr: $stderr)
        @argv = argv.dup
        @stdout = stdout
        @stderr = stderr
        # Fresh config per invocation: the CLI is a process boundary and
        # must honor the environment at launch, not a memoized global.
        @config = Ask::CodingHarness::Config.new
      end

      def run
        command = @argv.shift || "serve"
        case command
        when "serve", "server" then serve
        when "demo" then serve(demo: true)
        when "run" then run_headless
        when "sessions" then list_sessions
        when "version", "--version", "-v" then @stdout.puts Ask::CodingHarness::VERSION
        when "help", "--help", "-h" then help
        else
          @stderr.puts "Unknown command: #{command}"
          help
          exit 1
        end
      end

      private

      def serve(demo: false)
        if demo
          @config.adapter = "demo"
          require "ask/coding_harness/demo_adapter"
          @stdout.puts "demo mode: scripted agent, no API key needed"
        end
        options = { host: @config.host, port: @config.port }
        parser = OptionParser.new do |o|
          o.banner = "Usage: ach serve [options]"
          o.on("-H", "--host HOST", "Bind host (default #{@config.host})") { |v| options[:host] = v }
          o.on("-p", "--port PORT", Integer, "Port (default #{@config.port})") { |v| options[:port] = v }
          o.on("-w", "--workspace DIR", "Workspace directory (default #{@config.workspace})") { |v| @config.workspace = v }
          o.on("--model MODEL", "Default model") { |v| @config.model = v }
          o.on("--approval MODE", "off|require|auto") { |v| @config.approval = v.to_sym }
          o.on("--plan-mode", "Enable plan mode") { @config.plan_mode = true }
          o.on("--no-todos", "Disable the todo list") { @config.todos = false }
          o.on("-h", "--help", "Show help") { puts o; return }
        end
        parser.parse!(@argv)

        require "ask/coding_harness/server"
        require "rackup"
        @stdout.puts "ask-coding-harness #{Ask::CodingHarness::VERSION}"
        @stdout.puts "workspace: #{@config.workspace}"
        @stdout.puts "model:     #{@config.model}"
        @stdout.puts "approval:  #{@config.approval}"
        @stdout.puts "listening: http://#{options[:host]}:#{options[:port]}"
        store = Store.new(db_path: @config.db_path)
        runner = AgentRunner.new(config: @config, store: store)
        app = Server.build(config: @config, store: store, runner: runner).freeze.app
        Rackup::Server.start(app: app, Host: options[:host], Port: options[:port])
      end

      def run_headless
        options = { quiet: false, model: nil, workspace: nil, approval: :off, adapter: nil }
        parser = OptionParser.new do |o|
          o.banner = "Usage: ach run [options] \"prompt\""
          o.on("-w", "--workspace DIR", "Workspace directory") { |v| options[:workspace] = v }
          o.on("--model MODEL", "Model to use") { |v| options[:model] = v }
          o.on("--adapter NAME", "Coding agent adapter (ask_agent, demo, acp, ...)") { |v| options[:adapter] = v }
          o.on("--approval MODE", "off|require|auto (default off)") { |v| options[:approval] = v.to_sym }
          o.on("-q", "--quiet", "Suppress the transcript") { options[:quiet] = true }
          o.on("-h", "--help", "Show help") { puts o; return }
        end
        parser.parse!(@argv)
        if options[:adapter] == "demo"
          require "ask/coding_harness/demo_adapter"
        end
        @config.adapter = options[:adapter] if options[:adapter]

        prompt = @argv.join(" ").strip
        if prompt.empty?
          @stderr.puts "Error: a prompt is required"
          @stderr.puts "Usage: ach run [options] \"prompt\""
          exit 1
        end

        @config.workspace = options[:workspace] if options[:workspace]
        require "ask/coding_harness/runner"
        result = Runner.new(config: @config, approval: options[:approval]).run(
          prompt, model: options[:model], quiet: options[:quiet]
        )
        exit(result.success? ? 0 : 1)
      end

      def list_sessions
        store = Store.new(db_path: @config.db_path)
        conversations = store.list
        if conversations.empty?
          @stdout.puts "No conversations yet."
          return
        end
        conversations.each do |c|
          @stdout.puts "#{c["id"][0, 8]}  #{c["title"]}  (#{c["message_count"]} messages, #{c["updated_at"]})"
        end
      end

      def help
        @stdout.puts <<~HELP
          ask-coding-harness #{Ask::CodingHarness::VERSION} — general-purpose coding agent in the browser.

          Usage:
            ach serve                Start the web server (default)
            ach demo                 Serve with the scripted demo agent (no API key)
            ach run "task"           Run a prompt headlessly in the workspace
            ach sessions             List saved conversations
            ach version              Print the version
            ach help                 Show this help

          Environment:
            ACH_WORKSPACE     workspace directory (default: current dir)
            ACH_HOST / ACH_PORT
            ACH_MODEL         default model
            ACH_ADAPTER       coding agent adapter: ask_agent (default) or any
                              ask-coding-providers adapter (acp, codex, claude)
            ACH_APPROVAL      off | require | auto (default: require)
            ACH_PLAN_MODE     enable plan mode (1/true)
            ACH_TODOS         todo list (default: on)
            ACH_DB_PATH       conversation database path
        HELP
      end
    end
  end
end
