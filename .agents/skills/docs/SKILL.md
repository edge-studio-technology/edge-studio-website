---
name: docs
description: Check whether behavior changes require updates to README, architecture docs, or AGENTS.md.
---

# /docs

Check whether recent or planned behavior changes require updates to README, architecture docs, or AGENTS.md.

## Steps

1. Identify the behavior change — from the user's prompt, current branch diff, or recently edited files
2. Review docs that describe behavior:
   - `README.md` — setup, usage, quick-start, and file tree
   - `docs/PROJECT.md` — goals, audience, constraints, and milestones
   - `<ARCHITECTURE_DOC>` if it exists — system architecture and component responsibilities
   - `AGENTS.md` — stack, commands, aliases, and constraints
   - `docs/TASKS.md` — if the change affects current or upcoming work
3. Flag any doc that is now out of date, incomplete, or missing a new entry
4. Suggest concrete updates; do not edit files unless asked

## Reminders

- Docs should change when behavior changes, not after the fact
- Keep file trees, command snippets, and examples accurate
- Prefer small, precise edits over large rewrites
- If a placeholder is still present (e.g. `<PROJECT_NAME>`), flag it
