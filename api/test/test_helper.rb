# frozen_string_literal: true

$LOAD_PATH.unshift File.expand_path("../lib", __dir__)
$LOAD_PATH.unshift File.expand_path("../../ask-state-providers/lib", __dir__)
$LOAD_PATH.unshift File.expand_path("../../ask-acp/lib", __dir__)
$LOAD_PATH.unshift File.expand_path("../../ask-coding-providers/lib", __dir__)

require "askoda/server"
require "minitest/autorun"
require "rack/test"
require "json"

# Set up a mock adapter for tests
module Askoda
  class MockAdapter
    def initialize; @counter = 0; end
    def list_projects; []; end
    def find_sessions(directory:, limit: 20); []; end
    def session_history(session_id, limit: 100); []; end
    def recent_sessions; []; end
    def start; end
    def stop; end
    def running?; true; end
    def create_session(*); @counter += 1; "sess_mock_#{@counter}"; end
    def send_and_stream(*, &block)
      block&.call({ type: "turn.completed", seq: 3, payload: { "response" => "Hello from test!", "sessionId" => "" } })
    end
    def subscribe(*); { "eventSeq" => 0 }; end
    def resume_session(*); {}; end
  end
end

Askoda._adapter = Askoda::MockAdapter.new

class Minitest::Test
  include Rack::Test::Methods

  def app
    Askoda::Server.freeze.app
  end
end
