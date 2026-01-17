# Changelog

All notable changes to the Hubql Labs website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Comprehensive documentation suite including:
  - Main README with project overview
  - CONTRIBUTING.md for contribution guidelines
  - DEVELOPMENT.md for development workflow
  - DEPLOYMENT.md for deployment procedures
  - CONTENT-GUIDE.md for content management
  - CHANGELOG.md for version tracking

## [0.0.1] - 2025-12-18

### Current Features

#### Website Structure
- Modern Next.js 16 website with Pages Router
- TypeScript for type safety
- Tailwind CSS for styling
- TinaCMS for content management

#### Pages
- Homepage with hero section, services, tech stack, testimonials
- About page with team information
- Services pages (Collaborative Web Apps, 3D Web Apps, APIs, etc.)
- Product pages (API Client, Schema Visualizer, CLI, etc.)
- Blog with multiple published posts
- Documentation section with quickstarts and guides
- Contact page with form
- Portfolio showcase

#### Features
- Responsive design (mobile, tablet, desktop)
- Dark mode support
- SEO optimized with meta tags
- Open Graph images
- Dynamic sitemap generation
- Contact form with validation
- Blog with categories and rich content
- Documentation with code syntax highlighting
- 3D animations with Spline
- Particle effects
- Framer Motion animations
- Social media embeds (Twitter)

#### Tech Stack
- Next.js 16
- React 18
- TypeScript 5.2
- Tailwind CSS 3
- TinaCMS 2.7
- Framer Motion 11
- Radix UI components
- Lucide React icons
- Sharp for image optimization
- PostHog for analytics

#### Content Management
- Git-backed CMS with TinaCMS
- Visual editing interface
- Block-based page composition
- MDX support for rich content
- Media management
- Global settings (header, footer)

#### Developer Experience
- ESLint for code quality
- Prettier for code formatting
- Husky for git hooks
- lint-staged for pre-commit checks
- TypeScript strict mode
- Hot reload in development

#### Deployment
- Vercel deployment ready
- Environment variable configuration
- Automatic deployments from Git
- Preview deployments for PRs
- CDN optimization
- Image optimization
- Code splitting

#### SEO & Performance
- Optimized meta tags
- Structured data
- Sitemap generation
- Image lazy loading
- Code splitting
- CSS optimization
- Font optimization

### Known Issues
- None currently tracked

### Deprecated
- Multiple legacy routes redirected to new Schema Visualizer site

## Version History

### How to Read This Changelog

- **Added**: New features
- **Changed**: Changes to existing functionality
- **Deprecated**: Features that will be removed
- **Removed**: Removed features
- **Fixed**: Bug fixes
- **Security**: Security improvements

### Release Notes Format

Each release includes:
1. **Version number** following semantic versioning
2. **Release date** in ISO format (YYYY-MM-DD)
3. **Category** of changes (Added, Changed, Fixed, etc.)
4. **Description** of each change

## Contributing to This Changelog

When making changes:

1. Add your changes to the `[Unreleased]` section
2. Use appropriate category (Added, Changed, Fixed, etc.)
3. Write clear, concise descriptions
4. Link to related Linear issues when applicable
5. When releasing, move unreleased changes to a new version section

### Example Entry

```markdown
## [1.0.0] - 2025-01-15

### Added
- New feature for API testing (HUBQL-123)
- Dark mode toggle in header
- Blog post pagination

### Changed
- Updated homepage hero section design
- Improved mobile navigation UX

### Fixed
- Contact form validation error (HUBQL-456)
- Blog post image loading issue

### Security
- Updated dependencies with security patches
```

## Links

- [Homepage](https://www.hubql.com)
- [GitHub Repository](https://github.com/hubql/www)
- [Documentation](https://www.hubql.com/docs)
- [Blog](https://www.hubql.com/blog)

---

For more information about contributing, see [CONTRIBUTING.md](./CONTRIBUTING.md).
