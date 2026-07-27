---
name: roadmap
description: Create and maintain a high-level numbered roadmap in docs/roadmaps/, linking plans to milestones.
---

# /roadmap

Create or update a high-level, numbered roadmap that plans link into.

## When to use

Use when the user wants to define or update multi-milestone direction for the project — not for a single change (that's `/plan`).

## Steps

1. Look at `docs/roadmaps/` and `docs/roadmaps/archive/` for the highest existing three-digit prefix. Numbers are never reused.
2. For a new roadmap: create `docs/roadmaps/nnn-name-of-roadmap.md` with a short list of milestones, each with a one-line goal and status (`Not started` / `In progress` / `Done`).
3. For an update to an existing roadmap: edit the milestone list in place — update statuses, add/remove milestones as scope changes.
4. When a plan is created via `/plan` for work under a milestone, link the plan file path next to that milestone.
5. When every milestone in a roadmap is `Done`, set the roadmap's own status to `Completed` and move the file to `docs/roadmaps/archive/` without renumbering.

## Roadmap file template

```markdown
# nnn - Name of roadmap

Status: In progress

## Milestones

- [ ] Milestone one — one-line goal (plan: docs/plans/00X-....md)
- [ ] Milestone two — one-line goal
```

Keep milestones high-level. Implementation detail belongs in the linked plan files, not here.
