---
name: protect-env
description: Block direct edits to .env, .env.*, and .envrc files.
---

# /protect-env

Block direct writes to `.env`, `.env.*`, and `.envrc` files.

## When to use

Apply this check before every `Write` or `Edit` call.

## Action

If the target file matches `.env`, `.env.*`, or `.envrc` anywhere in the path, refuse the edit and tell the user to use `.env.example` or a secret manager instead.
