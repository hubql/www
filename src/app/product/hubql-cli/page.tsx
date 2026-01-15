import { Layout } from '@/src/components/layout/Layout'
import {
    ProductPage,
    ProductPagesTemplate,
} from '../../../components/templates/ProductPagesTemplate'

export default function HubqlCli() {
    const data = {
        seoTitle:
            'Hubql CLI generates generates beautiful developer documentation',
        seoDescription:
            'Hubql CLI generates beautiful documentation in MDX or React from your OpenAPI specification or markdown docs.',
    }

    const content: ProductPage = {
        title: 'Hubql CLI',
        description:
            'Generate beautiful documentation in MDX or React from your OpenAPI specification or markdown docs.',
        meetingUrl: 'https://go.hubql.com/www-cli',
        ctaButtonText: 'Contact Us',
        ctaButtonUrl: '/contact',
        ctaTitle: 'Ready?',
        ctaDescription:
            'Use Hubql CLI to build your documentation with a single command. No need to write boilerplate code or copy-paste your API requests.',
        faqs: [
            {
                description:
                    'Hubql CLI generates beautiful documentation in MDX or React from your OpenAPI specification or markdown docs.',
                title: 'What is Hubql CLI?',
            },
            {
                title: 'How to learn more about Hubql CLI?',
                description: 'Reach out to us.',
            },
        ],
        section: [
            {
                title: 'Never write documentation again',
                description:
                    'Use Hubql CLI to build your documentation with a single command. No need to write boilerplate code or copy-paste your API requests.',
                imageUrl: '/product-page/generate.svg',
            },
            {
                title: 'OpenAPI support',
                description:
                    'Kickstart your development with any OpenAPI spec either introspection via URL or through our server libraries passing your API schema. Any additional headers, request parameters and body can be saved to be reused as your personal collection.',
                imageUrl: '/product-page/openAPI.svg',
            },
            {
                title: 'Available for your favorite framework',
                description:
                    'Hubql CLI is available for popular frameworks and libraries. You can use Hubql CLI together with your favorite framework to build your APIs.',
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
