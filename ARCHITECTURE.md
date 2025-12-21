# Architecture Documentation

This document provides an in-depth look at the architecture of the Hubql Labs website.

## Table of Contents

- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Architecture Patterns](#architecture-patterns)
- [Directory Structure](#directory-structure)
- [Data Flow](#data-flow)
- [Rendering Strategy](#rendering-strategy)
- [Component Architecture](#component-architecture)
- [Content Management](#content-management)
- [API Routes](#api-routes)
- [Styling Architecture](#styling-architecture)
- [Performance Optimizations](#performance-optimizations)
- [Security Architecture](#security-architecture)

## Overview

The Hubql Labs website is a modern, statically-generated website built with Next.js, leveraging the Pages Router for optimal performance and SEO. The architecture emphasizes:

- **Static Generation** for fast page loads
- **Git-backed CMS** for version-controlled content
- **Component Reusability** for maintainable code
- **Type Safety** with TypeScript
- **Performance** through code splitting and optimization

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                      User Browser                        │
└───────────────────────┬─────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────┐
│              Vercel Edge Network (CDN)                   │
│  - Static HTML/CSS/JS                                    │
│  - Image Optimization                                    │
│  - Edge Caching                                          │
└───────────────────────┬─────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────┐
│              Next.js Application                         │
│                                                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   Pages      │  │  Components  │  │  API Routes  │  │
│  │   Router     │  │  & Blocks    │  │              │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│                                                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   TinaCMS    │  │   Styling    │  │   Assets     │  │
│  │   Content    │  │  (Tailwind)  │  │   (Images)   │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└───────────────────────┬─────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────┐
│                   Data Sources                           │
│  - Git Repository (Content)                              │
│  - TinaCMS API (Content Management)                      │
│  - Environment Variables (Config)                        │
└─────────────────────────────────────────────────────────┘
```

## Technology Stack

### Core Framework

```typescript
Next.js 16 (Pages Router)
├── React 18 (UI Library)
├── TypeScript 5.2 (Type Safety)
└── Node.js 20+ (Runtime)
```

### Content Management

```typescript
TinaCMS 2.7
├── Git-backed Storage
├── Visual Editor
├── MDX Support
└── TypeScript Schema
```

### Styling & UI

```typescript
Tailwind CSS 3
├── Custom Design System
├── Dark Mode Support
├── Responsive Design
└── Animation Utilities

Radix UI (Headless Components)
├── Accessible Components
├── Unstyled Primitives
└── Keyboard Navigation

Framer Motion 11 (Animations)
└── Declarative Animations
```

### Developer Tools

```typescript
Development
├── ESLint (Code Quality)
├── Prettier (Code Formatting)
├── Husky (Git Hooks)
└── lint-staged (Pre-commit Checks)

Build Tools
├── SWC (Fast Compilation)
├── Sharp (Image Optimization)
└── PostCSS (CSS Processing)
```

## Architecture Patterns

### 1. Static Site Generation (SSG)

Most pages use Static Generation for optimal performance:

```typescript
export const getStaticProps: GetStaticProps = async () => {
  // Fetch data at build time
  const data = await fetchData();
  
  return {
    props: { data },
  };
};
```

**Benefits**:
- Instant page loads
- SEO-friendly
- Scalable (served from CDN)
- Cost-effective

### 2. Incremental Static Regeneration (ISR)

For frequently updated content:

```typescript
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { data },
    revalidate: 60, // Revalidate every 60 seconds
  };
};
```

### 3. Component Composition

Block-based page composition:

```typescript
// Page structure
<Layout>
  <Hero {...heroData} />
  <Services {...servicesData} />
  <Testimonials {...testimonialsData} />
  <CTA {...ctaData} />
</Layout>
```

### 4. Separation of Concerns

```
Presentation Layer (Components)
    ↓
Business Logic Layer (Hooks/Utils)
    ↓
Data Layer (TinaCMS/API)
```

## Directory Structure

### Detailed Breakdown

```
/workspace/
│
├── src/                          # Source code
│   ├── components/               # React components
│   │   ├── animation/            # Animation components
│   │   │   ├── HeroBg.tsx       # Hero background animation
│   │   │   ├── Typewriter.tsx   # Typewriter effect
│   │   │   └── ...
│   │   │
│   │   ├── blocks/               # TinaCMS block components
│   │   │   ├── Hero.tsx         # Hero section block
│   │   │   ├── Services.tsx     # Services section block
│   │   │   ├── Testimonials.tsx # Testimonials block
│   │   │   └── ...              # Schema + Component
│   │   │
│   │   ├── kit/                  # UI Kit components
│   │   │   ├── Button.tsx       # Reusable button
│   │   │   ├── Section.tsx      # Section wrapper
│   │   │   ├── Badge.tsx        # Badge component
│   │   │   └── ...
│   │   │
│   │   ├── layout/               # Layout components
│   │   │   ├── Layout.tsx       # Main layout wrapper
│   │   │   ├── Header.tsx       # Site header
│   │   │   ├── Footer.tsx       # Site footer
│   │   │   └── ...
│   │   │
│   │   └── util/                 # Utility components
│   │       ├── Blocks.tsx       # Block renderer
│   │       ├── cn.ts            # Class name utility
│   │       └── ...
│   │
│   ├── content/                  # Content files (Git-backed)
│   │   ├── pages/                # Page content (MDX)
│   │   │   ├── home.mdx         # Homepage content
│   │   │   ├── about.mdx        # About page content
│   │   │   └── ...
│   │   │
│   │   ├── posts/                # Blog posts (MDX)
│   │   │   ├── why-hubql.mdx
│   │   │   └── ...
│   │   │
│   │   ├── docs/                 # Documentation (MDX)
│   │   │   ├── introduction/
│   │   │   ├── quickstarts/
│   │   │   └── ...
│   │   │
│   │   └── global/               # Global settings (JSON)
│   │       └── settings.json    # Header/Footer config
│   │
│   └── pages/                    # Next.js pages
│       ├── _app.tsx              # App wrapper
│       ├── _document.tsx         # HTML document
│       ├── index.tsx             # Homepage route
│       ├── [...filename].tsx     # TinaCMS catch-all
│       │
│       ├── api/                  # API routes
│       │   ├── contact.ts       # Contact form handler
│       │   ├── og.tsx           # OG image generation
│       │   └── sitemap.ts       # Dynamic sitemap
│       │
│       ├── blog/                 # Blog routes
│       │   ├── index.tsx        # Blog listing
│       │   └── [filename].tsx   # Individual post
│       │
│       ├── docs/                 # Documentation routes
│       │   ├── index.tsx        # Docs home
│       │   └── [...filename].tsx # Docs pages
│       │
│       └── product/              # Product pages
│           ├── api-client.tsx
│           └── ...
│
├── public/                       # Static assets
│   ├── customers/               # Customer logos
│   ├── team/                    # Team photos
│   ├── blog/                    # Blog images
│   └── ...
│
├── tina/                         # TinaCMS configuration
│   └── config.ts                # Schema definition
│
├── categories/                   # Content categories
│   ├── introduction.md
│   ├── quickstart.md
│   └── ...
│
└── Configuration files
    ├── next.config.js           # Next.js config
    ├── tailwind.config.ts       # Tailwind config
    ├── tsconfig.json            # TypeScript config
    └── ...
```

## Data Flow

### Content Editing Flow

```
┌──────────────┐
│ Content      │
│ Editor       │
│ (TinaCMS)    │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Edit MDX     │
│ Content      │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Save to Git  │
│ (Commit)     │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Trigger      │
│ Deployment   │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Build Site   │
│ (Next.js)    │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Deploy to    │
│ Vercel Edge  │
└──────────────┘
```

### Page Rendering Flow

```
User Request
    │
    ▼
Check Static Cache
    │
    ├─── Cache Hit ────→ Serve HTML
    │
    └─── Cache Miss
            │
            ▼
    Fetch from TinaCMS
            │
            ▼
    Parse MDX Content
            │
            ▼
    Render Components
            │
            ▼
    Generate HTML
            │
            ▼
    Cache & Serve
```

## Rendering Strategy

### Static Generation (Primary)

Used for:
- Homepage
- About page
- Service pages
- Product pages
- Blog posts (pre-rendered)
- Documentation pages

**Build Process**:
1. TinaCMS builds content schema
2. Next.js fetches all content
3. Pages are pre-rendered to HTML
4. Assets are optimized
5. Output deployed to CDN

### Dynamic Rendering (Selective)

Used for:
- Contact form submission (API route)
- Search functionality (client-side)
- OG image generation (on-demand)
- Dynamic sitemap (regenerated)

## Component Architecture

### Block System

```typescript
// Block Component Structure
interface BlockProps {
  title: string;
  description?: string;
  // ... other props
}

export const Block: React.FC<BlockProps> = ({ title, description }) => {
  return (
    <section className="py-20">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </section>
  );
};

// TinaCMS Schema
export const blockSchema = {
  name: 'Block',
  label: 'Block',
  fields: [
    { type: 'string', name: 'title', label: 'Title' },
    { type: 'string', name: 'description', label: 'Description' },
  ],
};
```

### Component Hierarchy

```
Layout (Global wrapper)
├── Header
│   ├── Logo
│   ├── Navigation
│   │   ├── NavItem
│   │   └── DropdownMenu
│   └── ThemeSwitch
│
├── Page Content
│   ├── Blocks (Dynamic)
│   │   ├── Hero
│   │   ├── Services
│   │   ├── Testimonials
│   │   └── CTA
│   └── Custom Components
│
└── Footer
    ├── Navigation
    ├── Legal Links
    └── Social Links
```

## Content Management

### TinaCMS Architecture

```
TinaCMS Schema (tina/config.ts)
    │
    ├── Collections
    │   ├── Pages
    │   ├── Posts
    │   ├── Docs
    │   └── Global
    │
    └── For each collection:
        ├── Fields Definition
        ├── Template Schemas
        └── UI Configuration
```

### Content Storage

```
Git Repository
├── src/content/pages/*.mdx    (Version controlled)
├── src/content/posts/*.mdx    (Version controlled)
├── src/content/docs/*.mdx     (Version controlled)
└── src/content/global/*.json  (Version controlled)
```

**Benefits**:
- Version control (full history)
- Rollback capability
- Collaborative editing
- Branching and merging
- No database needed

## API Routes

### Available Endpoints

```
/api/contact       POST   Contact form submission
/api/og           GET    Open Graph image generation
/api/sitemap      GET    Dynamic sitemap XML
```

### Contact Form Handler

```typescript
// /api/contact.ts
export default async function handler(req, res) {
  // 1. Validate request method
  // 2. Validate input data
  // 3. Process form submission
  // 4. Send email/notification
  // 5. Return response
}
```

### OG Image Generation

```typescript
// /api/og.tsx
export default async function handler(req) {
  // 1. Parse query parameters
  // 2. Generate image with @vercel/og
  // 3. Return image response
}
```

## Styling Architecture

### Tailwind CSS Configuration

```typescript
// tailwind.config.ts
{
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        accent: { /* custom green shades */ },
        background: '#121212',
        primary: '#3ECF8E',
        // ... more colors
      },
      fontFamily: {
        noto: ['var(--font-noto)'],
        orbitron: ['var(--font-orbitron)'],
        lexend: ['var(--font-lexend)'],
      },
      animation: {
        spotlight: 'spotlight 2s ease .75s 1 forwards',
        aurora: 'aurora 120s linear infinite',
      },
    },
  },
}
```

### CSS Architecture

```
Global Styles (globals.css)
    │
    ├── CSS Variables
    ├── Base Styles
    └── Utility Classes

Component Styles (Tailwind)
    │
    ├── Utility Classes
    ├── Custom Classes
    └── Responsive Modifiers
```

## Performance Optimizations

### 1. Code Splitting

- Automatic route-based splitting
- Dynamic imports for heavy components
- Optimized vendor bundles

### 2. Image Optimization

```typescript
// Next.js Image component
<Image
  src="/image.png"
  width={800}
  height={600}
  loading="lazy"       // Lazy load below fold
  placeholder="blur"   // Blur placeholder
/>
```

### 3. Font Optimization

```typescript
// Variable fonts loaded in _app.tsx
import { Noto_Sans, Orbitron, Lexend } from 'next/font/google';

const noto = Noto_Sans({ 
  subsets: ['latin'],
  variable: '--font-noto',
  display: 'swap',
});
```

### 4. Bundle Optimization

- Tree shaking
- Minification (SWC)
- Compression (Gzip/Brotli)
- CSS purging (unused classes removed)

### 5. Caching Strategy

```
Static Assets → Cache-Control: public, max-age=31536000, immutable
HTML Pages → Cache-Control: public, max-age=0, must-revalidate
API Routes → Cache-Control: no-cache, no-store
```

## Security Architecture

### 1. Content Security Policy

```javascript
// next.config.js headers
headers: () => [
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // ... more headers
]
```

### 2. Environment Variables

```
Public (Client-side)
├── NEXT_PUBLIC_POSTHOG_KEY
└── NEXT_PUBLIC_TURNSTILE_SITE_KEY

Private (Server-side only)
├── TINA_TOKEN
├── SENDGRID_API_KEY
└── OTHER_SECRETS
```

### 3. Input Validation

All user inputs are validated:
- Contact form fields
- API request parameters
- TinaCMS content (sanitized)

### 4. Dependencies

- Regular `npm audit` checks
- Automated dependency updates
- Security patches applied promptly

## Deployment Architecture

```
GitHub Repository
    │
    ▼
Vercel Build
    │
    ├── Install Dependencies
    ├── Build TinaCMS
    ├── Build Next.js
    └── Optimize Assets
    │
    ▼
Vercel Edge Network
    │
    ├── Global CDN
    ├── Edge Caching
    ├── Image Optimization
    └── SSL/TLS
    │
    ▼
User Browser
```

### Build Steps

1. **Dependency Installation**: `npm ci`
2. **TinaCMS Build**: `npx tinacms build`
3. **Next.js Build**: `next build`
4. **Asset Optimization**: Images, fonts, JS/CSS
5. **Deployment**: Push to edge network

## Monitoring & Analytics

### Performance Monitoring

- Vercel Analytics (Web Vitals)
- PostHog (User behavior)
- Real User Monitoring (RUM)

### Error Tracking

- Client-side error boundaries
- Server-side error logging
- Build error notifications

---

For more details on specific areas, see:
- [Development Guide](./DEVELOPMENT.md)
- [Deployment Guide](./DEPLOYMENT.md)
- [Contributing Guide](./CONTRIBUTING.md)
