# ROLE

Act as a **Principal Frontend Engineer, Senior Product Designer, and Conversion-Focused Web Architect** responsible for delivering a production-grade marketing website for a premium bespoke furniture brand.

You have strong expertise in:

- React
- Vite
- TypeScript
- Tailwind CSS v4
- Modern responsive web architecture
- Semantic HTML and accessibility
- Performance optimization
- SEO for static websites
- Conversion-focused UX
- Editorial / luxury brand design
- Image optimization and responsive media
- Component architecture
- Static-site deployment to conventional hosting such as cPanel

Your standard is **production quality**, not prototype quality.

Do not merely create a visually attractive landing page. Build a website that could realistically be handed to a paying client, deployed publicly, maintained by another developer, and used to generate real customer inquiries.

---

# TASK

Build a **single-page, production-grade, conversion-focused static website** for:

**Heaven Furniture Mart**

The site must position Heaven Furniture Mart as a premium **luxury / bespoke furniture and interior styling brand** and turn interested visitors into qualified customer inquiries.

The website should function as a **digital luxury furniture studio / showroom**, not as an ecommerce marketplace or generic furniture template.

The primary conversion should be:

**Request a Quote / Start a Consultation**

The secondary contact mechanism should be:

**WhatsApp / Phone**

The final website should include the following sections:

1. Hero
2. Brand Introduction
3. Why Choose Heaven
4. Collections Snapshot
5. Bespoke / Custom Furniture Highlight
6. Social Proof / Brand Credibility
7. Conversion CTA
8. Footer / Contact

The experience must communicate the following in the first few seconds:

> Heaven Furniture Mart creates premium furniture customized around the customer's space, taste, and lifestyle.

---

# CONTEXT

## Brand

**Heaven Furniture Mart**

### Category

Luxury / Bespoke Furniture & Interior Styling

### Location

Agrabad Access Road, Chattogram, Bangladesh

### Founded

2020

### Founder / Managing Director

Abul Kalam Bhuiyan

### Contact

Phone: `+880 1960-481983`

Email: `heavenfurnituremart@gmail.com`

### Social

Facebook:
https://www.facebook.com/HeavenFurnitureMart

Instagram:
https://www.instagram.com/heaven_furniture_ltd

YouTube:
https://www.youtube.com/@HeavenFurnitureMart

---

## Brand Positioning

Heaven Furniture Mart designs and crafts customized furniture rather than selling only standardized, mass-produced products.

Their core market message is:

> **Designed. Crafted. Customized.**

The brand should feel like a customer has entered a **premium interior studio**, not an online furniture shop.

The page should emphasize:

- Craftsmanship
- Customization
- Materials
- Interior aesthetics
- Personalization
- Trust
- Physical showroom presence
- Consultation
- Delivery and installation
- Premium quality

---

## Primary Audience

The primary audience is:

> **Affluent and upper-middle-income homeowners in Chattogram who are furnishing, renovating, or upgrading their homes and want premium furniture customized to their space, taste, and lifestyle.**

Typical customers:

- New homeowners
- Families renovating their homes
- Professionals upgrading interiors
- Couples furnishing a new apartment
- Customers who care about aesthetics and durability
- Customers willing to pay more for customization and craftsmanship

Secondary audiences:

- Business owners
- Office decision-makers
- Interior designers
- Architects
- Property professionals

The website should primarily speak to homeowners rather than attempting to give equal weight to every audience.

---

# BUSINESS GOALS

The website has exactly three strategic goals:

## Goal 1 — Premium Brand Positioning

Make Heaven Furniture Mart immediately feel like an established bespoke furniture and interior studio.

Visitors should quickly understand:

- What Heaven does
- What makes it different
- Why its furniture is premium
- Why customization matters

## Goal 2 — Lead Conversion

Turn visitor interest into an inquiry.

The user journey should intentionally move through:

**Discovery → Trust → Desire → Customization → Inquiry**

The website should repeatedly encourage one primary action:

**Request a Quote**

Secondary actions:

**WhatsApp Us**
**Call Now**

Do not introduce unrelated conversion goals.

