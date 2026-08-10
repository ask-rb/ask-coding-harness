import type { ConfigResponse, Conversation, Message, TurnState, WorkspaceInfo } from "./types";

const BASE = "";

async function json<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `HTTP ${res.status}`);
  }
  return res.json();
}

export async function fetchConfig(): Promise<ConfigResponse> {
  return json(await fetch(`${BASE}/api/config`));
}

export async function fetchWorkspaces(): Promise<WorkspaceInfo[]> {
  return json(await fetch(`${BASE}/api/workspaces`));
}

export interface AgentInfo {
  name: string;
  instructions: string | null;
}

export async function fetchAgents(workspace: string): Promise<AgentInfo[]> {
  const encoded = encodeURIComponent(workspace);
  return json(await fetch(`${BASE}/api/workspaces/${encoded}/agents`));
}

export async function openWorkspace(path: string): Promise<WorkspaceInfo> {
  return json(
    await fetch(`${BASE}/api/workspaces`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path }),
    })
  );
}

export async function fetchConversations(): Promise<Conversation[]> {
  return json(await fetch(`${BASE}/api/conversations`));
}

export async function fetchConversation(id: string): Promise<Conversation> {
  return json(await fetch(`${BASE}/api/conversations/${id}`));
}

export async function renameConversation(id: string, title: string): Promise<void> {
  await json(
    await fetch(`${BASE}/api/conversations/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    })
  );
}

export async function deleteConversation(id: string): Promise<void> {
  await json(await fetch(`${BASE}/api/conversations/${id}`, { method: "DELETE" }));
}

export async function archiveConversation(id: string): Promise<void> {
  await json(await fetch(`${BASE}/api/conversations/${id}/archive`, { method: "POST" }));
}

export async function editMessage(id: string, index: number, content: string): Promise<void> {
  await json(
    await fetch(`${BASE}/api/conversations/${id}/messages/${index}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    })
  );
}

export async function deleteMessagesFrom(id: string, index: number): Promise<void> {
  await json(await fetch(`${BASE}/api/conversations/${id}/messages/${index}`, { method: "DELETE" }));
}

export async function approveAction(id: string, actionId: number): Promise<void> {
  await json(await fetch(`${BASE}/api/conversations/${id}/approvals/${actionId}/approve`, { method: "POST" }));
}

export async function rejectAction(id: string, actionId: number): Promise<void> {
  await json(await fetch(`${BASE}/api/conversations/${id}/approvals/${actionId}/reject`, { method: "POST" }));
}

export async function approveAll(id: string): Promise<void> {
  await json(await fetch(`${BASE}/api/conversations/${id}/approvals/approve-all`, { method: "POST" }));
}

export async function approvePlan(id: string): Promise<void> {
  await json(await fetch(`${BASE}/api/conversations/${id}/plan/approve`, { method: "POST" }));
}

export async function rejectPlan(id: string): Promise<void> {
  await json(await fetch(`${BASE}/api/conversations/${id}/plan/reject`, { method: "POST" }));
}

export async function abortTurn(id: string): Promise<void> {
  await json(await fetch(`${BASE}/api/conversations/${id}/abort`, { method: "POST" }));
}

/**
 * Send a message and stream harness events via SSE (fetch + ReadableStream).
 *
 * @param onEvent called with every streamed event ({ type, data })
 * @param onCreated called with the conversation id when a new conversation
 *   is created by this message
 * @returns an AbortController to cancel the stream
 */
