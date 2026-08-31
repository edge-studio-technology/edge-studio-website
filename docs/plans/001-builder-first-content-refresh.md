# 001 - Builder-first content refresh

Status: In progress

## Goal

Reframe the public site around Raspberry Pi builders and a safe install-to-first-proof journey while clearly separating confirmed product capabilities from roadmap claims.

## Feedback assessment

- Adopt the proposed builder-first hierarchy: project outcome first, proof explanation second, Minima/Integritas technology after the use case.
- Treat the supplied wording as draft copy. Claims marked for confirmation stay unpublished until the named product, technical, legal, or commercial owner approves them.
- Keep the site static. Community and update CTAs may link to an approved external channel, but this change will not add forms, analytics, cookies, or visitor-data collection.
- Preserve the current visual language and interactions; this is an information-architecture and content refresh, not a wholesale redesign.

## Scope

**In:**

- Update homepage metadata, navigation, hero, install guidance, features, technology framing, roadmap, closing CTA, and footer.
- Add concise Why proof?, Build ideas, and How it works sections using approved claims and status labels.
- Improve install trust with prerequisites, safety language, script inspection, docs, GitHub, and feedback links once their destinations and wording are confirmed.
- Make draft Terms and Privacy copy consistent with approved current behavior and keep the draft/legal-review label visible.
- Reuse truthful existing product screenshots and add accessible, responsive presentation for new content.

**Out:**

- Implementing Edge Studio application features, Marketplace/data-pool functionality, or a community/newsletter backend.
- Publishing unconfirmed machine identity, token creation, export/publish, monetisation, supported-hardware, or data-processing claims.
- Writing full hardware tutorials or fabricating project demos that do not yet exist.

## Approval gates

- Product/technical: supported Pi models and OS versions; install/uninstall path; starter recipes; supported inputs and outputs; proof, export, wallet, token, and machine-identity behavior.
- Legal/privacy: install safety wording; tamper/provenance claims; Integritas payload description; local authentication/HTTPS and retention claims; legal entity, jurisdiction, and contact.
- Brand/commercial: Edge Studio naming; Marketplace/module terminology; Marketplace and data-pool framing; community and updates destinations.
- Content/SEO: final title, description, CTA labels, external URLs, and approved screenshots or demos.

## Checklist

- [ ] Build a claim-and-destination decision sheet from the approval gates; classify each item as available now, in progress, coming soon, or withheld → verify: every public claim and CTA has an owner-approved status and target.
- [ ] Update `pages/index/+config.ts` and the shared copy/types in `src/constants/landing.ts` → verify: metadata and content use the approved builder-first proposition and status vocabulary.
- [ ] Rework `Navbar`, `LandingHero`, and the install block around Build ideas, How it works, Features, Roadmap, Docs, GitHub, and Install Edge Studio → verify: desktop/mobile links resolve, install guidance includes approved prerequisites and safety context, and the remote script is inspectable before use.
- [ ] Add Why proof?, Build ideas, and How it works components, export them from `src/components/index.tsx`, and place them in the approved order in `src/App.tsx` → verify: each section explains a distinct part of the Connect → Automate → Prove journey, project examples do not imply nonexistent demos, and status labels expose future capabilities.
- [ ] Refresh `FeatureSection`, `PoweredBySection`, `RoadmapTimeline`, the closing CTA, and `SiteFooter` → verify: product outcomes precede Minima/Integritas detail, current versus future functionality is unambiguous, and no monetisation promise reads as available now.
- [ ] Apply only approved consistency changes to `src/pages/LegalPage.tsx` → verify: Terms and Privacy remain marked draft and accurately describe user-selected external data flows without previewing unlaunched Marketplace behavior.
- [ ] Review responsive layout, keyboard/focus behavior, reduced motion, heading order, link safety, image alt text, and static-site privacy constraints → verify: browser checks pass at mobile and desktop widths with no console, overflow, navigation, accessibility, CSP, or external-resource regressions.
- [ ] Run formatting, lint, type-check/build, pre-render, and security checks; update `CHANGELOG.md` and relevant project tracking docs → verify: all gates pass and `/`, `/terms`, and `/privacy` contain the approved metadata and copy in generated HTML.

## Risks / open questions

- The stakeholder's install URL differs from the repository URL currently used by the site; the canonical GitHub organisation and script path must be confirmed.
- The feedback proposes more capabilities than the current website alone can substantiate. Owner confirmation, product docs, or working demos are required before those claims move into public copy.
- Adding three sections and a closing CTA may make the page too long; keep each section concise and validate mobile scanability before adding richer project media.
- A subscribe form or embedded community widget would cross the site's current static/privacy boundary and needs a separate reviewed plan.

## Definition of done

- The approved builder-first journey is present from metadata through closing CTA, with truthful status labels and working destinations.
- No claim requiring confirmation is published without recorded approval or supporting product evidence.
- The public site remains static, self-hosted, responsive, accessible, pre-rendered, and compliant with existing browser-security rules.
- All repository quality gates pass and the content change is documented.
