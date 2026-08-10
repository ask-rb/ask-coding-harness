import { describe, expect, it } from "vitest";
import { renderMarkdown } from "./markdown";

describe("renderMarkdown", () => {
  it("escapes raw HTML", () => {
    const out = renderMarkdown("<script>alert(1)</script>");
    expect(out).not.toContain("<script>");
    expect(out).toContain("&lt;script&gt;");
  });

  it("renders paragraphs", () => {
    const out = renderMarkdown("hello\n\nworld");
    expect(out).toContain("<p>hello</p>");
    expect(out).toContain("<p>world</p>");
  });

  it("renders inline code", () => {
    const out = renderMarkdown("run `bundle exec rake test` now");
    expect(out).toContain("<code>bundle exec rake test</code>");
  });

  it("renders bold and italic", () => {
    const out = renderMarkdown("**bold** and *italic*");
    expect(out).toContain("<strong>bold</strong>");
    expect(out).toContain("<em>italic</em>");
  });

  it("renders fenced code blocks untouched", () => {
    const out = renderMarkdown("before\n```ruby\nputs \"hi\" <tag>\n```\nafter");
    expect(out).toContain('<pre class="code-block"><code class="lang-ruby">');
    expect(out).toContain('puts "hi" &lt;tag&gt;');
    // The code block content is verbatim: no paragraph or <br/> inside.
    const code = out.match(/<code[^>]*>([\s\S]*?)<\/code>/)?.[1] ?? "";
    expect(code).not.toContain("<p>");
    expect(code).not.toContain("<br/>");
    expect(out).toContain("after");
  });

  it("converts single newlines inside a paragraph to breaks", () => {
    const out = renderMarkdown("line one\nline two");
    expect(out).toContain("<br/>");
  });
});
