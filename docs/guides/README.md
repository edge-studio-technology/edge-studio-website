# Design & UX/UI Skills — Guide Index

This project imported 29 design/frontend skills plus a design-review agent from four external
repos (see the "Design & Frontend (imported)" section in `CLAUDE.md`/`AGENTS.md` for the full
list, sources, and licenses). This directory explains **how to actually use them** — grouped by
what you're trying to do, not by which repo they came from.

Written for Claude Code usage (`/skill-name` or automatic loading). The `design-review` and
`design-plan` skills also have a portable version under `.agents/skills/` for other agent tools —
see `AGENTS.md` if you're not on Claude Code.

## Guides

- [Taste & visual direction](./taste-and-visual-direction.md) — the "make it not look AI-generated"
  skills: `frontend-design`, `taste-skill`, `redesign-skill`, `brutalist-skill`, `minimalist-skill`,
  `soft-skill`, `gpt-tasteskill`, `stitch-skill`. Read this first if you're about to build or
  redesign a page — it explains how to pick between the overlapping options.
- [Design systems & tokens](./design-systems-and-tokens.md) — the reference/lookup skills:
  `design`, `design-system`, `ui-ux-pro-max`, `ui-styling`, `brand`, `slides`, `theme-factory`,
  `banner-design`.
- [Image generation](./image-generation.md) — skills that generate reference images or art:
  `image-to-code-skill`, `imagegen-frontend-web`, `imagegen-frontend-mobile`, `brandkit`,
  `algorithmic-art`, `canvas-design`.
- [Motion & transitions](./motion-and-transitions.md) — `transitions-dev`, the copy-ready CSS
  transition library.
- [Design review & QA](./design-review-and-qa.md) — `design-review` (agent + skill + command),
  `design-plan`, `webapp-testing`, and the `scripts/design-audit.mjs` fallback. Use this after any
  front-end change, before calling the work done.
- [Misc tooling](./misc-tooling.md) — `mcp-builder`, `skill-creator`, `web-artifacts-builder`,
  `output-skill` — not design skills themselves, but adjacent tooling that came in with the same
  import.

## The one thing to remember

Several skills across these guides do overlapping jobs on purpose (imported "everything" rather
than merged duplicates — see each guide's own note on this). When it's ambiguous which one should
lead, ask rather than guess, or just try the one whose one-line description best matches what
you're picturing.
