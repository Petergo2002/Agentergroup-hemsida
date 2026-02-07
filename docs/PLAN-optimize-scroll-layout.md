# Plan: Optimize Scroll Layout & Performance

## Goal
Address user feedback regarding the "Stacking Cards" design:
1.  **Layout**: The right-side component (especially "Hjärnan") feels "squeezed". Make cards utilize more width/space to let the UI breathe.
2.  **Performance**: Fix significant scrolling lag/jank.

## 1. Layout Enhancements ("Full Width/Space")
The current `max-w-[1200px]` constraint might be too tight for the complex dashboard visualizations side-by-side with large text.

### Proposed Changes via `FeatureCard.tsx`
-   **Increase Container Width**: Expand strictly controlled `max-w` to `max-w-[1400px]` or `w-full` with comfortable padding.
-   **Adjust Grid Ratio**: Change from `50/50` split to `40/60` (Text/Component) on larger screens to prioritize the visual.
-   **Responsive Padding**: Reduce internal padding (`p-16` -> `p-8`) to reclaim space for the actual content.

## 2. Performance Optimization (Fixing Lag)
The lag is likely caused by:
1.  **Heavy Compounded Transforms**: Scaling + Sticky + complex child animations.
2.  **Unbounded Animations**: The particle/cursor simulations in `AppConnect` and `KnowledgeBase` running even when off-screen or scaled down.

### Proposed Fixes
-   **`FeatureStack.tsx`**: Add `will-change: transform` to the motion div.
-   **`AppConnectShowcase` & `KnowledgeBaseShowcase`**:
    -   Implement `useInView` hook.
    -   **Strictly pause** all animation loops and state updates when `!isInView`.
    -   This prevents the browser from calculating positions for the "hidden" card underneath.
-   **Glassmorphism**: Reduce `backdrop-blur` intensity or use a static equivalent if it causes GPU struggle on retina screens.

## Task Breakdown
1.  **Optimize Child Components**:
    -   Refactor `AppConnectShowcase` to pause when hidden.
    -   Refactor `KnowledgeBaseShowcase` to pause when hidden.
2.  **Adjust Layout**:
    -   Update `FeatureCard.tsx` widths and flex ratios.
3.  **Optimize Stack**:
    -   Add CSS performance hints (`will-change`).

## Verification
-   **Scroll Test**: Rapid scrolling should not drop frames.
-   **Visual Check**: "Hjärnan" dashboard should look spacious, not cramped.
