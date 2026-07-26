<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { theme, sidebarOpen, isMobile, projects, currentSessionId, currentMessages, streaming, streamingText, isLoading, toggleTheme, toolCalls, type ToolCall, globalError, connectionError, clearErrors, currentModel, availableModels } from "./lib/stores";
  import { fetchProjects, fetchSessions, sendChatMessage, fetchConversations, fetchConversation, editMessage, deleteMessagesFrom, renameConversation, archiveConversation, fetchFileList, fetchFileContent, fetchConfig, type Project, type Message, type Conversation } from "./lib/api";
  import ErrorBoundary from "./components/ErrorBoundary.svelte";
  import Settings from "./components/Settings.svelte";
  import Chat from "./components/Chat.svelte";
  import Welcome from "./components/Welcome.svelte";

  let expandedDirs: Set<string> = new Set();
  let sessionCache: Record<string, any[]> = {};
  let projectsList: Project[] = [];
  let conversationsList: Conversation[] = [];
  let archivedConversations: Conversation[] = [];
  let currentConversationId: string | null = null;
  let selectedDirectory: string | null = null;
  let renamingConvId: string | null = null;
  let renamingTitle = "";
  let attachedFiles: string[] = [];
  let fileList: string[] = [];
  let abortController: AbortController | null = null;
  let connected = false;
  let showCmdPalette = false;
  let cmdFilter = "";
  let toolIdCounter = 0;
  let touchStartX = 0;
  let refresing = false;
  let showSettings = false;

  $: projects.set(projectsList);

	  onMount(() => {
	    loadTheme();
	    loadProjects();
	    loadConversations();
	    loadFileList();
	    loadConfig();
    checkMobile();
    checkConnection();
    handleRoute();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("keydown", handleKey);
    window.addEventListener("hashchange", handleRoute);
    window.addEventListener("popstate", handleRoute);
  });

  onDestroy(() => {
    window.removeEventListener("resize", checkMobile);
    window.removeEventListener("keydown", handleKey);
    window.removeEventListener("hashchange", handleRoute);
    window.removeEventListener("popstate", handleRoute);
  });

  function checkMobile() { isMobile.set(window.innerWidth < 768); }

  function handleTouchStart(e: TouchEvent) {
    touchStartX = e.touches[0].clientX;
  }

  function handleTouchEnd(e: TouchEvent) {
    if (!isMobile) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (dx > 60) sidebarOpen.set(true);
    if (dx < -60) sidebarOpen.set(false);
  }

  function handlePullStart() {
    refresing = true;
    loadProjects();
    setTimeout(() => refresing = false, 1000);
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

  function handleKey(e: KeyboardEvent) {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      showCmdPalette = !showCmdPalette;
      cmdFilter = "";
    }
    if ((e.metaKey || e.ctrlKey) && e.key === "n") {
      e.preventDefault();
      newChat();
    }
    if (e.key === "Escape") {
      showCmdPalette = false;
      showSettings = false;
      sidebarOpen.set(false);
    }
    // / or . to focus chat input when not already in an input
    if ((e.key === "/" || e.key === ".") && !(e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement)) {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent("focus-chat-input"));
    }
  }

  async function checkConnection() {
    try {
      const res = await fetch("/api/projects");
      connected = res.ok;
      if (!connected) connectionError.set("Cannot connect to server. Check that Askoda is running.");
      else connectionError.set(null);
    } catch {
      connected = false;
      connectionError.set("Connection lost. Is the server still running?");
    }
    setTimeout(checkConnection, 30000);
  }

  function handleRoute() {
    const hash = location.hash.slice(1) || location.pathname;
    const match = hash.match(/^\/session\/(.+)/);
    if (match) selectSession(match[1]);
  }

  function navigateToSession(id: string) {
    history.pushState(null, "", `/session/${id}`);
    selectSession(id);
  }

  async function loadProjects() {
    isLoading.set(true);
    try {
      projectsList = await fetchProjects();
    } catch { projectsList = []; }
    finally { isLoading.set(false); }
  }

  async function loadConversations() {
    try { conversationsList = await fetchConversations(); }
    catch { conversationsList = []; }
    try {
      const res = await fetch("/api/conversations?archived=true");
      if (res.ok) archivedConversations = await res.json();
    } catch { archivedConversations = []; }
  }

  async function loadFileList() {
    try { fileList = await fetchFileList(); }
    catch { fileList = []; }
  }

  async function loadConfig() {
    try {
      const cfg = await fetchConfig();
      availableModels.set(cfg.models);
      if (cfg.defaultModel) {
        currentModel.set(cfg.defaultModel);
      }
    } catch { /* use defaults */ }
  }

  function toggleFileAttachment(file: string) {
    if (attachedFiles.includes(file)) {
      attachedFiles = attachedFiles.filter((f) => f !== file);
    } else {
      attachedFiles = [...attachedFiles, file];
    }
  }

  function clearAttachments() {
    attachedFiles = [];
  }

  async function restoreConversation() {
    const savedId = localStorage.getItem("active_conversation_id");
    if (savedId && conversationsList.some((c) => c.id === savedId)) {
      await selectConversation(savedId);
    }
  }

  async function toggleProject(dir: string) {
    if (expandedDirs.has(dir)) { expandedDirs.delete(dir); expandedDirs = expandedDirs; return; }
    expandedDirs.add(dir);
    expandedDirs = expandedDirs;
    if (!sessionCache[dir]) {
      try { sessionCache[dir] = await fetchSessions(dir); } catch { sessionCache[dir] = []; }
    }
  }

  async function selectSession(id: string) {
    currentSessionId.set(id);
    sidebarOpen.set(false);
    try {
      const conv = await fetchConversation(id);
      currentMessages.set(conv.messages || []);
    } catch { currentMessages.set([]); }
  }

  function newChat() {
    history.pushState(null, "", "/");
    currentSessionId.set(null);
    currentConversationId = null;
    selectedDirectory = null;
    currentMessages.set([]);
    streamingText.set("");
    sidebarOpen.set(false);
  }

  function startProjectConversation(dir: string) {
    history.pushState(null, "", "/");
    currentSessionId.set(null);
    currentConversationId = null;
    selectedDirectory = dir;
    currentMessages.set([]);
    streamingText.set("");
    sidebarOpen.set(false);
  }

  async function selectConversation(id: string) {
    currentConversationId = id;
    localStorage.setItem("active_conversation_id", id);
    sidebarOpen.set(false);
    try {
      const conv = await fetchConversation(id);
      currentMessages.set(conv.messages || []);
    } catch { currentMessages.set([]); }
  }

  async function handleSend(text: string) {
    if ($streaming || !text.trim()) return;

    // Prepend attached file contents
    let finalText = text.trim();
    if (attachedFiles.length > 0) {
      const parts: string[] = [];
      for (const f of attachedFiles) {
        try {
          const { content } = await fetchFileContent(f);
          parts.push(`📄 ${f}\n\`\`\`\n${content}\n\`\`\``);
        } catch { /* skip files that fail to load */ }
      }
      if (parts.length > 0) {
        finalText = parts.join("\n\n") + "\n\n" + finalText;
      }
      clearAttachments();
    }

    const userMsg: Message = { role: "user", content: finalText };
    currentMessages.update((msgs) => [...msgs, userMsg]);
    streaming.set(true);
    streamingText.set("");
    toolCalls.set([]);

    let cid = currentConversationId || undefined;
    let dir = selectedDirectory || undefined;
    selectedDirectory = null;
    abortController = sendChatMessage(
      text, cid, $currentModel, dir,
      (event) => {
        if (event.type === "meta" && typeof event.data === "string" && event.data.length > 10) {
          currentConversationId = event.data;
          localStorage.setItem("active_conversation_id", event.data);
          loadConversations();
        }
        if (event.type === "data" && event.data.response) {
          streamingText.set("");
          toolCalls.set([]);
          currentMessages.update((msgs) => [...msgs, { role: "assistant", content: event.data.response }]);
          loadProjects();
          loadConversations();
        }
        if (event.type === "data" && event.data.delta) {
          streamingText.update((t) => t + event.data.delta);
        }
        if (event.type === "data" && event.data.toolUse) {
          const tc: ToolCall = { id: ++toolIdCounter, name: event.data.toolUse, status: "running", input: event.data.input };
          toolCalls.update((calls) => [...calls, tc]);
        }
        if (event.type === "data" && event.data.toolResult) {
          toolCalls.update((calls) => {
            const last = calls[calls.length - 1];
            if (last) { last.status = "completed"; last.output = event.data.toolResult; last.input = event.data.input; }
            return calls;
          });
        }
      },
      (err) => currentMessages.update((msgs) => [...msgs, { role: "assistant", content: `Error: ${err}` }]),
      () => { streaming.set(false); abortController = null; }
    );
  }

  function cancelStream() {
    abortController?.abort();
    streaming.set(false);
    const finalText = $streamingText;
    if (finalText) { currentMessages.update((msgs) => [...msgs, { role: "assistant", content: finalText }]); streamingText.set(""); }
  }

  async function handleEdit(index: number, content: string) {
    if (!currentConversationId) return;
    try {
      const updated = await editMessage(currentConversationId, index, content);
      currentMessages.set(updated.messages || []);
      loadConversations();
    } catch (e) {
      console.error("Edit failed:", e);
    }
  }

  async function handleDelete(index: number) {
    if (!currentConversationId) return;
    try {
      const updated = await deleteMessagesFrom(currentConversationId, index);
      currentMessages.set(updated.messages || []);
      loadConversations();
    } catch (e) {
      console.error("Delete failed:", e);
    }
  }

  async function handleRetry(index: number) {
    if (!currentConversationId) return;
    if ($streaming) return;
    const msgs = $currentMessages;
    // Find the user message that preceded this error
    const userIdx = index > 0 && msgs[index - 1]?.role === "user" ? index - 1 : index;
    const userText = msgs[userIdx]?.content || "";
    try {
      const updated = await deleteMessagesFrom(currentConversationId, userIdx);
      currentMessages.set(updated.messages || []);
      loadConversations();
    } catch (e) {
      console.error("Retry delete failed:", e);
      return;
    }
    if (userText) {
      handleSend(userText);
    }
  }

  function startRename(convId: string, currentTitle: string) {
    renamingConvId = convId;
    renamingTitle = currentTitle;
  }

  async function saveRename(convId: string) {
    if (!renamingTitle.trim()) { cancelRename(); return; }
    try {
      await renameConversation(convId, renamingTitle.trim());
      renamingConvId = null;
      renamingTitle = "";
      loadConversations();
    } catch (e) {
      console.error("Rename failed:", e);
    }
  }

  function cancelRename() {
    renamingConvId = null;
    renamingTitle = "";
  }

  async function handleArchive(convId: string) {
    try {
      await archiveConversation(convId);
      // If currently viewing this conversation, clear it
      if (currentConversationId === convId) {
        newChat();
      }
      loadConversations();
    } catch (e) {
      console.error("Archive failed:", e);
    }
  }

  $: filteredCommands = [
    { id: "new", label: "New conversation", action: newChat },
    { id: "projects", label: "Reload projects", action: loadProjects },
    { id: "theme", label: "Toggle theme", action: handleToggleTheme },
  ].filter((c) => c.label.toLowerCase().includes(cmdFilter.toLowerCase()));
