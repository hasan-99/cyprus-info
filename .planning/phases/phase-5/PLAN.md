# Phase 5: Deploy & Verify

## Goal
Push the completed site to GitHub, deploy to Vercel as a static site, and pass all verification checks — HTTP 200, Lighthouse > 90, mobile/RTL/LTR/cross-browser testing. After this phase, the site is live and production-ready.

## Prerequisites
- Phase 1-4 complete (full bilingual site with polished design and animations)
- All content, styling, i18n, and interactions working locally
- No console errors
- Git repo initialized (already done — `main` branch exists)

## Files to Modify
- `vercel.json` — Vercel static config (create if needed)
- `index.html` — Final meta tags, canonical URL, structured data
- Possibly `.gitignore` if needed

## Execution Prompts

### Prompt 1: Pre-Deploy Audit
Run a final local audit before deploying:

**HTML validation:**
- Check all tags are properly closed
- Verify semantic structure (header, main, footer, sections)
- Confirm all `data-i18n` attributes are present
- Verify no placeholder/TODO text remains

**CSS check:**
- No unused custom properties
- No broken selectors
- Media queries ordered correctly (mobile-first)

**JS check:**
- No `console.log` left in production code
- No unused variables or functions
- Event listeners properly attached
- No memory leaks (scroll listeners cleaned up if needed)

**Assets:**
- Verify all Google Fonts load correctly
- No broken image/asset references
- No external dependencies that could fail

**Run locally:**
```bash
# Serve locally and test
npx serve . -p 3000
# Or: python -m http.server 3000
```
- Test at http://localhost:3000
- Check both Arabic and English modes
- Test on mobile viewport (DevTools)

### Prompt 2: SEO & Meta Tags
**Update `index.html` `<head>`:**

```html
<!-- Primary Meta -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title data-i18n="meta.title">تسجيل شركة في قبرص — EUR 999 + VAT</title>
<meta name="description" data-i18n-meta="meta.description" content="سجّل شركتك في قبرص الأوروبية خلال أسبوعين فقط. تأسيس شركة أوروبية بـ EUR 999 + VAT. عن بُعد بالكامل.">

<!-- Canonical -->
<link rel="canonical" href="https://YOUR_DOMAIN.vercel.app/">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="Register Your Company in EU Cyprus — EUR 999 + VAT">
<meta property="og:description" content="Form your European company in Cyprus in just 2 weeks. Fully remote. EUR 999 + VAT all-inclusive.">
<meta property="og:url" content="https://YOUR_DOMAIN.vercel.app/">
<meta property="og:locale" content="ar_SA">
<meta property="og:locale:alternate" content="en_US">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Register Your Company in EU Cyprus — EUR 999 + VAT">
<meta name="twitter:description" content="Form your European company in Cyprus in just 2 weeks. Fully remote.">

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
```

