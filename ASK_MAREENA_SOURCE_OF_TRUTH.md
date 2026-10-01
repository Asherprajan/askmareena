# Ask Mareena — Source of Truth & Next.js Build Prompt

## 1. Project Identity

**Brand:** Ask Mareena  
**Website:** askmareena.com  
**Business:** UAE business setup, corporate structuring, tax, compliance, residency and ongoing corporate-services support.

### Brand Positioning

Ask Mareena is positioned around Mareena Tessa Thomas as a straight-talking Business Consultant specializing in Corporate Structuring and Company Formation in the UAE.

The service proposition is practical, personal guidance for people who want to establish a business in the UAE and need help understanding and coordinating the process.

---

## 2. Person / Founder Profile

### Name

Mareena Tessa Thomas

### Professional Positioning

Business Consultant specializing in:

- Corporate Structuring
- Company Formation in the UAE

### Personal Story

Mareena works with ambitious individuals who are ready to move forward but need guidance to set up their business in the UAE.

Her stated motivation is helping people turn their ideas into reality.

She supports entrepreneurs who have a clear vision and are committed to achieving their goals.

Her role includes helping clients understand legal and procedural steps and helping structure their businesses for success.

### Background

- Living in the UAE for 12+ years.
- Background in Journalism and Social Work from India.
- The combination of these backgrounds is presented as helping her understand both the technical aspects of business formation and the emotional journey behind starting a business.

### Personal Approach

The source material emphasizes:

- Practical guidance
- Smooth processes
- Stress reduction
- Personal attention
- Understanding the entrepreneur's journey
- Treating a client's business with care and attention

---

## 3. Target Audience

The supplied content describes the target audience as:

- Individuals looking to open a business in the UAE.
- People seeking consultation on company formation.
- People seeking consultation on corporate structuring.
- Entrepreneurs with a solid business idea who are ready to take the next step.

Do not invent additional demographic or financial profiles unless separately approved.

---

## 4. Core Services

The current source material defines six core service categories.

### 01 — Company Formation

Includes:

- Dubai Mainland
- UAE Free Zones
- Offshore structures
- Licensing
- Activities
- Shareholder coordination
- Establishment support

### 02 — Corporate Structuring

Includes:

- Holding structures
- DIFC Family Foundations
- ADGM Family Foundations
- Family Office support
- Corporate restructuring coordination

### 03 — Tax & Accounting

Includes:

- Corporate Tax registration
- Corporate Tax filing
- Corporate Tax advisory coordination
- VAT registration
- VAT filing
- VAT advisory coordination
- Bookkeeping
- Accounting
- Tax Residency Certificates

### 04 — Compliance

Includes:

- AML/CFT
- goAML
- Internal audit
- Transfer pricing
- Ongoing corporate compliance support

### 05 — Visas & Residency

Includes:

- Golden Visa
- Investor visa
- Partner visa
- Employment visa processing coordination
- Related establishment procedures

### 06 — Ongoing Corporate Services

Includes:

- Renewals
- Amendments
- Chamber of Commerce support
- Liquidation
- General company administration

---

## 5. Service Disclaimer

Services are subject to:

- Authority requirements
- Eligibility
- Applicable law
- Government approvals

Fees and timelines vary by case.

The website must not invent guaranteed timelines, guaranteed approvals, fixed government fees, legal outcomes, or other unsupported claims.

The website should clearly distinguish consultancy/coordination from regulated legal or tax advice where appropriate.

---

## 6. Existing Website Information to Preserve

The existing website contains these primary pages:

- Home
- About
- Services
- Contact

The new Next.js website may expand this structure with service detail pages, FAQ, privacy policy and terms/disclaimer pages as part of the new architecture.

The existing website content is a factual/content reference only.

---

## 7. Social Links

Public social links supplied in the source:

- Instagram: https://www.instagram.com/mareena_tessa_thomas
- LinkedIn: https://www.linkedin.com/in/mareena-tessa-thomas

Facebook is intentionally excluded.

Do not add additional social profiles unless separately provided.

---

## 8. Contact Requirements

The current contact experience is intended for:

- Company Formation enquiries
- Tax & Accounting enquiries
- Compliance enquiries
- Visa / Residency enquiries
- Corporate Structuring enquiries
- Other enquiries

