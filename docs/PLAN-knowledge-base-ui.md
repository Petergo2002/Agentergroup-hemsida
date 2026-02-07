# Plan: Knowledge Base UI & Scroll Refinement

## Goal
1.  **New UI Component**: Create `KnowledgeBaseShowcase.tsx` reproducing the "Brain/Knowledge Source" UI from the provided screenshot.
    *   **Visuals**: Dark theme, "Upload Files", "Paste Text", "Read Website" cards.
    *   **Animation**: Simulate a file upload or link scraping process (e.g., drag & drop effect, progress bar).
2.  **Scroll Fix**: Optimize `FeatureScroll.tsx` to eliminate the "stuck frame" feeling and ensure smooth transitions between sections.
3.  **Cleanup**: Fix lingering TypeScript errors in `AppConnectShowcase.tsx`.

## User Review Required
> [!IMPORTANT]
> The "Scroll Glitch" might be due to the `sticky` container height relative to the scrolling text. We will adjust the section padding and sticky constraints to ensure a smoother "handover" between slides.

## Proposed Changes

### 1. Fixes & Cleanup
#### [MODIFY] [AppConnectShowcase.tsx](file:///Users/petergorgees/Desktop/Projects/AgenterGroup/agentergroupny/src/app/components/AppConnectShowcase.tsx)
- Refactor animation logic to use `useAnimation` hook (resolves TypeScript errors with `motion` props).

### 2. New Component
#### [NEW] [KnowledgeBaseShowcase.tsx](file:///Users/petergorgees/Desktop/Projects/AgenterGroup/agentergroupny/src/app/components/KnowledgeBaseShowcase.tsx)
- **Structure**:
    - Tabs: "Hjärnan", "Jobbet", "Regler", "Widget".
    - 3 Cards: "Ladda upp filer", "Klistra in text", "Läs in hemsida".
    - List: "Inlärda källor" (simulated list of PDFs, URLs).
- **Animation Loop**:
    1.  Cursor moves to "Läs in hemsida" (Read Website).
    2.  Types a URL (e.g., `agentergroup.com`).
    3.  Clicks "Läs in".
    4.  New item appears in the list with "Inlärd" status.

### 3. Integration & Polish
#### [MODIFY] [FeatureScroll.tsx](file:///Users/petergorgees/Desktop/Projects/AgenterGroup/agentergroupny/src/app/components/FeatureScroll.tsx)
- Import and use `KnowledgeBaseShowcase`.
- **Scroll Logic Update**:
    - Ensure parent container has sufficient height (`min-h-[x]`) for the sticky element.
    - Check `framer-motion` presence/exit transitions to prevent "stacking" weirdness.
    - Add `layout` prop to motion components to handle smooth resizing/repositioning.

#### [MODIFY] [page.tsx](file:///Users/petergorgees/Desktop/Projects/AgenterGroup/agentergroupny/src/app/page.tsx)
- Update the `features` array to include the new Knowledge Base component for the "Konfiguration & RAG" section.

## Verification Plan
### Automated Tests
- Run build to verify no TS errors: `npm run build`

### Manual Verification
- **UI Match**: Verify `KnowledgeBaseShowcase` looks like the screenshot (dark mode, orange accents).
- **Animation**: Confirm the "Read Website" simulation plays smoothly.
- **Scroll**: Scroll up and down between "Överblick" and "Konfiguration". Ensure the image transition is smooth and doesn't feel "stuck" or jittery.
