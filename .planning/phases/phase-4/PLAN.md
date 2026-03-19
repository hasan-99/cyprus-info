# Phase 4: Design Polish & Animations

## Goal
Elevate the site from functional to premium. Custom font integration, finalized color palette, scroll-triggered animations, staggered entrances, hover effects, mobile responsive fixes, form validation UX, and final visual polish. After this phase, the site should feel high-end, trustworthy, and distinctly branded — not generic.

## Prerequisites
- Phase 1-3 complete (full bilingual site, all content, i18n working)
- CSS custom properties defined (colors, fonts, spacing)
- All 19 sections styled with base layouts
- Responsive breakpoints working

## Brand Rules (from CLAUDE.md)
- Distinctive fonts (NOT Inter/Arial) — already set: Tajawal + Playfair Display (headings), Noto Sans Arabic + DM Sans (body)
- Sharp accent colors — gold (#D4A853) on deep teal (#0D4A3E)
- CSS transitions, staggered animations
- Layered backgrounds, subtle gradients
- **AVOID:** card grids, generic heroes, blue-purple gradients

## Files to Modify
- `css/styles.css` — All visual polish, animations, gradients
- `js/main.js` — Intersection Observer for scroll animations
- `index.html` — Animation classes, structural tweaks for visual effects

## Execution Prompts

### Prompt 1: Color Palette Finalization & Gradients
**Update `css/styles.css`:**

**Refine palette with layered depth:**
```css
:root {
  /* Existing primaries stay */
  --color-primary: #0D4A3E;
  --color-primary-light: #1A7A6A;
  --color-primary-dark: #083028;
  --color-accent: #D4A853;
  --color-accent-light: #E8C97A;
  --color-accent-dark: #B8893D;

  /* New depth layers */
  --gradient-hero: linear-gradient(135deg, #0D4A3E 0%, #083028 50%, #0D4A3E 100%);
  --gradient-accent: linear-gradient(135deg, #D4A853 0%, #E8C97A 100%);
  --gradient-subtle: linear-gradient(180deg, var(--color-bg) 0%, var(--color-bg-alt) 100%);
  --gradient-dark: linear-gradient(180deg, #1A1A1A 0%, #2D2D2D 100%);

  /* Shadows for depth */
  --shadow-sm: 0 1px 3px rgba(13, 74, 62, 0.08);
  --shadow-md: 0 4px 12px rgba(13, 74, 62, 0.12);
  --shadow-lg: 0 8px 30px rgba(13, 74, 62, 0.16);
  --shadow-accent: 0 4px 20px rgba(212, 168, 83, 0.25);
}
```

**Section backgrounds — alternate with visual interest:**
- Hero: dark gradient (--gradient-hero) with light text
- Trust badges: --color-bg-alt (warm neutral)
- Why Cyprus: --color-bg (clean)
- Package: --color-bg-alt with subtle accent border-left/right
- Tax: dark section (--gradient-dark) with gold accent highlights
- CTA sections: --gradient-hero or accent-tinted
- Contact form: clean --color-bg with card-style form container
- Alternate remaining sections between --color-bg and --color-bg-alt

**Add decorative elements:**
```css
/* Subtle geometric accent */
.section-decorated::before {
  content: '';
  position: absolute;
  top: 0;
  inset-inline-start: 0;
  width: 4px;
  height: 60px;
  background: var(--color-accent);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
}

/* Dot grid pattern for depth (CSS-only) */
.bg-pattern {
  background-image: radial-gradient(circle, rgba(13,74,62,0.05) 1px, transparent 1px);
  background-size: 24px 24px;
}
```

### Prompt 2: Typography Refinement
**Update `css/styles.css`:**

**Heading hierarchy with sharp sizing:**
```css
/* Arabic headings */
[dir="rtl"] .section-title {
  font-family: var(--font-display-ar);
  font-weight: 800;
  letter-spacing: -0.01em;
  line-height: 1.3;
}

/* English headings */
[dir="ltr"] .section-title {
  font-family: var(--font-display-en);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

/* Size scale — distinct, not uniform */
.hero__title {
  font-size: clamp(2.2rem, 5vw, 3.8rem);
}
.section-title {
  font-size: clamp(1.6rem, 3.5vw, 2.4rem);
}
.section-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--color-text-light);
  max-width: 600px;
}

/* Accent text treatment */
.text-accent {
  color: var(--color-accent);
  font-weight: 700;
}
.text-highlight {
  background: linear-gradient(transparent 60%, rgba(212, 168, 83, 0.3) 60%);
  display: inline;
}
```

**Body text polish:**
```css
body {
  font-size: 1.05rem;
  line-height: 1.75;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Tighter line-height for Arabic */
[dir="rtl"] body {
  line-height: 1.85;
}
```

### Prompt 3: Scroll-Triggered Entrance Animations
**Update `css/styles.css`:**

```css
/* Base state — hidden before animation */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Slide from inline-start (respects RTL/LTR) */
.animate-slide-in {
  opacity: 0;
  transform: translateX(calc(-30px * var(--dir-multiplier, 1)));
  transition: opacity 0.6s ease, transform 0.6s ease;
}
[dir="rtl"] .animate-slide-in {
  --dir-multiplier: -1;
}
.animate-slide-in.is-visible {
  opacity: 1;
  transform: translateX(0);
}

/* Scale up */
.animate-scale {
  opacity: 0;
  transform: scale(0.95);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.animate-scale.is-visible {
  opacity: 1;
  transform: scale(1);
}

/* Stagger delays for child elements */
.stagger-children > *:nth-child(1) { transition-delay: 0s; }
.stagger-children > *:nth-child(2) { transition-delay: 0.1s; }
.stagger-children > *:nth-child(3) { transition-delay: 0.15s; }
.stagger-children > *:nth-child(4) { transition-delay: 0.2s; }
.stagger-children > *:nth-child(5) { transition-delay: 0.25s; }
.stagger-children > *:nth-child(6) { transition-delay: 0.3s; }
.stagger-children > *:nth-child(7) { transition-delay: 0.35s; }
.stagger-children > *:nth-child(8) { transition-delay: 0.4s; }
.stagger-children > *:nth-child(9) { transition-delay: 0.45s; }

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .animate-on-scroll,
  .animate-slide-in,
  .animate-scale {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

**Update `js/main.js`** — add Intersection Observer:
```javascript
// Scroll animation observer
const observerOptions = {
  root: null,
  rootMargin: '0px 0px -80px 0px',
  threshold: 0.1
};

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      scrollObserver.unobserve(entry.target); // animate once
    }
  });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.animate-on-scroll, .animate-slide-in, .animate-scale')
  .forEach(el => scrollObserver.observe(el));
