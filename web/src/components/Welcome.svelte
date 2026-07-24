<script lang="ts">
  export let newChat: () => void;
</script>

<div class="welcome">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="40" height="40">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
  </svg>
  <h2>Askoda</h2>
  <p>Your AI coding assistant. Select a project from the sidebar or start a new conversation.</p>
  <button class="new-btn" onclick={newChat}>✚ New conversation</button>
</div>

<style>
  .welcome {
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    height: 100%; text-align: center; padding: 40px; color: var(--muted);
  }
  svg { color: var(--accent); margin-bottom: 16px; }
  h2 { font-size: 16px; color: var(--text); margin-bottom: 6px; }
  p { font-size: 13px; max-width: 340px; margin-bottom: 24px; }
  .new-btn {
    padding: 10px 20px; border-radius: 8px; border: 1px solid var(--border);
    background: var(--surface2); color: var(--text); cursor: pointer; font-size: 14px;
  }
  .new-btn:hover { background: var(--accent); color: #fff; border-color: var(--accent); }
</style>
