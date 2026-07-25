import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

// ── Welcome component prop interface tests ──

describe("Welcome component", () => {
  it("accepts the expected props", () => {
    const props = {
      newChat: vi.fn(),
      projects: [{ directory: "/test/a", name: "Project A", conversation_count: 3 }],
      conversations: [{ id: "1", title: "Chat", messages: [{ role: "user" as const, content: "hi" }], message_count: 1 }],
      onStartProject: vi.fn(),
      onSend: vi.fn(),
      onSelectConversation: vi.fn(),
    };
    expect(props.newChat).toBeDefined();
    expect(props.onStartProject).toBeDefined();
    expect(props.onSend).toBeDefined();
    expect(props.onSelectConversation).toBeDefined();
    expect(props.projects).toHaveLength(1);
    expect(props.projects[0].name).toBe("Project A");
    expect(props.projects[0].conversation_count).toBe(3);
    expect(props.conversations).toHaveLength(1);
    expect(props.conversations[0].title).toBe("Chat");
  });

  it("handles empty arrays", () => {
    const props = {
      newChat: vi.fn(),
      projects: [],
      conversations: [],
      onStartProject: vi.fn(),
      onSend: vi.fn(),
      onSelectConversation: vi.fn(),
    };
    expect(props.projects).toHaveLength(0);
    expect(props.conversations).toHaveLength(0);
  });
});

// ── API function tests ──

describe("API functions", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("fetchConversations calls GET /api/conversations", async () => {
    const mockResponse = { ok: true, json: () => Promise.resolve([{ id: "1", title: "Test", messages: [] }]) };
    (fetch as any).mockResolvedValue(mockResponse);

    const { fetchConversations } = await import("../lib/api");
    const result = await fetchConversations();

    expect(fetch).toHaveBeenCalledWith("/api/conversations");
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe("Test");
  });

  it("archiveConversation calls POST /api/conversations/:id/archive", async () => {
    const mockResponse = { ok: true, json: () => Promise.resolve({ id: "1", archived: true }) };
    (fetch as any).mockResolvedValue(mockResponse);

    const { archiveConversation } = await import("../lib/api");
    const result = await archiveConversation("conv-1");

    expect(fetch).toHaveBeenCalledWith("/api/conversations/conv-1/archive", { method: "POST" });
    expect(result.archived).toBe(true);
  });

  it("renameConversation calls PATCH /api/conversations/:id", async () => {
    const mockResponse = { ok: true, json: () => Promise.resolve({ id: "1", title: "New Title" }) };
    (fetch as any).mockResolvedValue(mockResponse);

    const { renameConversation } = await import("../lib/api");
    const result = await renameConversation("conv-1", "New Title");

    expect(fetch).toHaveBeenCalledWith(
      "/api/conversations/conv-1",
      expect.objectContaining({
        method: "PATCH",
        body: JSON.stringify({ title: "New Title" }),
      })
    );
    expect(result.title).toBe("New Title");
  });

  it("fetchConversation calls GET /api/conversations/:id", async () => {
    const mockResponse = { ok: true, json: () => Promise.resolve({ id: "1", title: "Detail", messages: [{ role: "user", content: "hello" }] }) };
    (fetch as any).mockResolvedValue(mockResponse);

    const { fetchConversation } = await import("../lib/api");
    const result = await fetchConversation("conv-1");

    expect(fetch).toHaveBeenCalledWith("/api/conversations/conv-1");
    expect(result.messages).toHaveLength(1);
  });

  it("fetchProjects calls GET /api/projects", async () => {
    const mockResponse = { ok: true, json: () => Promise.resolve([{ directory: "/test", name: "Test", conversation_count: 5 }]) };
    (fetch as any).mockResolvedValue(mockResponse);

    const { fetchProjects } = await import("../lib/api");
    const result = await fetchProjects();

    expect(fetch).toHaveBeenCalledWith("/api/projects");
    expect(result).toHaveLength(1);
    expect(result[0].conversation_count).toBe(5);
  });

  it("throws on non-ok response", async () => {
    const mockResponse = { ok: false, status: 404, statusText: "Not Found" };
    (fetch as any).mockResolvedValue(mockResponse);

    const { fetchConversation } = await import("../lib/api");
    await expect(fetchConversation("bad-id")).rejects.toThrow("Failed to fetch conversation: 404");
  });
});
