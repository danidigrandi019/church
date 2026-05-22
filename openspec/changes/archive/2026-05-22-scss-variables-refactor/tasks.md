## 1. Angular Build Configuration

- [x] 1.1 Add `stylePreprocessorOptions.includePaths: ["src/app/styles"]` to `angular.json` build options so components can `@use 'abstracts/variables'` without relative paths

## 2. Refactor navbar.component.scss

- [x] 2.1 Add `@use 'abstracts/variables' as vars;` at the top of `navbar.component.scss`
- [x] 2.2 Replace all `transition: all 0.3s ease` occurrences with `transition: $transition-default` (`.navbar`, `.menu-link`, `.dropdown-menu`, `.contribua-btn`, `.hamburger-bar`, `.dropdown-menu` in mobile)
- [x] 2.3 Replace `transition: all 0.2s ease` with `transition: $transition-fast` (`.dropdown-menu a`)
- [x] 2.4 Replace `transition: transform 0.4s ease` with `transition: $transition-slow` (`.navbar-menu` in mobile)
- [x] 2.5 Replace `transition: transform 0.3s ease` with `transition: $transition-transform-default` (`.arrow-icon`)
- [x] 2.6 Replace `font-family: 'Outfit', 'Inter', sans-serif` with `font-family: $font-primary` (`.navbar`)

## 3. Refactor logo.component.scss

- [x] 3.1 Add `@use 'abstracts/variables' as vars;` at the top of `logo.component.scss`
- [x] 3.2 Replace `transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)` with `transition: $transition-transform-default` (`.logo`)

## 4. Verification

- [x] 4.1 Run `npm run build` and confirm zero errors and zero budget warnings
