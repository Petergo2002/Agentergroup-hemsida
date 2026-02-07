# Plan: Scroll Alignment & Padding Fix

## Goal
Fix vertical alignment and scrolling behavior in the "Överblick" (FeatureScroll) section. The user reported that elements (specifically the left text column) appear "too high up" and the transition between sections feels "stuck" or misaligned during scroll.

## Diagnosis
- **Symptom**: "Left frame too high up", "Frame holds itself/stuck".
- **Likely Cause**:
    - `FeatureText` height (`min-h-[80vh]`) might be too short relative to the sticky image container (`h-screen`), causing text to scroll past "too fast" or sit too high while the image is pinned.
    - `sticky top-0` on the image column might be fighting with the parent section padding.
    - `useInView` margin (`-50% ...`) might be triggering the state change too early/late, causing the image to switch before the text is optimally aligned.

## Proposed Changes

### 1. Adjust Layout & Spacing
#### [MODIFY] [FeatureScroll.tsx](file:///Users/petergorgees/Desktop/Projects/AgenterGroup/agentergroupny/src/app/components/FeatureScroll.tsx)
-   **Increase Text spacing**: Change `FeatureText` from `min-h-[80vh]` to `min-h-screen` (or `min-h-[100vh]`) to match the sticky container height. This ensures 1:1 scroll mapping.
-   **Centering**: Ensure `justify-center` in `FeatureText` is actually centering content within the viewport.
-   **Padding**: Add `pb-32` or similar to the parent section to allow the last item to scroll fully into view without hitting the footer immediately.

### 2. Fine-tune Sticky Behavior
-   Ensure the Right Column (Images) is vertically aligned perfectly. currently `flex items-center justify-center` inside `h-screen sticky top-0`. This is generally correct, but if the parent container isn't tall enough, it won't scroll.
-   **Fix**: Verify parent layout. If `FeatureText` items are taller, the parent grows, allowing the sticky image to stay pinned longer.

### 3. Polish Transitions
-   Adjust `useInView` margin if the switch happens too early.
-   Ensure `motion.div` transitions for the images do not clip or overlap weirdly (zIndex management).

## Verification Plan
1.  **Manual Scroll Test**:
    -   Scroll slowly from "Överblick & Insikt" to "Konfiguration & RAG".
    -   Verify text is vertically centered when the image switches.
    -   Verify text doesn't hit the top edge (`NavBar`) too early.
2.  **Responsiveness**: Check mobile view (where sticky is disabled) vs Desktop.
