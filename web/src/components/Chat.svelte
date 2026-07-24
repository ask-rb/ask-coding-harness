<script lang="ts">
  import { onMount } from "svelte";
  import Message from "./Message.svelte";
  import DiffViewer from "./DiffViewer.svelte";
  import type { Message as Msg } from "../lib/api";

  export let messages: Msg[] = [];
  export let streamingText = "";
  export let isStreaming = false;
  export let toolCalls = [];
  export let onSend: (text: string) => void;
  export let onCancel: () => void;

  let inputValue = "";
  let messagesEl: HTMLDivElement;
  let inputEl: HTMLTextAreaElement;

  $: if (messagesEl) {
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function handleKey(e: KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  function send() {
    if (!inputValue.trim() || isStreaming) return;
    onSend(inputValue.trim());
    inputValue = "";
    if (inputEl) inputEl.style.height = "auto";
  }
</script>

<div class="chat-container">
  <div class="messages" bind:this={messagesEl}>
    {#each messages as msg, i (i)}
      <Message {msg} />
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
        <div class="msg-content">{streamingText}</div>
        <span class="cursor">▊</span>
      </div>
    {/if}
  </div>

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

<style>
  .chat-container { display: flex; flex-direction: column; height: 100%; }
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

  .input-area { border-top: 1px solid var(--border); padding: 12px 16px; background: var(--surface); }
  .input-row { display: flex; gap: 8px; align-items: flex-end; max-width: 800px; margin: 0 auto; }
  .input-row textarea {
    flex: 1; min-height: 44px; max-height: 120px; resize: none;
    background: var(--surface2); color: var(--text); border: 1px solid var(--border);
    border-radius: 10px; padding: 10px 14px; font-size: 14px; outline: none;
  }
  .input-row textarea:focus { border-color: var(--accent); }
  .input-row textarea:disabled { opacity: .5; }

  .send-btn, .cancel-btn {
    width: 44px; height: 44px; border-radius: 10px; border: none;
    display: flex; align-items: center; justify-content: center; flex-shrink: 0; cursor: pointer;
  }
  .send-btn { background: var(--accent); color: #fff; }
  .send-btn:hover { background: var(--accent-hover); }
  .send-btn:disabled { opacity: .4; cursor: not-allowed; }
  .cancel-btn { background: var(--danger); color: #fff; }
  .cancel-btn:hover { opacity: .8; }
</style>
