# Project Plan: Mobile Scroll Performance Optimization

> **Goal:** Eliminate scroll lag, jank, and inconsistent section loading on mobile devices to ensure a smooth, premium user experience.

## 1. Analysis & Diagnosis (Phase 1)
- **Objective:** Identify specific bottlenecks causing lag and layout shifts.
- **Hypotheses:**
    1.  **Heavy CSS Effects:** Excessive use of `backdrop-filter: blur`, `box-shadow`, and `text-shadow` (glow) taxing mobile GPUs.
    2.  **Scroll Loop Complexity:** `ScrollStack` or other scroll-linked animations running complex calculations on every frame.
    3.  **Lenis Configuration:** Default settings (smoothness/lerp) might be too aggressive for mobile touch input.
    4.  **Layout Thrashing:** Repeated DOM reads/writes in scroll handlers (e.g., in `ScrollStack.tsx` or `ScrollReveal`).
    5.  **Image Loading/CLS:** Large images without dimensions causing reflows during scroll.

## 2. Optimization Strategy (Phase 2)
### A. CSS Performance Tuning
- **Action:** Replace `backdrop-filter: blur` with opaque/fallback backgrounds on mobile using media queries.
- **Action:** Reduce `box-shadow` spread/complexity on mobile.
- **Action:** Ensure `will-change` is used sparingly and correctly (only on active elements).

### B. Lenis Configuration (Touch)
- **Action:** Tune `touchMultiplier` and `lerp` specifically for mobile viewports.
- **Action:** Consider disabling smooth scroll entirely on mobile if native scroll performance is superior (`<ReactLenis root options={{ smoothTouch: false }} />`).

### C. Component Optimization
- **`ScrollStack.tsx`:** Simplify 3D transforms (`rotate`, `perspective`) on mobile. Reduce item count or visual complexity.
- **`ScrollReveal.tsx`:** Verify intersection observer thresholds are optimal for fast scrolling.

### D. Image Optimization
- **Action:** audit all `Image` components for `sizes` prop accuracy.
- **Action:** Ensure critical LCP images are prioritized.

## 3. Implementation Steps (Phase 3)
1.  [ ] **Audit:** Run Performance profile on mobile to identify main thread blockers.
2.  [ ] **Config:** Adjust `SmoothScrollWrapper` settings for mobile (disable smooth touch?).
3.  [ ] **CSS:** Add mobile overrides for heavy effects in `globals.css`.
4.  [ ] **Refactor:** Optimize `ScrollStack` animations for touch devices.

## 4. Verification Plan (Phase 4)
- **Manual Test:** 
    - Scroll rapidly on actual mobile device (iOS/Android).
    - Verify no "white flashes" or empty sections.
    - Confirm 60fps scrolling in complex sections.
- **Tooling:** Lighthouse Performance Score > 90 on Mobile.
