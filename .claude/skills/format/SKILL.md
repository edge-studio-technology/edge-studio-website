---
name: format
description: Run the project formatter on edited source files.
---

# /format

Run the project formatter on a file.

## When to use

After writing or editing a supported source file.

## Command

Edit this to match your project's formatter:

```bash
npx prettier --write --log-level silent <file>
```

Supported file types: `*.ts`, `*.tsx`, `*.js`, `*.jsx`, `*.json`, `*.md`, `*.css`, `*.html`.
