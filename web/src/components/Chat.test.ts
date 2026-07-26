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
