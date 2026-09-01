# 002 - Content refresh closeout

Status: Completed

Continues [001: builder-first content refresh](../001-builder-first-content-refresh.md). That plan's Phase 1 (confirmed content pass) and part of Phase 3 (Why proof, Build ideas, How it works sections) are done. This plan closes out the remaining Phase 3 items plus the doc-alignment drift found in the post-implementation content audit, instead of carrying more open checklist items in 001. Items still blocked on stakeholder input (install prerequisites, legal sign-off, community channel) stay tracked here as open questions rather than a separate worksheet.

## Goal

Bring the homepage, nav/footer, and legal pages in line with the approved content-review recommendations where they drifted, and add the still-missing sections as scoped placeholders — without inventing any unconfirmed claim, form, or channel.

## Scope

**In:**

- Update `RoadmapTimeline` entries in `src/constants/landing.ts` to the doc-approved wording and add the missing "Data pools" item.
- Add a placeholder closing section (heading, body, primary/secondary CTA, GitHub-issue feedback link) positioned between Roadmap and the footer, using only doc-approved copy and existing approved links — no community channel, no newsletter.
- Rework `PoweredBySection` partner links from icon-only to visible "Learn about Integritas" / "Learn about Minima" link text.
- Swap section order in `src/App.tsx` so `HowItWorksSection` renders before `FeatureSection`, matching the doc's proposed architecture (flow explained before feature tour).
- Update `Navbar` and `SiteFooter` link order to `Build ideas | How it works | Features | Roadmap | Docs | GitHub`, and add the missing Docs link to the footer.
- Revert the `HowItWorksSection` "Prove" step copy to the doc-approved wording.
- Change the "Roadmap" status chip label to the doc's standardized "Coming soon".
- Apply only the doc's explicitly pre-approved minor consistency edits to `/terms` and `/privacy` (draft label stays; no new claims).
- Run a browser-based responsive/accessibility pass (`design-review` agent) over the changed sections before marking this done.
- Run quality gates, update `CHANGELOG.md`, `docs/TASKS.md`, `docs/SESSION.md`.

**Out:**

- Install safety note, prerequisites, and "after install" guidance — blocked on confirmed minimum Pi/OS requirements (carried over from 001, revisit once available).
- Renaming the "Ledger" feature card back to "Minima" — kept as-is; the doc-order fix already puts brand-specific naming (`PoweredBySection`) after the feature tour, so `FeatureSection` staying brand-light before that point is consistent, not a gap.
- Softening/hardening the hero and nav CTA labels ("Get started" / "Docs") — kept as-is; treated as an intentional, common landing-page pattern (light CTA on the marketing page, richer detail in docs) rather than a doc deviation to fix.
- Any real community channel, newsletter signup, subscribe form, analytics, or cookies — still out of scope per the static-site constraint in `.claude/rules/domain-rules.md` and 001's original scope.
- New Terms/Privacy claims (data flows, retention, contact/legal entity) requiring legal sign-off.
- Marketplace/data-pool functionality, token creation, machine identity — unconfirmed product claims, doc explicitly flags these as "requires confirmation".

## Checklist

- [x] Update `roadmap` array in `src/constants/landing.ts` to doc-approved phase/title/text, add the "Data pools" entry → verify: `RoadmapTimeline` renders 5 items with the doc's wording, no leftover "Today"/"Later" copy.
- [x] Change the `HowItWorksSection` "Prove" step text back to the doc-approved wording and its status chip label from "Roadmap" to "Coming soon" → verify: text and chip match the doc's Status Language Standard exactly.
- [x] Rework `PoweredBySection` partner links to visible "Learn about Integritas" / "Learn about Minima" text, keep external `rel="noreferrer"` → verify: link purpose is readable without relying on the icon or aria-label alone.
- [x] Swap `HowItWorksSection` and `FeatureSection` order in `src/App.tsx` → verify: page flow reads WhyProof → BuildIdeas → HowItWorks → Features → PoweredBy → Roadmap → Closing → Footer.
- [x] Update `Navbar` (desktop + mobile) and `SiteFooter` link order to `Build ideas | How it works | Features | Roadmap | Docs | GitHub`, add Docs to footer → verify: link order matches on both breakpoints, all hrefs still resolve.
- [x] Add a placeholder closing section component, export it from `src/components/index.tsx`, place it between Roadmap and `SiteFooter` in `src/App.tsx`, using the doc's heading/body/primary/secondary CTA copy and a GitHub-issues feedback link (no community/newsletter line) → verify: section renders with no new external domain, no form, no cookie/analytics code.
- [x] Apply the doc's pre-approved minor consistency edits to `/terms` and `/privacy` only → verify: draft labels remain, diff contains only the specific doc-flagged sentences, no new data-flow or retention claim.
- [x] Run the `design-review` agent (or equivalent manual browser pass) across mobile/desktop for the reordered and new sections → verify: no console/CSP/accessibility/overflow regressions, focus order follows new section order.
- [x] Run quality gates and update `CHANGELOG.md`, `docs/TASKS.md`, `docs/SESSION.md` → verify: all checks pass, changelog entry dated and categorized.

## Risks / open questions

Carried forward, still needs stakeholder confirmation before it can move into public copy or a future plan:

- Minimum Pi/OS install requirements and uninstall/rollback path (blocks the install safety/prerequisites copy from 001).
- Final legal review of Terms/Privacy content, entity, jurisdiction, and contact.
- Whether "Ledger" is the approved public term for the Minima-powered feature card, or should stay "Minima".
- Confirmed community channel and update/newsletter destination, once one exists, to replace the GitHub-issues-only feedback path used in the placeholder closing section.
- Machine identity, token creation, export/publish, and Marketplace/data-pool claims remain unconfirmed and stay out of public copy per the doc's claims checklist.

## Definition of done

- Homepage section order, nav, footer, roadmap copy, and status labels match the doc-approved recommendations wherever no further confirmation is required.
- The closing section exists as a truthful placeholder with no unconfirmed claim or new data collection.
- Terms/Privacy keep their draft label and only carry the doc's pre-approved edits.
- All quality gates pass and the change is documented in `CHANGELOG.md`, `docs/TASKS.md`, and `docs/SESSION.md`.
