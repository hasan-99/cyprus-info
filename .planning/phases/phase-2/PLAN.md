# Phase 2: Content & Sections (Arabic)

## Goal
Populate all 19 sections with full Arabic content, styled layouts, and interactive components (FAQ accordion, stepper, form). After this phase, the Arabic version of the landing page should be fully readable, visually complete, and conversion-ready.

## Prerequisites
- Phase 1 complete (HTML skeleton, CSS system, RTL/LTR, language switcher, responsive grid)
- All 19 `<section>` elements exist with IDs in `index.html`
- CSS custom properties, layout system, and button styles defined
- `js/i18n.js` translation structure in place

## Files to Modify
- `index.html` — Populate all section content (Arabic)
- `css/styles.css` — Section-specific styles
- `js/i18n.js` — Full Arabic translation keys
- `js/main.js` — FAQ accordion, form validation, stepper interactions

## Execution Prompts

### Prompt 1: Hero + Trust Badges + Why Cyprus
**Modify `index.html`** — populate `#hero`, `#trust`, `#why-cyprus`:

**`#hero`:**
```html
- Headline: "سجّل شركتك في قبرص الأوروبية"
- Subheadline: "ابدأ نشاطك التجاري في أوروبا بكل سهولة — تأسيس شركة في قبرص خلال أسبوعين فقط"
- Price badge: "EUR 999 + VAT"
- Two CTA buttons: "احجز استشارة مجانية" (primary) + "تواصل معنا عبر واتساب" (accent)
- Subtle background: layered gradient (warm off-white to slightly tinted)
```

**`#trust`:**
```html
- 4 trust badges in a row (flex/grid):
  1. Icon + "شركة أوروبية مرخصة" (EU licensed)
  2. Icon + "عن بُعد بالكامل" (fully remote)
  3. Icon + "~أسبوعين فقط" (~2 weeks)
  4. Icon + "4 أشهر سكرتارية مجانية" (4 months free)
- Use inline SVG icons or CSS-only icons (no external icon library)
- Background: var(--color-bg-alt) for contrast
```

**`#why-cyprus`:**
```html
- Section heading: "لماذا قبرص؟"
- 6 bullet points in 2-column grid (stacks on mobile):
  1. "عضو في الاتحاد الأوروبي منذ 2004"
  2. "ضريبة شركات 12.5% فقط"
  3. "نظام IP Box — ضريبة فعلية 2.5% على الملكية الفكرية"
  4. "اتفاقيات تجنب الازدواج الضريبي مع أكثر من 65 دولة"
  5. "بيئة أعمال ناطقة بالإنجليزية"
  6. "وصول كامل إلى السوق الأوروبي الموحد"
- Each bullet: icon/accent marker + text
```

**Add to `css/styles.css`:**
- `.hero` — min-height: 80vh, flex centering, layered background
- `.hero__title` — large display font (--font-display-ar), tight line-height
- `.hero__subtitle` — lighter weight, --color-text-light
- `.hero__price` — accent-colored badge, bold
- `.hero__actions` — flex gap for buttons
- `.trust-grid` — 4-column grid, center-aligned items, icon above text
- `.trust-item` — padding, subtle border or background card
- `.why-grid` — 2-column grid, gap, mobile: 1 column
- `.why-item` — flex row (icon + text), accent-colored marker

### Prompt 2: Package + Value + Process Handling
**Modify `index.html`** — populate `#package`, `#value`, `#process`:

**`#package`:**
```html
- Heading: "ماذا يتضمن عرض EUR 999 + VAT؟"
- List of included items:
  1. "تأسيس شركة محدودة المسؤولية (Limited Company)"
  2. "تسجيل لدى مسجل الشركات"
  3. "عقد التأسيس والنظام الأساسي"
  4. "تعيين مدير وسكرتير"
  5. "عنوان مسجل لمدة 4 أشهر مجاناً"
  6. "خدمات سكرتارية لمدة 4 أشهر مجاناً"
  7. "فتح ملف ضريبي"
  8. "رقم ضريبي (TIN)"
  9. "تسجيل ضريبة القيمة المضافة (إن لزم)"
- Style as a checklist with accent-colored checkmarks
- Highlight the price in an accent callout box
```

**`#value`:**
```html
- Heading: "أكثر من مجرد تسجيل شركة"
- 3-4 value points:
  1. "شريك قانوني ومحاسبي في قبرص"
  2. "دعم مستمر بعد التأسيس"
  3. "خبرة في خدمة العملاء العرب"
  4. "إجراءات شفافة بدون رسوم مخفية"
- Visual style: alternating icon-text rows or feature blocks
```

