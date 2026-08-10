# frozen_string_literal: true

require_relative "test_helper"

# Tests for the headless Runner (`ach run`) — the dogfooding path.
class RunnerTest < Minitest::Test
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
  end

  def teardown
    Dir.chdir(@original_dir)
  end

  def test_run_returns_result_with_response
    build_chat_stub(sequence: [ResponseMessage.new(content: "headless answer")])
    runner = Ask::CodingHarness::Runner.new(config: @config, store: store_for)
    result = runner.run("Do the thing", quiet: true)

    assert result.success?
    assert_equal "headless answer", result.response
    assert result.events.any? { |e| e[:type] == "turn.completed" }
    assert result.conversation_id
    assert_nil result.error
  end

  def test_run_persists_conversation
    build_chat_stub(sequence: [ResponseMessage.new(content: "answer")])
    store = store_for
    runner = Ask::CodingHarness::Runner.new(config: @config, store: store)
    result = runner.run("Persist me", quiet: true)

    conv = store.load(result.conversation_id)
    assert_equal 2, conv["messages"].length
    assert_equal "Persist me", conv["messages"][0]["content"]
    assert_equal "answer", conv["messages"][1]["content"]
  end

  def test_run_forces_approval_off_by_default
    build_chat_stub(sequence: [ResponseMessage.new(content: "ok")])
    @config.approval = :require
    runner = Ask::CodingHarness::Runner.new(config: @config, store: store_for)
    result = runner.run("Anything", quiet: true)
    assert result.success?
  end

  def test_run_respects_approval_override
    build_chat_stub(sequence: [ResponseMessage.new(content: "ok")])
    runner = Ask::CodingHarness::Runner.new(config: @config, store: store_for, approval: :require)
    result = runner.run("Anything", quiet: true)
    assert result.success?
  end

  def test_run_failure_reports_error
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
        s.define_singleton_method(:ask) { |*| raise "headless boom" }
        s
      end
    )
    runner = Ask::CodingHarness::Runner.new(config: @config, store: store_for)
    result = runner.run("Break", quiet: true)

    refute result.success?
    assert_equal "headless boom", result.error
  end

  def test_run_prints_transcript_unless_quiet
    build_chat_stub(sequence: [ResponseMessage.new(content: "printed answer")])
    runner = Ask::CodingHarness::Runner.new(config: @config, store: store_for)
    out = StringIO.new
    original = $stdout
    $stdout = out
    begin
      runner.run("Speak", quiet: false)
    ensure
      $stdout = original
    end
    assert_includes out.string, "printed answer"
    assert_includes out.string, "turn completed"
  end

  def test_run_workspace_override
    build_chat_stub(sequence: [ResponseMessage.new(content: "ok")])
    runner = Ask::CodingHarness::Runner.new(config: @config, store: store_for)
    other = Dir.mktmpdir("ach-other")
    result = runner.run("hi", workspace: other, quiet: true)
    conv = store_for.load(result.conversation_id)
    assert_equal other, conv["directory"]
  end

  private

  def store_for
    @store ||= Ask::CodingHarness::Store.new(db_path: @config.db_path)
  end
end
