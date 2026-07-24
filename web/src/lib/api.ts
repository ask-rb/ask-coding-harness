const BASE = "";

export interface Project {
  directory: string;
  session_count: number;
}

export interface Session {
  id: string;
  title: string;
  updated_at?: number;
  message_count?: number;
}

export interface Message {
  role: "user" | "assistant";
  content: string;
  created_at?: string;
}

export interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  created_at?: string;
  updated_at?: string;
}

export async function fetchProjects(): Promise<Project[]> {
  const res = await fetch(`${BASE}/api/projects`);
  if (!res.ok) throw new Error(`Failed to fetch projects: ${res.status}`);
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

export async function fetchSessions(projectDir: string): Promise<Session[]> {
  const encoded = encodeURIComponent(projectDir);
  const res = await fetch(`${BASE}/api/projects/${encoded}/sessions`);
  if (!res.ok) throw new Error(`Failed to fetch sessions: ${res.status}`);
  return await res.json();
}

export async function fetchSessionMessages(id: string): Promise<Conversation> {
  const res = await fetch(`${BASE}/api/sessions/${id}`);
  if (!res.ok) throw new Error(`Failed to fetch session: ${res.status}`);
  return await res.json();
}

export async function fetchConversation(id: string): Promise<Conversation> {
  const res = await fetch(`${BASE}/api/conversations/${id}`);
  if (!res.ok) throw new Error(`Failed to fetch conversation: ${res.status}`);
  return await res.json();
}

export async function fetchConversations(): Promise<Conversation[]> {
  const res = await fetch(`${BASE}/api/conversations`);
  if (!res.ok) throw new Error(`Failed to fetch conversations: ${res.status}`);
  return await res.json();
}

export async function forkSession(sessionId: string): Promise<{ id: string; parent_id: string }> {
  const res = await fetch(`${BASE}/api/sessions/${sessionId}/fork`, { method: "POST" });
  if (!res.ok) throw new Error(`Failed to fork session: ${res.status}`);
  return await res.json();
}

export function sendChatMessage(
  message: string,
  conversationId?: string,
  onEvent: (event: { type: string; data: any }) => void,
  onError: (error: string) => void,
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
          conversation_id: conversationId,
        }),
        signal: controller.signal,
      });

      if (!res.ok) {
        onError(`HTTP ${res.status}`);
        onDone();
        return;
      }

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            try {
              const data = JSON.parse(line.slice(6));
              onEvent({ type: "data", data });
            } catch {
              // Not JSON, might be a raw string (conversation id)
              onEvent({ type: "meta", data: line.slice(6) });
            }
          }
        }
      }
      onDone();
    } catch (e: any) {
      if (e.name !== "AbortError") {
        onError(e.message);
      }
      onDone();
    }
  })();

  return controller;
}
