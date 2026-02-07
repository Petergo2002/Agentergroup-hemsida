# Plan: Feature Showcase Redesign (Stacking Cards)

## Goal
Completely replace the current "Split-Scroll" (left text, right sticky) design which feels disjointed and prone to alignment issues. 
Create a new, ultra-premium **"Stacking Cards"** interaction for the "Överblick & Insikt" + "Konfiguration & RAG" sections.

## Design Concept: "The Deck" (Stacking Parallax)
Instead of two independent columns trying to sync, we treat each feature (Overview, RAG) as a massive, self-contained **"Card"**.

1.  **Immersive Cards**: Each section is a full-viewport-height (or nearly full) card containing both the Visual (Component) and the Text.
2.  **Sticky Stacking**:
    *   As the user scrolls down, the first card (Overview) hits the top and "sticks".
    *   As scrolling continues, the first card stays pinned but slightly **scales down** (0.95) and dimmed, creating depth.
    *   The second card (Configuration) **slides up** from the bottom to cover the first one.
3.  **Unified Layout**:
    *   Text and Visuals are side-by-side *within* the card.
    *   This forces perfect alignment because they are in the same container.
    *   Alternating layouts (Card 1: Text Left / Visual Right. Card 2: Visual Left / Text Right) to create rhythm.

## Proposed Components

### 1. `FeatureStack.tsx` (New Container)
-   Handles the scroll progress context.
-   Manages the stacking logic using `sticky` position and `framer-motion` transforms based on scroll input.

### 2. `FeatureCard.tsx` (Reusable Slide)
-   **Props**: `title`, `subtitle`, `description`, `component`, `alignment` ('left' | 'right').
-   **Visual**:
    -   Dark glassmorphism background (`bg-[#0A0A0A]/90`).
    -   Border glow.
    -   Layout: Flex/Grid with responsive behavior.

### 3. Migration
-   **Remove**: `FeatureScroll.tsx` text-column logic.
-   **Integrate**: Use `AppConnectShowcase` and `KnowledgeBaseShowcase` as the content for these cards.

## Task Breakdown
1.  **Scaffold**: Create `FeatureStack.tsx` and `FeatureCard.tsx`.
2.  **Implement Card Logic**:
    -   Use `sticky top-X`.
    -   Add `useScroll` to drive the "Scale Down" effect of the previous card.
3.  **Compose Content**:
    -   **Card 1**: Överblick (Hubspot/Salesforce text) + `AppConnectShowcase`.
    -   **Card 2**: Hjärnan (RAG/GDPR text) + `KnowledgeBaseShowcase`.
4.  **Polish**: Add "enter" animations for the text when the card locks into place.

## Verification
-   **Feeling**: Does it feel like a cohesive presentation?
-   **Alignment**: Is the text always visible when the component is active? (Yes, because they share a container).
-   **Mobile**: Cards stack naturally without parallax on mobile.
