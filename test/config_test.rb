# frozen_string_literal: true

require_relative "test_helper"

class ConfigTest < Minitest::Test
  def test_defaults_from_env
    old = ENV.to_h.slice("ACH_MODEL", "ACH_APPROVAL", "ACH_PORT", "ACH_WORKSPACE")
    ENV["ACH_MODEL"] = "test-model"
    ENV["ACH_APPROVAL"] = "auto"
    ENV["ACH_PORT"] = "9999"
    ENV["ACH_WORKSPACE"] = "/tmp/ws"
    config = Ask::CodingHarness::Config.new
    assert_equal "test-model", config.model
    assert_equal :auto, config.approval
    assert_equal 9999, config.port
    assert_equal "/tmp/ws", config.workspace
  ensure
    %w[ACH_MODEL ACH_APPROVAL ACH_PORT ACH_WORKSPACE].each do |k|
      old.key?(k) ? ENV[k] = old[k] : ENV.delete(k)
    end
  end

  def test_default_approval_is_require
    config = Ask::CodingHarness::Config.new
    assert_equal :require, config.approval
    assert config.approval_required?
    assert config.approvals?
  end

  def test_approval_modes
    config = Ask::CodingHarness::Config.new
    config.approval = :off
    refute config.approvals?
    refute config.approval_required?

    config.approval = :auto
    assert config.approvals?
    refute config.approval_required?
    assert_empty config.approval_policy_tools
  end

  def test_require_mode_gates_default_dangerous_tools
    config = Ask::CodingHarness::Config.new
    tools = config.approval_policy_tools
    assert_includes tools, "bash"
    assert_includes tools, "write"
    assert_includes tools, "edit"
  end

  def test_custom_approval_required_list
    config = Ask::CodingHarness::Config.new
    config.approval_required = ["special_tool"]
    assert_equal ["special_tool"], config.approval_policy_tools
  end

  def test_invalid_approval_mode_raises
    assert_raises(ArgumentError) do
      config = Ask::CodingHarness::Config.new
      config.approval = :sometimes
    end
  end

  def test_invalid_port_raises
    assert_raises(ArgumentError) do
      config = Ask::CodingHarness::Config.new
      config.port = 0
    end
  end

  def test_todos_and_plan_mode_flags
    config = Ask::CodingHarness::Config.new
    assert_equal true, config.todos
    assert_equal false, config.plan_mode
    config.plan_mode = true
    assert config.plan_mode
  end

  def test_configure_block
    Ask::CodingHarness.configure do |c|
      c.model = "configured-model"
    end
    assert_equal "configured-model", Ask::CodingHarness.config.model
  ensure
    Ask::CodingHarness.config.model = ENV["ACH_MODEL"] || "deepseek-v4-flash"
  end
end
