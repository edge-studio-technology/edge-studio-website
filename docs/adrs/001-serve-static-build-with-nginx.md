# ADR 001: Serve the static build with unprivileged Nginx

- Status: Accepted
- Date: 2026-08-14

## Context

Edge Studio Website is a client-side Vite application that needs a portable production deployment for a VPS or server. The production container only needs to serve the compiled static files, including fallback routing for browser requests handled by React Router.

## Decision

Use a multi-stage Docker build. Node.js installs locked dependencies and produces the Vite build, then an unprivileged Nginx image serves only the generated `dist` directory over port 8080. Docker Compose maps that service to `127.0.0.1:4146` on the host so it remains reachable by a local reverse proxy without exposing plain HTTP publicly. Nginx falls back to `index.html` for client-side routes and gives fingerprinted Vite assets long-lived cache headers. TLS and public routing remain the responsibility of the host reverse proxy.

## Alternatives considered

- Run `vite preview` in production: rejected because it is intended for local build previews rather than as a production server.
- Serve the site from a Node.js process: rejected because the site has no server-side runtime and a Node production layer would add unnecessary code and dependencies.
- Bundle TLS termination into this container: rejected because certificates and multi-service routing are better managed once at the VPS edge.

## Consequences

### Positive

- The runtime image excludes source files, development dependencies, and build tooling.
- The web server runs without root privileges and supports container health checks.
- Direct navigation to client-side routes works correctly.

### Negative

- Deployments require rebuilding the image for frontend changes and build-time Vite configuration.
- A separate reverse proxy or load balancer is required for production TLS.

## References

- `Dockerfile`
- `compose.yaml`
- `nginx.conf`
- `README.md`