The existing form asks for:

- Name
- Email
- Requirement/service
- Message

The supplied project notes explicitly state that the contact form must be connected to a real email/form service before publishing.

Do not leave a fake alert-only form in the production implementation.

---

## 9. Brand Assets

Supplied assets include:

- Ask Mareena logo
- Mareena Tessa Thomas portrait
- Multiple logo treatment files

The supplied logo and portrait may be used in the new website.

Do not derive the new design system from the old CSS.

---

## 10. Important Design Rule

The existing website's design must NOT be treated as the design reference.

Do not copy or inherit:

- Existing CSS
- Existing color palette
- Existing typography
- Existing spacing
- Existing layouts
- Existing cards
- Existing visual hierarchy
- Existing animations
- Existing design system

The existing files should be treated as content and business-information references only.

The new Next.js website must have an independently created visual design.

---

# 11. Recommended Next.js Information Architecture

```text
app/
├── page.tsx
├── about/
│   └── page.tsx
├── services/
│   ├── page.tsx
│   ├── company-formation/
│   │   └── page.tsx
│   ├── corporate-structuring/
│   │   └── page.tsx
│   ├── tax-accounting/
│   │   └── page.tsx
│   ├── compliance/
│   │   └── page.tsx
│   ├── visas-residency/
│   │   └── page.tsx
│   └── ongoing-corporate-services/
│       └── page.tsx
├── faq/
│   └── page.tsx
├── contact/
│   └── page.tsx
├── privacy-policy/
│   └── page.tsx
├── terms/
│   └── page.tsx
├── sitemap.ts
├── robots.ts
└── layout.tsx

components/
lib/
content/
public/
```

---

# 12. Content Architecture

Keep business content separate from UI implementation.

Recommended content files:

```text
content/
├── about.md
├── services.md
├── faq.md
├── seo.md
└── legal.md
```

The content layer should be editable without rebuilding the component architecture.

Repeated services should be represented as structured data or MDX/content entries rather than duplicated React markup.

---

# 13. Master Prompt for the Next.js Build

Use the following prompt as the primary instruction for the coding/design agent.

---

## MASTER PROMPT

You are a senior Next.js architect, product designer and frontend engineer.

Build a completely new production-ready website for:

**Ask Mareena — askmareena.com**

Use the accompanying `ASK_MAREENA_SOURCE_OF_TRUTH.md` file as the factual source of truth for the business, person, services, audience, contact requirements and supplied brand information.

### CRITICAL SOURCE RULE

The source-of-truth document is based on the supplied project documents.

Use only information supported by that document for factual business claims.

Do not silently invent:

- Services
- Qualifications
- Awards
- Clients
- Testimonials
- Statistics
- Pricing
- Government fees
- Processing times
- Guarantees
- Legal claims
- Tax claims
- Immigration guarantees
- Office locations
- Team members
- Certifications

If information is not present in the source of truth, leave it out or clearly mark it as requiring approval.

### CRITICAL DESIGN RULE

The old website is NOT a design reference.

Do not copy or reproduce its:

- CSS
- colors
- typography
- layout
- spacing
- cards
- visual hierarchy
- animations
- component styling
- design language

Create a completely original visual identity for Ask Mareena.

The supplied logo and Mareena portrait may be used as brand assets.

### PRODUCT DIRECTION

The website should position Ask Mareena as a premium, trustworthy and personal UAE business consultant.

The experience should feel:

- Professional
- Premium
- Human
- Trustworthy
- Clear
- Sophisticated
- Personal
- Conversion-focused

Avoid making the website feel like a generic company-formation template.

Mareena should remain central to the brand.

### TECHNICAL STACK

Use:

- Next.js
- App Router
- TypeScript
- Tailwind CSS
- Framer Motion where useful
- Lucide icons where useful
- next/image
- Server Components by default
- Client Components only when interaction requires them

Make the project Vercel-ready.

### ARCHITECTURE

Use reusable components and avoid duplicated page code.

Separate:

1. Content
2. Components
3. Layout
4. Design tokens
5. Business logic
6. SEO
7. Form handling

Create a scalable content architecture using Markdown/MDX or structured content.

