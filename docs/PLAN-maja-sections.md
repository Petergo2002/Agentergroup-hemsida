# PLAN-maja-sections

## Goal
Implement the core content sections from the provided screenshots with high-end smooth scrolling animations and "HackerRank-style" aesthetics (Green/Black/Dark Mode).

## Design Analysis (Screenshots)
1.  **"Choose Your Adventure"**: Two large cards side-by-side (or stacked on mobile).
    -   *Left*: "For developers" (Agenter might use "För småföretag"?)
    -   *Right*: "For business" (Agenter might use "För enterprise"?)
    -   *Visuals*: Code snippets vs Abstract dashboard nodes.
2.  **"AI Changing Software"**: Sticky/Scroll-triggered storytelling.
    -   *Layout*: Text on the left (fading in/out), visuals on the right (fixed or parallax).
    -   *Vibe*: Clean typography, big headings.

## Proposed Components

### 1. `ChooseAdventure.tsx`
-   **Layout**: Grid (1 col mobile, 2 col desktop).
-   **Content**:
    -   Title: "Välj Din Väg" (Choose Your Adventure).
    -   Card 1: "För Företag" (Effektivisering, 24/7, CRM-synk).
    -   Card 2: "För Utvecklare/Partners" (API-integration, White label).
-   **Style**: Dark glass cards, green glow on hover, "Explore" buttons.

### 2. `ScrollStory.tsx` (Reusable)
-   **Structure**: A generic component that takes `title`, `description`, `visual`.
-   **Animation**:
    -   As user scrolls, the text `y`-translates and fades in.
    -   The visual (right side) scales up slightly (`scale: 0.95 -> 1.0`).
    -   Use `framer-motion` `useScroll` hook linked to the section ref.

## Copywriting Draft (Swedish)

### Section 1: Content Cards
-   **Header**: "Skalbarhet för alla."
-   **Card 1**: "För Småföretag"
    -   "Missar du samtal? Maja tar hand om bokningar och frågor medan du jobbar."
-   **Card 2**: "För Större Organisationer"
    -   "Full CRM-integration, anpassade workflows och dygnet-runt support."

### Section 2: Scroll Story
-   **Part A**: "AI Skriver Om Spelreglerna"
    -   "GenAI utvecklas dagligen. Maja lär sig av varje samtal och blir smartare över tid."
-   **Part B**: "Automatisera Det Vardagliga"
    -   "Låt AI hantera bokningar och FAQ. Ni fokuserar på att bygga relationer."

## Implementation Steps
1.  **Create `ChooseAdventure` component**:
    -   Use the "HackerRank" green buttons.
    -   Dark backgrounds with huge border radiuses.
2.  **Create `ScrollStory` component**:
    -   Implement the specific "Text fade + Image parallax" effect.
    -   Use placeholders (gray/green boxes) for the dashboard images until provided.
3.  **Update `page.tsx`**:
    -   Insert these sections between `HeroMaja` and `Footer`.

## Verification
-   **Scroll Feel**: Must be buttery smooth.
-   **Mobile**: Cards must stack nicely.
-   **Design**: Check contrast and "Green" accents.
