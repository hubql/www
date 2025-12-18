# Development Guide

This guide provides detailed information for developers working on the Hubql Labs website.

## Table of Contents

- [Development Environment Setup](#development-environment-setup)
- [Project Architecture](#project-architecture)
- [Working with Next.js](#working-with-nextjs)
- [Working with TinaCMS](#working-with-tinacms)
- [Styling Guide](#styling-guide)
- [Component Development](#component-development)
- [API Routes](#api-routes)
- [Performance Optimization](#performance-optimization)
- [Debugging](#debugging)
- [Testing](#testing)

## Development Environment Setup

### Recommended Tools

- **Code Editor**: VS Code
- **VS Code Extensions**:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - TypeScript Error Translator
  - Error Lens
  - Auto Rename Tag

### Editor Configuration

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cn\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

### Environment Variables

Create `.env.local` with required variables:

```bash
# TinaCMS
TINA_TOKEN=your_tina_token_here

# Optional: Analytics
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

# Optional: Turnstile (Cloudflare)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_key
```

## Project Architecture

### Pages Router Structure

This project uses Next.js Pages Router (not App Router):

```
src/pages/
├── _app.tsx           # App wrapper, providers, global styles
├── _document.tsx      # Custom HTML document
├── index.tsx          # Homepage
├── [...filename].tsx  # Catch-all for TinaCMS pages
├── api/               # API routes
│   ├── contact.ts     # Contact form handler
│   ├── og.tsx         # Open Graph image generation
│   └── sitemap.ts     # Dynamic sitemap
├── blog/              # Blog routes
│   ├── index.tsx      # Blog listing
│   └── [filename].tsx # Individual blog post
├── docs/              # Documentation routes
│   ├── index.tsx      # Docs home
│   └── [...filename].tsx # Docs pages
└── product/           # Product pages
    ├── api-client.tsx
    └── ...
```

### Content Management Flow

```
┌─────────────────┐
│   TinaCMS CLI   │
│  (tina/config)  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐     ┌──────────────┐
│  MDX Content    │────▶│  Next.js     │
│  (src/content)  │     │  Build       │
└─────────────────┘     └──────┬───────┘
                               │
                               ▼
                        ┌──────────────┐
                        │  Static HTML │
                        │  + JSON      │
                        └──────────────┘
```

### Component Hierarchy

```
Layout
├── Header
│   ├── Navigation
│   └── ThemeSwitch
├── Page Content
│   ├── Blocks (from TinaCMS)
│   │   ├── Hero
│   │   ├── Services
│   │   └── ...
│   └── Custom Components
└── Footer
    └── Legal Links
```

## Working with Next.js

### Creating New Pages

#### Static Pages

```tsx
// src/pages/example.tsx
import { Layout } from '@/src/components/layout/Layout';
import type { GetStaticProps } from 'next';

interface ExamplePageProps {
  data: any;
}

export default function ExamplePage({ data }: ExamplePageProps) {
  return (
    <Layout
      title="Example Page"
      description="Page description"
    >
      <div className="container mx-auto">
        <h1>Example Page</h1>
        {/* Page content */}
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // Fetch data at build time
  const data = await fetchData();
  
  return {
    props: {
      data,
    },
  };
};
```

#### Dynamic Pages

```tsx
// src/pages/blog/[slug].tsx
import type { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  
  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params?.slug as string);
  
  return {
    props: {
      post,
    },
  };
};
```

### Data Fetching Strategies

1. **Static Generation (SSG)** - Default, use for most pages
   ```tsx
   export const getStaticProps: GetStaticProps = async () => { ... }
   ```

2. **Server-Side Rendering (SSR)** - Use sparingly
   ```tsx
   export const getServerSideProps: GetServerSideProps = async () => { ... }
   ```

3. **Client-Side Fetching** - Use for dynamic user-specific data
   ```tsx
   useEffect(() => {
     fetch('/api/data').then(...)
   }, []);
   ```

### Image Optimization

Use Next.js Image component:

```tsx
import Image from 'next/image';

<Image
  src="/images/hero.png"
  alt="Hero image"
  width={1200}
  height={600}
  priority // for above-the-fold images
  placeholder="blur" // optional blur placeholder
/>
```

## Working with TinaCMS

### Understanding TinaCMS Collections

Collections are defined in `tina/config.ts`:

- **Pages**: Marketing and landing pages
- **Blog Posts**: Blog articles
- **Documentation**: API docs and guides
- **Global**: Site-wide settings

### Creating a New Block Component

1. **Create the component**:

```tsx
// src/components/blocks/MyNewBlock.tsx
import React from 'react';

export interface MyNewBlockProps {
  title: string;
  description: string;
}

export const MyNewBlock: React.FC<MyNewBlockProps> = ({ title, description }) => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="mt-4 text-lg">{description}</p>
      </div>
    </section>
  );
};

// TinaCMS Schema
export const myNewBlockSchema = {
  name: 'MyNewBlock',
  label: 'My New Block',
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      required: true,
    },
    {
      type: 'string',
      name: 'description',
      label: 'Description',
      ui: {
        component: 'textarea',
      },
    },
  ],
};
```

2. **Register in TinaCMS config**:

```typescript
// tina/config.ts
import { myNewBlockSchema } from '../src/components/blocks/MyNewBlock';

export default defineConfig({
  // ...
  schema: {
    collections: [
      {
        name: 'pages',
        fields: [
          {
            type: 'object',
            list: true,
            name: 'blocks',
            templates: [
              // ... existing blocks
              myNewBlockSchema,
            ],
          },
        ],
      },
    ],
  },
});
```

3. **Add to Blocks renderer**:

```tsx
// src/components/util/Blocks.tsx
import { MyNewBlock } from '../blocks/MyNewBlock';

export const Blocks = ({ blocks }) => {
  return (
    <>
      {blocks?.map((block, i) => {
        switch (block.__typename) {
          // ... existing cases
          case 'PagesBlocksMyNewBlock':
            return <MyNewBlock key={i} {...block} />;
          default:
            return null;
        }
      })}
    </>
  );
};
```

### Content Editing Workflow

1. **Start dev server**: `npm run dev`
2. **Navigate to**: `http://localhost:3000/admin`
3. **Select collection**: Pages, Posts, or Docs
4. **Edit content**: Use visual editor
5. **Save**: Commits to Git automatically

## Styling Guide

### Tailwind CSS Best Practices

1. **Use utility classes**:
   ```tsx
   <div className="flex items-center justify-between p-4 bg-card rounded-lg">
   ```

2. **Use custom color variables**:
   ```tsx
   <div className="bg-background text-primary border-border">
   ```

3. **Responsive design**:
   ```tsx
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
   ```

4. **Dark mode** (already configured):
   ```tsx
   <div className="bg-white dark:bg-gray-900">
   ```

### Custom Styles

For complex styles, use `cn` utility:

```tsx
import { cn } from '@/src/components/util/cn';

<div className={cn(
  "base-classes",
  isActive && "active-classes",
  variant === 'primary' && "primary-classes"
)}>
```

### Animation Classes

Available custom animations:

```tsx
// Spotlight effect
<div className="animate-spotlight">

// Aurora background
<div className="animate-aurora">

// Accordion
<div className="animate-accordion-down">
```

## Component Development

### Component Structure

```tsx
import React from 'react';
import { cn } from '@/src/components/util/cn';

export interface ComponentProps {
  title: string;
  className?: string;
  children?: React.ReactNode;
}

export const Component: React.FC<ComponentProps> = ({
  title,
  className,
  children,
}) => {
  return (
    <div className={cn("base-classes", className)}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};
```

### Using Framer Motion

```tsx
import { motion } from 'framer-motion';

export const AnimatedComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Content
    </motion.div>
  );
};
```

### Using Radix UI

```tsx
import * as Dialog from '@radix-ui/react-dialog';

export const Modal = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>Open</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Title>Title</Dialog.Title>
          {/* Content */}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
```

## API Routes

### Creating API Routes

```typescript
// src/pages/api/example.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { data } = req.body;
    
    // Process data
    const result = await processData(data);
    
    return res.status(200).json({ success: true, result });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
```

### Contact Form Example

```typescript
// src/pages/api/contact.ts
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Send email or save to database
  // ...

  return res.status(200).json({ message: 'Message sent successfully' });
}
```

## Performance Optimization

### Code Splitting

Use dynamic imports for heavy components:

```tsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(
  () => import('../components/HeavyComponent'),
  { ssr: false, loading: () => <div>Loading...</div> }
);
```

### Image Optimization

- Use WebP format
- Specify width and height
- Use `priority` for above-the-fold images
- Lazy load images below the fold

### Bundle Analysis

```bash
npm install @next/bundle-analyzer
```

Update `next.config.js`:

```javascript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
```

Run analysis:

```bash
ANALYZE=true npm run build
```

## Debugging

### Development Tools

1. **React DevTools**: Install browser extension
2. **Next.js DevTools**: Built into dev mode
3. **VS Code Debugger**: Configure launch.json

### Common Issues

**Issue**: Hydration errors
```
Solution: Ensure server and client render the same HTML
- Check for browser-only APIs (window, document)
- Use useEffect for client-only code
```

**Issue**: Slow build times
```
Solution: 
- Clear .next folder: rm -rf .next
- Check for large dependencies
- Use dynamic imports
```

**Issue**: CSS not applying
```
Solution:
- Clear browser cache
- Check Tailwind config
- Verify classes are in content paths
```

## Testing

### Manual Testing Checklist

- [ ] Homepage loads correctly
- [ ] Navigation works on all pages
- [ ] Contact form submits successfully
- [ ] Blog posts display properly
- [ ] Documentation is accessible
- [ ] Dark mode toggle works
- [ ] Mobile responsive design
- [ ] Cross-browser compatibility
- [ ] SEO meta tags present
- [ ] Images load and are optimized
- [ ] No console errors

### Browser Testing

Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

### Accessibility Testing

- Keyboard navigation
- Screen reader compatibility
- Color contrast
- ARIA labels
- Semantic HTML

---

For more information, see the [README](./README.md) or [CONTRIBUTING](./CONTRIBUTING.md) guide.