**`#process`:**
```html
- Heading: "نحن نتولى كل شيء"
- Subtext: "لا حاجة للسفر — نقوم بجميع الإجراءات نيابةً عنك"
- 3-4 process highlights:
  1. "تحضير جميع المستندات القانونية"
  2. "التواصل مع الجهات الحكومية"
  3. "ترجمة وتوثيق الأوراق"
  4. "متابعة حتى استلام شهادة التأسيس"
```

**Add to `css/styles.css`:**
- `.package-list` — styled checklist, checkmark icon via `::before`
- `.package-callout` — accent background, rounded, price highlight
- `.value-grid` — feature blocks layout
- `.process-highlights` — visual layout with connecting elements

### Prompt 3: Tax + Remote + Timeline
**Modify `index.html`** — populate `#tax`, `#remote`, `#timeline`:

**`#tax`:**
```html
- Heading: "مزايا ضريبية استثنائية"
- Main point: "ضريبة الشركات 12.5% فقط"
- IP Box callout (highlight box):
  - "نظام IP Box"
  - "ضريبة فعلية 2.5% فقط على أرباح الملكية الفكرية"
  - "مثالي لشركات التقنية والبرمجيات والمحتوى الرقمي"
- Additional tax points:
  - "لا ضريبة على أرباح الأسهم (في معظم الحالات)"
  - "لا ضريبة أرباح رأسمالية على بيع الأوراق المالية"
  - "اتفاقيات تجنب الازدواج الضريبي مع 65+ دولة"
```

**`#remote`:**
```html
- Heading: "عن بُعد بالكامل"
- Body: "لا حاجة للسفر إلى قبرص — جميع الإجراءات تتم عن بُعد بالكامل من أي مكان في العالم"
- 3 points:
  1. "توقيع إلكتروني معتمد"
  2. "تواصل عبر واتساب والبريد الإلكتروني"
  3. "إدارة شركتك من أي مكان"
```

**`#timeline`:**
```html
- Heading: "جاهز خلال أسبوعين تقريباً"
- Visual timeline or progress indicator
- "بعد استلام جميع المستندات المطلوبة، يتم تأسيس شركتك خلال ~14 يوم عمل"
- Breakdown: تحضير المستندات (2-3 أيام) → تقديم الطلب (1 يوم) → المعالجة (7-10 أيام) → الاستلام
```

**Add to `css/styles.css`:**
- `.tax-callout` — special IP Box highlight, gradient border or accent bg, prominent
- `.tax-points` — list with icons
- `.remote-section` — clean layout, optional illustration area
- `.timeline-bar` — horizontal progress/steps indicator, responsive (vertical on mobile)

### Prompt 4: Registration Steps (6-Step Stepper)
**Modify `index.html`** — populate `#steps`:

```html
- Heading: "خطوات التسجيل"
- 6 steps in a visual stepper:
  1. "التواصل والاستشارة" — "تواصل معنا لمناقشة احتياجاتك وتحديد هيكل الشركة المناسب"
  2. "تحضير المستندات" — "نرسل لك قائمة المستندات المطلوبة ونساعدك في تحضيرها"
  3. "مراجعة وتوقيع" — "مراجعة عقد التأسيس والنظام الأساسي والتوقيع إلكترونياً"
  4. "تقديم الطلب" — "نقدم الطلب لدى مسجل الشركات في قبرص"
  5. "التسجيل الضريبي" — "فتح ملف ضريبي والحصول على الرقم الضريبي"
  6. "استلام الشهادات" — "استلام شهادة التأسيس وجميع المستندات الرسمية"
- Each step: number circle + title + description
- Connected via line/connector between steps
- Desktop: horizontal stepper with line
- Mobile: vertical stepper
```

**Add to `css/styles.css`:**
- `.stepper` — flex row (desktop), column (mobile)
- `.stepper__step` — relative positioned, number circle (--color-primary bg, white text)
- `.stepper__connector` — line between steps (pseudo-element or border)
- `.stepper__title` — bold, --font-display-ar
- `.stepper__desc` — smaller, --color-text-light
- Responsive: horizontal on desktop, vertical stack on mobile

### Prompt 5: Post-Registration + Additional Services + Audience + Why Matters
**Modify `index.html`** — populate `#post-registration`, `#additional-services`, `#audience`, `#why-matters`:

**`#post-registration`:**
```html
- Heading: "خدمات ما بعد التأسيس"
- Services list:
  1. "محاسبة وإعداد التقارير المالية"
  2. "إدارة الامتثال الضريبي السنوي"
  3. "تجديد السكرتارية والعنوان المسجل"
  4. "فتح حساب بنكي تجاري"
  5. "خدمات التدقيق السنوي"
```

