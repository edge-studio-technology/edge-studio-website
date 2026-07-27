# Domain Rules

<!--
This is a placeholder for your project's non-negotiable rules (compliance,
privacy, safety, performance, etc.). If your project has no such rules, delete
this file and remove references to it and to the `domain-check` skill.

Otherwise, replace the bracketed sections below with real rules. Keep the same
shape: short, concrete, with explicit thresholds and mechanisms named.
-->

These apply to every feature and every automated action. Non-negotiable.

## Data handling

- Never upload or echo raw `<RAW_INPUT, e.g. PII, message bodies, logs>`
- Only derived fields are allowed to leave `<BOUNDARY, e.g. the device / backend>`: `<DERIVED_FIELDS, e.g. hashes, counters, aggregates>`
- `<INTERNAL_STORE, e.g. database / cache>` stores derived / sanitized fields only — no raw `<SENSITIVE_DATA, e.g. PII>`
- All `<STRUCTURED_OUTPUT, e.g. LLM outputs>` must validate against `<SCHEMA_FORMAT, e.g. JSON Schema>` in `<SCHEMA_DIR>` before acting on them

## Confidence gating

- If `<CONFIDENCE_METRIC>` < `<THRESHOLD>`: set `<CONFIRM_FLAG>` and include a `<EXPLANATION_LIMIT>` explanation
- Explainability and evidence provenance must be visible for any automated action

## Platform constraints

**<PLATFORM_1, e.g. iOS / Web>**

- <Restriction 1>
- <Restriction 2>
- Background: `<BACKGROUND_MECHANISM_1>`

**<PLATFORM_2, e.g. Android / Node.js>**

- <Restriction 1>
- <Restriction 2>
- Background: `<BACKGROUND_MECHANISM_2>`

## Resource budgets

- Tasks must complete within `<TIME_BUDGET>`
- `<RESOURCE_BUDGET, e.g. memory / battery target>`
- Gate heavy work behind `<GATING_CHECK>` where appropriate

## Secrets

- `<SECRET_VAR_1>` and `<SECRET_VAR_2>` are backend-only — never prefix with `<CLIENT_ENV_PREFIX, e.g. EXPO_PUBLIC_>`
- `<AUTH_TOKENS, e.g. OAuth tokens>` must be stored in `<SECURE_STORAGE>`, not `<INSECURE_STORAGE>`
