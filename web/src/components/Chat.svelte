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
    try { renderedStream = markedFn.parse(streamingText, { breaks: true }); }
    catch { renderedStream = streamingText; }
  } else { renderedStream = ""; }

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
  export let currentModel = "";
  export let availableModels: string[] = [];
  export let onModelChange: (model: string) => void = () => {};
  export let selectedDirectory: string | null = null;

  let inputValue = "";
  let messagesEl: HTMLDivElement;
  let inputEl: HTMLTextAreaElement;
  let showFilePanel = false;
  let fileSearch = "";
  let fuse: Fuse<string> | null = null;
  let showSearch = false;
  let searchTerm = "";
  let currentMatchIndex = 0;

  // Autocomplete state
  let autoMode: null | "file" | "command" = null;
  let autoQuery = "";
  let autoIndex = 0;
  let autoEl: HTMLDivElement;

  // Drag-and-drop state
  let dragOver = false;
  let dragCount = 0;

  // Image previews (from drag/paste)
  let imagePreviews: Array<{ name: string; dataUrl: string }> = [];

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

  $: if (showSearch && searchTerm) { scrollToCurrentMatch(); }

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

  function closeSearch() { showSearch = false; searchTerm = ""; currentMatchIndex = 0; }

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

  $: if (messagesEl) { messagesEl.scrollTop = messagesEl.scrollHeight; }

  function handleKey(e: KeyboardEvent) {
    if ((e.metaKey || e.ctrlKey) && e.key === "f" && !showFilePanel) {
      e.preventDefault();
      showSearch = true;
      requestAnimationFrame(() => {
        (document.querySelector(".search-input") as HTMLInputElement)?.focus();
      });
      return;
    }

    // Autocomplete navigation
    if (autoMode && e.key === "ArrowDown") { e.preventDefault(); autoIndex = Math.min(autoIndex + 1, autoOptions.length - 1); return; }
    if (autoMode && e.key === "ArrowUp") { e.preventDefault(); autoIndex = Math.max(autoIndex - 1, 0); return; }
    if (autoMode && (e.key === "Tab" || (e.key === "Enter" && autoMode))) {
      e.preventDefault();
      insertAutoComplete();
      return;
    }
    if (autoMode && e.key === "Escape") { closeAutoComplete(); return; }

    if (e.key === "Enter" && !e.shiftKey && !showFilePanel && !showSearch && !autoMode) {
      e.preventDefault();
      send();
    }
    if (e.key === "Escape") {
      if (showSearch) { closeSearch(); return; }
      if (autoMode) { closeAutoComplete(); return; }
      showFilePanel = false;
    }
    if (showSearch && e.key === "Enter") { e.preventDefault(); nextMatch(); }
  }

  function handleInput() {
    // Check for autocomplete triggers
    const cursorPos = inputEl?.selectionStart || 0;
    const textBefore = inputValue.slice(0, cursorPos);

    // Check for @ or / trigger
    const atMatch = textBefore.match(/@([\w\/.-]*)$/);
    const slashMatch = textBefore.match(/\/([\w]*)$/);

    if (atMatch && atMatch[0].length > 1) {
      autoMode = "file";
      autoQuery = atMatch[1];
      autoIndex = 0;
    } else if (slashMatch && slashMatch[0].length > 1) {
      autoMode = "command";
      autoQuery = slashMatch[1];
      autoIndex = 0;
    } else {
      closeAutoComplete();
    }
  }

  function closeAutoComplete() { autoMode = null; autoQuery = ""; autoIndex = 0; }

  $: autoOptions = autoMode === "file"
    ? fileList.filter(f => f.toLowerCase().includes(autoQuery.toLowerCase())).slice(0, 12)
    : autoMode === "command"
      ? COMMANDS.filter(c => c.label.toLowerCase().includes(autoQuery.toLowerCase()))
      : [];

  const COMMANDS = [
    { id: "new", label: "New conversation" },
    { id: "projects", label: "Reload projects" },
    { id: "theme", label: "Toggle theme" },
  ];

  function insertAutoComplete() {
    if (autoOptions.length === 0 || autoIndex >= autoOptions.length) return;
    const selected = autoOptions[autoIndex];
    const cursorPos = inputEl?.selectionStart || 0;
    const textBefore = inputValue.slice(0, cursorPos);
    const trigger = autoMode === "file" ? "@" : "/";

    // Find the position of the last trigger character before cursor
    const triggerPos = textBefore.lastIndexOf(trigger);
    if (triggerPos === -1) return;

    const replace = autoMode === "file"
      ? "@" + (selected as string)
      : "/" + (selected as any).id;

    inputValue = inputValue.slice(0, triggerPos) + replace + " " + inputValue.slice(cursorPos);
    closeAutoComplete();
    requestAnimationFrame(() => {
      if (inputEl) {
        const pos = triggerPos + replace.length + 1;
        inputEl.setSelectionRange(pos, pos);
        inputEl.focus();
      }
    });
  }

  function pickAutoOption(option: string) {
    const cursorPos = inputEl?.selectionStart || 0;
    const textBefore = inputValue.slice(0, cursorPos);
    const trigger = autoMode === "file" ? "@" : "/";
    const triggerPos = textBefore.lastIndexOf(trigger);
    if (triggerPos === -1) return;
    inputValue = inputValue.slice(0, triggerPos) + "@" + option + " " + inputValue.slice(cursorPos);
    closeAutoComplete();
    inputEl?.focus();
  }

  function send() {
    if (!inputValue.trim() || isStreaming) return;
    onSend(inputValue);
    inputValue = "";
    if (inputEl) inputEl.style.height = "auto";
  }

  function handleFileKey(e: KeyboardEvent) {
    if (e.key === "Escape") { showFilePanel = false; fileSearch = ""; }
    e.stopPropagation();
  }

  // Drag-and-drop handlers
  function handleDragEnter(e: DragEvent) {
    if (e.dataTransfer?.types.includes("Files")) {
      dragCount++;
      dragOver = true;
    }
  }

  function handleDragLeave(e: DragEvent) {
    if (e.dataTransfer?.types.includes("Files")) {
      dragCount--;
      if (dragCount <= 0) { dragCount = 0; dragOver = false; }
    }
  }

  function handleDragOver(e: DragEvent) {
    if (e.dataTransfer?.types.includes("Files")) {
      e.preventDefault();
      e.dataTransfer.dropEffect = "copy";
    }
  }

  async function handleDrop(e: DragEvent) {
    e.preventDefault();
    dragOver = false;
    dragCount = 0;
    if (!e.dataTransfer?.files || e.dataTransfer.files.length === 0) return;

    const textParts: string[] = [];
    for (const file of Array.from(e.dataTransfer.files)) {
      // Handle images — show thumbnail preview
      if (file.type.startsWith("image/")) {
        try {
          const dataUrl = await readFileAsDataUrl(file);
          imagePreviews = [...imagePreviews, { name: file.name, dataUrl }];
          textParts.push(`📷 ${file.name}`);
        } catch {
          textParts.push(`📷 ${file.name} [unable to load]`);
        }
        continue;
      }
      // Handle text files
      if (file.size > 1_000_000) {
        textParts.push(`📄 ${file.name}\n\`\`\`\n[File too large: ${(file.size / 1024 / 1024).toFixed(1)} MB — max 1 MB]\n\`\`\``);
        continue;
      }
      try {
        const text = await readFileContent(file);
        textParts.push(`📄 ${file.name}\n\`\`\`\n${text}\n\`\`\``);
      } catch {
        textParts.push(`📄 ${file.name}\n\`\`\`\n[Unable to read file — binary or unsupported format]\n\`\`\``);
      }
    }
    if (textParts.length > 0) {
      inputValue = (inputValue ? inputValue + "\n\n" : "") + textParts.join("\n\n");
      if (inputEl) {
        inputEl.focus();
        inputEl.selectionStart = inputEl.selectionEnd = inputValue.length;
      }
    }
  }

  function removeImage(index: number) {
    imagePreviews = imagePreviews.filter((_, i) => i !== index);
  }

  // Handle paste events for images
  function handlePaste(e: ClipboardEvent) {
    const items = e.clipboardData?.items;
    if (!items) return;
    for (const item of Array.from(items)) {
      if (item.type.startsWith("image/")) {
        e.preventDefault();
        const file = item.getAsFile();
        if (!file) continue;
        readFileAsDataUrl(file).then(dataUrl => {
          imagePreviews = [...imagePreviews, { name: file.name || "pasted-image.png", dataUrl }];
          inputValue = (inputValue ? inputValue + "\n\n" : "") + "📷 pasted-image.png";
        });
        break;
      }
    }
  }

  function readFileAsDataUrl(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  }

  function readFileContent(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      // Only read text files
      if (file.type && !file.type.startsWith("text/") && !file.type.startsWith("application/json") && !file.type.startsWith("application/xml") && !file.type.startsWith("application/javascript") && !file.type.includes("script") && !file.type.includes("yaml") && !file.type.includes("toml") && file.type !== "") {
        reject(new Error("Binary file"));
        return;
      }
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(reader.error);
      reader.readAsText(file);
    });
  }

  $: placeholderText = selectedDirectory
    ? `Ask about ${selectedDirectory.split("/").filter(Boolean).pop()}...`
    : "Type your message or use @ to mention files, / for commands...";