</script>

<div class="app">
  <div class="sidebar-overlay" class:show={$sidebarOpen} onclick={() => sidebarOpen.set(false)} />

		  <aside class="sidebar" class:open={$sidebarOpen}>
		    <div class="sidebar-header">
		      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20" height="20" style="color: var(--accent); flex-shrink: 0;">
		        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
		      </svg>
		      <h1>Askoda</h1>
		      <div class="sidebar-actions">
		        <button onclick={newChat} title="New chat (⌘N)">✚</button>
		        <button onclick={() => showSettings = true} title="Settings">⚙</button>
		        <button onclick={handleToggleTheme} title="Toggle theme">{$theme === "dark" ? "☀" : "☾"}</button>
		      </div>
		    </div>
		    <div class="sidebar-scroll">
		      <!-- Projects -->
		      <div class="sidebar-section-label">
		        <span>Projects</span>
		        <button class="section-action-btn" onclick={loadProjects} title="Refresh projects">↻</button>
		      </div>
		      {#if projectsList.length > 0}
		        {#each projectsList as proj (proj.directory)}
		          <div class="nav-project">
		            <button class="nav-item proj-toggle" onclick={() => toggleProject(proj.directory)}>
		              <span class="nav-arrow" class:open={expandedDirs.has(proj.directory)}>
		                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="10" height="10"><path d="M9 18l6-6-6-6"/></svg>
		              </span>
		              <span class="nav-icon">📁</span>
		              <span class="nav-label">{proj.name}</span>
		              {#if proj.conversation_count}
		                <span class="nav-badge">{proj.conversation_count}</span>
		              {/if}
		            </button>
		            <button class="nav-new-btn" onclick={() => startProjectConversation(proj.directory)} title="New conversation in this project">✚</button>
		          </div>
		          {#if expandedDirs.has(proj.directory) && sessionCache[proj.directory]}
		            <div class="subnav">
		              {#each sessionCache[proj.directory] as sess}
		                <div class="subnav-item-wrapper">
		                  <button class="subnav-item" class:active={sess.id === $currentSessionId}
		                    onclick={() => navigateToSession(sess.id)}>
		                    <span class="subnav-title">{sess.title || "Untitled"}</span>
		                  </button>
		                  <div class="subnav-actions">
		                    <button class="subnav-action" onclick={() => startRename(sess.id, sess.title || "Untitled")} title="Rename">✏️</button>
		                    <button class="subnav-action" onclick={() => handleArchive(sess.id)} title="Archive">📦</button>
		                  </div>
		                </div>
		              {/each}
		            </div>
		          {/if}
		        {/each}
		      {:else if !$isLoading}
		        <div class="sidebar-empty">No projects yet. Start a conversation in a project to see it here.</div>
		      {/if}

		      <!-- Conversations -->
		      <div class="sidebar-section-label" style="margin-top: 20px;">
		        <span>Chats</span>
		        <button class="section-action-btn" onclick={newChat} title="New conversation">✚</button>
		      </div>
		      {#if conversationsList.length > 0}
		        {#each conversationsList as conv (conv.id)}
		          <div class="subnav-item-wrapper">
		            <button class="subnav-item" class:active={conv.id === currentConversationId}
		              onclick={() => selectConversation(conv.id)}>
		              <span class="subnav-title">{conv.title || "Untitled"}</span>
		            </button>
		            <div class="subnav-actions">
		              <button class="subnav-action" onclick={() => startRename(conv.id, conv.title || "Untitled")} title="Rename">✏️</button>
              <button class="subnav-action" onclick={() => handleArchive(conv.id)} title="Archive">📦</button>
            </div>
		          </div>
		        {/each}
		      {:else}
		        <div class="sidebar-empty">No conversations yet.</div>
		      {/if}

		      <!-- Archived -->
		      {#if archivedConversations.length > 0}
		        <div class="sidebar-section-label" style="margin-top: 20px;">
		          <span>Archived</span>
		          <span class="section-action-badge">{archivedConversations.length}</span>
		        </div>
		        {#each archivedConversations as conv (conv.id)}
		          <div class="subnav-item-wrapper">
		            <button class="subnav-item archived-item" onclick={() => navigateToSession(conv.id)}>
		              <span class="subnav-title">📦 {conv.title || "Untitled"}</span>
		            </button>
		            <div class="subnav-actions">
              <button class="subnav-action" onclick={() => handleArchive(conv.id)} title="Restore">↩️</button>
            </div>
		          </div>
		        {/each}
		      {/if}
		    </div>
		  </aside>

  <main class="main" ontouchstart={handleTouchStart} ontouchend={handleTouchEnd}>
    {#if $globalError}
      <ErrorBoundary error={$globalError} onRetry={clearErrors} />
    {:else if $connectionError}
      <ErrorBoundary error={$connectionError} onRetry={() => { clearErrors(); loadProjects(); }} />
    {:else}
      {#if $currentMessages.length > 0 || $streamingText}
        <div class="session-bar">
          {#if selectedDirectory}
            <span class="dir-badge">📁 {selectedDirectory.split("/").filter(Boolean).pop()}</span>
          {/if}
          {#if $currentSessionId}
            <button class="fork-btn" onclick={forkCurrentSession} title="Fork this session">⑂ Fork</button>
          {/if}
        </div>
      {/if}
      {#if $currentMessages.length === 0 && !$streamingText}
        <Welcome {newChat} projects={projectsList} onStartProject={startProjectConversation} onSend={handleSend} />
      {:else}
        <Chat messages={$currentMessages} streamingText={$streamingText} isStreaming={$streaming} toolCalls={$toolCalls} onSend={handleSend} onCancel={cancelStream} onEdit={handleEdit} onDelete={handleDelete} onRetry={handleRetry} {attachedFiles} {fileList} onToggleFile={toggleFileAttachment} onClearFiles={clearAttachments} currentModel={$currentModel} availableModels={$availableModels} onModelChange={(m: string) => currentModel.set(m)} {selectedDirectory} />
      {/if}
      {#if refresing}
        <div class="pull-indicator">↻ Refreshing...</div>
      {/if}
    {/if}
  </main>

<Settings open={showSettings} onClose={() => showSettings = false} {connected} />
</div>

<!-- Command Palette -->
{#if showCmdPalette}
  <div class="cmd-overlay" onclick={() => showCmdPalette = false} onkeydown={(e) => e.key === "Escape" && (showCmdPalette = false)}>
    <div class="cmd-palette" onclick={(e) => e.stopPropagation()}>
      <input class="cmd-input" placeholder="Type a command..." bind:value={cmdFilter} autofocus onkeydown={(e) => { if (e.key === "Enter" && filteredCommands[0]) { filteredCommands[0].action(); showCmdPalette = false; } }} />
      <div class="cmd-list">
        {#each filteredCommands as cmd}
          <button class="cmd-item" onclick={() => { cmd.action(); showCmdPalette = false; }}>
            <span>{cmd.label}</span>
          </button>
        {/each}
        {#if filteredCommands.length === 0}
          <div class="cmd-empty">No matching commands</div>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
	  .app { display: flex; height: 100%; overflow: hidden; }
	  .sidebar-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,.5); z-index: 99; }
	  .sidebar-overlay.show { display: block; }

	  /* ── Sidebar ── */
	  .sidebar {
	    width: 260px; flex-shrink: 0; border-right: 1px solid var(--border);
	    background: var(--surface); display: flex; flex-direction: column; z-index: 100;
	  }
	  .sidebar-header {
	    padding: 14px 16px; border-bottom: 1px solid var(--border);
	    display: flex; align-items: center; gap: 8px;
	  }
	  .sidebar-header h1 {
	    font-size: 14px; font-weight: 600; color: var(--text); flex: 1;
	  }
	  .sidebar-actions { display: flex; gap: 4px; }
	  .sidebar-actions button {
	    width: 28px; height: 28px; border-radius: 6px; border: 1px solid var(--border);
	    background: var(--surface2); color: var(--muted); cursor: pointer;
	    display: flex; align-items: center; justify-content: center; font-size: 13px;
	  }
	  .sidebar-actions button:hover { color: var(--text); border-color: var(--accent); background: color-mix(in srgb, var(--accent) 10%, transparent); }
		  .sidebar-scroll { flex: 1; overflow-y: auto; padding: 12px 8px; }

		  .sidebar-section-label {
		    display: flex; align-items: center; gap: 6px;
		    font-size: 10px; font-weight: 700; text-transform: uppercase;
		    letter-spacing: 1px; color: var(--muted); padding: 10px 10px 8px;
		  }
		  .section-action-btn {
		    width: 20px; height: 20px; border-radius: 4px; border: none;
		    background: none; color: var(--muted); cursor: pointer; font-size: 11px;
		    display: flex; align-items: center; justify-content: center; padding: 0;
		    line-height: 1; opacity: 0; transition: opacity .12s;
		  }
		  .sidebar-section-label:hover .section-action-btn { opacity: 1; }
		  .section-action-btn:hover { background: var(--surface3); color: var(--text); }
		  .section-action-badge {
		    font-size: 9px; background: var(--surface3);
		    padding: 1px 6px; border-radius: 6px; color: var(--muted); margin-left: auto;
		  }

		  .nav-item {
		    display: flex; align-items: center; gap: 8px;
		    padding: 7px 10px; border-radius: 6px; cursor: pointer;
		    font-size: 13px; color: var(--text-secondary); border: none; background: none; width: 100%; text-align: left;
		  }
		  .nav-item:hover { background: var(--surface2); color: var(--text); }
	  .nav-item.active { background: color-mix(in srgb, var(--accent) 10%, transparent); color: var(--accent); }
	  .nav-icon { font-size: 15px; width: 20px; text-align: center; flex-shrink: 0; }
	  .nav-label { flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
	  .nav-badge {
	    margin-left: auto; font-size: 10px; background: var(--surface2);
	    padding: 1px 6px; border-radius: 8px; color: var(--muted); flex-shrink: 0;
	  }
	  .nav-arrow {
	    width: 14px; text-align: center; flex-shrink: 0; display: flex; align-items: center; justify-content: center;
	    transition: transform .12s;
	  }
	  .nav-arrow.open { transform: rotate(90deg); }
	  .nav-arrow svg { display: block; }

	  .nav-project { display: flex; align-items: center; }
	  .nav-project .nav-item.proj-toggle { flex: 1; min-width: 0; }
	  .nav-new-btn {
	    width: 22px; height: 22px; border-radius: 4px; border: none;
	    background: none; color: var(--muted); cursor: pointer; font-size: 11px;
	    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
	    margin-right: 4px; opacity: 0; transition: opacity .1s;
	  }
	  .nav-project:hover .nav-new-btn { opacity: 1; }
	  .nav-new-btn:hover { background: var(--accent); color: #fff; }

	  .subnav { padding-left: 32px; margin-bottom: 4px; }
	  .subnav-item-wrapper { display: flex; align-items: center; gap: 2px; }
	  .subnav-item {
	    flex: 1; min-width: 0; display: flex; align-items: center; gap: 4px;
	    padding: 6px 8px; border-radius: 4px; cursor: pointer;
	    font-size: 12px; color: var(--muted); border: none; background: none; width: 100%; text-align: left;
	  }
	  .subnav-item:hover { background: var(--surface2); color: var(--text); }
	  .subnav-item.active { background: color-mix(in srgb, var(--accent) 8%, transparent); color: var(--accent); }
	  .subnav-title { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

	  .subnav-actions { display: none; gap: 1px; flex-shrink: 0; padding-right: 4px; }
	  .subnav-item-wrapper:hover .subnav-actions { display: flex; }
	  .subnav-action {
	    background: none; border: none; cursor: pointer; font-size: 10px; padding: 1px 3px;
	    border-radius: 2px; color: var(--muted); line-height: 1;
	  }
	  .subnav-action:hover { background: var(--accent); color: #fff; }

	  .archived-item { opacity: .6; }
	  .archived-item:hover { opacity: 1; }

		  .sidebar-empty { padding: 20px 10px; text-align: center; font-size: 11px; color: var(--muted); line-height: 1.5; }

  .main { flex: 1; display: flex; flex-direction: column; min-width: 0; }
  .session-bar { display: flex; align-items: center; padding: 6px 16px; border-bottom: 1px solid var(--border); background: var(--surface); gap: 8px; }
  .dir-badge {
    font-size: 12px; color: var(--muted); display: flex; align-items: center; gap: 4px;
    padding: 2px 8px; border-radius: 4px; background: var(--surface2); border: 1px solid var(--border);
    white-space: nowrap;
  }
  .fork-btn { padding: 4px 10px; border-radius: 6px; border: 1px solid var(--border); background: var(--surface2); color: var(--muted); cursor: pointer; font-size: 12px; }
  .fork-btn:hover { background: var(--accent); color: #fff; border-color: var(--accent); }

  /* Command Palette */
  .cmd-overlay { position: fixed; inset: 0; background: rgba(0,0,0,.6); display: flex; align-items: flex-start; justify-content: center; padding-top: 80px; z-index: 200; }
  .cmd-palette { width: 500px; max-width: 90vw; background: var(--surface); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; box-shadow: 0 8px 32px rgba(0,0,0,.4); }
  .cmd-input { width: 100%; padding: 14px 16px; background: var(--surface2); border: none; color: var(--text); font-size: 15px; outline: none; border-bottom: 1px solid var(--border); }
  .cmd-list { max-height: 300px; overflow-y: auto; padding: 4px; }
  .cmd-item { width: 100%; padding: 10px 14px; background: none; border: none; color: var(--text); text-align: left; cursor: pointer; border-radius: 6px; font-size: 14px; }
  .cmd-item:hover { background: var(--surface2); }
  .cmd-empty { padding: 16px; text-align: center; color: var(--muted); font-size: 13px; }

  @media (max-width: 768px) {
    .sidebar { position: fixed; top: 0; left: 0; bottom: 0; transform: translateX(-100%); width: 85vw; max-width: 320px; transition: transform .25s cubic-bezier(.4,0,.2,1); }
    .sidebar.open { transform: translateX(0); }
    .cmd-overlay { padding-top: 40px; }
  }
  .pull-indicator { position: fixed; top: 0; left: 0; right: 0; text-align: center; padding: 8px; font-size: 12px; color: var(--muted); background: var(--surface); border-bottom: 1px solid var(--border); z-index: 50; animation: fadeIn .2s; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
</style>