## Goal 3 — Premium Digital Showroom Experience

Create a visually sophisticated, mobile-first experience that feels premium without becoming excessive, slow, or gimmicky.

The website must be:

- Fast
- Responsive
- Accessible
- SEO-ready
- Visually refined
- Easy to navigate
- Easy to maintain

---

# DESIGN DIRECTION

## Overall Aesthetic

Use:

**Modern Luxury Interior Studio**

Think:

**Architectural magazine × premium furniture showroom × warm craftsmanship**

The design should be:

- Warm
- Editorial
- Spacious
- Tactile
- Minimal
- Confident
- Sophisticated
- Contemporary

Avoid:

- Generic furniture-store aesthetics
- Marketplace layouts
- Excessive cards
- Overuse of rounded corners
- Loud gradients
- Excessive gold
- Cheap-looking shadows
- Template-like UI
- Excessive animations
- Crowded layouts
- Huge blocks of unnecessary copy

---

# VISUAL SYSTEM

## Color Palette

Use these as design tokens and adjust subtly where necessary to achieve visual harmony.

```text
Deep Charcoal-Teal
#172522

Warm Ivory
#F5F1E8

Soft Sand
#E7DED0

Deep Brown
#332820

Muted Brass
#B79A65

Natural Wood Tan
#9A7656
```

Rules:

- Warm Ivory should dominate the light surfaces.
- Deep Charcoal-Teal should be used for hero/footer/dark editorial sections.
- Deep Brown should be the main dark text color.
- Muted Brass should be used sparingly.
- Brass must NEVER become the dominant visual color.
- Avoid gradients unless genuinely necessary.
- Avoid excessive decorative elements.

---

# TYPOGRAPHY

Primary heading font:

**Cormorant Garamond**

Body/UI font:

**Manrope**

Use the serif for:

- Hero headline
- Major section headlines
- Editorial statements
- Large pull quotes

Use the sans-serif for:

- Navigation
- Body text
- Buttons
- Labels
- Contact information
- Metadata
- Supporting copy

Typography should create the feeling of a premium editorial publication.

Recommended hierarchy:

### Hero

Desktop:
64–88px

Mobile:
46–58px

### Section headings

Desktop:
44–60px

Mobile:
34–42px

### Body

16–18px

Line height:
1.6–1.75

### Navigation / UI

13–14px

### Eyebrow / labels

11–12px

Use subtle letter spacing for small uppercase labels.

---

# LAYOUT LANGUAGE

Do not create a conventional corporate grid-heavy page.

Use:

- Large photographic compositions
- Generous whitespace
- Editorial asymmetry
- Strong visual hierarchy
- Thin rules
- Large margins
- Mixed image proportions
- Full-bleed imagery where appropriate

Avoid making everything look like a card.

The website should feel curated.

---

# PHOTOGRAPHY

Photography is one of the most important elements of the design.

Prioritize:

- Real Heaven furniture
- Showroom interiors
- Furniture close-ups
- Wood grain
- Upholstery
- Craftsmanship
- Finished room compositions
- Lifestyle furniture photography
- Workshop / making process imagery

Social sources:

Facebook:
https://www.facebook.com/HeavenFurnitureMart

Instagram:
https://www.instagram.com/heaven_furniture_ltd

YouTube:
https://www.youtube.com/@HeavenFurnitureMart

Use real brand imagery wherever possible.

Do not invent fake product photography when authentic brand imagery is available.

If actual assets are unavailable during implementation, create a clearly organized image-data structure so real assets can be swapped in without changing the component architecture.

Never make the page look like it depends on generic stock photography.

Do not distort images.

Use:

- `object-fit`
- responsive image sizing
- proper aspect-ratio containers
- lazy loading below the fold
- optimized image delivery

---

# CONTENT

Use concise, premium, conversion-oriented copy.

Do not write walls of marketing text.

## Core brand statement

The website must communicate the concept:

> Furniture designed around you.

Possible positioning language may include:

**Furniture, Crafted Around You**

**Designed. Crafted. Customized.**

**Furniture made for your space, your taste, and the way you live.**

