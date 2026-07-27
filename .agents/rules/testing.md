# Testing

## Running tests

```bash
<TEST_COMMAND>                    # Single run (CI / baseline check)
<TEST_WATCH_COMMAND>              # Watch mode

# Verification scripts (not part of the test runner — run manually)
<VERIFY_SCRIPT_1, e.g. node scripts/verify-import-paths.mjs>
<VERIFY_SCRIPT_2>
```

## Test locations

| Folder | What lives here |
| ------ | --------------- |
| `<UNIT_DIR, e.g. tests/unit/>` | Pure logic — parsers, validators, utilities |
| `<BASELINE_DIR, e.g. tests/baseline/>` | Feature baseline assertions |
| `<INTEGRATION_DIR, e.g. tests/integration/>` | Cross-module integration tests |
| `<PLATFORM_TESTS_DIR, e.g. __tests__/>` | Platform / framework-specific behavior |

## What to test

Every parser or domain function needs:

- Unit tests for the happy path
- Unit tests for boundary cases
- Validation assertions (output must pass `<VALIDATION_LIB>` against `<SCHEMA_DIR>`)

`<BACKGROUND_WORK_TYPE, e.g. Background tasks>` need:

- Stub-based tests in `<PLATFORM_TESTS_DIR>` for logic
- Manual verification via `<VERIFY_SCRIPT>` for native / platform behavior

## What not to test

- UI layout and styling — use the app directly
- Third-party library behavior
- Native module internals

## Coverage

Run `<TEST_COMMAND>` — coverage report goes to `<COVERAGE_DIR, e.g. coverage/>`.
Do not reduce coverage on files you touch without a clear reason.

## Feature flags in tests

Use `<FLAG_FILE>` stubs to enable `<FLAG_SCOPE>` in tests.
Deterministic fakes are preferred over mocks for external integrations.
