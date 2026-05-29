## Context

The background video in the hero section has baked-in black cinematic borders (letterboxing). While desktop viewports naturally crop these out due to width-based cover scaling, portrait mobile viewports align the height of the video to the screen height, exposing the black letterbox borders at the top and bottom.

## Goals / Non-Goals

**Goals:**
- Eliminate black letterbox borders at the top and bottom of the hero video background on mobile screens (width ≤ 768px).
- Maintain aspect ratio and fullscreen cover effect.

**Non-Goals:**
- Modifying the original background video file.
- Creating different video assets for mobile.

## Decisions

- **Decision 1**: Add responsive media query for `.hero-video` at `@media (max-width: 768px)`.
- **Decision 2**: Apply a scale of `1.38` (`transform: scale(1.38)`) specifically on mobile viewports. This scales the active video content to cover 100% of the viewport height and hides the black borders beyond the container borders (leveraging `.hero`'s `overflow: hidden`).

## Risks / Trade-offs

- **Risk**: Slight reduction in visual quality due to scaling/zooming.
  - *Mitigation*: The source video is high-definition, and since it serves as a background with an dark overlay gradient, the slight zoom will not affect visual clarity negatively.