**`#additional-services`:**
```html
- Heading: "خدمات إضافية"
- Grid of service cards:
  1. "تسجيل ضريبة القيمة المضافة (VAT)"
  2. "الحصول على رقم EORI للاستيراد/التصدير"
  3. "تراخيص تجارية متخصصة"
  4. "إعادة هيكلة الشركات"
  5. "خدمات الهجرة وتأشيرات العمل"
```

**`#audience`:**
```html
- Heading: "لمن هذه الخدمة؟"
- Target audience segments (styled cards or list):
  1. "رواد الأعمال" — "الذين يريدون وجوداً أوروبياً لأعمالهم"
  2. "شركات التقنية" — "للاستفادة من نظام IP Box"
  3. "المستثمرون" — "الباحثون عن بيئة ضريبية مواتية"
  4. "التجار الدوليون" — "للوصول إلى السوق الأوروبي"
  5. "العاملون عن بُعد" — "الذين يحتاجون كياناً قانونياً أوروبياً"
```

**`#why-matters`:**
```html
- Heading: "لماذا هذه الخطوة مهمة؟"
- Compelling copy about:
  - "شركة أوروبية تعني مصداقية أعلى مع العملاء والشركاء"
  - "وصول إلى بوابات الدفع الأوروبية والحسابات البنكية"
  - "حماية قانونية في إطار القانون الأوروبي"
  - "ضرائب تنافسية تعزز أرباحك"
```

**Add to `css/styles.css`:**
- `.services-list` — clean list with accent markers
- `.services-grid` — 2-3 column grid for additional services
- `.audience-cards` — styled segments, icon + title + description
- `.why-matters` — emphasis layout, possibly large quote or highlight

### Prompt 6: Security + FAQ Accordion
**Modify `index.html`** — populate `#security`, `#faq`:

**`#security`:**
```html
- Heading: "الأمان والخصوصية"
- Points:
  1. "جميع بياناتك محمية ومشفرة"
  2. "نلتزم بقوانين حماية البيانات الأوروبية (GDPR)"
  3. "لا نشارك معلوماتك مع أي طرف ثالث"
  4. "تواصل آمن عبر قنوات مشفرة"
- Visual: shield icon or security-themed accent
```

**`#faq`:**
```html
- Heading: "الأسئلة الشائعة"
- 7 FAQ items (accordion):
  1. "هل أحتاج للسفر إلى قبرص؟" — "لا، جميع الإجراءات تتم عن بُعد بالكامل"
  2. "كم تستغرق عملية التأسيس؟" — "حوالي أسبوعين بعد استلام جميع المستندات"
  3. "ما المستندات المطلوبة؟" — "جواز سفر ساري، إثبات عنوان، وبعض المستندات حسب نوع النشاط"
  4. "هل يمكنني فتح حساب بنكي؟" — "نعم، نساعدك في فتح حساب بنكي تجاري في قبرص"
  5. "ما هي الضرائب المطلوبة؟" — "ضريبة الشركات 12.5%، مع إمكانية الاستفادة من IP Box بنسبة 2.5%"
  6. "هل تشمل الخدمة تسجيل VAT؟" — "تسجيل VAT متاح كخدمة إضافية إذا كان مطلوباً لنشاطك"
  7. "ماذا بعد التأسيس؟" — "نوفر خدمات محاسبة وامتثال ضريبي وتجديد سنوي"
- Each item: clickable header with +/- indicator, collapsible body
```

**Add to `css/styles.css`:**
- `.security-points` — list with shield/lock icon markers
- `.faq-item` — border-bottom separator
- `.faq-question` — clickable, flex row (text + indicator), cursor pointer
- `.faq-answer` — max-height: 0, overflow hidden, transition for smooth open/close
- `.faq-item.active .faq-answer` — max-height: large value
- `.faq-indicator` — rotates on active

**Add to `js/main.js`:**
- FAQ accordion logic: click `.faq-question` toggles `.active` on parent
- Only one FAQ open at a time (close others on open)

### Prompt 7: CTA Sections + Contact Form
**Modify `index.html`** — populate `#consultation`, `#final-cta`, `#contact`:

**`#consultation`:**
```html
- Heading: "احصل على استشارة مجانية"
- Body: "تحدث مع أحد خبرائنا لمناقشة احتياجاتك والإجابة عن جميع أسئلتك — مجاناً وبدون أي التزام"
- CTA button: "احجز موعدك الآن" (primary, large)
- Background: accent-tinted or gradient section for visual distinction
```

**`#final-cta`:**
```html
- Heading: "ابدأ رحلتك التجارية في أوروبا اليوم"
- Subtext: "EUR 999 + VAT — كل ما تحتاجه لتأسيس شركتك الأوروبية"
- Two CTAs: "ابدأ الآن" (primary) + "تواصل عبر واتساب" (accent)
- Strong visual treatment — dark background with light text, or gradient
```

