<script lang="ts">
  import "ask-ui-kit";
  import type { ConfigResponse } from "../lib/types";

  let { config, onClose } = $props<{ config: ConfigResponse | null; onClose: () => void }>();

  let model = $state(localStorage.getItem("ach_model") || config?.defaultModel || "");
  const saved = $derived(model !== (localStorage.getItem("ach_model") || config?.defaultModel || ""));

  function selectModel(m: string) {
    model = m;
    localStorage.setItem("ach_model", m);
  }
</script>

<ask-dialog open header="Settings" ondialog-close={onClose}>

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
</ask-dialog>

<style>
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
