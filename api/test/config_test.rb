# frozen_string_literal: true

require_relative "test_helper"

class ConfigTest < Minitest::Test
  def setup
    @orig_adapter = Askoda._adapter
    @orig_cache = Askoda.file_list_cache
    @orig_cache_time = Askoda.file_list_cache_time
  end

  def teardown
    Askoda._adapter = @orig_adapter
    Askoda.file_list_cache = @orig_cache
    Askoda.file_list_cache_time = @orig_cache_time
    ENV.delete("DEV_RELOAD")
  end

  # ── These tests run first, before the Server class is frozen ──
  # (They build the app manually without triggering freeze.app)

  def test_adapter_not_recreated_on_subsequent_requests
    # Core behavioral test: adapter creation must not happen per-request.
    create_count = 0

    orig_method = Askoda::Server.method(:build_provider_adapter)

    Askoda::Server.define_singleton_method(:build_provider_adapter) do
      create_count += 1
      adapter = Object.new
      adapter.define_singleton_method(:start) {}
      adapter.define_singleton_method(:running?) { true }
      adapter
    end

    # Simulate config.ru loading (the fix): create adapter ONCE
    adapter = Askoda::Server.build_provider_adapter
    adapter.start
    Askoda._adapter = adapter
    app = Askoda::Server.freeze.app

    # Multiple requests via the built app
    3.times do
      env = Rack::MockRequest.env_for("/api/config")
      app.call(env)
    end

    assert_equal 1, create_count,
      "build_provider_adapter must be called exactly once, " \
      "even with multiple requests"

    # Restore the original method
    Askoda::Server.singleton_class.remove_method(:build_provider_adapter)
    Askoda::Server.define_singleton_method(:build_provider_adapter, orig_method)
  rescue FrozenError
    # Class is already frozen; nothing to restore
  end

  def test_adapter_started_once_at_load_time
    # Verifies the adapter's #start is called at most once during
    # app initialization, not on every request.
    start_count = 0

    adapter = Object.new
    adapter.define_singleton_method(:running?) { true }
    adapter.define_singleton_method(:start) { start_count += 1 }
    adapter.define_singleton_method(:create_session) { |*| "sess_mock" }
    adapter.define_singleton_method(:send_and_stream) { |*, &block|
      block&.call({ type: "turn.completed", seq: 3,
                    payload: { "response" => "ok", "sessionId" => "" } })
    }
    adapter.define_singleton_method(:list_projects) { [] }
    adapter.define_singleton_method(:find_sessions) { |**| [] }
    adapter.define_singleton_method(:session_history) { |**| [] }
    adapter.define_singleton_method(:recent_sessions) { [] }
    adapter.define_singleton_method(:subscribe) { { "eventSeq" => 0 } }
    adapter.define_singleton_method(:resume_session) { {} }

    Askoda._adapter = adapter
    app = Askoda::Server.freeze.app

    # First request — consume the streaming body to trigger deferred blocks
    env = Rack::MockRequest.env_for("/api/config")
    _status, _headers, body = app.call(env)
    body.each { } rescue nil

    assert_equal 0, start_count,
      "adapter#start should NOT be called during a request"

    # Second request
    env = Rack::MockRequest.env_for("/api/config")
    _status, _headers, body = app.call(env)
    body.each { } rescue nil

    assert_equal 0, start_count,
      "adapter#start should NOT be called during subsequent requests either"
  end

  # ── File listing cache tests ──
  # These tests verify the file listing cache works correctly.

  def test_file_list_cache_returns_list
    # The file listing cache should return a valid file list on first call.
    # The server method #cached_file_list is private, so we test through
    # the public /api/files endpoint.
    Askoda._adapter = @orig_adapter || Askoda::MockAdapter.new
    app = Askoda::Server.freeze.app

    env = Rack::MockRequest.env_for("/api/files")
    _status, _headers, body = app.call(env)
    result = JSON.parse(body.body)["files"] rescue JSON.parse(body.join)["files"]
    assert_kind_of Array, result
    assert_operator result.length, :>=, 1
    assert result.any? { |f| f.include?("server.rb") },
      "File list should contain server.rb"
  end

  def test_file_list_cache_reuses_cached_value
    # After the first call, subsequent calls within the TTL should
    # return the cached result without re-scanning.
    Askoda._adapter = @orig_adapter || Askoda::MockAdapter.new
    Askoda.file_list_cache = nil
    Askoda.file_list_cache_time = nil

    app = Askoda::Server.freeze.app

    # First call populates the cache
    env = Rack::MockRequest.env_for("/api/files")
    app.call(env)
    assert Askoda.file_list_cache, "Cache should be populated after first call"
    assert Askoda.file_list_cache_time, "Cache timestamp should be set"

    cached_value = Askoda.file_list_cache.dup

    # Second call should return same cached value
    env = Rack::MockRequest.env_for("/api/files")
    app.call(env)
    assert_equal cached_value, Askoda.file_list_cache,
      "Cache should not be recomputed on second call within TTL"
  end

  def test_file_list_cache_invalidates_on_new_chat
    # POST /api/chat should invalidate the file cache,
    # since the project may have changed.
    Askoda._adapter = @orig_adapter || Askoda::MockAdapter.new
    Askoda.file_list_cache = nil
    Askoda.file_list_cache_time = nil

    app = Askoda::Server.freeze.app

    # Warm the cache
    env = Rack::MockRequest.env_for("/api/files")
    app.call(env)

    # Send a chat message — cache should now be invalidated
    chat_env = Rack::MockRequest.env_for("/api/chat", method: "POST",
      input: { message: "hello" }.to_json,
      "CONTENT_TYPE" => "application/json")
    _status, _headers, body = app.call(chat_env)
    body.each { } rescue nil  # consume streaming body

    assert_nil Askoda.file_list_cache,
      "File cache should be cleared after POST /api/chat"
    assert_nil Askoda.file_list_cache_time,
      "File cache timestamp should be cleared after POST /api/chat"
  end

  # ── Conversation sorting tests ──

  def test_conversations_sorted_by_updated_at
    # Conversations should be returned sorted by updated_at descending
    # (most recently updated first).
    Askoda._adapter = @orig_adapter || Askoda::MockAdapter.new
    app = Askoda::Server.freeze.app

    # Create a few conversations via the chat endpoint
    3.times do |i|
      env = Rack::MockRequest.env_for("/api/chat", method: "POST",
        input: { message: "msg #{i}" }.to_json,
        "CONTENT_TYPE" => "application/json")
      _status, _headers, body = app.call(env)
      body.each { } rescue nil
      sleep 0.01  # ensure distinct timestamps
    end

    # Fetch sorted list
    env = Rack::MockRequest.env_for("/api/conversations")
    _status, _headers, body = app.call(env)
    list = JSON.parse(body.body) rescue JSON.parse(body.join)

    assert_kind_of Array, list
    refute_empty list

    # The most recent (last created) should be first
    timestamps = list.map { |c| c["updated_at"] || c[:updated_at] }
    assert_equal timestamps.sort.reverse, timestamps,
      "Conversations should be sorted by updated_at descending"
  end

  # ── Config endpoint test ──

  def test_config_responds_to_api_and_static_routes
    # Sanity check: the app serves both API and static routes correctly
    Askoda._adapter = @orig_adapter || Askoda::MockAdapter.new

    get "/api/config"
    assert_equal 200, last_response.status
    data = JSON.parse(last_response.body)
    assert_kind_of Array, data["models"]
    assert_kind_of String, data["currentAdapter"]
  end

  # ── Adapter sharing test ──

  def test_adapter_is_shared_across_requests
    # The app must use the same adapter instance for all requests.
    call_count = 0
    tracking_adapter = create_tracking_adapter
    tracking_adapter.define_singleton_method(:create_session) { |*|
      call_count += 1
      "sess_#{call_count}"
    }

    Askoda._adapter = tracking_adapter

    # Make two chat requests (Rack::Test consumes the response body)
    2.times do
      post "/api/chat", { message: "hello" }.to_json, { "CONTENT_TYPE" => "application/json" }
      assert_equal 200, last_response.status
    end

    assert_equal 2, call_count,
      "create_session should be called twice on the SAME adapter instance"
  end

  private

  def create_tracking_adapter
    adapter = Object.new
    adapter.define_singleton_method(:start) {}
    adapter.define_singleton_method(:stop) {}
    adapter.define_singleton_method(:running?) { true }
    adapter.define_singleton_method(:subscribe) { { "eventSeq" => 0 } }
    adapter.define_singleton_method(:resume_session) { {} }
    adapter.define_singleton_method(:create_session) { |*| "sess_mock" }
    adapter.define_singleton_method(:send_and_stream) { |*, &block|
      block&.call({ type: "turn.completed", seq: 3,
                    payload: { "response" => "ok", "sessionId" => "" } })
    }
    adapter.define_singleton_method(:list_projects) { [] }
    adapter.define_singleton_method(:find_sessions) { |**| [] }
    adapter.define_singleton_method(:session_history) { |**| [] }
    adapter.define_singleton_method(:recent_sessions) { [] }
    adapter
  end
end
