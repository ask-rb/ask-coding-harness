# frozen_string_literal: true

require_relative "lib/ask/coding_harness/version"

Gem::Specification.new do |spec|
  spec.name = "ask-coding-harness"
  spec.version = Ask::CodingHarness::VERSION
  spec.authors = ["Kaka Ruto"]
  spec.email = ["kaka@myrrlabs.com"]

  spec.summary = "General-purpose coding agent in the browser"
  spec.description = "DEPRECATED — maintenance mode only, superseded by the canonical " \
                     "ask-app-server + ask-session-protocol architecture and an internal successor. " \
                     "A self-hosted web coding agent for the ask-rb ecosystem. " \
                     "Runs Ask::Agent::Session against any workspace with a mobile-first PWA, " \
                     "streaming events over SSE, with approvals, plan mode, todos, and diffs. " \
                     "Comes with the `ach` utility CLI for headless runs and server management. " \
                     "Extensible to other coding agents (ACP, Codex, Claude Code) via ask-coding-providers."

  spec.homepage = "https://github.com/ask-rb/ask-coding-harness"
  spec.license = "MIT"

  spec.required_ruby_version = ">= 3.2"

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = spec.homepage
  spec.metadata["changelog_uri"] = "#{spec.homepage}/blob/master/CHANGELOG.md"

  spec.files = Dir["lib/**/*", "public/**/*", "LICENSE", "README.md", "CHANGELOG.md"]
  spec.bindir = "bin"
  spec.executables = ["ask-coding-harness", "ach"]
  spec.require_paths = ["lib"]

  spec.add_dependency "ask-acp", ">= 0.1.3"
  spec.add_dependency "ask-agent", ">= 0.40.1"
  spec.add_dependency "ask-coding-providers", ">= 0.3.3"
  spec.add_dependency "ask-core", ">= 0.11.3"
  spec.add_dependency "ask-llm-providers", ">= 0.13.1"
  spec.add_dependency "ask-state-providers", ">= 0.4.6"
  spec.add_dependency "ask-tools", ">= 0.6.2"
  spec.add_dependency "ask-tools-shell", ">= 0.6.1"
  spec.add_dependency "puma", "~> 6.5"
  spec.add_dependency "rack", "~> 3.1"
  spec.add_dependency "rackup", "~> 2.2"
  spec.add_dependency "roda", "~> 3.80"

  spec.add_development_dependency "minitest", "~> 5.25"
  spec.add_development_dependency "mocha", "~> 3.1"
  spec.add_development_dependency "rake", "~> 13.0"
  spec.add_development_dependency "simplecov", "~> 0.22"
  spec.add_development_dependency "ostruct"
end
