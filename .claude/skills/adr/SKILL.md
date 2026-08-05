---
name: adr
description: Capture durable architectural and engineering decisions in docs/adrs/. Use this skill whenever a change involves a meaningful choice about system structure, dependencies, data flow, interfaces, tooling, conventions, or process, or whenever the user asks to explain why a decision was made. Keep commits, changelogs, and code comments concise; put the narrative why, alternatives, timing, and consequences in an ADR.
---

# /adr

Create and maintain Architecture Decision Records (ADRs) for decisions whose rationale should outlive the current implementation or commit.

## When to use

Use this skill when a decision:

- changes architecture, boundaries, data flow, public interfaces, dependencies, or deployment;
- establishes a convention or process other contributors must follow;
- has meaningful alternatives or trade-offs worth preserving;
- is likely to be questioned later as “why did we do it this way?”; or
- supersedes, reverses, or materially updates an existing ADR.

Do not create an ADR for routine implementation details, formatting, typo fixes, or local refactors with no durable design consequence.

## Workflow

1. Inspect `docs/adrs/` and read relevant existing ADRs before proposing a new decision.
2. Choose the next zero-padded sequence number and a short kebab-case title: `NNN-short-title.md`.
3. Write the decision in `docs/adrs/` using the required template below.
4. If the decision replaces an existing ADR, mark the old record `Superseded` and link to the new record. Do not rewrite history.
5. Keep the related commit subject, changelog entry, and code comments direct. Link to the ADR when useful; do not copy its narrative into those surfaces.
6. Check that the ADR states the decision, context, alternatives, consequences, and status clearly before finishing.

## Required template

```markdown
# ADR NNN: Short decision title

- Status: Proposed | Accepted | Deprecated | Superseded
- Date: YYYY-MM-DD

## Context

What problem, constraint, or trigger requires a decision?

## Decision

What are we choosing? State it directly.

## Alternatives considered

- Alternative: why it was rejected.

## Consequences

### Positive

- Resulting benefit.

### Negative

- Cost, limitation, or follow-up obligation.

## References

- Related code, issue, ADR, or documentation.
```

Use only the sections that add useful information, but always include `Context`, `Decision`, and `Consequences`. Keep the prose factual and specific. Record uncertainty as an explicit consequence or follow-up, not as vague commentary.
