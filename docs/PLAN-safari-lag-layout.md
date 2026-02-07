# Plan: Safari Lag & Full Width Fix

## Goal
1.  **Safari Smoothness**: Fix severe lag on Safari (likely caused by `backdrop-filter` and complex repaints).
2.  **True Full Width**: Eliminate the "squeezed" look. Make components fully visible without clipping.

## 1. Safari Optimization (The "Jank" Killer)
Safari handles `backdrop-filter` and large shadows poorly during scroll-linked animations.

### Proposed Fixes
*   **Kill the Blur**: Remove `backdrop-blur` entirely. Use a high-opacity solid background (`bg-[#0A0A0A]/98`).
*   **Hardware Acceleration**: Apply `transform: translateZ(0)` to the stacking cards to force GPU layers.
*   **Simplify Shadows**: Reduce `shadow-2xl` to a simpler shadow or remove it during scroll.

## 2. Layout: "Complete Full Width"
The user wants the components to breathe. The current visual is "cut off" (see screenshot: bottom of "Inlärda källor" list is clipped).

### Layout Refactor
*   **Card Container**: `w-full` (100% viewport width) with minimal side padding (`px-2` or `px-4`).
*   **Height Management**: The clipped content implies the card isn't tall enough or the content is too tall.
    *   **Action**: Ensure the *inner component* (Dashboard) scales to fit height if necessary, OR increase card height to `min-h-[90vh]`.
*   **Split Ratio**:
    *   **Text**: Keep it compact (25-30%) or overlay it.
    *   **Visual**: Give it **70-75%** of the width.
    *   **Fit-to-Container**: Apply a CSS `transform: scale()` to the inner Dashboard component to ensure it *always* fits visible bounds, preventing the "cut off" look.

## Task Breakdown
1.  **Safari Fixes**:
    *   Update `FeatureCard.tsx`: Remove blur, add `translateZ(0)`.
2.  **Layout Expansion**:
    *   Update `FeatureCard.tsx`: `w-full`, `h-[90vh]`.
    *   Update Split: `w-[30%]` (Text) / `w-[70%]` (Visual).
3.  **Content Scaling**:
    *   Wrap inner `AppConnect` and `KnowledgeBase` in a resizing container that scales content down if it overflows (using `container-type: size` or JS scaling).

## Verification
*   **Safari Test**: Verify 60fps scroll.
*   **Screenshot Check**: Ensure the bottom of the list is visible.
