# Plan: Cinematic Intro Animation

## Goal
Create a high-quality ("rigkit snygg") beginning animation when the user opens the page. The effect should be a smooth, satisfying "fade in" that transitions seamlessly into the Hero section, giving the site a premium feel.

## User Review Required
- **Animation Timing**: The proposed duration is ~1.5s total. Is this too slow/fast?
- **Loader Style**: Currently planning a simple black fade-out. Do we want a logo or loading spinner before the fade?

## Proposed Changes

### Dependencies
- **framer-motion**: Already installed.

### New Components

#### [NEW] [IntroLoader](file:///Users/petergorgees/Desktop/Projects/AgenterGroup/agentergroupny/src/components/IntroLoader.tsx)
- **Purpose**: Covers the screen initially and handles the "curtain lift" or "fade out" effect.
- **Logic**:
  - `fixed inset-0 z-50 bg-black`
  - Uses `AnimatePresence` to exit gracefully.
  - On mount, waits briefly, then animates opacity to 0 and removes itself.

### Existing Components

#### [MODIFY] [page.tsx](file:///Users/petergorgees/Desktop/Projects/AgenterGroup/agentergroupny/src/app/page.tsx)
- **Change**:
  - Import `IntroLoader`.
  - Add state `const [loading, setLoading] = useState(true)`.
  - Pass `onComplete={() => setLoading(false)}` to loader.
  - Wrap `HeroMaja` or use a shared context to trigger Hero animations *after* the loader starts fading.

#### [MODIFY] [HeroMaja.tsx](file:///Users/petergorgees/Desktop/Projects/AgenterGroup/agentergroupny/src/components/HeroMaja.tsx)
- **Change**:
  - Convert main container and text elements to `motion.div` / `motion.h1` / `motion.p`.
  - Implement a staggered "fade up" animation (y: 20 -> y: 0, opacity: 0 -> 1).
  - **Crucial**: Ensure these animations only start *after* the intro loader begins its exit (or use a delay).

## Detailed Animation Flow (The "Vibe")
1.  **0.0s - 0.5s**: Screen is black (or shows slight glow).
2.  **0.5s - 1.2s**: Black screen fades out smoothly (`easeOutCirc`).
3.  **0.8s - 1.5s**: Hero Title smoothly rises and fades in.
4.  **1.0s - 1.7s**: Subtitle and CTA buttons rise and fade in (staggered).

## Verification Plan

### Manual Verification
1.  **Desktop**: Reload the page (`Cmd+R`). Verify the screen starts black and fades smoothly to the Hero.
2.  **Performance**: Ensure no "flash of unstyled content" (FOUC).
3.  **Smoothness**: Check that the Hero text doesn't "jump" but flows in.

### Technical Check
- Ensure `AnimatePresence` is correctly handling component unmount.
- Verify `z-index` of loader is higher than Navbar (z-50).
