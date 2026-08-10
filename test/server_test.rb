# frozen_string_literal: true

require_relative "test_helper"
require "rack/test"

class ServerTest < Minitest::Test
  include Rack::Test::Methods
  include CodingHarnessTestHelpers

  def setup
    @config = harness_config
    @store = Ask::CodingHarness::Store.new(db_path: @config.db_path)
    @runner = stub("runner")
    @app = Ask::CodingHarness::Server.build(config: @config, store: @store, runner: @runner)
  end

  def teardown
    @store.close
  end

  def app
    @app
  end

  # A fake turn thread that yields the given events then finishes.
  def fake_turn_thread(*events)
    Thread.new do
      events.each { |ev| yield(ev) if block_given? }
    end
  end

  def stub_chat_turn(events)
    @runner.stubs(:start_turn).with(anything, anything, anything).returns(fake_turn_thread(*events))
  end

  # ── Workspace / config ──

  def test_config_endpoint
    get "/api/config"
    assert_equal 200, last_response.status
    body = JSON.parse(last_response.body)
    assert_kind_of Array, body["models"]
    assert_kind_of String, body["defaultModel"]
    assert_equal "ask_agent", body["currentAdapter"]
    assert_equal File.basename(@config.workspace), body["workspace"]["name"]
    assert_equal true, body["features"]["todos"]
  end

  def test_workspace_endpoint
    get "/api/workspace"
    assert_equal 200, last_response.status
    body = JSON.parse(last_response.body)
    assert_equal File.basename(@config.workspace), body["name"]
    assert_equal @config.workspace, body["root"]
  end

  # ── Conversation CRUD ──

  def test_chat_creates_conversation_and_streams_sse
    @runner.stubs(:start_turn).returns(Thread.new {}).with { |conv, prompt, opts|
      assert_equal "Hello", prompt
      true
    }

    post "/api/chat", { message: "Hello" }.to_json, { "CONTENT_TYPE" => "application/json" }
    assert_equal 200, last_response.status
    assert_includes last_response.headers["Content-Type"], "text/event-stream"
    assert_includes last_response.body, "event: conversation.created"
    assert_includes last_response.body, "event: turn.started"
  end

  def test_chat_requires_message
    post "/api/chat", {}.to_json, { "CONTENT_TYPE" => "application/json" }
    assert_equal 400, last_response.status
  end

  def test_chat_streams_translated_events
    @runner.stubs(:start_turn)
      .with(anything, anything, anything)
      .yields({ type: "message.delta", data: { delta: "hi " } })
      .yields({ type: "message.delta", data: { delta: "there" } })
      .yields({ type: "tool.start", data: { name: "bash", args: {} } })
      .yields({ type: "turn.completed", data: { response: "hi there" } })
      .returns(Thread.new {})

    post "/api/chat", { message: "Say hi" }.to_json, { "CONTENT_TYPE" => "application/json" }
    # rack-test captures the first streamed chunk; the full event flow is
    # covered by the translator + runner tests and the browser tests.
    assert_includes last_response.body, "event: conversation.created"
    assert_includes last_response.body, "event: turn.started"
    assert_includes last_response.body, "event: message.delta"
    assert_includes last_response.body, 'data: {"delta":"hi "}'
  end

  def test_chat_with_existing_conversation_does_not_emit_created
    conv = @store.save(@store.build(directory: @config.workspace))
    @runner.stubs(:start_turn).returns(Thread.new {})
    post "/api/chat", { message: "Again", conversation_id: conv["id"] }.to_json, { "CONTENT_TYPE" => "application/json" }
    refute_includes last_response.body, "event: conversation.created"
  end

  def test_conversations_list_and_get
    conv = @store.save(@store.build(directory: @config.workspace))
    get "/api/conversations"
    assert_equal 200, last_response.status
    ids = JSON.parse(last_response.body).map { |c| c["id"] }
    assert_includes ids, conv["id"]

    get "/api/conversations/#{conv["id"]}"
    assert_equal 200, last_response.status
    assert_equal conv["id"], JSON.parse(last_response.body)["id"]
  end

  def test_conversation_not_found
    get "/api/conversations/nope"
    assert_equal 404, last_response.status
  end

  def test_rename_conversation
    conv = @store.save(@store.build(directory: @config.workspace))
    patch "/api/conversations/#{conv["id"]}", { title: "Renamed" }.to_json, { "CONTENT_TYPE" => "application/json" }
    assert_equal 200, last_response.status
    assert_equal "Renamed", @store.load(conv["id"])["title"]
  end

  def test_rename_empty_title_400
    conv = @store.save(@store.build(directory: @config.workspace))
    patch "/api/conversations/#{conv["id"]}", { title: "" }.to_json, { "CONTENT_TYPE" => "application/json" }
    assert_equal 400, last_response.status
  end

  def test_delete_conversation
    conv = @store.save(@store.build(directory: @config.workspace))
    delete "/api/conversations/#{conv["id"]}"
    assert_equal 200, last_response.status
    assert_nil @store.load(conv["id"])
  end

  def test_archive_toggle
    conv = @store.save(@store.build(directory: @config.workspace))
    post "/api/conversations/#{conv["id"]}/archive"
    assert_equal true, JSON.parse(last_response.body)["archived"]
    get "/api/conversations"
    refute_includes JSON.parse(last_response.body).map { |c| c["id"] }, conv["id"]
    post "/api/conversations/#{conv["id"]}/archive"
    assert_equal false, JSON.parse(last_response.body)["archived"]
  end

  # ── Message editing ──

  def test_edit_user_message
    conv = @store.build(directory: @config.workspace)
    conv["messages"] << { "role" => "user", "content" => "original" }
    @store.save(conv)
    patch "/api/conversations/#{conv["id"]}/messages/0", { content: "edited" }.to_json, { "CONTENT_TYPE" => "application/json" }
    assert_equal 200, last_response.status
    assert_equal "edited", @store.load(conv["id"])["messages"][0]["content"]
  end

  def test_edit_assistant_message_400
    conv = @store.build(directory: @config.workspace)
    conv["messages"] << { "role" => "user", "content" => "u" }
    conv["messages"] << { "role" => "assistant", "content" => "a" }
    @store.save(conv)
    patch "/api/conversations/#{conv["id"]}/messages/1", { content: "nope" }.to_json, { "CONTENT_TYPE" => "application/json" }
    assert_equal 400, last_response.status
  end

  def test_trim_messages_from_index
    conv = @store.build(directory: @config.workspace)
    conv["messages"] << { "role" => "user", "content" => "u1" }
    conv["messages"] << { "role" => "assistant", "content" => "a1" }
    @store.save(conv)
    delete "/api/conversations/#{conv["id"]}/messages/1"
    assert_equal 200, last_response.status
    assert_equal 1, @store.load(conv["id"])["messages"].length
  end

  # ── Approvals / plan / abort routes ──

  def test_approval_routes
    @runner.expects(:approve).with("conv-1", 7).returns([:ok])
    post "/api/conversations/conv-1/approvals/7/approve"
    assert_equal 200, last_response.status

    @runner.expects(:reject).with("conv-1", 7).returns([:ok])
    post "/api/conversations/conv-1/approvals/7/reject"
    assert_equal 200, last_response.status

    @runner.expects(:approve_all).with("conv-1").returns([:ok])
    post "/api/conversations/conv-1/approvals/approve-all"
    assert_equal 200, last_response.status
  end

  def test_plan_routes
    @runner.expects(:approve_plan).with("conv-1").returns([:ok])
    post "/api/conversations/conv-1/plan/approve"
    assert_equal 200, last_response.status

    @runner.expects(:reject_plan).with("conv-1").returns([:ok])
    post "/api/conversations/conv-1/plan/reject"
    assert_equal 200, last_response.status
  end

  def test_abort_route
    @runner.expects(:abort).with("conv-1").returns(true)
    post "/api/conversations/conv-1/abort"
    assert_equal 200, last_response.status
    assert_equal true, JSON.parse(last_response.body)["aborted"]
  end

  # ── Workspaces ──

  def test_workspaces_empty_by_default
    get "/api/workspaces"
    assert_equal 200, last_response.status
    assert_equal [], JSON.parse(last_response.body)
  end

  def test_open_workspace_registers_and_returns_info
    ws = Dir.mktmpdir("ach-server-ws")
    post "/api/workspaces", { path: ws }.to_json, { "CONTENT_TYPE" => "application/json" }
    assert_equal 200, last_response.status
    body = JSON.parse(last_response.body)
    assert_equal File.basename(ws), body["name"]
    assert_equal ws, body["root"]
    assert_equal 0, body["conversation_count"]

    get "/api/workspaces"
    assert_includes JSON.parse(last_response.body).map { |w| w["root"] }, ws
  end

  def test_open_workspace_requires_path
    post "/api/workspaces", {}.to_json, { "CONTENT_TYPE" => "application/json" }
    assert_equal 400, last_response.status
  end

  def test_open_workspace_rejects_missing_directory
    post "/api/workspaces", { path: "/nonexistent/dir" }.to_json, { "CONTENT_TYPE" => "application/json" }
    assert_equal 404, last_response.status
  end

  def test_workspace_info_endpoint
    ws = Dir.mktmpdir("ach-server-ws-info")
    encoded = URI.encode_www_form_component(ws)
    get "/api/workspaces/#{encoded}/info"
    assert_equal 200, last_response.status
    assert_equal File.basename(ws), JSON.parse(last_response.body)["name"]
  end

  def test_workspace_info_rejects_missing_directory
    encoded = URI.encode_www_form_component("/nonexistent/dir")
    get "/api/workspaces/#{encoded}/info"
    assert_equal 404, last_response.status
  end

  def test_chat_accepts_workspace_param
    ws = Dir.mktmpdir("ach-server-chat-ws")
    @runner.stubs(:start_turn).returns(Thread.new {})

    post "/api/chat", { message: "hi", workspace: ws }.to_json, { "CONTENT_TYPE" => "application/json" }
    assert_equal 200, last_response.status

    cid = last_response.body[/event: conversation.created\ndata: ([^\n]+)/, 1]
    conv = @store.load(cid)
    assert_equal ws, conv["directory"]

    # The workspace was registered too.
    assert_includes @store.workspaces, ws
  end

  def test_chat_rejects_missing_workspace
    post "/api/chat", { message: "hi", workspace: "/nonexistent/dir" }.to_json, { "CONTENT_TYPE" => "application/json" }
    assert_equal 404, last_response.status
  end

  # ── Static / SPA / CORS ──

  def test_frontend_serves_index
    get "/"
    assert_equal 200, last_response.status
    assert_includes last_response.body, "<!DOCTYPE html>"
  end

  def test_spa_fallback
    get "/some/client/route"
    assert_equal 200, last_response.status
    assert_includes last_response.body, "<!DOCTYPE html>"
  end

  def test_cors_preflight
    options "/api/conversations", {}, { "HTTP_ACCESS_CONTROL_REQUEST_METHOD" => "GET" }
    assert_equal 204, last_response.status
  end

  def test_cors_headers
    get "/api/conversations"
    assert last_response.headers["Access-Control-Allow-Origin"]
  end

  # ── Integration: real runner through the server ──

  def test_full_turn_through_real_runner
    stub_provider_resolution
    build_chat_stub(sequence: [ResponseMessage.new(content: "served answer")])
    config = harness_config
    store = Ask::CodingHarness::Store.new(db_path: config.db_path)
    runner = Ask::CodingHarness::AgentRunner.new(config: config, store: store)
    @app = Ask::CodingHarness::Server.build(config: config, store: store, runner: runner)

    post "/api/chat", { message: "Ask the server" }.to_json, { "CONTENT_TYPE" => "application/json" }
    assert_equal 200, last_response.status

    body = last_response.body
    assert_includes body, "event: conversation.created"
    assert_includes body, "event: message.delta"
    assert_includes body, 'data: {"delta":"served answer"}'
    assert_includes body, "event: turn.completed"

    # Conversation persisted.
    cid = body[/event: conversation.created\ndata: ([^\n]+)/, 1]
    refute_nil cid
    get "/api/conversations/#{cid}"
    conv = JSON.parse(last_response.body)
    assert_equal "Ask the server", conv["messages"][0]["content"]
    assert_equal "served answer", conv["messages"][1]["content"]
  ensure
    runner&.stop
    store&.close
  end
end
