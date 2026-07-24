# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name = "askoda"
  spec.version = "0.1.0"
  spec.authors = ["Kaka Ruto"]
  spec.email = ["kaka@myrrlabs.com"]

  spec.summary = "HTTP API + PWA for the Askoda coding assistant"
  spec.description = "A deployable web service that exposes coding AI adapters via a simple HTTP/SSE API, with a built-in mobile-first PWA frontend."
  spec.homepage = "https://github.com/ask-rb/askoda"
  spec.license = "MIT"

  spec.required_ruby_version = ">= 3.2"

  spec.files = Dir["lib/**/*", "public/**/*", "bin/*"]
  spec.bindir = "bin"
  spec.executables = ["askoda"]
  spec.require_paths = ["lib"]

  spec.add_dependency "roda", "~> 3.80"
  spec.add_dependency "puma", "~> 6.5"
  spec.add_dependency "rack", "~> 3.1"
  spec.add_dependency "rackup", "~> 2.2"
  spec.add_dependency "ask-state-providers", ">= 0.1"
  spec.add_dependency "ask-acp", ">= 0.1"
  spec.add_dependency "ask-coding-providers", ">= 0.1"
end
