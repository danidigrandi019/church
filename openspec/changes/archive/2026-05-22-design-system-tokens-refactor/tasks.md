## 1. Populate _variables.scss

- [x] 1.1 Declare design system tokens (z-index ordering, border radii, colors & opacities, glassmorphism filters, box shadows) in `src/app/styles/abstracts/_variables.scss`

## 2. Refactor Component Stylesheets

- [x] 2.1 Refactor `src/app/features/navbar/components/navbar.component.scss` to use the new tokens (z-indexes, box shadows, border radii)
- [x] 2.2 Refactor `src/app/features/navbar/components/navbar-dropdown/navbar-dropdown.component.scss` to use the new tokens (glassmorphism blur, translucent background, colors, z-indexes, shadows, border radii)
- [x] 2.3 Refactor `src/app/features/logo/logo.component.scss` to use the new tokens

## 3. Verification

- [x] 3.1 Run `npm run build` and ensure compilation succeeds with zero errors
