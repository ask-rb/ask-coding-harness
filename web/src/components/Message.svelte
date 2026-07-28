<script lang="ts">
  import { onMount } from "svelte";
  import "ask-ui-kit";
  import type { Message as Msg } from "../lib/api";

  export let msg: Msg;
  export let index: number = 0;
  export let onEdit: (index: number, content: string) => void = () => {};
  export let onDelete: (index: number) => void = () => {};
  export let onRetry: (index: number) => void = () => {};
  export let searchTerm: string = "";

  let markedFn: any = null;
  let rendered = "";
  let editing = false;
  let editContent = "";
  let deleteConfirm = false;

  onMount(async () => {
    const mod = await import("https://cdn.jsdelivr.net/npm/marked@15/+esm");
    markedFn = mod.marked;
    renderContent();
  });

  function renderContent() {
    if (markedFn) {
      rendered = markedFn.parse(msg.content, { breaks: true });
    }
  }

  $: if (markedFn && msg.content) {
    renderContent();
  }

  $: isError = msg.role === "assistant" && msg.content.startsWith("Error:");

  function highlightText(html: string, term: string): string {
    if (!term) return html;
    try {
      const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      return html.replace(new RegExp(`(${escaped})`, "gi"), "<mark class=\"search-highlight\">$1</mark>");
    } catch { return html; }
  }

  $: displayHtml = searchTerm ? highlightText(rendered, searchTerm) : rendered;

  function copyButtons(node: HTMLElement) {
    function addButtons() {
      node.querySelectorAll("pre").forEach((pre) => {
        if (pre.querySelector(".copy-btn")) return;
        const code = (pre.querySelector("code")?.textContent || "").trim();
        if (!code) return;
        pre.style.position = "relative";
        const btn = document.createElement("button");
        btn.className = "copy-btn";
        btn.textContent = "📋";
        btn.setAttribute("aria-label", "Copy code");
        btn.onclick = async (e) => {
          e.stopPropagation();
          try {
            await navigator.clipboard.writeText(code);
            btn.textContent = "✅";
            setTimeout(() => { btn.textContent = "📋"; }, 2000);
          } catch { /* clipboard not available */ }
        };
        pre.prepend(btn);
      });
    }
    addButtons();
    const observer = new MutationObserver(addButtons);
    observer.observe(node, { childList: true, subtree: true });
    return { destroy() { observer.disconnect(); } };
  }

  function startEdit() {
    editContent = msg.content;
    editing = true;
  }

  function saveEdit() {
    if (editContent.trim()) {
      onEdit(index, editContent.trim());
    }
    editing = false;
  }

  function cancelEdit() {
    editing = false;
  }

  function requestDelete() {
    deleteConfirm = true;
  }

  function confirmDelete() {
    deleteConfirm = false;
    onDelete(index);
  }

  function cancelDelete() {
    deleteConfirm = false;
  }

  function handleRetry() {
    onRetry(index);
  }
</script>