### REQUIRED PAGES

Create:

- Home
- About Mareena
- Services
- Individual service pages
- FAQ
- Contact
- Privacy Policy
- Terms / Disclaimer

### SERVICE PAGES

Create individual pages for:

1. Company Formation
2. Corporate Structuring
3. Tax & Accounting
4. Compliance
5. Visas & Residency
6. Ongoing Corporate Services

Each service page should include:

- Clear introduction
- Service scope based on the source of truth
- Relevant sub-services
- Who it may be for
- Process/next-step explanation where supported
- Important considerations
- FAQ where appropriate
- Strong enquiry CTA

Do not create unsupported claims.

### HOMEPAGE

Design the homepage around the personal consultant brand.

Recommended information hierarchy:

- Navigation
- Hero
- Trust/credibility introduction
- Mareena introduction
- Services
- Why work with Mareena
- Process
- FAQ preview
- Conversion CTA
- Footer

This is an information architecture recommendation, not a requirement to copy any existing website layout.

### ABOUT PAGE

Make this a personal-brand storytelling page.

Use the supplied facts about:

- Mareena
- Her UAE experience
- Journalism and Social Work background
- Her approach to entrepreneurs
- Her role in guiding clients

Do not turn the page into a generic corporate "About Us".

### CONTACT

Create a real production-ready enquiry experience.

Include:

- Name
- Email
- Phone/WhatsApp where appropriate
- Service/requirement
- Message

Include:

- Validation
- Loading state
- Success state
- Error state
- Accessibility
- Spam protection strategy

Prepare the form for a real backend/email service.

Never expose API keys in client-side code.

### SEO

Implement:

- Page-specific metadata
- Canonical URLs
- Open Graph metadata
- Sitemap
- Robots
- Semantic headings
- Proper image alt text
- Internal links
- Structured data where appropriate
- FAQ structured data where appropriate
- Person/Organization structured data where appropriate
- Service structured data where appropriate

Create and maintain:

`content/seo.md`

Do not keyword-stuff.

### PERFORMANCE

Optimize for:

- Core Web Vitals
- Fast first load
- Image optimization
- Responsive images
- Minimal client JavaScript
- Appropriate lazy loading
- Font optimization
- Clean component architecture

### ACCESSIBILITY

Ensure:

- Keyboard navigation
- Visible focus states
- Semantic HTML
- Correct labels
- Appropriate contrast
- Accessible forms
- Accessible mobile navigation
- Meaningful alt text
- Reduced-motion support where appropriate

### RESPONSIVE DESIGN

Design and test for:

- 320px
- 375px
- 390px
- 430px
- Tablet
- Desktop
- Large desktop

Do not simply shrink the desktop design.

Create intentional mobile layouts.

### MOTION

Use animation carefully.

Motion should communicate:

- hierarchy
- transition
- interaction
- emphasis

Avoid:

- excessive parallax
- distracting effects
- animation on every element
- slow page transitions

Respect `prefers-reduced-motion`.

### CONTENT SAFETY

This website concerns business setup, taxation, compliance and residency.

Do not present general website information as personalized legal or tax advice.

Preserve the supplied disclaimer that services are subject to authority requirements, eligibility, applicable law and government approvals, and that fees/timelines vary by case.

### DEVELOPMENT PROCESS

Do not generate the entire application blindly in one pass.

Work in this order:

1. Analyze source-of-truth content.
2. Propose architecture.
3. Establish original design system.
4. Build global layout.
5. Build homepage.
6. Build About page.
7. Build services architecture.
8. Build individual service pages.
9. Build FAQ.
10. Build Contact.
11. Implement SEO.
12. Implement responsive behavior.
13. Audit accessibility.
14. Audit performance.
15. Audit factual content.
16. Fix issues.
17. Perform final production review.

At each stage, preserve existing working functionality.

Do not replace working code unnecessarily.

### FINAL QUALITY BAR

The finished website should look like a deliberately designed premium consultancy brand, not an AI-generated template.

It must be:

- Fast
- Responsive
- Accessible
- SEO-ready
- Maintainable
- Content-driven
- Conversion-focused
- Production-ready

Most importantly:

**Use the supplied source material for truth, but create the entire visual experience from scratch.**

---
