# Edge Studio Website

The public website for Edge Studio, built with React, TypeScript, Vike, and Vite. Vike pre-renders every public route as static HTML at build time.

## Local development

```bash
npm ci
npm run dev
```

Vike's filesystem router serves the public pages at `/`, `/terms`, and `/privacy`.

## Production build

```bash
npm run build
npm run preview
```

The build type-checks the project and writes the deployable static site to `dist/client/`. Each public route has its own content-bearing HTML document, so production does not require a Node.js server or a single-page-app fallback.

## Docker deployment

Build and start the production container with Docker Compose:

```bash
docker compose up --detach --build
```

The site is then available on the VPS at `http://127.0.0.1:4146`. Point your TLS-terminating reverse proxy at that address. Port `4146` is bound to localhost intentionally, so the container cannot bypass the proxy and expose plain HTTP publicly.

To deploy an update, pull the new source and run the same command again. To inspect the service, use `docker compose ps` or `docker compose logs website`.

The container listens internally on port `8080`, includes a health check, and serves the pre-rendered files from `dist/client/`. Nginx resolves generated route directories and returns 404 for unknown URLs instead of rewriting them to the home page. If the service must be accessed directly from another machine, change the Compose port mapping from `127.0.0.1:4146:8080` to `4146:8080` and secure that port with the VPS firewall.

## Available scripts

```bash
npm run dev          # Start the Vike development server
npm run build        # Type-check and pre-render the production site
npm run lint         # Run ESLint
npm run format:check # Check source formatting
npm run format       # Format source files
npm run preview      # Preview the pre-rendered production build locally
```
