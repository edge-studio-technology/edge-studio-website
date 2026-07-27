# Design Review & QA

This is the "prove it actually looks right" half of the design tooling — use it after any
front-end change, before calling the work done (per `CLAUDE.md`'s own rule: "For UI or frontend
changes, start the dev server and use the feature in a browser before reporting the task
complete").

## `design-review` — the 7-phase live review

A subagent (`.claude/agents/design-review.md`) that opens the page in a real browser and works
through 7 phases, screenshotting each visual phase as evidence:

0. **Setup** — load the page at 1440×900, baseline screenshot, note console errors.
1. **Interaction & flows** — click through the primary flow, check hover/active/disabled states,
   loading/empty/error states.
2. **Responsiveness** — screenshot at 375 / 768 / 1024 / 1440 / 1920px, check for horizontal
   scroll, clipped content, tap targets < 44×44px.
3. **Visual polish** — spacing rhythm, type scale consistency, token discipline (radii/shadows).
4. **Accessibility (WCAG 2.1 AA)** — keyboard nav, focus visibility, heading structure, alt text,
   contrast ratios, `prefers-reduced-motion`.
5. **Robustness** — long strings, empty data, slow network, invalid form input.
6. **Console & health** — errors, failed requests, 404s, layout-shift warnings.

It returns a ranked report (Blockers → High → Medium → Nitpicks → "What's working") — never
invents findings, and says so plainly if it couldn't open the page at all.

### How to run it

```bash
npm run dev                              # start the dev server first
```

Then either:

- **`/design-review http://localhost:5173`** — the slash command, optionally with a focus area:
  `/design-review http://localhost:5173 "mobile nav"`.
- Just ask — "review the homepage for design/accessibility issues" also triggers the subagent
  automatically (its description says to use it proactively after front-end changes).

### Requirements

Needs the `playwright` and `chrome-devtools` MCP servers, already configured in this repo's
`.mcp.json`. Claude Code reads that file automatically — no extra setup needed.

### If a browser isn't available: the heuristic fallback

`scripts/design-audit.mjs` runs the same viewport sweep without MCP — heuristic checks only
(horizontal overflow, unsized media/CLS risk, missing focus styles, small tap targets, missing
accessible names, heading structure, approximate contrast) — and writes a Markdown + JSON report:

```bash
node scripts/design-audit.mjs --url http://localhost:5173
node scripts/design-audit.mjs --file ./index.html
# → audit-output/report.md, audit-output/report.json, audit-output/screenshots/
```

It's heuristic only — it doesn't judge taste, interaction flows, or edge cases the way the live
review does. Use it as a fast CI-friendly check, not a substitute for the real review.

## `design-plan` — decide tokens before building

`/design-plan <brief>` (or just describe a new build) generates a design system _before_ any
markup gets written: runs `ui-ux-pro-max`'s search tool for style/color/typography/UX
recommendations, then applies the `frontend-design`/`taste-skill` lens to pick one tone and one
signature element. Outputs a compact token block (4–6 colors, 2–3 type roles, spacing scale, one
signature element) plus a one-paragraph rationale. See
[design-systems-and-tokens.md](./design-systems-and-tokens.md) for what the underlying search tool
can do on its own.

## `webapp-testing` (anthropics/skills, Apache-2.0)

A lighter-weight, more general Playwright toolkit for functional testing — verifying behavior,
debugging UI logic, capturing screenshots/console logs — as opposed to `design-review`'s specific
7-phase design/accessibility audit. Reach for this when the question is "does this work" rather
than "does this look/feel right." It manages dev-server lifecycle for you
(`scripts/with_server.py`) rather than assuming one's already running.

## Not on Claude Code? `.agents/skills/design-review` and `.agents/skills/design-plan`

Same methodology, ported so a non-Claude-Code agent (Codex, OpenCode, Kimi Code) runs it directly
instead of delegating to an isolated subagent — since none of those tools has a standardized
sub-agent-dispatch mechanism the way Claude Code does. Falls back to `scripts/design-audit.mjs`
the same way if no MCP browser tool is configured for that agent.
