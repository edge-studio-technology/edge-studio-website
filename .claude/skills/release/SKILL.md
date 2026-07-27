---
name: release
description: Bump the project version and cut CHANGELOG.md for a release commit.
---

# /release

Bump `<MANIFEST_FILE, e.g. package.json>`'s version, sync `<LOCKFILE_FILE, e.g. package-lock.json>`, cut `CHANGELOG.md`'s `[Unreleased]` section into a dated version entry, and commit.

## When to use

Use when the user asks to bump the version, cut a release, or says something like "release this as vX.Y.Z."

## Steps

1. Confirm the current version and the bump type:

   ```bash
   <VERSION_READ_COMMAND, e.g. grep '"version"' package.json>
   ```

   Semver: patch = bug fixes only, minor = new backward-compatible functionality, major = breaking changes. If the user didn't say which, ask.

2. Run `changelog-reminder` first — a release must never cut an empty `[Unreleased]` section. Then cut the changelog: insert `## [X.Y.Z] - YYYY-MM-DD` directly under `## [Unreleased]`, above the existing entries. Leave `[Unreleased]` itself empty. Don't touch entry content — this only adds the version header. Stage `CHANGELOG.md`.

3. Bump the version and create the release commit + tag:

   - **npm projects (default):** run `npm version patch|minor|major`. It bumps `<MANIFEST_FILE>`, syncs `<LOCKFILE_FILE>`, and creates the release commit — bundling the already-staged `CHANGELOG.md` — plus an annotated tag, all in one step. Never hand-edit the manifest or lockfile version fields when this is available; `npm version` is the source of truth.
   - **Other package managers:** bump `<MANIFEST_FILE>`'s version field by hand, sync `<LOCKFILE_FILE>` via `<LOCKFILE_SYNC_COMMAND, e.g. npm install --package-lock-only>`, commit as `chore: release vX.Y.Z` (no body needed — the changelog entries under the new header are the detail), then tag manually to match the existing style:

     ```bash
     git tag -a vX.Y.Z -m "vX.Y.Z"
     ```

   Whichever path you take, do this every time — a release commit without a matching tag is an incomplete release, not an optional extra.

4. Verify formatting:

   ```bash
   <FORMAT_CHECK_COMMAND>
   ```

5. Do **not** push the commit or the tag unless the user explicitly asks. If they do ask to push, remember a plain `git push` only pushes the branch — tags are a separate ref namespace and need their own push (`git push origin vX.Y.Z`, or `--tags`/`--follow-tags`). Push both; a release isn't done if the tag is still local-only.