```

**Update `index.html`** — add animation classes to sections:
- Section titles: `animate-on-scroll`
- Trust badges container: `stagger-children`, each badge: `animate-on-scroll`
- Why Cyprus grid: `stagger-children`
- Package checklist items: `stagger-children`
- Stepper steps: `stagger-children`
- FAQ items: `stagger-children`
- Audience cards: `stagger-children`
- CTA sections: `animate-scale`
- Form container: `animate-on-scroll`

### Prompt 4: Interactive Hover Effects & Micro-Interactions
**Update `css/styles.css`:**

**Button effects:**
```css
.btn-primary,
.btn-secondary,
.btn-accent {
  position: relative;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-primary:hover,
.btn-accent:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn-primary:active,
.btn-accent:active {
  transform: translateY(0);
}

/* Ripple-like shine effect */
.btn-primary::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
  transition: left 0.5s ease;
}
.btn-primary:hover::after {
  left: 100%;
}
```

**Trust badge hover:**
```css
.trust-item {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.trust-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}
```

**FAQ hover:**
```css
.faq-question {
  transition: color 0.2s ease, padding-inline-start 0.2s ease;
}
.faq-question:hover {
  color: var(--color-primary);
  padding-inline-start: calc(var(--space-sm) + 4px);
}
.faq-indicator {
  transition: transform 0.3s ease;
}
.faq-item.active .faq-indicator {
  transform: rotate(45deg);
}
```

**Stepper step hover:**
```css
.stepper__step {
  transition: transform 0.2s ease;
}
.stepper__step:hover .stepper__number {
  background: var(--color-accent);
  color: var(--color-primary-dark);
  box-shadow: var(--shadow-accent);
}
```

**Form input focus effects:**
```css
.form-input,
.form-textarea {
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  border: 2px solid transparent;
  background: var(--color-bg-alt);
}
.form-input:focus,
.form-textarea:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(13, 74, 62, 0.1);
  background: var(--color-white);
  outline: none;
}
```

**Service/audience card hover:**
```css
.audience-card,
.service-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  border: 1px solid transparent;
}
.audience-card:hover,
.service-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-accent-light);
}
```

### Prompt 5: Hero Section Premium Treatment
**Update `css/styles.css`:**

```css
.hero {
  position: relative;
  min-height: 85vh;
  display: flex;
  align-items: center;
  background: var(--gradient-hero);
  color: var(--color-white);
  overflow: hidden;
}

