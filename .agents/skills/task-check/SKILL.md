---
name: task-check
description: Check for running background tasks before starting a new major step.
---

# /skill:task-check

Check for running background tasks before starting a new major step.

## When to use

Before starting a new major prompt or before finishing a session.

## Action

Use the `TaskList` tool to list active background tasks. If any are running, warn the user and suggest checking them with `/task` before proceeding.
