# Requirements — Milestone 2: Royal Futuristic Redesign

## Visual Requirements

### VR-1: Color System
- Primary background: #000000 (pure black)
- Secondary backgrounds: #0A0A0A, #111111, #1A1A1A (layered blacks)
- Accent: #D4AF37 (premium gold)
- Accent variants: gold-light (#E8C97A), gold-dark (#B8903D)
- Text: #FFFFFF (primary), #B0B0B0 (secondary), #666666 (muted)
- Gradient accents: gold-to-transparent, black-to-gold subtle sweeps
- Glow effects: gold box-shadow / text-shadow on interactive elements

### VR-2: Typography
- Headings (EN): Playfair Display (serif, bold, large)
- Body (EN): Poppins (clean, modern)
- Headings (AR): Tajawal (bold)
- Body (AR): Noto Sans Arabic
- Hero typography: oversized, bold, high visual hierarchy
- Section titles: large with gold accent underline or decoration

### VR-3: Dark Theme Aesthetics
- Full dark mode — no light sections
- Layered depth using slightly different blacks per section
- Subtle gradient overlays (radial gold glows behind key sections)
- Section dividers: gold gradient lines or fade transitions
- Glassmorphism cards: semi-transparent backgrounds, backdrop-blur, gold borders

### VR-4: Premium Imagery
- Unsplash placeholders: luxury business, tech, global, success themes
- Dark-toned images with gold/warm overlays
- Overlay technique: dark gradient + subtle gold tint
- Images used as section backgrounds where appropriate (hero, CTA, about)

## Animation Requirements

### AR-1: GSAP Integration
- Load GSAP + ScrollTrigger via CDN
- Scroll-triggered entrance animations for all sections
- Staggered reveals for grid items (features, steps, audience)
- Parallax depth on section backgrounds
- Smooth scroll behavior

### AR-2: Hero Animations
- Particle/abstract animated background (canvas-based or CSS)
- Hero text: cinematic cascade entrance (letter/word split or fade-up)
- CTA buttons: fade-in with delay after text
- Ambient floating particles or gradient waves

### AR-3: Micro-Interactions
- Buttons: gold glow pulse on hover, scale + shine effect
- Cards: lift + gold border glow on hover
- Navigation links: gold underline sweep on hover
- FAQ accordion: smooth height transition with gold accent
- Form inputs: gold border glow on focus
- Step numbers: scale + gold glow on hover

### AR-4: Page-Level Effects
- Custom animated cursor (gold dot + trailing circle)
- Scroll progress indicator (gold bar at top)
- Smooth section transitions (fade/slide between sections on scroll)
- prefers-reduced-motion: disable all motion, show static layout

### AR-5: CTA Ripple & Shine
- Gold ripple effect on CTA button click
- Subtle shine sweep across buttons on hover (diagonal light pass)

## Functional Requirements (Preserved)

### FR-1: Bilingual Support (unchanged)
- Arabic (RTL) default, English (LTR) secondary
- Language switcher in header
- All content in both languages via data-i18n
- dir/lang attribute switching
- Font switching per language

### FR-2: Content Sections (unchanged)
- All 19 sections preserved
- Copy elevated to premium tone in both languages
- Same i18n key structure

### FR-3: Contact Form (unchanged)
- Static form, same fields
- Validation + success message
- Styled to match dark/gold theme

### FR-4: Responsive Design (enhanced)
- Mobile-first
- Breakpoints: mobile (<768px), tablet (768-1024px), desktop (>1024px)
- Particle background: reduce density on mobile for performance
- Animated cursor: desktop only
- Touch-friendly interactions on mobile

### FR-5: Navigation (enhanced)
- Sticky transparent navbar → solid black + gold accent on scroll
- Smooth scroll to sections
- Mobile hamburger menu (dark theme)
- Scroll progress bar in header area

## Non-Functional Requirements

### NFR-1: Performance
- GSAP + ScrollTrigger CDN: ~50KB gzipped
- Particle system: lightweight, requestAnimationFrame-based
- Lazy load Unsplash images
- Target: Lighthouse Performance > 85 (animations add weight)
- No layout shift from font loading (font-display: swap)

### NFR-2: Accessibility
- prefers-reduced-motion support (critical — disable all GSAP)
- Color contrast: gold on black meets WCAG AA
- Keyboard navigable
- ARIA labels maintained
- Custom cursor: fallback to default on touch devices

### NFR-3: SEO (unchanged)
- Meta tags, OG tags, Twitter Cards
- JSON-LD structured data
- Canonical URL updated post-deploy

### NFR-4: Browser Support
- Chrome, Safari, Firefox, Edge (modern versions)
- Graceful degradation: no WebGL/particles on old browsers
- RTL rendering tested in Safari specifically
