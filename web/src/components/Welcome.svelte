<script>
  export let newChat;
  export let projects = [];
  export let onStartProject = () => {};
  export let onSend = () => {};

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

  function projectName(p) {
    return p.name || p.directory.split("/").filter(Boolean).pop() || p.directory;
  }

  function updatePromptHeight() {
    if (promptEl) {
      promptEl.style.height = "auto";
      promptEl.style.height = Math.min(promptEl.scrollHeight, 200) + "px";
    }
  }
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
  </div>
</div>

<style>
  .dashboard {
    display: flex;
    align-items: center;
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
  .hero { text-align: center; margin-bottom: 36px; }
  .hero-icon {
    width: 48px; height: 48px;
    background: var(--surface3);
    border-radius: 14px;
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 20px;
    color: var(--text-secondary);
  }
  .hero-icon svg { width: 22px; height: 22px; }
  .hero-title {
    font-size: 21px; font-weight: 600; color: var(--text);
    margin: 0 0 8px; letter-spacing: -.01em;
  }
  .hero-sub {
    font-size: 13px; color: var(--muted);
    line-height: 1.6; max-width: 420px; margin: 0 auto;
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
    border-color: var(--text-secondary);
    box-shadow: 0 0 0 1px var(--text-secondary);
  }
  .prompt-card-header {
    display: flex; align-items: center; gap: 6px;
    padding: 14px 16px 0;
    font-size: 10px; font-weight: 700; text-transform: uppercase;
    letter-spacing: .6px; color: var(--muted);
  }
  .prompt-card-header svg { width: 14px; height: 14px; opacity: .6; }
  .prompt-input {
    width: 100%;
    background: transparent;
    border: none;
    color: var(--text);
    font-size: 15px;
    font-family: inherit;
    line-height: 1.6;
    resize: none;
    outline: none;
    padding: 10px 16px;
    min-height: 24px;
    max-height: 200px;
  }
  .prompt-input::placeholder { color: var(--muted); opacity: .5; }
  .prompt-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px 12px;
    border-top: 1px solid var(--border-light);
  }
  .prompt-hint {
    font-size: 10px; color: var(--muted);
  }
  .prompt-hint kbd {
    background: var(--surface2); border: 1px solid var(--border-light);
    border-radius: 3px; padding: 1px 5px; font-size: 10px;
    font-family: inherit;
  }
  .send-btn {
    padding: 5px 16px;
    border-radius: 6px;
    border: none;
    background: var(--accent);
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: background .15s;
  }
  .send-btn:hover { background: var(--accent-hover); }
  .send-btn:disabled { opacity: .25; cursor: not-allowed; }

  /* ── Section ── */
  .section { margin-bottom: 32px; }
  .section-header {
    display: flex; align-items: center; gap: 8px;
    margin-bottom: 10px;
  }
  .section-header h3 {
    font-size: 11px; font-weight: 700; color: var(--muted);
    text-transform: uppercase; letter-spacing: .8px;
  }
  .section-count {
    font-size: 10px; color: var(--muted);
    background: var(--surface2); padding: 1px 6px; border-radius: 6px;
  }

  /* ── Project cards ── */
  .project-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
  .project-card {
    display: flex; align-items: center; gap: 12px;
    padding: 12px;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: var(--surface);
    cursor: pointer;
    transition: all .12s;
    text-align: left; width: 100%;
    color: var(--text);
  }
  .project-card:hover {
    border-color: var(--surface4);
    background: var(--surface2);
  }
  .project-folder {
    width: 36px; height: 36px; border-radius: 8px;
    background: var(--surface3);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; color: var(--muted);
  }
  .project-folder svg { width: 18px; height: 18px; }
  .project-info { flex: 1; min-width: 0; }
  .project-name {
    font-size: 13px; font-weight: 500; color: var(--text);
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .project-meta {
    font-size: 11px; color: var(--muted); margin-top: 1px;
  }

  @media (max-width: 600px) {
    .dashboard { padding: 32px 16px; }
    .project-grid { grid-template-columns: 1fr; }
  }
</style>
