---
name: plan
description: Think through a task and produce a written plan before touching any code.
---

# /plan

Think through a task and produce a written plan before touching any code.

## When to use

Use this before any non-trivial change: new features, refactors, integration work, or anything where the right approach isn't immediately obvious.

A task is a good candidate for a closed-loop plan when it repeats, has a deterministic definition of done, and a separate checker can verify the result. Use `/skill:closed-loop` for the execution phase after the plan is approved.

## Steps

1. Check `git status`. If there are unrelated uncommitted changes, commit or stash them first.
2. Run `task-check` to surface any running background tasks.
3. Read `<TASKS_DOC>` to confirm this work aligns with current focus.
4. If `docs/roadmaps/` has an active roadmap, read it first and link the plan to the milestone it serves.
5. Read all files relevant to the task — understand the existing shape before proposing changes.
6. Run the `domain-check` skill — flag any domain implications upfront.
7. Pick the next plan number: check `docs/plans/` and `docs/plans/archive/` and take the highest existing three-digit prefix + 1. Numbers are never reused, even after archiving.
8. Write the plan to `docs/plans/nnn-name-of-plan.md` using the template below.
9. Present the plan and **wait for approval before writing any code**.

## Plan file template

```markdown
# nnn - Name of plan

Status: In progress

## Goal

One sentence: what this achieves.

## Scope

**In:**
- ...

**Out:**
- ...

## Checklist

- [ ] Step one → verify: how to confirm it worked
- [ ] Step two → verify: how to confirm it worked

## Risks / open questions

- ...

## Definition of done

- ...
```

Keep it short — a plan that takes longer to read than to review defeats the purpose.

## Execution

After approval, execute one checklist step at a time and confirm each verify check before moving to the next, checking off boxes in the plan file as you go. Don't run to the end unattended.

## Completion

When every checklist box is checked and the definition of done is met: set `Status: Completed` at the top of the file, and move it from `docs/plans/` to `docs/plans/archive/` without renumbering.
