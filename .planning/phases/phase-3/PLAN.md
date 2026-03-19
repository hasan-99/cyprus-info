# Phase 3: English Content & i18n

## Goal
Full English translation for all 19 sections, complete i18n system wired, language switcher toggles all content seamlessly, proper fonts load per language, and RTL/LTR layout adjustments work correctly. After this phase, the site should be fully bilingual — Arabic and English — with smooth language switching.

## Prerequisites
- Phase 1 complete (HTML skeleton, CSS system, language switcher foundation)
- Phase 2 complete (all Arabic content populated, FAQ accordion, form, stepper)
- All text elements have `data-i18n` attributes
- `js/i18n.js` has Arabic keys populated, English keys as placeholders

## Files to Modify
- `js/i18n.js` — Full English translations for all keys
- `js/main.js` — Enhanced language switcher (font swap, complex elements)
- `css/styles.css` — LTR-specific adjustments, English font loading
- `index.html` — Google Fonts link update, any structural i18n fixes

## Execution Prompts

### Prompt 1: English Translations — Hero, Trust, Why Cyprus, Package
**Update `js/i18n.js`** — populate English translations for Prompts 1-2 content:

```javascript
en: {
  // Hero
  "hero.title": "Register Your Company in EU Cyprus",
  "hero.subtitle": "Start your business in Europe with ease — company formation in Cyprus in just two weeks",
  "hero.price": "EUR 999 + VAT",
  "hero.cta1": "Book a Free Consultation",
  "hero.cta2": "Contact Us on WhatsApp",

  // Trust badges
  "trust.1": "EU Licensed Company",
  "trust.2": "Fully Remote",
  "trust.3": "~2 Weeks Only",
  "trust.4": "4 Months Free Secretarial",

  // Why Cyprus
  "why.title": "Why Cyprus?",
  "why.1": "EU member since 2004",
  "why.2": "Only 12.5% corporate tax",
  "why.3": "IP Box Regime — 2.5% effective tax on intellectual property",
  "why.4": "Double tax treaties with 65+ countries",
  "why.5": "English-speaking business environment",
  "why.6": "Full access to the EU single market",

  // Package
  "package.title": "What's Included in the EUR 999 + VAT Package?",
  "package.1": "Limited Company formation",
  "package.2": "Registration with the Registrar of Companies",
  "package.3": "Memorandum & Articles of Association",
  "package.4": "Director and Secretary appointment",
  "package.5": "Registered address for 4 months (free)",
  "package.6": "Secretarial services for 4 months (free)",
  "package.7": "Tax file registration",
  "package.8": "Tax Identification Number (TIN)",
  "package.9": "VAT registration (if required)",
  // ... continues
}
```

### Prompt 2: English Translations — Value, Process, Tax, Remote, Timeline
**Update `js/i18n.js`** — continue English translations:

```javascript
  // Value
  "value.title": "More Than Just Company Registration",
  "value.1": "Legal and accounting partner in Cyprus",
  "value.2": "Ongoing support after formation",
  "value.3": "Experience serving Arab clients",
  "value.4": "Transparent procedures with no hidden fees",

  // Process
  "process.title": "We Handle Everything",
  "process.subtitle": "No need to travel — we complete all procedures on your behalf",
  "process.1": "Preparing all legal documents",
  "process.2": "Communicating with government authorities",
  "process.3": "Translation and notarization of documents",
  "process.4": "Follow-up until you receive your certificate of incorporation",

  // Tax
  "tax.title": "Exceptional Tax Advantages",
  "tax.main": "Corporate tax of only 12.5%",
  "tax.ipbox.title": "IP Box Regime",
  "tax.ipbox.desc": "Effective tax rate of just 2.5% on intellectual property profits",
  "tax.ipbox.ideal": "Ideal for tech companies, software firms, and digital content creators",
  "tax.1": "No dividend tax (in most cases)",
  "tax.2": "No capital gains tax on securities",
  "tax.3": "Double tax treaties with 65+ countries",

  // Remote
  "remote.title": "Fully Remote",
  "remote.desc": "No need to travel to Cyprus — all procedures are completed entirely remotely from anywhere in the world",
  "remote.1": "Certified electronic signature",
  "remote.2": "Communication via WhatsApp and email",
  "remote.3": "Manage your company from anywhere",

  // Timeline
  "timeline.title": "Ready in About Two Weeks",
  "timeline.desc": "After receiving all required documents, your company is formed within ~14 business days",
  "timeline.step1": "Document preparation (2-3 days)",
  "timeline.step2": "Application submission (1 day)",
  "timeline.step3": "Processing (7-10 days)",
  "timeline.step4": "Certificate received",
```

