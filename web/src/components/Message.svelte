<script lang="ts">
  import { onMount } from "svelte";
  import type { Message as Msg } from "../lib/api";

  export let msg: Msg;

  let rendered: string;

  onMount(async () => {
    const { marked } = await import("https://cdn.jsdelivr.net/npm/marked@15/+esm");
    rendered = marked.parse(msg.content, { breaks: true });
  });

  function copyCode(code: string) {
    navigator.clipboard.writeText(code);
  }
</script>

<div class="msg {msg.role}">
  {#if msg.role === "assistant"}
    <div class="msg-avatar">🤖</div>
  {/if}
  <div class="msg-bubble">
    {#if rendered}
      <div class="markdown">
        {@html rendered}
      </div>
    {:else}
      <div class="plain">{msg.content}</div>
    {/if}
  </div>
</div>

<style>
  .msg { display: flex; gap: 10px; padding: 8px 16px; max-width: 800px; margin: 0 auto; }
  .msg.user { flex-direction: row-reverse; }
  .msg-avatar { width: 28px; height: 28px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0; background: var(--surface2); }
  .msg-bubble {
    padding: 10px 14px; border-radius: 12px; font-size: 14px; line-height: 1.6;
    max-width: 85%; word-wrap: break-word;
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
</style>
