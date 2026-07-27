# Image Generation

These skills produce reference images or standalone art rather than code. Three of them
(`image-to-code-skill`, `imagegen-frontend-web`, `imagegen-frontend-mobile`) are specifically about
generating a _visual reference first_, then building to match it — a different workflow from
writing code straight from a text brief.

## `image-to-code-skill` — generate the reference, then build

The core idea: for visually important work, generate the design image(s) first, look at them
closely, then implement the site to match — rather than jumping straight from a text description
to code. Prefers large, section-specific images over one tiny compressed board, and generates
fresh images per section/detail view instead of cropping a single big image. Keeps the hero clean
and readable on a small laptop, avoids cards-inside-cards nesting.

Use this when a page is visually important enough that "describe it in prose, then code it" is
likely to under-deliver — landing pages, hero sections, anything where the visual is the point.

## `imagegen-frontend-web` — per-section marketing/landing images

Generates **one separate image per section** (an 8-section landing page → 8 images, never
compressed into one board). Enforces composition variety (not always left-text/right-image),
varied hero scales, a consistent palette across all the section images, and a "narrative concept
spine" tying them together. Feed its output into `image-to-code-skill`'s build step, or use
directly as a mood-board / stakeholder-review artifact before committing to code.

## `imagegen-frontend-mobile` — app-native mobile screens

Same idea for mobile app screens: clean hierarchy, readable text, multi-screen consistency,
tasteful custom iconography, shown inside a subtle phone mockup frame by default. Generates images
only — pair with `image-to-code-skill` if you need it turned into actual implementation.

## `brandkit` — identity boards and logo systems

Premium brand-kit image generation: identity boards, logo systems, visual-world presentations.
Trained across minimalist, cinematic, editorial, dark-tech, luxury, and several other registers.
Use for brand-identity deliverables (a client-facing "here's the visual world" board), not for
building the website itself.

## `algorithmic-art` (anthropics/skills, Apache-2.0)

Generative art with p5.js and seeded randomness — flow fields, particle systems, interactive
parameter exploration. Always generates original work rather than imitating a specific existing
artist, to avoid copyright issues. Use for a genuinely generative visual element (an animated
background, a hero piece), not for standard UI.

## `canvas-design` (anthropics/skills, Apache-2.0)

Static visual art as `.png`/`.pdf` — posters, single design pieces — built from design philosophy
rather than image-model prompting. Also original-work-only. Use for a downloadable asset (a poster,
a one-off print piece) rather than a web page element.

## A note on API keys

The Gemini-backed pieces (`brandkit`, and the logo/CIP/icon/social-photo generation built into the
`design` skill — see [design-systems-and-tokens.md](./design-systems-and-tokens.md)) need an image
generation API key configured to actually run. `image-to-code-skill`, `imagegen-frontend-web`,
`imagegen-frontend-mobile`, `algorithmic-art`, and `canvas-design` describe their own generation
approach in each `SKILL.md` — check there before assuming a specific backend.
