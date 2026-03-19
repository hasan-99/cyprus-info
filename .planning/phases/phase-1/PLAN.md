# Phase 1: Foundation & Structure

## Goal
Set up the complete project skeleton — HTML structure with all 19 sections, CSS system with RTL/LTR support, language switcher, responsive grid, and sticky navigation. After this phase, the page should render with proper structure, switch between Arabic RTL and English LTR, and be responsive across breakpoints.

## Prerequisites
- None (first phase)

## Files to Create
- `index.html` — Full HTML skeleton
- `css/styles.css` — CSS reset, custom properties, layout, RTL/LTR
- `js/main.js` — Language switcher, mobile menu, smooth scroll
- `js/i18n.js` — Translation data structure (AR + EN keys)

## Execution Prompts

### Prompt 1: Project Setup & HTML Skeleton
**Create `index.html`** with:
- `<!DOCTYPE html>` with `lang="ar"` and `dir="rtl"` as default
- `<head>`: charset, viewport, title (Arabic), Google Fonts link (placeholder), CSS link
- `<body>` structure:
  - `<header>` — sticky nav with: logo text area, nav links (hidden on mobile), language toggle button (AR/EN), CTA button, hamburger menu button (mobile)
  - `<main>` with these `<section>` elements (each with unique `id`):
    1. `#hero` — hero section
    2. `#trust` — trust badges
    3. `#why-cyprus` — why Cyprus
    4. `#package` — what's included
    5. `#value` — more than registration
    6. `#process` — we handle everything
    7. `#tax` — tax advantages
    8. `#remote` — fully remote
    9. `#timeline` — ~2 weeks
    10. `#steps` — 6-step registration
    11. `#post-registration` — after registration
    12. `#additional-services` — extra services
    13. `#audience` — who is it for
    14. `#why-matters` — why this step matters
    15. `#security` — security & privacy
    16. `#faq` — FAQ accordion
    17. `#consultation` — free consultation CTA
    18. `#final-cta` — final call to action
    19. `#contact` — contact form
  - `<footer>` — copyright, simple links
- Use semantic HTML5 (`<section>`, `<article>`, `<nav>`, `<aside>`)
- Add `data-i18n` attributes on all text elements for language switching
- Placeholder Arabic text in each section (just headings + 1-2 lines)
- Link to `css/styles.css` and `js/i18n.js` + `js/main.js` (defer)

### Prompt 2: CSS Foundation
**Create `css/styles.css`** with:

**CSS Custom Properties (`:root`):**
```
--color-primary: #0D4A3E (deep teal-green — trust, growth)
--color-primary-light: #1A7A6A
--color-accent: #D4A853 (warm gold — premium, luxury)
--color-accent-light: #E8C97A
--color-bg: #FAFAF7 (warm off-white)
--color-bg-alt: #F0EDE6 (slightly darker for alternating sections)
--color-text: #1A1A1A
--color-text-light: #5A5A5A
--color-white: #FFFFFF
--font-ar: 'Noto Sans Arabic', sans-serif
--font-en: 'DM Sans', sans-serif
--font-display-ar: 'Tajawal', sans-serif
--font-display-en: 'Playfair Display', serif
--space-xs: 0.5rem
--space-sm: 1rem
--space-md: 2rem
--space-lg: 4rem
--space-xl: 6rem
--radius-sm: 6px
--radius-md: 12px
--radius-lg: 24px
--transition: 0.3s ease
--max-width: 1200px
```

**CSS Reset:**
- Box-sizing border-box
- Margin/padding reset
- Smooth scroll on `html`
- Body: font-family var(--font-ar), background var(--color-bg), color var(--color-text)

**RTL/LTR System:**
- `[dir="rtl"]` body uses `--font-ar` and `--font-display-ar`
- `[dir="ltr"]` body uses `--font-en` and `--font-display-en`
- Logical properties: `margin-inline-start`, `padding-inline-end`, etc.
- Text alignment: `[dir="rtl"] { text-align: right }` / `[dir="ltr"] { text-align: left }`

**Layout:**
- `.container` — max-width: var(--max-width), margin-inline: auto, padding-inline: var(--space-md)
- `.section` — padding-block: var(--space-lg)
- `.section-alt` — background: var(--color-bg-alt)
- Grid/flex utilities

**Header:**
- `position: sticky; top: 0; z-index: 100`
- Backdrop blur background
- Flex layout: logo | nav | lang toggle + CTA
- Mobile: hamburger menu, slide-in nav

**Responsive Breakpoints:**
- Mobile-first base styles
- `@media (min-width: 768px)` — tablet
- `@media (min-width: 1024px)` — desktop

**Button Styles:**
- `.btn-primary` — bg primary, white text, hover darkens
- `.btn-secondary` — outline style, primary border
- `.btn-accent` — bg accent (gold), dark text
- Border-radius, padding, transitions

### Prompt 3: JavaScript — Language Switcher & Navigation
**Create `js/i18n.js`:**
- Export/define `translations` object with `ar` and `en` keys
- Structure: `{ ar: { "hero.title": "...", "hero.subtitle": "..." }, en: { ... } }`
- Phase 1: only include section headings and nav items as placeholder
- Function `setLanguage(lang)`:
  - Set `document.documentElement.lang` and `dir` (`ar` → `rtl`, `en` → `ltr`)
  - Query all `[data-i18n]` elements, set `textContent` from translations
  - Save preference to `localStorage`
  - Update toggle button text

**Create `js/main.js`:**
- **Language toggle:** click handler calls `setLanguage()`
- **Mobile menu:** hamburger toggle, slide-in panel, close on link click, close on outside click
- **Smooth scroll:** nav links use `scrollIntoView({ behavior: 'smooth' })`
- **Sticky header shadow:** add shadow class on scroll
- **Init:** on DOMContentLoaded, check `localStorage` for saved lang, default to `ar`

### Prompt 4: Verification
- Open `index.html` in browser (or serve locally)
- Verify all 19 sections render with proper IDs
- Verify language toggle switches `dir` and `lang` attributes
- Verify sticky header works
- Verify mobile menu opens/closes
- Verify responsive layout at 375px, 768px, 1024px
- Verify no console errors
- Verify RTL text alignment flips to LTR on toggle

## Acceptance Criteria
- [ ] `index.html` renders with 19 section stubs + header + footer
- [ ] CSS custom properties define full color/font/spacing system
- [ ] Language toggle switches between Arabic RTL and English LTR
- [ ] `dir` and `lang` attributes update on `<html>`
- [ ] Sticky header with backdrop blur
- [ ] Mobile hamburger menu works
- [ ] Smooth scroll navigation
- [ ] Responsive at 375px, 768px, 1024px breakpoints
- [ ] No console errors
- [ ] Language preference persists via localStorage

## Estimated Complexity
Medium — 4 files, foundational work, no content yet

## Next Phase
Phase 2: Content & Sections (Arabic) — populate all sections with full Arabic content and styled layouts
