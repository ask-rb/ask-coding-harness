// Event types streamed from the harness over SSE (see EventTranslator).

export interface Conversation {
  id: string;
  title: string;
  directory?: string;
  archived: boolean;
  message_count: number;
  created_at?: string;
  updated_at?: string;
  messages?: Message[];
}

export interface Message {
  role: "user" | "assistant";
  content: string;
  created_at?: string;
}

export interface ToolEvent {
  id: string;
  name: string;
  args?: unknown;
  partial?: string;
  output?: string;
  isError?: boolean;
  durationMs?: number;
  status: "running" | "done" | "failed";
}

export interface Approval {
  id: number;
  toolName: string;
  args?: unknown;
  message?: string;
  autoApprovable?: boolean;
  status: "pending" | "approved" | "rejected";
}

export interface Todo {
  id: string;
  title: string;
  status: string;
}

export interface WorkspaceInfo {
  name: string;
  root: string;
  gitBranch: string | null;
  conversation_count?: number;
}

export interface ConfigResponse {
  models: string[];
  defaultModel: string;
  currentAdapter: string;
  workspace: WorkspaceInfo;
  features: {
    approvals: boolean;
    planMode: boolean;
    todos: boolean;
  };
}

// One assistant turn in progress: the streaming text plus all live
// artifacts (tools, approvals, todos, plan) attached to it.
export interface TurnState {
  text: string;
  thinking: string;
  tools: Map<string, ToolEvent>;
  approvals: Approval[];
  todos: Todo[];
  plan: string | null;
  planStatus: "proposed" | "approved" | "rejected" | null;
  status: "streaming" | "completed" | "failed" | "aborted";
}
