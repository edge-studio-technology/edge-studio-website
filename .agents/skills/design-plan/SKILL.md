---
name: design-plan
description: Generate a concrete design system (color tokens, typography, spacing, one signature element) before writing any UI markup for a new page or product. Use when a UI-building task doesn't already have decided tokens/style.
---

# Design Plan

> Ported from the Claude Code `/design-plan` command (`.claude/commands/design-plan.md`), itself
> imported from https://github.com/nextlevelbuilder/ui-ux-pro-max-skill (MIT). Adapted from a
> slash command with `$ARGUMENTS` substitution into a skill triggered by context, since `.agents/`
> tooling invokes skills rather than parameterized commands.

Before writing any markup, produce a design system for the requested product/brief.

1. Run the `ui-ux-pro-max` skill's design-system generator to get style + color tokens +
   typography + UX anti-patterns for the brief:

   ```bash
   python ".agents/skills/ui-ux-pro-max/scripts/search.py" "<brief keywords>" --design-system -p "Project"
   ```

2. Pull anything the brief needs specifically, e.g.:
   - `--domain color "<industry> <mood>"` for the palette / semantic tokens
   - `--domain typography "<mood>"` for font pairing + imports
   - `--domain web-vitals "<page type>"` for the performance budget
   - `--domain ux "<pattern>"` for do/don't guidance

3. Then apply the **frontend-design** / **taste-skill** lens: state purpose / tone / constraints /
   differentiation, pick ONE tone, choose a single signature element, and reject any choice that
   reads like a generic AI default.

Output a compact token block (4–6 named colors, 2–3 type roles, spacing scale, one signature
element) and a one-paragraph rationale. Do **not** start building until the tokens are decided.
