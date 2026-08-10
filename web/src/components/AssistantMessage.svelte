<script lang="ts">
  import { renderMarkdown } from "../lib/markdown";
  import ToolStream from "./ToolStream.svelte";
  import type { TurnState } from "../lib/types";

  let { content, turn, streaming = false, conversationId = null } = $props<{
    content: string;
    turn?: TurnState;
    streaming?: boolean;
    conversationId?: string | null;
  }>();

  let thinkingOpen = $state(false);
  const hasArtifacts = $derived(
    turn !== undefined && (turn.tools.size > 0 || turn.approvals.length > 0 || turn.plan !== null || turn.todos.length > 0)
  );
</script>

<div class="assistant">
  {#if turn !== undefined && turn.thinking}
    <details class="thinking" bind:open={thinkingOpen}>
      <summary>
        <span class="thinking-label">Thinking{streaming ? "…" : ""}</span>
        <span class="thinking-toggle">{thinkingOpen ? "Hide" : "Show"}</span>
      </summary>
      <div class="thinking-body">{turn.thinking}</div>
    </details>
  {/if}

  {#if content}
    <div class="markdown">
      {@html renderMarkdown(content)}
    </div>
  {/if}

  {#if turn !== undefined && hasArtifacts}
    <ToolStream {turn} {conversationId} />
  {/if}

  {#if streaming && !content && !hasArtifacts}
    <div class="typing">
      <span></span><span></span><span></span>
    </div>
  {/if}
</div>

<style>
  .assistant {
    max-width: 46rem;
    margin: 0 auto 1.5rem;
  }

  .thinking {
    margin-bottom: 0.75rem;
    border: 1px solid #26262a;
    border-radius: 0.625rem;
    background: #131316;
  }
  .thinking summary {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    cursor: pointer;
    list-style: none;
    font-size: 0.75rem;
  }
  .thinking summary::-webkit-details-marker {
    display: none;
  }
  .thinking-label {
    color: #a3a3a3;
  }
  .thinking-toggle {
    margin-left: auto;
    font-size: 0.6875rem;
    color: #737373;
  }
  .thinking-body {
    padding: 0 0.75rem 0.75rem;
    color: #a3a3a3;
    font-size: 0.8125rem;
    line-height: 1.6;
    white-space: pre-wrap;
  }

  .markdown {
    font-size: 0.9375rem;
    line-height: 1.7;
    color: #e5e5e5;
    overflow-wrap: break-word;
  }
  .markdown :global(p) {
    margin: 0 0 0.75rem;
  }
  .markdown :global(p:last-child) {
    margin-bottom: 0;
  }
  .markdown :global(code) {
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 0.8125rem;
    background: #1a1a1d;
    padding: 0.125rem 0.375rem;
    border-radius: 0.375rem;
    border: 1px solid #26262a;
  }
  .markdown :global(.code-block) {
    margin: 0.75rem 0;
    padding: 0.75rem;
    border-radius: 0.625rem;
    background: #0d0d0f;
    border: 1px solid #26262a;
    overflow-x: auto;
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 0.8125rem;
    line-height: 1.6;
    white-space: pre;
  }

  .typing {
    display: flex;
    gap: 0.25rem;
    padding: 0.5rem 0;
  }
  .typing span {
    width: 0.375rem;
    height: 0.375rem;
    border-radius: 50%;
    background: #52525b;
    animation: blink 1.2s infinite;
  }
  .typing span:nth-child(2) { animation-delay: 0.2s; }
  .typing span:nth-child(3) { animation-delay: 0.4s; }
  @keyframes blink {
    0%, 100% { opacity: 0.25; }
    50% { opacity: 1; }
  }
</style>
