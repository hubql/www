# Quick Start Guide

Get up and running with the Hubql Labs website in 5 minutes.

## Prerequisites

- Node.js 20+ installed
- Git installed
- Text editor (VS Code recommended)

## Setup (< 5 minutes)

### 1. Clone & Install

```bash
# Clone the repository
git clone https://github.com/hubql/www.git
cd www

# Install dependencies
npm install
```

### 2. Configure Environment

```bash
# Create .env.local file
echo "TINA_TOKEN=your_token_here" > .env.local
```

> **Get your TINA_TOKEN**: Ask a team member or check the team password manager

### 3. Start Development

```bash
npm run dev
```

Visit: http://localhost:3000

## Common Commands

### Development

```bash
npm run dev          # Start dev server (localhost:3000)
npm run build        # Build for production
npm run lint         # Run ESLint
npm start            # Start production server (after build)
```

### TinaCMS

```bash
# Access admin panel (while dev server is running)
open http://localhost:3000/admin
```

## Quick Tasks

### Create a New Page

1. Open http://localhost:3000/admin
2. Click "Pages" → "Create New"
3. Fill in title and SEO info
4. Add content blocks
5. Save (auto-commits to Git)

### Edit Existing Content

1. Open http://localhost:3000/admin
2. Select collection (Pages/Posts/Docs)
3. Choose item to edit
4. Make changes
5. Save

### Add a New Blog Post

1. Go to http://localhost:3000/admin
2. Click "Blog Posts" → "Create New"
3. Fill in metadata:
   - Title
   - SEO Title/Description
   - Publication Date
   - Hero Image
   - Category
4. Write content
5. Save

### Update Navigation

1. Go to http://localhost:3000/admin
2. Click "Layout" (sidebar)
3. Edit "Header" or "Footer"
4. Update links
5. Save

## Project Structure (Simplified)

```
www/
├── src/
│   ├── components/     # React components
│   ├── content/        # Content files (MDX/JSON)
│   └── pages/          # Next.js pages
├── public/             # Static files (images, etc.)
├── tina/               # TinaCMS config
└── Documentation files
```

## Key Concepts

### Pages vs Posts vs Docs

| Type | Location | URL Pattern | Use For |
|------|----------|-------------|---------|
| Pages | `src/content/pages/` | `/{filename}` | Marketing pages |
| Posts | `src/content/posts/` | `/blog/{filename}` | Blog articles |
| Docs | `src/content/docs/` | `/docs/{category}/{filename}` | Documentation |

### Content Flow

```
Edit in TinaCMS → Save (commits to Git) → Deploy → Live
```

## Troubleshooting

### Dev server won't start

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run dev
```

### TinaCMS admin not loading

```bash
# Check environment variable
cat .env.local  # Should show TINA_TOKEN

# Restart server
# Kill process (Ctrl+C)
npm run dev
```

### Build fails

```bash
# Check for TypeScript errors
npm run build

# Check for linting errors
npm run lint

# Fix lint errors automatically
npm run lint -- --fix
```

### Images not showing

1. Check file is in `public/` directory
2. Reference without `/public` prefix
3. Example: `/images/hero.png` (not `/public/images/hero.png`)

## Helpful Resources

- **Main README**: [README.md](./README.md)
- **Full Dev Guide**: [DEVELOPMENT.md](./DEVELOPMENT.md)
- **Content Guide**: [CONTENT-GUIDE.md](./CONTENT-GUIDE.md)
- **Architecture**: [ARCHITECTURE.md](./ARCHITECTURE.md)

## Git Workflow

### Create a feature branch

```bash
git checkout -b feature/your-feature-name
```

### Make changes and commit

```bash
git add .
git commit -m "feat: add new feature"
```

### Push and create PR

```bash
git push origin feature/your-feature-name
# Then create PR on GitHub
```

## Common Patterns

### Add a new component

```typescript
// src/components/MyComponent.tsx
interface MyComponentProps {
  title: string;
}

export const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-4xl font-bold">{title}</h2>
    </div>
  );
};
```

### Add a new TinaCMS block

```typescript
// src/components/blocks/MyBlock.tsx
export const MyBlock: React.FC<MyBlockProps> = (props) => {
  return <section>{/* Block content */}</section>;
};

export const myBlockSchema = {
  name: 'MyBlock',
  label: 'My Block',
  fields: [
    { type: 'string', name: 'title', label: 'Title' },
  ],
};

// Register in tina/config.ts
```

### Add an API route

```typescript
// src/pages/api/myroute.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Handle request
  res.status(200).json({ success: true });
}
```

## VS Code Snippets

Add these to your VS Code settings for faster development:

### React Component

Type: `rfc` + Tab

```typescript
import React from 'react';

interface Props {
  
}

export const ComponentName: React.FC<Props> = () => {
  return (
    <div>
      
    </div>
  );
};
```

### TinaCMS Block

Type: `tcms` + Tab

```typescript
export const blockSchema = {
  name: 'BlockName',
  label: 'Block Label',
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
    },
  ],
};
```

## Testing Checklist

Before submitting a PR:

- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds
- [ ] Tested on Chrome
- [ ] Tested on mobile
- [ ] No console errors
- [ ] Images load correctly
- [ ] Links work

## Deploy to Production

Production deploys automatically when you merge to `main`:

```bash
# Merge your PR on GitHub
# Vercel automatically builds and deploys
# Check status at vercel.com
```

## Getting Help

1. Check documentation files (README, DEVELOPMENT, etc.)
2. Search closed issues on GitHub
3. Ask in team chat
4. Contact maintainers

## Useful Links

- **Local Dev**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin
- **Production**: https://www.hubql.com
- **Vercel Dashboard**: https://vercel.com/hubql
- **GitHub Repo**: https://github.com/hubql/www

---

**Ready to code? Run `npm run dev` and start building! 🚀**
