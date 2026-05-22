## Context

The current `NavbarComponent` in the Angular application is functional but lacks any styles and does not match the desired mockup layout (transparent dark/glass background, centered links with dropdowns, custom logo path, rounded outlined donate button). The root `app.html` template also has a minor syntax error (`<app-navbar></app-navbar>>`) that needs correction.

## Goals / Non-Goals

**Goals:**
- Implement a fully responsive, transparent navigation bar overlaying the page.
- Position the brand logo (`assets/logo.webp`) on the left, centered navigation links with dropdown menus for "SOBRE NÓS" and "AMBIENTES", and a CTA button "CONTRIBUA" on the right.
- Style elements with a premium, state-of-the-art look: elegant typography (e.g., uppercase, letter spacing), hover states, and dropdown interactions.
- Adapt the menu into a hamburger overlay for devices below 1024px width.
- Fix minor HTML syntax errors in `app.html`.

**Non-Goals:**
- Implementing real back-end logic for the "CONTRIBUA" (donate) button or full-page routing paths for the menu items.
- Modifying other components outside of `NavbarComponent`, `LogoComponent`, and `App` (the root layout).

## Decisions

- **Absolute Transparent Navbar Positioning**: The navbar will be positioned absolutely at the top of the page. It will overlay the top hero/header content. As requested, it will *not* be fixed or sticky; when the user scrolls down, the navbar will scroll up and out of view naturally.
- **Dropdown Interactions**: We'll use CSS-based hover transitions for desktop dropdowns (using `visibility`, `opacity`, and `transform: translateY`) to achieve a premium feeling, and click toggles for mobile view.
- **Responsive Hamburger Overlay**: Create a responsive mobile state inside `NavbarComponent` controlled via a Boolean flag (`isMobileMenuOpen`). When active, it displays a fullscreen or slide-in overlay menu containing all navigation links.

## Risks / Trade-offs

- **Text Contrast over Diverse Backgrounds**: Since the navbar is transparent at the top, if the page content behind it is white, white text will be unreadable.
  - *Mitigation*: Ensure the header section of the page has a dark background/hero image, or initialize the navbar with a subtle top gradient shadow to guarantee readability.
- **Angular Component Scoping**: Component styles are encapsulated by default.
  - *Mitigation*: Write clean local styles in `navbar.component.scss` and `logo.component.scss` avoiding global pollution, but ensuring they integrate seamlessly.
