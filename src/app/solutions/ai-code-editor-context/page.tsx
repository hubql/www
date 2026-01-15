import { Layout } from '@/src/components/layout/Layout'
import { ProductPagesTemplate } from '@/src/components/templates/ProductPagesTemplate'

export default function ForAICodeEditors() {
    const data = {
        seoTitle:
            'Hubql for AI Code Editors - Smarter Context for Better Results',
        seoDescription:
            'Hubql empowers developers to generate AI-ready documentation and structured context for tools like Cursor, Continue, and VS Code Copilot.',
    }

    const content = {
        title: 'Hubql for AI Code Editors - Smarter Context, Better Results',
        description:
            'Enhance AI editor workflows with Hubql by generating structured context and AI-ready documentation. Designed for Cursor, Continue, VS Code Copilot, and more.',
        tryNowUrl: '/docs/quickstarts/get-started',
        meetingUrl: 'https://go.hubql.com/www-for-llms',
        ctaButtonText: 'Generate AI-Ready Docs',
        ctaButtonUrl: '/docs/quickstarts/get-started',
        ctaTitle: 'Ready to Enhance Your AI Editors?',
        ctaDescription:
            'Streamline your workflows with AI-ready context files tailored for Cursor, Continue, Copilot, and more. Automate, improve, and scale with Hubql.',
        faqs: [
            {
                title: "What is Hubql's role in AI code editors?",
                description:
                    'Hubql generates structured context files like Markdown summaries and cursorrules, improving the accuracy and efficiency of tools like Cursor, Continue, and VS Code Copilot.',
            },
            {
                title: 'What formats does Hubql generate?',
                description:
                    'Hubql supports editor-specific formats like cursorrules as well as generic Markdown summaries that can be repurposed across tools.',
            },
            {
                title: 'Can Hubql integrate with any AI editor?',
                description:
                    'Yes, Hubql-generated files are designed to work seamlessly with Cursor, Continue, VS Code Copilot, and other AI-driven development tools.',
            },
            {
                title: 'How does Hubql automate context generation?',
                description:
                    'Hubql CLI automates the creation of context files, keeping them in sync with your codebase as it evolves, reducing manual effort and ensuring consistency.',
            },
            {
                title: 'Is Hubql open source?',
                description: `Yes, Hubql is open source, providing flexibility and transparency for teams and organizations of all sizes.`,
            },
        ],
        section: [
            {
                title: 'Why Context Matters for AI Editors',
                imageUrl: '/product-page/llms.svg',
                description:
                    'AI editors like Cursor and Copilot rely on high-quality context to deliver accurate and relevant outputs. Without structured and concise information, even the most advanced AI struggles to perform reliably. Hubql generates detailed context files to optimize AI-driven workflows.',
            },
            {
                title: 'Editor-Specific and Versatile Formats',
                imageUrl: '/product-page/format-support.svg',
                description:
                    'Hubql supports editor-specific formats like cursorrules for Cursor and Markdown summaries for Copilot, ensuring compatibility and flexibility for any AI editor you choose.',
            },
            {
                title: 'Automate Context with Hubql CLI & Hubql Grid',
                imageUrl: '/product-page/cli-automation.svg',
                description:
                    'With the Hubql CLI, you can automate the generation of context files tailored for AI editors, keeping them up-to-date and reducing manual effort. From Markdown summaries to cursorrules, everything is handled effortlessly.',
            },
            {
                title: 'Boost Team Collaboration and Efficiency',
                imageUrl: '/product-page/team-collaboration.svg',
                description:
                    'Hubql enables teams to create shared context files that streamline collaboration. Whether your team uses Cursor, Copilot, or Continue, Hubql ensures everyone is aligned with consistent AI-ready documentation.',
            },
        ],
    }
    return (
        <Layout data={data}>
            <ProductPagesTemplate content={content} />
        </Layout>
    )
}
