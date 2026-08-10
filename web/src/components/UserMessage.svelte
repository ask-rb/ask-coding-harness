<script lang="ts">
  import { renderMarkdown } from "../lib/markdown";

  let { content } = $props<{ content: string }>();
</script>

<div class="user">
  <div class="bubble">{@html renderMarkdown(content)}</div>
</div>

<style>
  .user {
    display: flex;
    justify-content: flex-end;
    max-width: 46rem;
    margin: 0 auto 1.5rem;
  }
  .bubble {
    max-width: 85%;
    padding: 0.625rem 0.9375rem;
    border-radius: 1rem 1rem 0.25rem 1rem;
    background: #1f4f8a;
    color: #f5f9ff;
    font-size: 0.9375rem;
    line-height: 1.6;
    overflow-wrap: break-word;
  }
  .bubble :global(code) {
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 0.8125rem;
    background: rgba(255, 255, 255, 0.15);
    padding: 0.125rem 0.375rem;
    border-radius: 0.375rem;
  }
</style>
