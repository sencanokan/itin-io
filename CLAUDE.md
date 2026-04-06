# ITIN.io

ITIN.io is the dedicated ITIN (Individual Taxpayer Identification Number) service platform by Clemta, an IRS-authorized Certifying Acceptance Agent (CAA). The site serves both B2C (individual applicants) and B2B (whitelabel partners).

## Tech Stack

- **Framework**: Next.js 14.2 (App Router, TypeScript)
- **Styling**: Tailwind CSS 3.4 with custom design system
- **Animation**: Framer Motion 11
- **Icons**: Lucide React
- **UI Primitives**: Radix UI (Accordion, Slot)
- **Utilities**: clsx + tailwind-merge (`cn` helper from `lib/utils.ts`), class-variance-authority
- **Font**: Inter (variable, Google Fonts via `next/font`)
- **Deployment**: Vercel

## Project Structure

```
app/                    # Next.js App Router pages
  page.tsx              # Homepage (composes marketing components)
  layout.tsx            # Root layout (Inter font, Header, Footer)
  for-individuals/      # B2C individual ITIN service page
  for-businesses/       # B2B whitelabel partner page
  pricing/              # Dual pricing (individual + partner tabs)
  how-it-works/         # Step-by-step process with comparison
  about/                # Clemta story, IRS authorization
  api-docs/             # API documentation teaser
  contact/              # Contact form + routing
  apply/                # Eligibility checker + application start
components/
  layout/               # Header, Footer (shared across all pages)
  marketing/            # Homepage & shared marketing sections (Hero, FAQ, CTA, etc.)
  partner/              # B2B-specific components (placeholder for future)
  application/          # Application flow components (placeholder for future)
  ui/                   # Reusable UI primitives (placeholder for future)
data/                   # Static content data (FAQ, pricing, testimonials, navigation, process steps)
lib/utils.ts            # cn() helper (clsx + tailwind-merge)
```

## Design System

Inherited from `clemta-uae` project with additions:

- **Primary**: `#635bff` (Stripe purple)
- **Navy**: `#0a2540` (dark backgrounds)
- **Accent Cyan**: `#00d4ff` (secondary accent)
- **Accent Green**: `#00d924` (success states)
- **Accent Gold**: `#f5a623` (IRS authorization badges, trust signals)
- **Display fonts**: `display-xl` through `display-sm` defined in tailwind config
- **Utility classes**: `gradient-text`, `container-wide`, `container-tight`, `section`, `btn-primary`, `btn-secondary`, `card-hover` (defined in `globals.css`)

### Component Patterns

- **Section headers**: Badge pill above, display-size heading with `gradient-text`, subtitle below
- **Cards**: `border border-slate-200 bg-white` with `card-hover` class for lift effect
- **Dark sections**: `bg-navy-900` with gradient orbs (`bg-primary-500/30 blur-[100px]`) and grid pattern overlay
- **Animations**: Framer Motion `whileInView` with `viewport={{ once: true }}`, stagger children pattern
- **Pages**: Each route has `page.tsx` (server component with metadata) + `*Content.tsx` (client component with `"use client"`)

## Commands

```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # ESLint
```

## Key Conventions

- All page content components are client components (`"use client"`) for Framer Motion animations
- Page metadata is exported from server-component `page.tsx` files
- Static content lives in `data/` directory as typed TypeScript exports
- The `cn()` utility from `lib/utils.ts` is used for conditional class merging
- Navigation links are defined in `data/navigation.ts`
- FAQ component is reusable and accepts different FAQ data sets per page
- IRS CAA authorization badge (gold accent) is a recurring trust signal throughout the site
