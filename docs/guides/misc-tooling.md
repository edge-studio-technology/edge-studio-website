# Misc Tooling

These four came in with the same `anthropics/skills` and `Leonxlnx/taste-skill` imports but aren't
design/UX skills themselves — noted here for completeness so nothing in the import is a mystery.

## `output-skill`

Overrides default LLM truncation behavior — bans placeholder patterns (`// ... rest of code`,
`<!-- more content -->`), enforces complete/unabridged output, and handles clean token-limit
splits when a response genuinely has to continue across messages. Not design-specific; relevant
any time a task demands exhaustive output (e.g. generating several full components in one pass).

## `web-artifacts-builder` (anthropics/skills, Apache-2.0)

For building elaborate multi-component HTML artifacts (React + Tailwind + shadcn/ui) with state
management or routing — the claude.ai Artifacts context specifically, not this project's own
codebase. Only relevant if producing a shareable Artifact rather than editing `src/`.

## `mcp-builder` (anthropics/skills, Apache-2.0)

Guide for building new MCP servers (Python FastMCP or Node/TypeScript MCP SDK) that expose
external APIs/services as tools. Relevant if this project ever needs a custom MCP server beyond
the `playwright`/`chrome-devtools` ones already configured in `.mcp.json` — not something used
day-to-day.

## `skill-creator` (anthropics/skills, Apache-2.0)

Meta-tooling for creating, editing, and benchmarking skills — including running evals and
variance analysis on a skill's trigger description. Useful if you want to write a new
project-specific skill (following the pattern the 24 original skills in `.claude/skills/` already
use), or tune one of the imported skills' descriptions if it's mis-triggering.
