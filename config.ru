# frozen_string_literal: true

require_relative "api/lib/askoda/server"

# Load .env so that environment variables (ACP_COMMAND, CODING_PROVIDER,
# PORT, etc.) are available before the adapter is constructed.
if File.exist?(File.expand_path(".env"))
  File.readlines(".env").each do |line|
    line = line.strip
    next if line.empty? || line.start_with?("#") || !line.include?("=")
    k, v = line.split("=", 2)
    ENV[k.strip] = v.strip.delete("\"'") unless k.strip.empty?
  end
end

# Create the coding provider adapter once at startup and share it across all
# requests. This avoids spawning a new subprocess (e.g. +opencode acp+) on
# every request, which would leak orphan processes and waste memory/CPU.
#
# Previously the adapter was created inside the Rack::Unreloader block (dev
# path), causing +@app_block.call+ to create a new adapter + subprocess on
# every HTTP request — accumulating 80+ orphan processes in ~30 minutes.
adapter = Askoda::Server.build_provider_adapter
adapter.start
at_exit { adapter.stop rescue nil }
Askoda._adapter = adapter

if ENV.fetch("RACK_ENV", "development") == "development"
  # Auto-reload on file changes (development only)
  require "rack/unreloader"

  Unreloader = Rack::Unreloader.new(subclasses: %w'Roda') do
    Askoda::Server.freeze.app
  end

  Unreloader.require "./api/lib/askoda/server.rb"

  run Unreloader
else
  # Production — load once, no reloading
  app = Askoda::Server.freeze.app

  run app
end
