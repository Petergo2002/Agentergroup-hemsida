# Plan: App Integrations & UI Design

## Goal
1.  **Update "Överblick & Insikt" (Overview & Insights)**: Add messaging about "One-click connection" and support for 500+ apps.
2.  **Create "App Connect UI" Component**: Design a high-fidelity, interactive (or animated) component that visualizes the process of connecting a CRM/App.
    - **Aesthetic**: Mimic the provided "Knowledge Base" screenshot (Dark mode, glass cards, orange accents, clean typography) but applied to an "Integrations" context.
    - **Flow**: Visual representation of "Select CRM" -> "Select App" -> "Connect".

## User Review Required
> [!NOTE]
> **Design Interpretation**: The screenshot provided shows the "Brain/Knowledge" interface. I will adapt this *visual style* (colors, spacing, card layout) to an **Integrations Interface** as requested ("card där det står crm sen sen olika appar...").

## Proposed Changes

### 1. Update Content Data (`src/app/page.tsx` or `FeatureScroll` props)
- Modify the "Överblick & Insikt" object in the `features` array.
- **New Description**: Highlight "Koppla dina favoritverktyg med ett klick. Maja integrerar sömlöst med Hubspot, Salesforce, Pipedrive och över 500 andra system."

### 2. Create `AppConnectShowcase.tsx` Component
- **Location**: `src/app/components/AppConnectShowcase.tsx`
- **Design Elements** (inspired by screenshot):
    - **Container**: Dark background (`#0A0A0A` or similar), rounded borders with subtle `border-white/10`.
    - **Header**: "Anslut Integration" (instead of "Kunskapskällor").
    - **Tabs/Steps**: "Välj Kategori" (CRM), "Välj App", "Konfigurera".
    - **Grid Loop**:
        - **CRM Card**: Icon + "CRM-system".
        - **Connection Dialog**: A "floating" modal or card showing a list of apps (HubSpot, Salesforce, etc.).
        - **Action**: A prominent orange "Anslut" button (Simulated click animations).
- **Animation**:
    - `framer-motion` sequence: 
        1. Dialog appears.
        2. Mouse cursor (simulated) moves to "HubSpot".
        3. Clicks "Anslut".
        4. Success badge appears ("Ansluten").

### 3. Integrate into `FeatureScroll.tsx`
- **Logic**: Allow `FeatureScroll` to render a *custom component* instead of just a static `imageSrc`.
- **Modification**: Update `FeatureScroll` to accept `component?: ReactNode` in its feature type, and render that if present.

## Implementation Steps

1.  **Modify `FeatureScroll`**: Support custom component rendering.
2.  **Build `AppConnectShowcase`**:
    - Scaffold the "Fake UI".
    - Apply the "Screenshot Aesthetic" (Fonts, Colors: `#FF5D00`, `#1A1A1A`).
    - Create the animation sequence.
3.  **Update `page.tsx`**: Pass the new component into the "Överblick" section.

## Verification Plan

### Manual Verification
1.  **Visual Check**: Does the new component look like it belongs in the same "family" as the screenshot? (Dark, clean, orange accents).
2.  **Animation**: Is the "Connect" flow smooth and easy to understand at a glance?
3.  **Responsive**: Does it scale down for mobile?
