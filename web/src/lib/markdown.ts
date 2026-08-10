/**
 * Minimal, XSS-safe markdown renderer for assistant text.
 *
 * Escapes HTML first, then applies fenced code blocks and inline emphasis.
 * Full-featured rendering (tables, lists) is available via ask-markdown in
 * ask-ui-kit; this keeps the core stream dependency-free.
 */
export function renderMarkdown(text: string): string {
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Extract fenced code blocks verbatim (no inline processing inside).
  const parts: string[] = [];
  let rest = escaped;
  const fence = /```(\w*)\n?([\s\S]*?)```/g;
  let m: RegExpExecArray | null;
  let last = 0;
  while ((m = fence.exec(escaped)) !== null) {
    parts.push(escaped.slice(last, m.index));
    parts.push(
      `<pre class="code-block"><code class="lang-${m[1] || "text"}">${m[2].replace(/\n$/, "")}</code></pre>`
    );
    last = m.index + m[0].length;
  }
  parts.push(escaped.slice(last));

  return parts
    .join("")
    .split(/\n{2,}/)
    .map((block) => {
      if (block.startsWith("<pre")) return block;
      return `<p>${block
        .replace(/`([^`]+)`/g, "<code>$1</code>")
        .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
        .replace(/\*([^*]+)\*/g, "<em>$1</em>")
        .replace(/\n/g, "<br/>")}</p>`;
    })
    .join("");
}
