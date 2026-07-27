---
name: changelog-reminder
description: Remind to update CHANGELOG.md for behavior changes.
---

# /skill:changelog-reminder

Verify that a behavior change has a CHANGELOG entry.

## When to use

Before finishing any task that changes product behavior: new features, bug fixes, refactors with user-visible impact, breaking changes. Also before the `release` skill bumps a version — a release must never cut an empty `[Unreleased]` section, so the changelog entry has to exist first.

## Action

Check `CHANGELOG.md` under `## [Unreleased]`. If there is no entry for the current change, add one following `.agents/rules/changelog.md` before declaring the task done.
