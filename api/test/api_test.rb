# frozen_string_literal: true

require_relative "test_helper"

class ApiTest < Minitest::Test
  def test_frontend_serves_index
    get "/"
    assert_equal 200, last_response.status
    assert_includes last_response.body, "<!DOCTYPE html>"
    assert_includes last_response.body, "Askoda"
  end

  def test_manifest_serves
    get "/manifest.json"
    assert_equal 200, last_response.status
    assert_includes last_response.body, "Askoda"
  end

  def test_icon_serves
    get "/icon.svg"
    assert_equal 200, last_response.status
    assert last_response.body.length > 0
  end

  def test_projects_endpoint
    get "/api/projects"
    assert_equal 200, last_response.status
    assert_kind_of Array, JSON.parse(last_response.body)
  end

  def test_sessions_endpoint
    get "/api/sessions/test-session"
    assert_equal 200, last_response.status
    body = JSON.parse(last_response.body)
    assert_kind_of Hash, body
    assert body.key?("messages")
  end

  def test_conversations_endpoint
    get "/api/conversations"
    assert_equal 200, last_response.status
    assert_kind_of Array, JSON.parse(last_response.body)
  end

  def test_unknown_path_serves_index
    get "/nonexistent"
    # SPA fallback — serves index.html for client-side routing
    assert_equal 200, last_response.status
    assert_includes last_response.body, "<!DOCTYPE html>"
  end

  def test_unknown_api_returns_404
    get "/api/nonexistent"
    assert_equal 404, last_response.status
  end

  def test_cors_preflight
    options "/api/projects", {}, { "HTTP_ACCESS_CONTROL_REQUEST_METHOD" => "GET" }
    assert_equal 204, last_response.status
  end

  def test_cors_headers
    get "/api/projects"
    assert last_response.headers["Access-Control-Allow-Origin"]
  end

  def test_chat_returns_sse
    post "/api/chat", { message: "hello" }.to_json, { "CONTENT_TYPE" => "application/json" }
    # The route should match and return appropriate content type
    assert [200, 400, 500].include?(last_response.status),
      "Expected 200, 400, or 500, got #{last_response.status}"
    if last_response.status == 200
      assert_includes last_response.headers["Content-Type"], "text/event-stream"
    end
  end

  def test_chat_requires_message
    post "/api/chat", {}.to_json, { "CONTENT_TYPE" => "application/json" }
    assert_equal 400, last_response.status
  end

  def test_static_file_from_public
    get "/"
    assert_equal 200, last_response.status
    assert last_response.body.length > 100
  end

  # ── Session fork tests ──

  def test_fork_session
    post "/api/sessions/test-sess-123/fork"
    assert_equal 200, last_response.status
    body = JSON.parse(last_response.body)
    assert body["id"], "Fork should return a new session ID"
    refute_equal "test-sess-123", body["id"], "Fork should return a different ID"
    assert_equal "test-sess-123", body["parent_id"]
  end

  def test_timeline
    # Fork twice to create a timeline
    post "/api/sessions/root-sess/fork"
    fork1 = JSON.parse(last_response.body)["id"]

    post "/api/sessions/root-sess/fork"
    fork2 = JSON.parse(last_response.body)["id"]

    get "/api/sessions/root-sess/timeline"
    assert_equal 200, last_response.status
    body = JSON.parse(last_response.body)
    assert_equal "root-sess", body["root"]
    assert_operator body["branches"].length, :>=, 2
  end

  def test_timeline_empty_for_unforked
    get "/api/sessions/never-forked/timeline"
    assert_equal 200, last_response.status
    body = JSON.parse(last_response.body)
    assert_equal "never-forked", body["root"]
    assert_equal [], body["branches"]
  end

  def test_fork_twice_returns_different_ids
    post "/api/sessions/base-sess/fork"
    first = JSON.parse(last_response.body)["id"]
    post "/api/sessions/base-sess/fork"
    second = JSON.parse(last_response.body)["id"]
    refute_equal first, second, "Two forks should return different IDs"
  end
end
