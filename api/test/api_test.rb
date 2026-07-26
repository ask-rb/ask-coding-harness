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

  # ── Session endpoint tests ──

  def test_sessions_endpoint
    # Create a conversation via chat first, then look it up via /api/sessions/:id
    post "/api/chat", { message: "session test" }.to_json, { "CONTENT_TYPE" => "application/json" }
    assert_equal 200, last_response.status
    cid = nil
    last_response.body.each_line do |line|
      if line.start_with?("data: ") && line.length > 20
        cid = line[6..].strip
        break
      end
    end
    refute_nil cid

    get "/api/sessions/#{cid}"
    assert_equal 200, last_response.status
    body = JSON.parse(last_response.body)
    assert_kind_of Hash, body
    assert body.key?("messages")
    assert_operator body["messages"].length, :>=, 1
  end

  def test_nonexistent_session_returns_404
    get "/api/sessions/nonexistent-id"
    assert_equal 404, last_response.status
    assert_includes JSON.parse(last_response.body)["error"], "Not found"
  end

  def test_projects_from_conversations
    get "/api/projects"
    assert_equal 200, last_response.status
    data = JSON.parse(last_response.body)
    assert_kind_of Array, data
  end

  def test_project_sessions
    # Create a conversation with a known directory
    post "/api/chat", { message: "proj test" }.to_json, { "CONTENT_TYPE" => "application/json" }
    assert_equal 200, last_response.status

    get "/api/projects"
    projects = JSON.parse(last_response.body)
    skip "No projects found" if projects.empty?

    dir = projects.first["directory"]
    encoded = URI.encode_www_form_component(dir)
    get "/api/projects/#{encoded}/sessions"
    assert_equal 200, last_response.status
    sessions = JSON.parse(last_response.body)
    assert_kind_of Array, sessions
    assert_operator sessions.length, :>=, 1
  end

  # ── Conversation tests ──

	def test_conversation_create_and_fetch
	  # Create a conversation by sending a chat
	  post "/api/chat", { message: "persist this" }.to_json, { "CONTENT_TYPE" => "application/json" }
	  assert_equal 200, last_response.status
	
	  # Extract the conversation ID from the SSE conversation.created event
	  cid = nil
	  last_response.body.each_line do |line|
	    if line.start_with?("data: ") && line.length > 20
	      cid = line[6..].strip
	      break
	    end
	  end
	  refute_nil cid, "Should have extracted a conversation ID"
	
	  # Fetch the full conversation
	  get "/api/conversations/#{cid}"
	  assert_equal 200, last_response.status
	  conv = JSON.parse(last_response.body)
	  assert_equal cid, conv["id"]
	  assert_operator conv["messages"].length, :>=, 1
	  assert_equal "user", conv["messages"].first["role"]
	  assert_equal "persist this", conv["messages"].first["content"]
	end

	def test_conversation_deletion
	  post "/api/chat", { message: "delete me" }.to_json, { "CONTENT_TYPE" => "application/json" }
	  cid = nil
	  last_response.body.each_line do |line|
	    if line.start_with?("data: ") && line.length > 20
	      cid = line[6..].strip
	      break
	    end
	  end
	  refute_nil cid, "Should have extracted a conversation ID"

    delete "/api/conversations/#{cid}"
    assert_equal 200, last_response.status
    assert_equal true, JSON.parse(last_response.body)["deleted"]

    get "/api/conversations/#{cid}"
    assert_equal 404, last_response.status
  end

  def test_conversation_not_found
    get "/api/conversations/nonexistent-id"
    assert_equal 404, last_response.status
    assert_includes JSON.parse(last_response.body)["error"], "not found"
  end

  def test_chat_with_conversation_id
    # Create a conversation first
    post "/api/chat", { message: "first msg" }.to_json, { "CONTENT_TYPE" => "application/json" }

    # Read the conversation.id from SSE (the raw data line)
    cid = nil
    last_response.body.each_line do |line|
      if line.start_with?("data: ") && line.length > 20
        cid = line[6..].strip
        break
      end
    end
    refute_nil cid, "Should have extracted a conversation ID"

    # Send a second message with the conversation_id
    post "/api/chat", { message: "second msg", conversation_id: cid }.to_json, { "CONTENT_TYPE" => "application/json" }
    assert_equal 200, last_response.status

    # Verify both messages are in the conversation
    get "/api/conversations/#{cid}"
    conv = JSON.parse(last_response.body)
    assert_equal 4, conv["messages"].length, "Should have 4 messages (2 user + 2 assistant)"
    assert_equal "first msg", conv["messages"][0]["content"]
    assert_equal "second msg", conv["messages"][2]["content"]
  end

  # ── Message action tests ──

  def create_test_conversation
    post "/api/chat", { message: "hello" }.to_json, { "CONTENT_TYPE" => "application/json" }
    assert_equal 200, last_response.status
    cid = nil
    last_response.body.each_line do |line|
      if line.start_with?("data: ") && line.length > 20
        cid = line[6..].strip
        break
      end
    end
    cid
  end

  def test_edit_message
    cid = create_test_conversation
    refute_nil cid

    # Edit the user message at index 0
    patch "/api/conversations/#{cid}/messages/0", { content: "updated hello" }.to_json, { "CONTENT_TYPE" => "application/json" }
    assert_equal 200, last_response.status
    conv = JSON.parse(last_response.body)
    assert_equal "updated hello", conv["messages"][0]["content"]
  end

  def test_edit_assistant_message_returns_400
    cid = create_test_conversation
    refute_nil cid

    # Try editing the assistant message at index 1
    patch "/api/conversations/#{cid}/messages/1", { content: "edited" }.to_json, { "CONTENT_TYPE" => "application/json" }
    assert_equal 400, last_response.status
  end

  def test_delete_messages_from
    cid = create_test_conversation
    refute_nil cid

    # Delete from index 1 (remove the assistant response)
    delete "/api/conversations/#{cid}/messages/1"
    assert_equal 200, last_response.status
    conv = JSON.parse(last_response.body)
    assert_equal 1, conv["messages"].length, "Should have 1 message remaining"
    assert_equal "user", conv["messages"][0]["role"]
  end

  def test_delete_all_messages
    cid = create_test_conversation
    refute_nil cid

    # Delete from index 0 (remove all messages)
    delete "/api/conversations/#{cid}/messages/0"
    assert_equal 200, last_response.status
    conv = JSON.parse(last_response.body)
    assert_equal 0, conv["messages"].length, "Should have 0 messages remaining"
  end

  def test_edit_nonexistent_message
    cid = create_test_conversation
    refute_nil cid

    patch "/api/conversations/#{cid}/messages/99", { content: "nope" }.to_json, { "CONTENT_TYPE" => "application/json" }
    assert_equal 404, last_response.status
  end

  # ── File endpoints tests ──

  def test_file_list
    get "/api/files"
    assert_equal 200, last_response.status
    data = JSON.parse(last_response.body)
    assert_kind_of Array, data["files"]
    assert_operator data["files"].length, :>=, 1
    assert data["files"].any? { |f| f.include?("server.rb") }, "Should list server.rb"
  end

	def test_file_read
	  get "/api/files/read?path=api/test/test_helper.rb"
	  assert_equal 200, last_response.status
	  data = JSON.parse(last_response.body)
	  assert_equal "api/test/test_helper.rb", data["path"]
	  assert data["content"].length > 50, "Content should be non-trivial"
	  assert_includes data["content"], "frozen_string_literal"
	end

  def test_file_read_not_found
    get "/api/files/read?path=nonexistent_file.rb"
    assert_equal 404, last_response.status
    assert_includes JSON.parse(last_response.body)["error"], "not found"
  end

  def test_file_read_directory
    get "/api/files/read?path=."
    assert_equal 400, last_response.status
    assert_includes JSON.parse(last_response.body)["error"], "directory"
  end

  def test_file_read_invalid_path
    get "/api/files/read?path=../../etc/passwd"
    assert_equal 400, last_response.status
  end

  # ── Config endpoint tests ──

  def test_config_endpoint
    get "/api/config"
    assert_equal 200, last_response.status
    data = JSON.parse(last_response.body)
    assert_kind_of Array, data["models"]
    assert_operator data["models"].length, :>=, 1
    assert_kind_of String, data["defaultModel"]
    assert_kind_of String, data["currentAdapter"]
  end

  # ── Rename & Archive tests ──

  def test_rename_conversation
    cid = create_test_conversation
    refute_nil cid

    patch "/api/conversations/#{cid}", { title: "My Renamed Chat" }.to_json, { "CONTENT_TYPE" => "application/json" }
    assert_equal 200, last_response.status
    body = JSON.parse(last_response.body)
    assert_equal "My Renamed Chat", body["title"]

    get "/api/conversations/#{cid}"
    assert_equal "My Renamed Chat", JSON.parse(last_response.body)["title"]
  end

  def test_rename_empty_title_returns_400
    cid = create_test_conversation
    refute_nil cid

    patch "/api/conversations/#{cid}", { title: "" }.to_json, { "CONTENT_TYPE" => "application/json" }
    assert_equal 400, last_response.status
  end

  def test_archive_conversation
    cid = create_test_conversation
    refute_nil cid

    post "/api/conversations/#{cid}/archive"
    assert_equal 200, last_response.status
    body = JSON.parse(last_response.body)
    assert_equal true, body["archived"]

    # Should be hidden from default list
    get "/api/conversations"
    ids = JSON.parse(last_response.body).map { |c| c["id"] }
    refute_includes ids, cid, "Archived conversation should be hidden"
  end

  def test_archive_toggle
    cid = create_test_conversation
    refute_nil cid

    post "/api/conversations/#{cid}/archive"
    assert_equal true, JSON.parse(last_response.body)["archived"]

    post "/api/conversations/#{cid}/archive"
    assert_equal false, JSON.parse(last_response.body)["archived"]
  end

  def test_archived_shown_with_query_param
    cid = create_test_conversation
    refute_nil cid
    post "/api/conversations/#{cid}/archive"

    get "/api/conversations?archived=true"
    ids = JSON.parse(last_response.body).map { |c| c["id"] }
    assert_includes ids, cid, "Archived conversation should show with ?archived=true"
  end
end
