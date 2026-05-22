## Context

The `NavbarComponent` handles two dropdowns: "SOBRE NÓS" and "AMBIENTES". The styling and toggle states are currently hardcoded, and the HTML contains duplicate layout patterns. We want to extract this into a dedicated component `NavbarDropdownComponent` under `src/app/features/navbar/components/navbar-dropdown/` using Angular's standalone components.

## Goals / Non-Goals

**Goals:**
- Extract all inline dropdown logic into `NavbarDropdownComponent`.
- Use input properties (`@Input`) to dynamically feed the title and list of link items.
- Maintain a local state (`isMobileOpen`) in `NavbarDropdownComponent` to manage toggling dropdowns on mobile under 1024px without coupling parent/child communication.
- Retain identical premium hover visual styling, transitions, glassmorphism, and responsive states.

**Non-Goals:**
- Add new menu pages or modify URLs.
- Change the overall responsive menu slide-in behavior of the parent `NavbarComponent`.

## Decisions

- **Standalone Angular Component:** `NavbarDropdownComponent` will be a standalone component imported directly into `NavbarComponent` imports.
- **Props Interface:**
  - `@Input({ required: true }) title!: string;`
  - `@Input({ required: true }) items!: Array<{ label: string; url: string; }>;`
- **Encapsulated State for Mobile Toggle:** The dropdown can manage its own open/close state on click when the screen viewport is < 1024px. The toggle function inside the child component:
  ```typescript
  isMobileOpen = false;
  toggleDropdown(event: Event) {
    if (window.innerWidth < 1024) {
      event.preventDefault();
      event.stopPropagation();
      this.isMobileOpen = !this.isMobileOpen;
    }
  }
  ```
  This is extremely clean and prevents the parent `NavbarComponent` from having to manage indices or menu maps.
- **Styling encapsulation:** All transitions (`vars.$transition-default`, `vars.$transition-fast`, `vars.$transition-transform-default`) will be referenced via `@use 'abstracts/variables' as vars` locally inside the subcomponent SCSS.

## Risks / Trade-offs

- **Risk:** Parent hover triggers dropdown visibility.
- **Mitigation:** Desktop hover relies on CSS `:hover` selectors. We'll place the `:hover` logic inside the wrapper host elements or the `.menu-item` of the dropdown component so that hovering over the container instantly reveals the panel smoothly just like before.
