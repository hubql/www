import { Layout } from '@/src/components/layout/Layout'
import { ProductPagesTemplate } from '../../../components/templates/ProductPagesTemplate'

export default function ApiClient() {
    const data = {
        seoTitle: 'Hubql Client | API client to build faster together',
        seoDescription:
            'Hubql Client enables you to ship APIs easier and faster together with your team.',
    }

    const content = {
        title: 'Hubql Client - Instant API Client',
        description:
            'Build, test and debug your APIs by sending HTTP requests in your local environment based on your OpenAPI specification.',
        tryNowUrl: 'https://cloud.hubql.com',
        meetingUrl: 'https://go.hubql.com/www-api-client',
        videoTitle: 'Hubql Client Demo',
        videoDescription:
            'Watch a short demo (2min) of the Hubql Client to get a quick overview of its features.',
        videoUrl: 'https://www.youtube.com/watch?v=KAsjv4w66Yo',
        ctaButtonText: 'Try now',
        ctaButtonUrl: 'https://cloud.hubql.com',
        ctaTitle: 'Ready?',
        ctaDescription:
            'Try Hubql today by importing your API specification and start testing.',
        faqs: [
            {
                title: 'What makes Hubql different?',
                description:
                    'Hubql Client is built as local-first library storing your request offline. Our API client runs client-side only either as a local server plugin for example as NestJS plugin or distributed directly via CDN as JS library.',
            },
            {
                title: 'How can I try Hubql?',
                description:
                    'Quickest way to try Hubql is visiting our Cloud platform to help you get started on https://cloud.hubql.com',
            },
            {
                title: 'What server frameworks are supported?',
                description:
                    'As of now, we support NestJS, Elysia, Fastify and Hono. More to come or reach out if you want to use Hubql with your favorite framework.',
            },
            {
                title: "What if I don't want to use the Hubql Cloud?",
                description:
                    'You can use Hubql Client as npm package or download from our CDN as JS library.',
            },
            {
                title: 'What if I do not have an OpenAPI specification?',
                description:
                    'You can try Hubql using custom requests that you manually add to your workspace, but the best experience will be using an OpenAPI specification which is available for many server frameworks and languages.',
            },
            {
                title: 'How can I learn more about Hubql?',
                description: 'Reach out to us at https://www.hubql.com/contact',
            },
        ],
        section: [
            {
                title: 'Import your OpenAPI specification. Done.',
                description:
                    'Kickstart your development with any OpenAPI spec either introspection via URL or through our server libraries passing your API schema. Any additional headers, request parameters and body can be saved to be reused as your personal collection.',
                imageUrl: '/product-page/import.svg',
            },
            {
                title: 'Request and Response',
                description:
                    'Send API requests with the Hubql Client and inspect your responses. Use your OpenAPI specification or custom requests to test your APIs.',
                imageUrl: '/product-page/request-response.svg',
            },
            {
                title: 'Local-first',
                description:
                    'Hubql API Client is built as local-first application storing your data offline in the browser or file system. Our API client runs client-side in the browser only either as a local server plugin for example as NestJS plugin or distributed directly via CDN as JS library.',
                imageUrl: '/product-page/local-first.svg',
            },
            {
                title: 'Environments and Variables',
                description:
                    'Store your environment variables in your workspace and use them in your API requests. No need to copy-paste your variables anymore.',
                imageUrl: '/product-page/env.svg',
            },
            {
                title: 'Share without deployment',
                description:
                    'At Hubql we believe progress is the fastest with short feedback loops, less friction, less meetings. We enable you to get instant feedback by sharing your local environment with others to unblock your development when feedback is needed.',
                imageUrl: '/product-page/share.svg',
            },
            {
                title: 'Available for your favorite framework',
                description:
                    'Hubql REST API Client is available for popular frameworks and libraries. It is currently available for NestJS, Elysia, Fastify and Hono and more to come.',
                imageUrl: '/product-page/framework.svg',
            },
        ],
    }
    return (
        <Layout data={data}>
            <ProductPagesTemplate content={content} />
        </Layout>
    )
}
