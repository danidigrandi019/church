## 1. Clean Up & Base Layout Preparation

- [x] 1.1 Fix HTML syntax error in `src/app/app.html` by removing the duplicate closing bracket on the `<app-navbar>` tag
- [x] 1.2 Verify `src/app/features/logo/logo.component.html` utilizes `assets/logo.webp` and adjust its SCSS if necessary to ensure brand logo displays cleanly

## 2. Navbar Structure & Logic Implementation

- [x] 2.1 Update structure in `src/app/features/navbar/navbar.component.html` to lay out the logo on the left, centered menu links (including arrow dropdown indicators for "SOBRE NÓS" and "AMBIENTES"), and the "CONTRIBUA" button on the right
- [x] 2.2 Define a mobile menu toggle state (`isMobileMenuOpen`) in `src/app/features/navbar/navbar.component.ts` to manage overlay view toggles

## 3. Navbar Styling (SCSS)

- [x] 3.1 Write premium absolute desktop navbar styles in `src/app/features/navbar/navbar.component.scss` (using `position: absolute` at the top of the page so it overlay content but scrolls out of view naturally), including transparency, sleek modern font typography (uppercase, letter-spacing), and custom transitions
- [x] 3.2 Add styles for desktop dropdown hover panels with smooth transform and opacity fade transitions
- [x] 3.3 Add media queries for mobile view (< 1024px) including a hamburger menu button and a full-screen/slide-in navigation overlay with correct contrast and tap highlights

## 4. Verification & Testing

- [x] 4.1 Test the absolute positioning overlay, transparency, hover micro-animations, and dropdown visibility
- [x] 4.2 Verify correct rendering of logo from `assets/logo.webp` and check mobile toggle responsiveness in responsive viewports
