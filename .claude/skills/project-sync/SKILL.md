---
name: project-sync
description: After meaningful work, synchronize docs/TASKS.md, docs/SESSION.md, active plans, and roadmap milestones.
---

# /project-sync

Keep the project's tracking docs consistent with the work that just happened.

## When to use

After any meaningful chunk of work — a completed plan step, a finished feature, end of a session — before moving on to the next task.

## Steps

1. Update `docs/TASKS.md`: mark finished work done, add anything newly discovered, keep current focus accurate.
2. Update `docs/SESSION.md` with in-progress context if the session isn't finished; clear it if the session's work is fully wrapped up.
3. If a `docs/plans/nnn-*.md` file was being executed, check off completed steps. If every step and the definition of done are met, follow the `plan` skill's completion steps (`Status: Completed`, move to `docs/plans/archive/`).
4. If the work closes out a roadmap milestone, update the milestone's status in its `docs/roadmaps/nnn-*.md` file and link the completed plan if not already linked.
5. Do not invent progress — only mark something done if you verified it (tests pass, the checklist's verify step succeeded).
