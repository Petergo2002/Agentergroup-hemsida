# PLAN-maja-redesign

## Goal
Refactor Agenter Group homepage to a super simplistic, high-end "AI Front Desk" (MAJA) experience with smooth scrolling and animations, replacing the current multi-section design.

## User Review Required
> [!IMPORTANT]
> **Design Confirmation**:
> - We are assuming "HackerRank" vibe = **Dark Mode** + **Vibrant Green Accents** + **Clean Typography**. Please confirm.
> - **Scope**: We will remove/archive current sections (`Services`, `About`, `Process`, etc.) from the homepage. Are there any sections you strictly want to keep?

## Proposed Changes

### 1. New Design Architecture
- **Theme**: Dark mode, minimalist, distinct typography (Inter/Poppins or Mono for code vibes).
- **Core Experience**: Smooth scrolling (using `lenis` or `framer-motion`).
- **Animations**: Entrance animations, hover effects, "alive" interface.

### 2. Component Refactoring

#### [MODIFY] `src/app/page.tsx`
- Remove: `Hero`, `Services`, `ToolsShowcase`, `About`, `Security`, `FAQ`, `Process`, `WebsiteDevelopment`.
- Add:
    - **`HeroMaja`**: Simplistic, focus on "MAJA" branding.
    - **`IntegrationMarquee`**: Infinite scroll of apps (Calendar, CRM, Mail).
    - **`SmoothScrollWrapper`**: Global smooth scrolling context.

#### [NEW] `src/app/components/HeroMaja.tsx`
- Minimalist hero using the uploaded design reference (visualize based on description: clean text, centered or split, high-end 3D or gradient elements).

#### [NEW] `src/app/components/IntegrationShowcase.tsx`
- Visualizing connection to Calendar, CRM, Mail.
- Likely a bento grid or marquee style.

#### [MODIFY] `src/app/components/NavBar.jsx`
- Simplify links.
- Focus on "Get Maja" or "Demo".

#### [MODIFY] `src/app/globals.css`
- Update color variables to match the new "HackerRank" aesthetic.
- Ensure `html { scroll-behavior: smooth; }` is managed correctly with Lenis.

## Verification Plan
1. **Visual Check**: Smooth scrolling must feel premium (no lag).
2. **Responsiveness**: Check mobile vs desktop (minimalist often hides complexity on mobile).
3. **Links**: Ensure "Maja AI assistent" link works.

## Questions for User
1. Do you have the specific hex codes for the green/accent colors you want?
2. Should we keep the "Blogg" and "Hemsidor" links in the nav, or remove them to focus 100% on Maja?
