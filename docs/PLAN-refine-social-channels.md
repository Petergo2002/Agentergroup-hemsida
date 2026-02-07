# Plan: Refine Social Channels Card

## Goal
Optimize the "Länk i dina kanaler" card to better represent the "Link in Bio" use case. Fix floating icon positioning and update the visual language to be more representative of a social media profile link.

## Changes

### 1. Floating Icons Overhaul
*   **Current Issue**: Icons float awkwardly and lack variety.
*   **New Icons**: Instagram, LinkedIn, Snapchat (Ghost/Sparkles), Twitter/X, Facebook.
*   **Positioning**: Distribute them organically around the "Phone" visual to create a cloud of connections.
*   **Visuals**: Give them distinct brand colors or a unified "glass" look with brand accents.

### 2. "Link in Bio" Visual
*   **Concept**: Change the "Chat Button" to a classic "Linktree/Bio Link" button.
*   **Text**: Change "Starta chatt" -> "Länk i bio" or "Maja AI".
*   **Subtext**: "Din länk till allt".
*   **Styling**: Make it look like a highly clickable, pill-shaped bio link.

### 3. Aesthetics
*   **Phone Mockup**: Refine the profile header to look more like a social profile (e.g., Instagram/TikTok profile header).
*   **Polish**: Better shadows and hover effects.

## Implementation Details

### `UseCaseShowcase.tsx`
1.  **Imports**: Add `Linkedin`, `Twitter`, `Facebook`, `Instagram` from `lucide-react`. (Use reasonable substitutes if specific brand icons are missing in the specific version, e.g., `Ghost` for Snapchat).
2.  **Refactor `FloatingIcon`**: Allow custom colors and sizes.
3.  **Update coordinates**: Hardcode pleasant `x, y` positions relative to the center.
4.  **Update Phone UI**:
    *   Profile pic + "Link in bio" text.
    *   The main button becomes the "Maja Link".

## Verification
*   **Visual**: Icons should not obscure the central "Link" button.
*   **Animation**: Float animation should be subtle (`duration: 4-6s`).
