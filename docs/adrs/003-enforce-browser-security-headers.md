# ADR 003: Enforce browser security headers at the static web server

- Status: Accepted
- Date: 2026-08-19

## Context

The production site is pre-rendered and served by Nginx behind a TLS-terminating reverse proxy. The site has no forms, API, analytics, or third-party runtime assets, but the original Nginx configuration supplied only cache headers. That left browsers without an application-owned content policy if the edge proxy did not add one.

Vike emits executable modules as same-origin files and non-executable page context as inline JSON. Motion and server-rendered components emit inline `style` attributes, so blocking all inline styles would currently break the rendered interface.

## Decision

Define the browser security headers once in `security-headers.conf` and include them in every Nginx content location, including fingerprinted assets. Restrict executable scripts, connections, fonts, images, forms, frames, and object embedding to the minimum required by the static site. Allow inline styles until the application can render without them.

Send HSTS from the application response because the public reverse proxy serves that response over HTTPS; direct plain-HTTP access remains bound to localhost and browsers ignore HSTS received over HTTP. The reverse proxy may strengthen these headers but must not remove them.

## Alternatives considered

- Configure headers only at the TLS reverse proxy: rejected because that configuration is not versioned in this repository and could vary between deployments.
- Use CSP hashes or nonces for styles: rejected for now because runtime and server-rendered inline style attributes would require broader application changes.
- Put headers only at Nginx's `server` level: rejected because the asset location defines its own cache header, which prevents inheritance of server-level `add_header` directives.

## Consequences

### Positive

- The shipped container supplies a consistent CSP, clickjacking protection, MIME-sniffing protection, referrer policy, permissions policy, opener isolation, and HSTS.
- New external browser dependencies fail closed until the CSP is deliberately updated.

### Negative

- The CSP retains `style-src 'unsafe-inline'`, so style injection is not fully mitigated.
- Deployments that introduce external assets or APIs must update and review the CSP.

## References

- `nginx.conf`
- `security-headers.conf`
- `Dockerfile`
- [ADR 002](002-use-vike-for-static-site-generation.md)
