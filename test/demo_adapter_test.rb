# frozen_string_literal: true

require_relative "test_helper"
require "ask/coding_harness/demo_adapter"
require "fileutils"

class DemoAdapterTest < Minitest::Test
  def setup
    @workspace = Dir.mktmpdir("ach-demo-workspace")
    File.write(File.join(@workspace, "README.md"), "# Demo Workspace\n\nUsed by demo_adapter_test.\n")
  end

  def teardown
    FileUtils.remove_entry(@workspace) if @workspace && File.directory?(@workspace)
  end

  # Build a fresh adapter pointed at a temp workspace with a README, and
  # return the session id created via create_session.
  def start_turn(approval:)
    adapter = Ask::CodingHarness::DemoAdapter.new(approval: approval)
    sid = adapter.create_session(@workspace)
    [adapter, sid]
  end

  # Poll the collected events until approval.required shows up, then return
  # the actionId we need to approve/reject/abort. Runs on the main thread
  # while send_and_stream runs on a background thread.
  def wait_for_approval(events)
    deadline = Process.clock_gettime(Process::CLOCK_MONOTONIC) + 5
    loop do
      ev = events.find { |e| e[:type] == "approval.required" }
      return ev[:payload]["actionId"] if ev
      raise "approval.required never emitted" if Process.clock_gettime(Process::CLOCK_MONOTONIC) > deadline
      sleep 0.01
    end
  end

  def test_demo_adapter_is_registered
    resolved = Ask::CodingProviders.resolve_adapter(:demo)
    assert_equal Ask::CodingHarness::DemoAdapter, resolved
  end

  def test_autonomous_turn_completes_synchronously_with_full_event_sequence
    adapter, sid = start_turn(approval: :off)

    events = []
    adapter.send_and_stream(sid, "hi") { |ev| events << ev }

    types = events.map { |ev| ev[:type] }
    %w[turn.started todos.updated tool.use tool.result approval.required
       approval.updated turn.completed].each do |expected|
      assert_includes types, expected
    end

    # Events carry the {type:, payload:} shape.
    events.each do |ev|
      assert ev.key?(:type)
      assert ev.key?(:payload)
    end

    completed = events.find { |ev| ev[:type] == "turn.completed" }
    assert completed, "expected a turn.completed event"
    assert_equal "Demo turn completed.", completed[:payload]["response"]
  end

  def test_approval_required_turn_approves_from_main_thread
    adapter, sid = start_turn(approval: :require)

    events = []
    thread = Thread.new do
      adapter.send_and_stream(sid, "hi") { |ev| events << ev }
    end

    action_id = wait_for_approval(events)
    adapter.approve_action(sid, action_id)

    assert thread.join(10), "turn should complete within 10s"
    types = events.map { |ev| ev[:type] }
    assert_includes types, "turn.completed"

    updated = events.find { |ev| ev[:type] == "approval.updated" }
    assert_equal action_id, updated[:payload]["actionId"]
    assert_equal "approved", updated[:payload]["status"]
  end

  def test_approval_required_turn_rejects
    adapter, sid = start_turn(approval: :require)

    events = []
    thread = Thread.new do
      adapter.send_and_stream(sid, "hi") { |ev| events << ev }
    end

    action_id = wait_for_approval(events)
    adapter.reject_action(sid, action_id)

    assert thread.join(10), "turn should complete within 10s"
    types = events.map { |ev| ev[:type] }
    assert_includes types, "turn.completed"

    updated = events.find { |ev| ev[:type] == "approval.updated" }
    assert_equal action_id, updated[:payload]["actionId"]
    assert_equal "rejected", updated[:payload]["status"]
  end

  def test_approval_required_turn_aborts
    adapter, sid = start_turn(approval: :require)

    events = []
    thread = Thread.new do
      adapter.send_and_stream(sid, "hi") { |ev| events << ev }
    end

    wait_for_approval(events)
    adapter.abort(sid)

    assert thread.join(10), "turn should abort within 10s"
    types = events.map { |ev| ev[:type] }
    assert_includes types, "turn.aborted"
    refute_includes types, "turn.completed"
  end

  def test_pending_approvals_reports_the_queued_action
    adapter, sid = start_turn(approval: :require)

    events = []
    thread = Thread.new do
      adapter.send_and_stream(sid, "hi") { |ev| events << ev }
    end

    action_id = wait_for_approval(events)

    pending = adapter.pending_approvals(sid)
    assert_equal 1, pending.size
    action = pending.first
    assert_equal action_id, action["id"]
    assert_equal "apply_patch", action["tool_name"]
    assert_equal "pending", action["status"]

    adapter.approve_action(sid, action_id)
    assert thread.join(10)
    assert_empty adapter.pending_approvals(sid)
  end
end
