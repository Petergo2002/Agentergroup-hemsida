# Plan: Fix Lag & Expand Layout (Aggressive)

## Goal
1.  **Eliminate Scroll Lag**: The "jank" is unacceptable. We need to cut GPU cost.
2.  **Fix "Squeezed" Layout**: The "Konfiguration & RAG" component looks compressed. It needs to breathe.

## 1. Layout: "Full Width" Immersion
The current `max-w` constraint is still too tight. The user wants the cards to feel "full width".

### Proposed Changes
*   **Container**: Remove `max-w-[1500px]`. Use `w-[95vw]` or `w-full` with small side margins (`mx-4`).
*   **Internal Grid**:
    *   **Desktop**: Shift to a `30/70` split (Text 30% / Component 70%) OR a vertical layout where the visual takes the full bottom 80% of the card.
    *   **Vertical Stacking (Alternate)**: Title/Text at the top (small), Component fills the rest of the huge card. This guarantees maximum space for the "Dashboard".
*   **Padding**: Reduce content padding further. The dashboard needs to go edge-to-edge inside the card.

## 2. Performance: The "Lag" Killers
The lag comes from 3 sources:
1.  **Backdrop Blur**: `backdrop-blur-xl` on a moving, scaling element is extremely expensive (GPU killer).
2.  **Shadows**: Large `shadow-2xl` on moving elements.
3.  **React Rerenders**: `useScroll` updating state frequently.

### Proposed Fixes
*   **Remove Active Blurs**: Replace `backdrop-blur` with solid semi-transparent colors during scroll, or remove entirely in favor of `bg-[#0A0A0A]`.
*   **Static Rasterization**: Use `will-change: transform` on the *cards*, not just the container.
*   **Reduce Shadow**: Lower shadow complexity or opacity.
*   **Strict Logic Pausing**: Ensure `AppConnect` and `KnowledgeBase` strictly return `null` or a static placeholder when `!isInView`.

## Task Breakdown

### Phase 1: Performance (The "Smoothness" Fix)
1.  **CSS Optimization**:
    *   Add `will-change: transform` to `FeatureCard`.
    *   REMOVE `backdrop-blur` effects from the cards (stick to solid colors/gradients).
    *   Reduce `shadow-2xl` to `shadow-lg`.
2.  **Logic Optimization**:
    *   Verify `useInView` implementation in `AppConnect` and `KnowledgeBase`.

### Phase 2: Layout (The "Breathing Room" Fix)
1.  **Expand Card**: Set `FeatureCard` width to `w-[96%] max-w-none`.
2.  **Refactor Content Layout**:
    *   Move Text to a compact "Header" overlay or a slim left column (25%).
    *   Give Component 75% width.
    *   Make Component container `h-full` and closer to edges.

## Verification
*   **Lag Check**: Scroll violently. If it lags, remove **all** shadows/gradients until it doesn't, then re-add slowly.
*   **Visual Check**: "Hjärnan" dashboard must look spacious and readable.
