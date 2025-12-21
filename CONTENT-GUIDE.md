# Content Management Guide

This guide explains how to manage content on the Hubql Labs website using TinaCMS.

## Table of Contents

- [Overview](#overview)
- [Accessing TinaCMS](#accessing-tinacms)
- [Content Types](#content-types)
- [Managing Pages](#managing-pages)
- [Managing Blog Posts](#managing-blog-posts)
- [Managing Documentation](#managing-documentation)
- [Managing Global Settings](#managing-global-settings)
- [Working with Media](#working-with-media)
- [SEO Best Practices](#seo-best-practices)
- [Content Writing Guidelines](#content-writing-guidelines)

## Overview

The Hubql Labs website uses [TinaCMS](https://tina.io/) as a Git-backed headless CMS. This means:

- ✅ Content is stored in Git (version controlled)
- ✅ Visual editing interface
- ✅ Markdown/MDX support
- ✅ Block-based page building
- ✅ Type-safe content with TypeScript
- ✅ Immediate preview of changes

### Content Flow

```
Edit in TinaCMS → Commit to Git → Trigger Build → Deploy to Production
```

All content changes are tracked in Git, making it easy to review changes, revert if needed, and maintain a complete history.

## Accessing TinaCMS

### Local Development

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Navigate to the admin panel**:
   ```
   http://localhost:3000/admin
   ```

3. **Authenticate** with your TinaCMS credentials

### Production

Visit `https://www.hubql.com/admin` and authenticate.

**Note**: You need appropriate permissions to access the production admin panel.

## Content Types

The website has four main content types:

### 1. Pages (Marketing Pages)

**Location**: `src/content/pages/`  
**Format**: MDX  
**URL Pattern**: `/{filename}`

**Examples**:
- `home.mdx` → `/` (homepage)
- `about.mdx` → `/about`
- `services.mdx` → `/services`
- `contact.mdx` → `/contact`

**Features**:
- Block-based composition
- Visual editing
- SEO metadata
- Flexible layouts

### 2. Blog Posts

**Location**: `src/content/posts/`  
**Format**: MDX  
**URL Pattern**: `/blog/{filename}`

**Examples**:
- `why-hubql.mdx` → `/blog/why-hubql`
- `hubql-open-source-alpha-january-2025.mdx` → `/blog/hubql-open-source-alpha-january-2025`

**Features**:
- Publication date
- Hero images
- Categories
- Rich text content
- Social embeds (Twitter cards)

### 3. Documentation

**Location**: `src/content/docs/`  
**Format**: MDX  
**URL Pattern**: `/docs/{category}/{filename}`

**Examples**:
- `introduction/overview.mdx` → `/docs/introduction/overview`
- `quickstarts/get-started.mdx` → `/docs/quickstarts/get-started`

**Features**:
- Ordered navigation
- Code blocks
- Categories
- Search integration

### 4. Global Settings

**Location**: `src/content/global/`  
**Format**: JSON  

**Includes**:
- Header navigation
- Footer links
- Social media links
- Site-wide settings

## Managing Pages

### Creating a New Page

1. **Open TinaCMS Admin**
   - Navigate to `/admin`
   - Click "Pages" collection

2. **Create New Page**
   - Click "Create New"
   - Fill in page details:
     - **Title**: Page title (e.g., "About Hubql")
     - **SEO Title**: Meta title for search engines
     - **SEO Description**: Meta description (150-160 characters)
     - **Robots**: Optional robots directives

3. **Add Content Blocks**
   - Click "Add Section"
   - Choose from available blocks:
     - **AboveFold**: Hero section with CTA buttons
     - **Services**: Service cards grid
     - **Testimonials**: Customer testimonials
     - **TrustedBy**: Logo showcase
     - **Content**: Rich text content
     - **SectionCta**: Call-to-action section
     - And many more...

4. **Save Changes**
   - Click "Save"
   - Changes commit to Git
   - Build is triggered automatically

### Editing an Existing Page

1. **Select page** from Pages collection
2. **Edit content**:
   - Update text directly
   - Reorder blocks by dragging
   - Add/remove sections
   - Upload images
3. **Preview changes** in real-time
4. **Save** when ready

### Page Blocks Reference

#### AboveFold
Hero section with title, description, and CTA buttons.

```yaml
title: Your vision brought to life
paragraph: Hubql is a product-focused software studio...
buttonOne:
  label: Book a Call
  link: /contact
buttonTwo:
  label: Our Work
  link: /portfolio
```

#### ServiceCards
Grid of service offerings.

```yaml
title: What We Create for You
serviceCards:
  - title: Collaborative Web Application
    description: From dashboards to multiplayer workspaces...
    link: /services/collaborative-web-application
    icon: MousePointer2
```

#### TrustedBy
Customer logos showcase.

```yaml
title: Trusted by companies around the world
companies:
  - name: RevitPay
    logo: /customers/revitpay.png
    filter: saturate-0 brightness-100
```

#### Services
Detailed service cards with lists.

```yaml
title: Tech Stack We Use
servicesCards:
  - title: Figma
    description: We use Figma for collaborative design...
    list:
      - Collaborative design workflows
      - Interactive prototyping
    icon: PenTool
```

#### Testimonials
Customer testimonials with photos.

```yaml
title: Trusted by Founders and Fast-Moving Teams
testimonials:
  - name: Dan Starns
    company: rconnect.tech
    text: Fantastic work! Hubql Labs delivered...
    image: /testimonial_rconnect.png
```

#### SectionCta
Call-to-action section with buttons.

```yaml
title: Build with us. Reach out today.
paragraph: Ready to start? We'll help you...
buttonOne:
  label: Start your project
  link: /contact
```

## Managing Blog Posts

### Creating a Blog Post

1. **Navigate to Blog Posts** in TinaCMS
2. **Create New Post**
3. **Fill in metadata**:
   - **Title**: Post title
   - **SEO Title**: Optimized for search
   - **SEO Description**: 150-160 characters
   - **Publication Date**: When to publish
   - **Hero Image**: Featured image
   - **Category**: Select from categories

4. **Write content**:
   - Use rich text editor
   - Add headings (H2, H3)
   - Insert images
   - Embed tweets
   - Add code blocks

5. **Save and publish**

### Blog Post Structure

```markdown
---
title: Why Hubql
seoTitle: Why Hubql - Building Better Software Solutions
seoDescription: Learn why we created Hubql and how we're...
pubDate: 2025-01-15T10:00:00.000Z
heroImage: /blog/why-hubql-hero.jpg
category: categories/news.md
---

## Introduction

Your introduction here...

## Main Content

Your main content...

### Subsection

More detailed content...

## Conclusion

Wrap up your post...
```

### Embedding Content

#### Twitter Cards

```markdown
<TwitterCard twitter="1234567890123456789" />
```

#### Images

```markdown
<Image 
  src="/blog/image.png"
  alt="Description"
  caption="Optional caption"
  size={true}
/>
```

#### Call-to-Action

```markdown
<Cta />
```

This renders a predefined CTA section.

## Managing Documentation

### Creating Documentation

1. **Navigate to Docs** collection
2. **Create New Doc**
3. **Fill in metadata**:
   - **Title**: Doc page title
   - **SEO Title**: Search-optimized title
   - **SEO Description**: Brief description
   - **Order**: Numeric order in navigation (0, 1, 2...)
   - **Category**: Select category (Introduction, Quickstarts, etc.)

4. **Write documentation**:
   - Use clear headings
   - Add code examples
   - Include screenshots
   - Link to related docs

### Documentation Structure

```markdown
---
title: Get Started
seoTitle: Getting Started with Hubql
seoDescription: Quick start guide for Hubql API client
order: 0
category: categories/quickstart.md
---

## Prerequisites

What you need before starting...

## Installation

\`\`\`bash
npm install @hubql/client
\`\`\`

## Quick Start

Step-by-step guide...

## Next Steps

- [Send Requests](/docs/request/overview)
- [Configure Environment](/docs/quickstarts/get-started)
```

### Documentation Categories

Categories are defined in `categories/` folder:

- **introduction.md**: Getting started docs
- **quickstart.md**: Quick start guides
- **request.md**: Request documentation
- **response.md**: Response documentation
- **cloud.md**: Cloud platform docs
- **changelog.md**: Version history
- **news.md**: Product updates
- **community.md**: Community resources

### Code Blocks

Use triple backticks with language:

````markdown
```typescript
import { HubqlClient } from '@hubql/client';

const client = new HubqlClient({
  endpoint: 'https://api.example.com',
});
```
````

## Managing Global Settings

### Header Navigation

1. **Navigate to Layout** in TinaCMS
2. **Edit Header** section
3. **Modify navigation**:
   - Add/remove nav items
   - Update links
   - Add dropdown menus
   - Change CTA button

**Example structure**:

```json
{
  "header": {
    "name": "Hubql",
    "nav": [
      {
        "label": "Products",
        "href": "/products",
        "nav": [
          {
            "label": "API Client",
            "href": "/product/api-client",
            "icon": "/icons/api-client.svg"
          }
        ]
      }
    ],
    "ctaLabel": "Contact Us"
  }
}
```

### Footer Configuration

1. **Edit Footer** in Layout
2. **Configure sections**:
   - Main navigation groups
   - Legal links
   - Social media links

**Example**:

```json
{
  "footer": {
    "nav": [
      {
        "label": "Products",
        "href": "#",
        "nav": [
          { "label": "API Client", "href": "/product/api-client" }
        ]
      }
    ],
    "legalNav": [
      { "label": "Privacy Policy", "href": "/privacy-policy" },
      { "label": "Terms", "href": "/terms" }
    ],
    "social": {
      "linkedin": "https://linkedin.com/company/hubql",
      "twitter": "https://twitter.com/hubql",
      "github": "https://github.com/hubql"
    }
  }
}
```

## Working with Media

### Uploading Images

1. **In TinaCMS editor**, click image field
2. **Choose "Upload"**
3. **Select image** from computer
4. **Image is uploaded** to `public/` directory

### Image Guidelines

**File Format**:
- Use WebP for photos (best compression)
- Use PNG for logos/graphics with transparency
- Use SVG for icons (scalable)

**File Size**:
- Compress images before upload
- Target < 200KB for standard images
- Target < 50KB for thumbnails

**Dimensions**:
- Hero images: 1920x1080px
- Blog featured images: 1200x630px
- Service cards: 800x600px
- Logos: 400x400px
- Thumbnails: 300x200px

**File Naming**:
- Use kebab-case: `hubql-hero-image.webp`
- Be descriptive: `supabase-mvp-service.png`
- Avoid spaces and special characters

### Image Organization

```
public/
├── customers/          # Customer logos
├── team/              # Team photos
├── testimonial_*.png  # Testimonial images
├── blog/              # Blog post images
└── services/          # Service images
```

## SEO Best Practices

### Meta Titles

- **Length**: 50-60 characters
- **Format**: `Title | Hubql Labs` or `Title - Hubql`
- **Include keywords**: But keep it natural
- **Be unique**: Each page should have unique title

**Good examples**:
- "Supabase Development Services | Hubql Labs"
- "About Hubql - Intelligent Software Solutions"
- "API Client for GraphQL & REST | Hubql"

**Bad examples**:
- "Home" (too generic)
- "Hubql Labs - The Best Software Development Company in the World for Building..." (too long)

### Meta Descriptions

- **Length**: 150-160 characters
- **Include call-to-action**: "Learn more", "Get started", "Contact us"
- **Highlight value**: What's in it for the user?
- **Include keywords**: Naturally

**Good example**:
```
Hubql specializes in Supabase development, creating collaboration 
platforms and 3D web experiences that help startups move fast—from 
prototype to launch.
```

**Bad example**:
```
We are Hubql. Click here to learn more about our services and what we do.
```

### URL Structure

- **Use kebab-case**: `/supabase-development-services`
- **Keep it short**: Shorter is better
- **Include keywords**: When relevant
- **Avoid dates**: Unless it's a blog post
- **Use folders**: For hierarchy `/services/web-design`

## Content Writing Guidelines

### Tone and Voice

- **Professional but friendly**: We're experts, but approachable
- **Clear and concise**: Avoid jargon when possible
- **Active voice**: "We build" not "Solutions are built"
- **Direct**: Address the reader as "you"

### Structure

1. **Start with the why**: Why should they care?
2. **Explain the what**: What are you offering?
3. **Show the how**: How does it work?
4. **End with CTA**: What should they do next?

### Writing Checklist

- [ ] Clear headline
- [ ] Engaging introduction
- [ ] Logical flow
- [ ] Short paragraphs (2-3 sentences)
- [ ] Bullet points for lists
- [ ] Relevant images
- [ ] Clear call-to-action
- [ ] Proofread for typos
- [ ] SEO optimized
- [ ] Mobile-friendly

### Accessibility

- **Use headings properly**: H1 → H2 → H3
- **Add alt text**: Describe all images
- **Use descriptive links**: "Read our guide" not "Click here"
- **Keep contrast high**: Readable text colors
- **Use semantic HTML**: Lists, buttons, forms

## Content Review Process

Before publishing content:

1. **Self-review**
   - Read through entire content
   - Check for typos and grammar
   - Verify all links work
   - Test on mobile

2. **Peer review** (if applicable)
   - Have teammate review
   - Incorporate feedback
   - Verify technical accuracy

3. **SEO check**
   - Meta title and description set
   - Keywords included naturally
   - URL is optimized
   - Images have alt text

4. **Preview**
   - Check in TinaCMS preview
   - Verify layout looks correct
   - Test all interactions

5. **Publish**
   - Save changes
   - Verify deployment
   - Check live site
   - Share with team

---

For more information, see the [README](./README.md) or [DEVELOPMENT](./DEVELOPMENT.md) guide.
