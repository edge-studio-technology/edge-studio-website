# Spec: Vike SSG Migration

Status: Completed

## Goal

Convert the existing React/Vite website to Vike's React integration and pre-render every public route as static HTML while preserving the current UI and Nginx deployment model.

## Non-goals

- Redesigning the website or changing product copy.
- Adding server-side APIs, runtime rendering, dynamic routes, or a Node.js production server.
- Introducing a second routing layer alongside Vike.

## Acceptance criteria

- `npm run dev`, `npm run build`, and `npm run preview` use Vike's CLI.
- Vike's built-in filesystem router owns `/`, `/terms`, and `/privacy`; React Router is no longer installed or used.
- A production build pre-renders content-bearing HTML documents for all three routes under `dist/client/`.
- The pre-rendered pages hydrate successfully and retain the existing interactive navigation, motion, and responsive behavior.
- Each route has an appropriate title and description, and the existing favicon, viewport, theme color, and language metadata remain present.
- The production image copies `dist/client`, and Nginx serves generated route documents without rewriting unknown URLs to the home page.
- Direct requests to `/`, `/terms`, and `/privacy` succeed in the production container; an unknown path returns 404.
- Lint, formatting, type-checking, and the production build pass.

## Files that will change

- `vite.config.ts` — register the Vike Vite plugin.
- `package.json` and `package-lock.json` — switch scripts to the Vike CLI and remove React Router.
- `pages/+config.ts` — enable `vike-react`, React strict mode, and full pre-rendering.
- `pages/+Layout.tsx` and `pages/+Head.tsx` — provide the shared stylesheet and global HTML metadata.
- `pages/index/+Page.tsx`, `pages/terms/+Page.tsx`, and `pages/privacy/+Page.tsx` — expose the current React screens through Vike filesystem routes with route-specific metadata.
- `src/components/patterns/Navbar.tsx` and `src/components/patterns/SiteFooter.tsx` — replace React Router links with standard anchors intercepted by Vike's client router.
- `src/main.tsx`, `src/components/patterns/ScrollToTop.tsx`, and `index.html` — remove the superseded SPA entry point and router-only scroll helper.
- `src/components/index.tsx` — remove any export made obsolete by deleting the scroll helper.
- `tsconfig.app.json` — include the root Vike page files in project type-checking.
- `Dockerfile` and `nginx.conf` — serve Vike's `dist/client` output and resolve generated per-route HTML.
- `README.md` — document Vike SSG development, build output, and static deployment behavior.
- `docs/adrs/001-serve-static-build-with-nginx.md` and `docs/adrs/002-use-vike-for-static-site-generation.md` — supersede the SPA-fallback decision and record Vike SSG as the routing/rendering architecture.
- `CHANGELOG.md` — record the new static-generation behavior.

## Risks / open questions

- Build-time rendering can expose browser-only assumptions. Existing components use browser APIs inside effects or event handlers, which should be safe during pre-rendering, but the build is the authoritative check.
- Vike emits deployable assets in `dist/client/` rather than Vite's current `dist/` root, so the container copy path must change in the same commit.
- Vike client routing automatically intercepts same-origin `<a>` links and provides scroll restoration; hash navigation and reduced-motion behavior will be checked in a browser after the migration.
- The project configuration documents still contain placeholders. This migration will update concrete Vike-related setup documentation only, rather than attempting an unrelated rewrite of all placeholders.

## Verification plan

- Run formatting, ESLint, and TypeScript project checks.
- Run `npm run build` and assert that `dist/client/index.html`, `dist/client/terms/index.html`, and `dist/client/privacy/index.html` exist and contain page content and route metadata.
- Run the production preview and use browser checks for all routes, navigation, hash links, hydration, responsive layout, and console errors.
- Build and start the Docker Compose service, verify the three direct routes, and verify that an unknown route returns 404.
- Audit the manifest and lockfile for Vike/Vite/React compatibility and consistency.

## Verification results

- Formatting, ESLint, TypeScript, and `npm run build` pass.
- Vike pre-renders content-bearing HTML and route metadata for `/`, `/terms`, and `/privacy` under `dist/client/`.
- Browser checks pass for hydration, client navigation, hash scrolling, the mobile menu, five responsive viewport tiers, and console health.
- The production container is healthy; the three public routes return 200 and an unknown route returns 404.
- The manifest, lockfile, and installed dependency tree are consistent, with React Router removed.
