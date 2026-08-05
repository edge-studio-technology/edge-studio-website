# <PROJECT_NAME>

<ONE_OR_TWO_SENTENCE_PRODUCT_DESCRIPTION>

> This is the Claude Code equivalent of `AGENTS.md`. See "Keep in sync" below.

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

| Variable       | Required            | Notes                             |
| -------------- | ------------------- | --------------------------------- |
| `<ENV_VAR_1>`  | <e.g. Yes>          | <description>                     |
| `<ENV_VAR_2>`  | <e.g. Dev only>     | <description>                     |
| `<SECRET_VAR>` | <e.g. Backend only> | **Never** expose to the frontend. |

## Key Constraints

These apply to every change. Full detail in `.claude/rules/`.

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

- Before any `Bash` tool call, run `bash-guard` and refuse destructive commands.
- Before any `Write` or `Edit`, run `protect-env` and refuse direct edits to `.env`, `.env.*`, or `.envrc` files.
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

These live in `.claude/skills/` and are invoked with `/<name>` (Claude Code project skills), or loaded automatically on demand:

- `closed-loop` — bounded maker/checker loops with a deterministic gate
- `project-verify` — checker skill for closed-loop work (named to avoid colliding with Claude Code's built-in `verify`)
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
- `adr` — capture durable architectural decisions in `docs/adrs/` while keeping commits, changelogs, and comments concise
- `task-check` — check for running background tasks
- `spec` — write a one-page PRD/spec before implementing a feature
- `feature` — scaffold a new feature end-to-end
- `fix` — fix a bug with test + changelog
- `plan` — think through a task and produce a written plan
- `roadmap` — create/maintain a numbered roadmap in `docs/roadmaps/`, linking plans to milestones
- `project-sync` — synchronize `docs/TASKS.md`, `docs/SESSION.md`, active plans, and roadmap milestones after meaningful work
- `project-review` — review the current branch diff against this project's rules (named to avoid colliding with Claude Code's built-in `review`/`code-review`)
- `test` — run the full quality gate
- `domain-check` — flag domain-rule implications before coding
- `quality-gate` — run lint / typecheck / tests and report clearly
- `commit` — generate a commit message for staged changes
- `release` — bump the project version and cut `CHANGELOG.md` for a release commit
- `docs` — check whether behavior changes need README/architecture/CLAUDE.md updates

### Design & Frontend (imported)

Several of these cover similar "give the agent good design taste" ground (`frontend-design`, `taste-skill`, `redesign-skill`, `soft-skill`, `gpt-tasteskill`, `stitch-skill`) with different framing — they were imported as-is rather than merged; pick by trigger description or ask if it's ambiguous which should lead.

- `frontend-design` — distinctive visual design direction, aesthetic risk-taking (anthropics/skills, Apache-2.0)
- `taste-skill` — anti-slop frontend direction with variance/motion/density dials
- `taste-skill-v1` — v1 of the above, kept for exact backward compatibility
- `redesign-skill` — audit-first upgrade of existing UI to premium quality without breaking functionality
- `brutalist-skill` — industrial/Swiss-brutalist interface direction
- `minimalist-skill` — warm-monochrome editorial minimalism
- `soft-skill` — high-end agency visual design direction
- `gpt-tasteskill` — GSAP-heavy motion choreography + strict AIDA page structure
- `stitch-skill` — generates DESIGN.md system files for Google Stitch
- `image-to-code-skill` — generate reference design images first, then implement to match them
- `imagegen-frontend-web` — per-section marketing/landing-page image direction (one image per section)
- `imagegen-frontend-mobile` — app-native mobile screen image direction
- `brandkit` — brand-kit image generation (identity boards, logo systems)
- `output-skill` — forbid truncated/placeholder output on exhaustive-output tasks
- `banner-design` — banners for social/ads/web/print
- `brand` — brand voice, visual identity, messaging frameworks, asset management
- `design` — unified design routing skill (brand/design-system/ui-styling plus built-in logo/CIP/slides/banner/icon/social-photo generation)
- `design-system` — token architecture (primitive→semantic→component), component specs
- `slides` — strategic HTML presentations with Chart.js
- `ui-styling` — shadcn/ui + Tailwind component implementation
- `ui-ux-pro-max` — searchable UI/UX rule database (styles, palettes, type pairings, UX guidelines) across 22 stacks
- `transitions-dev` — copy-ready CSS transition snippets (modals, menus, cards, form states, etc.)
- `webapp-testing` — Playwright-based local web app testing (anthropics/skills, Apache-2.0)
- `theme-factory` — apply or generate visual themes for artifacts (anthropics/skills, Apache-2.0)
- `web-artifacts-builder` — multi-component HTML artifacts with React/Tailwind/shadcn (anthropics/skills, Apache-2.0)
- `canvas-design` — poster/static visual art as .png/.pdf (anthropics/skills, Apache-2.0)
- `algorithmic-art` — generative art with p5.js (anthropics/skills, Apache-2.0)
- `mcp-builder` — build MCP servers (anthropics/skills, Apache-2.0)
- `skill-creator` — create/edit/benchmark skills (anthropics/skills, Apache-2.0)

