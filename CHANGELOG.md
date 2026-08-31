# Changelog

## [Unreleased]

### [CHANGED 2026-08-31] — Relabeled the hero docs CTA

#### Changed

- Relabeled the hero "Read the docs" link to "Get started"; it and the shared navbar docs link still point to the wiki home, which now leads with the new [Getting Started](https://github.com/edge-studio-technology/edge-studio/wiki/Getting-Started) guide.

### [CHANGED 2026-08-31] — Refined the How it works journey

#### Changed

- Reused the Connect and Share symbols in the feature tabs, renamed the Minima feature to capability-focused Ledger while retaining clear Minima attribution, standardized product naming to Minima, simplified the journey cards to a centered title-first layout with a cleaner tablet width, and positioned their connecting arrows across both cards while keeping them beneath the sticky navigation.

### [CHANGED 2026-08-31] — Added switchable proof banner palettes

#### Changed

- Added one centralized setting for switching the proof cards between the `es_proof_01–03` and `es_proof_04–06` image sets.

### [CHANGED 2026-08-31] — Animated builder project ideas

#### Changed

- Turned the builder project cards into a spacious, softly edge-faded carousel with pause and subtle card enlargement on hover, plus a static reduced-motion mode.
- Unified the first project card with the other project-idea cards while retaining the purple brand accent.

### [CHANGED 2026-08-31] — Refined feature preview framing

#### Changed

- Reframed the Proofs and Minima screenshots and retargeted each animated cursor to keep important interface details visible.

### [FIXED 2026-08-31] — Stabilized feature tab height

#### Fixed

- Kept the feature content panel at a consistent height so switching between tabs no longer shifts the surrounding layout.

### [CHANGED 2026-08-31] — Aligned landing-section headers

#### Changed

- Moved the Why proof and Build ideas eyebrows into their own rows so each heading aligns cleanly with its description.

### [CHANGED 2026-08-31] — Added image banners to proof cards

#### Changed

- Replaced the Why proof card icons with focused image banners that reinforce origin, timing, and record integrity.

### [ADDED 2026-08-31] — Added builder project and proof guidance

#### Added

- Added Why proof, Build ideas, and How it works sections that explain the builder journey and clearly label example projects and roadmap capabilities.

### [CHANGED 2026-08-31] — Reframed the homepage for Raspberry Pi builders

#### Changed

- Updated the homepage metadata and confirmed product copy around building proof-backed Raspberry Pi projects while retaining the existing documentation links.

### [CHANGED 2026-08-19] — Hardened the container supply chain and runtime

#### Changed

- Excluded local environment and editable design-source files from releases, pinned automatically updated base images, restricted the container runtime, and added a live security-header CI check.

### [CHANGED 2026-08-19] — Hardened production browser responses

#### Changed

- Added a restrictive browser security-header policy to every Nginx response and documented the website's concrete privacy, secret-handling, and deployment rules.

### [FIXED 2026-08-19] — Restored partner icon animations

#### Fixed

- Started the Powered by partner icon loops after hydration so their ambient motion works on the statically rendered landing page.

### [FIXED 2026-08-17] — Restored landing-page motion after prerendering

#### Fixed

- Started guided preview cursors after hydration and activated the hero pointer effect on movement so both hero and Devices motion work immediately after SSG rendering.

### [CHANGED 2026-08-17] — Pre-rendered public routes with Vike

#### Changed

- Replaced the React Router SPA with Vike filesystem routes that generate content-bearing HTML and route metadata for the home, terms, and privacy pages.
- Updated the production container to serve `dist/client` directly and return 404 for unknown URLs instead of falling back to the home page.

### [ADDED 2026-08-14] — Added production container deployment

#### Added

- Added a multi-stage Docker image and Compose service that serves the Vite site from unprivileged Nginx on VPS port 4146 with SPA routing and health checks.

### [CHANGED 2026-08-14] — Simplified feature tab styling

#### Changed

- Replaced the active feature tab's rounded outline with a square, bottom-border-only treatment.

### [CHANGED 2026-08-14] — Added an alternate hero cursor experiment

#### Changed

- Replaced the previous satin cursor treatment with a single transparent Motion-powered violet circle that follows the pointer without deforming.

### [CHANGED 2026-08-13] — Added roadmap hover movement

#### Changed

- Added a subtle rightward hover shift to roadmap cards while keeping timeline markers fixed and respecting reduced-motion preferences.

### [CHANGED 2026-08-13] — Added ambient motion to partner icons

#### Changed

- Added slow, offset idle movement to the Minima and Integritas icons while preserving pointer response and reduced-motion behavior.
- Reordered and staggered the partner marks so Integritas sits above Minima on desktop and appears first in the mobile stack.

### [CHANGED 2026-08-13] — Added product imagery to the landing showcase

#### Changed

- Replaced feature placeholders with focused Edge Studio screenshots and added reduced-motion-aware guided cursors to the feature slides and hero preview.
- Replaced the dashboard icon with a cycling Connect, Automate, and Prove typewriter treatment, with a static reduced-motion fallback.

### [CHANGED 2026-08-13] — Aligned website copy with the Edge Studio product

#### Changed

- Rewrote the landing page, roadmap, preview, metadata, and legal drafts around Edge Studio's current local-first device, workflow, Minima, and Integritas capabilities.

### [FIXED 2026-08-13] — Restored the Integritas partner icon

#### Fixed

- Corrected the Integritas SVG asset path so its icon renders in the Powered by section.

### [CHANGED 2026-08-13] — Added partner branding to the landing page

#### Changed

- Replaced the Powered by placeholders with linked Minima and Integritas icon-and-wordmark lockups, shape-aware shadows, and pointer-responsive movement matching the hero preview.

### [ADDED 2026-08-13] — Added an alternate violet hero background

#### Added

- Added a selectable dark violet hero treatment while preserving the original interactive grid variant for easy comparison.
- Added a reduced-motion-aware satin light sweep that responds to pointer movement on the violet treatment.

### [CHANGED 2026-08-05] — Expanded Marketplace roadmap positioning

#### Changed

- Connected community-built modules with building scale pools, monetizing data assets, and creating data products.

### [CHANGED 2026-08-05] — Simplified the hero checkerboard

#### Changed

- Removed the bottom fade and increased the hero checkerboard spacing so the pattern remains clean and consistent across the section.

### [CHANGED 2026-08-05] — Refined landing section color rhythm

#### Changed

- Alternated white and light-grey landing sections, removed internal partner dividers, and standardized full-width section separators.

### [ADDED 2026-08-05] — Added technology partner section

#### Added

- Added a landing-page section promoting Minima and Integritas with clearly labeled placeholders for their final logos.

### [CHANGED 2026-08-05] — Centered feature showcase content

#### Changed

- Vertically centered the feature showcase card contents for a more balanced layout.

### [CHANGED 2026-08-05] — Updated roadmap priorities

#### Changed

- Replaced Automation flows with More integrations, in-app IDE module building, and a V2 Marketplace roadmap sequence.

### [CHANGED 2026-08-05] — Refined landing-page visual consistency

#### Changed

- Matched the Dashboard icon size to the Data sources icon and refined the hero GitHub link styling.

### [CHANGED 2026-08-05] — Emphasized the hero install prompt

#### Changed

- Turned the install heading into a larger tab connected to the command box, moved the prompt closer to the main hero content, and placed its script link below the box on mobile.

### [FIXED 2026-08-05] — Restored layered hero cursor motion

#### Fixed

- Restored the cursor-following glow, highlighted grid, and crisp glow outline lost during the component refactor.
- Kept parallax movement on the hero preview only and returned it to center when the pointer leaves the hero.

### [FIXED 2026-08-05] — Hardened responsive styling and accessibility

#### Fixed

- Added visible keyboard focus states and consistent mobile touch targets across navigation, hero actions, install controls, and footer links.
- Made the navbar sticky in document flow, locked background scrolling while its menu is open, and added Escape-key dismissal.
- Corrected muted-text contrast, reduced-motion scrolling, and Raspberry Pi image dimensions.
- Replaced utility-class-dependent hero overrides with a scoped component style and removed stale global selectors.
- Fixed the existing React lint errors and added reproducible local Prettier commands for consistent source formatting.

### [CHANGED 2026-08-05] — Reworked the responsive feature showcase

#### Changed

- Rebuilt the feature showcase with an animated detail panel, adaptive tab rail, stable panel sizing, and reduced-motion support.
- Renamed the feature labels to Integritas and Minima for clearer presentation.

### [ADDED 2026-08-04] — Layered hero cursor interactions

#### Added

- Added grid highlight, halo, pulse, trail, parallax, and accent responses.

### [FIXED 2026-08-04] — Removed the navbar-to-hero gap

#### Fixed

- Removed the gap between the fixed navbar and the hero section.

### [ADDED 2026-08-04] — Added reduced-motion-aware cursor glow

#### Added

- Added a cursor glow layered between the hero checker background and content.

### [ADDED 2026-08-04] — Added tablet navigation outside-click dismissal

#### Added

- Added outside-click dismissal for the tablet navigation drawer.

### [CHANGED 2026-08-04] — Kept the responsive navbar visible

#### Changed

- Fixed the responsive navbar to remain visible while scrolling on mobile and tablet.

### [ADDED 2026-08-04] — Added Motion-powered transitions

#### Added

- Added navigation, modal, hero, feature-preview, and roadmap transitions with reduced-motion support.

### [CHANGED 2026-08-04] — Refined roadmap card states

#### Changed

- Made active roadmap cards solid brand-color blocks to distinguish them from selectable cards.

### [CHANGED 2026-08-04] — Refined link affordances

#### Changed

- Added consistent hover underlines and refined hero GitHub link styling.

### [FIXED 2026-08-04] — Replaced text arrows with external-link icons

#### Fixed

- Replaced text arrow characters with right-aligned external-link icons.

### [CHANGED 2026-08-04] — Standardized external-link indicators

#### Changed

- Added consistent external-link indicators to GitHub links and Docs actions.

### [CHANGED 2026-08-04] — Simplified the install command panel

#### Changed

- Simplified the install command panel and restored the text-based Raspberry Pi navbar mark.

### [FIXED 2026-08-04] — Connected feature tabs to preview content

#### Fixed

- Connected feature tab selection to responsive preview content.

### [FIXED 2026-08-04] — Restored desktop feature preview height

#### Fixed

- Restored the desktop feature preview height to match the tab grid.

### [CHANGED 2026-08-04] — Standardized feature preview styling

#### Changed

- Standardized feature preview styling across all breakpoints.

### [FIXED 2026-08-04] — Removed duplicate feature previews

#### Fixed

- Removed duplicate responsive feature previews and aligned mobile/tablet styling.

### [FIXED 2026-08-04] — Preserved tablet feature image placement

#### Fixed

- Kept the tablet feature image outside the tabs and description wrapper.

### [CHANGED 2026-08-04] — Split feature tab layouts by breakpoint

#### Changed

- Split feature tab layouts cleanly across mobile, tablet, and desktop.

### [CHANGED 2026-08-04] — Removed tablet feature tab title spacing

#### Changed

- Removed tablet feature tab title top spacing.

### [FIXED 2026-08-04] — Corrected responsive feature tab order

#### Fixed

- Corrected tablet tab orientation and mobile feature content order.

### [FIXED 2026-08-04] — Restored desktop feature tab layout

#### Fixed

- Restored the desktop feature tab layout after responsive changes.

### [CHANGED 2026-08-04] — Removed the tablet feature content wrapper

#### Changed

- Removed the tablet feature content wrapper.

### [CHANGED 2026-08-04] — Refined mobile and tablet feature tabs

#### Changed

- Refined mobile and tablet feature tab layouts.

### [CHANGED 2026-08-04] — Combined responsive feature content panels

#### Changed

- Made feature tabs icon-only with combined responsive content panels.

### [CHANGED 2026-08-04] — Added responsive navigation close controls

#### Changed

- Added an explicit close button inside responsive navigation menus.

### [ADDED 2026-08-04] — Added responsive navigation menus

#### Added

- Added full-screen mobile and sliding tablet navigation menus.

### [CHANGED 2026-08-04] — Improved navbar small-screen fit

#### Changed

- Made the shared navbar fit smaller screens.

### [CHANGED 2026-08-04] — Increased roadmap phase badge size

#### Changed

- Increased roadmap phase badge size.

### [CHANGED 2026-08-04] — Styled roadmap phase labels as badges

#### Changed

- Styled roadmap phase labels as compact badges.

### [FIXED 2026-08-04] — Layered roadmap markers above connectors

#### Fixed

- Layered roadmap markers above connectors with opaque fills.

### [CHANGED 2026-08-04] — Repositioned roadmap phase labels

#### Changed

- Moved roadmap phase labels inside cards and enlarged milestone copy.

### [CHANGED 2026-08-04] — Enlarged roadmap phase markers

#### Changed

- Moved roadmap phase labels to large markers beside each card.

### [CHANGED 2026-08-03] — Made roadmap milestones vertical

#### Changed

- Made roadmap milestones vertical and moved landing content into reusable constants.

### [CHANGED 2026-08-03] — Added smooth navbar brand scrolling

#### Changed

- Made the navbar brand scroll smoothly to the top.

### [CHANGED 2026-08-03] — Highlighted active roadmap cards

#### Changed

- Highlighted active roadmap cards with the primary brand border.

### [CHANGED 2026-08-03] — Added roadmap navigation

#### Changed

- Removed section dividers and added a roadmap navbar link.

### [FIXED 2026-08-03] — Replaced the unreliable grid mask

#### Fixed

- Replaced the unreliable grid mask with a visible hero fade overlay.

### [FIXED 2026-08-03] — Made the hero grid fade cross-browser

#### Fixed

- Made the hero grid background fade reliably across browsers.

### [CHANGED 2026-08-03] — Simplified the roadmap layout

#### Changed

- Simplified the roadmap into aligned points, lines, and milestone boxes.

### [CHANGED 2026-08-03] — Reworked the roadmap timeline

#### Changed

- Reworked the roadmap into a connected timeline component.

### [ADDED 2026-08-03] — Added the roadmap section

#### Added

- Added a roadmap section to the landing page.

### [CHANGED 2026-08-03] — Added a text Raspberry Pi mark variant

#### Changed

- Added a text variant to the Raspberry Pi mark and enabled it in the navbar.

### [FIXED 2026-08-03] — Fixed Raspberry Pi mark sizing

#### Fixed

- Fixed Raspberry Pi mark sizing by removing the conflicting width utility.

### [CHANGED 2026-08-03] — Added configurable Raspberry Pi mark sizing

#### Changed

- Added configurable sizing to the Raspberry Pi mark.

### [CHANGED 2026-08-03] — Replaced the text Raspberry Pi badge

#### Changed

- Replaced the text Raspberry Pi badge with the Raspberry Pi SVG mark.

### [CHANGED 2026-08-03] — Simplified the compact Pi marker

#### Changed

- Simplified the compact Pi marker to text-only styling.

### [CHANGED 2026-08-03] — Switched the navbar to the compact Pi marker

#### Changed

- Switched the navbar to the compact Pi marker.

### [CHANGED 2026-08-03] — Extracted the Raspberry Pi navbar marker

#### Changed

- Extracted the Raspberry Pi navbar marker into a reusable component with a compact Pi variant.

### [CHANGED 2026-08-03] — Added a tilted Raspberry Pi navbar marker

#### Changed

- Added a tilted Raspberry Pi marker to the navbar brand.

### [CHANGED 2026-08-03] — Made the shared navbar sticky

#### Changed

- Made the shared navbar sticky while scrolling.

### [CHANGED 2026-08-03] — Removed the hero section bottom border

#### Changed

- Removed the hero section bottom border.

### [CHANGED 2026-08-03] — Softened the hero grid fade

#### Changed

- Softened the hero background grid fade.

### [FIXED 2026-08-03] — Restore compact legal-page back arrow

#### Fixed

- Restored the original compact arrow treatment for the legal-page back link.

### [CHANGED 2026-08-03] — Refine legal-page back link

#### Changed

- Increased the back-arrow treatment for a longer, more visible navigation cue.

### [CHANGED 2026-08-03] — Add legal-page back navigation icon

#### Changed

- Added a left-arrow icon to the legal-page “Back to home” navbar action.

### [CHANGED 2026-08-03] — Preserve page-specific navbar actions

#### Changed

- Added a legal-page navbar variant so the shared component retains the landing-page links while legal pages keep their “Back to home” action.

### [CHANGED 2026-08-03] — Share the marketing navbar

#### Changed

- Reused one shared navbar across the landing page and legal pages to keep navigation styling and links synchronized.

### [CHANGED 2026-08-03] — Use Edge Studio logo assets

#### Changed

- Replaced the placeholder navbar mark with the provided white Edge Studio logo and added the provided purple mark as the site favicon.

### [ADDED 2026-08-03] — Edge Studio marketing app

- Replaced the Vite starter screen with the responsive Edge Studio mockup experience, including dashboard preview, install commands, feature tabs, and navigation.

### [ADDED 2026-07-27] — Usage guides for the imported design/UX skills

#### Added

- `docs/guides/` — usage guides for the 29 imported design/frontend skills and the `design-review`/`design-plan` agent+skills: `README.md` (index), `taste-and-visual-direction.md`, `design-systems-and-tokens.md`, `image-generation.md`, `motion-and-transitions.md`, `design-review-and-qa.md`, `misc-tooling.md`.

#### Fixed

- `design` skill (`.claude/skills/design/SKILL.md`, `.agents/skills/design/SKILL.md`, and `scripts/cip/generate.py` in both trees) referenced `~/.claude/skills/design/scripts/...` (a user-home path from the upstream repo's own install layout) instead of the project-relative path — corrected to `.claude/skills/design/scripts/...` and `.agents/skills/design/scripts/...` respectively, matching the same fix already applied to `ui-ux-pro-max`.

### [ADDED 2026-07-27] — Ported design-review/design-plan to `.agents/` as generic skills

#### Added

- `.agents/skills/design-review/` — same 7-phase live UI review methodology as the Claude Code `design-review` subagent, adapted so a non-Claude-Code agent (Codex, OpenCode, Kimi Code, etc.) runs it directly instead of dispatching an isolated sub-agent. Uses MCP browser tools if the host tool has them configured, otherwise falls back to `scripts/design-audit.mjs`.
- `.agents/skills/design-plan/` — same design-system-first workflow as the Claude Code `/design-plan` command, adapted from `$ARGUMENTS` substitution to context-triggered invocation.

#### Fixed

- `.agents/skills/ui-ux-pro-max/SKILL.md` referenced `.claude/skills/ui-ux-pro-max/scripts/search.py` (copied verbatim from the `.claude/` mirror without adjusting the tree-relative path) — corrected to `.agents/skills/ui-ux-pro-max/scripts/search.py`.

#### Changed

- `CLAUDE.md`/`AGENTS.md` "Available Agents"/"Available Commands" sections now note that `design-review`/`design-plan` methodology is available on both sides, even though the subagent/slash-command _mechanism_ remains Claude Code-only.

### [ADDED 2026-07-27] — Imported design/frontend skills, design-review agent, Playwright MCP

#### Added

- 29 design/frontend skills imported into both `.claude/skills/` and `.agents/skills/` from four external repos: `anthropics/skills` (`frontend-design`, `webapp-testing`, `theme-factory`, `canvas-design`, `web-artifacts-builder`, `algorithmic-art`, `mcp-builder`, `skill-creator` — Apache-2.0), `Leonxlnx/taste-skill` (13 skills: `taste-skill`, `taste-skill-v1`, `redesign-skill`, `brutalist-skill`, `minimalist-skill`, `soft-skill`, `gpt-tasteskill`, `stitch-skill`, `image-to-code-skill`, `imagegen-frontend-web`, `imagegen-frontend-mobile`, `brandkit`, `output-skill` — MIT), `nextlevelbuilder/ui-ux-pro-max-skill` (`banner-design`, `brand`, `design`, `design-system`, `slides`, `ui-styling`, `ui-ux-pro-max` — MIT), and `Jakubantalik/transitions.dev` (`transitions-dev`, 27 CSS transition references — no upstream license declared). Each imported `SKILL.md` carries a one-line provenance note. See the new "Design & Frontend (imported)" section in `CLAUDE.md`/`AGENTS.md` for the full list and a note on deliberate overlap between several of these skills.
- `design-review` subagent (`.claude/agents/design-review.md`, Claude Code only) — drives a real browser through Playwright/Chrome DevTools MCP for a 7-phase live UI review (interaction, responsiveness, visual polish, WCAG 2.1 AA, edge cases, console health). Imported from `nextlevelbuilder/ui-ux-pro-max-skill` (MIT).
- `/design-plan` and `/design-review` slash commands (`.claude/commands/`, Claude Code only).
- `.mcp.json` configuring the `playwright` and `chrome-devtools` MCP servers the `design-review` agent depends on.
- `scripts/design-audit.mjs` — heuristic, MCP-free fallback design audit (horizontal overflow, contrast, focus visibility, tap targets, etc.) used by `design-review` when a browser can't be opened via MCP.
- `playwright` devDependency, required by `scripts/design-audit.mjs`.

#### Try it

- `/design-review http://localhost:5173` after `npm run dev` to run the live 7-phase review.
- `node scripts/design-audit.mjs --url http://localhost:5173` for the heuristic-only fallback.

### [ADDED 2026-07-25] — Roadmap/plan tracking, README no longer Kimi-scoped

#### Added

- `roadmap` skill (both trees) to create/maintain a numbered roadmap in `docs/roadmaps/`, linking plans to milestones.
- `project-sync` skill (both trees) to synchronize `docs/TASKS.md`, `docs/SESSION.md`, active plans, and roadmap milestones after meaningful work.
- `docs/plans/archive/`, `docs/roadmaps/`, and `docs/roadmaps/archive/` directories (with `.gitkeep`) to support the rewritten `plan` skill and the new `roadmap` skill.

#### Changed

- `plan` skill now writes a persistent, numbered plan file to `docs/plans/nnn-name-of-plan.md` (fixed template: Goal, Scope, Checklist with per-step verify, Risks/open questions, Definition of done) instead of an inline-only plan. It reads `docs/roadmaps/` first when a roadmap exists, links the plan to its milestone, and on completion sets `Status: Completed` and moves the file to `docs/plans/archive/` without renumbering.
- `commit` skill now generates a Conventional Commits subject line only — never a body, bullet list, or trailers, even for larger changes.
- `changelog-reminder` skill now explicitly coordinates with `release`: a changelog entry is required before a version bump, not just for product behavior changes.
- `release` skill now prefers `npm version patch|minor|major` to handle the manifest/lockfile bump, release commit, and tag in one step for npm projects, alongside the existing manual steps as the package-manager-agnostic fallback.
- `README.md` no longer frames the template as Kimi Code-first — Kimi Code and Claude Code are presented as equal options, both reading from a shared `AGENTS.md` + Agent Skills foundation.

### [CHANGED 2026-07-19] — Rename .kimi/ to .agents/, add Claude Code parallel config

#### Changed

- Renamed `.kimi/` to `.agents/` throughout (directory, `AGENTS.md`, and all internal references) — Kimi Code no longer reads project config from `.kimi/`.
- `commit` skill now caps commit body length (2-4 sentences, no per-file bullet list) and avoids restating `CHANGELOG.md` detail.
- `docs` skill now also checks `docs/TASKS.md` for behavior changes that affect current or upcoming work.
- `quality-gate` skill now includes a `<FORMAT_CHECK_COMMAND>` step alongside lint/typecheck/test.

#### Added

- `CLAUDE.md` + `.claude/` — a parallel Claude Code config mirroring `AGENTS.md` + `.agents/`, kept in sync by convention (see "Keep in sync" in either file). `.claude/skills/review` and `.claude/skills/verify` are named `project-review` and `project-verify` to avoid colliding with Claude Code's built-in `review`/`code-review` and `verify` skills.
- `release` skill (both trees) to bump the project version, sync the lockfile, cut `CHANGELOG.md`'s `[Unreleased]` section, and tag the release commit.
- `.claude/settings.json` with `attribution.commit: ""` (no `Co-Authored-By` trailer by default) and a starter `permissions` allow/ask/deny list: read-only and lint/format/typecheck/test commands allowed, `git add`/`commit`/`push`/`stash` and `npm install`/`ci` ask first, destructive commands (`rm -rf`, `git push --force`, `git reset --hard`, `git clean`, `pkill`, etc.) denied.
- `README.md` documents the dual `.agents/`/`.claude/` structure and quick-start steps for both tools.

### [ADDED 2026-07-08] — Closed-loop engineering skills

#### Added

- `closed-loop` skill for bounded maker/checker loops with a deterministic gate.
- `verify` skill as the checker counterpart in closed-loop work.
- `<GATE_COMMAND>` placeholder in `AGENTS.md` for a unified local quality gate.

#### Changed

- `fix` skill now defines the gate up front, runs the narrowest check first, iterates on the first concrete failure, and ends with `/skill:verify`.
- `plan` skill now flags when a task is a good candidate for closed-loop execution.
- `quality-gate` skill now prefers `<GATE_COMMAND>` and reports its overall result when available.
- `README.md` lists the new skills and includes `/skill:closed-loop` and `/skill:verify` in usage examples.

### [ADDED 2026-07-06] — Project-scoped guardrail skills

#### Added

- `bash-guard` skill to block destructive shell commands.
- `protect-env` skill to block direct `.env`, `.env.*`, and `.envrc` file edits.
- `format` skill to run the formatter on edited files.
- `typecheck` skill to run the type checker.
- `changelog-reminder` skill to enforce CHANGELOG updates.
- `task-check` skill to surface running background tasks.
- `spec` skill for PRD-first planning.
- Pre-flight `git status` reminder in `plan`, `feature`, and `fix` skills.

### [CHANGED 2026-07-06] — Remove user-config-only hooks

#### Changed

- Deleted `.kimi/hooks/`, `kimi-config.example.toml`, and `scripts/install-kimi-hooks.sh` because Kimi Code cannot load hooks from the project level.
- Guardrails now live as project-scoped skills in `.kimi/skills/`.

### [CHANGED 2026-07-04] — Simplify commit skill

#### Changed

- `.kimi/skills/commit/SKILL.md` now only generates and presents the Conventional Commits message.