<div class="msg {msg.role}" class:editing>
  {#if msg.role === "assistant"}
    <div class="msg-avatar">🤖</div>
  {/if}
  <div class="msg-bubble">
    <ask-message role={msg.role} content={msg.content}></ask-message>
    {#if editing}
      <textarea class="edit-textarea" bind:value={editContent}></textarea>
      <div class="edit-actions">
        <button class="edit-save" onclick={saveEdit}>Save</button>
        <button class="edit-cancel" onclick={cancelEdit}>Cancel</button>
      </div>
    {:else if deleteConfirm}
      <div class="delete-confirm">
        <span>Delete from here?</span>
        <div class="delete-actions">
          <button class="delete-yes" onclick={confirmDelete}>Yes</button>
          <button class="delete-no" onclick={cancelDelete}>No</button>
        </div>
      </div>
    {:else}
        {#if rendered}
          <div class="markdown" use:copyButtons>
            {@html displayHtml}
          </div>
      {:else}
        <div class="plain">{msg.content}</div>
      {/if}
      <div class="msg-actions">
        {#if msg.role === "user"}
          <button class="action-btn" onclick={startEdit} title="Edit message">✏️</button>
        {/if}
        <button class="action-btn" onclick={requestDelete} title="Delete from here">🗑️</button>
        {#if isError}
          <button class="action-btn retry-btn" onclick={handleRetry} title="Retry">↻</button>
        {/if}
      </div>
    {/if}
  </div>
</div>

<style>
  .msg { display: flex; gap: 10px; padding: 8px 16px; max-width: 800px; margin: 0 auto; }
  .msg.user { flex-direction: row-reverse; }
  .msg-avatar { width: 28px; height: 28px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0; background: var(--surface2); }
  .msg-bubble {
    padding: 0;
    border-radius: 12px; font-size: 14px; line-height: 1.6;
    max-width: 85%; word-wrap: break-word; position: relative;
  }
  .msg.user .msg-bubble { background: var(--user-bg); color: var(--user-text); border-bottom-right-radius: 4px; }
  .msg.assistant .msg-bubble { background: var(--surface2); border: 1px solid var(--border); border-bottom-left-radius: 4px; }
  .plain { white-space: pre-wrap; }
  :global(.msg-bubble p) { margin-bottom: 6px; }
  :global(.msg-bubble p:last-child) { margin-bottom: 0; }
  :global(.msg-bubble pre) { background: var(--code-bg); border: 1px solid var(--border); border-radius: 8px; margin: 8px 0; overflow-x: auto; padding: 12px; position: relative; }
  :global(.msg-bubble code) { font-family: "SF Mono", Monaco, Menlo, monospace; font-size: 13px; }
  :global(.msg-bubble :not(pre) > code) { background: var(--code-bg); padding: 1px 5px; border-radius: 4px; }
  :global(.msg-bubble ul), :global(.msg-bubble ol) { padding-left: 20px; margin: 8px 0; }
  :global(.msg-bubble blockquote) { border-left: 3px solid var(--accent); padding: 4px 12px; margin: 8px 0; color: var(--muted); background: var(--code-bg); border-radius: 0 4px 4px 0; }
  :global(.msg-bubble a) { color: var(--accent); text-decoration: none; }
  :global(.msg-bubble a:hover) { text-decoration: underline; }
  :global(.msg-bubble h1), :global(.msg-bubble h2), :global(.msg-bubble h3), :global(.msg-bubble h4) { margin: 12px 0 6px; line-height: 1.3; }

  :global(.copy-btn) {
    position: absolute; top: 6px; right: 6px; z-index: 5;
    padding: 2px 8px; border-radius: 4px; border: 1px solid var(--border);
    background: var(--surface2); color: var(--muted); cursor: pointer;
    font-size: 12px; line-height: 1.6; opacity: 0; transition: opacity .1s;
  }
  :global(pre:hover .copy-btn) { opacity: 1; }
  :global(.copy-btn:hover) { background: var(--accent); color: #fff; border-color: var(--accent); opacity: 1; }

  .msg-actions {
    display: none; gap: 4px; margin-top: 6px; justify-content: flex-end;
  }
  .msg:hover .msg-actions { display: flex; }
  .action-btn {
    background: none; border: 1px solid var(--border); border-radius: 4px;
    padding: 2px 6px; cursor: pointer; font-size: 12px; line-height: 1;
    color: var(--muted);
  }
  .action-btn:hover { color: var(--text); background: var(--surface2); }
  .retry-btn { color: var(--accent); }
  .retry-btn:hover { background: var(--accent); color: #fff; }

  .edit-textarea {
    width: 100%; min-height: 60px; resize: vertical;
    background: var(--surface2); color: var(--text); border: 1px solid var(--border);
    border-radius: 8px; padding: 10px; font-size: 14px; outline: none;
    box-sizing: border-box;
  }
  .edit-textarea:focus { border-color: var(--accent); }
  .edit-actions, .delete-actions { display: flex; gap: 6px; margin-top: 6px; }
  .edit-save, .delete-yes {
    padding: 4px 12px; border-radius: 6px; border: none;
    background: var(--accent); color: #fff; cursor: pointer; font-size: 12px;
  }
  .edit-save:hover, .delete-yes:hover { background: var(--accent-hover); }
  .edit-cancel, .delete-no {
    padding: 4px 12px; border-radius: 6px; border: 1px solid var(--border);
    background: var(--surface); color: var(--text); cursor: pointer; font-size: 12px;
  }
  .edit-cancel:hover, .delete-no:hover { background: var(--surface2); }
  .delete-confirm { font-size: 13px; color: var(--muted); }
  :global(mark.search-highlight) {
    background: var(--accent); color: #fff; border-radius: 2px; padding: 0 2px;
  }
</style>
