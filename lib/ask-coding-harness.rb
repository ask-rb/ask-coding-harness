# frozen_string_literal: true

require "ask/coding_harness/version"

module Ask
  # Ask Coding Harness — a general-purpose coding agent in the browser.
  #
  # Self-hosted web coding agent for the ask-rb ecosystem. Runs
  # Ask::Agent::Session against any workspace, streams every event to a
  # mobile-first PWA over SSE, and comes with an `ach` utility CLI for
  # headless runs.
  #
  #   Ask::CodingHarness.configure do |c|
  #     c.workspace = "/path/to/project"
  #     c.model = "deepseek-v4-flash"
  #   end
  #
  #   Ask::CodingHarness.run_server
  module CodingHarness
    class << self
      # Global configuration. See Config for available settings.
      def config
        @config ||= Config.new
      end

      # Configure the harness. Yields the global Config instance.
      def configure
        yield config if block_given?
        config
      end

      # Run the web server (blocking). See CLI for the non-blocking path.
      def run_server(host: nil, port: nil)
        require_relative "ask/coding_harness/server"
        require "rackup"

        store = Store.new(db_path: config.db_path)
        runner = AgentRunner.new(config: config, store: store)
        app = Server.build(config: config, store: store, runner: runner).freeze.app
        Rackup::Server.start(app: app, Host: host || config.host, Port: port || config.port)
      end

      # Run a prompt headlessly against the workspace and return the result.
      #
      # @param prompt [String] the task to run
      # @param workspace [String, nil] overrides config.workspace
      # @return [Ask::CodingHarness::Runner::Result]
      def run(prompt, workspace: nil, **opts)
        require_relative "ask/coding_harness/runner"
        Runner.new(config: config).run(prompt, workspace: workspace, **opts)
      end
    end
  end
end

require "ask-tools-shell"
require "ask-state-providers"
require "ask/coding_harness/config"
require "ask/coding_harness/store"
require "ask/coding_harness/event_translator"
require "ask/coding_harness/system_prompt"
require "ask/coding_harness/agent_runner"
require "ask/coding_harness/runner"
