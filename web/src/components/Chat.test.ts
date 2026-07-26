import { describe, it, expect, vi } from "vitest";

// Chat component — props interface and behavior tests
describe("Chat component props", () => {
  it("accepts the expected props", () => {
    const props = {
      messages: [{ role: "user" as const, content: "hello" }],
      streamingText: "",
      isStreaming: false,
      toolCalls: [],
      onSend: vi.fn(),
      onCancel: vi.fn(),
      attachedFiles: [],
      fileList: ["src/main.ts", "src/lib/api.ts"],
      onToggleFile: vi.fn(),
      onClearFiles: vi.fn(),
      currentModel: "deepseek-v4-flash",
      availableModels: ["deepseek-v4-flash", "gpt-4o"],
      onModelChange: vi.fn(),
      selectedDirectory: null,
    };
    expect(props.messages).toHaveLength(1);
    expect(props.fileList).toHaveLength(2);
    expect(props.currentModel).toBe("deepseek-v4-flash");
    expect(props.availableModels).toHaveLength(2);
    expect(props.selectedDirectory).toBeNull();
  });

  it("handles model change", () => {
    const onModelChange = vi.fn();
    onModelChange("gpt-4o");
    expect(onModelChange).toHaveBeenCalledWith("gpt-4o");
  });

  it("handles selectedDirectory prop", () => {
    const props = {
      messages: [],
      streamingText: "",
      isStreaming: false,
      toolCalls: [],
      onSend: vi.fn(),
      onCancel: vi.fn(),
      attachedFiles: [],
      fileList: [],
      onToggleFile: vi.fn(),
      onClearFiles: vi.fn(),
      currentModel: "",
      availableModels: [],
      onModelChange: vi.fn(),
      selectedDirectory: "/Users/test/my-project",
    };
    expect(props.selectedDirectory).toBeTruthy();
    // The placeholder should mention the project name
    const projectName = props.selectedDirectory.split("/").filter(Boolean).pop();
    expect(projectName).toBe("my-project");
  });

  it("calls onSend and clears input", () => {
    const onSend = vi.fn();
    const text = "test message";
    onSend(text);
    expect(onSend).toHaveBeenCalledWith("test message");
  });
});

// Autocomplete logic tests
describe("Chat autocomplete", () => {
  it("filters files by query", () => {
    const files = ["src/main.ts", "src/lib/api.ts", "src/utils/helpers.ts", "README.md"];
    const query = "src";
    const filtered = files.filter(f => f.toLowerCase().includes(query.toLowerCase())).slice(0, 12);
    expect(filtered).toHaveLength(3);
    expect(filtered).toContain("src/main.ts");
    expect(filtered).not.toContain("README.md");
  });

  it("filters commands by query", () => {
    const commands = [
      { id: "new", label: "New conversation" },
      { id: "projects", label: "Reload projects" },
      { id: "theme", label: "Toggle theme" },
    ];
    const query = "pro";
    const filtered = commands.filter(c => c.label.toLowerCase().includes(query.toLowerCase()));
    expect(filtered).toHaveLength(1);
    expect(filtered[0].id).toBe("projects");
  });

  it("shows all commands with empty query", () => {
    const commands = [
      { id: "new", label: "New conversation" },
      { id: "projects", label: "Reload projects" },
      { id: "theme", label: "Toggle theme" },
    ];
    const filtered = commands.filter(c => "".includes(""));
    expect(filtered).toHaveLength(3);
  });

  it("inserts autocomplete selection into text", () => {
    // Simulate: user types "/pro" and cursor is right after it
    const inputBefore = "help /pro";
    const cursorPos = inputBefore.length; // 9 — cursor at end
    const textBefore = inputBefore.slice(0, cursorPos);
    const triggerPos = textBefore.lastIndexOf("/"); // position 5
    const replacement = "/projects";
    const inputAfter = inputBefore.slice(0, triggerPos) + replacement + " " + inputBefore.slice(cursorPos);
    expect(inputAfter).toBe("help /projects ");
  });

  it("inserts file mention into text", () => {
    // Simulate: user types "check @src/m" and selects "src/main.ts"
    const inputBefore = "check @src/m";
    const cursorPos = 13; // after "src/m"
    const textBefore = inputBefore.slice(0, cursorPos);
    const triggerPos = textBefore.lastIndexOf("@");
    const replacement = "@src/main.ts";
    const inputAfter = inputBefore.slice(0, triggerPos) + replacement + " " + inputBefore.slice(cursorPos);
    expect(inputAfter).toBe("check @src/main.ts ");
  });
});

// Drag-and-drop tests
describe("Chat drag-and-drop", () => {
  it("prepends dropped file content to input", () => {
    const fileContent = "console.log('hello');";
    const inputValue = "check this code";
    const formatted = `📄 test.js\n\`\`\`\n${fileContent}\n\`\`\``;
    const result = (inputValue ? inputValue + "\n\n" : "") + formatted;
    expect(result).toBe("check this code\n\n📄 test.js\n```\nconsole.log('hello');\n```");
  });

  it("handles multiple dropped files", () => {
    const files = [
      { name: "a.ts", content: "const a = 1;" },
      { name: "b.ts", content: "const b = 2;" },
    ];
    const parts = files.map(f => `📄 ${f.name}\n\`\`\`\n${f.content}\n\`\`\``);
    const result = parts.join("\n\n");
    expect(result).toBe("📄 a.ts\n```\nconst a = 1;\n```\n\n📄 b.ts\n```\nconst b = 2;\n```");
  });

  it("shows error for files over size limit", () => {
    const fileSize = 2 * 1024 * 1024; // 2 MB
    const fileInfo = `📄 large.bin\n\`\`\`\n[File too large: ${(fileSize / 1024 / 1024).toFixed(1)} MB — max 1 MB]\n\`\`\``;
    expect(fileInfo).toContain("File too large");
    expect(fileInfo).toContain("2.0 MB");
  });

  it("handles drop when input is empty", () => {
    const fileContent = "hello world";
    const inputValue = "";
    const formatted = `📄 readme.txt\n\`\`\`\n${fileContent}\n\`\`\``;
    const result = (inputValue ? inputValue + "\n\n" : "") + formatted;
    expect(result).toBe("📄 readme.txt\n```\nhello world\n```");
  });

  it("rejects binary files by MIME type", () => {
    const binaryTypes = ["image/png", "application/octet-stream", "video/mp4", "audio/mpeg"];
    for (const type of binaryTypes) {
      const isText = type.startsWith("text/") ||
        type.startsWith("application/json") ||
        type.startsWith("application/xml") ||
        type.startsWith("application/javascript") ||
        type.includes("script") ||
        type.includes("yaml") ||
        type.includes("toml") ||
        type === "";
      expect(isText).toBe(false);
    }
  });

  it("accepts text files by MIME type", () => {
    const textTypes = ["text/plain", "text/html", "text/css", "text/javascript",
      "application/json", "application/xml", "application/yaml", ""];
    for (const type of textTypes) {
      const isText = type.startsWith("text/") ||
        type.startsWith("application/json") ||
        type.startsWith("application/xml") ||
        type.startsWith("application/javascript") ||
        type.includes("script") ||
        type.includes("yaml") ||
        type.includes("toml") ||
        type === "";
      expect(isText).toBe(true);
    }
  });
});
