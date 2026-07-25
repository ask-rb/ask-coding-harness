<script>
  export let newChat;
  export let projects = [];
  export let conversations = [];
  export let onStartProject = () => {};
  export let onSend = () => {};
  export let onSelectConversation = () => {};

  let promptText = "";
  let promptEl;

  function handlePromptSubmit() {
    const text = promptText.trim();
    if (!text) return;
    onSend(text);
    promptText = "";
  }

  function handlePromptKey(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handlePromptSubmit();
    }
  }

  function timeAgo(dateStr) {
    if (!dateStr) return "";
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return "Just now";
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    const days = Math.floor(hrs / 24);
    if (days < 7) return `${days}d ago`;
    return new Date(dateStr).toLocaleDateString();
  }

  function projectName(p) {
    return p.name || p.directory.split("/").filter(Boolean).pop() || p.directory;
  }

  function updatePromptHeight() {
    if (promptEl) {
      promptEl.style.height = "auto";
      promptEl.style.height = Math.min(promptEl.scrollHeight, 200) + "px";
    }
  }

  $: hasContent = projects.length > 0 || conversations.length > 0;
</script>

<div class="dashboard">
  <div class="dashboard-inner">
    <!-- Hero -->
    <div class="hero">
      <div class="hero-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
        </svg>
      </div>
      <h2 class="hero-title">What are you working on?</h2>
      <p class="hero-sub">
        Start a conversation, pick a project to explore, or continue where you left off.
        Conversations don't need a project — just start typing.
      </p>
    </div>

    <!-- Prompt form -->
    <div class="prompt-card">
      <div class="prompt-card-header">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
        </svg>
        <span>New conversation</span>
      </div>
      <textarea
        bind:this={promptEl}
        class="prompt-input"
        placeholder="Ask anything — code, research, debugging, planning..."
        bind:value={promptText}
        onkeydown={handlePromptKey}
        oninput={updatePromptHeight}
        rows="1"
      ></textarea>
      <div class="prompt-footer">
        <span class="prompt-hint"><kbd>Enter</kbd> to send · <kbd>Shift</kbd> + <kbd>Enter</kbd> for new line</span>
        <button class="send-btn" onclick={handlePromptSubmit} disabled={!promptText.trim()}>
          Send
        </button>
      </div>
    </div>

    {#if hasContent}
      <!-- Projects -->
      {#if projects.length > 0}
        <div class="section">
          <div class="section-header">
            <h3>Projects</h3>
            <span class="section-count">{projects.length}</span>
          </div>
          <div class="project-grid">
            {#each projects as proj (proj.directory)}
              <button class="project-card" onclick={() => onStartProject(proj.directory)}>
                <div class="project-folder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="22" height="22">
                    <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
                  </svg>
                </div>
                <div class="project-info">
                  <div class="project-name">{projectName(proj)}</div>
                  <div class="project-meta">{proj.conversation_count || 0} session{proj.conversation_count !== 1 ? "s" : ""}</div>
                </div>
              </button>
            {/each}
          </div>
        </div>
      {/if}

      <!-- Recent conversations -->
      {#if conversations.length > 0}
        <div class="section">
          <div class="section-header">
            <h3>Recent conversations</h3>
            <span class="section-count">{conversations.length}</span>
          </div>
          <div class="conv-list">
            {#each conversations as conv (conv.id)}
              <button class="conv-row" onclick={() => onSelectConversation(conv.id)}>
                <div class="conv-row-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                  </svg>
                </div>
                <div class="conv-row-info">
                  <div class="conv-row-title">{conv.title || "Untitled"}</div>
                  <div class="conv-row-meta">
                    {conv.message_count ?? conv.messages?.length ?? 0} message{(conv.message_count ?? conv.messages?.length ?? 0) !== 1 ? "s" : ""}
                    {#if !conv.directory}
                      <span class="conv-row-badge">No project</span>
                    {/if}
                  </div>
                </div>
                <span class="conv-row-time">{timeAgo(conv.updated_at)}</span>
              </button>
            {/each}
          </div>
        </div>
      {/if}
    {:else}
      <!-- True empty state -->
      <div class="empty-state">
        <div class="empty-icon">🚀</div>
        <p class="empty-text">
          No conversations or projects yet. Start typing above to begin,
          or connect a project to get code-aware assistance.
        </p>
        <button class="learn-link" onclick={newChat}>New conversation →</button>
      </div>
    {/if}
  </div>
</div>

<style>
  .dashboard {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    overflow-y: auto;
    padding: 48px 24px;
  }
  .dashboard-inner {
    max-width: 640px;
    width: 100%;
  }

  /* ── Hero ── */
  .hero { text-align: center; margin-bottom: 32px; }
  .hero-icon {
    width: 48px; height: 48px;
    background: color-mix(in srgb, var(--accent) 10%, transparent);
    border-radius: 14px;
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 20px;
    color: var(--accent);
  }
  .hero-title {
    font-size: 22px; font-weight: 600; color: var(--text);
    margin: 0 0 8px;
  }
  .hero-sub {
    font-size: 14px; color: var(--muted);
    line-height: 1.6; max-width: 440px; margin: 0 auto;
  }

  /* ── Prompt form ── */
  .prompt-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    margin-bottom: 40px;
    transition: border-color .15s, box-shadow .15s;
  }
  .prompt-card:focus-within {
    border-color: var(--accent);
    box-shadow: 0 0 0 1px var(--accent);
  }
  .prompt-card-header {
    display: flex; align-items: center; gap: 6px;
    padding: 12px 16px 0;
    font-size: 11px; font-weight: 600; text-transform: uppercase;
    letter-spacing: .5px; color: var(--muted);
  }
  .prompt-input {
    width: 100%;
    background: transparent;
    border: none;
    color: var(--text);
    font-size: 15px;
    font-family: inherit;
    line-height: 1.5;
    resize: none;
    outline: none;
    padding: 10px 16px;
    min-height: 24px;
    max-height: 200px;
  }
  .prompt-input::placeholder { color: var(--muted); opacity: .6; }
  .prompt-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 16px 12px;
    border-top: 1px solid var(--border);
  }
  .prompt-hint {
    font-size: 11px; color: var(--muted);
  }
  .prompt-hint kbd {
    background: var(--surface2); border: 1px solid var(--border);
    border-radius: 3px; padding: 1px 5px; font-size: 10px;
    font-family: inherit;
  }
  .send-btn {
    padding: 6px 18px;
    border-radius: 6px;
    border: none;
    background: var(--accent);
    color: #fff;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: opacity .15s;
  }
  .send-btn:hover { opacity: .9; }
  .send-btn:disabled { opacity: .3; cursor: not-allowed; }

  /* ── Section ── */
  .section { margin-bottom: 36px; }
  .section-header {
    display: flex; align-items: center; gap: 8px;
    margin-bottom: 12px;
  }
  .section-header h3 {
    font-size: 12px; font-weight: 600; color: var(--muted);
    text-transform: uppercase; letter-spacing: .6px;
  }
  .section-count {
    font-size: 10px; color: var(--muted);
    background: var(--surface2); padding: 1px 7px; border-radius: 8px;
  }

  /* ── Project cards ── */
  .project-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
  .project-card {
    display: flex; align-items: center; gap: 12px;
    padding: 14px;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: var(--surface);
    cursor: pointer;
    transition: all .12s;
    text-align: left; width: 100%;
    color: var(--text);
  }
  .project-card:hover {
    border-color: color-mix(in srgb, var(--accent) 50%, transparent);
    background: var(--surface2);
  }
  .project-folder {
    width: 36px; height: 36px; border-radius: 8px;
    background: var(--surface2);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; color: var(--muted);
  }
  .project-info { flex: 1; min-width: 0; }
  .project-name {
    font-size: 14px; font-weight: 500; color: var(--text);
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .project-meta {
    font-size: 12px; color: var(--muted); margin-top: 2px;
  }

  /* ── Conversation list ── */
  .conv-list { display: flex; flex-direction: column; gap: 2px; }
  .conv-row {
    display: flex; align-items: center; gap: 12px;
    padding: 10px 12px;
    border-radius: 8px;
    cursor: pointer;
    transition: background .1s;
    border: none; background: none; width: 100%; text-align: left;
    color: var(--text);
  }
  .conv-row:hover { background: var(--surface2); }
  .conv-row-icon {
    width: 20px; text-align: center; flex-shrink: 0;
    color: var(--muted);
  }
  .conv-row-info { flex: 1; min-width: 0; }
  .conv-row-title {
    font-size: 13px; color: var(--text);
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .conv-row-meta {
    font-size: 11px; color: var(--muted); margin-top: 2px;
    display: flex; align-items: center; gap: 8px;
  }
  .conv-row-badge {
    font-size: 10px; padding: 0 5px; border-radius: 3px;
    background: var(--surface2); border: 1px solid var(--border);
    color: var(--muted);
  }
  .conv-row-time {
    font-size: 11px; color: var(--muted); flex-shrink: 0;
  }

  /* ── Empty state ── */
  .empty-state {
    text-align: center;
    padding: 36px 24px;
    border: 1px dashed var(--border);
    border-radius: 10px;
    margin-bottom: 40px;
  }
  .empty-icon { font-size: 28px; margin-bottom: 12px; }
  .empty-text {
    font-size: 13px; color: var(--muted);
    line-height: 1.5; max-width: 360px; margin: 0 auto;
  }
  .learn-link {
    display: inline-block; margin-top: 14px;
    font-size: 13px; color: var(--accent);
    background: none; border: none; cursor: pointer;
  }
  .learn-link:hover { text-decoration: underline; }

  @media (max-width: 600px) {
    .dashboard { padding: 32px 16px; }
    .project-grid { grid-template-columns: 1fr; }
  }
</style>
