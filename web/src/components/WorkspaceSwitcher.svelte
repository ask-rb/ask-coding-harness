<script lang="ts">
  import "ask-ui-kit";
  import { openWorkspace } from "../lib/api";
  import type { WorkspaceInfo } from "../lib/types";

  // Workspace switcher built on ask-ui-kit's ask-menu + ask-dialog: the
  // menu lists workspaces with a check on the active one; "Open
  // workspace…" opens the dialog (the openchamber switcher pattern).
  let {
    workspaces,
    current,
    onSelect,
    onOpened,
  } = $props<{
    workspaces: WorkspaceInfo[];
    current: WorkspaceInfo | null;
    onSelect: (ws: WorkspaceInfo) => void;
    onOpened: (ws: WorkspaceInfo) => void;
  }>();

  let menuOpen = $state(false);
  let dialogOpen = $state(false);
  let pathInput = $state("");
  let opening = $state(false);
  let error = $state<string | null>(null);

  const menuItems = $derived(
    workspaces.map((ws) => ({
      id: ws.root,
      label: ws.name,
      description: ws.root,
      icon: "📁",
      active: ws.root === current?.root,
    }))
  );

  function onMenuSelect(e: CustomEvent<{ id: string }>) {
    const ws = workspaces.find((w) => w.root === e.detail.id);
    if (ws) onSelect(ws);
  }

  async function openPath() {
    const path = pathInput.trim();
    if (!path || opening) return;
    opening = true;
    error = null;
    try {
      const ws = await openWorkspace(path);
      dialogOpen = false;
      pathInput = "";
      onOpened(ws);
    } catch (e: any) {
      error = e.message || "Could not open that workspace";
    } finally {
      opening = false;
    }
  }
</script>

<div class="switcher">
  <ask-menu
    items={menuItems}
    trigger-label={current?.name ?? "No workspace"}
    onmenu-select={onMenuSelect}
    onmenu-open={() => (menuOpen = true)}
    onmenu-close={() => (menuOpen = false)}
  >
    <span slot="trigger" class="trigger-name">{current?.name ?? "No workspace"}</span>
    <div slot="menu-footer" class="menu-footer">
      <button class="open-ws" onclick={() => { dialogOpen = true; menuOpen = false; }}>
        ＋ Open workspace…
      </button>
    </div>
  </ask-menu>

  <ask-dialog open={dialogOpen} header="Open workspace" ondialog-close={() => (dialogOpen = false)}>
    <p class="hint">
      Path to a project directory on this machine. The agent gets full access to it —
      same trust model as running a coding agent in your terminal.
    </p>
    <input
      class="path-input"
      bind:value={pathInput}
      placeholder="/path/to/project"
      onkeydown={(e) => {
        if (e.key === "Enter") openPath();
        if (e.key === "Escape") dialogOpen = false;
      }}
    />
    {#if error}
      <div class="error">{error}</div>
    {/if}
    <div slot="footer">
      <button class="btn cancel" onclick={() => (dialogOpen = false)}>Cancel</button>
      <button class="btn go" onclick={openPath} disabled={opening || !pathInput.trim()}>
        {opening ? "Opening…" : "Open"}
      </button>
    </div>
  </ask-dialog>
</div>

<style>
  .switcher {
    min-width: 0;
    flex: 1;
  }
  .trigger-name {
    font-weight: 600;
    font-size: 0.9375rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .menu-footer {
    padding: 0.25rem 0.125rem 0;
  }
  .open-ws {
    width: 100%;
    text-align: left;
    font: inherit;
    font-size: 0.8125rem;
    padding: 0.5rem 0.625rem;
    border: none;
    border-radius: 0.5rem;
    background: transparent;
    color: inherit;
    cursor: pointer;
  }
  .open-ws:hover {
    background: var(--ask-surface-hover, #f5f5f5);
  }
  .hint {
    margin: 0 0 0.75rem;
    font-size: 0.75rem;
    line-height: 1.5;
    color: var(--ask-text-muted, #a3a3a3);
  }
  .path-input {
    width: 100%;
    font: inherit;
    font-size: 0.875rem;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    border: 1px solid var(--ask-border-strong, #d4d4d4);
    background: var(--ask-surface-muted, #fafafa);
    color: inherit;
    outline: none;
  }
  .path-input:focus {
    border-color: var(--ask-focus, #a3a3a3);
  }
  .error {
    margin-top: 0.5rem;
    font-size: 0.75rem;
    color: var(--ask-danger, #dc2626);
  }
  .btn {
    font: inherit;
    font-size: 0.8125rem;
    font-weight: 600;
    padding: 0.5rem 0.875rem;
    border-radius: 0.5rem;
    cursor: pointer;
  }
  .cancel {
    border: 1px solid var(--ask-border-strong, #d4d4d4);
    background: transparent;
    color: inherit;
  }
  .go {
    border: 1px solid var(--ask-accent, #c2410c);
    background: var(--ask-accent, #c2410c);
    color: var(--ask-accent-text, #fafafa);
  }
  .go:disabled {
    opacity: 0.5;
    cursor: default;
  }
</style>
