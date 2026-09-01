# 001 - Builder-first content refresh

Status: Blocked — Phase 2 was bypassed in practice; remaining work needs stakeholder input

Continued in [002: content refresh closeout](archive/002-content-refresh-closeout.md), which picked up the remaining Phase 3 items and the doc-alignment drift found in the post-implementation audit. 002 is now complete and archived. Checklist below stays as the historical record of this phase; don't add new items here.

Note: Phase 2 (the formal alignment worksheet) was never produced — alignment happened informally via the content-review doc instead, and 002 implemented directly from that doc rather than from worksheet decisions. What remains open below is exactly what 002 also carries forward as blocked: minimum Pi/OS install requirements and the uninstall/rollback backlog item.

## Goal

Reframe the public site around Raspberry Pi builders and a safe install-to-first-proof journey while clearly separating confirmed product capabilities from roadmap claims.

## Feedback assessment

- Use the stakeholder's proposed wording as the implementation baseline for existing, confirmed functionality: project outcome first, proof explanation second, and Minima/Integritas technology after the use case.
- Make only small edits required for layout, consistency, and mobile readability. Claims marked for confirmation stay unpublished until the named product, technical, legal, or commercial owner approves them.
- Keep the site static. Community and update CTAs may link to an approved external channel, but this change will not add forms, analytics, cookies, or visitor-data collection.
- Preserve the current visual language and interactions; this is an information-architecture and content refresh, not a wholesale redesign.

## Confirmed decisions

- `https://github.com/edge-studio-technology/edge-studio` is the canonical repository after the organisation move; all repository, documentation, and install-script links must use it.
- Minimum installation requirements still need to be identified.
- An uninstall/rollback path is not yet available and must be added to the product backlog.
- Unresolved capability, community, terminology, legal, and privacy content will be prepared for team alignment before it is presented as confirmed public functionality.

## Scope

**In:**

- Update homepage metadata, navigation, hero, install guidance, features, technology framing, roadmap, closing CTA, and footer.
- Add concise Why proof?, Build ideas, and How it works sections using approved claims and status labels.
- Improve install trust with prerequisites, safety language, script inspection, docs, GitHub, and feedback links once their destinations and wording are confirmed.
- Create a content-alignment worksheet with draft placeholders and explicit questions for the team meeting.
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

### Phase 1 - Confirmed content groundwork

- [x] Apply the stakeholder's proposed metadata and copy to existing sections whose functionality is already confirmed → verify: the homepage uses the builder-first proposition without introducing unverified capabilities.
- [x] Update existing navigation, hero, install, feature, technology, roadmap, and footer CTAs only where their destinations and status are known → verify: all links resolve to `edge-studio-technology` or another approved destination and no placeholder link is public.
- [x] Run the relevant quality gates and commit the confirmed first content pass as an independent checkpoint → verify: formatting, lint, type-check/build, pre-render, and security checks pass.

### Phase 2 - Alignment groundwork

- [ ] Create a content-alignment worksheet covering minimum requirements, uninstall/rollback, capability status, proof/data flows, community destinations, naming, and legal/privacy details → verify: every unresolved item has proposed placeholder wording, a concrete question, an owner, and a decision field for the team meeting.
- [ ] Add the uninstall/rollback requirement to the appropriate product backlog without inventing an implementation → verify: the backlog item identifies the expected user outcome and remains outside this website implementation.
- [ ] Prepare draft structures for Why proof?, Build ideas, How it works, status labels, and community/Marketplace content without publishing unconfirmed claims → verify: drafts distinguish available now, in progress, coming soon, and withheld content.
- [ ] Commit the alignment materials as a separate checkpoint → verify: the diff contains documentation and non-public groundwork only.

### Phase 3 - Post-alignment implementation

- [ ] Record team decisions in the alignment worksheet and update the approved public-copy set → verify: every public claim and CTA has an owner-approved status and destination. **Not done — no worksheet was produced (Phase 2 skipped); 002 implemented from the content-review doc directly instead.**
- [x] Add Why proof?, Build ideas, and How it works components, export them from `src/components/index.tsx`, and place them in the approved order in `src/App.tsx` → verify: each section explains a distinct part of the Connect → Automate → Prove journey and examples do not imply nonexistent demos.
- [ ] Complete `Navbar`, `LandingHero`, install guidance, `FeatureSection`, `PoweredBySection`, `RoadmapTimeline`, closing CTA, and `SiteFooter` → verify: current versus future functionality is unambiguous and no monetisation promise reads as available now. **`Navbar`/`LandingHero`/`PoweredBySection`/`RoadmapTimeline`/closing CTA/`SiteFooter` done via 002; install guidance (prerequisites, safety language) still blocked on confirmed minimum Pi/OS requirements.**
- [x] Apply only approved consistency changes to `src/pages/LegalPage.tsx` → verify: Terms and Privacy remain marked draft and accurately describe user-selected external data flows without previewing unlaunched Marketplace behavior.
- [x] Review responsive layout, keyboard/focus behavior, reduced motion, heading order, link safety, image alt text, and static-site privacy constraints → verify: browser checks pass at mobile and desktop widths with no console, overflow, navigation, accessibility, CSP, or external-resource regressions.
- [x] Run all quality gates and update `CHANGELOG.md` and project tracking docs → verify: all checks pass and `/`, `/terms`, and `/privacy` contain the approved metadata and copy in generated HTML.

## Risks / open questions

- The canonical organisation is confirmed as `edge-studio-technology`, but the install script itself must remain inspectable and its requirements still need to be documented.
- The feedback proposes more capabilities than the current website alone can substantiate. Owner confirmation, product docs, or working demos are required before those claims move into public copy.
- Adding three sections and a closing CTA may make the page too long; keep each section concise and validate mobile scanability before adding richer project media.
- A subscribe form or embedded community widget would cross the site's current static/privacy boundary and needs a separate reviewed plan.
- The Phase 1 responsive audit found no console or overflow failures, but its heuristic focus and intrinsic-image-size warnings should be checked manually during the Phase 3 accessibility review.

## Definition of done

- The approved builder-first journey is present from metadata through closing CTA, with truthful status labels and working destinations.
- No claim requiring confirmation is published without recorded approval or supporting product evidence.
- The public site remains static, self-hosted, responsive, accessible, pre-rendered, and compliant with existing browser-security rules.
- All repository quality gates pass and the content change is documented.
