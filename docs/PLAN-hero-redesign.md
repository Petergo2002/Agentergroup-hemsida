# Plan: Hero Section Redesign (Dashboard Reveal)

## Goal
Redesign the "Hero Section" (specifically the `HeroMaja` component) to replace the current text-based feature list ("Lyssnar...", "Samtalshantering", etc.) with a high-fidelity screenshot of the generic dashboard ("MIn dashboard Screenshot"), styled with a premium frame and fade effect.

## User Review Required
> [!IMPORTANT]
> **Image Selection**: We are assuming the image is `public/agentergroupdashboardimages/Dashboard_overview.png` based on your description ("MIn dashboard Screenshot"). If you meant `Konfig.png` or another file, please specify.

> [!NOTE]
> **Styling**: The "fade" effect will be implemented as a bottom gradient fade to blend the image smoothly into the background, creating a "sleek" look.

## Proposed Changes

### Component: Hero Section (`src/app/components/HeroMaja.tsx`)

#### [MODIFY] [HeroMaja.tsx](file:///Users/petergorgees/Desktop/Projects/AgenterGroup/agentergroupny/src/app/components/HeroMaja.tsx)
- **Import**: Add `import Image from 'next/image'`
- **Remove**:
    - The "Fake AI Interface" block (the "Lyssnar..." animation).
    - The 3-column grid of features (Phone, Calendar, Search icons).
- **Add**:
    - A new container `div` replacing the removed elements.
    - `Image` component pointing to `/agentergroupdashboardimages/Dashboard_overview.png`.
    - **Styling Details**:
        - **Frame**: A container with `glass-panel`, `p-2` (padding for frame), `rounded-2xl`, and `border-white/10`.
        - **Shadow**: `shadow-2xl` with a specific orange tint (`shadow-[#FF5D00]/20`) to match the theme.
        - **Fade**: An overlay `div` with `bg-gradient-to-t from-black via-transparent to-transparent` to fade the bottom of the image into the page background.

```tsx
// Example Structure
<motion.div ...>
  <div className="relative rounded-2xl border border-white/10 bg-white/5 p-3 shadow-2xl shadow-[#FF5D00]/20 backdrop-blur-sm">
    <Image 
      src="/agentergroupdashboardimages/Dashboard_overview.png" 
      alt="Agenter Group Dashboard"
      width={1200}
      height={800}
      className="rounded-xl border border-white/5"
    />
    {/* Fade Effect */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl pointer-events-none" />
  </div>
</motion.div>
```

## Verification Plan

### Automated Tests
- Run `npm run dev` to ensure no build errors.

### Manual Verification
1. Open specific URL: `http://localhost:3000`
2. **Visual Check**:
    - Verify the "Lyssnar..." and feature icons are GONE.
    - Verify the Dashboard image is visible.
    - Verify the "frame" looks premium (glass effect).
    - Verify the "fade" blends the bottom of the image nicely into the background.
    - Check responsiveness on mobile (image should scale down).
