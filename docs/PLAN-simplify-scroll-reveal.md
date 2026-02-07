# Plan: Simplify Scroll Reveal (Modern & Minimalist)

## The Pivot
The previous iteration felt "too much" (over-designed, complex effects). We are pivoting to **Minimalism**.
Goal: "Clean, Modern, Simple".

## Design Philosophy
*   **Typography First**: Rely on excellent font weight and spacing, not heavy effects.
*   **Subtle Animation**: Smooth opacity and position changes. No erratic scaling or intense blurs.
*   **Clarity**: The message "Din Egna Assistent. MAJA" should be instantly readable and elegant.

## Proposed Changes

### 1. Simplify `ScrollReveal.tsx`
*   **Remove**: The per-word logic for scale/blur/glow spirals.
*   **Remove**: The heavy "Aurora" background (or reduce opacity to 5%).
*   **Implement**:
    *   **Sticky container**: Keep the scroll-lock mechanism.
    *   **Text Reveal**: A unified phrase reveal.
    *   **"MAJA"**: Simple, bold, Brand Orange (`#FF5D00`). No complex gradients unless very subtle.

### 2. The Animation Flow
1.  **Start**: Screen is dark/clean.
2.  **Scroll**: "Din Egna Assistent" fades in smoothly (Opacity 0 -> 1).
3.  **Continue**: "MAJA" reveals (maybe a simple `y` slide-up or opacity).
4.  **End**: Subtext fades in.

### 3. Visual Style
*   **Font**: Inter/Sans-serif. Bold.
*   **Colors**: Text is White/80. "MAJA" is Orange. Background is Black/100ish.

## Task Breakdown
1.  **Clean Slate**: Strip complex `useTransform` chains from `ScrollReveal.tsx`.
2.  **Layout**: Center aligned, nice leading.
3.  **Refinement**: Tweak timing so it feels "expensive" but quiet.

## Verification
*   **Feel**: Does it feel calm?
*   **Performance**: Should be lightweight.
