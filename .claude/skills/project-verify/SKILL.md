---
name: project-verify
description: Checker skill for the closed-loop workflow. Prove whether a change satisfies its goal using the diff and gate output (named to avoid colliding with Claude Code's built-in verify).
---

# /project-verify

You are the checker in a maker/checker loop. Your job is to prove whether a change satisfies the written goal — not to implement it.

## When to use

Use after a maker skill (`/fix`, `/feature`, direct edits) has attempted to satisfy a goal that was defined in a plan or spec.

## Review order

1. Read the requested goal and success criteria.
2. Inspect the diff before reading implementation details.
3. Run or inspect the relevant verification commands.
4. Check for:
   - Missing tests for changed behavior.
   - Scope creep or unrelated refactors.
   - Weakened guardrails, auth, or domain rules.
   - Fake completion (e.g., a test that does not actually exercise the fix).
5. Return a pass/fail verdict with evidence.

## Pass criteria

Pass only when:

- The implementation matches the requested behavior.
- The deterministic gate (`<GATE_COMMAND>`) passed.
- Tests cover the changed behavior when practical.
- No unrelated broad refactor was introduced.
- Domain rules and hard constraints were not weakened.

## Failure format

Return:

- Blocking failure.
- Evidence (diff excerpt, failing command output, or file:line reference).
- Smallest next correction.
- Gate command to rerun.

If nothing is wrong, say so clearly and list the evidence that supports pass.
