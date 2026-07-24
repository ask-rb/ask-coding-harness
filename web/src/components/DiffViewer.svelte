<script lang="ts">
  export let oldString: string;
  export let newString: string;
  export let filePath: string = "";

  $: diffLines = computeDiff(oldString, newString);

  function computeDiff(oldText: string, newText: string): Array<{ type: "same" | "added" | "removed"; content: string }> {
    const oldLines = oldText.split("\n");
    const newLines = newText.split("\n");

    // Simple LCS-based diff
    const result: Array<{ type: "same" | "added" | "removed"; content: string }> = [];
    let oi = 0, ni = 0;

    while (oi < oldLines.length || ni < newLines.length) {
      if (oi < oldLines.length && ni < newLines.length && oldLines[oi] === newLines[ni]) {
        result.push({ type: "same", content: oldLines[oi] });
        oi++; ni++;
      } else if (ni < newLines.length && (oi >= oldLines.length || newLines[ni] !== oldLines[oi])) {
        result.push({ type: "added", content: newLines[ni] });
        ni++;
      } else if (oi < oldLines.length) {
        result.push({ type: "removed", content: oldLines[oi] });
        oi++;
      }
    }
    return result;
  }

  function copyDiff() {
    const text = diffLines.map(l => (l.type === "added" ? "+" : l.type === "removed" ? "-" : " ") + l.content).join("\n");
    navigator.clipboard.writeText(text);
  }

  function fileName(path: string): string {
    return path.split("/").pop() || path;
  }
</script>

<div class="diff-viewer">
  <div class="diff-header">
    <span class="diff-file">{filePath ? `📄 ${fileName(filePath)}` : "Changes"}</span>
    <button class="diff-copy" onclick={copyDiff}>📋 Copy diff</button>
  </div>
  <div class="diff-content">
    {#each diffLines as line, i}
      <div class="diff-line" class:added={line.type === "added"} class:removed={line.type === "removed"}>
        <span class="line-num">{i + 1}</span>
        <span class="line-prefix">{line.type === "added" ? "+" : line.type === "removed" ? "-" : " "}</span>
        <span class="line-text">{line.content}</span>
      </div>
    {/each}
  </div>
</div>

<style>
  .diff-viewer { border: 1px solid var(--border); border-radius: 8px; overflow: hidden; margin: 8px 0; font-family: "SF Mono", Monaco, Menlo, monospace; font-size: 12px; }
  .diff-header { display: flex; align-items: center; justify-content: space-between; padding: 6px 12px; background: var(--surface2); border-bottom: 1px solid var(--border); }
  .diff-file { font-size: 12px; font-weight: 500; color: var(--text); }
  .diff-copy { padding: 2px 8px; border-radius: 4px; border: 1px solid var(--border); background: var(--surface); color: var(--muted); cursor: pointer; font-size: 11px; }
  .diff-copy:hover { background: var(--accent); color: #fff; border-color: var(--accent); }
  .diff-content { overflow-x: auto; }
  .diff-line { display: flex; line-height: 1.6; min-height: 22px; }
  .diff-line.added { background: rgba(34, 197, 94, 0.1); }
  .diff-line.removed { background: rgba(239, 68, 68, 0.1); }
  .line-num { width: 40px; text-align: right; padding-right: 8px; color: var(--muted); user-select: none; flex-shrink: 0; }
  .line-prefix { width: 20px; text-align: center; flex-shrink: 0; }
  .diff-line.added .line-prefix { color: var(--success); }
  .diff-line.removed .line-prefix { color: var(--danger); }
  .line-text { white-space: pre; flex: 1; overflow-x: auto; }
</style>
