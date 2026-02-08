# PLAN: Mobile Responsiveness Fix - Knowledge Base Section

**Skapad:** 2026-02-08  
**Status:** 🔴 Planering  
**Komplexitet:** Medel

---

## 📋 Problem Analysis

Baserat på skärmbilderna ser jag följande problem på mobil (393px × 871px):

### 🔴 Kritiska Problem:
1. **Top Navigation** - Tabs är för många och trängs ihop
2. **Grid Layout** - 3 kolumner på mobil är för tight (md:grid-cols-3)
3. **Card Content** - Text och inputs är för små
4. **Table Layout** - 12-kolumns grid fungerar inte på mobil
5. **Text Truncation** - Långa filnamn/URLs skärs av dåligt
6. **Spacing** - För lite padding/margins på små skärmar
7. **Button Sizes** - För små touch targets (< 44px)

### 📱 Mobil UX-problem:
- Navigation tabs scrollar inte horisontellt
- Cards staplas inte vertikalt på rätt sätt
- Tabellen är oläsbar med 12 kolumner
- Input-fält är för smala
- Touch targets är för små

---

## 🎯 Solution Strategy

### Phase 1: Navigation Fix
**Mål:** Göra top navigation mobilanpassad

**Ändringar:**
- Göm "Jobbet" och "Regler" tabs på mobil (< md)
- Behåll endast "Hjärnan" synlig
- Lägg till horisontell scroll om fler tabs behövs
- Öka padding för touch targets

**Kod:**
```tsx
// Före (rad 150-161)
<div className="flex gap-8">
  <div>Hjärnan</div>
  <div>Jobbet</div>
  <div>Regler</div>
</div>

// Efter
<div className="flex gap-2 md:gap-8 overflow-x-auto">
  <div>Hjärnan</div>
  <div className="hidden md:flex">Jobbet</div>
  <div className="hidden md:flex">Regler</div>
</div>
```

---

### Phase 2: Cards Grid Responsiveness
**Mål:** Stapla cards vertikalt på mobil

**Ändringar:**
- Ändra från `grid-cols-1 md:grid-cols-3` till bättre breakpoints
- Öka min-height på cards för mobil
- Förbättra spacing mellan cards
- Större touch targets på knappar

**Kod:**
```tsx
// Före (rad 177)
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

// Efter
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
  {/* Cards med förbättrad mobil-layout */}
</div>
```

**Card-specifika fixes:**
- Upload Card: Öka padding från `p-6` till `p-6 md:p-8`
- Text Card: Förbättra textarea height på mobil
- Website Card: Större input-fält och knapp

---

### Phase 3: Table/List Responsiveness
**Mål:** Göra "Inlärda källor"-listan läsbar på mobil

**Ändringar:**
- Byt från 12-kolumns grid till card-layout på mobil
- Göm vissa kolumner (Typ, Storlek) på små skärmar
- Stack information vertikalt i varje rad
- Öka font-sizes för läsbarhet

**Före (rad 260-300):**
```tsx
<div className="grid grid-cols-12 gap-4">
  <div className="col-span-6">Källa</div>
  <div className="col-span-2">Typ</div>
  <div className="col-span-2">Storlek</div>
  <div className="col-span-2">Status</div>
</div>
```

**Efter:**
```tsx
{/* Mobile: Card layout */}
<div className="md:hidden space-y-2">
  {sources.map(source => (
    <div className="p-4 rounded-lg bg-white/5 border border-white/5">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3 flex-1">
          <Icon />
          <div>
            <p className="text-sm font-medium">{source.name}</p>
            <p className="text-xs text-white/40">{source.date}</p>
          </div>
        </div>
        <span className="badge">{source.status}</span>
      </div>
    </div>
  ))}
</div>

{/* Desktop: Table layout */}
<div className="hidden md:block">
  {/* Existing 12-col grid */}
</div>
```

---

### Phase 4: Typography & Spacing
**Mål:** Förbättra läsbarhet och touch targets

**Ändringar:**
1. **Headers:**
   - `text-lg` → `text-base md:text-lg`
   - Öka line-height för bättre läsbarhet

2. **Buttons:**
   - Min-height: `h-10` (40px) → `h-11 md:h-10` (44px mobil)
   - Padding: `px-4 py-2` → `px-6 py-3 md:px-4 md:py-2`

3. **Inputs:**
   - Height: `h-8` → `h-11 md:h-10`
   - Font-size: `text-xs` → `text-sm md:text-xs`

4. **Container Padding:**
   - `p-8` → `p-4 md:p-6 lg:p-8`

---

### Phase 5: Content Optimization
**Mål:** Förbättra innehållsvisning på mobil

