# PLAN-optimize-scroll

## Goal
Fix the "laggy" and "hacky" feel of the `ScrollReveal` component. The user likes the visual design but the scroll interaction needs to be buttery smooth.

## Problem Analysis
- **Stickiness**: The current `h-[200vh]` sticky container might be causing jitters if not handled correctly.
- **Text Reveal**: The character/word reveal might be "jumping" (discrete steps) rather than fading smoothly.
- **Performance**: Missing `will-change` hints or heavy layout calculations during scroll properties.

## Proposed Changes

### 1. Optimize `ScrollReveal.tsx`
- **Use `will-change`**: Add `will-change-transform` and `will-change-opacity` to animated elements to promote them to their own compositor layers.
- **Smooth Smoothing**: Wrap `useScroll` values in `useSpring` (e.g., `damping: 20, stiffness: 100`) to decouple scroll position from frame updates, removing jitter.
- **Refine Logic**: Ensure the sticky container (`h-[200vh]`) and the content (`h-screen`) alignment is mathematically perfect to avoid "jumping" when the stickiness ends.
- **Reduce Complexity**: If the blur effect on the background is causing GPU strain, optimize it (static image or reduced radius).

### 2. Verify Performance
- Test on both high-refresh and standard screens using `npm run dev`.
- Ensure no layout thrashing occurs during scroll.

## Verification
- **User Test**: User reports "butter smooth" feel.
- **DevTools**: Check FPS meter in Chrome DevTools.
