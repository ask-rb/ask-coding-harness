<script lang="ts">
  import {
    archiveConversation,
    deleteConversation,
    fetchConversations,
    renameConversation,
  } from "../lib/api";
  import type { Conversation } from "../lib/types";

  let {
    conversations,
    currentId,
    streaming,
    onSelect,
    onNew,
    onChanged,
    onClose,
  } = $props<{
    conversations: Conversation[];
    currentId: string | null;
    streaming: boolean;
    onSelect: (id: string) => void;
    onNew: () => void;
    onChanged: (c: Conversation[]) => void;
    onClose: () => void;
  }>();

  let renamingId = $state<string | null>(null);
  let renameValue = $state("");

  async function refresh() {
    onChanged(await fetchConversations());
  }

  async function doRename(id: string) {
    const title = renameValue.trim();
    if (title) {
      await renameConversation(id, title);
      await refresh();
    }
    renamingId = null;
  }

  async function doArchive(id: string) {
    await archiveConversation(id);
    await refresh();
  }

  async function doDelete(id: string) {
    if (!confirm("Delete this conversation?")) return;
    await deleteConversation(id);
    await refresh();
  }
</script>

<div class="sidebar">
  <div class="head">
    <button class="new" onclick={onNew} disabled={streaming}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
      New conversation
    </button>
    <button class="close" onclick={onClose} aria-label="Close sidebar">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  </div>

  <div class="list">
    {#if conversations.length === 0}
      <div class="empty">No conversations yet.</div>
    {/if}

    {#each conversations as conv (conv.id)}
      <div class="item {conv.id === currentId ? "active" : ""}" onclick={() => onSelect(conv.id)}>
        {#if renamingId === conv.id}
          <input
            bind:value={renameValue}
            onkeydown={(e) => {
              if (e.key === "Enter") doRename(conv.id);
              if (e.key === "Escape") renamingId = null;
            }}
            onclick={(e) => e.stopPropagation()}
          />
        {:else}
          <span class="title">{conv.title}</span>
        {/if}
        <span class="meta">{conv.message_count} msgs</span>

        <div class="actions">
          <button
            class="mini"
            title="Rename"
            onclick={(e) => {
              e.stopPropagation();
              renamingId = conv.id;
              renameValue = conv.title;
            }}
          >✎</button>
          <button
            class="mini"
            title={conv.archived ? "Unarchive" : "Archive"}
            onclick={(e) => {
              e.stopPropagation();
              doArchive(conv.id);
            }}
          >{conv.archived ? "↩" : "🗄"}</button>
          <button
            class="mini danger"
            title="Delete"
            onclick={(e) => {
              e.stopPropagation();
              doDelete(conv.id);
            }}
          >✕</button>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .sidebar {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .head {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem;
    border-bottom: 1px solid #1f1f22;
  }
  .new {
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font: inherit;
    font-size: 0.8125rem;
    font-weight: 600;
    padding: 0.5rem;
    border-radius: 0.625rem;
    border: 1px solid #2a2a2e;
    background: #161618;
    color: #e5e5e5;
    cursor: pointer;
  }
  .new:hover { background: #1f1f22; }
  .new:disabled { opacity: 0.5; cursor: default; }
  .close {
    display: none;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: 0.5rem;
    background: transparent;
    color: #a3a3a3;
    cursor: pointer;
  }
  @media (max-width: 767px) {
    .close { display: inline-flex; align-items: center; justify-content: center; }
  }

  .list {
    flex: 1;
    overflow-y: auto;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .item {
    position: relative;
    padding: 0.625rem 0.75rem;
    border-radius: 0.625rem;
    cursor: pointer;
    border: 1px solid transparent;
  }
  .item:hover { background: #161618; }
  .item.active {
    background: #1a1a1d;
    border-color: #2a2a2e;
  }

  .title {
    display: block;
    font-size: 0.8125rem;
    color: #e5e5e5;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .meta {
    font-size: 0.6875rem;
    color: #737373;
  }
  .actions {
    display: none;
    position: absolute;
    right: 0.375rem;
    top: 50%;
    transform: translateY(-50%);
    gap: 0.125rem;
    background: #161618;
    border-radius: 0.5rem;
    padding: 0.125rem;
  }
  .item:hover .actions, .item.active .actions {
    display: inline-flex;
  }
  .mini {
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    border-radius: 0.375rem;
    background: transparent;
    color: #a3a3a3;
    font-size: 0.75rem;
    cursor: pointer;
  }
  .mini:hover { background: #26262a; }
  .mini.danger:hover { color: #f87171; }

  .empty {
    padding: 1rem 0.5rem;
    font-size: 0.8125rem;
    color: #737373;
    text-align: center;
  }

  input {
    width: 100%;
    font: inherit;
    font-size: 0.8125rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.375rem;
    border: 1px solid #3f3f46;
    background: #0d0d0f;
    color: #e5e5e5;
    outline: none;
  }
</style>
