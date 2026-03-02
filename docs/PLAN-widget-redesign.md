# Plan: Widget Redesign

## 🟢 Overview
The goal is to redesign the existing chat widget to match a provided premium mockup from Google Gemini. The new design should be simple, premium, and stylish. It affects the main widget view as well as the chat view and bottom navigation tabs.

* **Key Deliverables:**
  * Update widget container design (dark theme, glassmorphism fades, premium look).
  * Ensure existing customizable color logic works beautifully with the new design (e.g. background fades).
  * Update the chat view and bottom navigation to match the new aesthetic.
  * DO NOT touch the logic or rendering of the dynamic buttons/links (handled via admin dashboard).

## 🟢 Project Type
**WEB** (Next.js, TailwindCSS)

## 🟢 Success Criteria
- [ ] Widget perfectly matches the premium, modern aesthetic of the mockup.
- [ ] Customizable colors (background) still apply and look natural with new gradients/fades.
- [ ] Chat view and inner screens adapt to the new design seamlessly.
- [ ] Existing button/link logic remains completely unaffected and functional.

## 🟢 Tech Stack
- Frontend: Next.js, React, Tailwind CSS
- Animation: Framer Motion (if applicable/existing)

## 🟢 File Structure (Expected Touchpoints)
- `src/app/components/MajaWidgetLoader.tsx` (or related widget UI files)
- `src/lib/maja-widget.ts` (if styling configs need adjusting)
- Inner widget components (Header, Chat Area, Bottom Navbar)

## 🟢 Task Breakdown

| Task ID | Name | Agent | Priority | Dependencies | INPUT → OUTPUT → VERIFY |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `task_1` | Identify Widget Components | `frontend-specialist` | P1 | None | **IN:** Current codebase. **OUT:** Map of widget UI files. **VERIFY:** Found files for main view and chat view. |
| `task_2` | Redesign Main Widget Layout | `frontend-specialist` | P1 | `task_1` | **IN:** Main widget component, Design mockup. **OUT:** Updated markup/Tailwind classes for glassmorphism, dark theme, header layout. **VERIFY:** UI visually matches mockup. Buttons unchanged. |
| `task_3` | Implement Customizable Colors | `frontend-specialist` | P1 | `task_2` | **IN:** Existing color logic, New layout. **OUT:** Integrated dynamic styling (fades, gradients) that reacts to custom color props. **VERIFY:** Changing colors in code gracefully updates the background and fades. |
| `task_4` | Redesign Chat View & Nav | `frontend-specialist` | P2 | `task_2` | **IN:** Chat/Nav UI files, Mockup theme. **OUT:** Updated chat window and bottom nav to match the premium dark theme. **VERIFY:** Seamless transition and consistent styling across tabs. |

## 🟢 Phase X: Verification (Final Checks)
- [ ] No purple/violet hex codes used (per design guidelines).
- [ ] No standard generic template layouts.
- [ ] Socratic Gate was respected (completed).
- [ ] `npm run lint` passes without related errors.
- [ ] Responsive design verified (mobile/desktop).
- [ ] Color customization tests pass visually.
