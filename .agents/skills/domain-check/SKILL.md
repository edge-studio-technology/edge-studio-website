---
name: domain-check
description: Use when a change touches sensitive areas defined in .agents/rules/domain-rules.md. Flags domain-rule implications before code is written.
---

# Domain Check

<!-- If your project has no domain-specific rules, delete this skill and remove references to it from other skills. -->

## When this applies

Trigger on any change that touches:

- `<SENSITIVE_AREA_1, e.g. PII parsing>`
- Data written to `<INTERNAL_STORE, e.g. database / cache>`
- `<STRUCTURED_OUTPUT, e.g. LLM>` input or output
- Anything that leaves `<BOUNDARY, e.g. the device>` (telemetry, sync, API calls)

If none of these apply, skip — do not load the full rule file for unrelated changes.

## Steps

1. Read `.agents/rules/domain-rules.md` in full.
2. Check the change against each section: data handling, confidence gating, platform constraints, and secrets handling.
3. If the change produces `<STRUCTURED_OUTPUT>`, confirm it will validate against a `<SCHEMA_FORMAT>` in `<SCHEMA_DIR>` before being acted on.
4. State findings before writing code — do not silently proceed if a rule is at risk of being violated.
