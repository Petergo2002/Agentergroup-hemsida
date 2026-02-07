# PLAN-maja-refinements

## Goal
Refine the Maja landing page based on user feedback: switch scroll sections to a vertical "Text-over-Image" layout for better visibility, implement a 3-tier pricing section at the bottom, and update copywriting for the AI configuration capabilities.

## User Review Required
> [!IMPORTANT]
> **Layout Logic**:
> - We will change the `ScrollStory` sections from `Row (Side-by-Side)` to `Column (Vertical)`.
> - **Visual Flow**: Large Text centred/left-aligned at top -> Large Full-width Dashboard Image below. This maximizes the image size as requested.

## Proposed Changes

### 1. Refactor `ScrollStory.tsx` -> `ScrollStoryVertical.tsx`
- **Layout**: Stacked vertical layout.
- **Animation**: Text fades in, Image parallax parallax from bottom or scales up.
- **Structure**:
    - Top: Title + Description (Text).
    - Bottom: Large Image Container (showing the full dashboard).

### 2. Refactor `ChooseAdventure.tsx` -> `PricingTiers.tsx`
- **Move**: Place at the bottom of the page (before Footer).
- **Structure**: 3 Columns/Cards (instead of 2).
- **Tiers**:
    1.  **Frontdesk Lite** (Entry level)
    2.  **Frontdesk Premium** (Most popular)
    3.  **Frontdesk Enterprise** (Custom/Scale)
- **Design**: "HackerRank" style cards, perhaps highlighting the middle one.

### 3. Copywriting Updates
- **Configuration Section (`konfigurera.png`)**:
    - Highlight: "Bygg din egen hjärna" (Build your own brain).
    - Keywords: RAG-system, GDPR-compliant, Self-learning, Knowledge Base.
- **Overview Section (`Overveiw.png`)**:
    - Highlight: "Full kontroll via Dashboard".

## File Updates

#### [MODIFY] `src/app/page.tsx`
- Reorder components: Hero -> Integrations -> ScrollStory1 -> ScrollStory2 -> Pricing -> Footer.
- Pass new copy props to ScrollStories.

#### [NEW] `src/app/components/PricingTiers.tsx`
- Implementation of the 3-tier pricing structure.

#### [MODIFY] `src/app/components/ScrollStory.tsx`
- Modify or create new to support `layout="vertical"` prop.

## Verification
- **Visual**: Dashboard images should be large and clear.
- **Responsiveness**: Stacking order on mobile vs desktop.
- **Content**: Ensure RAG/GDPR points are visible.
