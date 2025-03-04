import { Layout } from '@/src/components/layout/Layout'
import {
    ProductPage,
    ProductPagesTemplate,
} from '../../components/templates/ProductPagesTemplate'

export default function HubqlLens() {
    const data = {
        seoTitle: 'Hubql Lens - Visualize Your Schemas',
        seoDescription:
            'Hubql Lens transforms complex database and API schemas into visual diagrams. Simplify your workflow with support for Prisma, OpenAPI, JSON, YAML, and more.',
    }

    const content: ProductPage = {
        title: 'Hubql Lens - Schema Visualization',
        description:
            'Transform complex database and API schemas into ER diagrams and graphs. Hubql Lens simplifies schema visualization with support for multiple formats.',
        meetingUrl: 'https://go.hubql.com/www-hubql-lens',
        ctaButtonText: 'Try Hubql Lens',
        ctaButtonUrl: '/docs/quickstarts/lens',
        ctaTitle: 'Visualize Your Schemas Today',
        ctaDescription:
            'Simplify your schema workflows. Use Hubql Lens to turn complex database and API schemas into beautiful, shareable diagrams.',
        faqs: [
            {
                title: 'What is Hubql Lens?',
                description:
                    'Hubql Lens is a schema visualization tool that turns complex database and API schemas into ER diagrams and graphs for easier understanding and collaboration.',
            },
            {
                title: 'What file types does Hubql Lens support?',
                description:
                    'Hubql Lens supports various file types including Prisma, OpenAPI, GraphQL,JSON, YAML, and more.',
            },
            {
                title: 'Can I customize the generated diagrams?',
                description:
                    'Yes! Hubql Lens allows you to customize and fine-tune the generated diagrams to fit your project needs.',
            },
            {
                title: 'Is Hubql Lens part of the Hubql open-source platform?',
                description:
                    'Yes, Hubql Lens is part of the Hubql open-source ecosystem and is available for developers to use and contribute to.',
            },
            {
                title: 'Does Hubql Lens integrate with other Hubql tools?',
                description:
                    'Absolutely. Hubql Lens works seamlessly with other Hubql tools, such as the CLI and Studio, to enhance your development workflows.',
            },
        ],
        section: [
            {
                title: 'Transform Complex Schemas Into Visual Diagrams',
                description:
                    'Automatically generate ER diagrams and graphs from database schemas and API schemas. Hubql Lens supports multiple formats for flexible visualization.',
                imageUrl:
                    '/product-page/complex-schemas-into-visual-diagrams.png',
            },
            {
                title: 'Support for Multiple File Types',
                description:
                    'Hubql Lens supports Prisma, OpenAPI, GraphQL,JSON, YAML, and other popular file types, making it a versatile tool for developers.',
                imageUrl:
                    '/product-page/prisma-openapi-graphqljson-yaml-and-more.png',
            },
            {
                title: 'Interactive and Customizable Diagrams',
                description:
                    'Fine-tune your diagrams with interactive tools that let you highlight relationships, add annotations, and more.',
                imageUrl:
                    '/product-page/interactive-and-customizable-diagrams.png',
            },
            {
                title: 'Built for Developers and Teams',
                description:
                    'Collaborate by sharing visual diagrams with your team. Use Hubql Lens to streamline communication and improve understanding.',
                imageUrl: '/product-page/built-for-developers-and-teams.png',
            },
        ],
    }
    return (
        <Layout data={data}>
            <ProductPagesTemplate content={content} />
        </Layout>
    )
}