Unattributed entries above are MIT-licensed imports from `Leonxlnx/taste-skill` or `nextlevelbuilder/ui-ux-pro-max-skill` — see each `SKILL.md`'s provenance note for the exact source.

## Available Agents (Claude Code mechanism — methodology also in AGENTS.md as a skill)

Subagents live in `.claude/agents/` and are invoked automatically when their description matches the task, or explicitly via the Agent tool:

- `design-review` — drives a real browser through the `playwright` and `chrome-devtools` MCP servers (configured in `.mcp.json`) across a 7-phase live UI review: interaction/flows, responsiveness, visual polish, WCAG 2.1 AA accessibility, edge cases, console health. Falls back to `scripts/design-audit.mjs` (heuristic-only, no MCP required) if a browser can't be opened. Imported from `nextlevelbuilder/ui-ux-pro-max-skill` (MIT). The same methodology is available to non-Claude-Code agents as the `.agents/skills/design-review` skill (self-executed, not sub-agent-dispatched).

## Available Commands (Claude Code mechanism — methodology also in AGENTS.md as a skill)

Slash commands live in `.claude/commands/`:

- `/design-plan` — generate a concrete design system (tokens, style, type, UX) before building UI. Same workflow available as `.agents/skills/design-plan`.
- `/design-review` — run the `design-review` agent against a URL or file. Same workflow available as `.agents/skills/design-review`.

## References

Load on demand — don't read all of these every session:

- **Project goals / audience / constraints**: read `<PROJECT_DOC>`
- **System architecture**: read `<ARCHITECTURE_DOC>`
- **Domain rules**: read `.claude/rules/domain-rules.md`
- **Changelog discipline**: read `.claude/rules/changelog.md`
- **Code style**: read `.claude/rules/code-style.md`
- **Test structure**: read `.claude/rules/testing.md`

## Keep in sync

This template maintains two parallel agent configs on purpose, so it works with either Claude Code or other agent tools:

- `AGENTS.md` + `.agents/` — generic config
- `CLAUDE.md` + `.claude/` — this file, the Claude Code equivalent

Whenever you edit this file or anything under `.claude/` (skills, rules), make the matching edit to `AGENTS.md` / `.agents/` — and vice versa. Skill and rule file names are identical across both trees except where a Claude Code built-in skill name collides with a project skill name (currently: `.agents/skills/review` ↔ `.claude/skills/project-review`, and `.agents/skills/verify` ↔ `.claude/skills/project-verify`); only tool names and invocation syntax differ between the two configs. If you make a change in one tree and can't immediately mirror it, say so explicitly before finishing the task.

`.claude/agents/` (subagents) and `.claude/commands/` (slash commands) are Claude Code-specific runtime constructs with no AGENTS.md/`.agents/` equivalent — the mechanism (isolated sub-agent dispatch, `$ARGUMENTS` substitution) is intentionally not mirrored. Their _content_ is: `.agents/skills/design-review/` and `.agents/skills/design-plan/` carry the same review methodology and design-system workflow, adapted so the primary agent runs them directly instead of delegating.
