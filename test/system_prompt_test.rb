# frozen_string_literal: true

require_relative "test_helper"
require "fileutils"

# Tests for the pi-style system prompt builder: composable parts, project
# context discovery (AGENTS.md/CLAUDE.md walk), and the working-directory
# footer.
class SystemPromptTest < Minitest::Test
  def setup
    @root = Dir.mktmpdir("ach-prompt")
    @workspace = File.join(@root, "project")
    FileUtils.mkdir_p(@workspace)
  end

  def teardown
    FileUtils.rm_rf(@root)
  end

  def write_workspace_file(name, content)
    path = File.join(@workspace, name)
    FileUtils.mkdir_p(File.dirname(path))
    File.write(path, content)
    path
  end

  # ── Structure ──

  def test_build_returns_default_prompt_with_footer
    prompt = Ask::CodingHarness::SystemPrompt.build(workspace: @workspace)
    assert_includes prompt, "expert coding assistant operating inside ask-coding-harness"
    assert_includes prompt, "Current working directory: #{@workspace}"
  end

  def test_custom_prompt_replaces_default
    prompt = Ask::CodingHarness::SystemPrompt.build(workspace: @workspace, custom: "You are a Rails expert.")
    assert_includes prompt, "You are a Rails expert."
    refute_includes prompt, "expert coding assistant operating inside ask-coding-harness"
    assert_includes prompt, "Current working directory: #{@workspace}"
  end

  def test_guidelines_are_tool_aware_and_deduplicated
    prompt = Ask::CodingHarness::SystemPrompt.build(
      workspace: @workspace,
      guidelines: ["Always run tests", "Be concise in your responses"]
    )
    assert_includes prompt, "- Be concise in your responses"
    assert_includes prompt, "- Always run tests"
    # Duplicate guideline appears once.
    assert_equal 1, prompt.scan("- Be concise in your responses").length
    assert_includes prompt, "- Use absolute paths rooted at your working directory"
  end

  def test_append_section
    prompt = Ask::CodingHarness::SystemPrompt.build(
      workspace: @workspace,
      append: "Prefer the ask-rb conventions."
    )
    assert_includes prompt, "Prefer the ask-rb conventions."
    # Append comes before the footer.
    assert_operator prompt.index("Prefer the ask-rb"), :<, prompt.index("Current working directory")
  end

  # ── Project context discovery (pi-style) ──

  def test_discovers_agents_md_in_workspace
    write_workspace_file("AGENTS.md", "# Project rules\nRun tests before committing.")
    prompt = Ask::CodingHarness::SystemPrompt.build(workspace: @workspace)
    assert_includes prompt, "<project_context>"
    assert_includes prompt, "Project rules"
    assert_includes prompt, "Run tests before committing."
    assert_includes prompt, "path=\"#{File.join(@workspace, "AGENTS.md")}\""
  end

  def test_walks_up_to_parent_directories
    parent_agents = File.join(@root, "AGENTS.md")
    File.write(parent_agents, "# Root rules\n")
    write_workspace_file("CLAUDE.md", "# Workspace rules\n")

    prompt = Ask::CodingHarness::SystemPrompt.build(workspace: @workspace)
    assert_includes prompt, "Workspace rules"
    assert_includes prompt, "Root rules"
    # Nearest context file first.
    assert_operator prompt.index("Workspace rules"), :<, prompt.index("Root rules")
  end

  def test_deduplicates_same_context_file_via_ancestors
    write_workspace_file("AGENTS.md", "# Shared\n")
    # A sibling dir would find the same workspace AGENTS.md — only one copy.
    nested = File.join(@workspace, "sub")
    FileUtils.mkdir_p(nested)
    prompt = Ask::CodingHarness::SystemPrompt.build(workspace: nested)
    assert_equal 1, prompt.scan("# Shared").length
  end

  def test_skips_oversized_context_files
    write_workspace_file("AGENTS.md", "x" * (Ask::CodingHarness::SystemPrompt::MAX_CONTEXT_FILE_SIZE + 1))
    prompt = Ask::CodingHarness::SystemPrompt.build(workspace: @workspace)
    refute_includes prompt, "<project_context>"
  end

  def test_load_project_context_returns_ordered_files
    write_workspace_file("AGENTS.md", "workspace rules")
    File.write(File.join(@root, "CLAUDE.md"), "root rules")
    files = Ask::CodingHarness::SystemPrompt.load_project_context(@workspace)
    assert_equal 2, files.length
    assert_equal File.join(@workspace, "AGENTS.md"), files[0][:path]
    assert_equal File.join(@root, "CLAUDE.md"), files[1][:path]
  end

  def test_context_can_be_supplied_explicitly
    prompt = Ask::CodingHarness::SystemPrompt.build(
      workspace: @workspace,
      context_files: [{ path: "/custom/AGENTS.md", content: "custom rules" }]
    )
    assert_includes prompt, "<project_context>"
    assert_includes prompt, "custom rules"
    assert_includes prompt, 'path="/custom/AGENTS.md"'
  end

  def test_no_context_when_none_found
    prompt = Ask::CodingHarness::SystemPrompt.build(workspace: @workspace)
    refute_includes prompt, "<project_context>"
  end
end