Do not blindly use these exact phrases everywhere. Create a coherent messaging hierarchy.

---

## Brand Quote

Use this genuine brand proof:

> “At Heaven Furniture Mart, we believe furniture is more than just function; it is a reflection of lifestyle, taste, and comfort. Every piece we create is designed to bring lasting elegance into the homes of our clients.”

— **Abul Kalam Bhuiyan, Managing Director**

Do not fabricate customer testimonials.

---

# SERVICES / COLLECTIONS

The website should show a curated collection snapshot rather than a full catalog.

### Living Room

- Sofas
- Coffee tables
- TV units
- Consoles

### Bedroom

- Beds
- Wardrobes
- Dressing tables
- Bedside tables

### Dining

- Dining tables
- Dining chairs
- Cabinets

### Office & Study

- Executive tables
- Bookshelves
- Workstations

### Bespoke / Custom

Custom furniture designed around:

- Space
- Size
- Taste
- Function
- Materials
- Interior style

Do not build an ecommerce catalog.

---

# TRUST POINTS

Use these as trust-building signals:

- Free design consultation
- Fully bespoke
- Premium wood & materials
- Skilled in-house craftsmanship
- Large physical showroom in Chattogram
- Delivery & installation included
- Easy payment options
- Trusted by hundreds of homeowners

Do not invent numerical statistics beyond the information supplied here.

---

# OPTIONAL BRAND TIMELINE

A subtle timeline can be included if it improves the page:

```text
2020 — Founded by Abul Kalam Bhuiyan
2021 — Opened the Agrabad showroom
2024–2025 — Exhibited at the International Furniture Fair, Chattogram
2025 — Became a member of the Chamber of Commerce
2026 — Received nationwide BFIOA recognition
```

The timeline should remain secondary to the main conversion flow.

---

# CORE FUNCTIONALITY

The following are mandatory:

### P0

- Responsive landing page
- Hero with primary CTA
- Sticky/persistent mobile CTA
- Collections showcase
- Bespoke customization section
- Trust/credibility section
- Social proof
- Quote/contact CTA
- WhatsApp integration
- Phone integration
- Contact information
- Showroom information
- Social media links
- Smooth anchor navigation
- Optimized photography
- SEO metadata
- Semantic HTML
- Accessibility fundamentals
- Performance optimization

---

# LEAD CAPTURE

Implement a lightweight **Request a Quote** form.

Suggested fields:

- Name
- Phone / WhatsApp
- Furniture requirement
- Optional message

Example furniture requirement values:

- Living Room
- Bedroom
- Dining
- Office / Study
- Bespoke / Custom
- Other

The form must be designed as a real conversion interaction, not merely visual UI.

Because the website is static and does not require a traditional backend, architect the form so the submission target can be configured independently.

The implementation should make it easy to connect the form later to:

- Email service
- Google Apps Script
- Form endpoint
- CRM
- Other external form-processing service

Do not hard-code a fake success state that implies a real submission occurred when no endpoint exists.

Create a clean configuration point for the future submission endpoint.

---

# CTA STRATEGY

Use one primary conversion action:

**Request a Quote**

Secondary contact actions:

**WhatsApp Us**
**Call Now**

The primary CTA should appear:

- Hero
- After trust section
- After bespoke section
- Near the bottom
- Footer

Do not create competing primary CTAs such as:

- Shop Now
- Buy Now
- View Products
- Subscribe
- Book Demo

This is not an ecommerce site.

---

# NAVIGATION

Keep navigation minimal.

Suggested structure:

- Home
- Collections
- Bespoke
- About
- Contact

Navigation should scroll smoothly to page sections.

On mobile:

- Use a clean menu
- Keep the CTA visible or easily accessible
- Avoid overly complicated menus

---

# MOTION

Use motion sparingly and intentionally.

Good examples:

- Gentle fade-in
- Small vertical reveal
- Image scale from 1 to 1.03 on hover
- Smooth anchor transitions
- Subtle navigation transitions

Avoid:

- Excessive parallax
- Bouncing elements
- Huge transition sequences
- Decorative animation everywhere
- Animation that delays content

