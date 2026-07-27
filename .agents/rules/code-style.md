# Code Style

## <LANGUAGE, e.g. TypeScript>

- Strict mode is on — no `<any>`, no `<@ts-ignore>` without a comment explaining why
- Prefer `<type>` over `<interface>` for plain data shapes; use `<interface>` only when extending
- Export shared types from a single location (`<SHARED_TYPES_PATH, e.g. src/types/>`) when they cross layer boundaries
- All structured outputs / API contracts should have a validation schema where applicable

## <FRAMEWORK, e.g. React>

- Route / page files are thin — no business logic, no direct API calls
- Business logic lives in `<DOMAIN_DIRS, e.g. src/domain/>` or custom hooks in `<HOOKS_DIR, e.g. src/hooks/>`
- Use the project's agreed styling approach consistently
- Platform-specific code: use the project's convention (e.g. file suffixes, `Platform.select`, feature detection)

## Imports

Use path aliases — never relative paths that climb more than one level:

```ts
// Good
import { <Type> } from '<ALIAS, e.g. @/types>';
import { <fn> } from '<ALIAS, e.g. @/domain/engine>';
import { <Component> } from '<ALIAS, e.g. @/ui/Button>';

// Bad
import { <Type> } from '../../src/types';
import { <Component> } from '../../../src/ui/Button';
```

Alias map (from `<CONFIG_FILE, e.g. tsconfig.json>`):

- `<ALIAS_1>` → `<PATH_1>`
- `<ALIAS_2>` → `<PATH_2>`
- `<...add one line per alias>`

## Feature flags

`<FLAG_SCOPE, e.g. unfinished or experimental features>` must be gated in `<FLAG_FILE, e.g. src/config/feature-flags.ts>`, off by default.
Never ship partially-implemented flows without a flag guard.

## Comments

Write comments only when the WHY is non-obvious. No docblocks, no restating what the code does.

## Formatting

`<FORMATTER, e.g. Prettier>` is enforced. Run `<FORMAT_CHECK_COMMAND>` before committing. Config is in `<FORMATTER_CONFIG, e.g. .prettierrc.json>`.
