# Plan: Maja Rebranding & UI Enhancements

## Goal Description
Reframe "Maja" from a voice/chat bot to an **"AI Frontdesk"** across the site. Specifically, update terminology to avoid "röstrobot" and "chatbot," clarify that Maja handles "meeting bookings" (not sales), and adjust the call-to-action section to remove the manual chat button in favor of a proactive popup.

## User Review Required
> [!IMPORTANT]
> **Clarification on "Inga Säljare" Replacement:**
> The plan proposes replacing "Inga Säljare. Bara AI." with **"Inga Säljare. Bara Resultat."** (or similar) to avoid using "AI"/ "Maja" in that specific header as requested.
> 
> The text *"Varför boka ett möte för att höra vad vi kan göra? Få ett smakprov på din framtid direkt."* will be verified to ensure it is prominently displayed in the main copy block.

## Proposed Changes

### Content Updates (Terminology & Messaging)

#### [Rebranding: "Röstrobot/Chatbot" → "AI Frontdesk"]
*   **File:** `src/app/page.tsx`
    *   **Change:** In the `FeatureSection` (Knowledge Base), replace:
        *   `"Maja är inte bara en röstrobot..."`
        *   **To:** `"Maja är en intelligent AI Frontdesk..."` (or similar phrasing that avoids "robot").

*   **File:** `src/app/components/UseCaseShowcase.tsx`
    *   **Change:** Review line describing Maja as a "chatt-widget" (Line 60).
        *   **To:** "AI Frontdesk-widget" or "Intelligent assistent".

#### [Role Clarification: "Försäljning" → "Mötesbokning"]
*   **File:** `src/app/components/BookingCTA.tsx`
    *   **Change:** Line 49 `"Maja sköter vår försäljning – dygnet runt."`
        *   **To:** `"Maja sköter vår mötesbokning – dygnet runt."`

### UI Updates (BookingCTA Section)

#### [Remove Manual Chat Button]
*   **File:** `src/app/components/BookingCTA.tsx`
    *   **Action:** Remove the "Starta Chatten" button entirely.
    *   **Rationale:** The user wants to rely on the proactive popup instead.

#### [Add Contextual Popup]
*   **File:** `src/app/components/BookingCTA.tsx`
    *   **Action:** Implement a floating popup component (positioned bottom-right, near the widget) that appears **only when this section is in view**.
    *   **Content:** "Hur kan vi hjälpa dig?"
    *   **Behavior:** Use Framer Motion (`AnimatePresence`) to slide/fade it in when the user scrolls to the Booking section (`whileInView` or `useInView`).

#### [Header Update: "Inga Säljare..."]
*   **File:** `src/app/components/BookingCTA.tsx`
    *   **Change:** Line 25 `"Inga Säljare. Bara AI."`
    *   **To:** `"Inga Säljare. Bara Resultat."` (or user specified alternative).
    *   **Change:** Ensure the copy *"Varför boka ett möte..."* is correctly positioned as the main value proposition.

## Verification Plan

### Automated Tests
*   **Build Check:** Run `npm run build` to ensure no syntax errors in modified components.

### Manual Verification
1.  **Terminology Check:** Search codebase for "röstrobot", "chat bot", "försäljning" (in context of Maja) to ensure all instances are updated.
2.  **Visual Check:**
    *   Navigate to the Landing Page.
    *   Scroll to the "Knowledge Base" feature section -> Verify text "AI Frontdesk".
    *   Scroll to `BookingCTA` section.
    *   **Verify:** "Starta chatten" button is GONE.
    *   **Verify:** "Mötesbokning" text is present.
    *   **Verify:** A popup "Hur kan vi hjälpa dig?" appears in the bottom right corner when the section enters the viewport.
