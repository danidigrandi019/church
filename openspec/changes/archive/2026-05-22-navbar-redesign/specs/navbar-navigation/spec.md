## ADDED Requirements

### Requirement: Transparent Navbar Layout
The system SHALL display a transparent navigation bar positioned absolutely at the top of the page, overlaying the main content. The layout SHALL consist of:
- The brand logo on the far left, sourced from `assets/logo.webp`.
- Centered navigation links: "SOBRE NÓS" (with dropdown arrow), "AMBIENTES" (with dropdown arrow), "MENSAGENS", "PEQUENO GRUPO", "RED COLLEGE".
- A call-to-action (CTA) button "CONTRIBUA" on the far right with a thin, rounded border outline.

#### Scenario: Visual structure on desktop screens
- **WHEN** the viewport width is 1024px or wider
- **THEN** the navbar elements are aligned horizontally with ample spacing, the background remains transparent, the logo is displayed clearly on the left, and the entire navbar scrolls out of view when scrolling down the page.

### Requirement: Interactive Navigation Menu
The navigation links SHALL trigger appropriate routing or scroll navigation, and the items "SOBRE NÓS" and "AMBIENTES" SHALL feature dropdown menu capability. The buttons and links SHALL support a premium hover state animation.

#### Scenario: Interacting with navigation links
- **WHEN** the user hovers over any navbar link or CTA button
- **THEN** the element SHALL show a smooth text color transition (e.g., transitioning to a gold, bright white, or red highlight color) and a subtle cursor transformation.

#### Scenario: Hovering or clicking dropdown items
- **WHEN** the user hovers over or clicks "SOBRE NÓS" or "AMBIENTES"
- **THEN** a beautiful transition reveals a sub-navigation list with links for those categories.

### Requirement: Mobile Responsiveness
The system SHALL automatically scale the navbar for mobile and tablet devices under 1024px wide, replacing the main links with a responsive hamburger menu icon.

#### Scenario: Toggling the mobile menu
- **WHEN** the viewport width is under 1024px and the user clicks the hamburger menu button
- **THEN** a vertical slide or overlay menu expands to display all navigation options and the "CONTRIBUA" button clearly.
