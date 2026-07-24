<script lang="ts">
  export let error: string | null = null;
  export let onRetry: (() => void) | null = null;

  function handleClick() {
    if (onRetry) onRetry();
  }
</script>

{#if error}
  <div class="error-boundary">
    <div class="error-icon">⚠</div>
    <h3>Something went wrong</h3>
    <p class="error-message">{error}</p>
    {#if onRetry}
      <button class="retry-btn" onclick={handleClick}>↻ Retry</button>
    {/if}
  </div>
{:else}
  <slot />
{/if}

<style>
  .error-boundary {
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    padding: 40px 20px; text-align: center; height: 100%; gap: 8px;
  }
  .error-icon { font-size: 32px; }
  h3 { font-size: 16px; color: var(--text); margin: 0; }
  .error-message { font-size: 13px; color: var(--muted); max-width: 360px; word-break: break-word; }
  .retry-btn {
    margin-top: 12px; padding: 8px 20px; border-radius: 8px; border: 1px solid var(--border);
    background: var(--surface2); color: var(--text); cursor: pointer; font-size: 14px;
  }
  .retry-btn:hover { background: var(--accent); color: #fff; border-color: var(--accent); }
</style>
