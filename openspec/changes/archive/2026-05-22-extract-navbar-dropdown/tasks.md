## 1. Create navbar-dropdown Component

- [x] 1.1 Implement component logic in `src/app/features/navbar/components/navbar-dropdown/navbar-dropdown.component.ts` as a standalone component with `@Input() title` and `@Input() items` and a local `isMobileOpen` toggle method
- [x] 1.2 Implement template in `src/app/features/navbar/components/navbar-dropdown/navbar-dropdown.component.html` rendering the title, dynamic items loop, arrow indicator, and mobile click handlers
- [x] 1.3 Implement styles in `src/app/features/navbar/components/navbar-dropdown/navbar-dropdown.component.scss` importing variable utilities, detailing hover visual structures for desktop and collapsible states for mobile

## 2. Refactor Parent navbar Component

- [x] 2.1 Update parent component logic in `src/app/features/navbar/components/navbar.component.ts` to define the item arrays for "SOBRE NÓS" and "AMBIENTES" and import the new dropdown component
- [x] 2.2 Update parent component template in `src/app/features/navbar/components/navbar.component.html` replacing duplicated manual dropdown lines with `<app-navbar-dropdown>` tags
- [x] 2.3 Clean up parent component styles in `src/app/features/navbar/components/navbar.component.scss` by removing redundant CSS dropdown rules

## 3. Verification

- [x] 3.1 Run `npm run build` and ensure compilation is successful with zero errors
