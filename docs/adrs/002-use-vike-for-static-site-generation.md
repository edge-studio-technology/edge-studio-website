# ADR 002: Use Vike for static site generation

- Status: Accepted
- Date: 2026-08-17

## Context

The Edge Studio website has three public routes but previously shipped one empty HTML shell and relied on React Router plus an Nginx fallback to render every URL in the browser. That model hides page content and route metadata until JavaScript runs, and it makes unknown URLs return the home page instead of a real 404.

The site has no runtime data or server-side API requirements, so every route can be rendered during the production build while retaining client-side hydration and navigation.

## Decision

Use Vike with `vike-react` as the website's only router and rendering integration. Define `/`, `/terms`, and `/privacy` with Vike filesystem routes, pre-render all pages during `vike build`, and deploy only `dist/client` to unprivileged Nginx.

Use standard same-origin anchors for navigation so Vike's client router can intercept them after hydration. Nginx serves generated files and route directories directly and returns 404 when no generated document exists; it does not use an SPA fallback.

## Alternatives considered

- Keep React Router and add a separate static pre-rendering script: rejected because it would retain two routing/build concerns and require custom route discovery.
- Keep the client-only SPA: rejected because initial HTML would remain content-free and unknown paths would continue to resolve as the home page.
- Add a Node.js production server for runtime SSR: rejected because the site's routes and content are static and do not justify a production application server.

## Consequences

### Positive

- Every public route ships content-bearing HTML with route-specific title and description metadata.
- Client-side navigation and hydration remain available without maintaining a second router.
- The runtime image stays static and unknown URLs return an accurate 404.

### Negative

- Browser-only code must remain inside effects, handlers, or explicit client-only boundaries so pre-rendering can execute safely.
- New public routes must be represented by Vike page files and included in a successful production build before deployment.
- Deployments must copy Vike's `dist/client` output rather than Vite's former `dist` root.

## References

- `pages/+config.ts`
- `vite.config.ts`
- `Dockerfile`
- `nginx.conf`
- [ADR 001](001-serve-static-build-with-nginx.md)
