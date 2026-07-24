<script lang="ts">
  import { onMount } from "svelte";
  import { theme, sidebarOpen, isMobile, projects, currentSessionId, currentMessages, streaming, streamingText, isLoading, chatTitle, toggleTheme, openSidebar } from "./lib/stores";
  import { fetchProjects, fetchSessions, fetchSessionMessages, sendChatMessage, type Project, type Message } from "./lib/api";
  import Chat from "./components/Chat.svelte";
  import Welcome from "./components/Welcome.svelte";

  let expandedDirs: Set<string> = new Set();
  let sessionCache: Record<string, any[]> = {};
  let projectsList: Project[] = [];
  let inputText = "";
  let abortController: AbortController | null = null;

  $: projects.set(projectsList);

  onMount(() => {
    loadTheme();
    loadProjects();
    checkMobile();
    window.addEventListener("resize", checkMobile);
  });

  function checkMobile() {
    isMobile.set(window.innerWidth < 768);
  }

  function loadTheme() {
    const dark = localStorage.getItem("theme") !== "light";
    document.body.classList.toggle("light", !dark);
    theme.set(dark ? "dark" : "light");
  }

  function handleToggleTheme() {
    const dark = $theme === "dark";
    document.body.classList.toggle("light", dark);
    localStorage.setItem("theme", dark ? "light" : "dark");
    toggleTheme();
  }

  async function loadProjects() {
    isLoading.set(true);
    try {
      projectsList = await fetchProjects();
    } catch (e) {
      projectsList = [];
    } finally {
      isLoading.set(false);
    }
  }

  async function toggleProject(dir: string) {
    if (expandedDirs.has(dir)) {
      expandedDirs.delete(dir);
      expandedDirs = expandedDirs;
      return;
    }
    expandedDirs.add(dir);
    expandedDirs = expandedDirs;
    if (!sessionCache[dir]) {
      try {
        sessionCache[dir] = await fetchSessions(dir);
      } catch { sessionCache[dir] = []; }
    }
  }

  async function selectSession(id: string) {
    currentSessionId.set(id);
    sidebarOpen.set(false);
    try {
      const conv = await fetchSessionMessages(id);
      currentMessages.set(conv.messages || []);
    } catch { currentMessages.set([]); }
  }

  function newChat() {
    currentSessionId.set(null);
    currentMessages.set([]);
    streamingText.set("");
    sidebarOpen.set(false);
  }

  async function handleSend(text: string) {
    if ($streaming || !text.trim()) return;
    const userMsg: Message = { role: "user", content: text };
    currentMessages.update((msgs) => [...msgs, userMsg]);
    inputText = "";
    streaming.set(true);
    streamingText.set("");

    let cid = $currentSessionId || undefined;
    abortController = sendChatMessage(
      text,
      cid,
      (event) => {
        if (event.type === "meta" && typeof event.data === "string" && event.data.startsWith("sess_")) {
          currentSessionId.set(event.data);
        }
        if (event.type === "data" && event.data.response) {
          streamingText.set("");
          currentMessages.update((msgs) => [...msgs, { role: "assistant", content: event.data.response }]);
          loadProjects();
        }
        if (event.type === "data" && event.data.delta) {
          streamingText.update((t) => t + event.data.delta);
        }
        if (event.type === "data" && event.data.error) {
          console.error(event.data.error);
        }
      },
      (err) => {
        currentMessages.update((msgs) => [...msgs, { role: "assistant", content: `Error: ${err}` }]);
      },
      () => {
        streaming.set(false);
        abortController = null;
      }
    );
  }

  function cancelStream() {
    abortController?.abort();
    streaming.set(false);
    const finalText = $streamingText;
    if (finalText) {
      currentMessages.update((msgs) => [...msgs, { role: "assistant", content: finalText }]);
      streamingText.set("");
    }
  }
</script>