**`#contact`:**
```html
- Heading: "تواصل معنا"
- Form fields (all with Arabic labels):
  - الاسم الكامل (text, required)
  - رقم الهاتف / واتساب (tel, required)
  - البريد الإلكتروني (email, required)
  - الجنسية (text)
  - بلد الإقامة الحالي (text)
  - اسم الشركة المقترح (text)
  - نوع النشاط التجاري (text)
  - هل لديك شركاء؟ (radio: نعم/لا)
  - خدمات إضافية مطلوبة (checkboxes: VAT, حساب بنكي, محاسبة, EORI)
  - ملاحظات إضافية (textarea)
  - زر الإرسال: "أرسل الطلب" (primary)
- On submit: prevent default, show success message "تم إرسال طلبك بنجاح! سنتواصل معك قريباً"
```

**Add to `css/styles.css`:**
- `.cta-section` — large padding, centered text
- `.cta-section--accent` — gradient or accent background
- `.cta-section--dark` — dark bg, light text
- `.form-group` — margin-bottom, label + input stack
- `.form-label` — display block, font-weight 600, margin-bottom xs
- `.form-input`, `.form-textarea` — full width, padding, border, radius, RTL text-align
- `.form-input:focus` — border-color primary, outline ring
- `.form-radio-group` — flex row with gap
- `.form-checkbox-group` — flex wrap
- `.form-success` — hidden by default, green success message, shown after submit

**Add to `js/main.js`:**
- Form submit handler: `preventDefault()`, basic validation (required fields, email regex), show success message, hide form or reset
- Validation: highlight invalid fields with red border, show inline error text

### Prompt 8: i18n Keys + Footer
**Update `js/i18n.js`:**
- Add ALL Arabic content as translation keys under `ar` object
- Add placeholder English keys under `en` (can be empty strings or "TODO" — Phase 3 fills these)
- Key structure follows section.element pattern:
  ```
  "hero.title", "hero.subtitle", "hero.price", "hero.cta1", "hero.cta2",
  "trust.1", "trust.2", "trust.3", "trust.4",
  "why.title", "why.1" through "why.6",
  "package.title", "package.1" through "package.9",
  ... (all sections)
  "faq.q1", "faq.a1" through "faq.q7", "faq.a7",
  "contact.title", "contact.name", "contact.phone", ...
  "footer.copyright"
  ```

**Update `index.html` footer:**
```html
- Copyright: "جميع الحقوق محفوظة 2026"
- Simple links: سياسة الخصوصية | الشروط والأحكام
```

### Prompt 9: Verification
Run these checks:
- [ ] All 19 sections have full Arabic content (no placeholders)
- [ ] Page renders correctly in RTL layout
- [ ] Hero section is visually prominent with clear CTA
- [ ] Trust badges display in a row (4 items)
- [ ] Why Cyprus shows 6 points in 2-column grid
- [ ] Package checklist has accent-colored checkmarks
- [ ] Tax section has prominent IP Box callout
- [ ] 6-step stepper displays correctly (horizontal desktop, vertical mobile)
- [ ] FAQ accordion opens/closes, one at a time
- [ ] Contact form validates required fields
- [ ] Contact form shows success message on submit
- [ ] CTA sections are visually distinct from content sections
- [ ] No console errors
- [ ] Responsive at 375px, 768px, 1024px
- [ ] RTL alignment correct throughout
- [ ] All text elements have `data-i18n` attributes
- [ ] i18n.js has keys for all Arabic content

## Acceptance Criteria
- [ ] All 19 sections populated with full Arabic content
- [ ] Hero section: headline, subtitle, price badge, 2 CTAs
- [ ] Trust badges row: 4 items with icons
- [ ] Why Cyprus: 6 points in 2-column grid
- [ ] Package: checklist with 9 included items
- [ ] Tax advantages: IP Box callout prominently styled
- [ ] 6-step registration stepper (responsive)
- [ ] FAQ accordion: 7 questions, opens one at a time
- [ ] Contact form: all fields from FR-3, client-side validation, success message
- [ ] CTA sections visually distinct (accent/dark backgrounds)
- [ ] All text in `data-i18n` attributes, keys in i18n.js
- [ ] Footer with copyright and links
- [ ] Fully responsive (mobile, tablet, desktop)
- [ ] No console errors
- [ ] RTL layout correct throughout

## Estimated Complexity
High — 9 prompts, heavy content + CSS styling + interactive components (accordion, form, stepper)

## Dependencies
- Phase 1 must be complete (HTML skeleton, CSS system, JS foundation)

## Next Phase
Phase 3: English Content & i18n — translate all content to English, wire language switcher
