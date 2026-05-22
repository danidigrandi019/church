## Why

Component stylesheets (notably `navbar.component.scss` and `logo.component.scss`) contain hardcoded, repeated values for transitions and font-family. The user has already created a centralized variables file at `src/app/styles/abstracts/_variables.scss` with the correct tokens. Replacing repetitions with variable references improves maintainability, reduces inconsistency risk, and follows SCSS best practices (DRY principle).

## What Changes

- Configure Angular's `stylePreprocessorOptions` in `angular.json` so any component can `@use` shared abstracts without long relative paths.
- Replace all hardcoded `transition` and `font-family` values in `navbar.component.scss` with variables from `_variables.scss`.
- Replace the hardcoded `transition` value in `logo.component.scss` with the appropriate variable.

## Capabilities

### New Capabilities

_(none — this is a pure implementation/internal refactor with no behavioral changes)_

### Modified Capabilities

_(none — no spec-level behavior is changing, only internal styling implementation)_

## Impact

- `angular.json`: Add `stylePreprocessorOptions.includePaths` pointing to `src/app/styles`.
- `src/app/features/navbar/navbar.component.scss`: Replace ~8 hardcoded transition values and 1 font-family with variable references.
- `src/app/features/logo/logo.component.scss`: Replace 1 hardcoded transition with variable reference.
