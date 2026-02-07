# Plan: Vertical Layout Refinement (Frameless & Full Width)

## Goal
Remove the heavy "card" frames/borders around the feature visualizations (`AppConnect` and `KnowledgeBase`) so they appear to sit directly on the page. Ensure both components occupy the same width and visual weight for a consistent, premium "flow".

## The Problem
*   Current `FeatureSection` adds a `border`, `bg-[#050505]`, and `shadow-2xl` wrapper.
*   Inner components might also have their own padding/constraints.
*   The result is a "box inside a box" look, which reduces available space and looks "squeezed".

## The Solution
1.  **Strip `FeatureSection` Wrapper**: Remove the visible container styles. The `FeatureSection` should just position the component, not frame it.
2.  **Standardize Widths**: Ensure both `AppConnectShowcase` and `KnowledgeBaseShowcase` are styled to fill `100%` of their container, or a consistent `max-w`.
3.  **Visual Flow**: Content will flow: Title -> Full Width Visual -> Title -> Full Width Visual.

## Task Breakdown

### 1. Refactor `FeatureSection.tsx`
*   **Remove**: `bg-[#050505]`, `border`, `border-white/5`, `shadow-2xl`, `ring-1`.
*   **Keep**: The `glow` effect (optional, or make it more subtle/behind).
*   **Layout**: Ensure the container allows the passed `component` to span full width.

### 2. Refactor `AppConnectShowcase.tsx`
*   **Check**: Does it have an internal `max-w-4xl` or similar?
*   **Action**: Change container to `w-full`. If it has a background card, ensure it looks good standing alone.

### 3. Refactor `KnowledgeBaseShowcase.tsx`
*   **Check**: Internal constraints.
*   **Action**: Match the width/style of `AppConnectShowcase`.

### 4. Spacing & Alignment
*   Verify vertical spacing between the Description and the Visual is consistent.
*   Verify vertical spacing between the Visual and the NEXT Title is consistent.

## Verification
*   **Visual Check**: Do components look like they belong to the page, not a box?
*   **Width Check**: Are they visually balanced (same width)?
