<script lang="ts">
  import type { Project } from "../lib/api";

  export let newChat: () => void;
  export let projects: Project[] = [];
  export let onStartProject: (directory: string) => void = () => {};
</script>

<div class="welcome">
  <div class="welcome-content">
    <div class="welcome-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="40" height="40">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    </div>
    <h2 class="welcome-title">What are we working on?</h2>
    <p class="welcome-sub">Pick a project to start chatting, or begin a fresh conversation.</p>

    {#if projects.length > 0}
      <div class="project-grid">
        {#each projects as proj (proj.directory)}
          <button class="project-card" onclick={() => onStartProject(proj.directory)}>
            <span class="project-icon">📁</span>
            <span class="project-name">{proj.name}</span>
            <span class="project-count">{proj.conversation_count} {proj.conversation_count === 1 ? "chat" : "chats"}</span>
          </button>
        {/each}
      </div>
    {:else}
      <div class="empty-projects">
        <span class="empty-text">No projects yet. Start a conversation and projects will appear here.</span>
      </div>
    {/if}

    <button class="new-btn" onclick={newChat}>
      <span class="new-icon">✚</span>
      New conversation
    </button>
  </div>
</div>

<style>
  .welcome {
    display: flex; align-items: center; justify-content: center;
    height: 100%; padding: 40px; overflow-y: auto;
  }
  .welcome-content {
    display: flex; flex-direction: column; align-items: center;
    max-width: 520px; width: 100%;
  }
  .welcome-icon { margin-bottom: 16px; color: var(--accent); }
  .welcome-title {
    font-size: 20px; font-weight: 600; color: var(--text);
    margin: 0 0 6px 0; text-align: center;
  }
  .welcome-sub {
    font-size: 14px; color: var(--muted);
    margin: 0 0 28px 0; text-align: center;
  }

  .project-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 10px; width: 100%; margin-bottom: 28px;
  }
  .project-card {
    display: flex; flex-direction: column; align-items: center; gap: 6px;
    padding: 20px 16px; border-radius: 12px; border: 1px solid var(--border);
    background: var(--surface); cursor: pointer; transition: all .15s;
    text-align: center;
  }
  .project-card:hover {
    border-color: var(--accent); background: var(--surface2);
    transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,.1);
  }
  .project-icon { font-size: 28px; }
  .project-name { font-size: 14px; font-weight: 500; color: var(--text); }
  .project-count { font-size: 12px; color: var(--muted); }

  .empty-projects { margin-bottom: 24px; padding: 24px; text-align: center; }
  .empty-text { font-size: 13px; color: var(--muted); }

  .new-btn {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 10px 24px; border-radius: 8px; border: 1px solid var(--border);
    background: var(--accent); color: #fff; cursor: pointer; font-size: 14px; font-weight: 500;
    transition: all .15s;
  }
  .new-btn:hover {
    opacity: .9; transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0,0,0,.15);
  }
  .new-icon { font-size: 16px; }

  @media (max-width: 480px) {
    .project-grid { grid-template-columns: 1fr; }
  }
</style>
