# Plan: Scroll Reveal Polish (Super Sharp & Premium)

## Goal
Transform the `ScrollReveal` component into a high-end, smooth textual experience. Remove the awkward "Sen" phrasing and elevate the "MAJA" highlight to be the centerpiece of the section.

## The Changes

### 1. Content update
*   **Remove "Sen"**: The flow should be "Din Egna Assistent. MAJA".
*   **Typography**: Use a tighter tracking (letter-spacing) for a modern, bold look.

### 2. "MAJA" Highlight (The "Hero" Treatment)
*   **Gradient Text**: Instead of flat orange, use a subtle gradient (Orange -> Gold) for "MAJA".
*   **Glow**: Add a specific, localized glow behind "MAJA" that intensifies as it reveals.
*   **Scale**: Increase the visual weight of "MAJA" slightly more to distinguish it from the intro words.

### 3. Transition Polish
*   **Smoothness**: Ensure the color transition from Dark Grey (`#333`) to White/Orange is linear and ghost-free.
*   **Subtext**: Improve the subtext entrance. Instead of a simple fade, maybe a slight blur-in effect (`filter: blur(10px)` -> `blur(0)`).

## Implementation Steps

### Refactor `ScrollReveal.tsx`
1.  **Update `words` array**: Remove "Sen".
2.  **Enhance `motion.span`**:
    *   Add conditional styling for "MAJA".
    *   Implement `background-clip: text` for the gradient effect on "MAJA".
3.  **Refine Background Aura**: Make the background aura react specifically when "MAJA" is in focus.

## Verification
*   **Visual**: Check that "Din Egna Assistent." flows naturally into "MAJA".
*   **Feel**: Scroll interaction should feel "heavy" and premium, not jittery.
*   **Mobile**: Ensure the text doesn't break awkwardly on small screens.