**Ändringar:**
1. **Filnamn/URL Truncation:**
   ```tsx
   <span className="text-sm text-white/90 truncate max-w-[200px] md:max-w-none">
     {source.name}
   </span>
   ```

2. **Conditional Content:**
   - Göm "Storlek" kolumn på mobil (< md)
   - Göm "Typ" badge på mobil (< sm)
   - Visa endast viktigaste info

3. **Scroll Behavior:**
   - Lägg till `overflow-x-auto` på table container
   - Smooth scrolling på mobil

---

## 📐 Responsive Breakpoints Strategy

```
Mobile First Approach:

< 640px (sm)   → Single column, card layout, minimal info
640-768px (md) → 2 columns för cards, hybrid table
768-1024px (lg)→ 3 columns, full table
> 1024px (xl)  → Full desktop layout
```

---

## 🔧 Implementation Checklist

### Phase 1: Navigation (5 min)
- [ ] Göm extra tabs på mobil
- [ ] Lägg till overflow-x-auto
- [ ] Testa på 393px bredd

### Phase 2: Cards Grid (10 min)
- [ ] Ändra grid breakpoints
- [ ] Öka padding på mobil
- [ ] Förbättra button sizes
- [ ] Testa touch targets

### Phase 3: Table/List (15 min)
- [ ] Skapa mobil card-layout
- [ ] Behåll desktop table-layout
- [ ] Conditional rendering med md: breakpoint
- [ ] Testa scroll behavior

### Phase 4: Typography (5 min)
- [ ] Uppdatera font-sizes
- [ ] Fixa line-heights
- [ ] Öka touch target sizes
- [ ] Justera spacing

### Phase 5: Testing (10 min)
- [ ] Test på 393px (iPhone 14 Pro)
- [ ] Test på 375px (iPhone SE)
- [ ] Test på 414px (iPhone Pro Max)
- [ ] Test på tablet (768px)
- [ ] Test landscape mode

---

## 🎨 Design Principles

1. **Touch Targets:** Minimum 44×44px (Apple HIG)
2. **Font Size:** Minimum 14px för body text på mobil
3. **Spacing:** Minimum 16px mellan interaktiva element
4. **Contrast:** Behåll samma kontrast som desktop
5. **Content Priority:** Visa viktigaste info först

---

## 📱 Expected Mobile Layout

```
┌─────────────────────────┐
│ [Hjärnan] [Widget]      │ ← Simplified nav
├─────────────────────────┤
│ Kunskapskällor          │
│ Ladda upp filer...      │
├─────────────────────────┤
│ ┌─────────────────────┐ │
│ │  📤 Ladda upp       │ │
│ │  PDF, DOCX...       │ │
│ │  [Välj filer]       │ │
│ └─────────────────────┘ │
├─────────────────────────┤
│ ┌─────────────────────┐ │
│ │  📝 Klistra in      │ │
│ │  [Input]            │ │
│ │  [Spara]            │ │
│ └─────────────────────┘ │
├─────────────────────────┤
│ ┌─────────────────────┐ │
│ │  🌐 Läs in hemsida  │ │
│ │  [URL Input]        │ │
│ │  [Läs in]           │ │
│ └─────────────────────┘ │
├─────────────────────────┤
│ INLÄRDA KÄLLOR (3)      │
├─────────────────────────┤
│ ┌─────────────────────┐ │
│ │ 📄 Företag...       │ │
│ │ 2/2/2026  [Inlärd]  │ │
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ 📄 Prislista...     │ │
│ │ 1/30/2026 [Inlärd]  │ │
│ └─────────────────────┘ │
└─────────────────────────┘
```

---

## ⚡ Performance Considerations

- Ingen förändring i animation-logik
- Conditional rendering istället för CSS hiding (bättre perf)
- Behåll samma `shouldReduceMotion` logic
- Ingen extra JavaScript

---

## ✅ Success Criteria

1. ✅ All text är läsbar utan zoom på 393px
2. ✅ Alla knappar är minst 44×44px
3. ✅ Ingen horisontell scroll (utom navigation)
4. ✅ Cards staplas vertikalt på mobil
5. ✅ Lista är läsbar utan scroll
6. ✅ Touch targets är tydliga
7. ✅ Samma design-känsla som desktop

---

## 🚀 Estimated Time

**Total:** ~45 minuter

- Planning: ✅ Done
- Implementation: 35 min
- Testing: 10 min

---

## 📝 Notes

- Behåll all befintlig animation-logik
- Ändra endast layout och spacing
- Mobile-first CSS approach
- Testa på riktiga enheter om möjligt
