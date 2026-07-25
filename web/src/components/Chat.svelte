<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import Message from "./Message.svelte";
  import DiffViewer from "./DiffViewer.svelte";
  import type { Message as Msg } from "../lib/api";
  import Fuse from "fuse.js";

  let markedFn: any = null;

  onMount(async () => {
    const mod = await import("https://cdn.jsdelivr.net/npm/marked@15/+esm");
    markedFn = mod.marked;
  });

  let renderedStream = "";
  $: if (markedFn && streamingText) {
    try {
      renderedStream = markedFn.parse(streamingText, { breaks: true });
    } catch {
      renderedStream = streamingText;
    }
  } else {
    renderedStream = "";
  }

  export let messages: Msg[] = [];
  export let streamingText = "";
  export let isStreaming = false;
  export let toolCalls = [];
  export let onSend: (text: string) => void;
  export let onCancel: () => void;
  export let onEdit: (index: number, content: string) => void = () => {};
  export let onDelete: (index: number) => void = () => {};
  export let onRetry: (index: number) => void = () => {};
  export let attachedFiles: string[] = [];
  export let fileList: string[] = [];
  export let onToggleFile: (file: string) => void = () => {};
  export let onClearFiles: () => void = () => {};

  let inputValue = "";
  let messagesEl: HTMLDivElement;
  let inputEl: HTMLTextAreaElement;
  let showFilePanel = false;
  let fileSearch = "";
  let fuse: Fuse<string> | null = null;
  let showSearch = false;
  let searchTerm = "";
  let currentMatchIndex = 0;

  $: matchingIndices = searchTerm
    ? messages.reduce<number[]>((acc, msg, i) => {
        if (msg.content.toLowerCase().includes(searchTerm.toLowerCase())) acc.push(i);
        return acc;
      }, [])
    : [];

  $: totalMatches = matchingIndices.length;

  $: if (showSearch && searchTerm && currentMatchIndex >= totalMatches) {
    currentMatchIndex = totalMatches > 0 ? 0 : 0;
  }

  let matchEls: HTMLElement[] = [];
  $: if (messagesEl && matchingIndices.length > 0) {
    matchEls = matchingIndices
      .map((i) => messagesEl.querySelector(`[data-msg-index="${i}"]`))
      .filter(Boolean) as HTMLElement[];
  }

  function scrollToCurrentMatch() {
    const el = matchEls[currentMatchIndex];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  $: if (showSearch && searchTerm) {
    scrollToCurrentMatch();
  }

  function nextMatch() {
    if (totalMatches === 0) return;
    currentMatchIndex = (currentMatchIndex + 1) % totalMatches;
    scrollToCurrentMatch();
  }

  function prevMatch() {
    if (totalMatches === 0) return;
    currentMatchIndex = (currentMatchIndex - 1 + totalMatches) % totalMatches;
    scrollToCurrentMatch();
  }

  function closeSearch() {
    showSearch = false;
    searchTerm = "";
    currentMatchIndex = 0;
  }

  onMount(() => {
    const focusHandler = () => inputEl?.focus();
    window.addEventListener("focus-chat-input", focusHandler);
    return () => window.removeEventListener("focus-chat-input", focusHandler);
  });

  $: if (fileList.length > 0 && !fuse) {
    fuse = new Fuse(fileList, { threshold: 0.4 });
  }

  $: searchResults = fuse && fileSearch.trim()
    ? fuse.search(fileSearch.trim()).slice(0, 30).map((r) => r.item)
    : fileList.slice(0, 50);

  $: if (messagesEl) {
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function handleKey(e: KeyboardEvent) {
    if ((e.metaKey || e.ctrlKey) && e.key === "f" && !showFilePanel) {
      e.preventDefault();
      showSearch = true;
      // Focus search input after render
      requestAnimationFrame(() => {
        const input = document.querySelector(".search-input") as HTMLInputElement;
        input?.focus();
        input?.select();
      });
      return;
    }
    if (e.key === "Enter" && !e.shiftKey && !showFilePanel && !showSearch) {
      e.preventDefault();
      send();
    }
    if (e.key === "Escape") {
      if (showSearch) { closeSearch(); return; }
      showFilePanel = false;
    }
    if (showSearch && e.key === "Enter") {
      e.preventDefault();
      nextMatch();
    }
  }

  function send() {
    if (!inputValue.trim() || isStreaming) return;
    onSend(inputValue);
    inputValue = "";
    if (inputEl) inputEl.style.height = "auto";
  }

  function handleFileKey(e: KeyboardEvent) {
    if (e.key === "Escape") {
      showFilePanel = false;
      fileSearch = "";
    }
    e.stopPropagation();
  }
</script>

<div class="chat-container">
  {#if showSearch}
    <div class="search-bar">
      <span class="search-icon">🔍</span>
      <input
        class="search-input"
        type="text"
        placeholder="Search messages..."
        bind:value={searchTerm}
        onkeydown={(e) => {
          if (e.key === "Escape") closeSearch();
          if (e.key === "Enter") { e.preventDefault(); nextMatch(); }
        }}
      />
      {#if searchTerm}
        <span class="search-count">{totalMatches > 0 ? `${currentMatchIndex + 1} of ${totalMatches}` : "No matches"}</span>
        <button class="search-nav" onclick={prevMatch} disabled={totalMatches === 0} title="Previous match">▲</button>
        <button class="search-nav" onclick={nextMatch} disabled={totalMatches === 0} title="Next match">▼</button>
      {/if}
      <button class="search-close" onclick={closeSearch}>✕</button>
    </div>
  {/if}
  <div class="messages" bind:this={messagesEl}>
    {#each messages as msg, i (i)}
      <div data-msg-index={i}>
        <Message {msg} index={i} {onEdit} {onDelete} {onRetry} {searchTerm} />
      </div>
    {/each}
    {#each toolCalls as tc}
      <div class="tool-call">
        <div class="tool-icon">{tc.status === "running" ? "🔧" : "✅"}</div>
        <div class="tool-info">
          <span class="tool-name">{tc.name}</span>
          {#if tc.status === "running"}
            <span class="tool-status">running...</span>
          {:else}
            <span class="tool-status">completed</span>
          {/if}
        </div>
      </div>
      {#if tc.input && tc.input.file_path && tc.input.old_string !== undefined}
        <div class="tool-diff">
          <DiffViewer oldString={tc.input.old_string} newString={tc.input.new_string || ""} filePath={tc.input.file_path} />
        </div>
      {/if}
    {/each}
    {#if isStreaming && streamingText}
      <div class="msg assistant streaming">
        {#if renderedStream}
          <div class="markdown">{@html renderedStream}</div>
        {:else}
          <div class="msg-content">{streamingText}</div>
        {/if}
        <span class="cursor">▊</span>
      </div>
    {/if}
  </div>

  {#if attachedFiles.length > 0}
    <div class="attach-chips">
      {#each attachedFiles as file}
        <span class="chip">
          <span class="chip-name">📄 {file.split("/").pop()}</span>
          <button class="chip-remove" onclick={() => onToggleFile(file)}>×</button>
        </span>
      {/each}
      <button class="clear-chips" onclick={onClearFiles}>Clear all</button>
    </div>
  {/if}

  <div class="input-area">
    <div class="input-row">
      <textarea
        bind:this={inputEl}
        bind:value={inputValue}
        placeholder="Type your message..."
        onkeydown={handleKey}
        disabled={isStreaming}
        rows="1"
      ></textarea>
      <button class="attach-btn" onclick={() => { showFilePanel = !showFilePanel; fileSearch = ""; }} title="Attach files">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
          <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
        </svg>
      </button>
      {#if isStreaming}
        <button class="cancel-btn" onclick={onCancel}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
            <rect x="6" y="6" width="12" height="12" rx="2"/>
          </svg>
        </button>
      {:else}
        <button class="send-btn" onclick={send} disabled={!inputValue.trim()}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
            <path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/>
          </svg>
        </button>
      {/if}
    </div>
  </div>
</div>

<!-- File attach panel -->
{#if showFilePanel}
  <div class="file-overlay" onclick={() => { showFilePanel = false; fileSearch = ""; }} onkeydown={handleFileKey}>
    <div class="file-panel" onclick={(e) => e.stopPropagation()}>
      <input
        class="file-search-input"
        placeholder="Search files..."
        bind:value={fileSearch}
        autofocus
        onkeydown={(e) => { if (e.key === "Escape") { showFilePanel = false; fileSearch = ""; } }}
      />
      <div class="file-results">
        {#each searchResults as file}
          <button class="file-item" class:selected={attachedFiles.includes(file)}
            onclick={() => onToggleFile(file)}>
            <span class="file-icon">📄</span>
            <span class="file-path">{file}</span>
            {#if attachedFiles.includes(file)}
              <span class="file-check">✓</span>
            {/if}
          </button>
        {/each}
        {#if searchResults.length === 0}
          <div class="file-empty">No matching files</div>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  .chat-container { display: flex; flex-direction: column; height: 100%; position: relative; }

  .search-bar {
    display: flex; align-items: center; gap: 8px; padding: 8px 16px;
    border-bottom: 1px solid var(--border); background: var(--surface); flex-shrink: 0;
  }
  .search-icon { font-size: 14px; color: var(--muted); flex-shrink: 0; }
  .search-input {
    flex: 1; background: var(--surface2); color: var(--text); border: 1px solid var(--border);
    border-radius: 6px; padding: 6px 10px; font-size: 13px; outline: none; min-width: 0;
  }
  .search-input:focus { border-color: var(--accent); }
  .search-count { font-size: 12px; color: var(--muted); white-space: nowrap; }
  .search-nav {
    background: var(--surface2); border: 1px solid var(--border); border-radius: 4px;
    color: var(--text); cursor: pointer; font-size: 10px; width: 24px; height: 24px;
    display: flex; align-items: center; justify-content: center;
  }
  .search-nav:hover { background: var(--accent); color: #fff; border-color: var(--accent); }
  .search-nav:disabled { opacity: .3; cursor: default; }
  .search-nav:disabled:hover { background: var(--surface2); color: var(--text); border-color: var(--border); }
  .search-close {
    background: none; border: none; color: var(--muted); cursor: pointer; font-size: 14px; padding: 2px;
  }
  .search-close:hover { color: var(--text); }
  .messages { flex: 1; overflow-y: auto; padding: 16px 0; }
  .msg { padding: 10px 16px; font-size: 14px; line-height: 1.6; word-wrap: break-word; }
  .msg.user { background: var(--user-bg); color: var(--user-text); margin: 0 16px 8px auto; max-width: 80%; border-radius: 12px 12px 4px 12px; }
  .msg.assistant { margin: 0 auto 8px 16px; max-width: 80%; }
  .msg.streaming { margin: 0 auto 8px 16px; max-width: 80%; display: flex; align-items: flex-end; gap: 2px; }
  .msg-content { white-space: pre-wrap; }
  .cursor { animation: blink 1s step-end infinite; color: var(--accent); font-size: 14px; }
  @keyframes blink { 50% { opacity: 0; } }

  .tool-call { display: flex; align-items: center; gap: 8px; padding: 6px 16px; margin: 4px 0 4px 16px; max-width: 80%; background: var(--surface2); border: 1px solid var(--border); border-radius: 8px; }
  .tool-icon { font-size: 14px; }
  .tool-name { font-size: 13px; font-weight: 500; text-transform: capitalize; }
  .tool-status { font-size: 11px; color: var(--muted); margin-left: 8px; }
  .tool-diff { margin: 0 16px 8px 16px; max-width: 90%; }

  .attach-chips { display: flex; flex-wrap: wrap; gap: 6px; padding: 8px 16px 0; align-items: center; }
  .chip {
    display: inline-flex; align-items: center; gap: 4px;
    background: var(--surface2); border: 1px solid var(--border); border-radius: 6px;
    padding: 4px 8px; font-size: 12px;
  }
  .chip-name { max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .chip-remove { background: none; border: none; cursor: pointer; font-size: 14px; color: var(--muted); padding: 0; line-height: 1; }
  .chip-remove:hover { color: var(--danger); }
  .clear-chips { background: none; border: none; cursor: pointer; font-size: 11px; color: var(--muted); padding: 2px 6px; }
  .clear-chips:hover { color: var(--text); }

  .input-area { border-top: 1px solid var(--border); padding: 12px 16px; background: var(--surface); }
  .input-row { display: flex; gap: 8px; align-items: flex-end; max-width: 800px; margin: 0 auto; }
  .input-row textarea {
    flex: 1; min-height: 44px; max-height: 120px; resize: none;
    background: var(--surface2); color: var(--text); border: 1px solid var(--border);
    border-radius: 10px; padding: 10px 14px; font-size: 14px; outline: none;
  }
  .input-row textarea:focus { border-color: var(--accent); }
  .input-row textarea:disabled { opacity: .5; }

  .attach-btn, .send-btn, .cancel-btn {
    width: 44px; height: 44px; border-radius: 10px; border: none;
    display: flex; align-items: center; justify-content: center; flex-shrink: 0; cursor: pointer;
  }
  .attach-btn { background: var(--surface2); color: var(--muted); border: 1px solid var(--border); }
  .attach-btn:hover { background: var(--accent); color: #fff; border-color: var(--accent); }
  .send-btn { background: var(--accent); color: #fff; }
  .send-btn:hover { background: var(--accent-hover); }
  .send-btn:disabled { opacity: .4; cursor: not-allowed; }
  .cancel-btn { background: var(--danger); color: #fff; }
  .cancel-btn:hover { opacity: .8; }

  /* File panel */
  .file-overlay { position: fixed; inset: 0; background: rgba(0,0,0,.5); display: flex; align-items: flex-start; justify-content: center; padding-top: 80px; z-index: 200; }
  .file-panel { width: 520px; max-width: 90vw; background: var(--surface); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; box-shadow: 0 8px 32px rgba(0,0,0,.4); }
  .file-search-input {
    width: 100%; padding: 14px 16px; background: var(--surface2); border: none;
    color: var(--text); font-size: 15px; outline: none; border-bottom: 1px solid var(--border);
    box-sizing: border-box;
  }
  .file-results { max-height: 360px; overflow-y: auto; padding: 4px; }
  .file-item {
    width: 100%; padding: 8px 14px; background: none; border: none; color: var(--text);
    text-align: left; cursor: pointer; border-radius: 6px; font-size: 13px;
    display: flex; align-items: center; gap: 8px;
  }
  .file-item:hover { background: var(--surface2); }
  .file-item.selected { background: var(--accent); color: #fff; }
  .file-icon { flex-shrink: 0; font-size: 14px; }
  .file-path { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .file-check { flex-shrink: 0; font-size: 14px; }
  .file-empty { padding: 24px; text-align: center; color: var(--muted); font-size: 13px; }
</style>
