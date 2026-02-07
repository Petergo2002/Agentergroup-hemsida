# Plan: Simplify to Vertical Scroll (Performance & Clarity)

## The Pivot
We are moving away from complex `sticky` stacking cards and parallax effects. These have caused persistent layout ("squeezed content") and performance ("lag") issues, especially on Safari.

## The Solution: Linear Vertical Flow
We will implement a standard, premium SaaS layout where content flows naturally:
1.  **Text Section**: Title, Subtitle, Description (Centered or wide layout).
2.  **Visual Section**: The component (`AppConnect`, `KnowledgeBase`) appears immediately below, effectively "full width" or wide container, with no constraints from a card border.

### Benefits
*   **Zero Lag**: No complex scroll event listeners or heavy GPU compositions for sticky elements.
*   **Full Space**: The visualizations get 100% of the container width. Nothing is "squeezed".
*   **Mobile Friendly**: natural stacking order works perfectly on mobile without custom logic.

## Proposed Structure

### `FeatureSection.tsx` (New Component)
A simpler component that takes `title`, `description`, `component`, etc., and renders them linearly.

**Visual Design**:
*   **Typography**: Massive headings (H2), clean subtitles.
*   **Spacing**: Generous vertical whitespace (`py-24` or `py-32`) to give a "premium" feel.
*   **Animations**: Simple `whileInView` fade-ups using Framer Motion. No scroll-linked scaling.

### Layout Blueprint
```tsx
<Section>
  <Container>
    <Header>
      <Subtitle>Överblick</Subtitle>
      <Title>Full Kontroll</Title>
      <Description>...</Description>
    </Header>
    
    <VisualContainer className="w-full mt-16">
       <AppConnectShowcase /> (Scales naturally)
    </VisualContainer>
  </Container>
</Section>
```

## Task Breakdown
1.  **Create `FeatureSection`**:
    *   Input: Text content + Component node.
    *   Layout: Columnar (Text Top, Visual Bottom).
    *   Styling: Dark mode, minimal borders/glows if needed, but mostly "open".
2.  **Update `page.tsx`**:
    *   Replace `FeatureStack` with two distinct `FeatureSection` calls.
3.  **Cleanup**:
    *   Remove `FeatureStack.tsx` and `FeatureCard.tsx` (files can remain for reference or be deleted).

## Verification
*   **Performance**: Scroll must be native 60fps (because it IS native scroll).
*   **Layout**: Verify `KnowledgeBase` dashboard is not cut off and uses full available width.