**Create `favicon.svg`:**
- Simple SVG favicon — a stylized "C" or shield icon using --color-primary (#0D4A3E) and --color-accent (#D4A853)
- Keep it minimal, recognizable at 16x16

**Add structured data (JSON-LD) before `</head>`:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Cyprus Company Registration",
  "description": "European company formation in Cyprus. EUR 999 + VAT. Fully remote.",
  "url": "https://YOUR_DOMAIN.vercel.app/",
  "priceRange": "EUR 999+",
  "areaServed": "Worldwide",
  "serviceType": "Company Registration"
}
</script>
```

**Add to `js/i18n.js`:**
```javascript
"meta.title.ar": "تسجيل شركة في قبرص — EUR 999 + VAT",
"meta.title.en": "Register Your Company in EU Cyprus — EUR 999 + VAT",
"meta.description.ar": "سجّل شركتك في قبرص الأوروبية خلال أسبوعين فقط. تأسيس شركة أوروبية بـ EUR 999 + VAT. عن بُعد بالكامل.",
"meta.description.en": "Form your European company in Cyprus in just 2 weeks. Fully remote. EUR 999 + VAT all-inclusive."
```

### Prompt 3: Vercel Configuration & Git Prep
**Create `vercel.json`:**
```json
{
  "buildCommand": null,
  "outputDirectory": ".",
  "rewrites": [],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    },
    {
      "source": "/css/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/js/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

**Create/update `.gitignore`:**
```
.vercel
.DS_Store
node_modules
```

**Git operations:**
```bash
# Create feature branch
git checkout -b feature/cyprus-landing-page

# Stage all files
git add .

# Commit
git commit -m "feat: complete bilingual Cyprus company registration landing page

- Full Arabic + English content (19 sections)
- RTL/LTR language switching with localStorage persistence
- Responsive design (mobile, tablet, desktop)
- FAQ accordion, 6-step stepper, contact form with validation
- CSS animations and scroll-triggered effects
- SEO meta tags, Open Graph, structured data
- Security headers via vercel.json"
```

### Prompt 4: Deploy to Vercel
```bash
# Deploy to production
vercel --prod

# Note the production URL
```

- If no Vercel project exists, it will prompt to create one
- Select: static site, no framework, output directory "."
- Note the deployed URL for verification

### Prompt 5: Post-Deploy Verification (Mandatory Checklist)
Run ALL checks against the live URL:

**Check 1: HTTP 200**
```bash
curl -s -o /dev/null -w "%{http_code}" https://YOUR_DOMAIN.vercel.app/
# Must return 200
```

**Check 2: Response latency**
```bash
curl -s -o /dev/null -w "%{time_total}" https://YOUR_DOMAIN.vercel.app/
# Must be < 500ms
```

**Check 3: Security headers**
```bash
curl -sI https://YOUR_DOMAIN.vercel.app/ | grep -i "x-content-type\|x-frame\|x-xss\|referrer"
# All 4 security headers should be present
```

**Check 4: Content verification**
```bash
curl -s https://YOUR_DOMAIN.vercel.app/ | grep -o "سجّل شركتك"
# Should find Arabic content
curl -s https://YOUR_DOMAIN.vercel.app/ | grep -o "EUR 999"
# Should find price
```

**Check 5: SSL certificate**
```bash
curl -sI https://YOUR_DOMAIN.vercel.app/ | head -1
# Should show HTTP/2 200
```

### Prompt 6: Lighthouse Audit
Run Lighthouse against the live URL:

```bash
# Install if needed
npx lighthouse https://YOUR_DOMAIN.vercel.app/ --output=json --output-path=./lighthouse.json --chrome-flags="--headless --no-sandbox"
```

**Target scores (all > 90):**
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

**If scores are below 90, fix:**
- Performance: optimize images, defer non-critical CSS, reduce unused JS
- Accessibility: add missing ARIA labels, ensure contrast ratios, keyboard nav
- Best Practices: security headers (already added), HTTPS (Vercel handles)
- SEO: meta tags (already added), structured data, canonical URL

### Prompt 7: Cross-Platform Testing
**Mobile testing (simulate in DevTools or real device):**
- [ ] iPhone SE (375px) — all sections readable, no horizontal scroll
- [ ] iPhone 14 (390px) — layout correct
- [ ] iPad (768px) — tablet layout activates
- [ ] Desktop (1024px+) — full layout

**RTL/LTR testing:**
- [ ] Arabic mode: all text right-aligned, stepper right-to-left, correct fonts
- [ ] English mode: all text left-aligned, stepper left-to-right, correct fonts
- [ ] Language switch: no flash, no layout jump, smooth transition

**Browser testing (if possible):**
- [ ] Chrome — primary target
- [ ] Safari — especially RTL rendering
- [ ] Firefox — layout and fonts
- [ ] Edge — should match Chrome

**Interaction testing on live site:**
- [ ] Language toggle works
- [ ] FAQ accordion opens/closes
- [ ] Contact form validates and shows success
- [ ] Smooth scroll navigation works
- [ ] Mobile menu opens/closes
- [ ] Sticky header with backdrop blur
- [ ] Scroll animations trigger correctly

### Prompt 8: Final Sign-Off
After all checks pass:

```bash
# Merge to main
git checkout main
git merge feature/cyprus-landing-page
git push origin main
```

**Update `.planning/STATE.md`:**
```markdown
## Current Phase
Phase 5 — Complete. Site is live.

## Completed
- [x] Phase 1: Foundation & Structure
- [x] Phase 2: Content & Sections (Arabic)
- [x] Phase 3: English Content & i18n
- [x] Phase 4: Design Polish & Animations
- [x] Phase 5: Deploy & Verify

## Live URL
https://YOUR_DOMAIN.vercel.app/

## Verification Results
- HTTP 200: PASS
- Latency < 500ms: PASS
- Security headers: PASS
- Lighthouse Performance: XX
- Lighthouse Accessibility: XX
- Lighthouse Best Practices: XX
- Lighthouse SEO: XX
- Mobile responsive: PASS
- RTL/LTR: PASS
- Cross-browser: PASS
```

Clean up Lighthouse report file:
```bash
rm -f lighthouse.json
```

## Acceptance Criteria
- [ ] Site deployed to Vercel and accessible via HTTPS
- [ ] HTTP 200 on homepage
- [ ] Response time < 500ms
- [ ] Security headers present (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy)
- [ ] SSL valid (Vercel automatic)
- [ ] Lighthouse scores all > 90 (Performance, Accessibility, Best Practices, SEO)
- [ ] Favicon loads
- [ ] Open Graph meta tags present
- [ ] Structured data (JSON-LD) present
- [ ] Mobile responsive at 375px, 768px, 1024px
- [ ] RTL (Arabic) and LTR (English) both work on live site
- [ ] Language switcher works on live site
- [ ] FAQ accordion works on live site
- [ ] Contact form validates and shows success on live site
- [ ] No console errors on live site
- [ ] Committed and pushed to GitHub main branch
- [ ] STATE.md updated with live URL and verification results

## Estimated Complexity
Medium — mostly operational (deploy, test, fix), no new features

## Dependencies
- Phase 1-4 all complete
- Vercel CLI installed (`npm i -g vercel`)
- GitHub remote configured
