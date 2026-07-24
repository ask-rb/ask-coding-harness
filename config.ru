# frozen_string_literal: true

require_relative "api/lib/askoda/server"

# Initialize the adapter once (shared across all requests)
adapter = Askoda::Server.build_provider_adapter
adapter.start
at_exit { adapter.stop rescue nil }

Askoda._adapter = adapter

app = Askoda::Server.freeze.app

run app