<div class="app">
  <div class="sidebar-overlay" class:show={$sidebarOpen} onclick={() => sidebarOpen.set(false)} />

  <aside class="sidebar" class:open={$sidebarOpen}>
    <div class="sidebar-header">
      <h1>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
        </svg>
        Askoda
      </h1>
      <div class="sidebar-actions">
        <button onclick={newChat} title="New chat">✚</button>
        <button onclick={handleToggleTheme} title="Toggle theme">{document.body.classList.contains("light") ? "☾" : "☀"}</button>
      </div>
    </div>
    <div class="sidebar-scroll">
      {#if $isLoading}
        <div class="loading">Loading projects...</div>
      {:else if projectsList.length === 0}
        <div class="empty">No projects found</div>
      {:else}
        {#each projectsList as proj (proj.directory)}
          <div class="proj-group">
            <button class="proj-header" onclick={() => toggleProject(proj.directory)}>
              <span class="arrow" class:open={expandedDirs.has(proj.directory)}>▶</span>
              <span>📁 {proj.directory.split("/").filter(Boolean).pop()}</span>
              <span class="count">{proj.session_count || 0}</span>
            </button>
            {#if expandedDirs.has(proj.directory) && sessionCache[proj.directory]}
              <div class="session-list">
                {#each sessionCache[proj.directory] as sess}
                  <button
                    class="sess-item"
                    class:active={sess.id === $currentSessionId}
                    onclick={() => selectSession(sess.id)}
                  >
                    <div class="title">{sess.title || "Untitled"}</div>
                    <div class="meta">{sess.message_count || 0} msgs</div>
                  </button>
                {/each}
              </div>
            {/if}
          </div>
        {/each}
      {/if}
    </div>
  </aside>

  <main class="main">
    {#if $currentMessages.length === 0 && !$streamingText}
      <Welcome {newChat} />
    {:else}
      <Chat
        messages={$currentMessages}
        streamingText={$streamingText}
        isStreaming={$streaming}
        onSend={handleSend}
        onCancel={cancelStream}
      />
    {/if}
  </main>
</div>

<style>
  .app { display: flex; height: 100%; overflow: hidden; }
  
  .sidebar-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,.5); z-index: 99; }
  .sidebar-overlay.show { display: block; }

  .sidebar {
    width: 280px; flex-shrink: 0; border-right: 1px solid var(--border);
    background: var(--surface); display: flex; flex-direction: column; z-index: 100;
  }
  .sidebar-header {
    padding: 14px 16px; border-bottom: 1px solid var(--border);
    display: flex; align-items: center; justify-content: space-between;
  }
  .sidebar-header h1 { font-size: 15px; font-weight: 600; display: flex; align-items: center; gap: 8px; }
  .sidebar-header h1 svg { color: var(--accent); }
  .sidebar-actions { display: flex; gap: 4px; }
  .sidebar-actions button {
    width: 30px; height: 30px; border-radius: 6px; border: 1px solid var(--border);
    background: var(--surface2); color: var(--text); cursor: pointer;
    display: flex; align-items: center; justify-content: center; font-size: 14px;
  }
  .sidebar-actions button:hover { background: var(--accent); color: #fff; border-color: var(--accent); }

  .sidebar-scroll { flex: 1; overflow-y: auto; padding: 8px; }
  .loading, .empty { padding: 16px; text-align: center; color: var(--muted); font-size: 13px; }

  .proj-group { margin-bottom: 4px; }
  .proj-header {
    width: 100%; padding: 8px 10px; border-radius: 6px; cursor: pointer;
    display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 500;
    color: var(--muted); background: none; border: none; text-align: left;
  }
  .proj-header:hover { background: var(--surface2); color: var(--text); }
  .arrow { font-size: 10px; transition: transform .15s; width: 14px; text-align: center; flex-shrink: 0; }
  .arrow.open { transform: rotate(90deg); }
  .count { font-size: 11px; color: var(--muted); margin-left: auto; }
  .session-list { padding-left: 8px; }
  .sess-item {
    width: 100%; padding: 8px 10px; border-radius: 6px; cursor: pointer; font-size: 13px;
    border: 1px solid transparent; margin-bottom: 1px; background: none; color: var(--text); text-align: left; display: block;
  }
  .sess-item:hover { background: var(--surface2); }
  .sess-item.active { background: var(--surface2); border-color: var(--border); }
  .sess-item .title { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .sess-item .meta { font-size: 11px; color: var(--muted); margin-top: 2px; }

  .main { flex: 1; display: flex; flex-direction: column; min-width: 0; }

  @media (max-width: 768px) {
    .sidebar { position: fixed; top: 0; left: 0; bottom: 0; transform: translateX(-100%); width: 85vw; max-width: 320px; transition: transform .2s; }
    .sidebar.open { transform: translateX(0); }
  }
</style>
