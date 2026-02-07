# Plan: Responsive Design Polish

## Goal Description
Ensure the website is perfectly responsive across all devices (Mobile, Tablet, Desktop). The user emphasized "perfekt" responsiveness. This plan targets checking and refining key layout components to ensure fluid adaptation, correct font scaling, proper padding/spacing, and stacking behavior on smaller screens.

## User Review Required
> [!NOTE]
> No breaking changes expected. This is purely a UI polish task.

## Proposed Changes

### 1. Hero Section (`HeroMaja.tsx`)
*   **Audit Values:** Ensure `pt-32` (recently added) works well on mobile. On smaller screens, the padding might need to be slightly adjusted (e.g., `pt-24` on mobile, `pt-32` on md+).
*   **Typography:** Verify `text-5xl md:text-7xl lg:text-8xl` scaling. Ensure line heights prevent overlap on narrow screens.
*   **Layout:** Stack CTAs vertically on mobile (already present `flex-col sm:flex-row`), but ensure spacing `gap-4` is sufficient.
*   **Visuals:** Check if the background circular gradients overwhelm the small mobile viewport.

### 2. Feature Sections (`FeatureSection.tsx`)
*   **Padding:** Adjust `py-24 lg:py-32`. Mobile might benefit from slightly tighter vertical padding (`py-16`) to reduce scrolling effort.
*   **Typography:** `text-4xl md:text-5xl` is potentially too large for some mobile headers. Consider `text-3xl md:text-5xl` for better text wrapping.
*   **Content Alignment:** Ensure `max-w-3xl` container has proper side padding `px-4` on mobile so text doesn't touch edges (already present, verify visually).
*   **Stacking:** Ensure the `component` slot stacks properly below or above text depending on the desired flow, without overflowing horizontally.

### 3. UseCase Showcases (`UseCaseShowcase.tsx`)
*   **Grid:** Verify `grid-cols-1 md:grid-cols-2`.
*   **Card Height:** On mobile, `h-[300px]` fixed heights for visuals can sometimes take too much vertical space. Ensure they scale or have responsive height classes if needed.

### 4. Interactive Components (`AppConnectShowcase.tsx`)
*   **Container Width:** The interactive dashboards usually have fixed widths or min-widths. Ensure `AppConnectShowcase` scales down (using `max-w-full` or scaling transforms) so it doesn't cause horizontal scroll on iPhone SE/small devices.
*   **Cursor Animation:** Ensure the simulated cursor animation stays within bounds on small screens (coordinates are often hardcoded in pixels). If necessary, disable complex animation on mobile or scale the container `scale-75` on small screens.

### 5. Booking CTA (`BookingCTA.tsx`)
*   **Typography:** `text-6xl` might be massive on mobile. Scale to `text-4xl` or `text-5xl`.
*   **Popup:** Ensure the new "Hur kan vi hjälpa dig?" popup doesn't cover essential content on mobile (it's `bottom-24`, which is good, but check `right-4`).

## Verification Plan

### Manual Verification
1.  **Mobile View (375px - iPhone SE/Mini):**
    *   Check Hero font sizes (no overflow).
    *   Check AppConnectShowcase (no horizontal scroll).
    *   Check BookingCTA font sizes.
    *   Verify NavBar mobile menu functions correctly.
2.  **Tablet View (768px - iPad):**
    *   Check grid transitions (1 col to 2 col).
    *   Check padding consistency.
3.  **Desktop View:**
    *   Ensure no regressions in the recent UI updates.
