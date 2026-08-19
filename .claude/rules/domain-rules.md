# Domain Rules

These rules apply to the public Edge Studio website. They do not describe the separately deployed Edge Studio application.

## Data handling

- Keep the website static: it must not collect form submissions, identifiers, analytics events, or other visitor data unless the privacy notice and this policy are updated first.
- Do not add cookies, browser storage, tracking pixels, or third-party analytics without an explicit privacy and security review.
- Keep fonts, scripts, styles, and images self-hosted. Any new third-party browser connection requires review and must be allowed explicitly by the Content Security Policy.

## Browser security

- Production responses must retain the security headers defined in `security-headers.conf`; changes to allowed CSP sources require review.
- Links opened in a new tab must use `rel="noreferrer"` or the stricter `rel="noopener noreferrer"`.
- Do not render untrusted HTML or introduce `dangerouslySetInnerHTML`, `eval`, or dynamically constructed executable code.

## Secrets and build output

- The frontend and generated `dist/client` output must contain no credentials, private keys, access tokens, or backend-only configuration.
- Treat every `VITE_` variable as public because Vite can include it in browser bundles; never place a secret in one.
- Keep secret files and local tooling out of the Docker build context through `.dockerignore`, and copy only `dist/client` into the runtime image.

## Deployment

- Serve production files from the unprivileged Nginx runtime image and keep the Compose port bound to localhost behind the TLS-terminating reverse proxy.
- The public deployment must use HTTPS. The reverse proxy must preserve or strengthen the application security headers.
- Dependency updates must retain the lockfile, use `npm ci` in builds, and pass the production dependency audit before release.