/* Layered background decoration */
.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  inset-inline-end: -20%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(212, 168, 83, 0.08) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -30%;
  inset-inline-start: -10%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(26, 122, 106, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

/* Price badge — floating accent element */
.hero__price {
  display: inline-block;
  background: var(--gradient-accent);
  color: var(--color-primary-dark);
  font-weight: 700;
  font-size: 1.3rem;
  padding: 0.5rem 1.5rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-accent);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

/* Hero subtitle */
.hero__subtitle {
  color: rgba(255, 255, 255, 0.85);
  font-size: clamp(1rem, 2.2vw, 1.3rem);
  max-width: 550px;
  margin-block: var(--space-sm);
}

/* Hero CTA buttons */
.hero__actions {
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
  margin-block-start: var(--space-md);
}
```

**Update `index.html`** — add animation classes to hero elements:
- Hero title: initial fade-in (no scroll trigger — immediate on load)
- Hero subtitle: delayed fade-in (0.3s)
- Hero price badge: delayed fade-in (0.5s) + float animation
- Hero CTAs: delayed fade-in (0.7s)

**Add hero entrance CSS:**
```css
.hero__title {
  animation: fadeInUp 0.8s ease forwards;
}
.hero__subtitle {
  animation: fadeInUp 0.8s ease 0.2s forwards;
  opacity: 0;
}
.hero__price {
  animation: fadeInUp 0.8s ease 0.4s forwards, float 3s ease-in-out 1.2s infinite;
  opacity: 0;
}
.hero__actions {
  animation: fadeInUp 0.8s ease 0.6s forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Prompt 6: IP Box Callout & CTA Section Premium Styling
**Update `css/styles.css`:**

**IP Box callout — make it a standout element:**
```css
.tax-callout {
  position: relative;
  background: linear-gradient(135deg, rgba(212, 168, 83, 0.1) 0%, rgba(212, 168, 83, 0.05) 100%);
  border: 2px solid var(--color-accent);
  border-radius: var(--radius-lg);
  padding: var(--space-md) var(--space-lg);
  margin-block: var(--space-md);
  overflow: hidden;
}

.tax-callout::before {
  content: '';
  position: absolute;
  top: 0;
  inset-inline-start: 0;
  width: 6px;
  height: 100%;
  background: var(--gradient-accent);
  border-radius: var(--radius-sm) 0 0 var(--radius-sm);
}

[dir="ltr"] .tax-callout::before {
  border-radius: var(--radius-sm) 0 0 var(--radius-sm);
}
[dir="rtl"] .tax-callout::before {
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
}

.tax-callout__title {
  font-size: 1.4rem;
  color: var(--color-accent-dark);
  font-weight: 700;
  margin-block-end: var(--space-xs);
}

.tax-callout__rate {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-primary);
  line-height: 1;
}
```

**CTA sections — premium dark treatment:**
```css
.cta-section--dark {
  background: var(--gradient-hero);
  color: var(--color-white);
  text-align: center;
  padding-block: var(--space-xl);
  position: relative;
}

.cta-section--dark .section-title {
  color: var(--color-white);
}

.cta-section--accent {
  background: linear-gradient(135deg, rgba(212, 168, 83, 0.08) 0%, rgba(212, 168, 83, 0.03) 100%);
  border-top: 3px solid var(--color-accent);
  text-align: center;
  padding-block: var(--space-xl);
}

/* Large CTA button variant */
.btn-large {
  font-size: 1.15rem;
  padding: 1rem 2.5rem;
  border-radius: var(--radius-md);
}
```

### Prompt 7: Form UX Polish & Validation Animation
**Update `css/styles.css`:**

```css
/* Form container — elevated card */
.form-container {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  box-shadow: var(--shadow-lg);
  max-width: 700px;
  margin-inline: auto;
}

/* Form group spacing */
.form-group {
  margin-block-end: var(--space-sm);
}

/* Label style */
.form-label {
  display: block;
  font-weight: 600;
  margin-block-end: 0.35rem;
  font-size: 0.95rem;
  color: var(--color-text);
}

/* Error state */
.form-input.error,
.form-textarea.error {
  border-color: #E53E3E;
  box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.1);
  animation: shake 0.4s ease;
}

.form-error-text {
  color: #E53E3E;
  font-size: 0.85rem;
  margin-block-start: 0.25rem;
  display: none;
}

.form-group.has-error .form-error-text {
  display: block;
  animation: fadeIn 0.3s ease;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-4px); }
  40% { transform: translateX(4px); }
  60% { transform: translateX(-3px); }
  80% { transform: translateX(3px); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Success message */
.form-success {
  display: none;
  text-align: center;
  padding: var(--space-lg);
}

.form-success.show {
  display: block;
  animation: fadeInUp 0.5s ease;
}

.form-success__icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--color-primary);
  color: var(--color-white);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-block-end: var(--space-sm);
  animation: scaleIn 0.4s ease 0.2s forwards;
  opacity: 0;
  transform: scale(0.5);
}

@keyframes scaleIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Submit button loading state */
.btn-submit.loading {
  pointer-events: none;
  opacity: 0.7;
}
.btn-submit.loading::after {
  content: '';
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top-color: currentColor;
  border-radius: 50%;
  margin-inline-start: 0.5rem;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

**Update `js/main.js`** — enhance form validation UX:
- On submit: add `loading` class to button, fake 1s delay, then show success
- On invalid field: add `error` class + show `form-error-text`
- On field input: remove error state as user types
- Scroll to first error if validation fails

### Prompt 8: Sticky Header Polish & Mobile Menu Animation
**Update `css/styles.css`:**

```css
/* Header — refined glassmorphism */
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(250, 250, 247, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(13, 74, 62, 0.08);
  transition: box-shadow 0.3s ease, background 0.3s ease;
}

.header.scrolled {
  box-shadow: var(--shadow-sm);
  background: rgba(250, 250, 247, 0.95);
}

/* Language toggle — pill style */
.lang-toggle {
  background: var(--color-bg-alt);
  border: 1px solid rgba(13, 74, 62, 0.15);
  border-radius: var(--radius-lg);
  padding: 0.35rem 1rem;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.lang-toggle:hover {
  background: var(--color-primary);
  color: var(--color-white);
  border-color: var(--color-primary);
}

/* Mobile menu — slide-in with overlay */
.mobile-menu {
  position: fixed;
  top: 0;
  inset-inline-end: 0;
  width: 280px;
  height: 100vh;
  background: var(--color-white);
  box-shadow: var(--shadow-lg);
  transform: translateX(100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 200;
  padding: var(--space-lg) var(--space-md);
}

[dir="rtl"] .mobile-menu {
  transform: translateX(-100%);
  inset-inline-end: auto;
  inset-inline-start: 0;
}

.mobile-menu.open {
  transform: translateX(0);
}

.mobile-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0);
  pointer-events: none;
  transition: background 0.3s ease;
  z-index: 199;
}

.mobile-overlay.open {
  background: rgba(0, 0, 0, 0.4);
  pointer-events: auto;
}

/* Hamburger animation */
.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 0.5rem;
  background: none;
  border: none;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-text);
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.hamburger.active span:nth-child(2) {
  opacity: 0;
}
.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}
```

### Prompt 9: Responsive Final Fixes
**Update `css/styles.css`:**

```css
/* Mobile (< 768px) */
@media (max-width: 767px) {
  .hero {
    min-height: 70vh;
    padding-block: var(--space-lg);
  }

  .hero__title {
    font-size: 1.8rem;
  }

  .hero__actions {
    flex-direction: column;
    width: 100%;
  }

  .hero__actions .btn {
    width: 100%;
    text-align: center;
  }

  .trust-grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-sm);
  }

  .why-grid {
    grid-template-columns: 1fr;
  }

  .stepper {
    flex-direction: column;
  }

  .stepper__connector {
    width: 2px;
    height: 30px;
    margin-inline: auto;
  }

  .audience-cards,
  .services-grid {
    grid-template-columns: 1fr;
  }

  .form-container {
    padding: var(--space-md);
  }

  .section-title {
    font-size: 1.5rem;
  }

  .tax-callout__rate {
    font-size: 2rem;
  }

  .cta-section--dark,
  .cta-section--accent {
    padding-block: var(--space-lg);
  }
}

