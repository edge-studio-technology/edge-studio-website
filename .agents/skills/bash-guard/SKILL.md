---
name: bash-guard
description: Block obviously destructive shell commands before they run.
---

# /skill:bash-guard

Block obviously destructive shell commands.

## When to use

Apply this check before every `Shell` tool call.

## Blocked patterns

Refuse to run commands matching any of these:

- `rm -rf /`, `rm -rf $HOME`, `rm -rf ~`
- `dd if=...`
- `mkfs`
- `chown -R`
- `sudo rm`
- `git push --force`
- `git reset --hard`
- `git clean`
- `git branch -D`
- `git checkout .`
- `pkill`
- `kill -9`

## Action

If the command matches a blocked pattern, refuse to execute it and tell the user why. Never bypass this check.
