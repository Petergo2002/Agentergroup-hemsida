# Plan: Booking & "Try Maja" CTA Redesign

## Goal
Replace the existing Pricing/SaaS section with a high-impact "Call to Action" section.
The focus shifts from "Here is a price list" to "Experience the value right now".
We want to drive two actions:
1.  **Book a meeting** (Human connection).
2.  **Use the Maja Widget** (Product Demo).

## Concept: "The Ultimate Demo is Right Here"
Instead of showing static features, we challenge the user to test the product immediately.
*   **Vibe**: Confident, premium, "Try before you buy".
*   **Core Message**: "Maja is already helping you on this page. Let her handle your booking too."

## Design Specifications

### 1. The Section
*   **Background**: Deep black/dark gradients to match the new Hero/Showcase.
*   **Typography**: Big, bold headline. "Testa Maja live."
*   **Subtext**: "Varför gissa? Vår chatt-widget 'Maja' finns nere i hörnet. Fråga henne om priser, funktioner eller be henne boka ett möte med oss."

### 2. The Actions
*   **Primary Button**: "Boka Demo" (Opens booking link/modal).
*   **Secondary Action**: A visual arrow or spotlight pointing towards the bottom-right corner (where the widget lives), with text "Eller chatta med henne nu ↘".

### 3. Visuals
*   **Abstract**: Maybe a subtle wave or connection line flowing from the text towards the widget.
*   **Mockup**: No heavy mockups needed here, the *real* widget is the hero.

## Implementation Steps

### Phase 1: Cleanup
*   **Remove**: `PricingSection.tsx` (or hide it).
*   **Create**: `BookingCTA.tsx`.

### Phase 2: Implementation
*   **Headline**: "Upplev framtiden. Nu."
*   **Copy**: "Vi har inga säljare. Vi har Maja. Prata med henne direkt här på sidan för att boka din demo."
*   **Button**: Big, glowing brand-orange button for direct booking.
*   **Visual Cue**: An animated element (arrow/pulse) drawing eyes to the bottom right.

## Verification
*   **Aesthetic**: fits the "Super Sharp" theme.
*   **Flow**: Users understand they can chat *or* click.
