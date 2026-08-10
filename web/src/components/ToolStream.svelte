<script lang="ts">
  import "ask-ui-kit";
  import {
    approveAction,
    approveAll,
    approvePlan,
    rejectAction,
    rejectPlan,
  } from "../lib/api";
  import type { TurnState, ToolEvent } from "../lib/types";

  let { turn, conversationId } = $props<{ turn: TurnState; conversationId: string | null }>();

  const tools = $derived(Array.from(turn.tools.values()));
  const pendingApprovals = $derived(turn.approvals.filter((a) => a.status === "pending"));

  function toolIcon(name: string): string {
    switch (name) {
      case "bash": return "⌘";
      case "read": return "👁";
      case "write": return "✎";
      case "edit": return "✎";
      case "grep": return "🔎";
      case "glob": return "🗂";
      case "apply_patch": return "▤";
      case "todo_write": return "☑";
      default: return "⚙";
    }
  }

  function looksLikeDiff(output: string): boolean {
    return (
      output.startsWith("diff --git") ||
      (output.includes("--- a/") && output.includes("+++ b/")) ||
      output.includes("\n@@ -")
    );
  }

  function displayArgs(tool: ToolEvent): string {
    if (tool.args === undefined || tool.args === null) return "";
    return typeof tool.args === "string" ? tool.args : JSON.stringify(tool.args, null, 2);
  }

  async function onApprove(id: number) {
    if (!conversationId) return;
    await approveAction(conversationId, id);
    const a = turn.approvals.find((x) => x.id === id);
    if (a) a.status = "approved";
  }

  async function onReject(id: number) {
    if (!conversationId) return;
    await rejectAction(conversationId, id);
    const a = turn.approvals.find((x) => x.id === id);
    if (a) a.status = "rejected";
  }

  async function onApproveAll() {
    if (!conversationId) return;
    await approveAll(conversationId);
    for (const a of turn.approvals) if (a.status === "pending") a.status = "approved";
  }

  async function onApprovePlan() {
    if (!conversationId) return;
    await approvePlan(conversationId);
    turn.planStatus = "approved";
  }

  async function onRejectPlan() {
    if (!conversationId) return;
    await rejectPlan(conversationId);
    turn.planStatus = "rejected";
  }
</script>

<div class="tool-stream">
  {#if turn.todos.length > 0}
    <div class="block">
      <ask-todo-list todos={turn.todos}></ask-todo-list>
    </div>
  {/if}

  {#if turn.plan !== null && turn.planStatus}
    <div class="block">
      <ask-plan plan={turn.plan} status={turn.planStatus} onplan-approved={onApprovePlan} onplan-rejected={onRejectPlan} />
    </div>
  {/if}

  {#if tools.length > 0}
    <div class="block tools">
      {#each tools as tool (tool.id)}
        <div class="tool">
          <div class="tool-head">
            <span class="tool-icon">{toolIcon(tool.name)}</span>
            <span class="tool-name">{tool.name}</span>
            {#if tool.status === "running"}
              <span class="tool-status running">running…</span>
            {:else if tool.isError}
              <span class="tool-status failed">failed</span>
            {:else}
              <span class="tool-status done">done{tool.durationMs ? ` · ${(tool.durationMs / 1000).toFixed(1)}s` : ""}</span>
            {/if}
          </div>

          {#if displayArgs(tool)}
            <pre class="tool-args">{displayArgs(tool)}</pre>
          {/if}

          {#if tool.status !== "running" && tool.output}
            {#if looksLikeDiff(tool.output)}
              <ask-diff diff={tool.output} />
            {:else}
              <ask-terminal-output output={tool.output} max-lines={6}></ask-terminal-output>
            {/if}
          {/if}
        </div>
      {/each}
    </div>
  {/if}

  {#if turn.approvals.length > 0}
    <div class="block approvals">
      {#if pendingApprovals.length > 1}
        <button class="approve-all" onclick={onApproveAll}>Approve all ({pendingApprovals.length})</button>
      {/if}
      {#each turn.approvals as approval (approval.id)}
        <ask-tool-approval
          action-id={approval.id}
          tool-name={approval.toolName}
          args={typeof approval.args === "string" ? approval.args : JSON.stringify(approval.args ?? {}, null, 2)}
          message={approval.message ?? ""}
          status={approval.status}
          onapproval-approved={() => onApprove(approval.id)}
          onapproval-rejected={() => onReject(approval.id)}
        />
      {/each}
    </div>
  {/if}
</div>

<style>
  .tool-stream {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 0.75rem;
  }
  .block {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .tool {
    border: 1px solid #26262a;
    border-radius: 0.625rem;
    background: #131316;
    overflow: hidden;
  }
  .tool-head {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    font-size: 0.8125rem;
  }
  .tool-icon {
    font-size: 0.875rem;
  }
  .tool-name {
    font-weight: 600;
    color: #d4d4d4;
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 0.75rem;
  }
  .tool-status {
    margin-left: auto;
    font-size: 0.6875rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  .tool-status.running { color: #fbbf24; animation: pulse 1.2s infinite; }
  .tool-status.done { color: #4ade80; }
  .tool-status.failed { color: #f87171; }
  @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

  .tool-args {
    margin: 0;
    padding: 0.375rem 0.75rem;
    border-top: 1px solid #1f1f22;
    background: #0d0d0f;
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 0.6875rem;
    line-height: 1.6;
    color: #a3a3a3;
    white-space: pre-wrap;
    word-break: break-word;
    max-height: 8rem;
    overflow-y: auto;
  }

  .approvals {
    gap: 0.5rem;
  }
  .approve-all {
    align-self: flex-start;
    font: inherit;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.375rem 0.75rem;
    border-radius: 0.5rem;
    border: 1px solid #ea580c;
    background: #ea580c;
    color: #fff;
    cursor: pointer;
  }
</style>
