# Edge Studio Website

The public website for Edge Studio, built with React, TypeScript, and Vite.

## Local development

```bash
npm ci
npm run dev
```

## Docker deployment

Build and start the production container with Docker Compose:

```bash
docker compose up --detach --build
```

The site is then available on the VPS at `http://127.0.0.1:4146`. Point your TLS-terminating reverse proxy at that address. Port `4146` is bound to localhost intentionally, so the container cannot bypass the proxy and expose plain HTTP publicly.

To deploy an update, pull the new source and run the same command again. To inspect the service, use `docker compose ps` or `docker compose logs website`.

The container listens internally on port `8080`, includes a health check, and serves client-side routes with an HTML fallback. If the service must be accessed directly from another machine, change the Compose port mapping from `127.0.0.1:4146:8080` to `4146:8080` and secure that port with the VPS firewall.

## Available scripts

```bash
npm run dev          # Start the Vite development server
npm run build        # Type-check and create the production build
npm run lint         # Run ESLint
npm run format:check # Check source formatting
npm run format       # Format source files
npm run preview      # Preview a completed production build locally
```

## Vite template notes

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