### Prompt 3: English Translations — Steps, Post-Reg, Services, Audience
**Update `js/i18n.js`** — continue:

```javascript
  // Registration Steps
  "steps.title": "Registration Steps",
  "steps.1.title": "Consultation",
  "steps.1.desc": "Contact us to discuss your needs and determine the right company structure",
  "steps.2.title": "Document Preparation",
  "steps.2.desc": "We send you the required documents list and help you prepare them",
  "steps.3.title": "Review & Sign",
  "steps.3.desc": "Review the Memorandum and Articles of Association and sign electronically",
  "steps.4.title": "Application Submission",
  "steps.4.desc": "We submit the application to the Registrar of Companies in Cyprus",
  "steps.5.title": "Tax Registration",
  "steps.5.desc": "Opening a tax file and obtaining the Tax Identification Number",
  "steps.6.title": "Certificate Delivery",
  "steps.6.desc": "Receive your Certificate of Incorporation and all official documents",

  // Post-registration
  "postReg.title": "Post-Formation Services",
  "postReg.1": "Accounting and financial reporting",
  "postReg.2": "Annual tax compliance management",
  "postReg.3": "Secretarial and registered address renewal",
  "postReg.4": "Business bank account opening",
  "postReg.5": "Annual audit services",

  // Additional Services
  "addServices.title": "Additional Services",
  "addServices.1": "VAT Registration",
  "addServices.2": "EORI Number for import/export",
  "addServices.3": "Specialized trade licenses",
  "addServices.4": "Corporate restructuring",
  "addServices.5": "Immigration and work visas",

  // Audience
  "audience.title": "Who Is This Service For?",
  "audience.1.title": "Entrepreneurs",
  "audience.1.desc": "Who want a European presence for their business",
  "audience.2.title": "Tech Companies",
  "audience.2.desc": "To benefit from the IP Box regime",
  "audience.3.title": "Investors",
  "audience.3.desc": "Looking for a favorable tax environment",
  "audience.4.title": "International Traders",
  "audience.4.desc": "For access to the European market",
  "audience.5.title": "Remote Workers",
  "audience.5.desc": "Who need a European legal entity",

  // Why Matters
  "whyMatters.title": "Why This Step Matters",
  "whyMatters.1": "A European company means higher credibility with clients and partners",
  "whyMatters.2": "Access to European payment gateways and bank accounts",
  "whyMatters.3": "Legal protection under European law",
  "whyMatters.4": "Competitive taxes that boost your profits",
```

### Prompt 4: English Translations — Security, FAQ, CTAs, Form, Footer
**Update `js/i18n.js`** — final translations:

