## Why

In `NavbarComponent`, `NavbarDropdownComponent`, and `LogoComponent`, visual properties (such as z-index layers, border radii, glassmorphic backdrop filters, box shadows, and gray/white color opacities) are hardcoded directly in stylesheets. Centralizing these visual tokens into `_variables.scss` establishes a unified Design System, prevents z-index ordering conflicts, guarantees styling consistency as the app scales, and simplifies future branding modifications.

## What Changes

- Add z-index levels, background colors, text colors, backdrop filters, box shadows, and border radii values to `_variables.scss`.
- Replace all hardcoded values of these visual tokens in `navbar.component.scss`, `navbar-dropdown.component.scss`, and `logo.component.scss` with central variable references.

## Capabilities

### New Capabilities
_(none — this is a design token refactoring with no behavioral changes)_

### Modified Capabilities
_(none — no requirement/behavioral changes)_

## Impact

- `src/app/styles/abstracts/_variables.scss`: Introduce z-index, color, blur, shadow, and radius variables.
- `src/app/features/navbar/components/navbar.component.scss`: Substitute z-index, box-shadow, color opacity, and border-radius values with variables.
- `src/app/features/navbar/components/navbar-dropdown/navbar-dropdown.component.scss`: Substitute backdrop-filter, border-radius, z-index, box-shadow, and color values with variables.
- `src/app/features/logo/logo.component.scss`: Substitute border-radius and scale factors (if applicable) with design variables.
