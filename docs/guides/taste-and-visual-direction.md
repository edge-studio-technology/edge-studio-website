# Taste & Visual Direction

Eight skills in this project all attack the same core problem — _"don't let the output look like
a generic AI default"_ — with different personas, dial systems, and vocabulary. They were imported
as-is rather than merged (see `CLAUDE.md`'s "Design & Frontend (imported)" section), so picking
the right one is a judgment call. This guide is that judgment call, written down.

Invoke any of these by name (e.g. `/frontend-design`) or just describe the task — Claude Code
loads the closest-matching skill automatically based on its description.

## The eight, in one line each

| Skill              | Persona / angle                                                                                                                                                                                                                                              | Best for                                                                                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `frontend-design`  | Anthropic's own — "design lead at a small studio," brainstorm → critique → build loop                                                                                                                                                                        | Default choice for a brand-new page with a real subject/brief. Most disciplined process (plan → self-critique → build).                                                                                |
| `taste-skill`      | "Anti-slop" — infers page kind/vibe/audience first, then sets three numeric dials (`DESIGN_VARIANCE`, `MOTION_INTENSITY`, `VISUAL_DENSITY`) and routes to a real design system package when the brief calls for one (Fluent, Material, Carbon, shadcn, etc.) | When you want an explicit, tunable starting point (the dial table) rather than pure prose judgment, or when the brief maps to an official design system.                                               |
| `taste-skill-v1`   | The predecessor to `taste-skill`                                                                                                                                                                                                                             | Only if something already depends on v1's exact behavior. Otherwise use `taste-skill`.                                                                                                                 |
| `redesign-skill`   | Audit-first — scans the existing codebase/stack, diagnoses generic patterns, upgrades in place                                                                                                                                                               | **Always use this one, not the from-scratch skills, when improving an existing page** rather than building new. It works with whatever's already there instead of rewriting.                           |
| `brutalist-skill`  | Industrial Swiss-print + military-terminal aesthetic, rigid grids, raw borders                                                                                                                                                                               | A specific aesthetic choice (dashboards, portfolios, or editorial sites that should feel like "declassified blueprints"). Not a default — only reach for it when brutalism is actually the right call. |
| `minimalist-skill` | Warm monochrome, editorial type contrast, flat bento grids, muted pastels, zero gradients/shadows                                                                                                                                                            | Another specific aesthetic choice — calm, document-style, workspace-platform look.                                                                                                                     |
| `soft-skill`       | "Principal UI/UX Architect" persona, Awwvards/Apple-Linear-tier, banned-font list, haptic-depth motion                                                                                                                                                       | When the brief explicitly wants to feel expensive/agency-made and can support heavier motion/polish investment.                                                                                        |
| `gpt-tasteskill`   | GSAP-heavy motion choreography, strict AIDA page structure, Python-driven layout randomization, wide editorial type                                                                                                                                          | When the page needs serious scroll-driven motion (`ScrollTrigger` pinning/stacking/scrubbing) as a first-class part of the design, not an afterthought.                                                |
| `stitch-skill`     | Generates a `DESIGN.md` system file for Google Stitch                                                                                                                                                                                                        | Only relevant if you're actually using Google Stitch as the design tool in the loop.                                                                                                                   |

## Decision guide

1. **Improving something that already exists?** → `redesign-skill`. Always. It audits before it
   touches anything, which the from-scratch skills don't do.
2. **New page, brief has a real subject/audience?** → `frontend-design` first (it forces a
   brainstorm → self-critique pass before code). Pull in `taste-skill`'s dial table alongside it if
   you want an explicit variance/motion/density starting point, or if the brief matches an official
   design system (Fluent/Material/Carbon/Radix/shadcn/GOV.UK/USWDS) — `taste-skill`'s "Brief →
   Design System Map" table (section 2.A of its `SKILL.md`) is the fastest way to check that.
3. **Brief names a specific aesthetic** (brutalist, minimalist, "make it feel expensive," heavy
   scroll motion) → go straight to the matching specialist skill (`brutalist-skill`,
   `minimalist-skill`, `soft-skill`, `gpt-tasteskill`) instead of running the general ones first.
4. **Ambiguous which should lead?** Don't guess — state your read of the brief and ask, or pick
   the one whose one-line description above is the closest match and say which one you went with.

## What they all agree on (worth internalizing regardless of which one leads)

- Don't default to: centered hero over dark mesh gradient, three equal feature cards, generic
  glassmorphism, Inter/Roboto/Open Sans, infinite-loop decorative animation.
- State your design read in one line before writing code ("Reading this as: `<page kind>` for
  `<audience>`, `<vibe>` language, leaning toward `<system/aesthetic>>`").
- Spend your boldness in one place — one signature element, quiet and disciplined everywhere else.
- Respect `prefers-reduced-motion` and keep visible keyboard focus regardless of aesthetic.
