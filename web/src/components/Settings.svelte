<script lang="ts">
  import type { ConfigResponse } from "../lib/types";

  let { config, onClose } = $props<{ config: ConfigResponse | null; onClose: () => void }>();

  let model = $state(localStorage.getItem("ach_model") || config?.defaultModel || "");
  const saved = $derived(model !== (localStorage.getItem("ach_model") || config?.defaultModel || ""));

  function selectModel(m: string) {
    model = m;
    localStorage.setItem("ach_model", m);
  }
</script>

<div class="overlay" onclick={onClose}>
  <div class="panel" onclick={(e) => e.stopPropagation()}>
    <div class="head">
      <h2>Settings</h2>
      <button class="close" onclick={onClose}>✕</button>
    </div>

    {#if config}
      <section>
        <h3>Workspace</h3>
        <div class="row">
          <span class="label">Name</span>
          <span class="value mono">{config.workspace.name}</span>
        </div>
        <div class="row">
          <span class="label">Root</span>
          <span class="value mono">{config.workspace.root}</span>
        </div>
        <div class="row">
          <span class="label">Git branch</span>
          <span class="value">{config.workspace.gitBranch ?? "—"}</span>
        </div>
        <div class="row">
          <span class="label">Agent</span>
          <span class="value mono">{config.currentAdapter}</span>
        </div>
        <div class="row">
          <span class="label">Features</span>
          <span class="value">
            {#if config.features.approvals}approvals · {/if}
            {#if config.features.planMode}plan mode · {/if}
            {#if config.features.todos}todos{/if}
          </span>
        </div>
      </section>

      <section>
        <h3>Model</h3>
        <div class="models">
          {#each config.models as m (m)}
            <button class="model {m === model ? "active" : ""}" onclick={() => selectModel(m)}>{m}</button>
          {/each}
        </div>
        {#if saved}
          <p class="hint">Saved locally. New messages use this model.</p>
        {/if}
      </section>
    {:else}
      <p class="hint">No server config available.</p>
    {/if}
  </div>
</div>

<style>
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 50;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 10vh 1rem 1rem;
  }
  .panel {
    width: min(30rem, 100%);
    max-height: 80vh;
    overflow-y: auto;
    background: #131316;
    border: 1px solid #2a2a2e;
    border-radius: 1rem;
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.5);
  }
  .head {
    display: flex;
    align-items: center;
    padding: 1rem 1.25rem 0.5rem;
  }
  .head h2 {
    margin: 0;
    font-size: 1.0625rem;
  }
  .close {
    margin-left: auto;
    width: 2rem;
    height: 2rem;
    border: none;
    border-radius: 0.5rem;
    background: transparent;
    color: #a3a3a3;
    cursor: pointer;
    font-size: 0.875rem;
  }
  .close:hover { background: #1f1f22; }

  section {
    padding: 0.75rem 1.25rem 1rem;
    border-top: 1px solid #1f1f22;
  }
  section h3 {
    margin: 0 0 0.5rem;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #a3a3a3;
  }
  .row {
    display: flex;
    gap: 0.75rem;
    padding: 0.25rem 0;
    font-size: 0.8125rem;
  }
  .label {
    color: #737373;
    width: 6rem;
    flex-shrink: 0;
  }
  .value { color: #e5e5e5; overflow-wrap: anywhere; }
  .mono {
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 0.75rem;
  }

  .models {
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;
  }
  .model {
    font: inherit;
    font-size: 0.75rem;
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    padding: 0.375rem 0.625rem;
    border-radius: 0.5rem;
    border: 1px solid #2a2a2e;
    background: #161618;
    color: #d4d4d4;
    cursor: pointer;
  }
  .model.active {
    border-color: #2f6feb;
    background: #1d3a63;
    color: #fff;
  }

  .hint {
    font-size: 0.75rem;
    color: #737373;
    margin: 0.5rem 0 0;
  }
</style>