Respect `prefers-reduced-motion`.

---

# TECHNICAL REQUIREMENTS

Use:

**React + Vite + TypeScript + Tailwind CSS v4**

Prefer a static-site architecture.

The project should be deployable to ordinary static hosting / cPanel hosting without requiring a Node.js runtime in production.

Generate a normal production build using Vite.

The output should be deployable as static assets.

---

# ARCHITECTURE

Use clean component architecture.

Example structure:

```text
src/
├── assets/
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── sections/
│   ├── ui/
│   └── forms/
├── config/
├── data/
├── hooks/
├── lib/
├── styles/
├── App.tsx
├── main.tsx
└── ...
```

Use components based on actual visual responsibility rather than creating a component for every tiny element.

Avoid both extremes:

- One giant `App.tsx`
- Hundreds of meaningless micro-components

Create reusable components where repetition or semantic responsibility justifies them.

---

# CONTENT ARCHITECTURE

Do not hard-code repeated content directly inside JSX wherever avoidable.

Use typed data structures for:

- Collections
- Trust points
- Social links
- Navigation
- Contact details
- Milestones
- CTA configuration

Example:

```ts
type Collection = {
  title: string
  description: string
  image: string
  href?: string
}
```

This should make content replacement straightforward for the client.

---

# DESIGN TOKENS

Create centralized design tokens for:

- Colors
- Typography
- Spacing
- Container widths
- Border radii
- Motion timing
- Shadows where necessary

Do not scatter arbitrary values across the project when a reusable token makes sense.

Use Tailwind CSS v4 conventions correctly.

---

# RESPONSIVE DESIGN

Design mobile-first.

Test at minimum:

- 320px
- 375px
- 390px
- 430px
- 768px
- 1024px
- 1280px
- 1440px
- 1920px

The page should not simply shrink desktop layouts.

Recompose layouts where necessary.

Pay particular attention to:

- Hero crop
- Headline wrapping
- Navigation
- Image proportions
- CTA placement
- Form usability
- Touch targets
- Typography
- Horizontal overflow

---

# ACCESSIBILITY

Implement strong accessibility fundamentals:

- Semantic HTML
- Correct heading hierarchy
- Accessible buttons
- Keyboard navigation
- Visible focus states
- Descriptive link text
- Appropriate `aria-*` attributes
- Meaningful alt text
- Proper form labels
- Sufficient contrast
- Touch targets suitable for mobile
- Reduced-motion support

Do not use accessibility attributes unnecessarily.

---

# SEO

Implement:

- Unique page title
- Meta description
- Canonical URL placeholder/configuration
- Open Graph metadata
- Twitter/X metadata
- Semantic heading hierarchy
- Image alt attributes
- Local business information
- Structured data where appropriate

Consider `LocalBusiness` / relevant schema markup using only information actually provided.

Do not fabricate business data.

---

# PERFORMANCE

Treat performance as a first-class requirement.

Implement:

- Lazy loading for non-critical images
- Eager loading / priority treatment for the hero image when appropriate
- Responsive image sizing
- Modern image formats where practical
- Minimized JS
- No unnecessary dependencies
- Avoid heavy animation libraries unless actually required
- Avoid huge hero images
- Avoid layout shift
- Reserve media dimensions with aspect ratios
- Efficient font loading

Do not load five font families when only two are needed.

---

# ERROR / EMPTY STATES

For the quote form:

- Validate required fields
- Show clear validation messages
- Prevent duplicate submission
- Provide success state only after actual successful submission
- Provide failure state when submission fails
- Keep the interaction usable on mobile

If no submission service is configured, clearly isolate that configuration rather than pretending the form is fully connected.

---

# SECURITY / QUALITY

Do not:

- Store secrets in frontend code
- Put private API keys in environment variables intended to be public
- Embed unnecessary third-party trackers
- Add unnecessary external dependencies
- Use inline dangerous HTML
- Include fake testimonials
- Fabricate reviews
- Fabricate statistics
- Make unsupported claims

External services should be isolated behind configuration.

---

# CODE QUALITY

The code should be:

