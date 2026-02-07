# Plan: Merge Sections into FeatureScroll

## Goal
Combine the "Överblick & Insikt" and "Konfiguration & RAG" sections into a single, cohesive, premium scrolling experience. The layout will feature text content on the left (scrolling) and relevant images on the right (sticky and switching).

## User Review Required
- **Mobile Layout**: Standard behavior is to stack them (Text -> Image -> Text -> Image) or sticky header? *Recommendation: Stacked vertical for mobile, Side-by-Side for Desktop.*

## Proposed Changes

### New Component: `FeatureScroll.tsx`

#### [NEW] [FeatureScroll.tsx](file:///Users/petergorgees/Desktop/Projects/AgenterGroup/agentergroupny/src/app/components/FeatureScroll.tsx)
- **Structure**:
  - `section`: Relative container.
  - `div.grid`: 2 columns (1fr 1fr) on Desktop.
  - **Left Column (Content)**:
    - Contains `motion.div` blocks for each "step" (Overview, Configuration).
    - Each block has ample vertical spacing (`min-h-[80vh]`) to allow for comfortable scrolling.
  - **Right Column (Visuals)**:
    - Sticky container (`sticky top-20 h-screen`).
    - Contains the images positioned absolutely.
    - Uses logic to toggle opacity/scale of images based on active text section in view.

- **Props**:
  - `features`: Array of objects `{ title, subtitle, description, tags[], imageSrc }`.

- **Animation**:
  - As user scrolls to "Step 2", Image 1 fades out / scales down, Image 2 fades in / scales up.

### Existing Components

#### [MODIFY] [page.tsx](file:///Users/petergorgees/Desktop/Projects/AgenterGroup/agentergroupny/src/app/page.tsx)
- **Change**:
  - Remove the two `ScrollStoryVertical` calls.
  - Import and Add `FeatureScroll`.
  - Pass the data from the removed sections into the `features` prop of `FeatureScroll`.

## Design Enhancements ("Riktigt Snyggt")
- **Glassmorphism**: The sticky image container will have a subtle glass border and shadow.
- **Typography**: Enhanced headings with gradients (Brand Orange/White).
- **Interactive**: The active text section will be fully opaque; inactive ones will be slightly dimmed (`opacity-40`) to focus attention.

## Verification Plan

### Manual Verification
1.  **Desktop**: Scroll down. Confirm the right image stays fixed ("sticky") while text scrolls.
2.  **Transition**: Verify the image switches smoothly when the second text section reaches the center of the viewport.
3.  **Mobile**: Check that it falls back to a sensible stacked layout without breaking.

### Technical Check
- Ensure `framer-motion` `useScroll` or `Viewport` detection works correctly for triggering the switch.
