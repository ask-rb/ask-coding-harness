import { describe, expect, it } from "vitest";
import { applyTurnEvent, emptyTurn, serializeMessages } from "./api";

describe("applyTurnEvent", () => {
  it("accumulates message deltas", () => {
    const t = emptyTurn();
    applyTurnEvent(t, "message.delta", { delta: "Hel" });
    applyTurnEvent(t, "message.delta", { delta: "lo" });
    expect(t.text).toBe("Hello");
  });

  it("accumulates thinking deltas", () => {
    const t = emptyTurn();
    applyTurnEvent(t, "message.thinking", { delta: "hmm" });
    expect(t.thinking).toBe("hmm");
  });

  it("tracks the tool lifecycle", () => {
    const t = emptyTurn();
    applyTurnEvent(t, "tool.start", { id: "call_1", name: "bash", args: { command: "ls" } });
    const tool = t.tools.get("call_1")!;
    expect(tool.name).toBe("bash");
    expect(tool.status).toBe("running");

    applyTurnEvent(t, "tool.delta", { id: "call_1", partial: "out1" });
    applyTurnEvent(t, "tool.delta", { id: "call_1", partial: "out2" });
    expect(t.tools.get("call_1")!.partial).toBe("out1out2");

    applyTurnEvent(t, "tool.end", { id: "call_1", output: "done", isError: false, durationMs: 10 });
    expect(t.tools.get("call_1")!.status).toBe("done");
    expect(t.tools.get("call_1")!.output).toBe("done");

    applyTurnEvent(t, "tool.start", { id: "call_2", name: "write" });
    applyTurnEvent(t, "tool.end", { id: "call_2", output: "err", isError: true });
    expect(t.tools.get("call_2")!.status).toBe("failed");
  });

  it("tracks approvals", () => {
    const t = emptyTurn();
    applyTurnEvent(t, "approval.required", { id: 7, toolName: "bash", args: {}, message: "m" });
    expect(t.approvals).toHaveLength(1);
    expect(t.approvals[0].status).toBe("pending");

    applyTurnEvent(t, "approval.updated", { id: 7, status: "approved" });
    expect(t.approvals[0].status).toBe("approved");
  });

  it("tracks the plan lifecycle", () => {
    const t = emptyTurn();
    applyTurnEvent(t, "plan.proposed", { plan: "Step 1" });
    expect(t.plan).toBe("Step 1");
    expect(t.planStatus).toBe("proposed");
    applyTurnEvent(t, "plan.approved", {});
    expect(t.planStatus).toBe("approved");
  });

  it("updates todos", () => {
    const t = emptyTurn();
    applyTurnEvent(t, "todos.updated", { todos: [{ id: "1", title: "a", status: "in_progress" }] });
    expect(t.todos).toHaveLength(1);
  });

  it("transitions turn status", () => {
    const t = emptyTurn();
    applyTurnEvent(t, "turn.completed", { response: "done" });
    expect(t.status).toBe("completed");
    expect(t.text).toBe("done");

    const t2 = emptyTurn();
    applyTurnEvent(t2, "turn.failed", { error: "boom" });
    expect(t2.status).toBe("failed");

    const t3 = emptyTurn();
    applyTurnEvent(t3, "turn.aborted", {});
    expect(t3.status).toBe("aborted");
  });
});

describe("serializeMessages", () => {
  it("appends the assistant message when the turn has text", () => {
    const t = emptyTurn();
    applyTurnEvent(t, "message.delta", { delta: "answer" });
    const out = serializeMessages([{ role: "user", content: "q" }], t);
    expect(out).toHaveLength(2);
    expect(out[1]).toEqual({ role: "assistant", content: "answer" });
  });

  it("writes a placeholder for failed turns without text", () => {
    const t = emptyTurn();
    applyTurnEvent(t, "turn.failed", { error: "x" });
    const out = serializeMessages([], t);
    expect(out[0].content).toBe("The turn failed.");
  });
});
