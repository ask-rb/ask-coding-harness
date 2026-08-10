# Changelog

## [0.2.0] - 2026-08-10

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
