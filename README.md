# Hubql Labs Website

This repository contains the source code for [www.hubql.com](https://www.hubql.com) - the official website for Hubql Labs, a product-focused software studio building modern web applications, APIs, and intelligent automation systems.

> 📚 **New here?** Check out the **[Documentation Index](./DOCS-INDEX.md)** to find all available guides and resources.
>
> ⚡ **Want to get started quickly?** See the **[Quick Start Guide](./QUICK-START.md)** (5 minutes)

## 🚀 About Hubql Labs

Hubql Labs specializes in:
- **Collaborative Web Applications**: Real-time collaboration platforms, dashboards, and custom workflows
- **Visual & 3D Web Apps**: Immersive product interfaces with WebGL and 3D capabilities
- **APIs & Documentation**: Fast, well-documented APIs and internal platforms
- **Intelligent Automation Systems**: Process automation and productivity enhancement
- **Supabase MVPs**: Rapid prototyping and development using Supabase
- **Web Design**: User-centered digital experiences

## 🛠 Tech Stack

This website is built with modern web technologies:

- **Framework**: [Next.js 16](https://nextjs.org/) (Pages Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **CMS**: [TinaCMS](https://tina.io/) for content management
- **UI Components**: 
  - [Radix UI](https://www.radix-ui.com/) primitives
  - [Framer Motion](https://www.framer.com/motion/) for animations
  - [Lucide React](https://lucide.dev/) for icons
- **3D/Animations**:
  - [Spline](https://spline.design/) for 3D scenes
  - [Lottie](https://lottiefiles.com/) for animations
  - [tsParticles](https://particles.js.org/) for particle effects
- **Code Quality**: ESLint, Prettier, Husky
- **Deployment**: Vercel

## 📋 Prerequisites

Before you begin, ensure you have installed:

- **Node.js** 20.x or higher
- **npm** or **yarn** package manager
- **Git** for version control

## 🏁 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/hubql/www.git
cd www
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```bash
# TinaCMS Token (required for CMS functionality)
TINA_TOKEN=your_tina_token_here

# Other environment variables as needed
```

### 4. Run the development server

```bash
npm run dev
```

The website will be available at [http://localhost:3000](http://localhost:3000).

### 5. Access TinaCMS Admin

To manage content, navigate to [http://localhost:3000/admin](http://localhost:3000/admin) after starting the dev server.

## 📁 Project Structure

```
/workspace
├── src/
│   ├── components/          # React components
│   │   ├── animation/       # Animation components
│   │   ├── blocks/          # Page block components (used by TinaCMS)
│   │   ├── homepage/        # Homepage-specific components
│   │   ├── kit/             # UI kit components
│   │   ├── layout/          # Layout components (Header, Footer)
│   │   ├── pricing/         # Pricing page components
│   │   ├── product/         # Product page components
│   │   ├── templates/       # Page templates
│   │   └── util/            # Utility components
│   ├── content/             # Content files (managed by TinaCMS)
│   │   ├── docs/            # Documentation MDX files
│   │   ├── global/          # Global settings (header, footer)
│   │   ├── pages/           # Page content MDX files
│   │   └── posts/           # Blog post MDX files
│   └── pages/               # Next.js pages
│       ├── api/             # API routes
│       ├── blog/            # Blog pages
│       ├── docs/            # Documentation pages
│       └── product/         # Product pages
├── public/                  # Static assets
├── categories/              # TinaCMS category definitions
├── tina/                    # TinaCMS configuration
│   └── config.ts            # TinaCMS schema and collections
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## 📝 Content Management

This website uses [TinaCMS](https://tina.io/) as a Git-backed headless CMS.

### Content Types

1. **Pages** (`src/content/pages/`)
   - Homepage, About, Services, Solutions, etc.
   - Block-based content with visual editing
   - MDX format with frontmatter

2. **Blog Posts** (`src/content/posts/`)
   - Blog articles and updates
   - Rich text content with embedded components
   - Categorized and dated

3. **Documentation** (`src/content/docs/`)
   - Product documentation
   - API guides and quickstarts
   - Organized by categories

4. **Global Settings** (`src/content/global/`)
   - Header navigation
   - Footer links
   - Site-wide configuration

### Adding New Content

1. Start the dev server with `npm run dev`
2. Navigate to `/admin`
3. Select a collection (Pages, Blog Posts, Docs)
4. Click "Create New" or edit existing content
5. Changes are saved to Git automatically

### Creating Custom Blocks

Block components are defined in `src/components/blocks/` and registered in `tina/config.ts`. Each block includes:
- React component for rendering
- TinaCMS schema for editing
- TypeScript types

Example block structure:

```typescript
// src/components/blocks/MyBlock.tsx
export const myBlockSchema = {
  name: 'MyBlock',
  label: 'My Custom Block',
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title'
    }
  ]
}
```

## 🎨 Styling

The project uses **Tailwind CSS** with custom configurations:

- **Custom Colors**: Defined in `tailwind.config.ts`
  - Accent colors (green shades)
  - Dark mode optimized palette
  - Custom border and card colors

- **Custom Fonts**:
  - Noto Sans (primary)
  - Orbitron (headings)
  - Lexend (secondary)

- **Animations**: Custom keyframes for spotlight effects and aurora backgrounds

- **Plugins**:
  - `@tailwindcss/typography` for prose content
  - `tailwindcss-animate` for animation utilities
  - Custom grid and dot patterns

## 🚢 Building for Production

### Build the project

```bash
npm run build
```

This command:
1. Builds TinaCMS schema
2. Compiles Next.js application
3. Optimizes assets and images
4. Generates static pages

### Preview production build

```bash
npm start
```

## 🔄 Development Workflow

### Scripts

- `npm run dev` - Start development server with TinaCMS
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run prepare` - Set up Husky git hooks

### Git Hooks

This project uses Husky and lint-staged for:
- Pre-commit formatting with Prettier
- ESLint checks on JavaScript files
- Automated code quality checks

### Code Quality

- **ESLint**: Configured with Next.js and Prettier rules
- **Prettier**: Automatic code formatting
- **TypeScript**: Strict type checking enabled

## 🌐 Deployment

The website is deployed on **Vercel** with automatic deployments from the `main` branch.

### Environment Variables (Production)

Ensure these are set in your Vercel project:

- `TINA_TOKEN` - TinaCMS authentication token
- `HEAD` or `VERCEL_GIT_COMMIT_REF` - Git branch (auto-set by Vercel)

### Redirects

The `next.config.js` includes extensive redirect rules for:
- Legacy URL migrations
- Product redirects to schemavisualizer.dev
- SEO-friendly URL structures

## 🔗 Important URLs

- **Website**: [www.hubql.com](https://www.hubql.com)
- **Blog**: [www.hubql.com/blog](https://www.hubql.com/blog)
- **Documentation**: [www.hubql.com/docs](https://www.hubql.com/docs)
- **Contact**: [www.hubql.com/contact](https://www.hubql.com/contact)

## 📦 Key Dependencies

### Core
- `next@^16.0.1` - React framework
- `react@^18` - UI library
- `typescript@^5.2.2` - Type safety

### Content & CMS
- `tinacms@^2.7.2` - Content management
- `@tinacms/cli@^2.0.0` - TinaCMS CLI

### UI & Styling
- `tailwindcss@^3` - Utility-first CSS
- `framer-motion@^11.2.11` - Animation library
- `@radix-ui/*` - Headless UI components
- `lucide-react@^0.334.0` - Icon library

### 3D & Animations
- `@splinetool/react-spline@^4.1.0` - 3D scenes
- `@lottiefiles/dotlottie-react@^0.9.1` - Lottie animations
- `@tsparticles/react@^3.0.0` - Particle effects

### Other
- `posthog-js@^1.120.4` - Analytics
- `react-tweet@^3.1.1` - Twitter embeds
- `sharp@^0.33.4` - Image optimization

## 🤝 Contributing

This is a private repository for Hubql Labs. For internal contributors:

1. Create a feature branch from `main`
2. Make your changes
3. Run `npm run lint` to check for issues
4. Submit a pull request for review
5. Wait for CI checks to pass
6. Merge after approval

### Commit Guidelines

- Use clear, descriptive commit messages
- Reference Linear issues when applicable
- Follow conventional commits format

## 📄 License

This project is proprietary and confidential. All rights reserved by Hubql Labs.

## 🐛 Troubleshooting

### Common Issues

**Issue**: TinaCMS admin not loading
- **Solution**: Ensure `TINA_TOKEN` is set in `.env.local` and restart the dev server

**Issue**: Image optimization errors
- **Solution**: Check that `sharp` is properly installed: `npm install sharp --force`

**Issue**: Build fails with TypeScript errors
- **Solution**: Run `npm run build` locally to see detailed error messages

**Issue**: Styles not applying
- **Solution**: Clear `.next` folder and restart: `rm -rf .next && npm run dev`

## 📞 Support

For questions or issues:
- Internal: Contact the development team
- External: Visit [www.hubql.com/contact](https://www.hubql.com/contact)

---

**Built with ❤️ by Hubql Labs**