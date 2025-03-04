import { Layout } from '@/src/components/layout/Layout'
import {
    ProductPage,
    ProductPagesTemplate,
} from '../../components/templates/ProductPagesTemplate'

export default function CursorRulesAutomation() {
    const data = {
        seoTitle: 'Hubql - Automate Cursor Rules for Reliable AI Coding',
        seoDescription:
            'Hubql simplifies Cursor workflows by automating, generating, and improving cursor rules. Enhance context for faster, more reliable AI-driven coding.',
    }

    const content: ProductPage = {
        title: 'Automate .cursorrules with Hubql',
        description:
            'Set up, generate, and automate Cursor rules to make your AI workflows faster and more reliable. Provide precise context for LLMs and boost your development efficiency.',
        meetingUrl: 'https://go.hubql.com/www-cursor-rules',
        ctaButtonText: 'Get Started',
        ctaButtonUrl: '/docs/quickstarts/cursor',
        ctaTitle: 'Ready to improve your Cursor workflow?',
        ctaDescription:
            'Start automating your Cursor rules with Hubql today. Build better context, save time, and create reliable AI workflows effortlessly.',
        faqs: [
            {
                title: 'What are .cursorrules?',
                description:
                    'Cursor rules define how AI editors like Cursor interpret your codebase, improving the context and reliability of their outputs.',
            },
            {
                title: 'How does Hubql help with .cursorrules?',
                description:
                    'Hubql automates the generation, management, and improvement of cursor rules, ensuring they stay up-to-date as your codebase evolves.',
            },
            {
                title: 'Can I customize the Cursor rules Hubql generates?',
                description:
                    'Yes! Hubql allows you to set up custom rules and workflows tailored to your team’s needs.',
            },
            {
                title: 'Does Hubql work with other AI code editors?',
                description:
                    'While optimized for Cursor, Hubql can generate context-friendly docs usable with tools like Continue, Windsurf, Copilot and others.',
            },
        ],
        section: [
            {
                title: 'Generate Cursor Rules Automatically',
                description:
                    'Save time by automatically generating detailed cursor rules based on your codebase and documentation.',
                imageUrl: '/product-page/cursor-rules.svg',
            },
            {
                title: 'Improve Context for Better Results',
                description:
                    'Provide Cursor with high-quality context from structured, AI-ready markdown files, improving its reliability and output.',
                imageUrl: '/product-page/improve-context.svg',
            },
            {
                title: 'Automate Rule Management',
                description:
                    'Set up workflows to create, update, and maintain cursor rules effortlessly as your codebase evolves.',
                imageUrl: '/product-page/automate-rules.svg',
            },
            {
                title: 'Seamlessly Integrate with Your CLI',
                description:
                    'Use Hubql CLI to automate cursor rule creation as part of your development pipeline.',
                imageUrl: '/product-page/cli-integrate.svg',
            },
        ],
    }
    return (
        <Layout data={data}>
            <ProductPagesTemplate content={content} />
        </Layout>
    )
}
