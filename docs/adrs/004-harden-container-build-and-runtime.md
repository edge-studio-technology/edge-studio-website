# ADR 004: Harden the container build and runtime

- Status: Accepted
- Date: 2026-08-19

## Context

The website runs as static files in an unprivileged Nginx container, but mutable base-image tags made builds non-reproducible, local environment files could enter the Docker build context, and Compose did not explicitly constrain filesystem writes or Linux capabilities. Security headers also lacked an automated regression check.

## Decision

Pin the Node build image, Nginx runtime image, and CI actions by immutable revisions while retaining readable version labels, and let Dependabot propose weekly Docker, npm, and GitHub Actions updates. Exclude environment files and non-runtime design sources from both commits and the Docker context.

Run the production service with a read-only root filesystem, all Linux capabilities dropped, `no-new-privileges`, and a small non-executable `/tmp` tmpfs required by unprivileged Nginx. Maintain a Docker-based smoke test that starts the container under the same restrictions and asserts security headers on successful, asset-error, and route-error responses. Run that test with the existing quality checks in GitHub Actions.

## Alternatives considered

- Keep floating image tags: rejected because rebuilds could silently use different base contents without a reviewed repository change.
- Pin digests without automated updates: rejected because immutable references require a reliable path for security patches.
- Rely on the image's unprivileged user alone: rejected because a compromised process would retain unnecessary filesystem writes and default container capabilities.
- Check headers manually after deployment: rejected because configuration regressions should fail before merge.

## Consequences

### Positive

- Container inputs are reproducible and update proposals remain automated.
- Local secrets and unused editable design files do not enter the build context or runtime image.
- A compromised web-server process has fewer writable paths and kernel privileges.
- CI verifies both normal project checks and live response headers.

### Negative

- Container startup now depends on a writable `/tmp` tmpfs.
- Developers need Docker and curl to run `npm run test:security` locally.
- Dependabot and GitHub Actions require the repository to be hosted with those GitHub features enabled.

## References

- `Dockerfile`
- `compose.yaml`
- `.dockerignore`
- `.github/dependabot.yml`
- `.github/workflows/security.yml`
- `scripts/security-smoke.sh`
- [ADR 003](003-enforce-browser-security-headers.md)