export function sendChat(
  message: string,
  conversationId: string | null,
  model: string | undefined,
  workspace: string | undefined,
  agent: string | undefined,
  onEvent: (ev: { type: string; data: any }) => void,
  onCreated: (id: string) => void,
  onDone: () => void
): AbortController {
  const controller = new AbortController();

  (async () => {
    try {
      const res = await fetch(`${BASE}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          conversation_id: conversationId || undefined,
          model: model || undefined,
          workspace: workspace || undefined,
          agent: agent || undefined,
        }),
        signal: controller.signal,
      });

      if (!res.ok || !res.body) {
        throw new Error(`HTTP ${res.status}`);
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        // SSE frames: "event: <type>\ndata: <json>\n\n"
        let idx: number;
        while ((idx = buffer.indexOf("\n\n")) !== -1) {
          const frame = buffer.slice(0, idx);
          buffer = buffer.slice(idx + 2);
          const evType = frame.match(/^event: (.+)$/m)?.[1];
          const dataLine = frame.match(/^data: (.+)$/m)?.[1];
          if (!evType || dataLine === undefined) continue;

          if (evType === "conversation.created") {
            onCreated(dataLine);
            continue;
          }
          let data: any = {};
          try {
            data = JSON.parse(dataLine);
          } catch {
            // keep {}
          }
          onEvent({ type: evType, data });
        }
      }
    } catch (e: any) {
      if (e.name !== "AbortError") {
        onEvent({ type: "error", data: { error: e.message } });
      }
    } finally {
      onDone();
    }
  })();

  return controller;
}

/**
 * Apply a streamed harness event to a TurnState in place (immutable-ish:
 * returns a new TurnState via the caller's reactivity).
 */
export function applyTurnEvent(state: TurnState, type: string, data: any): void {
  switch (type) {
    case "message.delta":
      state.text += data.delta ?? "";
      break;
    case "message.thinking":
      state.thinking += data.delta ?? "";
      break;
    case "tool.start": {
      const id = String(data.id ?? `${data.name}-${state.tools.size}`);
      // Svelte 5 $state does not proxy Map mutations — replace the Map so
      // the UI re-renders.
      state.tools = new Map(state.tools).set(id, { id, name: data.name, args: data.args, status: "running" });
      break;
    }
    case "tool.delta": {
      const id = String(data.id);
      const tool = state.tools.get(id);
      if (tool) {
        state.tools = new Map(state.tools).set(id, { ...tool, partial: (tool.partial ?? "") + (data.partial ?? "") });
      }
      break;
    }
    case "tool.end": {
      const id = String(data.id);
      const tool = state.tools.get(id) ?? { id, name: data.name, status: "done" };
      state.tools = new Map(state.tools).set(id, {
        ...tool,
        output: data.output,
        isError: data.isError,
        durationMs: data.durationMs,
        status: data.isError ? "failed" : "done",
      });
      break;
    }
    case "approval.required":
      state.approvals.push({
        id: data.id,
        toolName: data.toolName,
        args: data.args,
        message: data.message,
        autoApprovable: data.autoApprovable,
        status: "pending",
      });
      break;
    case "approval.updated": {
      const a = state.approvals.find((x) => x.id === data.id);
      if (a) a.status = data.status;
      break;
    }
    case "plan.proposed":
      state.plan = data.plan;
      state.planStatus = "proposed";
      break;
    case "plan.approved":
      state.plan = data.plan ?? state.plan;
      state.planStatus = "approved";
      break;
    case "plan.rejected":
      state.plan = data.plan ?? state.plan;
      state.planStatus = "rejected";
      break;
    case "todos.updated":
      state.todos = data.todos ?? [];
      break;
    case "turn.completed":
      state.status = "completed";
      if (data.response && !state.text) state.text = data.response;
      break;
    case "turn.failed":
      state.status = "failed";
      break;
    case "turn.aborted":
      state.status = "aborted";
      break;
  }
}

export function emptyTurn(): TurnState {
  return {
    text: "",
    thinking: "",
    tools: new Map(),
    approvals: [],
    todos: [],
    plan: null,
    planStatus: null,
    status: "streaming",
  };
}

export function serializeMessages(messages: Message[], turn: TurnState): Message[] {
  const out = [...messages];
  const content =
    turn.text.trim() ||
    (turn.status === "failed" ? "The turn failed." : turn.status === "aborted" ? "Turn aborted." : "");
  if (content) {
    out.push({ role: "assistant", content });
  }
  return out;
}
