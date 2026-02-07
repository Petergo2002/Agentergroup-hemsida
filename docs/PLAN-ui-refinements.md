# Plan: UI Refinements (NavBar, Hero, Booking)

## Goal Description
Implement specific UI refinements requested by the user:
1.  **Booking CTA Text:** Simplify the copy in the final section.
2.  **NavBar:** Streamline links (remove "Boka Demo"), ensure "Kom igång" anchors to the Booking section, and keep "Maja AI".
3.  **Hero Padding:** Increase spacing between the fixed NavBar and the Hero content.
4.  **Popup Design:** Add a directional arrow to the "Hur kan vi hjälpa dig?" popup pointing towards the chat widget.

## User Review Required
> [!NOTE]
> The "Kom igång" button in the NavBar will anchor scroll to the bottom `BookingCTA` section.

## Proposed Changes

### 1. Booking CTA Updates
*   **File:** `src/app/components/BookingCTA.tsx`
    *   **Text Change:** Remove *"Varför boka ett möte för att höra vad vi kan göra? Få ett smakprov på din framtid direkt."*.
    *   **Retention:** Keep *"Maja sköter vår mötesbokning – dygnet runt."*
    *   **Anchor:** Add `id="booking-cta"` to the `<section>` element to enable smooth scrolling from the NavBar.
    *   **Popup Enhancement:** Add a visual arrow (SVG) to the popup container, pointing downwards to the chat widget location.

### 2. NavBar Updates
*   **File:** `src/app/components/NavBar.jsx`
    *   **Links:** Remove the "Boka demo" object from the `links` array.
    *   **Action Button:** Change the "Kom igång" button `href` from `#demo` to `#booking-cta`.
    *   **Mobile Menu:** Ensure these changes are reflected in the mobile view as well.

### 3. Hero Section Spacing
*   **File:** `src/app/components/HeroMaja.tsx`
    *   **Styling:** Increase the top padding `pt-20` to `pt-32` (or appropriate value) to separate the content from the fixed NavBar.

## Verification Plan

### Manual Verification
1.  **NavBar Check:**
    *   Confirm "Boka Demo" is gone.
    *   Click "Kom igång" -> Verify smooth scroll to the bottom Booking section.
2.  **Hero Check:**
    *   Visually verify increased space between the NavBar and "AI Front Desk MAJA" badge.
3.  **Booking Section Check:**
    *   Verify text is simplified (only "Maja sköter vår mötesbokning...").
    *   Verify the popup appears with a downward-pointing arrow indicating the chat widget.
