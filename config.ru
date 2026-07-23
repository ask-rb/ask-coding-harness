# frozen_string_literal: true

require_relative "lib/askoda/server"

run Askoda::Server.freeze.app
