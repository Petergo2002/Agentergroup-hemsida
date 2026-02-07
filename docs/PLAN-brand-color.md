# PLAN-brand-color

## Goal
Switch the primary brand color from "HackerRank Green" (`#00EA64`) to "Dashboard Orange" (`#FF5D00`) across the entire Maja landing page to match the user's dashboard branding.

## User Review Required
> [!IMPORTANT]
> **Color Change**: All instances of `#00EA64` will be replaced with `#FF5D00`.
> **Variable Update**: CSS variable `--brand-green` will be renamed/replaced with `--brand-primary`.

## Proposed Changes

### 1. Global Styles (`src/app/globals.css`)
- Update CSS variable:
    - ` --brand-green: #00EA64;` -> `--brand-primary: #FF5D00;`
    - Create `--brand-primary-dim` for hover states.

### 2. Component Updates (Search & Replace)
I will replace hardcoded `#00EA64` and usage of `brand-green` in the following files:

#### [MODIFY] `src/app/components/HeroMaja.tsx`
- Hero highlighting text.
- Grid/Glow effects.

#### [MODIFY] `src/app/components/IntegrationShowcase.tsx`
- Icons and accents.

#### [MODIFY] `src/app/components/ScrollStoryVertical.tsx`
- Subtitles (`text-[#00EA64]`).
- Bullets points.
- Background glows (`from-[#00EA64]/5`).

#### [MODIFY] `src/app/components/PricingTiers.tsx`
- "Mest Populär" badge.
- Highlight borders and shadows.
- Checkmarks and Buttons.

#### [MODIFY] `src/app/components/NavBar.jsx`
- Active links or hover states.

## Verification
- **Visual Check**: Run `npm run dev` and verify no green remains.
- **Hover States**: Ensure hover effects use the new orange.
