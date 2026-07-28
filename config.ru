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

# Create the coding provider adapter at startup.  If none is configured
# (ACP_COMMAND missing, etc.), fall back to a no-op adapter so the
# frontend UI still loads and the user can configure things from settings.
begin
  adapter = Askoda::Server.build_provider_adapter
  adapter.start
  at_exit { adapter.stop rescue nil }
  Askoda._adapter = adapter
rescue => e
  $stderr.puts "[askoda] WARNING: No coding adapter configured (#{e.message})"
  $stderr.puts "[askoda] Defaulting to NullAdapter. Set CODING_PROVIDER=ask_agent or ACP_COMMAND in .env"
  Askoda._adapter = Askoda::NullAdapter.new
end

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
