# Plan: Hemsidor Design Overhaul

## Goal Description
Redesign the `/hemsidor` page content (excluding the Hero section) to match the premium, dark-mode, orange-accented aesthetic of the main "Maja Frontdesk" landing page. The goal is a unified, high-end "Vibe Code" look.

## User Review Required
> [!NOTE]
> The Hero section will be preserved as requested. All other sections below the scroll will be visually overhauled.

## Proposed Changes

### 1. Global Design System Update
*   **Colors:** Replace generic `brand-*` utility classes with the specific Maja Orange (`#FF5D00`) and Deep Black/Grey (`#0A0A0A`, `#111`).
*   **Backgrounds:** Use "Dark Veil" or subtle noise/gradients consistent with the main page.
*   **Borders:** Use subtle `border-white/10` with `hover:border-[#FF5D00]/50` transitions.

### 2. Section: "Vad Ingår?" (Features)
*   **Current:** 3 generic cards.
*   **New Design:**
    *   **Cards:** High-end glassmorphism (`bg-[#151515]`, blur).
    *   **Icons:** Floating, glowing icons in Orange.
    *   **Typography:** Sharper headings, more breathing room.
    *   **Hover:** Glow effects on hover (Orange/Warm light).

### 3. Section: "Komplett Paket" (The Offering)
*   **Current:** Top-down text + 2 columns.
*   **New Design:**
    *   **Layout:** "Split-View" or "Bento Grid" style. Maja (AI) + Website (Visual) side-by-side.
    *   **Visual Bridge:** Graphic element connecting "Website" and "AI" to show they work as one unit.
    *   **Checks:** Use the custom Orange checkmarks from the main page style.

### 4. Section: "Process" (How it works)
*   **Current:** Simple 3-step text.
*   **New Design:**
    *   **Timeline:** A visual timeline or horizontal step flow.
    *   **Numbers:** Large, transparent numbering (e.g., "01" massive in background) overlayed with crisp white text.
    *   **Animation:** Staggered reveal of steps.

### 5. Section: CTA (Booking)
*   **Current:** Gradient box.
*   **New Design:**
    *   **Style:** Match the main `BookingCTA.tsx`. Black background, massive typography ("Ready to start?"), Orange CTA button with glow.
    *   **Element:** Add the "Hur kan vi hjälpa dig?" popup or similar playful element if appropriate, or keep it strictly business but "Vibe-y".

## Verification Plan

### Manual Verification
1.  **Visual Check:** Compare `/hemsidor` against the main page. Do they feel like siblings?
2.  **Responsiveness:** Ensure new grids (Features, Process) stack correctly on mobile.
3.  **Hero Preservation:** Verify the Hero section remains exactly as is.

### Comparison Checklist
- [ ] Feature cards have "Maja" glow?
- [ ] Step numbers are stylized?
- [ ] Orange `#FF5D00` is the primary accent?
