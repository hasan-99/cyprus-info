# Phase 6: Dark Theme Foundation & GSAP Setup

## Goal
Replace the entire visual foundation — color system, fonts, base styles — with a black/gold luxury dark theme. Add GSAP + ScrollTrigger and build the particle background system.

## Prerequisites
- Phase 1-4 complete (existing bilingual site)
- All content and i18n functional

## Files to Modify
- `css/styles.css` — Complete overhaul of custom properties, base styles, section backgrounds
- `index.html` — Add GSAP CDN, particle canvas, scroll progress bar, cursor elements
- `js/main.js` — Particle system, custom cursor, scroll progress logic
- `favicon.svg` — Redesign for black/gold

## Execution Prompts

### Prompt 1: CSS Custom Properties & Base Overhaul
Replace all CSS custom properties with black/gold system:
- New color tokens (blacks, golds, text colors)
- New font tokens (Playfair Display, Poppins)
- Update Google Fonts link in HTML
- Dark body background, light text defaults
- Update all section backgrounds (alternating dark layers)
- Gold accent on borders, dividers, decorations
- Glassmorphism base: `backdrop-filter: blur()`, semi-transparent bg, gold border

### Prompt 2: GSAP + CDN Setup
- Add GSAP + ScrollTrigger CDN scripts to index.html (before main.js)
- Create GSAP registration in main.js
- Basic ScrollTrigger test (one section fade-in)

### Prompt 3: Particle Background System
- Canvas-based particle system for hero section
- Gold-tinted particles on black background
- Floating, drifting motion with subtle connections
- requestAnimationFrame loop
- Responsive: reduce particle count on mobile
- Clean up on visibility change (performance)

### Prompt 4: Scroll Progress Bar & Custom Cursor
- Gold progress bar fixed at top of viewport
- Width tracks scroll percentage (0-100%)
- Custom cursor: small gold dot (8px) + larger trailing circle (32px)
- GSAP-powered cursor follow (smooth lag on outer circle)
- Desktop only (hide on touch devices via media query)

### Prompt 5: Favicon & Header Restyle
- Redesign favicon.svg: black background, gold icon
- Restyle header: transparent → solid black on scroll
- Gold accent line under header when scrolled
- Update logo text styling
- Mobile hamburger: gold lines on black

## Acceptance Criteria
- [ ] All colors replaced (no teal/cream remaining)
- [ ] Fonts load correctly (Playfair Display, Poppins, Tajawal, Noto Sans Arabic)
- [ ] Dark theme consistent across all sections
- [ ] GSAP + ScrollTrigger loaded and functional
- [ ] Particle background renders in hero
- [ ] Scroll progress bar works
- [ ] Custom cursor works on desktop
- [ ] RTL/LTR still works with new theme
- [ ] Language switcher still functional
- [ ] No console errors

## Estimated Complexity
High — complete CSS overhaul + new JS systems (particles, cursor)
