---
name: quality-gate
description: Use to run the project's verification suite and report results clearly. Shared by commands that need to confirm a change is safe to merge.
---

# Quality Gate

Prefer the project-wide `<GATE_COMMAND>` when it exists. It should run the checks below and return a single pass/fail result. Use this skill only when you need to run or report individual checks explicitly.

## Steps

Run each check in order. Do not stop at the first failure — run all of them and report every failure found.

1. `<LINT_COMMAND>` — report linter errors with file and rule name
2. `<FORMAT_CHECK_COMMAND>` — report unformatted files
3. `<TYPECHECK_COMMAND>` — report type errors with file and line
4. `<TEST_COMMAND>` — report failing tests with test name and failure message
5. `<VERIFY_SCRIPT>` — report broken import aliases or other custom checks
6. `<GATE_COMMAND>` — if available, run the unified gate last and report its overall result

## Output format

For each step: pass or fail.
On failure: list only the errors, with file references. No noise.
At the end: overall pass/fail summary and what to fix first.

## On failure

Offer to fix the first failing issue. Do not auto-fix without asking — the user may want to understand it first.
