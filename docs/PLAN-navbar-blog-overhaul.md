# Plan: Unified Branding & Navigation

## Goal Description
Unify navigation and branding across the site. This includes a single consistent `NavBar`, replacing all "AI-receptionist" copy with **"AI Frontdesk Maja"** (or "Maja" where shorter copy is needed), directing booking intent to the chat widget instead of consultation forms, and giving the Blog page a premium visual overhaul that matches the main site.

## User Review Required
> [!NOTE]
> The "Kom igång" button will be **kept** in the NavBar. Users will primarily navigate via "AI Frontdesk", "Hemsidor", and "Blogg", with "Kom igång" scrolling to a shared CTA anchor on the current page.

## Proposed Changes

### 1. Global Navigation (`NavBar.jsx`)
*   **Links:** Update the link structure to:
    *   `AI Frontdesk` (href: `/`) - *The main Maja product.*
    *   `Hemsidor` (href: `/hemsidor`)
    *   `Blogg` (href: `/blogg`)
*   **Action Button:** **KEEP** the "Kom igång" button.
    *   **Behavior:** Scroll to the bottom CTA section on the *current* page.
    *   **Implementation:** Ensure the final CTA section on `/`, `/hemsidor`, and `/blogg` shares the same ID (e.g., `id="booking-cta"`) so the anchor works universally.
*   **Consistency:** Use this main `NavBar.jsx` across all pages (replace `NavBarSimple` on Hemsidor).

### 2. Hemsidor Page (`HemsidorClient.tsx`)
*   **Rebranding:** Replace all "AI-receptionist" mentions with **"AI Frontdesk Maja"** (or "Maja" where shorter copy is needed). Emphasize that the website is integrated with **her**.
*   **CTA Update:** Replace the "Boka Konsultation" button. Instead of a calendar link or scroll, guide the user to **"Prata med Maja"** (the chat widget).
    *   Text: `Prata med Maja`
    *   Action: Open the widget if an API exists; otherwise explicitly direct attention to the bottom-right chat.
    *   Supporting copy: `Maja bokar mötet åt dig.`

### 3. Blog Page Overhaul (`src/app/blogg/page.tsx`)
*   **Theme:** Replace `slate-900` gradients with the Maja signature **Black (#000000)** and **Orange (#FF5D00)** glow.
*   **Header:** Redesign the blog header to use `DarkVeil` or the same ambient effects used on the main page.
*   **Cards:** Update article cards to the premium glassmorphism style (`bg-[#0F0F0F]`, `border-white/5`, `hover:border-[#FF5D00]`).
*   **Typography:** Match the main site's font stack and "Vibe" headers.

## Verification Plan

### Manual Verification
1.  **Navigation Flow:** Click between Home, Hemsidor, and Blog. The NavBar is identical and links are correct.
2.  **CTA Anchor:** Click "Kom igång" on `/`, `/hemsidor`, and `/blogg` and confirm it scrolls to `#booking-cta`.
3.  **Branding Check:** Scan `/hemsidor` for any leftover "AI-receptionist" terms.
4.  **Widget CTA:** Click "Prata med Maja" on `/hemsidor` and verify it opens the widget or clearly points to the bottom-right chat.
5.  **Visual Check:** Verify the Blog page feels consistent with the Home page (Dark/Orange/Premium).
