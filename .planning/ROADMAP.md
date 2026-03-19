# Roadmap — Cyprus Landing Page

## Milestone 1 (Complete): Initial Build
- Phase 1: Foundation & Structure
- Phase 2: Content & Sections (Arabic + English)
- Phase 3: English Content & i18n
- Phase 4: Design Polish & Animations
- Phase 5: Deploy & Verify (pending)

---

## Milestone 2: Royal Futuristic Redesign

### Phase 6: Dark Theme Foundation & GSAP Setup
**Goal:** Replace entire color system, fonts, and base styles. Add GSAP + particle background.
- Overhaul CSS custom properties (black/gold palette)
- Replace font stack (Playfair Display + Poppins + Arabic equivalents)
- Dark background system with layered blacks per section
- Gold accent decorations (section dividers, underlines)
- Add GSAP + ScrollTrigger CDN to index.html
- Build particle/abstract canvas background for hero
- Glassmorphism card base styles (backdrop-blur, semi-transparent)
- Update favicon to black/gold
- Scroll progress bar (gold, fixed top)
- Custom animated cursor (desktop only)

### Phase 7: Section Redesign & Premium Content
**Goal:** Restyle every section for the dark luxury aesthetic. Elevate copy.
- Hero: cinematic layout with particle bg, oversized type, gold accents
- Trust badges: glass cards with gold icons (replace emoji with SVG/Unicode)
- Feature grids: glassmorphism cards with gold hover borders
- Package section: premium pricing display with gold highlights
- Stepper: dark timeline with gold connectors and glow
- FAQ: dark accordion with gold active state
- CTA sections: dramatic dark-to-gold gradient backgrounds
- Contact form: dark inputs, gold focus states, premium feel
- Footer: minimal dark with gold accent line
- Elevate AR + EN copy to premium global tone
- Add Unsplash placeholder images where impactful (hero bg, CTA bg)

### Phase 8: Animations & Micro-Interactions
**Goal:** Full GSAP animation system, hover effects, scroll-triggered reveals.
- GSAP ScrollTrigger entrance animations for all sections
- Staggered grid reveals (features, steps, audience)
- Hero cascade animation (title, subtitle, CTAs)
- Parallax depth on background elements
- Button hover: gold glow + shine sweep + scale
- Card hover: lift + gold border glow
- Step number hover: scale + glow ring
- FAQ accordion: smooth GSAP height animation
- CTA button ripple effect (gold)
- Nav link hover: gold underline sweep
- Form input focus: gold border glow
- prefers-reduced-motion: disable everything gracefully

### Phase 9: Polish, Responsive & Deploy
**Goal:** Final responsive fixes, RTL refinement, performance optimization, deploy.
- Mobile responsive audit (375px, 390px, 768px, 1024px+)
- Particle density reduction on mobile
- Disable custom cursor on touch devices
- RTL layout testing (Arabic mode full audit)
- LTR layout testing (English mode full audit)
- Performance optimization (lazy images, reduce paint)
- Lighthouse audit (target > 85 all categories)
- Push to GitHub (feature branch)
- Deploy to Vercel (vercel --prod)
- Post-deploy verification (HTTP 200, latency, security headers)
- Cross-browser testing
