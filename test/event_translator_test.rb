# frozen_string_literal: true

require_relative "test_helper"

class EventTranslatorTest < Minitest::Test
  def setup
    @translator = Ask::CodingHarness::EventTranslator.new
  end

  def translate(type, payload = {})
    @translator.translate({ type: type, payload: payload })
  end

  # ── ask_agent rich events ──

  def test_turn_started
    assert_equal({ type: "turn.started", data: {} }, translate("turn.started", { "sessionId" => "s1" }))
  end

  def test_model_streaming
    assert_equal({ type: "message.delta", data: { delta: "hello" } }, translate("model.streaming", { "delta" => "hello" }))
  end

  def test_model_thinking
    assert_equal({ type: "message.thinking", data: { delta: "hmm" } }, translate("model.thinking", { "delta" => "hmm" }))
  end

  def test_tool_use
    result = translate("tool.use", { "toolName" => "bash", "input" => "ls", "toolCallId" => "call_1" })
    assert_equal "tool.start", result[:type]
    assert_equal "bash", result[:data][:name]
    assert_equal "ls", result[:data][:args]
    assert_equal "call_1", result[:data][:id]
  end

  def test_tool_delta
    result = translate("tool.delta", { "toolName" => "bash", "partial" => "out", "toolCallId" => "call_1" })
    assert_equal "tool.delta", result[:type]
    assert_equal "out", result[:data][:partial]
  end

  def test_tool_result
    result = translate("tool.result", {
      "toolName" => "bash", "output" => "done", "isError" => false, "durationMs" => 42, "toolCallId" => "call_1"
    })
    assert_equal "tool.end", result[:type]
    assert_equal "done", result[:data][:output]
    assert_equal false, result[:data][:isError]
    assert_equal 42, result[:data][:durationMs]
  end

  def test_approval_required
    result = translate("approval.required", {
      "actionId" => 7, "toolName" => "bash", "args" => { "command" => "rm -rf" }, "message" => "Calling bash requires approval"
    })
    assert_equal "approval.required", result[:type]
    assert_equal 7, result[:data][:id]
    assert_equal "bash", result[:data][:toolName]
    assert_equal({ "command" => "rm -rf" }, result[:data][:args])
  end

  def test_approval_updated
    result = translate("approval.updated", { "actionId" => 7, "status" => "approved" })
    assert_equal "approval.updated", result[:type]
    assert_equal 7, result[:data][:id]
    assert_equal "approved", result[:data][:status]
  end

  def test_plan_events
    assert_equal "plan.proposed", translate("plan.proposed", { "plan" => "Step 1" })[:type]
    assert_equal({ plan: "Step 1" }, translate("plan.proposed", { "plan" => "Step 1" })[:data])
    assert_equal "plan.approved", translate("plan.approved", { "plan" => "P" })[:type]
    assert_equal "plan.rejected", translate("plan.rejected", { "plan" => "P" })[:type]
  end

  def test_todos_updated
    result = translate("todos.updated", { "todos" => [{ "title" => "a" }] })
    assert_equal "todos.updated", result[:type]
    assert_equal [{ "title" => "a" }], result[:data][:todos]
  end

  def test_turn_completed
    result = translate("turn.completed", { "response" => "done" })
    assert_equal "turn.completed", result[:type]
    assert_equal "done", result[:data][:response]
  end

  def test_turn_failed_with_hash_error
    result = translate("turn.failed", { "error" => { "message" => "boom" } })
    assert_equal "boom", result[:data][:error]
  end

  def test_turn_failed_with_string_error
    result = translate("turn.failed", { "error" => "plain boom" })
    assert_equal "plain boom", result[:data][:error]
  end

  def test_turn_aborted
    assert_equal({ type: "turn.aborted", data: {} }, translate("turn.aborted"))
  end

  def test_error_event
    result = translate("error", { "error" => { "message" => "fatal" } })
    assert_equal "error", result[:type]
    assert_equal "fatal", result[:data][:error]
  end

  # ── acp basic events (compat) ──

  def test_acp_tool_use_without_call_id
    result = translate("tool.use", { "toolName" => "read", "input" => "Gemfile" })
    assert_equal "tool.start", result[:type]
    assert_nil result[:data][:id]
    assert_equal "Gemfile", result[:data][:args]
  end

  def test_acp_tool_result_without_metadata
    result = translate("tool.result", { "toolName" => "read", "output" => "content" })
    assert_equal "tool.end", result[:type]
    assert_equal false, result[:data][:isError]
    assert_nil result[:data][:durationMs]
  end

  # ── unknown events ──

  def test_unknown_events_translate_to_nil
    assert_nil translate("something.else")
    assert_nil translate("session.created")
  end

  # ── args normalization ──

  def test_tool_use_parses_json_string_args
    result = translate("tool.use", { "toolName" => "bash", "input" => '{"command":"ls"}' })
    assert_equal({ "command" => "ls" }, result[:data][:args])
  end

  def test_tool_use_keeps_unparseable_args
    result = translate("tool.use", { "toolName" => "bash", "input" => "not json" })
    assert_equal "not json", result[:data][:args]
  end
end
