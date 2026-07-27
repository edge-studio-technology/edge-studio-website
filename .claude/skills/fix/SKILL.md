---
name: fix
description: Fix a bug correctly — with a test, a domain check, and a changelog entry.
---

# /fix

Fix a bug correctly — with a test, a domain check, and a changelog entry.

## Steps

1. Check `git status`. If there are unrelated uncommitted changes, commit or stash them first.
2. Understand the bug: read the failing code and reproduce the failure in your head (or via `<TEST_COMMAND>` if tests cover it)
3. Define the gate: state the command that must pass for this fix to be considered done, usually `<GATE_COMMAND>` or the narrowest relevant check
4. Run the `domain-check` skill — it will no-op if the fix doesn't touch a domain-relevant path
5. Write a failing test first if the bug is unit-testable — place it in the correct folder per `.claude/rules/testing.md`
6. Fix the bug in the smallest change possible — do not refactor surrounding code unless it caused the bug
7. Verify the fix: run the narrowest relevant check first, then `<GATE_COMMAND>` when dependencies are available
8. Run `format` on edited source files.
9. Run `typecheck` if you edited `*.ts` or `*.tsx` files.
10. Run `changelog-reminder` and update `CHANGELOG.md` with a `[FIXED YYYY-MM-DD]` entry if needed.
11. Run the `docs` skill if the fix changes observable behavior, public API, or setup instructions
12. Run `/project-verify` to do a final checker pass before declaring completion

## Rules

- Do not suppress type errors to make the fix compile — fix the type correctly
- Do not remove a test to make the suite pass
- If the fix requires a behaviour change that affects users, note it in the changelog entry
- If verification fails, diagnose only the first concrete failure, fix it, and rerun the gate
- If the loop exhausts its attempt limit, leave the reproduced failure and a short handoff note
