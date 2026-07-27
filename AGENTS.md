# <PROJECT_NAME>

<ONE_OR_TWO_SENTENCE_PRODUCT_DESCRIPTION>

> This config has a Claude Code equivalent at `CLAUDE.md`. See "Keep in sync" below.

## Stack

- **Language / runtime**: <LANGUAGE, e.g. TypeScript / Node.js>
- **Frontend**: <FRONTEND_STACK, e.g. React with Vite>
- **Backend**: <BACKEND_STACK, e.g. Express API>
- **Database**: <DATABASE, e.g. PostgreSQL>
- **State / caching**: <STATE, e.g. TanStack Query + Redis>
- **Auth**: <AUTH, e.g. OAuth 2.0 / JWT>
- **AI / LLM**: <AI_STACK, e.g. none, or OpenAI via backend proxy>
- **Integrations**: <INTEGRATIONS, e.g. Stripe, SendGrid>

## Architecture

```
<ROUTES_DIR, e.g. src/pages/>     # Route / page files — thin, no business logic
<SRC_DIR, e.g. src/>
  <DOMAIN_DIR, e.g. domain/>      # Business logic
  <UI_DIR, e.g. ui/>              # Reusable components
  <HOOKS_DIR, e.g. hooks/>        # Shared React hooks
  <CONFIG_DIR, e.g. config/>      # Feature flags, env helpers
<TESTS_DIR, e.g. tests/>
  <UNIT_DIR, e.g. unit/>          # Pure logic tests
  <INTEGRATION_DIR, e.g. integration/>
```

Import aliases: `<ALIAS_1, e.g. @/*>` `<ALIAS_2, e.g. @/domain/*>` `<ALIAS_3, e.g. @/ui/*>`

## Commands

```bash
# Development
<DEV_COMMAND, e.g. npm run dev>           # Start local dev server

# Quality gates
<GATE_COMMAND, e.g. npm run gate>         # Unified local gate (runs lint / typecheck / tests)
<LINT_COMMAND, e.g. npm run lint>         # Lint
<FORMAT_CHECK_COMMAND, e.g. npm run format:check>   # Format check
<FORMAT_WRITE_COMMAND, e.g. npm run format>         # Format write
<TYPECHECK_COMMAND, e.g. npx tsc --noEmit>          # Type check

# Tests
<TEST_COMMAND, e.g. npm run test:ci>      # CI test run
<TEST_WATCH_COMMAND, e.g. npm test>       # Watch mode
```

## Environment

Copy `<ENV_EXAMPLE_FILE, e.g. .env.example>` → `<ENV_FILE, e.g. .env>`. Key variables:

| Variable | Required | Notes |
| -------- | -------- | ----- |
| `<ENV_VAR_1>` | <e.g. Yes> | <description> |
| `<ENV_VAR_2>` | <e.g. Dev only> | <description> |
| `<SECRET_VAR>` | <e.g. Backend only> | **Never** expose to the frontend. |

## Key Constraints

These apply to every change. Full detail in `.agents/rules/`.

- **<CONSTRAINT_1_NAME>**: <concise rule>
- **<CONSTRAINT_2_NAME>**: <concise rule>
- **<CONSTRAINT_3_NAME>**: <concise rule>

## Session Start

If `<TASKS_DOC, e.g. docs/TASKS.md>` exists, read it to understand current focus.
If `<SESSION_DOC, e.g. docs/SESSION.md>` exists, read it for in-progress context.
Update `<SESSION_DOC>` at the end of any long session if it exists.

## Behavioral Guidelines

Bias toward caution over speed. For trivial tasks, use judgment.

### 0. Project Guardrails

These skills are part of every change. Apply them automatically:

- Before any `Shell` tool call, run `bash-guard` and refuse destructive commands.
- Before any `WriteFile` or `StrReplaceFile`, run `protect-env` and refuse direct edits to `.env`, `.env.*`, or `.envrc` files.
- After editing a supported source file, run `format`.
- After editing `*.ts` or `*.tsx` files, run `typecheck`.
- Before finishing a behavior change, run `changelog-reminder`.
- Before starting a new major step, run `task-check`.

### 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:

- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them — don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

### 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

### 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:

- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it — don't delete it.

When your changes create orphans:

- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

### 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:

- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:

```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

Before marking any task done, run the verification suite:

```bash
<LINT_COMMAND> && <TEST_COMMAND> && <TYPECHECK_COMMAND>
```

Fix all failures before proceeding.

## Available Skills

Invoke any of these with `/skill:<name>` when you want them explicitly, or let the agent load them on demand:

- `closed-loop` — bounded maker/checker loops with a deterministic gate
- `verify` — checker skill for closed-loop work
- `code-reviewer` — focused correctness / structure review
- `security-auditor` — privacy, security, and rule-violation review
- `dependency-auditor` — dependency and lockfile risk review
- `ai-architect` — AI/LLM layer architecture review
- `test-writer` — write missing tests for existing code
- `bash-guard` — block destructive shell commands
- `protect-env` — block direct .env file edits
- `format` — run the formatter on edited files
- `typecheck` — run the type checker on edited files
- `changelog-reminder` — remind to update CHANGELOG.md for behavior changes
- `task-check` — check for running background tasks
- `spec` — write a one-page PRD/spec before implementing a feature
- `feature` — scaffold a new feature end-to-end
- `fix` — fix a bug with test + changelog
- `plan` — think through a task and produce a written plan
- `roadmap` — create/maintain a numbered roadmap in `docs/roadmaps/`, linking plans to milestones
- `project-sync` — synchronize `docs/TASKS.md`, `docs/SESSION.md`, active plans, and roadmap milestones after meaningful work
- `review` — review the current branch diff
- `test` — run the full quality gate
- `domain-check` — flag domain-rule implications before coding
- `quality-gate` — run lint / typecheck / tests and report clearly
- `commit` — generate a commit message for staged changes
- `release` — bump the project version and cut `CHANGELOG.md` for a release commit
- `docs` — check whether behavior changes need README/architecture/AGENTS.md updates

## References

Load on demand — don't read all of these every session:

- **Project goals / audience / constraints**: read `<PROJECT_DOC>`
- **System architecture**: read `<ARCHITECTURE_DOC>`
- **Domain rules**: read `.agents/rules/domain-rules.md`
- **Changelog discipline**: read `.agents/rules/changelog.md`
- **Code style**: read `.agents/rules/code-style.md`
- **Test structure**: read `.agents/rules/testing.md`

## Keep in sync

This template maintains two parallel agent configs on purpose, so it works with either Claude Code or other agent tools:

- `AGENTS.md` + `.agents/` — this one, generic config
- `CLAUDE.md` + `.claude/` — Claude Code equivalent

Whenever you edit this file or anything under `.agents/` (skills, rules), make the matching edit to `CLAUDE.md` / `.claude/` — and vice versa. Skill and rule file names are identical across both trees except where a Claude Code built-in skill name collides with a project skill name (currently: `.agents/skills/review` ↔ `.claude/skills/project-review`, and `.agents/skills/verify` ↔ `.claude/skills/project-verify`); only tool names and invocation syntax differ between the two configs. If you make a change in one tree and can't immediately mirror it, say so explicitly before finishing the task.
