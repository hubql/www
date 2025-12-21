# Deployment Guide

This guide covers deployment strategies and configurations for the Hubql Labs website.

## Table of Contents

- [Deployment Platforms](#deployment-platforms)
- [Vercel Deployment](#vercel-deployment)
- [Environment Variables](#environment-variables)
- [Build Configuration](#build-configuration)
- [Custom Domain Setup](#custom-domain-setup)
- [CI/CD Pipeline](#cicd-pipeline)
- [Monitoring and Analytics](#monitoring-and-analytics)
- [Troubleshooting](#troubleshooting)

## Deployment Platforms

The Hubql Labs website is optimized for deployment on **Vercel**, the creators of Next.js. However, it can also be deployed on other platforms that support Next.js.

### Recommended Platform: Vercel

**Advantages**:
- Native Next.js support
- Automatic deployments from Git
- Edge network (global CDN)
- Automatic HTTPS
- Preview deployments for PRs
- Environment variable management
- Analytics and monitoring

### Alternative Platforms

1. **Netlify**
   - Good Next.js support
   - Similar features to Vercel
   - May require additional configuration

2. **AWS Amplify**
   - Enterprise-grade infrastructure
   - More complex setup
   - Good for AWS ecosystem

3. **Custom Server**
   - Full control
   - Requires manual setup
   - More maintenance overhead

## Vercel Deployment

### Initial Setup

1. **Connect Repository**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import `hubql/www` repository

2. **Configure Project**
   ```
   Framework Preset: Next.js
   Root Directory: ./
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```

3. **Set Environment Variables** (see [Environment Variables](#environment-variables))

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Visit deployment URL

### Automatic Deployments

Vercel automatically deploys:

- **Production**: Commits to `main` branch → `www.hubql.com`
- **Preview**: PRs → `pr-123.hubql.vercel.app`
- **Development**: Commits to other branches → `branch-name.hubql.vercel.app`

### Deployment Workflow

```
┌──────────────┐
│   Git Push   │
│   to main    │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Vercel     │
│   Detects    │
│   Change     │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Build      │
│   Process    │
│   Starts     │
└──────┬───────┘
       │
       ▼
┌──────────────┐     ┌──────────────┐
│   TinaCMS    │────▶│   Next.js    │
│   Build      │     │   Build      │
└──────────────┘     └──────┬───────┘
                            │
                            ▼
                     ┌──────────────┐
                     │   Deploy to  │
                     │   Edge       │
                     └──────┬───────┘
                            │
                            ▼
                     ┌──────────────┐
                     │   Live on    │
                     │   Production │
                     └──────────────┘
```

## Environment Variables

### Production Variables

Set these in Vercel Dashboard → Project Settings → Environment Variables:

#### Required

```bash
# TinaCMS Authentication
TINA_TOKEN=your_production_tina_token_here
```

#### Optional

```bash
# Analytics
NEXT_PUBLIC_POSTHOG_KEY=phc_xxxxxxxxxxxx
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

# Cloudflare Turnstile (Bot Protection)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAAAAAAA...

# Contact Form
CONTACT_WEBHOOK_URL=https://hooks.slack.com/...
# or
SENDGRID_API_KEY=SG.xxxxxxxxxxxx
CONTACT_EMAIL=hello@hubql.com
```

#### Auto-Set by Vercel

These are automatically available:

```bash
VERCEL=1
VERCEL_ENV=production|preview|development
VERCEL_URL=deployment-url.vercel.app
VERCEL_GIT_COMMIT_REF=main
VERCEL_GIT_COMMIT_SHA=abc123...
```

### Environment-Specific Variables

Set different values for different environments:

1. **Production**: Used for `main` branch
2. **Preview**: Used for PR deployments
3. **Development**: Used for development branches

Example in Vercel:

```
Variable: NEXT_PUBLIC_API_URL
Production: https://api.hubql.com
Preview: https://api-staging.hubql.com
Development: http://localhost:3001
```

### Local Development

Create `.env.local` (never commit this file):

```bash
TINA_TOKEN=your_local_tina_token
NEXT_PUBLIC_POSTHOG_KEY=your_local_key
```

## Build Configuration

### Next.js Build Settings

The build process is configured in `next.config.js`:

```javascript
module.exports = {
  // Optimize for production
  reactStrictMode: true,
  swcMinify: true,
  
  // Image optimization
  images: {
    domains: ['www.hubql.com', 'assets.tina.io'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Redirects (extensive list for SEO)
  redirects: async () => [...],
  
  // Rewrites for special routes
  rewrites: async () => [...],
};
```

### Build Command Customization

Default build command:

```bash
npm run build
```

This runs:
1. `npx tinacms build` - Compiles TinaCMS
2. `next build` - Builds Next.js application

### Build Output

The build generates:

```
.next/
├── cache/              # Build cache
├── server/             # Server-side code
├── static/             # Static assets
│   ├── chunks/         # JavaScript chunks
│   ├── css/            # CSS files
│   ├── media/          # Optimized images
│   └── webpack/        # Webpack runtime
└── standalone/         # Standalone server (if enabled)
```

### Build Optimizations

1. **Image Optimization**
   - Automatic WebP/AVIF conversion
   - Responsive image sizes
   - Lazy loading

2. **Code Splitting**
   - Automatic route-based splitting
   - Dynamic imports for large components
   - Optimized vendor chunks

3. **CSS Optimization**
   - PurgeCSS removes unused Tailwind classes
   - Critical CSS inlined
   - CSS minification

4. **JavaScript Optimization**
   - SWC minification (faster than Terser)
   - Tree shaking
   - Dead code elimination

## Custom Domain Setup

### Adding Custom Domain to Vercel

1. **Go to Project Settings**
   - Navigate to Domains
   - Click "Add"
   - Enter: `www.hubql.com`

2. **Configure DNS**

   For Vercel DNS:
   ```
   Type: A
   Name: www
   Value: 76.76.21.21
   ```

   Or CNAME:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **SSL Certificate**
   - Vercel automatically provisions SSL
   - Usually takes 5-10 minutes

4. **Redirect Root Domain**
   ```
   hubql.com → www.hubql.com
   ```

### DNS Configuration Example

Complete DNS records:

```
# Root domain
Type: A
Name: @
Value: 76.76.21.21

# WWW subdomain
Type: CNAME
Name: www
Value: cname.vercel-dns.com

# API subdomain (if needed)
Type: CNAME
Name: api
Value: api-service.example.com
```

## CI/CD Pipeline

### GitHub Actions (Optional)

Create `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

jobs:
  lint-and-build:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run ESLint
        run: npm run lint
      
      - name: Build project
        run: npm run build
        env:
          TINA_TOKEN: ${{ secrets.TINA_TOKEN }}
```

### Vercel Build Checks

Vercel automatically runs:
- ✅ Build success/failure
- ✅ Deployment preview
- ✅ Framework detection
- ✅ Environment variable checks

### Pre-deployment Checks

Before deploying to production:

```bash
# 1. Lint
npm run lint

# 2. Build
npm run build

# 3. Test build output
npm start

# 4. Check bundle size
ANALYZE=true npm run build
```

## Monitoring and Analytics

### Vercel Analytics

Enable in Vercel Dashboard:
- Real User Monitoring (RUM)
- Web Vitals tracking
- Performance insights
- Traffic analytics

### PostHog Analytics

Track user behavior:

```typescript
// Initialized in _app.tsx
posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
  api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
});

// Track events
posthog.capture('button_clicked', {
  button_name: 'contact',
});
```

### Error Monitoring

Consider adding:
- **Sentry**: Error tracking
- **LogRocket**: Session replay
- **DataDog**: Full-stack monitoring

### Performance Monitoring

Key metrics to track:
- **Largest Contentful Paint (LCP)**: < 2.5s
- **First Input Delay (FID)**: < 100ms
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Time to First Byte (TTFB)**: < 600ms

## Troubleshooting

### Common Deployment Issues

#### Build Fails with "TINA_TOKEN not found"

**Solution**:
```bash
# Add environment variable in Vercel Dashboard
TINA_TOKEN=your_token_here
```

#### Build Succeeds but Site Shows 404

**Solution**:
- Check `next.config.js` redirects/rewrites
- Verify page routes are correct
- Clear Vercel cache and redeploy

#### Images Not Loading

**Solution**:
```javascript
// Add domains to next.config.js
images: {
  domains: [
    'www.hubql.com',
    'assets.tina.io',
    'your-image-domain.com',
  ],
}
```

#### Build Timeout (45 minutes on Vercel)

**Solution**:
- Optimize build process
- Remove unused dependencies
- Consider incremental static regeneration
- Contact Vercel support for limit increase

#### Environment Variables Not Working

**Solution**:
1. Check variable is set in Vercel Dashboard
2. Use `NEXT_PUBLIC_` prefix for client-side variables
3. Redeploy after changing variables
4. Check environment (Production/Preview/Development)

### Rollback Deployment

If production has issues:

1. **Via Vercel Dashboard**:
   - Go to Deployments
   - Find last working deployment
   - Click "..." → "Promote to Production"

2. **Via Git**:
   ```bash
   git revert <commit-hash>
   git push origin main
   ```

### Checking Deployment Status

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Check deployments
vercel ls

# View logs
vercel logs <deployment-url>
```

## Security Considerations

### Environment Variables

- Never commit `.env.local` or secrets
- Use Vercel's encrypted variable storage
- Rotate tokens regularly
- Use different tokens for different environments

### Content Security Policy

Consider adding CSP headers in `next.config.js`:

```javascript
headers: async () => [
  {
    source: '/:path*',
    headers: [
      {
        key: 'Content-Security-Policy',
        value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline';",
      },
    ],
  },
],
```

### Rate Limiting

For API routes:

```typescript
// Consider using: @upstash/ratelimit
import { Ratelimit } from '@upstash/ratelimit';

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(10, '10 s'),
});
```

## Deployment Checklist

Before deploying to production:

- [ ] All environment variables set
- [ ] Build succeeds locally
- [ ] No console errors
- [ ] SEO meta tags present
- [ ] Images optimized
- [ ] Redirects configured
- [ ] Analytics tracking works
- [ ] Contact form tested
- [ ] Mobile responsive
- [ ] Cross-browser tested
- [ ] Accessibility checked
- [ ] Performance optimized
- [ ] Security headers set
- [ ] DNS configured
- [ ] SSL certificate active

## Post-Deployment

After successful deployment:

1. **Verify functionality**
   - Test all critical user flows
   - Check contact form
   - Verify analytics tracking

2. **Monitor performance**
   - Check Web Vitals
   - Monitor error rates
   - Track user behavior

3. **Update documentation**
   - Document any changes
   - Update changelog
   - Notify team

---

For more information, see the [README](./README.md) or [DEVELOPMENT](./DEVELOPMENT.md) guide.
