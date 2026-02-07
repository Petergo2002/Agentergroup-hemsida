# Plan: Safari Scroll Lag Fix

## Overview
The user reports "scroll lag" specifically on Safari on the AI Frontdesk (Home) page. Safari is notoriously sensitive to heavy CSS filters (`blur`, `backdrop-filter`) and layout thrashing (animating `height`, `width`, or `top` instead of `transform`).

## Success Criteria
- [ ] **Performance**: Scrolling on Safari is 60fps+ without stutter.
- [ ] **Visuals**: No significant degradation of visual quality (graceful degradation if needed).
- [ ] **Code**: Optimization applied to `HeroMaja`, `ScrollReveal`, and global CSS.

## Root Cause Analysis (Suspects)
1.  **`HeroMaja.tsx`**:
    -   `bg-[...]/20 blur-[120px]` animating opacity/scale. Large blurs + animation = Safari killer.
    -   `perspective: 2000px` and `rotateX` 3D transforms.
    -   `inset-0 bg-glow-green`.
2.  **`ScrollReveal.tsx`**:
    -   Heavy usage of `blur` filters in `useTransform`.
    -   Sticky positioning with large text scaling.
3.  **Global**:
    -   Missing `will-change` hints for GPU acceleration.

## Task Breakdown

### Phase 1: Optimization of `HeroMaja`
- [ ] **Optimize Blurs**: Replace CSS `box-shadow` or heavily blurred divs with static images where possible, or reduce blur radius for Safari.
- [ ] **GPU Acceleration**: Add `transform-gpu` or `will-change: transform, opacity` to animated elements (`motion.div`).
- [ ] **3D Transform Tweak**: Simplify `rotateX` animation or ensure `backface-visibility: hidden` is set.

### Phase 2: Optimization of `ScrollReveal`
- [ ] **Simplify Filters**: Limit dynamic `filter: blur(...)` changes. This is extremely expensive on Safari during scroll. Pre-calculate or use opacity fade instead.
- [ ] **Layer Promotion**: Ensure the sticky container is promoted to its own layer (`translate-z-0`).

### Phase 3: Global Safari Fixes
- [ ] **`globals.css`**: Add a safari-specific check or generally safer defaults for `backdrop-filter`.
- [ ] **`layout.tsx`**: Ensure `overflow-x-hidden` is applied correctly to the body to prevent horizontal layout thrashing.

### Phase 4: Verification
- [ ] **Browser Stack**: Test on Safari (Desktop).
- [ ] **DevTools**: Check "Paint Flashing" and "Layout Shift" regions.

## Verification Checklist
- [ ] **Hero**: Smooth entry animation.
- [ ] **Scroll**: Smooth scrolling past the "ScrollReveal" section.
- [ ] **Visuals**: Glow effects still look acceptable.
