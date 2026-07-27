---
name: feature
description: Scaffold a new feature end-to-end, with the right structure from the start.
---

# /feature

Scaffold a new feature end-to-end, with the right structure from the start.

## Steps

1. Check `git status`. If there are unrelated uncommitted changes, commit or stash them first.
2. Ask the user: what is the feature name and which area does it touch? (UI, domain logic, integration, backend)
3. Run the `domain-check` skill — apply any constraints it surfaces from the start
4. Create or update files in the correct layers:
   - Route / page file in `<ROUTES_DIR>` if UI is needed — thin, no business logic
   - Domain logic in `<DOMAIN_DIRS>`
   - Reusable UI in `<UI_DIR>`
   - Hook in `<HOOKS_DIR>` if shared state is needed
5. Add a feature flag in `<FLAG_FILE>` if the feature is not ready to ship — default to `false`
6. Create a test stub in the correct folder (see `.agents/rules/testing.md`):
   - `<UNIT_DIR>` for pure logic
   - `<PLATFORM_TESTS_DIR>` for platform behavior
7. Run `format` on edited source files.
8. Run `typecheck` if you edited `*.ts` or `*.tsx` files.
9. Run `changelog-reminder` and update `CHANGELOG.md` with an `[ADDED]` entry if needed.
10. Run the `docs` skill to check whether `README.md`, architecture docs, or `AGENTS.md` need updating

## Reminders

- Import paths must use aliases — never relative paths climbing more than one level
- No raw sensitive data in any derived field, internal store entry, or telemetry event
- Schema validation required if this feature produces structured output
