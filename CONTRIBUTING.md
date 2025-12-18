# Contributing to Hubql Labs Website

Thank you for your interest in contributing to the Hubql Labs website! This document provides guidelines and instructions for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Content Guidelines](#content-guidelines)

## Code of Conduct

As contributors and maintainers of this project, we pledge to:

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on what is best for the project
- Show empathy towards other contributors

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn
- Git
- A code editor (VS Code recommended)

### Initial Setup

1. **Clone the repository**

```bash
git clone https://github.com/hubql/www.git
cd www
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file:

```bash
TINA_TOKEN=your_tina_token_here
```

4. **Start development server**

```bash
npm run dev
```

## Development Workflow

### Creating a Branch

Always create a new branch for your work:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
# or
git checkout -b docs/documentation-update
```

Branch naming conventions:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `style/` - UI/styling changes
- `test/` - Adding or updating tests

### Making Changes

1. Make your changes in your feature branch
2. Test your changes locally
3. Run the linter: `npm run lint`
4. Commit your changes (see [Commit Guidelines](#commit-guidelines))
5. Push to your branch: `git push origin your-branch-name`

### Testing Your Changes

Before submitting a PR, ensure:

1. **The dev server runs without errors**
   ```bash
   npm run dev
   ```

2. **The build completes successfully**
   ```bash
   npm run build
   ```

3. **No linting errors**
   ```bash
   npm run lint
   ```

4. **Test across different browsers** (Chrome, Firefox, Safari)

5. **Test responsive design** (mobile, tablet, desktop)

## Coding Standards

### TypeScript

- Use TypeScript for all new files
- Define proper types and interfaces
- Avoid using `any` type unless absolutely necessary
- Use meaningful variable and function names

```typescript
// Good
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

// Bad
interface Props {
  a: string;
  b: any;
}
```

### React Components

- Use functional components with hooks
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks
- Use proper prop types

```tsx
// Good
export const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  return (
    <button onClick={onClick} className={`btn-${variant}`}>
      {label}
    </button>
  );
};

// Bad
export default function Btn(props: any) {
  // ...
}
```

### Styling

- Use Tailwind CSS utility classes
- Follow the existing design system
- Avoid inline styles unless necessary
- Use CSS variables for theming

```tsx
// Good
<div className="flex items-center justify-between p-4 bg-card border border-border rounded-lg">

// Bad
<div style={{ display: 'flex', padding: '16px', background: '#171717' }}>
```

### File Organization

- Group related files together
- Use index files for cleaner imports
- Keep file names consistent with component names
- Use kebab-case for file names

```
components/
├── blocks/
│   ├── Hero.tsx
│   ├── Services.tsx
│   └── index.ts
```

## Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semi-colons, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
# Feature
feat(homepage): add new testimonials section

# Bug fix
fix(navigation): resolve mobile menu not closing on route change

# Documentation
docs(readme): update installation instructions

# Styling
style(button): update hover effects and transitions

# Refactor
refactor(api): simplify contact form handler logic
```

### Best Practices

- Keep commits atomic (one logical change per commit)
- Write clear, descriptive commit messages
- Reference Linear issues when applicable: `feat(blog): add new post layout (HUBQL-123)`
- Keep the first line under 72 characters
- Use the imperative mood ("add feature" not "added feature")

## Pull Request Process

### Before Creating a PR

1. Ensure your branch is up to date with `main`:
   ```bash
   git checkout main
   git pull origin main
   git checkout your-branch
   git rebase main
   ```

2. Run all checks:
   ```bash
   npm run lint
   npm run build
   ```

3. Review your own changes

### Creating a PR

1. **Push your branch** to the repository:
   ```bash
   git push origin your-branch-name
   ```

2. **Open a Pull Request** on GitHub

3. **Fill out the PR template** with:
   - Clear description of changes
   - Screenshots/videos for UI changes
   - Reference to related Linear issues
   - Testing steps
   - Any breaking changes

### PR Title Format

Use the same format as commits:

```
feat(homepage): add new hero section
fix(blog): resolve image loading issue
docs(contributing): update PR guidelines
```

### PR Description Template

```markdown
## Description
Brief description of what this PR does.

## Related Issues
- Closes HUBQL-XXX
- Related to HUBQL-YYY

## Changes Made
- List of key changes
- Another change
- One more change

## Screenshots
(If applicable)

## Testing
How to test these changes:
1. Step 1
2. Step 2
3. Expected result

## Checklist
- [ ] Code follows project style guidelines
- [ ] Tested locally
- [ ] No console errors
- [ ] Responsive design tested
- [ ] Documentation updated
```

### PR Review Process

1. **Automated Checks**: CI/CD will run automatically
2. **Code Review**: At least one team member must review
3. **Address Feedback**: Make requested changes
4. **Approval**: PR must be approved before merging
5. **Merge**: Squash and merge to keep history clean

## Content Guidelines

### Writing Content

- Use clear, concise language
- Write in active voice
- Keep paragraphs short (2-3 sentences)
- Use headings to organize content
- Include relevant images with alt text

### MDX Files

- Follow frontmatter schema for each content type
- Use proper Markdown formatting
- Test embedded components locally
- Optimize images before adding

### Images

- Use WebP format when possible
- Optimize images (compress before upload)
- Store in `/public/` directory
- Use descriptive file names
- Always include alt text

### Accessibility

- Use semantic HTML
- Include ARIA labels where needed
- Ensure sufficient color contrast
- Test with keyboard navigation
- Add alt text to all images

## Questions?

If you have questions about contributing:

1. Check existing documentation
2. Search closed PRs and issues
3. Ask in the team chat
4. Reach out to a maintainer

## License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing to Hubql Labs! 🚀
