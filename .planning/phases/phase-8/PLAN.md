# Phase 8: Animations & Micro-Interactions

## Goal
Replace CSS-based reveal system with full GSAP animation orchestration. Add scroll-triggered entrances, staggered grid reveals, hero cascade, parallax, hover micro-interactions, button ripple/shine, and FAQ GSAP animation. Respect `prefers-reduced-motion`.

## Files to Modify
- `js/main.js` — GSAP animation system (replace IntersectionObserver reveals with GSAP ScrollTrigger)
- `css/styles.css` — Remove CSS reveal system, add GSAP-compatible base states, hover enhancements, ripple keyframes

## Pre-Conditions
- [x] GSAP + ScrollTrigger CDN loaded in index.html
- [x] `gsap.registerPlugin(ScrollTrigger)` already in main.js:567-569
- [x] CSS reveal classes exist (will be replaced)
- [x] Hero entrance is CSS-only (will be replaced)
- [x] FAQ uses max-height CSS transition (will be replaced)

---

## Wave 1: GSAP Foundation & Section Entrances
**Files:** `js/main.js`, `css/styles.css`

### Task 1.1: Remove CSS Reveal System
**File:** `css/styles.css` (lines 644-674)
- Delete `.reveal`, `.reveal.visible`, `.reveal-stagger`, `.reveal-stagger.visible .reveal-child`, and all `nth-child` delay rules
- Delete `.hero-enter` and `@keyframes heroReveal`
- Keep `@keyframes successPop` (form success, not scroll-related)

### Task 1.2: Remove IntersectionObserver Reveal System
**File:** `js/main.js` (lines 466-497)
- Delete the `revealObserver` and all `.reveal` / `.reveal-stagger` / `.hero-enter` class additions
- Delete CTA section reveal observer (lines 492-497)
- Keep the price counter observer (lines 500-527) — it's independent

### Task 1.3: Add GSAP Base States in CSS
**File:** `css/styles.css`
- Add `.gsap-hidden { opacity: 0; visibility: hidden; }` — GSAP will control transforms
- This is a safety class; GSAP `autoAlpha` handles opacity+visibility

### Task 1.4: GSAP ScrollTrigger Section Entrances
**File:** `js/main.js`
- Inside the existing `if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined')` block:
- Create `initScrollAnimations()` function
- For each `.section-title`: `gsap.from(el, { y: 40, autoAlpha: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%' } })`
- For each `.section-intro`: same with slight delay (+0.15s)
- For `.callout`, `.disclaimer`, `.highlight-text`, `.section-note`, `.package-price`: y:30, autoAlpha:0, duration:0.7
- For `.contact-form`: y:40, autoAlpha:0, duration:0.8
- All use `scrollTrigger: { trigger: el, start: 'top 85%', once: true }`

### Task 1.5: Staggered Grid Reveals
**File:** `js/main.js`
- Target grids: `.features-grid`, `.audience-grid`, `.package-list`, `.trust-grid`, `.stepper`, `.faq-list`
- For each grid: `gsap.from(grid.children, { y: 30, autoAlpha: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: grid, start: 'top 85%', once: true } })`

**Acceptance:** All sections animate in on scroll. No flash of unstyled content. Smooth 60fps.

---

## Wave 2: Hero Cascade & Parallax
**Files:** `js/main.js`, `css/styles.css`

