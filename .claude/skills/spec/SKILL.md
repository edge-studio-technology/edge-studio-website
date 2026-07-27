---
name: spec
description: Write a one-page PRD/spec before implementing a feature or non-trivial change.
---

# /spec

Write a one-page product/technical spec before implementing a feature or non-trivial change.

## When to use

Use this for any feature, integration, refactor, or behavior change where:

- The right approach is not immediately obvious
- Multiple implementation paths exist
- The change crosses more than one architectural layer
- You want a shared reference before code is written

## Steps

1. Check `git status`. If there are unrelated uncommitted changes, commit or stash them first.
2. Read `docs/PROJECT.md` and `docs/TASKS.md` to align with project goals and current focus.
3. Ask the user for the feature name and a one-sentence goal if not already clear.
4. Run the `domain-check` skill if the change touches sensitive areas defined in `.claude/rules/domain-rules.md`.
5. Explore relevant code with `Glob`, `Grep`, and `Read` to understand existing patterns.
6. Write a spec covering:
   - Goal (one sentence)
   - Non-goals (what is out of scope)
   - User-visible behavior / acceptance criteria
   - Files and layers that will change
   - Open questions or risks
   - Verification plan
7. Save the spec to `docs/plans/<kebab-feature-name>.md` unless the user wants it inline.
8. Present the spec and wait for approval before writing implementation code.

## Output format

Keep the spec under 500 lines. Use this structure:

```markdown
# Spec: <Feature Name>

## Goal
<one sentence>

## Non-goals
- <out of scope 1>
- <out of scope 2>

## Acceptance criteria
- <criteria 1>
- <criteria 2>

## Files that will change
- `<path>` — <why>

## Risks / open questions
- <risk 1>

## Verification plan
- <step 1>
- <step 2>
```

After approval, use `/feature` or `/fix` to implement from the spec.
