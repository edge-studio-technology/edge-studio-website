# Architecture Decision Records

Use `docs/adrs/` for durable architectural and engineering rationale. ADRs explain why a meaningful decision was made, when it applies, which alternatives were considered, and what consequences it creates.

## What belongs in an ADR

Write an ADR for decisions that affect architecture, system boundaries, data flow, public interfaces, dependencies, deployment, shared conventions, or engineering process. Also write one when a decision has meaningful trade-offs or supersedes an earlier decision.

Do not use ADRs for routine implementation details, formatting, typo fixes, or local refactors with no durable design consequence.

## Keep other surfaces clean

- Commit subjects state what changed, directly and briefly.
- Changelog entries summarize user- or operator-visible changes; they do not carry the decision narrative.
- Code comments explain only non-obvious local rationale and should link to the ADR when the rationale is architectural.
- Put the full why/when/how, alternatives, and consequences in the ADR instead of duplicating it across commits, changelogs, and comments.

## File and content format

- Name files `NNN-short-title.md` using the next zero-padded sequence number.
- Include `Status` and `Date` metadata.
- Include `Context`, `Decision`, and `Consequences` sections; add alternatives and references when useful.
- When replacing a decision, mark the old ADR `Superseded` and link to the replacement. Never rewrite the old decision to hide its history.
