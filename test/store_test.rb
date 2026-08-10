# frozen_string_literal: true

require_relative "test_helper"

class StoreTest < Minitest::Test
  def setup
    @dir = Dir.mktmpdir("ach-store")
    @store = Ask::CodingHarness::Store.new(db_path: File.join(@dir, "test.db"))
  end

  def teardown
    @store.close
    FileUtils.rm_rf(@dir)
  end

  def test_build_creates_record
    conv = @store.build(directory: "/tmp")
    assert conv["id"]
    assert_equal "New conversation", conv["title"]
    assert_equal "/tmp", conv["directory"]
    assert_equal [], conv["messages"]
    refute conv["archived"]
  end

  def test_save_and_load_roundtrip
    conv = @store.build(directory: "/tmp")
    @store.save(conv)
    loaded = @store.load(conv["id"])
    assert_equal conv["id"], loaded["id"]
    assert_equal "/tmp", loaded["directory"]
  end

  def test_load_missing_returns_nil
    assert_nil @store.load("nope")
  end

  def test_delete
    conv = @store.save(@store.build(directory: "/tmp"))
    @store.delete(conv["id"])
    assert_nil @store.load(conv["id"])
  end

  def test_title_guessed_from_first_user_message
    conv = @store.build(directory: "/tmp")
    conv["messages"] << { "role" => "user", "content" => "Fix the login bug in the auth controller please" }
    @store.save(conv)
    loaded = @store.load(conv["id"])
    assert_equal "Fix the login bug in the auth controller…", loaded["title"]
  end

  def test_list_sorted_by_updated_desc
    a = @store.save(@store.build(directory: "/tmp"))
    sleep 0.01
    b = @store.save(@store.build(directory: "/tmp"))
    list = @store.list
    assert_equal [b["id"], a["id"]], list.map { |c| c["id"] }
  end

  def test_list_excludes_archived_by_default
    conv = @store.save(@store.build(directory: "/tmp"))
    conv["archived"] = true
    @store.save(conv)
    assert_empty @store.list
    assert_equal 1, @store.list(archived: true).size
  end

  def test_list_for_directory
    @store.save(@store.build(directory: "/proj/one"))
    @store.save(@store.build(directory: "/proj/two"))
    assert_equal ["/proj/one"], @store.list_for_directory("/proj/one").map { |c| c["directory"] }
  end

  def test_projects_aggregates
    @store.save(@store.build(directory: "/proj/a"))
    2.times { @store.save(@store.build(directory: "/proj/b")) }
    projects = @store.projects
    counts = projects.to_h { |p| [p["directory"], p["conversation_count"]] }
    assert_equal 1, counts["/proj/a"]
    assert_equal 2, counts["/proj/b"]
  end

  def test_summary_has_no_messages
    conv = @store.save(@store.build(directory: "/tmp"))
    conv["messages"] << { "role" => "user", "content" => "hi" }
    @store.save(conv)
    summary = @store.list.first
    refute summary.key?("messages")
    assert_equal 1, summary["message_count"]
  end
end
