# Plan: Final Fit & Finish (Premium Layout)

## The Problem
The previous "aggressive" full-width attempt (`w-[99%]`) likely broke visual containment, causing the dashboard components to look floating, squeezed, or clipped because they didn't have a defined aspect ratio to latch onto.

## The Goal
Create a **"Standard Premium"** layout (Apple/Stripe style):
1.  **Robust Container**: Use a wide but controlled container (`max-w-[1800px]`, `w-[95vw]`) to ensure rounded corners and shadows aren't cut off by the browser window.
2.  **Smart Layouts**:
    *   **Card 1 (Overview)**: Side-by-Side (Text Left / Visual Right).
    *   **Card 2 (RAG/Brain)**: **Stacked Layout** (Text Top / Visual Bottom). This solves the "squeezed" issue by giving the intricate RAG dashboard 100% of the card width.
3.  **Perfect Scaling**: Ensure inner components scale down proportionally (contain) rather than clipping.

## Proposed Changes

### 1. Layout Structure (`FeatureCard.tsx`)
We will support two layout modes based on the feature type:

*   **Mode A (Split)**: Default. Good for "Overview".
    *   Text: 35%
    *   Visual: 65%H
*   **Mode B (Stacked)**: For "Konfiguration & RAG".
    *   Text: Absolute overlay at top-left or separate top row (height 20%).
    *   Visual: Fills bottom 80% (Full Width).

### 2. Safeguarding Visuals
*   **Aspect Ratio Preservation**: Use `aspect-ratio` on the visual container to prevent it from becoming too tall or thin.
*   **CSS Scaling**: Use `transform: scale()` with `transform-origin: top center` (or center) for the inner components to fit them into the available slot without reflowing content.

### 3. Visual Polish
*   **Background**: Deep, rich black (`#0A0A0A`) with subtle noise or gradient.
*   **Borders**: Thinner, more subtle borders (`border-white/5`).
*   **Shadows**: Soft, expansive shadows vs harsh compact ones.

## Task Breakdown
1.  **Refactor `FeatureCard`**: Support `layout="split" | "stacked"` prop.
2.  **Update `FeatureStack`**: Pass `layout="stacked"` to the RAG feature.
3.  **Fix Component Scaling**: Add a "ScaleWrapper" helper that ensures the Dashboard content (`AppConnect`, `KnowledgeBase`) scales to fit its parent container nicely.

## Verification
*   **Visual Check**: Does "RAG" dashboard look "huge" and clear?
*   **Clipping**: Ensure no text or list items are cut off at the bottom.
