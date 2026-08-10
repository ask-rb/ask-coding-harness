# frozen_string_literal: true

require_relative "test_helper"
require "rubygems/package"

class GemspecTest < Minitest::Test
  def gemspec
    @gemspec ||= Gem::Specification.load(File.expand_path("../ask-coding-harness.gemspec", __dir__))
  end

  def test_gemspec_loads
    assert gemspec, "gemspec should load"
    assert_equal "ask-coding-harness", gemspec.name
  end

  def test_name
    assert_equal "ask-coding-harness", gemspec.name
  end

  def test_version_matches
    require "ask/coding_harness/version"
    assert_equal Ask::CodingHarness::VERSION, gemspec.version.to_s
  end

  def test_executables
    assert_includes gemspec.executables, "ask-coding-harness"
    assert_includes gemspec.executables, "ach"
  end

  def test_runtime_dependencies_cover_core_gems
    deps = gemspec.runtime_dependencies.map(&:name)
    %w[ask-agent ask-coding-providers ask-tools-shell ask-state-providers
       ask-llm-providers ask-core roda rackup puma].each do |dep|
      assert_includes deps, dep, "missing runtime dependency #{dep}"
    end
  end

  def test_packaged_files_exist
    root = File.dirname(gemspec.loaded_from)
    gemspec.files.each do |file|
      assert File.exist?(File.join(root, file)), "packaged file missing: #{file}"
    end
  end

  def test_license
    assert_equal "MIT", gemspec.license
  end
end
