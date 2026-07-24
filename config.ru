# frozen_string_literal: true

if ENV["RACK_ENV"] == "development" || ENV["DEV_RELOAD"]
  # Auto-reload on file changes (development only)
  require "rack/unreloader"

  Unreloader = Rack::Unreloader.new(subclasses: %w'Roda') do
    adapter = Askoda::Server.build_provider_adapter
    adapter.start
    at_exit { adapter.stop rescue nil }
    Askoda._adapter = adapter

    Askoda::Server.freeze.app
  end

  Unreloader.require "./api/lib/askoda/server.rb"

  run Unreloader
else
  # Production — load once, no reloading
  require_relative "api/lib/askoda/server"

  adapter = Askoda::Server.build_provider_adapter
  adapter.start
  at_exit { adapter.stop rescue nil }

  Askoda._adapter = adapter

  app = Askoda::Server.freeze.app

  run app
end
