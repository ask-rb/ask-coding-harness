# ask-coding-harness

**A general-purpose coding agent in the browser.** Self-hosted, mobile-first,
and built on the ask-rb ecosystem. Point it at any project directory and let
the agent fire away — reading, writing, and running commands while you watch
every tool call, approve what needs approving, and review the diffs.

## Quick start

```bash
gem install ask-coding-harness

cd /path/to/your/project
ask-coding-harness          # or: ach serve
```

Open http://localhost:8080. Set a model via `ACH_MODEL` (or
`ASK_AGENT_MODEL`) and an API key for the provider (e.g. `OPENCODE_API_KEY`).

## What you get

- **The agent, unleashed** — `ask-agent` runs the loop in-process with the
  shell toolset (`bash`, `read`, `write`, `edit`, `grep`, `glob`, `code`,
  `apply_patch`), all routed through `ask-sandbox-providers`.
- **Live event stream** — text deltas, thinking, tool calls, todos, and
  plan proposals stream to the browser over SSE as they happen.
- **Approvals** — mutating tools (`bash`, `write`, `edit`, ...) queue for
  your approval by default; approve, reject, or approve-all from the UI.
- **Plan mode** — opt in with `ACH_PLAN_MODE=1`: the agent researches
  read-only, proposes a plan, and only executes after you approve it.
- **Conversations** — saved to SQLite, resumable, renameable, archivable.
- **PWA** — installable on desktop and mobile, works offline for the shell
  (the agent itself needs the server).
- **Extensible** — other coding agents (Codex, Claude Code, ACP-based)
  plug in via `ask-coding-providers` by setting `ACH_ADAPTER=acp`.

## The `ach` CLI

```bash
ach serve                        # web server (default command)
ach run "refactor the auth flow" # headless run, prints a transcript
ach sessions                     # list saved conversations
ach version
```

`ach run` is the dogfooding path: ask-coding-harness builds itself with it.

## Configuration

| Env var | Default | Purpose |
|---|---|---|
| `ACH_WORKSPACE` | current dir | project the agent operates on |
| `ACH_HOST` / `ACH_PORT` | `0.0.0.0` / `8080` | server bind |
| `ACH_MODEL` | `deepseek-v4-flash` | default model |
| `ACH_ADAPTER` | `ask_agent` | coding agent adapter (`ask_agent`, `acp`, ...) |
| `ACH_APPROVAL` | `require` | `off`, `require`, `auto` |
| `ACH_PLAN_MODE` | off | plan mode (research first, then execute) |
| `ACH_TODOS` | on | todo list tool |
| `ACH_DB_PATH` | `./data/ask-coding-harness.db` | conversation database |
| `ACH_SYSTEM_PROMPT` | — | extra system prompt lines |

Programmatic use:

```ruby
require "ask-coding-harness"

Ask::CodingHarness.configure do |c|
  c.workspace = "/path/to/project"
  c.model = "claude-sonnet-4"
  c.approval = :require
end

result = Ask::CodingHarness.run("Run the test suite and fix failures")
puts result.response
```

## Architecture

```
Browser (PWA) ──SSE──> Server (Roda) ──> AgentRunner ──> ask-coding-providers
                                                          ├─ ask_agent (default)
                                                          └─ acp / codex / claude
                └── SQLite (ask-state-providers) <── Store
```

The server is a thin shell: conversations live in the Store, turns run in
the AgentRunner, adapter events normalize through the EventTranslator into
one browser-friendly schema.

## Development

```bash
bundle install
bundle exec rake test        # Ruby tests
(cd web && npm install && npm run build)   # build the PWA into public/
```

## License

MIT — see [LICENSE](LICENSE).
