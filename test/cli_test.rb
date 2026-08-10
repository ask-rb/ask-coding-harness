# frozen_string_literal: true

require_relative "test_helper"
require "ask/coding_harness/cli"

class CliTest < Minitest::Test
  def setup
    @out = StringIO.new
    @err = StringIO.new
    @config = Ask::CodingHarness.config
  end

  def run_cli(*argv)
    Ask::CodingHarness::CLI.run(argv, stdout: @out, stderr: @err)
  end

  def test_version
    run_cli("version")
    assert_equal "#{Ask::CodingHarness::VERSION}\n", @out.string
  end

  def test_help
    run_cli("help")
    assert_includes @out.string, "ach serve"
    assert_includes @out.string, "ach run"
    assert_includes @out.string, "ach sessions"
  end

  def test_unknown_command
    assert_raises(SystemExit) { run_cli("frobnicate") }
    assert_includes @err.string, "Unknown command: frobnicate"
  end

  def test_sessions_lists_conversations
    dir = Dir.mktmpdir("ach-cli")
    db = File.join(dir, "test.db")
    store = Ask::CodingHarness::Store.new(db_path: db)
    conv = store.build(directory: "/tmp")
    conv["messages"] << { "role" => "user", "content" => "Fix the login bug please" }
    store.save(conv)
    store.close

    old_db = ENV["ACH_DB_PATH"]
    ENV["ACH_DB_PATH"] = db
    begin
      run_cli("sessions")
    ensure
      ENV["ACH_DB_PATH"] = old_db
    end
    assert_includes @out.string, "Fix the login bug please"
    assert_includes @out.string, conv["id"][0, 8]
  end

  def test_sessions_empty
    dir = Dir.mktmpdir("ach-cli")
    db = File.join(dir, "test.db")
    old_db = ENV["ACH_DB_PATH"]
    ENV["ACH_DB_PATH"] = db
    begin
      run_cli("sessions")
    ensure
      ENV["ACH_DB_PATH"] = old_db
    end
    assert_includes @out.string, "No conversations yet."
  end

  def test_run_requires_prompt
    assert_raises(SystemExit) { run_cli("run") }
    assert_includes @err.string, "a prompt is required"
  end
end