```javascript
  // Security
  "security.title": "Security & Privacy",
  "security.1": "All your data is protected and encrypted",
  "security.2": "We comply with European data protection laws (GDPR)",
  "security.3": "We never share your information with third parties",
  "security.4": "Secure communication through encrypted channels",

  // FAQ
  "faq.title": "Frequently Asked Questions",
  "faq.q1": "Do I need to travel to Cyprus?",
  "faq.a1": "No, all procedures are completed entirely remotely.",
  "faq.q2": "How long does the formation process take?",
  "faq.a2": "About two weeks after receiving all required documents.",
  "faq.q3": "What documents are required?",
  "faq.a3": "A valid passport, proof of address, and some documents depending on your business type.",
  "faq.q4": "Can I open a bank account?",
  "faq.a4": "Yes, we assist you in opening a business bank account in Cyprus.",
  "faq.q5": "What taxes are required?",
  "faq.a5": "Corporate tax is 12.5%, with the possibility of benefiting from IP Box at 2.5%.",
  "faq.q6": "Does the service include VAT registration?",
  "faq.a6": "VAT registration is available as an additional service if required for your business.",
  "faq.q7": "What happens after formation?",
  "faq.a7": "We provide accounting, tax compliance, and annual renewal services.",

  // Consultation CTA
  "consultation.title": "Get a Free Consultation",
  "consultation.desc": "Speak with one of our experts to discuss your needs and get all your questions answered — free and with no obligation",
  "consultation.cta": "Book Your Appointment Now",

  // Final CTA
  "finalCta.title": "Start Your Business Journey in Europe Today",
  "finalCta.subtitle": "EUR 999 + VAT — everything you need to form your European company",
  "finalCta.cta1": "Get Started",
  "finalCta.cta2": "Contact via WhatsApp",

  // Contact Form
  "contact.title": "Contact Us",
  "contact.name": "Full Name",
  "contact.phone": "Phone / WhatsApp",
  "contact.email": "Email Address",
  "contact.nationality": "Nationality",
  "contact.country": "Current Country of Residence",
  "contact.companyName": "Proposed Company Name",
  "contact.businessType": "Business Type",
  "contact.partners": "Do you have partners?",
  "contact.partnersYes": "Yes",
  "contact.partnersNo": "No",
  "contact.additionalServices": "Additional Services Needed",
  "contact.serviceVat": "VAT Registration",
  "contact.serviceBank": "Bank Account",
  "contact.serviceAccounting": "Accounting",
  "contact.serviceEori": "EORI Number",
  "contact.notes": "Additional Notes",
  "contact.submit": "Submit Request",
  "contact.success": "Your request has been submitted successfully! We'll be in touch soon.",

  // Footer
  "footer.copyright": "All Rights Reserved 2026",
  "footer.privacy": "Privacy Policy",
  "footer.terms": "Terms & Conditions",

  // Navigation
  "nav.home": "Home",
  "nav.services": "Services",
  "nav.steps": "How It Works",
  "nav.faq": "FAQ",
  "nav.contact": "Contact",
}
```

### Prompt 5: Language Switcher Enhancement
**Update `js/main.js`** — enhance `setLanguage()` to handle complex elements:

- **Font swap:** When switching to English, update CSS variable `--font-active` or toggle a class on `<body>` (`lang-ar` / `lang-en`) so CSS picks up the right font-family
- **Complex elements:** Handle elements that aren't simple `textContent`:
  - Form `placeholder` attributes: query `[data-i18n-placeholder]` and set `placeholder`
  - Form `labels`: standard `data-i18n` works
  - Button `value` attributes if any: `[data-i18n-value]`
  - `<title>` and `<meta description>`: update dynamically
- **Language toggle button text:** Show "EN" when Arabic is active, "عربي" when English is active
- **Persist and restore:** `localStorage.setItem('lang', lang)` — already in Phase 1, verify it works
- **Smooth transition:** Add `lang-switching` class briefly during switch for optional CSS transition (opacity fade)

**Update `index.html`:**
- Add `data-i18n-placeholder` attributes on all form inputs
- Ensure `<title>` has `data-i18n="meta.title"`
- Add `<meta name="description" data-i18n-meta="meta.description">`

### Prompt 6: CSS LTR Adjustments & Font Loading
**Update `css/styles.css`:**

**Font loading:**
```css
/* Google Fonts link in index.html should include:
   Noto Sans Arabic (400,600,700)
   Tajawal (700,800)
   DM Sans (400,500,600,700)
   Playfair Display (700) */

[dir="ltr"] body {
  font-family: var(--font-en);
}
[dir="ltr"] h1, [dir="ltr"] h2, [dir="ltr"] h3,
[dir="ltr"] .section-title {
  font-family: var(--font-display-en);
}
[dir="rtl"] body {
  font-family: var(--font-ar);
}
[dir="rtl"] h1, [dir="rtl"] h2, [dir="rtl"] h3,
[dir="rtl"] .section-title {
  font-family: var(--font-display-ar);
}
```

