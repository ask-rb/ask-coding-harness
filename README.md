# Askoda

**An open source web interface for AI coding agents.**

Chat with, switch between, and manage conversations across any ACP-compatible or Ask-rb-native coding agent — all from a mobile-first web app that runs wherever you need it.

![screenshot](https://img.shields.io/badge/status-active-brightgreen)
![license](https://img.shields.io/badge/license-MIT-blue)

---

## Why Askoda?

Most AI coding agents are CLI tools — powerful, but tied to a terminal. Askoda wraps any coding agent in a persistent web UI:

- **Agent-agnostic** — Works with OpenCode, Codex, Claude Code, Gemini CLI, or Ask-rb's own ask-agent. Switch models mid-conversation.
- **Persistent conversations** — Chat history is saved to SQLite. Resume anywhere, anytime.
- **File-aware** — Browse and read project files directly from the chat interface.
- **Mobile-first PWA** — Install it as a standalone app on your phone or tablet. No app store needed.
- **Self-hosted** — One `bundle exec rackup` away. Your code never leaves your network.

## Quick start

```bash
cd askoda
cp .env.example .env
bundle install
bash bin/dev
```

Open http://localhost:8080 in your browser.

## Configuration

Askoda is configured through environment variables (set in `.env` or passed directly):

| Variable | Default | Description |
|----------|---------|-------------|
| `CODING_PROVIDER` | `acp` | Adapter to use: `acp`, `ask_agent`, `codex`, `claude` |
| `ACP_COMMAND` | — | Command to spawn the ACP agent (e.g. `opencode acp`, `codex acp`) |
| `PORT` | `8080` | HTTP server port |
| `HOST` | `0.0.0.0` | HTTP server bind address |
| `ASKODA_DB_PATH` | `./data/askoda.db` | SQLite database path |
| `ASKODA_DEFAULT_MODEL` | `deepseek-v4-flash` | Default model for new conversations |
| `TURN_TIMEOUT` | `300` | Max seconds per agent turn |

### Agent adapters

Askoda supports multiple backends through a pluggable adapter system:

| Provider | Env setup | Notes |
|----------|-----------|-------|
| **OpenCode** | `ACP_COMMAND=opencode acp` | Native ACP, requires `opencode` installed |
| **Codex** | `ACP_COMMAND=codex acp` | Native ACP |
| **Claude Code** | `ACP_COMMAND=claude acp` | Native ACP |
| **Gemini CLI** | `ACP_COMMAND=gemini-cli acp` | Native ACP |
| **Ask Agent** | `CODING_PROVIDER=ask_agent` | Built-in, no external CLI needed |

## Architecture

```
Browser (PWA)  ←SSE→  Askoda (Roda + Puma)  ←ACP→  Coding Agent (opencode, codex, …)
                              │
                              └── SQLite (conversations, history)
```

- **Frontend**: Svelte PWA in `web/`
- **API**: Roda + rackup on Puma, SSE streaming in `api/`
- **Adapter layer**: `ask-coding-providers` gem routes messages to the configured agent
- **Storage**: SQLite via `ask-state-providers`

## Scripts

| Command | What it does |
|---------|-------------|
| `bash bin/dev` | Start dev server with auto-reload on file changes |
| `bundle exec ruby bin/askoda` | Start production server (no reload) |
| `bash bin/setup` | Install dependencies and seed defaults |

## Deployment

```bash
# Build the frontend
(cd web && npm run build)

# Start in production mode
RACK_ENV=production bundle exec ruby bin/askoda
```

The production binary (`bin/askoda`) loads the app directly without `config.ru`, so there's no rackup overhead.

## Development

```bash
bundle install
bundle exec rake test    # Run the test suite
bash bin/dev             # Start with auto-reload
```

Auto-reload is enabled by default when `RACK_ENV` is unset or set to `development`. Set `RACK_ENV=production` to disable it.

## License

MIT
