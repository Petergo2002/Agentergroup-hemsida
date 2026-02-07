# Plan: Static Social Icons (Clean & Stable)

## Goal
The floating icons are too "messy" and clutter the UI. The goal is to ground them.
We will move the icons to a **static, organized position** in the **top-left** of the interface visual ("rutan").

## The Changes

### 1. Visualization Overhaul (`UseCaseShowcase.tsx`)
*   **Remove**: `FloatingIcon` logic and animation loops.
*   **Container**: Create a `div` row/grid for the icons properly positioned.
*   **Position**: `absolute top-6 left-6` (inside the visual container).
*   **Styling**:
    *   **Size**: Small and crisp (`w-8 h-8` or smaller).
    *   **Look**: Unified style? Or keep brand colors? User requested "small". We will keep the brand colors but make them compact.
    *   **Static**: No movement. Just clean placement.

### 2. Layout
*   **Visual Container**: The phone mockup `div`.
*   **Placement**:
    *   Top Left corner.
    *   Cluster them horizontally or in a small 2x3 grid?
    *   User said "uppe åt vänster", implying a cluster.
    *   *Decision*: A horizontal row or tight wrapping flex row in the top left.

## Task Breakdown
1.  **Refactor**: Strip `FloatingIcon` animation code.
2.  **Implement**: `StaticIcon` component (or inline).
3.  **Place**: Insert them into the top-left of the `#0A0A0A` visual container.

## Verification
*   **Visual**: Icons sits firmly in top-left.
*   **Clarity**: Does not overlap with the "Notch" or central content.
