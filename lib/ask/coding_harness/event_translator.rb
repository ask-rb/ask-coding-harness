# frozen_string_literal: true

module Ask
  module CodingHarness
    # Normalizes coding-agent adapter events (ask-coding-providers) into the
    # harness SSE event schema.
    #
    # Two adapter vocabularies exist today:
    #
    #   ask_agent (rich):    turn.started, model.streaming, model.thinking,
    #                        tool.use, tool.delta, tool.result,
    #                        approval.required, approval.updated,
    #                        plan.proposed, plan.approved, plan.rejected,
    #                        todos.updated, turn.completed, turn.failed,
    #                        turn.aborted, error
    #
    #   acp (basic):         turn.started, model.streaming, tool.use,
    #                        tool.result, turn.completed, turn.failed
    #
    # Both translate into one browser-friendly schema (camelCase, flat
    # payloads, no seq):
    #
    #   turn.started, message.delta, message.thinking,
    #   tool.start {id, name, args}, tool.delta {id, name, partial},
    #   tool.end {id, name, output, isError, durationMs},
    #   approval.required {id, toolName, args, message, autoApprovable},
    #   approval.updated {id, status}, plan.proposed/approved/rejected {plan},
    #   todos.updated {todos}, turn.completed {response},
    #   turn.failed {error}, turn.aborted, error {error}
    class EventTranslator
      # Translate one adapter event into a harness event Hash, or nil when
      # the event has no browser representation.
      #
      # @param event [Hash] adapter event with :type and :payload
      # @return [Hash, nil] { type:, data: }
      def translate(event)
        payload = event[:payload] || {}
        case event[:type]
        when "turn.started" then event("turn.started", {})
        when "model.streaming" then event("message.delta", { delta: payload["delta"] })
        when "model.thinking" then event("message.thinking", { delta: payload["delta"] })
        when "tool.use" then tool_start(payload)
        when "tool.delta" then event("tool.delta", tool_delta(payload))
        when "tool.result" then tool_end(payload)
        when "approval.required" then approval_required(payload)
        when "approval.updated" then event("approval.updated", { id: payload["actionId"], status: payload["status"] })
        when "plan.proposed" then event("plan.proposed", { plan: payload["plan"] })
        when "plan.approved" then event("plan.approved", { plan: payload["plan"] })
        when "plan.rejected" then event("plan.rejected", { plan: payload["plan"] })
        when "todos.updated" then event("todos.updated", { todos: payload["todos"] })
        when "turn.completed" then event("turn.completed", { response: payload["response"] })
        when "turn.failed" then event("turn.failed", { error: error_message(payload) })
        when "turn.aborted" then event("turn.aborted", {})
        when "error" then event("error", { error: error_message(payload) })
        end
      end

      private

      def event(type, data)
        { type: type, data: data }
      end

      def tool_start(payload)
        event("tool.start", {
          id: payload["toolCallId"] || payload["id"],
          name: payload["toolName"],
          args: normalize_args(payload["input"] || payload["args"])
        })
      end

      # Tool arguments arrive as hashes (ask_agent) or JSON strings
      # (repair pipeline); the browser wants a plain object.
      def normalize_args(args)
        return args unless args.is_a?(String)
        JSON.parse(args)
      rescue JSON::ParserError
        args
      end

      def tool_delta(payload)
        {
          id: payload["toolCallId"] || payload["id"],
          name: payload["toolName"],
          partial: payload["partial"]
        }
      end

      def tool_end(payload)
        event("tool.end", {
          id: payload["toolCallId"] || payload["id"],
          name: payload["toolName"],
          output: payload["output"],
          isError: !!payload["isError"],
          durationMs: payload["durationMs"]
        })
      end

      def approval_required(payload)
        event("approval.required", {
          id: payload["actionId"],
          toolName: payload["toolName"],
          args: payload["args"],
          message: payload["message"],
          autoApprovable: !!payload["autoApprovable"]
        })
      end

      def error_message(payload)
        err = payload["error"]
        err.is_a?(Hash) ? err["message"] : err.to_s
      end
    end
  end
end
