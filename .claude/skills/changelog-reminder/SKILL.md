---
name: changelog-reminder
description: Remind to update CHANGELOG.md for behavior changes.
---

# /changelog-reminder

Verify that a behavior change has a CHANGELOG entry.

## When to use

Before finishing any task that changes product behavior: new features, bug fixes, refactors with user-visible impact, breaking changes. Also before the `release` skill bumps a version — a release must never cut an empty `[Unreleased]` section, so the changelog entry has to exist first.

## Action

Check `CHANGELOG.md` under `## [Unreleased]`. If there is no entry for the current change, add one following `.claude/rules/changelog.md` before declaring the task done.

Every entry must use the same structure:

```markdown
### [ADDED|CHANGED|FIXED YYYY-MM-DD] — Short title

#### Added / Changed / Fixed

- One concise sentence describing what changed and why.
```

Keep entries newest first. When normalizing an existing changelog, convert inline records such as `- [CHANGED ...] — ...` into this heading/subheading/bullet structure without changing their meaning.
