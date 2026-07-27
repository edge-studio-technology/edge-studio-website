# Changelog Rules

Update `CHANGELOG.md` in the same session as any code change that affects product behavior. Do not defer.

## When to write an entry

Always write an entry for:

- New features
- Bug fixes
- Refactors that affect behavior, navigation, or user-visible output
- Breaking or flag-gated behavior changes

Skip only for: pure formatting, comment-only edits, or internal refactors with zero user/operator impact.

## Format

```markdown
### [ADDED|CHANGED|FIXED YYYY-MM-DD] — Short title

#### Added / Changed / Fixed

- Bullet: what changed and why (one line each)

#### Try it (optional)

- How to verify the change
```

- Use today's date
- Newest entry first under `## [Unreleased]`
- Fixes get their own `[FIXED …]` entry — do not bury them inside the next feature entry

## Checklist before marking a task done

- [ ] `CHANGELOG.md` has an entry for this change
- [ ] Entry date and category (`ADDED` / `CHANGED` / `FIXED`) are correct
- [ ] Fix or follow-up work has its own entry, not folded into a feature entry
