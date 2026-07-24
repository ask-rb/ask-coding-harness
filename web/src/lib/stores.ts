import { writable, derived } from "svelte/store";
import type { Project, Message } from "./api";

export const theme = writable<"dark" | "light">("dark");
export const sidebarOpen = writable(false);
export const isMobile = writable(false);

export const projects = writable<Project[]>([]);
export const currentSessionId = writable<string | null>(null);
export const currentMessages = writable<Message[]>([]);
export const streaming = writable(false);
export const streamingText = writable("");
export const toolCalls = writable<ToolCall[]>([]);

export interface ToolCall {
  id: number;
  name: string;
  input?: any;
  output?: any;
  status: "running" | "completed" | "failed";
}

export const isLoading = writable(false);
export const globalError = writable<string | null>(null);
export const connectionError = writable<string | null>(null);

function loadModel(): string {
  if (typeof localStorage !== "undefined") {
    return localStorage.getItem("askoda_model") || "deepseek-v4-flash";
  }
  return "deepseek-v4-flash";
}

export const currentModel = writable<string>(loadModel());
export const availableModels = writable<string[]>(["deepseek-v4-flash"]);

currentModel.subscribe((val) => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("askoda_model", val);
  }
});

export function clearErrors() {
  globalError.set(null);
  connectionError.set(null);
}

export const chatTitle = derived(currentSessionId, ($id) =>
  $id ? `Session ${$id.slice(0, 8)}` : "Askoda"
);

export function toggleTheme() {
  theme.update((t) => (t === "dark" ? "light" : "dark"));
}

export function openSidebar() {
  if (isMobile) sidebarOpen.set(true);
}
