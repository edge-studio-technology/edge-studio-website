---
name: commit
description: Generate a Conventional Commits message for staged changes.
---

# /commit

Generate a Conventional Commits message for the currently staged changes.

## When to use

Use this when the user asks for a commit message, wants to commit staged changes, or says something like "write a commit message for me."

## Steps

1. Verify there are staged changes:

   ```bash
   git diff --cached --stat
   ```

   If nothing is staged, stop and tell the user to stage changes first.

2. Read the staged diff to understand what changed:

   ```bash
   git diff --cached
   ```

3. Write a single-line Conventional Commits subject:

   - Format: `type(scope): subject`
   - Common types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
   - Subject: imperative mood, lowercase after the type, no trailing period.
   - Subject line only — never a body, bullet list, or trailers, even for
     larger changes. `git log`/`CHANGELOG.md` are where the itemized detail
     lives.

4. Present the message to the user.

5. Do **not** run `git commit` unless the user explicitly asks you to.
