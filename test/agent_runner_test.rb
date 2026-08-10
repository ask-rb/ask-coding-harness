# frozen_string_literal: true

require_relative "test_helper"

# Integration tests for AgentRunner: a REAL ask-agent runtime (via the
# ask_agent adapter) with a stubbed chat, verifying streaming, persistence,
# approvals, plans, and abort through the full harness stack.
class AgentRunnerTest < Minitest::Test
  include CodingHarnessTestHelpers

  class EchoTool < Ask::Tool
    description "Echo the given text back"
    param :text, type: :string, required: true

    def execute(text:)
      Ask::Result.ok(data: { echoed: text })
    end
  end

  def setup
    @original_dir = Dir.pwd
    stub_provider_resolution
    @config = harness_config
    @store = Ask::CodingHarness::Store.new(db_path: @config.db_path)
    @runner = Ask::CodingHarness::AgentRunner.new(config: @config, store: @store)
  end

  def teardown
    @runner&.stop
    @store&.close
    Dir.chdir(@original_dir)
  end

  def run_turn(prompt, conversation: nil, model: nil, timeout: 15)
    conversation ||= @store.save(@store.build(directory: @config.workspace))
    events = []
    thread = @runner.start_turn(conversation, prompt, model: model) do |ev|
      events << ev
    end
    thread.join(timeout)
    err = events.find { |e| e[:type] == "error" }
    refute thread.alive?, "turn should finish"
    [events, conversation]
  end

  def wait_for(events, type, timeout: 10)
    deadline = Time.now + timeout
    sleep 0.01 until events.any? { |e| e[:type] == type } || Time.now > deadline
    event = events.find { |e| e[:type] == type }
    raise "Timed out waiting for #{type}; got #{events.map { |e| e[:type] }.inspect}" unless event
    event
  end

  # ── Basic turns ──

  def test_turn_streams_events_and_persists_assistant_message
    build_chat_stub(sequence: [ResponseMessage.new(content: "Hello from the agent")])
    events, conversation = run_turn("Say hello")

    types = events.map { |e| e[:type] }
    assert_includes types, "turn.started"
    assert_includes types, "message.delta"
    assert_includes types, "turn.completed"

    # Assistant message persisted to the store.
    conv = @store.load(conversation["id"])
    assert_equal 2, conv["messages"].length
    assert_equal "user", conv["messages"][0]["role"]
    assert_equal "assistant", conv["messages"][1]["role"]
    assert_equal "Hello from the agent", conv["messages"][1]["content"]
  end

  def test_turn_persists_user_message
    build_chat_stub(sequence: [ResponseMessage.new(content: "ok")])
    conversation = @store.save(@store.build(directory: @config.workspace))
    run_turn("The task", conversation: conversation)
    conv = @store.load(conversation["id"])
    assert_equal "The task", conv["messages"].first["content"]
  end

  def test_second_turn_continues_same_session
    build_chat_stub(sequence: [
      ResponseMessage.new(content: "first"),
      ResponseMessage.new(content: "second")
    ])
    conversation = @store.save(@store.build(directory: @config.workspace))
    run_turn("First question", conversation: conversation)
    run_turn("Second question", conversation: conversation)

    conv = @store.load(conversation["id"])
    assert_equal 4, conv["messages"].length
    assert_equal "First question", conv["messages"][0]["content"]
    assert_equal "Second question", conv["messages"][2]["content"]
  end

  def test_running_tracking
    build_chat_stub(sequence: [ResponseMessage.new(content: "ok")])
    conversation = @store.save(@store.build(directory: @config.workspace))
    events = []
    thread = @runner.start_turn(conversation, "hi") { |ev| events << ev }
    assert @runner.running?(conversation["id"])
    thread.join(15)
    refute @runner.running?(conversation["id"])
  end

  def test_empty_prompt_raises
    conversation = @store.save(@store.build(directory: @config.workspace))
    assert_raises(ArgumentError) do
      @runner.start_turn(conversation, "   ")
    end
  end

  # ── Tool events ──

  def test_tool_events_stream_through_with_custom_tool
    config = harness_config
    config.tools = ["echo"]
    @runner.stop
    @store.close
    @store = Ask::CodingHarness::Store.new(db_path: config.db_path)
    @runner = Ask::CodingHarness::AgentRunner.new(
      config: config, store: @store, tool_classes: { "echo" => EchoTool }
    )

    build_chat_stub(sequence: [
      ResponseMessage.new(content: "", tool_calls: { "call_1" => tool_call("echo", '{"text":"hi"}') }),
      ResponseMessage.new(content: "done")
    ])
    events, _conv = run_turn("Echo", timeout: 20)
    start = events.find { |e| e[:type] == "tool.start" }
    assert_equal "echo", start[:data][:name]
    assert_equal({ "text" => "hi" }, start[:data][:args])
    end_ev = events.find { |e| e[:type] == "tool.end" }
    refute_nil end_ev
    assert_equal false, end_ev[:data][:isError]
  end

  def test_unknown_tool_raises_at_adapter_build
    config = harness_config
    config.tools = ["nonexistent_tool"]
    @runner.stop
    @store.close
    @store = Ask::CodingHarness::Store.new(db_path: config.db_path)
    @runner = Ask::CodingHarness::AgentRunner.new(config: config, store: @store)

    conversation = @store.save(@store.build(directory: config.workspace))
    events = []
    @runner.start_turn(conversation, "hi") { |ev| events << ev }.join(10)
    error = events.find { |e| e[:type] == "error" }
    refute_nil error
    assert_includes error[:data][:error], "Unknown tool"
  end

  def tool_call(name, arguments)
    Ask::Agent::ToolCallInfo.new(id: "call_1", name: name, arguments: arguments)
  end

  # ── Approvals ──

  def test_approval_flow_through_runner
    build_chat_stub(sequence: [
      ResponseMessage.new(content: "", tool_calls: { "call_1" => tool_call("echo", '{"text":"hi"}') }),
      ResponseMessage.new(content: "approved, done")
    ])
    config = harness_config
    config.approval = :require
    config.tools = ["echo"]
    config.approval_required = ["echo"]
    @runner.stop
    @store.close
    @store = Ask::CodingHarness::Store.new(db_path: config.db_path)
    @runner = Ask::CodingHarness::AgentRunner.new(
      config: config, store: @store, tool_classes: { "echo" => EchoTool }
    )

    conversation = @store.save(@store.build(directory: config.workspace))
    events = []
    thread = @runner.start_turn(conversation, "Echo") { |ev| events << ev }

    wait_for(events, "approval.required")
    required = events.find { |e| e[:type] == "approval.required" }
    pending = @runner.pending_approvals(conversation["id"])
    assert_equal 1, pending.size

    @runner.approve(conversation["id"], required[:data][:id])
    thread.join(20)
    refute thread.alive?, "turn should finish after approval"

    assert events.any? { |e| e[:type] == "approval.updated" }
    assert events.any? { |e| e[:type] == "turn.completed" }
    assert_empty @runner.pending_approvals(conversation["id"])
  end

  def test_approve_all_and_reject
    build_chat_stub(sequence: [
      ResponseMessage.new(content: "", tool_calls: { "call_1" => tool_call("echo", '{"text":"hi"}') }),
      ResponseMessage.new(content: "done")
    ])
    config = harness_config
    config.approval = :require
    config.tools = ["echo"]
    config.approval_required = ["echo"]
    @runner.stop
    @store.close
    @store = Ask::CodingHarness::Store.new(db_path: config.db_path)
    @runner = Ask::CodingHarness::AgentRunner.new(
      config: config, store: @store, tool_classes: { "echo" => EchoTool }
    )

    conversation = @store.save(@store.build(directory: config.workspace))
    events = []
    thread = @runner.start_turn(conversation, "Echo") { |ev| events << ev }
    wait_for(events, "approval.required")

    @runner.approve_all(conversation["id"])
    thread.join(20)
    assert events.any? { |e| e[:type] == "turn.completed" }

    # Reject path
    build_chat_stub(sequence: [
      ResponseMessage.new(content: "", tool_calls: { "call_1" => tool_call("echo", '{"text":"hi"}') }),
      ResponseMessage.new(content: "done")
    ])
    conversation2 = @store.save(@store.build(directory: config.workspace))
    events2 = []
    thread2 = @runner.start_turn(conversation2, "Echo") { |ev| events2 << ev }
    wait_for(events2, "approval.required")
    required2 = events2.find { |e| e[:type] == "approval.required" }
    @runner.reject(conversation2["id"], required2[:data][:id])
    thread2.join(20)
    updated = events2.find { |e| e[:type] == "approval.updated" }
    assert_equal "rejected", updated[:data][:status]
  end

  # ── Abort ──

  def test_abort_via_runner
    build_chat_stub(sequence: [
      ResponseMessage.new(content: "", tool_calls: { "call_1" => tool_call("echo", '{"text":"hi"}') })
    ])
    config = harness_config
    config.approval = :require
    config.tools = ["echo"]
    config.approval_required = ["echo"]
    @runner.stop
    @store.close
    @store = Ask::CodingHarness::Store.new(db_path: config.db_path)
    @runner = Ask::CodingHarness::AgentRunner.new(
      config: config, store: @store, tool_classes: { "echo" => EchoTool }
    )

    conversation = @store.save(@store.build(directory: config.workspace))
    events = []
    thread = @runner.start_turn(conversation, "Echo") { |ev| events << ev }
    wait_for(events, "approval.required")

    @runner.abort(conversation["id"])
    thread.join(15)

    assert events.any? { |e| e[:type] == "turn.aborted" }
    conv = @store.load(conversation["id"])
    assert_equal "Turn aborted.", conv["messages"].last["content"]
  end

  # ── Failure ──

  def test_failed_turn_persists_error_message
    build_chat_stub(sequence: [ResponseMessage.new(content: "boom")])
    Ask::Agent::Chat.stubs(:new).returns(
      begin
        s = Object.new
        s.define_singleton_method(:model) { "x" }
        s.define_singleton_method(:model_id) { "x" }
        s.define_singleton_method(:messages) { [] }
        s.define_singleton_method(:with_instructions) { |_| s }
        s.define_singleton_method(:reset_messages!) {}
        s.define_singleton_method(:add_message) { |**| }
        s.define_singleton_method(:ask) { |*| raise "provider exploded" }
        s
      end
    )

    conversation = @store.save(@store.build(directory: @config.workspace))
    events = []
    thread = @runner.start_turn(conversation, "Break it") { |ev| events << ev }
    thread.join(15)

    failed = events.find { |e| e[:type] == "turn.failed" }
    refute_nil failed
    assert_equal "provider exploded", failed[:data][:error]

    conv = @store.load(conversation["id"])
    assert_equal "The turn failed.", conv["messages"].last["content"]
  end

  # ── External adapters (ACP-style) ──

  def test_external_adapter_without_approval_controls_is_noop
    # An adapter that supports only create_session + send_and_stream (like
    # the acp adapter) — approval controls must degrade to no-ops.
    external = Class.new do
      def initialize; end
      def start; end
      def stop; end
      def create_session(_workspace, model: nil)
        "external_sid"
      end
      def send_and_stream(_sid, prompt, turn_timeout: 600.0, &block)
        block.call({ type: "turn.started", seq: 1, payload: {} })
        block.call({ type: "model.streaming", seq: 2, payload: { "delta" => "external reply" } })
        block.call({ type: "turn.completed", seq: 3, payload: { "response" => "external reply" } })
      end
    end

    @runner.stop
    @config.adapter = "external"
    # Swap the adapter factory: the runner builds via build_adapter, so
    # stub the private method for this test.
    @runner.stubs(:build_adapter).returns(external.new)

    conversation = @store.save(@store.build(directory: @config.workspace))
    events, _conv = run_turn("Hello external")

    assert events.any? { |e| e[:type] == "message.delta" && e[:data][:delta] == "external reply" }
    assert events.any? { |e| e[:type] == "turn.completed" }
    assert_equal [], @runner.pending_approvals(conversation["id"])
    assert_nil @runner.approve(conversation["id"], 1)
    assert_nil @runner.abort(conversation["id"])
  end
end