### Task 2.1: Hero GSAP Cascade
**File:** `js/main.js`
- Create `initHeroAnimation()` function
- Build a `gsap.timeline()` that fires after page loader dismisses (call from the loader's `dismiss` callback instead of `typeHeroTitle`)
- Sequence:
  1. `.hero-badge`: `from({ y: 30, autoAlpha: 0 }, { duration: 0.6, ease: 'power3.out' })`
  2. `.hero-title`: `from({ y: 50, autoAlpha: 0 }, { duration: 0.8, ease: 'power3.out' })` at `-=0.3`
  3. `.hero-subtitle`: `from({ y: 30, autoAlpha: 0 }, { duration: 0.7 })` at `-=0.3`
  4. `.hero-actions`: `from({ y: 20, autoAlpha: 0 }, { duration: 0.6 })` at `-=0.2`
- After timeline completes, call `typeHeroTitle()` (optional: integrate typing into timeline)
- Set initial state: `gsap.set('.hero-badge, .hero-title, .hero-subtitle, .hero-actions', { autoAlpha: 0, y: 40 })`

### Task 2.2: Remove CSS Hero Animation
**File:** `css/styles.css`
- Already handled in Task 1.1 (`.hero-enter` removal)
- Ensure hero elements don't have conflicting CSS opacity/transform

### Task 2.3: Parallax on Background Elements
**File:** `js/main.js`
- `.hero-glow--gold`: `gsap.to(el, { y: -80, scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: 1 } })`
- `.hero-glow--green`: similar with `y: -50`
- Section floating accents (`.section-alt::after`): can't directly target pseudo-elements, so add a `<div class="section-glow">` via JS to sections that need parallax, OR use CSS `background-position` scroll trick
- Simpler: apply subtle parallax to `.tax-watermark` and `#security::after` equivalent elements if they exist as real DOM nodes. If pseudo-only, skip — not worth DOM changes for Phase 8.
- Apply parallax to `.hero-canvas` wrapper: `y: 60, scrub: 1.5` for depth

**Acceptance:** Hero animates in cinematic sequence after loader. Parallax visible on scroll. No jank.

---

## Wave 3: Hover Micro-Interactions & Button Effects
**Files:** `css/styles.css`, `js/main.js`

### Task 3.1: Button Gold Glow + Shine Sweep Enhancement
**File:** `css/styles.css`
- `.btn-primary` and `.btn-accent` already have hover transforms and shine (`.btn-accent::before`)
- Enhance: add `box-shadow` transition with gold glow on all `.btn` hover states
- Add diagonal shine sweep to `.btn-primary` (currently only on `.btn-accent`)

### Task 3.2: Button Click Ripple (Gold)
**File:** `js/main.js`
- On click for all `.btn` elements:
  - Create a `<span class="btn-ripple">` at click position
  - Animate with GSAP: `scale: 0 -> 4`, `autoAlpha: 0.4 -> 0`, duration 0.6
  - Remove span after animation
- CSS for `.btn-ripple`: `position: absolute; border-radius: 50%; background: radial-gradient(circle, rgba(212,175,55,0.4), transparent); pointer-events: none; width: 40px; height: 40px; transform: translate(-50%, -50%);`

### Task 3.3: Card Hover Lift + Gold Border Glow
**File:** `css/styles.css`
- `.feature-card:hover` already has `translateY(-6px)` and gold glow — verify sufficient
- Enhance: add `transition: transform 0.4s, box-shadow 0.4s, border-color 0.4s` explicitly
- `.audience-item:hover` already has `translateY(-4px)` — good

### Task 3.4: Step Number Hover Glow Ring
**File:** `css/styles.css`
- `.step-card:hover .step-number` already has `scale(1.15)` + gold shadow — enhance:
- Add `box-shadow: 0 0 0 6px rgba(212,175,55,0.15), 0 0 30px rgba(212,175,55,0.4)` for glow ring effect

### Task 3.5: Nav Link Underline Sweep
**File:** `css/styles.css`
- Already implemented at lines 217-224 with `scaleX` transform — verified complete

### Task 3.6: Form Input Gold Focus Glow
**File:** `css/styles.css`
- Already implemented at lines 624-627 — verify gold glow is prominent enough
- Enhance: increase `box-shadow` spread to `0 0 0 4px rgba(212,175,55,0.15), 0 0 25px rgba(212,175,55,0.08)`

**Acceptance:** All hover effects responsive. Ripple fires on button click. No layout shifts.

---

## Wave 4: FAQ GSAP Animation & Polish
**Files:** `js/main.js`, `css/styles.css`

### Task 4.1: FAQ GSAP Height Animation
**File:** `js/main.js`
- Replace CSS `max-height` transition with GSAP
- On `.faq-question` click:
  - Close other items: `gsap.to(openAnswer, { height: 0, duration: 0.35, ease: 'power2.inOut', onComplete: () => item.classList.remove('active') })`
  - Open clicked: `gsap.set(answer, { height: 'auto' })` then `gsap.from(answer, { height: 0, duration: 0.4, ease: 'power2.out' })`
  - Add class for border styling
- Remove CSS `.faq-answer { max-height: 0 }` and `.faq-item.active .faq-answer { max-height: 300px }`

### Task 4.2: Update CSS for GSAP FAQ
**File:** `css/styles.css`
- Change `.faq-answer` to: `overflow: hidden; height: 0;` (no max-height, no CSS transition on height)
- Keep `.faq-item.active` border styling

### Task 4.3: prefers-reduced-motion — Full Coverage
**File:** `js/main.js`
- At the top of the GSAP block: `if (reducedMotion) { gsap.globalTimeline.timeScale(0); /* or skip entirely */ return; }`
- Better approach: if `reducedMotion`, skip all GSAP animations, show everything immediately:
  ```js
  if (reducedMotion) {
    gsap.set('.section-title, .section-intro, .callout, ...', { autoAlpha: 1, y: 0 });
    gsap.set('.hero-badge, .hero-title, .hero-subtitle, .hero-actions', { autoAlpha: 1, y: 0 });
    return; // skip all animation setup
  }
  ```
- FAQ should still work (open/close) but without animation — instant toggle

**File:** `css/styles.css`
- Update `@media (prefers-reduced-motion: reduce)` block:
  - Remove old `.reveal` rules (already deleted in Wave 1)
  - Add: `.btn-ripple { display: none; }` (no ripple)
  - Keep existing cursor/canvas/shimmer disabling
  - Add: `.gsap-hidden { opacity: 1; visibility: visible; }` fallback

### Task 4.4: RTL Animation Mirroring
**File:** `js/main.js`
- Check if any animations use `x` (horizontal movement) — if so, flip for RTL
- Current plan uses only `y` (vertical) for entrances, so no RTL issue
- Button ripple uses click coordinates — works in both directions
- Parallax uses `y` — no RTL issue
- Mark as verified, no changes needed unless horizontal animations added

**Acceptance:** FAQ opens/closes smoothly with GSAP. Reduced motion shows all content instantly. RTL verified.

---

## Verification Checklist
- [ ] Every section has scroll-triggered entrance (GSAP ScrollTrigger)
- [ ] Staggered timing on grids (0.08s per child)
- [ ] Hero animation plays on load (after loader) — cascade sequence
- [ ] All hover effects working (cards, buttons, steps, nav, form)
- [ ] Gold ripple on button click
- [ ] Shine sweep on btn-primary + btn-accent
- [ ] FAQ opens/closes with GSAP (no max-height)
- [ ] Parallax on hero background elements
- [ ] prefers-reduced-motion disables ALL animations, shows content
- [ ] Smooth 60fps (no jank on scroll)
- [ ] RTL animations work correctly (no horizontal flips needed)
- [ ] No flash of unstyled/hidden content on page load
- [ ] Price counter animation still works (kept independent)
- [ ] Page loader -> hero cascade -> typing effect sequence preserved
