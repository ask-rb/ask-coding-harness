# frozen_string_literal: true

module Ask
  module CodingHarness
    # Configuration for the coding harness.
    #
    # Global instance: Ask::CodingHarness.config. Settings are read from
    # environment variables when not set explicitly, so a zero-config
    # `ach serve` works out of the box.
    #
    #   Ask::CodingHarness.configure do |c|
    #     c.workspace = "/path/to/project"
    #     c.model = "claude-sonnet-4"
    #     c.approval = :require
    #   end
    class Config
      # Default tools made available to the agent. All come from
      # ask-tools-shell and run through Ask::Sandbox.provider.
      DEFAULT_TOOLS = %w[bash read write edit glob grep code apply_patch].freeze

      # Tools that queue for human approval when approval mode is :require.
      DEFAULT_APPROVAL_REQUIRED = %w[bash write edit apply_patch code repl].freeze

      # Approval modes:
      #   :off      — never prompt; everything executes immediately
      #   :require  — mutating/dangerous tools queue for human approval
      #   :auto     — auto-approve everything (same as :off, but the queue
      #               exists and can be inspected)
      APPROVAL_MODES = %i[off require auto].freeze

      attr_accessor :host, :port, :workspace, :db_path, :model,
                    :max_turns, :turn_timeout, :approval, :approval_required,
                    :plan_mode, :todos, :tools, :adapter, :adapter_opts

      def initialize
        @host = ENV.fetch("ACH_HOST", "0.0.0.0")
        @port = (ENV["ACH_PORT"] || "8080").to_i
        @workspace = ENV["ACH_WORKSPACE"] || ENV["ASKODA_WORKSPACE"] || Dir.pwd
        @db_path = ENV["ACH_DB_PATH"] || ENV["ASKODA_DB_PATH"] || default_db_path
        @model = ENV["ACH_MODEL"] || ENV["ASK_AGENT_MODEL"] || "deepseek-v4-flash"
        @max_turns = (ENV["ACH_MAX_TURNS"] || ENV["ASK_AGENT_MAX_TURNS"] || "25").to_i
        @turn_timeout = (ENV["ACH_TURN_TIMEOUT"] || "600").to_i
        @approval = (ENV["ACH_APPROVAL"] || "require").to_sym
        @approval_required = DEFAULT_APPROVAL_REQUIRED.dup
        @plan_mode = env_flag("ACH_PLAN_MODE", default: false)
        @todos = env_flag("ACH_TODOS", default: true)
        @tools = DEFAULT_TOOLS.dup
        @adapter = ENV["ACH_ADAPTER"] || ENV["CODING_PROVIDER"] || "ask_agent"
        @adapter_opts = {}
        validate!
      end

      # True when the approval queue is active (mode :require or :auto).
      def approvals?
        %i[require auto].include?(@approval)
      end

      # True when mutating tools queue for human approval.
      def approval_required?
        @approval == :require
      end

      # Names of the tools the approval policy gates behind human approval.
      def approval_policy_tools
        return [] unless approval_required?
        Array(@approval_required).map(&:to_s)
      end

      private

      def env_flag(name, default:)
        case ENV[name]
        when "1", "true", "yes" then true
        when "0", "false", "no" then false
        else default
        end
      end

      def default_db_path
        File.join(Dir.pwd, "data", "ask-coding-harness.db")
      end

      def validate!
        unless APPROVAL_MODES.include?(@approval)
          raise ArgumentError, "approval must be one of #{APPROVAL_MODES.inspect}, got #{@approval.inspect}"
        end
        if @port.to_i <= 0 || @port.to_i > 65_535
          raise ArgumentError, "invalid port: #{@port.inspect}"
        end
        if @workspace.to_s.empty?
          raise ArgumentError, "workspace must not be empty"
        end
        if @max_turns.to_i <= 0
          raise ArgumentError, "max_turns must be positive"
        end
      end
    end
  end
end
