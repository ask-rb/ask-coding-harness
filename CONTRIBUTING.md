# Contributing

## Development

```bash
bundle install
bundle exec rake test          # Ruby suite (minitest)
(cd web && npm install)        # frontend deps
(cd web && npm test)           # frontend unit tests
(cd web && npm run build)      # rebuild the PWA into public/
```

The web frontend imports `ask-ui-kit` from source (`../../ask-ui-kit/src`)
via a vite alias — keep that repo in the same parent directory and build
after changing components there.

## Conventions

- All new behavior ships with tests (minitest on the Ruby side, vitest for
  frontend logic, playwright for ask-ui-kit components).
- Events flowing to the browser go through `EventTranslator` — never emit
  adapter-specific shapes in SSE.
- The agent loop stays in `ask-agent`; this gem is a thin shell (server,
  store, UI). Adapters plug in via `ask-coding-providers`.
- `ach run` is the dogfooding path: prefer fixing things through it.

## Trying changes without API keys

```bash
bundle exec ruby -Ilib bin/ach demo   # scripted agent, no keys needed
```
