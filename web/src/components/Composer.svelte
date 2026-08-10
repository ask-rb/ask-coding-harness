<script lang="ts">
  let { streaming, model, disabled, onSend, onStop } = $props<{
    streaming: boolean;
    model: string | undefined;
    disabled: boolean;
    onSend: (text: string) => void;
    onStop: () => void;
  }>();

  let value = $state("");
  let ta: HTMLTextAreaElement;

  function submit() {
    const text = value.trim();
    if (!text || streaming || disabled) return;
    onSend(text);
    value = "";
    if (ta) ta.style.height = "auto";
  }

  function onKeydown(e: KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  }

  function autosize() {
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = Math.min(ta.scrollHeight, 180) + "px";
  }
</script>

<div class="composer">
  <div class="box">
    <textarea
      bind:this={ta}
      bind:value
      placeholder={disabled ? "Connecting to the harness server…" : "Ask the agent to do something…"}
      rows="1"
      onkeydown={onKeydown}
      oninput={autosize}
    ></textarea>

    {#if streaming}
      <button class="send stop" onclick={onStop} aria-label="Stop">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2" /></svg>
      </button>
    {:else}
      <button class="send" onclick={submit} aria-label="Send" disabled={disabled || !value.trim()}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </button>
    {/if}
  </div>

  {#if model}
    <div class="hint">
      <span class="model-chip">{model}</span>
      <span class="shortcut">Shift+Enter for a new line</span>
    </div>
  {/if}
</div>

<style>
  .composer {
    flex-shrink: 0;
    padding: 0.75rem 1rem calc(0.75rem + env(safe-area-inset-bottom));
    background: linear-gradient(transparent, #0b0b0c 40%);
  }

  .box {
    display: flex;
    align-items: flex-end;
    gap: 0.5rem;
    max-width: 46rem;
    margin: 0 auto;
    padding: 0.5rem;
    background: #161618;
    border: 1px solid #2a2a2e;
    border-radius: 1rem;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
  }
  .box:focus-within {
    border-color: #3f3f46;
  }

  textarea {
    flex: 1;
    resize: none;
    border: none;
    outline: none;
    background: transparent;
    color: #e5e5e5;
    font: inherit;
    font-size: 0.9375rem;
    line-height: 1.5;
    padding: 0.375rem 0.5rem;
    max-height: 180px;
  }
  textarea::placeholder {
    color: #737373;
  }

  .send {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: 0.75rem;
    background: #2f6feb;
    color: #fff;
    cursor: pointer;
    flex-shrink: 0;
  }
  .send:disabled {
    background: #26262a;
    color: #737373;
    cursor: default;
  }
  .send.stop {
    background: #b91c1c;
  }

  .hint {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    max-width: 46rem;
    margin: 0.5rem auto 0;
    padding: 0 0.25rem;
    font-size: 0.6875rem;
    color: #737373;
  }
  .model-chip {
    color: #a3a3a3;
    border: 1px solid #26262a;
    border-radius: 999px;
    padding: 0.125rem 0.5rem;
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  }
  .shortcut {
    margin-left: auto;
  }
</style>
