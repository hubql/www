import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev'
if (process.env.NODE_ENV === 'development') {
    await setupDevPlatform()
}
/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['react-tweet'],
    redirects: () => [
        {
            source: '/home',
            destination: '/',
            permanent: true,
        },
        {
            source: '/terms-of-use',
            destination: '/terms',
            permanent: true,
        },
        {
            source: '/solution/:path*',
            destination: '/solutions/:path*',
            permanent: true,
        },
        {
            source: '/integrations/graphql',
            destination: 'https://www.schemavisualizer.dev/graphql',
            permanent: true,
        },
        {
            source: '/integrations/protobuf',
            destination: 'https://www.schemavisualizer.dev/protobuf',
            permanent: true,
        },
        {
            source: '/integrations/json',
            destination: 'https://www.schemavisualizer.dev/json',
            permanent: true,
        },
        {
            source: '/integrations/prisma',
            destination: 'https://www.schemavisualizer.dev/prisma',
            permanent: true,
        },
        {
            source: '/integrations/sql',
            destination: 'https://www.schemavisualizer.dev/sql',
            permanent: true,
        },
        {
            source: '/code',
            destination: 'https://www.schemavisualizer.dev/features/code',
            permanent: true,
        },
        {
            source: '/design',
            destination: 'https://www.schemavisualizer.dev/features/design',
            permanent: true,
        },
        {
            source: '/document',
            destination: 'https://www.schemavisualizer.dev/features/document',
            permanent: true,
        },
        {
            source: '/plan',
            destination: 'https://www.schemavisualizer.dev/features/plan',
            permanent: true,
        },
        {
            source: '/data-schema-visualization',
            destination:
                'https://www.schemavisualizer.dev/data-schema-visualization',
            permanent: true,
        },
        {
            source: '/features/ai',
            destination: 'https://www.schemavisualizer.dev/features/ai',
            permanent: true,
        },
        {
            source: '/features/code',
            destination: 'https://www.schemavisualizer.dev/features/code',
            permanent: true,
        },
        {
            source: '/features/design',
            destination: 'https://www.schemavisualizer.dev/features/design',
            permanent: true,
        },
        {
            source: '/features/document',
            destination: 'https://www.schemavisualizer.dev/features/document',
            permanent: true,
        },
        {
            source: '/features/plan',
            destination: 'https://www.schemavisualizer.dev/features/plan',
            permanent: true,
        },
        {
            source: '/features/review',
            destination: 'https://www.schemavisualizer.dev/features/review',
            permanent: true,
        },
        {
            source: '/features/secure',
            destination: 'https://www.schemavisualizer.dev/features/secure',
            permanent: true,
        },
        {
            source: '/integrations/confluence',
            destination:
                'https://www.schemavisualizer.dev/integrations/confluence',
            permanent: true,
        },
        {
            source: '/integrations/firebase',
            destination:
                'https://www.schemavisualizer.dev/integrations/firebase',
            permanent: true,
        },
        {
            source: '/integrations/github',
            destination: 'https://www.schemavisualizer.dev/integrations/github',
            permanent: true,
        },
        {
            source: '/integrations/hasura',
            destination: 'https://www.schemavisualizer.dev/integrations/hasura',
            permanent: true,
        },
        {
            source: '/integrations/linear',
            destination: 'https://www.schemavisualizer.dev/integrations/linear',
            permanent: true,
        },
        {
            source: '/integrations/notion',
            destination: 'https://www.schemavisualizer.dev/integrations/notion',
            permanent: true,
        },
        {
            source: '/integrations/supabase',
            destination:
                'https://www.schemavisualizer.dev/integrations/supabase',
            permanent: true,
        },
        {
            source: '/json-file-viewer',
            destination: 'https://www.schemavisualizer.dev/json-file-viewer',
            permanent: true,
        },
        {
            source: '/prisma-schema-visualization',
            destination:
                'https://www.schemavisualizer.dev/prisma-schema-visualization',
            permanent: true,
        },
        {
            source: '/resources/glossaries/what-is-a-data-schema',
            destination:
                'https://www.schemavisualizer.dev/resources/glossaries/what-is-a-data-schema',
            permanent: true,
        },
        {
            source: '/resources/glossaries/what-is-a-database-diagram',
            destination:
                'https://www.schemavisualizer.dev/resources/glossaries/what-is-a-database-diagram',
            permanent: true,
        },
        {
            source: '/solutions/building-webhooks',
            destination:
                'https://www.schemavisualizer.dev/solutions/building-webhooks',
            permanent: true,
        },
        {
            source: '/solutions/data-model-implementation',
            destination:
                'https://www.schemavisualizer.dev/solutions/data-model-implementation',
            permanent: true,
        },
        {
            source: '/solutions/er-diagrams',
            destination:
                'https://www.schemavisualizer.dev/solutions/er-diagrams',
            permanent: true,
        },
        {
            source: '/solutions/external-collaboration',
            destination:
                'https://www.schemavisualizer.dev/solutions/external-collaboration',
            permanent: true,
        },
        {
            source: '/solutions/for-api-aggregators',
            destination:
                'https://www.schemavisualizer.dev/solutions/for-api-aggregators',
            permanent: true,
        },
        {
            source: '/solutions/for-api-integration-platforms',
            destination:
                'https://www.schemavisualizer.dev/solutions/for-api-integration-platforms',
            permanent: true,
        },
        {
            source: '/solutions/for-freelancers',
            destination:
                'https://www.schemavisualizer.dev/solutions/for-freelancers',
            permanent: true,
        },
        {
            source: '/solutions/for-software-agencies',
            destination:
                'https://www.schemavisualizer.dev/solutions/for-software-agencies',
            permanent: true,
        },
        {
            source: '/solutions/onboarding',
            destination:
                'https://www.schemavisualizer.dev/solutions/onboarding',
            permanent: true,
        },
        {
            source: '/solutions/review-ai-written-code',
            destination:
                'https://www.schemavisualizer.dev/solutions/review-ai-written-code',
            permanent: true,
        },
        {
            source: '/solutions/start-a-new-project',
            destination:
                'https://www.schemavisualizer.dev/solutions/start-a-new-project',
            permanent: true,
        },
        {
            source: '/solutions/system-design',
            destination:
                'https://www.schemavisualizer.dev/solutions/system-design',
            permanent: true,
        },
        {
            source: '/solutions/team-collaboration',
            destination:
                'https://www.schemavisualizer.dev/solutions/team-collaboration',
            permanent: true,
        },
        {
            source: '/solutions/workflow-integration',
            destination:
                'https://www.schemavisualizer.dev/solutions/workflow-integration',
            permanent: true,
        },
        {
            source: '/visualization',
            destination: 'https://www.schemavisualizer.dev/visualization',
            permanent: true,
        },
        {
            source: '/visualize-json-data',
            destination: 'https://www.schemavisualizer.dev/visualize-json-data',
            permanent: true,
        },
        {
            source: '/for-education',
            destination: 'https://www.schemavisualizer.dev/for-education',
            permanent: true,
        },
        {
            source: '/graphql',
            destination: 'https://www.schemavisualizer.dev/graphql',
            permanent: true,
        },
        {
            source: '/hubql-for-architects',
            destination:
                'https://www.schemavisualizer.dev/hubql-for-architects',
            permanent: true,
        },
        {
            source: '/hubql-for-consultants',
            destination:
                'https://www.schemavisualizer.dev/hubql-for-consultants',
            permanent: true,
        },
        {
            source: '/hubql-for-developers',
            destination:
                'https://www.schemavisualizer.dev/hubql-for-developers',
            permanent: true,
        },
        {
            source: '/hubql-for-startups',
            destination: 'https://www.schemavisualizer.dev/hubql-for-startups',
            permanent: true,
        },
        {
            source: '/json',
            destination: 'https://www.schemavisualizer.dev/json',
            permanent: true,
        },
        {
            source: '/open-api',
            destination: 'https://www.schemavisualizer.dev/open-api',
            permanent: true,
        },
        {
            source: '/prisma',
            destination: 'https://www.schemavisualizer.dev/prisma',
            permanent: true,
        },
        {
            source: '/protobuf',
            destination: 'https://www.schemavisualizer.dev/protobuf',
            permanent: true,
        },
        {
            source: '/sql',
            destination: 'https://www.schemavisualizer.dev/sql',
            permanent: true,
        },
        {
            source: '/xml',
            destination: 'https://www.schemavisualizer.dev/xml',
            permanent: true,
        },
        {
            source: '/blog/The-modern-SaaS-Startup-Tech-Stack',
            destination:
                'https://www.schemavisualizer.dev/blog/The-modern-SaaS-Startup-Tech-Stack',
            permanent: true,
        },
        {
            source: '/blog/beta-release-version-0-8',
            destination:
                'https://www.schemavisualizer.dev/blog/beta-release-version-0-8',
            permanent: true,
        },
        {
            source: '/blog/beta-release-version-0-9',
            destination:
                'https://www.schemavisualizer.dev/blog/beta-release-version-0-9',
            permanent: true,
        },
        {
            source: '/blog/challenges-in-data-model-tooling-in-2023',
            destination:
                'https://www.schemavisualizer.dev/blog/challenges-in-data-model-tooling-in-2023',
            permanent: true,
        },
        {
            source: '/blog/release-version-1-1',
            destination:
                'https://www.schemavisualizer.dev/blog/release-version-1-1',
            permanent: true,
        },
        {
            source: '/blog/release-version-1-2',
            destination:
                'https://www.schemavisualizer.dev/blog/release-version-1-2',
            permanent: true,
        },
        {
            source: '/blog/release-version-1-3',
            destination:
                'https://www.schemavisualizer.dev/blog/release-version-1-3',
            permanent: true,
        },
        {
            source: '/blog/release-version-1',
            destination:
                'https://www.schemavisualizer.dev/blog/release-version-1',
            permanent: true,
        },
        {
            source: '/blog/technical-preview-free-tier',
            destination:
                'https://www.schemavisualizer.dev/blog/technical-preview-free-tier',
            permanent: true,
        },
        {
            source: '/client',
            destination: '/product/api-client',
            permanent: true,
        },
        {
            source: '/product/api-tracing-insights',
            destination: '/solutions/api-metrics',
            permanent: true,
        },
        {
            source: '/product/api-tracing-insights',
            destination: '/solutions/api-metrics',
            permanent: true,
        },
        {
            source: '/product/api-metrics',
            destination: '/solutions/api-metrics',
            permanent: true,
        },
        {
            source: '/product/api-visualization',
            destination: '/solutions/api-visualization',
            permanent: true,
        },
        {
            source: '/product/api-collaboration',
            destination: '/solutions/api-collaboration',
            permanent: true,
        },
    ],
    rewrites: () => [
        {
            source: '/admin',
            destination: '/admin/index.html',
        },
        {
            source: '/sitemap.xml',
            destination: '/api/sitemap',
        },
    ],
    images: {
        domains: [
            'www.hubql.com',
            '**.vercel.app',
            'assets.tina.io',
            'raw.githubusercontent.com',
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.hubql.com',
            },
            {
                protocol: 'https',
                hostname: '**.vercel.app',
            },
            {
                protocol: 'https',
                hostname: 'assets.tina.io',
            },
        ],
    },
}

module.exports = nextConfig