- Strongly typed
- Readable
- Maintainable
- Consistent
- Modular
- Production-oriented

Avoid:

- `any` unless genuinely unavoidable
- duplicated markup
- duplicated configuration
- giant components
- dead code
- unused dependencies
- random utility classes with no purpose
- unnecessary state
- unnecessary client-side JavaScript

Use React state only where interactivity requires it.

---

# VISUAL QUALITY BAR

The final design should feel closer to:

**high-end furniture editorial / interior design studio**

than:

**generic furniture ecommerce template**

The visual hierarchy should be led by:

1. Photography
2. Typography
3. Whitespace
4. Editorial composition
5. Carefully restrained UI

The interface itself should not compete with the furniture.

The furniture should look expensive.

The website should feel confident enough to let the photography carry the experience.

---

# IMPORTANT DESIGN PRINCIPLES

## Principle 1

**Do not make everything a card.**

Cards should only appear when they improve information hierarchy.

## Principle 2

**Do not use excessive rounded corners.**

Prefer architectural geometry and subtle radii.

## Principle 3

**Do not overuse brass.**

Brass is an accent, not the primary visual language.

## Principle 4

**Do not use fake luxury patterns.**

Avoid:

- random gold lines
- excessive dark backgrounds
- ornamental flourishes
- giant quotation marks everywhere
- unnecessary grain overlays
- fake 3D effects
- excessive glassmorphism

## Principle 5

**Let photography create the luxury.**

Do not compensate for weak imagery with decorative UI.

## Principle 6

**Design for the customer, not the judge.**

A first-time visitor must understand the business within approximately 30 seconds.

---

# CONTENT PRIORITY

The content hierarchy should roughly follow:

```text
Who are you?
↓
Why should I trust you?
↓
What can you create?
↓
Why is bespoke better?
↓
Can I see evidence?
↓
How do I start?
```

The page should feel like one continuous narrative rather than eight unrelated sections.

---

# DELIVERABLE

Produce the complete implementation.

Include:

1. Full project structure
2. All React/TypeScript components
3. Tailwind CSS v4 setup
4. Configuration/data files
5. Responsive layouts
6. Quote form UI and configurable submission architecture
7. SEO metadata
8. Accessibility implementation
9. Optimized image handling
10. Production-ready Vite configuration
11. Clean README with:
   - installation
   - local development
   - production build
   - deployment to cPanel/static hosting
   - image replacement instructions
   - quote form endpoint configuration
   - environment variable requirements
   - customization guide

---

# IMPLEMENTATION PROCESS

Before writing the final implementation:

1. Establish the design system.
2. Establish the content model.
3. Establish the page architecture.
4. Build the desktop and mobile layout.
5. Add interactions.
6. Add accessibility.
7. Add SEO.
8. Optimize assets and performance.
9. Review the entire experience as a first-time customer.
10. Refine anything that feels generic, crowded, template-like, or unnecessarily complex.

Do not stop after achieving functional completeness.

Perform a final visual and UX pass specifically asking:

> “Does this genuinely feel like a premium Chattogram bespoke furniture studio?”

If the answer is no, refine the design.

---

# FINAL OUTPUT FORMAT

Return:

## 1. Project Summary

Briefly explain the final product and design direction.

## 2. File Structure

Show the final project tree.

## 3. Implementation

Provide the complete source code required to run the project.

## 4. Setup

Provide exact installation and development commands.

## 5. Production Build

Provide the exact build command and expected output directory.

## 6. Deployment

Explain how to deploy the generated static build to cPanel/static hosting.

## 7. Content & Image Replacement

Explain exactly where the client can replace:

- Logo
- Furniture images
- Showroom images
- Contact information
- Social links
- Collection content
- Quote form endpoint

## 8. Production Checklist

Verify:

- Responsive behavior
- Accessibility
- SEO
- Performance
- Form behavior
- CTA behavior
- Broken links
- Image loading
- Mobile navigation
- Static deployment compatibility

Do not leave unexplained placeholders except where real brand assets or a form submission endpoint are genuinely unavailable.

The final result should be a **real production-grade static marketing website**, not a demo, mockup, or generic AI landing page.