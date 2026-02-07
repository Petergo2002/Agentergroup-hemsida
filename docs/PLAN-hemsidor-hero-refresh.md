# Plan: Hemsidor Hero Refresh (Orange Veil)

## Overview
Replace the static hero background on the `Hemsidor` page with a dynamic, premium motion graphic background. The style should be reminiscent of "DarkVeil" but tailored to the "Maja" branding (Orange `#FF5D00`) and "Super Sharp" aesthetic.

## Success Criteria
- [ ] **Visual**: Premium, dynamic motion background in the Hero section.
- [ ] **Color**: Primary theme is Orange `#FF5D00` (replacing any green).
- [ ] **Performance**: Smooth animation (60fps), strictly decorative (pointer-events-none).
- [ ] **Tech**: React component using `framer-motion` or Canvas.
- [ ] **Integration**: Seamlessly integrated into `HemsidorClient.tsx`.

## Tech Stack
-   **Framework**: Next.js (App Router)
-   **Animation**: `framer-motion` (Client Component)
-   **Styling**: Tailwind CSS
-   **Colors**: Brand Orange (`#FF5D00`), Black (`#000000`)

## File Structure

### [NEW] Components
-   `src/app/components/OrangeVeil.tsx` (The new motion background component)

### [MODIFY] Existing Pages
-   `src/app/hemsidor/HemsidorClient.tsx` (Import and use `OrangeVeil`)

## Task Breakdown

### Phase 1: Design & Implementation
- [ ] **Create `OrangeVeil` Component**
    -   **Input**: Design requirements (Orange, Motion, Veil-like).
    -   **Output**: `src/app/components/OrangeVeil.tsx`
    -   **Verify**: Render component in isolation or on page and verify animation smoothness.
    -   **Details**: Use layered motion divs or a canvas-based shader effect for a "flowing" look. Avoid heavy WebGL libraries to keep bundle light if possible, but use `framer-motion` for complex transforms.

- [ ] **Integrate into HemsidorClient**
    -   **Input**: `HemsidorClient.tsx`, `OrangeVeil.tsx`
    -   **Output**: Modified `HemsidorClient.tsx` with `<OrangeVeil />` as background.
    -   **Verify**: Hero section displays the new background behind text.
    -   **Details**: Ensure `z-index` is correct so text remains readable (`z-20` text, `z-0` background). Add slight overlay gradient to ensure text contrast.

### Phase 2: Polish & Verification
-   [ ] **Visual Polish**: Tweak opacity, speed, and spread of the effect to match the "Super Sharp" premium feel.
-   [ ] **Responsive Check**: Ensure it looks good on mobile and desktop.

## Phase X: Verification Checklist
-   [ ] **Build**: `npm run build` passes.
-   [ ] **Visual**: Animation is smooth and clearly "Orange".
-   [ ] **UX**: Text remains readable over the dynamic background.
-   [ ] **Performance**: No significant lag introduced.
