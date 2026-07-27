# Motion & Transitions

`transitions-dev` is a library of 27 copy-ready CSS transitions (modals, dropdowns, badges, form
states, skeleton loaders, tabs, tooltips, card tilt, and more), each namespaced under `t-*` classes
with a shared motion-token scale (`--duration-*`, `--ease-*`, `--distance-*`, `--scale-*`,
`--blur-*`). No framework dependency, every snippet ships a `prefers-reduced-motion` guard. Full
catalog and decision rules live in `.claude/skills/transitions-dev/SKILL.md` — this page is just
the "how do I actually use it" entry point.

## The fast path: just describe the UI

You don't need to know the transition names. Describe what you're building — "make the modal open
smoothly," "add a shake on invalid input," "the dropdown should grow from its trigger" — and
Claude Code loads this skill automatically and picks the matching transition from its decision
rules.

## The four explicit commands

If you want more control, these are recognized directly:

- **`transitions reveal`** — lists all 27 transitions with a one-line summary each. Use this when
  you don't know what's available.
- **`transitions review`** — scans the current project for places a transition would help
  (hardcoded durations, raw `@keyframes`, modal/dropdown/badge-shaped components) and suggests a
  best-fit transition per hit, grouped by file. Doesn't edit anything.
- **`transitions apply`** — installs the best-fit transition at your cursor/current context (or a
  named one, e.g. `transitions apply menu-dropdown`). Proposes which one it picked and why, then
  installs on confirmation.
- **`transitions refine`** — scans the whole project for ad-hoc motion (hardcoded `ms`/`s`
  durations, inline easings, custom keyframes — including Tailwind arbitrary values like
  `duration-[300ms]`) and suggests replacing them with the shared motion tokens, matched by
  **usage** not raw number. Doesn't edit anything until you confirm a line.

## First-time setup

Before the first transition goes in, `references/_root.css` needs to be imported once (paste its
`:root` block into the project's global stylesheet, or import the file directly) — it defines the
shared token scale every snippet reads from. After that, installing an individual transition is
just pasting its snippet and wiring the documented class names / state attributes.

## Where the actual snippets live

`.claude/skills/transitions-dev/references/01-card-resize.md` through `27-toggle.md`, plus
`_root.css`. Each reference file is self-contained — snippet, tunable variables, and (where
needed) the small JS orchestration snippet — so you can read one in isolation without loading the
whole skill.
