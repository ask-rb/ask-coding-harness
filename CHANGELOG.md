# Changelog

## [0.2.1] - 2026-08-10

### Added

- **Declarative agents (ask-agent `agents/` convention).** Each workspace
  can carry an `agents/<name>/` directory (`agent.rb` +
  `instructions.md`): the harness lists them per workspace
  (`GET /api/workspaces/:path/agents`), the composer has an agent picker,
  and conversations remember their agent. When an agent is selected, the
  session is built via `Ask::Agent.new` — the definition's tools, skills,
  and model apply — and the agent's `instructions.md` becomes the system
  prompt base (project context, guidelines, append, and footer still
  apply, pi-style). Requires ask-coding-providers >= 0.3.2.



### Added

- **Universal workspaces.** The harness is no longer bound to one
  directory: open any project from the UI (workspace switcher + Open
  workspace dialog), switch between them, and every conversation runs
  inside its own workspace with its own system prompt.
  - `POST /api/workspaces` (open/register), `GET /api/workspaces`
    (list with name/branch/counts), `GET /api/workspaces/:path/info`.
  - `POST /api/chat` accepts a `workspace` param; conversations are
    created and grouped per workspace.
  - Turns execute inside their workspace directory (serialized via a
    turn mutex, since the shell tools default to `Dir.pwd`).
- **Pi-style system prompts.** `SystemPrompt` builds a composable prompt:
  default or custom base, guidelines, `<project_context>` from
  AGENTS.md/CLAUDE.md (walked from the workspace up to the root, like the
  pi coding agent), an append section, and a `Current working directory:`
  footer. Config: `system_prompt`, `system_prompt_append`,
  `system_prompt_guidelines` (env `ACH_SYSTEM_PROMPT` still appends).
- **ask-ui-kit sidebar/shell components** extracted from the popular
  coding agents' UIs (openchamber, openwebui, t3code): `ask-dialog`,
  `ask-menu`, `ask-search-input`, `ask-conversation-item`,
  `ask-conversation-group`. The harness frontend now builds its switcher,
  sidebar (search + grouped conversation items), and dialogs on them.

### Fixed

- `DemoAdapter#create_session` accepts the `system_prompt` keyword (the
  universal runner passes it to every adapter).


### Added

- **Demo adapter and `ach demo`** — a scripted coding agent (todos, tool
  calls, diffs, approval flow) for trying the harness without API keys.
- **`ach run --adapter NAME`** — pick the coding agent adapter for headless
  runs (ask_agent, demo, acp, ...).
- **Approval-aware external adapters** — the configured approval mode
  passes through to external coding-agent adapters (the demo adapter
  auto-approves in headless mode).
- **Web frontend** — mobile-first PWA built on ask-ui-kit: live tool
  cards, approvals, todos, plans, diff/terminal viewers, conversation
  sidebar, settings; installable with service worker + manifest.
- **ask-ui-kit components** — `ask-diff`, `ask-tool-approval`,
  `ask-todo-list`, `ask-plan`, `ask-terminal-output`.

### Fixed

- Server startup via Rackup (CLI now wires the server with its own config;
  flags like `--adapter` previously lost to the module-global config).
- Frontend turn state: Svelte 5 `$state` does not proxy `Map` mutations —
  tool cards now render by replacing the map immutably.
- Duplicate assistant message after turn completion (the finished turn is
  folded into the message list on the next send).

## [0.1.0] - 2026-08-10

### Added

- **Initial release** — general-purpose coding agent in the browser.
- **Harness core** — config (approval modes, plan mode, todos), conversation
  store on ask-state-providers, event translator normalizing adapter events
  into one browser-friendly SSE schema, agent runner (ask-agent runtime via
  ask-coding-providers, extensible to ACP/Codex/Claude adapters).
- **Web server** — Roda REST + SSE: conversations CRUD, streaming turns,
  approvals, plan approve/reject, abort, SPA fallback, CORS.
- **CLI** — `ach serve`, `ach run` (headless dogfooding path), `ach
  sessions`, `ach version`; `ask-coding-harness` executable.
- **Renamed from askoda** — full git history preserved.
