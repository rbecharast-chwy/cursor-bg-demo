# AGENTS.md

## Cursor Cloud specific instructions

This is a demo/presentation project for a talk about "Background Agents in Cursor". It contains two parts:

1. **`demo-app/`** — Express.js Task Manager REST API (the only runnable service). Uses in-memory storage, no database or external services needed.
2. **`slides/`** — Static reveal.js presentation (HTML file, no build step).

### Running the demo-app

```bash
cd demo-app
npm install
npm start        # starts on port 3000
npm test         # runs Jest + Supertest suite
```

### Intentional bugs

The demo-app has **intentional bugs** designed to be fixed by Background Agents during the live presentation. The 2 failing tests (`POST /tasks` — empty title and whitespace-only title) are **expected to fail** on the `main` branch. Do not treat these failures as environment issues.

### GitHub Issues

There are 3 pre-created GitHub issues (#1, #2, #3) matching the intentional bugs and a README update task. These are demo material, not real bugs to fix unless explicitly asked.

### Notes

- No linter is configured in this project.
- No database, Docker, or external services are required.
- The API runs on `PORT` env var (default 3000).
