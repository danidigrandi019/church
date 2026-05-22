## Why

The current navigation bar is basic and lacks a cohesive modern style. To deliver a premium user experience matching modern design aesthetics, the navigation bar needs a redesign that includes a transparent background, clean positioning of the brand logo, dropdown capabilities for multi-link sections, and a distinct, outlined action button for contributions, similar to the reference layout.

## What Changes

- **UI Redesign**: Complete overhaul of the navbar layout, making it fully transparent, overlaying the header content correctly.
- **Logo Integration**: Set the logo source to `assets/logo.webp` on the left of the navbar.
- **Navigation Links**:
  - Center-aligned links: "SOBRE NÓS" (with dropdown indicator), "AMBIENTES" (with dropdown indicator), "MENSAGENS", "PEQUENO GRUPO", "RED COLLEGE".
- **Call-to-Action (CTA) Button**: Add an outlined, rounded button "CONTRIBUA" on the right.
- **Responsive Layout**: Adjustments to ensure the navbar collapses nicely on mobile screens with a hamburger toggle menu.

## Capabilities

### New Capabilities
- `navbar-navigation`: A transparent navigation header with dynamic links, dropdown interactions, logo integration, and a call-to-action button, styled to modern premium aesthetic standards.

### Modified Capabilities
<!-- Existing capabilities whose REQUIREMENTS are changing (not just implementation).
     Only list here if spec-level behavior changes. Each needs a delta spec file.
     Use existing spec names from openspec/specs/. Leave empty if no requirement changes. -->

## Impact

- `src/app/features/navbar/navbar.component.html`: Update HTML markup structure.
- `src/app/features/navbar/navbar.component.scss`: Define layout, spacing, typography, transitions, animations, and transparency behavior.
- `src/app/features/logo/logo.component.html`: Render the logo using `assets/logo.webp`.
- `src/app/app.html`: Fix HTML validation (double closing bracket).
