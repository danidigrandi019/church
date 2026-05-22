## Context

Component stylesheets currently declare hardcoded design choices such as box shadows, backdrop filter blurs, translucent background colors, z-indexes, and border radii. We want to extract these constants to `src/app/styles/abstracts/_variables.scss` to formalize the visual tokens of our Design System.

## Goals / Non-Goals

**Goals:**
- Centralize z-index order values (`$z-navbar`, `$z-dropdown`, `$z-mobile-menu`).
- Centralize glassmorphism/translucent backgrounds and text colors (`$color-text-muted`, `$bg-glass-dark`, etc.).
- Centralize backdrop filter blur sizes and box shadow properties (`$blur-dropdown`, `$shadow-dropdown`, etc.).
- Centralize border radii sizes (`$radius-sm`, `$radius-md`, `$radius-pill`).
- Maintain identical compiled visual outputs (zero regressions).

**Non-Goals:**
- Restructuring components or adding new routes.

## Decisions

- **Token naming conventions:**
  - **Z-Index**: `$z-navbar`, `$z-dropdown`, `$z-mobile-menu`. Centralizing this prevents layout display ordering bugs.
  - **Border Radii**: `$radius-sm` (6px), `$radius-md` (8px), `$radius-pill` (50px).
  - **Glassmorphism Blur**: `$blur-dropdown` (blur 12px), `$blur-mobile-menu` (blur 20px).
  - **Box Shadows**: `$shadow-dropdown`, `$shadow-mobile-menu`, `$shadow-glow-white`.
  - **Colors & Transparency**: `$color-text-muted`, `$bg-glass-dark`, `$bg-glass-mobile`, `$border-glass-light`.
- **Pure SCSS refactor:** This is a non-breaking SCSS substitution. We will import `@use 'abstracts/variables' as vars;` in each component stylesheet and replace all matching literal values.

## Risks / Trade-offs

- **Risk:** Typo in variables names leading to SCSS compilation fail.
- **Mitigation:** Run `npm run build` directly during the verification step to identify and fix any typographical errors immediately.