**LTR layout adjustments:**
- Stepper: ensure left-to-right flow in LTR (arrow direction flips)
- Timeline: connector direction flips
- Trust badges: order stays same
- FAQ indicator: flip direction of chevron/arrow if using directional icon
- Form labels: text-align left in LTR
- Navigation: flex-direction stays, but margin/padding logical properties already handle it (Phase 1)
- Any `::before` / `::after` content that uses directional icons: flip via `[dir="ltr"]` selectors

**Language switch transition:**
```css
.lang-switching * {
  transition: opacity 0.15s ease;
  opacity: 0.7;
}
```

**Update `index.html`:**
- Ensure Google Fonts `<link>` includes all 4 fonts:
  ```
  Noto+Sans+Arabic:wght@400;600;700
  Tajawal:wght@700;800
  DM+Sans:wght@400;500;600;700
  Playfair+Display:wght@700
  ```

### Prompt 7: Edge Cases & Polish
**Handle i18n edge cases:**

- **Plurals / numbers:** EUR 999, 12.5%, 65+, ~2 weeks — these are the same in both languages, but verify they display correctly in both directions
- **Mixed content:** If Arabic text contains English words (e.g., "VAT", "IP Box", "EORI") — wrap in `<span dir="ltr">` to prevent bidirectional text issues
- **Long English text:** Some English translations may be longer than Arabic — verify no overflow or layout breaks
- **Empty state:** If a translation key is missing, fallback to showing the Arabic text (don't show empty)
- **HTML in translations:** For content that needs inline markup (bold, links), use `data-i18n-html` attribute and `innerHTML` (only for trusted, hardcoded content — not user input)

**Update `js/i18n.js`:**
- Add fallback logic: `function t(key, lang) { return translations[lang][key] || translations['ar'][key] || key; }`

**Update `js/main.js`:**
- Handle `data-i18n-html` separately from `data-i18n` (use `innerHTML` for html, `textContent` for plain)
- Add BiDi isolation spans where needed

### Prompt 8: Verification
Run these checks:
- [ ] Language toggle switches ALL text on the page (no Arabic left in English mode, no English left in Arabic mode)
- [ ] `<html lang>` and `<html dir>` update correctly on toggle
- [ ] English fonts (DM Sans, Playfair Display) load and apply in LTR mode
- [ ] Arabic fonts (Noto Sans Arabic, Tajawal) load and apply in RTL mode
- [ ] All form placeholders switch language
- [ ] Page `<title>` updates on language switch
- [ ] FAQ accordion works in both languages
- [ ] Contact form validation messages work in both languages
- [ ] 6-step stepper reads correctly left-to-right in English
- [ ] No text overflow or layout breaks in English mode
- [ ] No bidirectional text rendering issues (VAT, IP Box, EORI display correctly)
- [ ] Language preference persists across page reload (localStorage)
- [ ] Default language is Arabic (RTL)
- [ ] No missing translation keys (no empty text nodes)
- [ ] No console errors in either language
- [ ] Responsive layout correct in English at 375px, 768px, 1024px
- [ ] Smooth transition during language switch (no jarring flash)

## Acceptance Criteria
- [ ] All 19 sections + header + footer have complete English translations
- [ ] Language switcher toggles ALL content (text, placeholders, meta)
- [ ] English uses DM Sans (body) + Playfair Display (headings)
- [ ] Arabic uses Noto Sans Arabic (body) + Tajawal (headings)
- [ ] RTL ↔ LTR layout switches correctly (text alignment, stepper direction, logical properties)
- [ ] Form placeholders and labels switch language
- [ ] No missing translations (fallback to Arabic if key missing)
- [ ] BiDi text handled for mixed content (VAT, IP Box in Arabic context)
- [ ] Language preference saved to localStorage
- [ ] No layout breaks in either language at any breakpoint
- [ ] No console errors

## Estimated Complexity
Medium — primarily translation content + i18n wiring, some CSS adjustments for LTR

## Dependencies
- Phase 1 (HTML skeleton, CSS system, base language switcher)
- Phase 2 (all Arabic content, `data-i18n` attributes, i18n.js structure)

## Next Phase
Phase 4: Design Polish & Animations — custom fonts, color finalization, scroll animations, hover effects, responsive fixes, meta/OG tags
