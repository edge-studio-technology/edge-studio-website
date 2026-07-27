---
name: review
description: Review the current branch diff for issues before merging.
---

# /review

Review the current branch diff for issues before merging.

## Steps

1. Run `git diff <MAIN_BRANCH>...HEAD --stat` to see which files changed
2. Run `git diff <MAIN_BRANCH>...HEAD` to get the full diff
3. Load the `code-reviewer` skill and ask it for a full review against all project rules
4. Load the `security-auditor` skill and ask it to review the changed file paths
5. Wait for both to complete, then merge their findings
6. Check that `CHANGELOG.md` has an entry for the changes (`.agents/rules/changelog.md`)
7. Present the merged report to the user and ask which findings to act on

## Output format

Present merged findings from both skills, grouped by severity:

**Critical** — will break in production or violates a hard project rule
**Important** — should be fixed before merge
**Minor** — style or cleanup, fix if easy

Each finding: one line description + `file:line` reference.
If nothing is found in a category, omit it. No filler.
