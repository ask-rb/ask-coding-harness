<script lang="ts">
  import "ask-ui-kit";
  import {
    archiveConversation,
    deleteConversation,
    fetchConversations,
    renameConversation,
  } from "../lib/api";
  import type { Conversation } from "../lib/types";

  // Conversation sidebar built on ask-ui-kit primitives: search input,
  // conversation items with hover actions, and a group header — the
  // pattern from openchamber/openwebui/t3code.
  let {
    conversations,
    currentId,
    workspaceName,
    streaming,
    onSelect,
    onNew,
    onChanged,
    onClose,
  } = $props<{
    conversations: Conversation[];
    currentId: string | null;
    workspaceName?: string;
    streaming: boolean;
    onSelect: (id: string) => void;
    onNew: () => void;
    onChanged: (c: Conversation[]) => void;
    onClose: () => void;
  }>();

  let query = $state("");
  let renamingId = $state<string | null>(null);
  let renameValue = $state("");

  const filtered = $derived(
    query.trim()
      ? conversations.filter((c) => c.title.toLowerCase().includes(query.trim().toLowerCase()))
      : conversations
  );

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

  function onItemSelect(e: CustomEvent<{ id: string }>) {
    onSelect(e.detail.id);
  }
</script>

<div class="sidebar">
  <div class="head">
    {#if workspaceName}
      <div class="ws-name">{workspaceName}</div>
    {/if}
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

  <div class="search">
    <ask-search-input placeholder="Filter conversations…" onsearch-input={(e) => (query = e.detail.value)}></ask-search-input>
  </div>

  <div class="list">
    {#if filtered.length === 0}
      <div class="empty">{conversations.length === 0 ? "No conversations yet." : "No matches."}</div>
    {/if}

    <ask-conversation-group label={workspaceName ?? "Conversations"} count={filtered.length}>
      {#each filtered as conv (conv.id)}
        {#if renamingId === conv.id}
          <div class="rename-row" onclick={(e) => e.stopPropagation()}>
            <input
              bind:value={renameValue}
              onkeydown={(e) => {
                if (e.key === "Enter") doRename(conv.id);
                if (e.key === "Escape") renamingId = null;
              }}
            />
          </div>
        {:else}
          <ask-conversation-item
            id={conv.id}
            title={conv.title}
            meta={`${conv.message_count} msgs`}
            active={conv.id === currentId}
            archived={conv.archived}
            onconversation-select={onItemSelect}
            onconversation-rename={(e) => {
              renamingId = e.detail.id;
              renameValue = conv.title;
            }}
            onconversation-archive={() => doArchive(conv.id)}
            onconversation-delete={() => doDelete(conv.id)}
          ></ask-conversation-item>
        {/if}
      {/each}
    </ask-conversation-group>
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
  .ws-name {
    font-size: 0.6875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #737373;
    padding: 0 0.125rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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

  .search {
    padding: 0.625rem 0.75rem 0.25rem;
  }

  .list {
    flex: 1;
    overflow-y: auto;
    padding: 0.375rem 0.5rem 0.75rem;
    display: flex;
    flex-direction: column;
  }

  .empty {
    padding: 1rem 0.5rem;
    font-size: 0.8125rem;
    color: #737373;
    text-align: center;
  }

  .rename-row {
    padding: 0.375rem 0.75rem;
  }
  .rename-row input {
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
