---
name: closed-loop
description: Run a bounded maker/checker loop for repeatable work that has a deterministic definition of done.
---

# /closed-loop

Use this skill for repeatable work where success can be verified by tests, lint, type checks, evaluation suites, CI status, or other deterministic gates.

## When to use

A task is loop-ready only when all of these are true:

- The work repeats often enough to justify a structured loop.
- The definition of done can be checked by deterministic commands.
- A wrong attempt is cheap to discard or isolate.
- The stop condition does not depend only on the maker saying it is done.

Do not use a closed loop for vague or open-ended goals.

## Loop shape

1. **Discovery** — find the exact failure, issue, or regression.
2. **Planning** — write a bounded plan with success criteria and a stop condition.
3. **Execution** — make the smallest change that could satisfy the goal.
4. **Verification** — run the narrowest relevant check first, then `<GATE_COMMAND>`.
5. **Iteration** — feed the first concrete failure back into the next attempt.
6. **Memory** — convert repeated lessons into tests, rules, or docs.

## Maker / checker separation

- **Maker**: implements the change. This is you when you invoke `/fix`, `/feature`, or work directly.
- **Checker**: verifies the diff and gate output against the goal. Use `/project-verify` for this.

The maker cannot approve its own change.

## Stop conditions

Stop when:

- The deterministic gate passes.
- The checker returns pass.
- The original failure is reproduced and fixed.

Stop early when:

- The same failure appears twice after different attempted fixes.
- The fix requires changing scope outside the original task.
- The loop reaches the configured attempt limit.

## Completion format

Report:

- Changed files.
- Reproduction or baseline command.
- Verification command.
- Gate result.
- Remaining risk or failed attempts, if any.
