<script lang="ts">
  import { theme, toggleTheme, currentModel, availableModels } from "../lib/stores";

  export let open = false;
  export let onClose: () => void;
  export let connected = false;

  let version = "0.1.0";
  let adapterInfo = "Unknown";

  async function loadInfo() {
    try {
      const res = await fetch("/api/projects");
      if (res.ok) adapterInfo = "Connected";
    } catch { adapterInfo = "Disconnected"; }
  }

  function close() {
    open = false;
    onClose();
  }

  $: if (open) {
    loadInfo();
  }
</script>

{#if open}
  <div class="settings-overlay" onclick={close} />
  <aside class="settings-panel">
    <div class="settings-header">
      <h2>Settings</h2>
      <button class="close-btn" onclick={close}>✕</button>
    </div>

    <div class="settings-body">
      <section>
        <h3>Model</h3>
        <div class="setting-row">
          <span>Coding model</span>
          <select class="model-select" bind:value={$currentModel}>
            {#each $availableModels as model}
              <option value={model}>{model}</option>
            {/each}
          </select>
        </div>
        <div class="setting-hint">Model for coding agent responses. Takes effect on the next message.</div>
      </section>

      <section>
        <h3>Appearance</h3>
        <div class="setting-row">
          <span>Theme</span>
          <button class="toggle-btn" onclick={toggleTheme}>
            {$theme === "dark" ? "☾ Dark" : "☀ Light"}
          </button>
        </div>
      </section>

      <section>
        <h3>Status</h3>
        <div class="setting-row">
          <span>Connection</span>
          <span class="status-badge" class:online={connected}>
            {connected ? "● Online" : "○ Offline"}
          </span>
        </div>
        <div class="setting-row">
          <span>Coding agent</span>
          <span class="status-text">{adapterInfo}</span>
        </div>
      </section>

      <section>
        <h3>About</h3>
        <div class="setting-row">
          <span>Version</span>
          <span class="status-text">{version}</span>
        </div>
        <div class="setting-row">
          <span>Source</span>
          <a href="https://github.com/ask-rb/askoda" target="_blank" rel="noopener" class="link">github.com/ask-rb/askoda</a>
        </div>
        <div class="about-text">
          Askoda connects AI coding agents to chat interfaces and web UIs. Licensed under MIT.
        </div>
      </section>
    </div>
  </aside>
{/if}

<style>
  .settings-overlay { position: fixed; inset: 0; background: rgba(0,0,0,.4); z-index: 150; }
  .settings-panel {
    position: fixed; top: 0; right: 0; bottom: 0; width: 320px; max-width: 90vw;
    background: var(--surface); border-left: 1px solid var(--border);
    display: flex; flex-direction: column; z-index: 151;
    animation: slideIn .2s ease;
  }
  @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }

  .settings-header {
    display: flex; align-items: center; justify-content: space-between;
    padding: 16px 20px; border-bottom: 1px solid var(--border);
  }
  .settings-header h2 { font-size: 16px; font-weight: 600; margin: 0; }
  .close-btn { width: 32px; height: 32px; border-radius: 6px; border: 1px solid var(--border); background: var(--surface2); color: var(--text); cursor: pointer; font-size: 14px; display: flex; align-items: center; justify-content: center; }
  .close-btn:hover { background: var(--accent); color: #fff; border-color: var(--accent); }

  .settings-body { flex: 1; overflow-y: auto; padding: 8px 0; }
  section { padding: 12px 20px; }
  section h3 { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: .05em; color: var(--muted); margin: 0 0 8px; }
  .setting-row { display: flex; align-items: center; justify-content: space-between; padding: 8px 0; font-size: 14px; }
  .toggle-btn { padding: 4px 12px; border-radius: 6px; border: 1px solid var(--border); background: var(--surface2); color: var(--text); cursor: pointer; font-size: 13px; }
  .toggle-btn:hover { background: var(--accent); color: #fff; border-color: var(--accent); }
  .status-badge { font-size: 12px; padding: 2px 8px; border-radius: 4px; }
  .status-badge.online { color: var(--success); }
  .status-badge:not(.online) { color: var(--muted); }
  .status-text { font-size: 13px; color: var(--muted); }
  .link { font-size: 13px; color: var(--accent); text-decoration: none; }
  .link:hover { text-decoration: underline; }
  .about-text { font-size: 12px; color: var(--muted); margin-top: 8px; line-height: 1.5; }
  .model-select {
    padding: 4px 8px; border-radius: 6px; border: 1px solid var(--border);
    background: var(--surface2); color: var(--text); font-size: 13px; max-width: 200px;
  }
  .setting-hint { font-size: 11px; color: var(--muted); margin-top: 4px; }
</style>
