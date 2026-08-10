<script lang="ts">
  import { onMount } from "svelte";
  import Chat from "./components/Chat.svelte";
  import Sidebar from "./components/Sidebar.svelte";
  import Composer from "./components/Composer.svelte";
  import Settings from "./components/Settings.svelte";
  import {
    abortTurn,
    applyTurnEvent,
    emptyTurn,
    fetchConfig,
    fetchConversation,
    fetchConversations,
    sendChat,
  } from "./lib/api";
  import type { ConfigResponse, Conversation, Message, TurnState } from "./lib/types";

  // ── State ──
  let config: ConfigResponse | null = $state(null);
  let conversations: Conversation[] = $state([]);
  let currentId: string | null = $state(null);
  let messages: Message[] = $state([]);
  let turn: TurnState = $state(emptyTurn());
  let streaming = $state(false);
  let sidebarOpen = $state(false);
  let settingsOpen = $state(false);
  let error = $state<string | null>(null);
  let controller: AbortController | null = null;

  const isMobile = $derived(window.innerWidth < 768);

  // ── Boot ──
  onMount(async () => {
    try {
      config = await fetchConfig();
      conversations = await fetchConversations();
    } catch (e: any) {
      error = `Cannot reach the harness server: ${e.message}`;
    }
  });

  // ── Conversation selection ──
  async function selectConversation(id: string) {
    if (streaming) return;
    try {
      const conv = await fetchConversation(id);
      currentId = conv.id;
      messages = (conv.messages ?? []).map((m) => ({ role: m.role, content: m.content }));
      turn = emptyTurn();
      settingsOpen = false;
      sidebarOpen = false;
      error = null;
    } catch (e: any) {
      error = e.message;
    }
  }

  function newConversation() {
    if (streaming) return;
    currentId = null;
    messages = [];
    turn = emptyTurn();
    error = null;
    sidebarOpen = false;
  }

  // ── Sending ──
  function send(text: string) {
    if (streaming || !text.trim()) return;

    // Fold the finished turn's text into the message list before starting
    // a new one (the live turn keeps rendering its artifacts until then).
    if (turn.text.trim() && (messages.length === 0 || messages[messages.length - 1].role !== "assistant")) {
      messages = [...messages, { role: "assistant", content: turn.text.trim() }];
    }

    const userMsg: Message = { role: "user", content: text.trim() };
    messages = [...messages, userMsg];
    turn = emptyTurn();
    streaming = true;
    error = null;

    controller = sendChat(
      userMsg.content,
      currentId,
      config?.defaultModel,
      (ev) => {
        if (ev.type === "error") {
          error = ev.data.error;
          turn.status = "failed";
          return;
        }
        applyTurnEvent(turn, ev.type, ev.data);
      },
      (id) => {
        currentId = id;
        refreshConversations();
      },
      () => {
        streaming = false;
        // The assistant message was persisted by the runner; the live turn
        // keeps rendering its text and artifacts in place.
        refreshConversations();
      }
    );
  }

  function stop() {
    if (controller) controller.abort();
    if (currentId) abortTurn(currentId).catch(() => {});
  }

  async function refreshConversations() {
    try {
      conversations = await fetchConversations();
    } catch {
      // non-fatal
    }
  }

  // ── Sidebar events ──
  function onConversationsChanged(updated: Conversation[]) {
    conversations = updated;
  }

  function onSelect(id: string) {
    selectConversation(id);
  }
</script>

<svelte:head>
  <title>{config?.workspace.name ?? "ask-coding-harness"}</title>
</svelte:head>

<div class="app">
  <header class="topbar">
    <button class="icon-btn hamburger" onclick={() => (sidebarOpen = !sidebarOpen)} aria-label="Toggle sidebar">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    </button>

    <div class="workspace">
      <span class="workspace-name">{config?.workspace.name ?? "…"}</span>
      {#if config?.workspace.gitBranch}
        <span class="branch">{config.workspace.gitBranch}</span>
      {/if}
    </div>

    <div class="topbar-actions">
      {#if streaming}
        <button class="icon-btn stop" onclick={stop} aria-label="Stop">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2" /></svg>
        </button>
      {/if}
      <button class="icon-btn" onclick={() => (settingsOpen = !settingsOpen)} aria-label="Settings">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.01a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.01a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.01a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </button>
    </div>
  </header>

  <div class="body">
    {#if sidebarOpen || !isMobile}
      <div class="sidebar-wrap">
        <Sidebar
          conversations={conversations}
          currentId={currentId}
          onSelect={onSelect}
          onNew={newConversation}
          onChanged={onConversationsChanged}
          onClose={() => (sidebarOpen = false)}
          streaming={streaming}
        />
      </div>
    {/if}

    <main class="main">
      {#if error && !streaming}
        <div class="banner-error">{error}</div>
      {/if}
      <Chat {messages} {turn} {streaming} conversationId={currentId} />

      <Composer
        {streaming}
        model={config?.defaultModel}
        onSend={send}
        onStop={stop}
        disabled={!config}
      />
    </main>
  </div>

  {#if settingsOpen}
    <Settings config={config} onClose={() => (settingsOpen = false)} />
  {/if}
</div>

<style>
  :global(*) {
    box-sizing: border-box;
  }
  :global(html, body) {
    margin: 0;
    height: 100%;
    background: var(--bg, #0b0b0c);
    color: var(--fg, #e5e5e5);
    font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  :global(#app) {
    height: 100%;
  }

  .app {
    display: flex;
    flex-direction: column;
    height: 100dvh;
  }

  .topbar {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.625rem 1rem;
    padding-top: calc(0.625rem + env(safe-area-inset-top));
    background: #111113;
    border-bottom: 1px solid #1f1f22;
    flex-shrink: 0;
    -webkit-user-select: none;
    user-select: none;
  }

  .workspace {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    min-width: 0;
    flex: 1;
  }
  .workspace-name {
    font-weight: 600;
    font-size: 0.9375rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .branch {
    font-size: 0.6875rem;
    color: #a3a3a3;
    background: #1a1a1d;
    border: 1px solid #2a2a2e;
    border-radius: 999px;
    padding: 0.125rem 0.5rem;
    white-space: nowrap;
  }

  .topbar-actions {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .icon-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: 0.5rem;
    background: transparent;
    color: #d4d4d4;
    cursor: pointer;
  }
  .icon-btn:hover {
    background: #1f1f22;
  }
  .icon-btn.stop {
    color: #f87171;
  }

  .body {
    display: flex;
    flex: 1;
    min-height: 0;
  }

  .sidebar-wrap {
    width: min(85vw, 19rem);
    flex-shrink: 0;
    border-right: 1px solid #1f1f22;
    background: #0e0e10;
    z-index: 20;
  }
  @media (max-width: 767px) {
    .sidebar-wrap {
      position: fixed;
      inset: 0 auto 0 0;
      height: 100dvh;
      box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
    }
  }

  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 0;
    position: relative;
  }

  .banner-error {
    margin: 0.75rem 1rem 0;
    padding: 0.625rem 0.875rem;
    border-radius: 0.625rem;
    background: #3f0d0d;
    color: #fca5a5;
    font-size: 0.8125rem;
    border: 1px solid #7f1d1d;
  }
</style>
