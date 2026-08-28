# Heaven Furniture Mart — Luxury Bespoke Furniture Marketing Website

Production-grade, conversion-focused static marketing website and digital luxury furniture studio for **Heaven Furniture Mart**, Agrabad, Chattogram, Bangladesh.

---

## 1. Brand & Strategic Positioning

- **Brand Name:** Heaven Furniture Mart
- **Market Category:** Luxury / Bespoke Furniture & Interior Styling
- **Core Message:** *“Designed. Crafted. Customized.”* / *“Furniture, Crafted Around You.”*
- **Flagship Studio:** Opposite of RAK Ceramics, Agrabad Access Road, Chattogram, Bangladesh
- **Founder / Managing Director:** Abul Kalam Bhuiyan
- **Phone / WhatsApp:** `+880 1960-481983`
- **Email:** `heavenfurnituremart@gmail.com`
- **Social Media:**
  - Facebook: [https://www.facebook.com/HeavenFurnitureMart](https://www.facebook.com/HeavenFurnitureMart)
  - Instagram: [https://www.instagram.com/heaven_furniture_ltd](https://www.instagram.com/heaven_furniture_ltd)
  - YouTube: [https://www.youtube.com/@HeavenFurnitureMart](https://www.youtube.com/@HeavenFurnitureMart)

---

## 2. Tech Stack & Architecture

- **Frontend Framework:** React 19 + TypeScript
- **Build Tool:** Vite 6 (Pure static zero-runtime client-side bundle)
- **Styling:** Tailwind CSS v4 with `@theme` design tokens
- **Typography:** `Cormorant Garamond` (Editorial Serif Headings) + `Manrope` (Clean UI Sans)
- **Icons:** Lucide React
- **Lead Capture:** Configurable endpoint adapter with instant WhatsApp pre-filled quote fallback

---

## 3. Project Structure

```text
heaven-furniture-mart/
├── .context/                      # Master project requirements, visual assets & progress tracker
│   ├── progress-tracker.md
│   ├── Project master promt.md
│   └── visuals/
├── public/
│   ├── favicon.svg                # Brand SVG favicon
│   └── images/                    # High-res showroom and catalog imagery
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── forms/
│   │   ├── layout/
│   │   │   ├── Footer.tsx         # Architectural dark luxury footer
│   │   │   └── Header.tsx         # Sticky blur header with mobile navigation drawer
│   │   ├── navigation/
│   │   ├── sections/
│   │   │   ├── BespokeHighlightSection.tsx  # 5-phase bespoke workflow
│   │   │   ├── BrandIntroSection.tsx        # Studio philosophy & founder's quote
│   │   │   ├── CollectionsSection.tsx       # Curated collections with filter tabs
│   │   │   ├── HeroSection.tsx              # Editorial hero banner & CTAs
│   │   │   ├── QuoteFormSection.tsx         # Lead capture quote form & WhatsApp fallback
│   │   │   ├── ShowroomSection.tsx          # Showroom profile, maps & milestone timeline
│   │   │   └── TrustPillarsSection.tsx      # 8 brand trust pillars
│   │   └── ui/
│   │       ├── Button.tsx                   # Accessible button component
│   │       ├── LightboxModal.tsx            # High-res photo inspection modal
│   │       └── MobileConversionBar.tsx      # Fixed bottom mobile conversion bar
│   ├── config/
│   │   ├── leadCapture.ts         # Form submission endpoint and WhatsApp builder
│   │   └── site.ts                # Central brand information and contact details
│   ├── data/
│   │   ├── bespokeProcess.ts      # 5-step custom furniture creation data
│   │   ├── collections.ts         # Categorized collection items and specs
│   │   ├── navigation.ts          # Navigation links and footer anchors
│   │   ├── timeline.ts            # Brand milestones (2020–2026)
│   │   └── trustPoints.ts         # 8 brand trust signals
│   ├── lib/
│   │   └── utils.ts               # Class merging utility (clsx + twMerge)
│   ├── styles/
│   │   └── globals.css            # Tailwind CSS v4 @theme design tokens
│   ├── types/
│   │   └── index.ts               # TypeScript interfaces
│   ├── App.tsx                    # Master coordinator component
│   └── main.tsx                   # Application entry point
├── index.html                     # SEO meta tags, Google Fonts, JSON-LD Schema
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 4. Local Development Setup

### Prerequisites
- Node.js `v18.0.0` or later
- npm `v9.0.0` or later

### Installation & Launch

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
```

The site will be available at `http://localhost:5173`.

---

## 5. Production Build

To compile the static production bundle:

```bash
npm run build
```

The static files will be generated in the `dist/` directory:
- `dist/index.html`
- `dist/assets/` (minified CSS & JS)
- `dist/images/` (optimized visual assets)
- `dist/favicon.svg`

---

## 6. Static Hosting & cPanel Deployment Guide

Because the website compiles to pure static HTML/CSS/JS with zero Node.js server dependencies, it can be hosted on any standard cPanel web hosting or static CDN.

### Deploying to cPanel:
1. Run `npm run build` locally.
2. Compress the contents of the `dist/` folder into a `.zip` file (e.g. `dist.zip`).
3. Log into your cPanel dashboard and open **File Manager**.
4. Navigate to `public_html` (or your subdomain directory).
5. Upload `dist.zip` and extract its contents into `public_html/`.
6. Ensure that `index.html` resides directly inside `public_html/`.

### `.htaccess` for Apache / cPanel (Optional Caching & Security)
Create an `.htaccess` file inside `public_html/` with the following configuration:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Enable GZIP compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript application/json image/svg+xml
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

## 7. Content & Image Replacement Guide

All brand data and copy are cleanly decoupled from the UI components:

| Item to Replace | File Location | Notes |
| :--- | :--- | :--- |
| **Phone, Email, Showroom Address** | `src/config/site.ts` | Updates across the entire website instantly. |
| **Founder Quote & Name** | `src/config/site.ts` | Updates header, founder quote card, and footer. |
| **Furniture Collections & Specs** | `src/data/collections.ts` | Add, edit, or remove collections, dimensions, and materials. |
| **Trust Pillars** | `src/data/trustPoints.ts` | Customize the 8 trust signals. |
| **Bespoke Process Steps** | `src/data/bespokeProcess.ts` | Update timelines and deliverables. |
| **Milestone Timeline** | `src/data/timeline.ts` | Add new corporate milestones. |
| **Catalog & Showroom Images** | `public/images/` | Replace existing `.jpg`/`.png` files with same names, or update paths in `src/data/collections.ts`. |
| **Favicon & Logo** | `public/favicon.svg` | Replace SVG vector mark. |

---

## 8. Form & Lead Capture Configuration

The "Request a Quote" form is managed by `src/config/leadCapture.ts`.

### Option A: Direct WhatsApp Mode (Default)
When `leadCaptureConfig.endpointUrl` is left empty `''`, clicking submit or "Send Consultation Request" automatically compiles the user's project details into a pre-filled WhatsApp message directly to `+880 1960-481983`.

### Option B: External API Endpoint (Web3Forms / Formspree / Google Sheets)
To connect the form to an external email service:
1. Open `src/config/leadCapture.ts`.
2. Set `endpointUrl`:
   ```ts
   export const leadCaptureConfig: LeadCaptureConfig = {
     endpointUrl: 'https://api.web3forms.com/submit', // or your Formspree / Apps Script URL
     enableWhatsAppFallback: true,
     whatsAppPhone: siteConfig.contact.phoneRaw,
   }
   ```
3. Re-run `npm run build`.

---

## 9. Production Verification Checklist

- [x] **Mobile Responsive:** Verified across 320px, 375px, 430px, 768px, 1024px, 1440px.
- [x] **Zero CLS / Layout Shift:** Explicit aspect ratios (`aspect-4/3`, `aspect-square`, etc.) on all image containers.
- [x] **LCP Optimized:** Hero image set with `fetchPriority="high"`; below-fold images set with `loading="lazy"`.
- [x] **Typography Scale:** Google Fonts (`Cormorant Garamond` serif & `Manrope` sans) loaded via preconnected links.
- [x] **Accessibility:** High-contrast color tokens, keyboard navigation with `Escape` / `Arrow` keys for Lightbox, visible focus rings, ARIA landmarks.
- [x] **SEO & LocalBusiness Schema:** Complete JSON-LD Schema markup for Agrabad showroom.
- [x] **Conversion Anchors:** Smooth scrolling to `#quote`, `#collections`, `#bespoke`, `#showroom`.
- [x] **Mobile Conversion Bar:** Fixed bottom bar with 1-tap WhatsApp and Quote triggers.