</script>

<div class="chat-container"
  ondragenter={handleDragEnter}
  ondragleave={handleDragLeave}
  ondragover={handleDragOver}
  ondrop={handleDrop}>

  {#if dragOver}
    <div class="drag-overlay">
      <div class="drag-content">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><path d="M17 8l-5-5-5 5"/><path d="M12 3v12"/>
        </svg>
        <span>Drop files to attach</span>
      </div>
    </div>
  {/if}
  {#if showSearch}
    <div class="search-bar">
      <span class="search-icon">🔍</span>
      <input class="search-input" type="text" placeholder="Search messages..." bind:value={searchTerm}
        onkeydown={(e) => { if (e.key === "Escape") closeSearch(); if (e.key === "Enter") { e.preventDefault(); nextMatch(); } }} />
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
          {#if tc.status === "running"}<span class="tool-status">running...</span>{:else}<span class="tool-status">completed</span>{/if}
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

  {#if imagePreviews.length > 0}
    <div class="image-previews">
      {#each imagePreviews as img, i}
        <div class="img-preview">
          <img src={img.dataUrl} alt={img.name} />
          <span class="img-name">{img.name}</span>
          <button class="img-remove" onclick={() => removeImage(i)} title="Remove image">×</button>
        </div>
      {/each}
    </div>
  {/if}

  <div class="input-area">
    <div class="input-row">
      <button class="action-btn attach-btn" onclick={() => { showFilePanel = !showFilePanel; fileSearch = ""; }} title="Attach files">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
          <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
        </svg>
      </button>
      <textarea
        bind:this={inputEl}
        bind:value={inputValue}
        placeholder={placeholderText}
        onkeydown={handleKey}
        oninput={handleInput}
        onpaste={handlePaste}
        disabled={isStreaming}
        rows="1"
      ></textarea>
      {#if isStreaming}
        <button class="action-btn stop-btn" onclick={onCancel} title="Stop">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
            <rect x="6" y="6" width="12" height="12" rx="2"/>
          </svg>
        </button>
      {:else}
        <button class="action-btn send-btn" onclick={send} disabled={!inputValue.trim()} title="Send">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
        </button>
      {/if}
    </div>

    <!-- Model picker in footer -->
    <div class="input-footer">
      <div class="model-selector">
        <select value={currentModel} onchange={(e) => onModelChange((e.target as HTMLSelectElement).value)}>
          {#each availableModels as model}
            <option value={model}>{model}</option>
          {/each}
        </select>
      </div>
      <span class="footer-hint"><kbd>@</kbd> files · <kbd>/</kbd> commands</span>
    </div>
  </div>

  <!-- Autocomplete popup -->
  {#if autoMode && autoOptions.length > 0}
    <div class="autocomplete" bind:this={autoEl}>
      {#each autoOptions as option, i}
        <button class="auto-item" class:selected={i === autoIndex}
          onmousedown={(e) => { e.preventDefault(); autoIndex = i; insertAutoComplete(); }}
          onmouseenter={() => autoIndex = i}>
          {#if autoMode === "file"}
            <span class="auto-icon">📄</span>
            <span class="auto-label">{option}</span>
          {:else}
            <span class="auto-icon">/</span>
            <span class="auto-label">{(option as any).label}</span>
          {/if}
        </button>
      {/each}
    </div>
  {/if}
</div>

<!-- File attach panel -->
{#if showFilePanel}
  <div class="file-overlay" onclick={() => { showFilePanel = false; fileSearch = ""; }} onkeydown={handleFileKey}>
    <div class="file-panel" onclick={(e) => e.stopPropagation()}>
      <input class="file-search-input" placeholder="Search files..." bind:value={fileSearch} autofocus
        onkeydown={(e) => { if (e.key === "Escape") { showFilePanel = false; fileSearch = ""; } }} />
      <div class="file-results">
        {#each searchResults as file}
          <button class="file-item" class:selected={attachedFiles.includes(file)} onclick={() => onToggleFile(file)}>
            <span class="file-icon">📄</span>
            <span class="file-path">{file}</span>
            {#if attachedFiles.includes(file)}<span class="file-check">✓</span>{/if}
          </button>
        {/each}
        {#if searchResults.length === 0}<div class="file-empty">No matching files</div>{/if}
      </div>
    </div>
  </div>
{/if}

<style>
  .chat-container { display: flex; flex-direction: column; height: 100%; position: relative; }

  /* Drag-and-drop overlay */
  .drag-overlay {
    position: absolute; inset: 0; z-index: 40;
    background: color-mix(in srgb, var(--surface2) 90%, transparent);
    border: 2px dashed var(--accent);
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    margin: 8px;
    pointer-events: none;
  }
  .drag-content {
    display: flex; flex-direction: column; align-items: center; gap: 12px;
    color: var(--accent); opacity: .8;
  }
  .drag-content svg { display: block; }
  .drag-content span { font-size: 14px; font-weight: 500; }

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
  .search-close { background: none; border: none; color: var(--muted); cursor: pointer; font-size: 14px; padding: 2px; }
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
  .chip { display: inline-flex; align-items: center; gap: 4px; background: var(--surface2); border: 1px solid var(--border); border-radius: 6px; padding: 4px 8px; font-size: 12px; }
  .chip-name { max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .chip-remove { background: none; border: none; cursor: pointer; font-size: 14px; color: var(--muted); padding: 0; line-height: 1; }
  .chip-remove:hover { color: var(--danger); }
  .clear-chips { background: none; border: none; cursor: pointer; font-size: 11px; color: var(--muted); padding: 2px 6px; }
  .clear-chips:hover { color: var(--text); }

  /* Image previews */
  .image-previews {
    display: flex; gap: 8px; padding: 8px 16px 4px; overflow-x: auto; flex-shrink: 0;
  }
  .img-preview {
    display: flex; flex-direction: column; align-items: center; gap: 4px;
    position: relative; flex-shrink: 0;
  }
  .img-preview img {
    width: 64px; height: 64px; object-fit: cover; border-radius: 6px;
    border: 1px solid var(--border); background: var(--surface2);
  }
  .img-name { font-size: 9px; color: var(--muted); max-width: 64px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-align: center; }
  .img-remove {
    position: absolute; top: -6px; right: -6px; width: 18px; height: 18px;
    border-radius: 50%; border: 1px solid var(--border); background: var(--surface);
    color: var(--muted); cursor: pointer; font-size: 11px; line-height: 1;
    display: flex; align-items: center; justify-content: center; padding: 0;
  }
  .img-remove:hover { background: var(--danger); color: #fff; border-color: var(--danger); }

  /* ── Input area ── */
  .input-area {
    border-top: 1px solid var(--border); background: var(--surface); flex-shrink: 0;
  }
  .input-row {
    display: flex; gap: 6px; align-items: flex-end; padding: 10px 12px 4px;
    max-width: 800px; margin: 0 auto;
  }
  .input-row textarea {
    flex: 1; min-height: 44px; max-height: 120px; resize: none;
    background: var(--surface2); color: var(--text); border: 1px solid var(--border);
    border-radius: 10px; padding: 10px 14px; font-size: 14px; outline: none;
  }
  .input-row textarea:focus { border-color: var(--accent); }
  .input-row textarea:disabled { opacity: .5; }

  .action-btn {
    width: 36px; height: 36px; border-radius: 50%; border: none;
    display: flex; align-items: center; justify-content: center; flex-shrink: 0; cursor: pointer;
    transition: background .12s, color .12s;
  }
  .attach-btn { background: var(--surface2); color: var(--muted); border: 1px solid var(--border); }
  .attach-btn:hover { background: var(--surface3); color: var(--text); }
  .send-btn { background: var(--accent); color: #fff; }
  .send-btn:hover { background: var(--accent-hover); }
  .send-btn:disabled { opacity: .3; cursor: not-allowed; background: var(--surface3); color: var(--muted); }
  .stop-btn { background: var(--danger); color: #fff; }
  .stop-btn:hover { opacity: .85; }

  /* ── Input footer (model picker + hints) ── */
  .input-footer {
    display: flex; align-items: center; justify-content: space-between;
    padding: 4px 12px 8px; max-width: 800px; margin: 0 auto;
  }
  .model-selector select {
    padding: 3px 8px; border-radius: 5px; border: 1px solid var(--border-light);
    background: var(--surface2); color: var(--muted); font-size: 11px; cursor: pointer;
    max-width: 180px; outline: none;
  }
  .model-selector select:hover { border-color: var(--accent); color: var(--text-secondary); }
  .footer-hint { font-size: 10px; color: var(--muted); }
  .footer-hint kbd {
    background: var(--surface2); border: 1px solid var(--border-light);
    border-radius: 3px; padding: 0 4px; font-size: 9px; font-family: inherit;
  }

  /* ── Autocomplete popup ── */
  .autocomplete {
    position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%);
    max-width: 500px; width: calc(100% - 80px); margin-bottom: 4px;
    background: var(--surface); border: 1px solid var(--border); border-radius: 10px;
    box-shadow: 0 -4px 20px rgba(0,0,0,.4); overflow: hidden; z-index: 50;
  }
  .auto-item {
    width: 100%; padding: 8px 12px; display: flex; align-items: center; gap: 8px;
    border: none; background: none; color: var(--text); cursor: pointer;
    text-align: left; font-size: 13px;
  }
  .auto-item:hover, .auto-item.selected { background: var(--surface2); }
  .auto-icon { font-size: 14px; color: var(--muted); width: 20px; text-align: center; flex-shrink: 0; }
  .auto-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

  /* File panel */
  .file-overlay { position: fixed; inset: 0; background: rgba(0,0,0,.5); display: flex; align-items: flex-start; justify-content: center; padding-top: 80px; z-index: 200; }
  .file-panel { width: 520px; max-width: 90vw; background: var(--surface); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; box-shadow: 0 8px 32px rgba(0,0,0,.4); }
  .file-search-input { width: 100%; padding: 14px 16px; background: var(--surface2); border: none; color: var(--text); font-size: 15px; outline: none; border-bottom: 1px solid var(--border); box-sizing: border-box; }
  .file-results { max-height: 360px; overflow-y: auto; padding: 4px; }
  .file-item { width: 100%; padding: 8px 14px; background: none; border: none; color: var(--text); text-align: left; cursor: pointer; border-radius: 6px; font-size: 13px; display: flex; align-items: center; gap: 8px; }
  .file-item:hover { background: var(--surface2); }
  .file-item.selected { background: var(--accent); color: #fff; }
  .file-icon { flex-shrink: 0; font-size: 14px; }
  .file-path { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .file-check { flex-shrink: 0; font-size: 14px; }
  .file-empty { padding: 24px; text-align: center; color: var(--muted); font-size: 13px; }
</style>
