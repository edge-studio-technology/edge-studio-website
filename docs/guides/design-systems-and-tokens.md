# Design Systems & Tokens

These skills are reference/lookup tools backed by real databases (CSVs, searchable indices) rather
than pure prose guidance. Use them when you need a concrete answer — a color palette, a font
pairing, a component spec — not just a style of thinking.

## `ui-ux-pro-max` — the searchable database

The heaviest-duty one: 84 styles, 192 color palettes, 74 font pairings, 192 product types, 98 UX
guidelines, 104 icon entries, 16 GSAP motion presets, and 25 chart types, searchable across 22
tech stacks. Backed by a local Python script — no network calls, no API key.

```bash
# Full design-system recommendation (style + colors + typography + anti-patterns) for a brief
python .claude/skills/ui-ux-pro-max/scripts/search.py "<product type> <industry> <keywords>" --design-system -p "Project Name"

# Narrow query against one domain
python .claude/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --domain color
python .claude/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --domain typography
python .claude/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --domain ux
python .claude/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --stack react   # or vue, astro, shadcn, swiftui, etc.

# Persist the result to disk so it survives across sessions
python .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system --persist -p "Project Name" --output-dir "."
```

Read `.claude/skills/ui-ux-pro-max/references/quick-reference.md` for the full rule list, and
`references/pro-rules.md` for app-specific polish rules and the pre-delivery checklist.

This is also what `design-plan` (see [design-review-and-qa.md](./design-review-and-qa.md)) calls
under the hood to generate a token block before UI work starts.

## `design` — the router

A "front door" skill that routes to the others plus some built-ins of its own (logo generation,
corporate identity program / CIP mockups, HTML slide decks, banners, icons, social photos — all
via Gemini image generation, so these sub-features need an API key configured to actually run).
Its own `SKILL.md` has a routing table; the short version:

| Need                                             | Goes to                    |
| ------------------------------------------------ | -------------------------- |
| Brand identity, voice, assets                    | `brand`                    |
| Tokens, specs, CSS variables                     | `design-system`            |
| shadcn/ui, Tailwind, actual component code       | `ui-styling`               |
| Logo, CIP, slides, banners, icons, social photos | Built into `design` itself |

Only reach for the logo/CIP/banner/icon generation pieces if you actually need client-deliverable
assets (this is closer to agency tooling than website-building tooling) — for the website itself,
`ui-styling` and `design-system` are the ones you'll use day to day.

## `design-system` — tokens and component specs

Three-layer token architecture (primitive → semantic → component), CSS variable generation,
spacing/typography scales, and component specs. Use this when you need to formalize a token set
you've already decided on (from `taste-skill`'s dials, `ui-ux-pro-max`'s search, or a manual brief)
into actual CSS custom properties and a component spec sheet. Also handles strategic slide
generation (overlaps with the standalone `slides` skill below).

## `ui-styling` — implementation

Where you go once tokens/direction are decided and you're actually writing components: shadcn/ui
(Radix + Tailwind) component patterns, dark mode, accessible dialogs/dropdowns/forms/tables,
responsive layouts. This is the skill that touches `src/` in this repo.

## `brand` — voice and identity

Brand voice, messaging framework, visual identity, asset organization, consistency checklists.
Use when the ask is about _tone_ and _brand compliance_ rather than pixels — copy review, style
guide adherence, logo usage rules.

## `banner-design` — banners specifically

22 styles across social/ads/web-hero/print. Narrower than `design`'s built-in banner feature but
usable standalone if that's the whole task.

## `slides` — HTML presentations

Chart.js-backed strategic presentations with design tokens, responsive layouts, and copywriting
formulas. Use for pitch decks or internal presentations, not for the website itself.

## `theme-factory` (from anthropics/skills, Apache-2.0)

Ten pre-set themes (colors + fonts) you can apply to any artifact you've already built (slides,
docs, an HTML page), or generate a new theme on the fly. Lighter-weight than `design-system` —
reach for this when you want a quick, coherent look applied to something that already has
structure, not when you're deciding the structure itself.
