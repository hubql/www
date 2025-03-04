import { Layout } from '@/src/components/layout/Layout'
import {
    ProductPage,
    ProductPagesTemplate,
} from '../../components/templates/ProductPagesTemplate'

export default function HubqlGrid() {
    const data = {
        seoTitle:
            'Hubql Grid - Your documentation command center for humans and LLMs alike',
        seoDescription:
            'Automate and streamline API documentation with Hubql Grid. Centralize workflows, create AI-ready docs, and empower your team with cutting-edge tools for collaboration.',
    }

    const content: ProductPage = {
        title: 'Hubql Grid - Documentation Command Center',
        description:
            'Centralize and automate your documentation workflows. Merge files, set triggers, and create better AI-ready docs — all locally from Hubql Grid.',
        meetingUrl: 'https://go.hubql.com/www-hubql-grid',
        // videoTitle: 'Video Title',
        // videoDescription:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        // videoUrl: 'https://www.youtube.com/watch?v=KAsjv4w66Yo',
        ctaButtonText: 'Read the docs',
        ctaButtonUrl: '/docs/quickstarts/get-started',
        ctaTitle: 'Ready?',
        ctaDescription:
            'Start building better documentation today. Join other of developers redefining how APIs are documented and shared.',
        faqs: [
            {
                title: 'What is Hubql Grid?',
                description:
                    'Hubql Grid is a React-based app that works with the Hubql CLI to centralize and automate your documentation workflows. It’s your command center for managing markdown files, setting triggers, and creating AI-ready docs.',
            },
            {
                title: 'How does Hubql Grid integrate with Hubql CLI?',
                description:
                    'Hubql Grid extends the CLI experience by providing a visual interface to manage and automate documentation tasks, such as merging files, tracking changes, and setting up cursorrules.',
            },
            {
                title: 'Can I use Hubql Grid for AI code editors?',
                description:
                    'Yes! Hubql Grid helps you set up rules and create AI-ready documentation, making tools like Cursor or Copilot more effective for your development workflows.',
            },
            {
                title: 'Is Hubql Grid open source?',
                description:
                    'Yes, Hubql Grid is part of the Hubql open-source platform and is available for developers to use, contribute to, and extend.',
            },
            {
                title: 'What platforms and frameworks does Hubql Grid support?',
                description:
                    'Hubql Grid works on top of a generic file watcher, so it supports any file type that can be watched by the operating system. Right now, we focus on supporting primarly markdown files for documentation.',
            },
        ],
        section: [
            {
                title: 'Automate Documentation Workflows',
                description:
                    'Set up rules to automate your documentation process. Merge markdown files, trigger actions on file changes, and keep your documentation always in sync.',
                imageUrl: '/product-page/automate-documentation-workflows.png',
            },

            {
                title: 'Create AI-Ready Documentation',
                description:
                    'Define cursorrules and other context-specific rules to enhance AI code editors like Cursor and Copilot, providing precise and actionable guidance to LLMs.',
                imageUrl: '/product-page/create-ai-ready-documentation.png',
            },
            {
                title: 'Seamlessly Integrate with Your CLI',
                description:
                    'Use Hubql CLI and Hubql Grid together for a complete command-line-to-UI experience, making your workflow intuitive and efficient.',
                imageUrl: '/product-page/npm-install-g-hubql.png',
            },
            {
                title: 'Built for Developers, Designed for Teams',
                description:
                    'Collaborate across teams with shared rules, actions, and a centralized view of your documentation files tracked in your Git repo.',
                imageUrl:
                    '/product-page/built-for-developers-designed-for-teams.png',
            },
        ],
    }
    return (
        <Layout data={data}>
            <ProductPagesTemplate content={content} />
        </Layout>
    )
}
