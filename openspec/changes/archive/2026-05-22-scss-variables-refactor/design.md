## Context

The project uses Angular with SCSS. Component stylesheets currently hardcode transition and font-family values in multiple places. The user has created `src/app/styles/abstracts/_variables.scss` with centralized tokens, and a `base/` folder for global styles. Angular needs `stylePreprocessorOptions.includePaths` configured so components can `@use` shared partials without fragile relative paths.

## Goals / Non-Goals

**Goals:**
- Configure `angular.json` so `@use 'abstracts/variables'` works from any component.
- Replace all hardcoded transition and font-family values in `navbar.component.scss` and `logo.component.scss` with variable references from `_variables.scss`.

**Non-Goals:**
- Refactoring color values or spacing values into variables (future work).
- Changing any visual behavior — this is a purely internal refactor.

## Decisions

- **`@use` over `@import`**: SCSS `@import` is deprecated. We will use `@use 'abstracts/variables' as vars` for namespaced access (e.g., `vars.$transition-default`). This prevents global namespace pollution and aligns with modern Sass best practices.
- **`stylePreprocessorOptions.includePaths`**: Adding `"src/app/styles"` to Angular's include paths so components resolve `@use 'abstracts/variables'` cleanly instead of using brittle relative paths like `../../styles/abstracts/variables`.

## Risks / Trade-offs

- **Minimal risk**: This is a 1:1 token substitution. The compiled CSS output is identical, so no visual regression is expected.
- **Budget**: Replacing hardcoded strings with variable references may slightly reduce the compiled CSS size (due to Sass consolidation), or have negligible effect.