/* Tablet (768px - 1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
  .trust-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .audience-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .trust-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .audience-cards {
    grid-template-columns: repeat(3, 1fr);
  }

  .stepper {
    flex-direction: row;
  }
}

/* Large desktop refinements */
@media (min-width: 1400px) {
  :root {
    --max-width: 1300px;
  }

  .hero {
    min-height: 80vh;
  }
}
```

### Prompt 10: Finishing Touches
**Final polish items:**

**Smooth scroll behavior refinement:**
```css
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* account for sticky header */
}
```

**Selection color:**
```css
::selection {
  background: rgba(212, 168, 83, 0.3);
  color: var(--color-text);
}
```

**Scrollbar styling (webkit):**
```css
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: var(--color-bg-alt);
}
::-webkit-scrollbar-thumb {
  background: var(--color-primary-light);
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--color-primary);
}
```

**Print styles:**
```css
@media print {
  .header, .mobile-menu, .mobile-overlay,
  .hero__actions, .cta-section, .lang-toggle {
    display: none !important;
  }
  .animate-on-scroll, .animate-slide-in, .animate-scale {
    opacity: 1 !important;
    transform: none !important;
  }
  body {
    font-size: 12pt;
    color: #000;
  }
}
```

**Footer styling:**
```css
.footer {
  background: var(--color-primary-dark);
  color: rgba(255, 255, 255, 0.7);
  padding-block: var(--space-md);
  text-align: center;
  font-size: 0.9rem;
}

