<script lang="ts">
  import AssistantMessage from "./AssistantMessage.svelte";
  import UserMessage from "./UserMessage.svelte";
  import type { Message, TurnState } from "../lib/types";

  let { messages, turn, streaming, conversationId } = $props<{
    messages: Message[];
    turn: TurnState;
    streaming: boolean;
    conversationId: string | null;
  }>();

  let scrollEl: HTMLDivElement;
  let stick = $state(true);

  $effect(() => {
    if (stick && scrollEl) {
      scrollEl.scrollTop = scrollEl.scrollHeight;
    }
  });

  function onScroll() {
    if (!scrollEl) return;
    const nearBottom = scrollEl.scrollHeight - scrollEl.scrollTop - scrollEl.clientHeight < 80;
    stick = nearBottom;
  }
</script>

<div class="chat" bind:this={scrollEl} onscroll={onScroll}>
  {#if messages.length === 0 && !streaming}
    <div class="empty">
      <div class="empty-logo">🔧</div>
      <h1>{conversationId ? "Continue the conversation" : "ask-coding-harness"}</h1>
      <p>
        Point the agent at your project and let it fire away. It can read,
        write, and run commands — watch every tool call live and approve
        what needs approving.
      </p>
    </div>
  {/if}

  {#each messages as msg, i (i)}
    {#if msg.role === "user"}
      <UserMessage content={msg.content} />
    {:else}
      <AssistantMessage content={msg.content} />
    {/if}
  {/each}

  {#if streaming || turn.text || turn.tools.size || turn.approvals.length || turn.plan || turn.todos.length}
    <AssistantMessage
      content={turn.text}
      {turn}
      streaming={true}
      {conversationId}
    />
  {/if}
</div>

<style>
  .chat {
    flex: 1;
    overflow-y: auto;
    padding: 1.5rem 1rem 2rem;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  }

  .empty {
    max-width: 30rem;
    margin: 12vh auto 0;
    text-align: center;
    color: #a3a3a3;
    padding: 0 1rem;
  }
  .empty-logo {
    font-size: 2.5rem;
    margin-bottom: 0.75rem;
  }
  .empty h1 {
    font-size: 1.375rem;
    margin: 0 0 0.5rem;
    color: #e5e5e5;
  }
  .empty p {
    font-size: 0.875rem;
    line-height: 1.6;
    margin: 0;
  }
</style>
