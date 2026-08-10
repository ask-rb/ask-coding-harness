# frozen_string_literal: true

if ENV["COVERAGE"]
  require "simplecov"
  SimpleCov.start do
    add_filter "/test/"
    add_filter "/vendor/"
    track_files "lib/**/*.rb"
  end
end

$LOAD_PATH.unshift File.expand_path("../../lib", __dir__)
require "ask-coding-harness"
require "ask/coding_harness/server"
require "ask/agent"

require "ostruct"
require "json"
require "stringio"
require "tmpdir"

require "minitest/autorun"
require "mocha/minitest" if Gem.loaded_specs.key?("mocha")

# ── Shared test doubles ──

module CodingHarnessTestHelpers
  StreamChunk = Struct.new(:content, :thinking, :tool_calls, keyword_init: true) do
    def tool_call? = !tool_calls.nil? && !tool_calls.empty?
  end

  ResponseMessage = Data.define(:content, :tool_calls, :tool_results, :thinking, :input_tokens, :output_tokens, :cost) do
    def initialize(content:, tool_calls: {}, tool_results: {}, thinking: nil, input_tokens: nil, output_tokens: nil, cost: nil)
      super(content: content, tool_calls: tool_calls, tool_results: tool_results, thinking: thinking,
            input_tokens: input_tokens, output_tokens: output_tokens, cost: cost)
    end
    def tool_call? = !tool_calls.empty?
    def to_s = content.to_s
  end

  FakeProvider = Class.new do
    def self.compat_config = {}
    def initialize(api_key:); end
  end

  # A stubbed chat for driving a REAL Ask::Agent::Session without a network.
  # ask() streams chunks (when given a block) and returns responses in
  # sequence; messages accumulate so history works across turns.
  def build_chat_stub(sequence: [])
    messages = []
    stub = Object.new
    stub.define_singleton_method(:model) { "deepseek-v4-flash" }
    stub.define_singleton_method(:model_id) { "deepseek-v4-flash" }
    stub.define_singleton_method(:messages) { messages }
    stub.define_singleton_method(:with_instructions) { |_| stub }
    stub.define_singleton_method(:reset_messages!) { messages.clear }
    stub.define_singleton_method(:add_message) do |role:, content: nil, tool_call_id: nil, tool_calls: nil, attachments: nil|
      messages << Ask::Message.new(role: role, content: content, tool_call_id: tool_call_id, tool_calls: tool_calls)
    end
    stub.define_singleton_method(:ask) do |_message, attachments: nil, &block|
      unless _message.to_s.empty?
        messages << Ask::Message.new(role: :user, content: _message)
      end
      response = sequence.shift || sequence.last
      if block && response
        chunks = []
        chunks << StreamChunk.new(content: nil, thinking: response.thinking) unless response.thinking.to_s.empty?
        chunks << StreamChunk.new(content: response.content, thinking: nil) if response.content.to_s.length > 0
        chunks << StreamChunk.new(content: "", thinking: nil, tool_calls: response.tool_calls) unless response.tool_calls.empty?
        chunks.each { |c| block.call(c) }
      end
      response
    end
    Ask::Agent::Chat.stubs(:new).returns(stub)
    stub
  end

  # Stub provider resolution so the ask_agent adapter can start without keys.
  def stub_provider_resolution
    Ask::Provider.stubs(:resolve).with("opencode_go").returns(FakeProvider)
  end

  # A config pointing at a temp workspace with an isolated DB.
  def harness_config(workspace: nil, **overrides)
    root = workspace || Dir.mktmpdir("ach-workspace")
    config = Ask::CodingHarness::Config.new
    config.workspace = root
    config.db_path = File.join(Dir.mktmpdir("ach-db"), "test.db")
    config.approval = :off
    overrides.each { |k, v| config.public_send("#{k}=", v) }
    config
  end
end