.footer a {
  color: var(--color-accent-light);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer a:hover {
  color: var(--color-accent);
}

.footer__links {
  display: flex;
  justify-content: center;
  gap: var(--space-md);
  margin-block-start: var(--space-xs);
}
```

### Prompt 11: Verification
Run these checks:
- [ ] Color palette is cohesive — teal + gold, no blue-purple anywhere
- [ ] Fonts load correctly: Tajawal/Noto Sans Arabic (AR), Playfair Display/DM Sans (EN)
- [ ] No Inter/Arial/system font fallback visible
- [ ] Hero section: dark gradient bg, layered glow effects, price badge floats
- [ ] Hero entrance animation plays on page load
- [ ] Scroll animations trigger as sections enter viewport
- [ ] Staggered animations work on trust badges, stepper, FAQ items
- [ ] `prefers-reduced-motion` disables all animations
- [ ] Button hover: lift + shadow effect
- [ ] Button shine effect on primary buttons
- [ ] FAQ hover: slight indent + color change
- [ ] Stepper step hover: number circle changes to gold
- [ ] Form inputs: border + shadow on focus
- [ ] Form validation: shake animation on error, inline error text
- [ ] Form success: animated checkmark icon
- [ ] IP Box callout: gold border, prominent styling
- [ ] CTA sections: dark gradient or accent-tinted backgrounds
- [ ] Sticky header: glassmorphism, shadow on scroll
- [ ] Mobile menu: slide-in animation with overlay
- [ ] Hamburger: transforms to X when open
- [ ] Responsive: no overflow at any breakpoint (375-1400px)
- [ ] Section backgrounds alternate with visual variety
- [ ] Footer: dark bg, accent links
- [ ] Custom scrollbar (webkit)
- [ ] Selection color uses accent gold
- [ ] Overall feel: premium, European, trustworthy — not generic

## Acceptance Criteria
- [ ] Color palette finalized with gradients and shadows (teal + gold)
- [ ] Typography refined with clamp() sizes, proper line-height per language
- [ ] Hero: dark gradient, layered glows, entrance animation, floating price badge
- [ ] Scroll-triggered animations on all sections (IntersectionObserver)
- [ ] Staggered entrance for repeated elements (badges, steps, FAQ, cards)
- [ ] `prefers-reduced-motion` respected
- [ ] Hover effects on buttons, cards, FAQ, stepper
- [ ] Form: focus rings, validation shake, error text, success animation
- [ ] IP Box callout visually prominent (gold border, accent bg)
- [ ] CTA sections with dark/accent backgrounds
- [ ] Sticky header with glassmorphism, scroll shadow
- [ ] Mobile menu slide-in with overlay and hamburger-to-X animation
- [ ] Responsive polish at 375px, 768px, 1024px, 1400px
- [ ] Footer styled (dark bg, accent links)
- [ ] No generic feel — distinctive, premium brand aesthetic
- [ ] No console errors
- [ ] No layout overflow at any breakpoint

## Estimated Complexity
High — 11 prompts, heavy CSS work, animation system, responsive fixes, UX polish

## Dependencies
- Phase 1-3 complete (structure, content, i18n all working)

## Next Phase
Phase 5: Deploy & Verify — push to GitHub, deploy to Vercel, full verification
