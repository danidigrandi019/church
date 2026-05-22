## Why

The `NavbarComponent` contains inline dropdown lists for "SOBRE NÓS" and "AMBIENTES", leading to duplicated HTML structures, complex and bloated SCSS rules, and high maintenance overhead. Extracting this into a dedicated, reusable `NavbarDropdownComponent` encapsulates styles and behavior, improves maintainability, and follows DRY (Don't Repeat Yourself) best practices.

## What Changes

- Extract the dropdown structure (hover/click triggers, links loop, arrow rotation, and panel overlay) from `NavbarComponent` into a new, standalone `NavbarDropdownComponent`.
- Reuse `NavbarDropdownComponent` in `NavbarComponent` for both the "SOBRE NÓS" and "AMBIENTES" dropdowns.
- Encapsulate all dropdown-related styling in `navbar-dropdown.component.scss` (glassmorphism, transition animations, layouts, mobile responsive dropdown expansion).
- Simplify `navbar.component.scss` and `navbar.component.html` by removing duplicated dropdown elements and styles.

## Capabilities

### New Capabilities
_(none — this is a pure implementation refactor with no new behavioral/requirement specs)_

### Modified Capabilities
_(none — no requirement changes, only code-structure improvement)_

## Impact

- `src/app/features/navbar/components/navbar-dropdown/`: Populate empty typescript, html, and stylesheet files.
- `src/app/features/navbar/components/navbar.component.ts`: Update component imports to include `NavbarDropdownComponent`, and declare the dropdown menu data structures.
- `src/app/features/navbar/components/navbar.component.html`: Replace inline dropdown HTML with `<app-navbar-dropdown>` tags.
- `src/app/features/navbar/components/navbar.component.scss`: Clean up and remove ~60-80 lines of dropdown-specific styles.
