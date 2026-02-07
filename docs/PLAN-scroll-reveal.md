# PLAN-scroll-reveal

## Goal
Implement a high-impact "Super Scroll Reveal" section placed between the "Overview" and "Configuration" sections. This acts as a visual palette cleanser and a dramatic transitional element that elevates the "HackerRank/Premium" vibe.

## User Review Required
> [!IMPORTANT]
> **Placement**: Positioned strictly between `ScrollStoryVertical` 1 (Overview) and `ScrollStoryVertical` 2 (Configuration).
> **Vibe**: "Super fucking bra" animations. We will use a **Text Reveal Effect** where words light up one by one, combined with a **Parallax Glow** in the background.

## Proposed Changes

### 1. New Component: `ScrollReveal.tsx`
- **Location**: `src/app/components/ScrollReveal.tsx`
- **Tech**: `framer-motion` (`useScroll`, `useTransform`).
- **Design**:
    -   **Sticky Context**: The section pins itself for a moment.
    -   **Animation**: Large, bold text ("Din Verksamhet. Uppgraderad.") starts dim (`opacity: 0.1`) and lights up (`opacity: 1`, `color: white`) word-by-word or line-by-line as the user scrolls.
    -   **Background**: A moving "Aurora" or "Pulse" in the brand orange (`#FF5D00`) that follows the scroll slightly.

### 2. Update `page.tsx`
- Import and insert `ScrollReveal` between the two `ScrollStoryVertical` components.

### 3. Copywriting
- **Headline**: "Framtiden är inte imorgon. Den är nu." (The future isn't tomorrow. It's now.) OR "Sömlös Integration. Total Kontroll."
- **Subtext**: "Maja överbryggar klyftan mellan dina kunder och din data."

## Verification
- **Smoothness**: Ensure Lenis scroll handles the sticky pinning smoothly.
- **Mobile**: Ensure text fits and animation works on smaller screens (maybe less sticking).
