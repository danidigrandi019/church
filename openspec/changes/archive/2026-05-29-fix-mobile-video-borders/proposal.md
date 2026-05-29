## Why

On mobile portrait screens, the landscape background video exhibits black bars at the top and bottom (letterboxing) because its height matches the container height (100%), exposing the baked-in cinematic letterbox borders. This issue degrades the landing page aesthetic on mobile devices.

## What Changes

- Update `hero-section` mobile styling in `hero.component.scss` to scale the background video specifically on mobile/portrait viewports to push the baked-in black letterboxes out of the visible screen boundaries.

## Capabilities

### New Capabilities

None.

### Modified Capabilities

- `hero-section`: Update responsiveness of the hero section video background on narrow/portrait screens to ensure a borderless fullscreen experience.

## Impact

- `src/app/features/hero/hero.component.scss`: Styling of the `.hero-video` element inside media queries.
