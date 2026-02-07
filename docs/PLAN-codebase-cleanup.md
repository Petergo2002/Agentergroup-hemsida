# Plan: Codebase Cleanup (Legacy Removal)

## Goal
Remove unused components and legacy files from the previous design iteration to keep the codebase clean and maintainable. The new "Super Sharp" design is now fully implemented in `page.tsx`.

## Context Check
We have verified that `page.tsx` now uses:
*   `NavBar`
*   `HeroMaja`
*   `IntegrationShowcase`
*   `ScrollReveal`
*   `UseCaseShowcase`
*   `AppConnectShowcase` (in FeatureSection)
*   `KnowledgeBaseShowcase` (in FeatureSection)
*   `BookingCTA`
*   `Footer`

## Components to Delete (Unused)

### Legacy Hero & Visuals
*   `src/app/components/Hero.jsx` (Old Hero)
*   `src/app/components/Threads.jsx` (Used in old Hero)
*   `src/app/components/Orb.jsx` (Used in old Hero)
*   `src/app/components/Orb.module.css`
*   `src/app/components/DarkVeil.tsx`

### Legacy Sections (Previous Layout)
*   `src/app/components/PricingTiers.tsx` (Replaced by `BookingCTA`)
*   `src/app/components/About.jsx`
*   `src/app/components/Contact.jsx`
*   `src/app/components/FAQ.jsx`
*   `src/app/components/Process.jsx`
*   `src/app/components/Security.jsx`
*   `src/app/components/Services.jsx`
*   `src/app/components/WebsiteDevelopment.jsx`
*   `src/app/components/ChooseAdventure.tsx`
*   `src/app/components/NavBarSimple.jsx`
*   `src/app/components/ToolsShowcase.jsx`
*   `src/app/components/VapiWidget.jsx`

## Task Breakdown

### 1. Safety Check
*   [ ] Run `npm run build` *before* deleting to ensure current state is stable.

### 2. Deletion
*   [ ] Delete the listed files.

### 3. Verification
*   [ ] Run `npm run dev` and check for import errors.
*   [ ] Run `npm run build` to confirm clean build.
