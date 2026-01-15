import { Layout } from '@/src/components/layout/Layout'
import {
    ProductPage,
    ProductPagesTemplate,
} from '../../../components/templates/ProductPagesTemplate'

export default function InternalDocs() {
    const data = {
        seoTitle: 'Hubql for Internal Docs',
        seoDescription:
            "Streamline onboarding, improve collaboration, and prepare your codebase for the age of AI with Hubql's internal documentation solutions.",
    }

    const content: ProductPage = {
        title: 'Internal Documentation for Teams',
        description:
            "Streamline onboarding, improve collaboration, and prepare your codebase for the age of AI with Hubql's internal documentation solutions.",
        meetingUrl: 'https://go.hubql.com/www-cli',
        ctaButtonText: 'Contact Us',
        ctaButtonUrl: '/contact',
        ctaTitle: 'Ready?',
        ctaDescription:
            "Streamline onboarding, improve collaboration, and prepare your codebase for the age of AI with Hubql's internal documentation solutions.",
        faqs: [
            {
                description:
                    'Internal docs improve communication, speed up onboarding, and reduce errors by providing a single source of truth for projects.',
                title: 'Why are internal docs important for teams?',
            },
            {
                title: 'How does Hubql help with AI tools?',
                description:
                    'Hubql generates structured documentation that provides context for AI tools, improving their suggestions and outputs.',
            },
            {
                title: 'Can Hubql integrate with existing frameworks?',
                description:
                    "Yes, Hubql works seamlessly with Astro and NextJS, allowing you to build interactive docs tailored to your team's needs.",
            },
            {
                title: 'How does Hubql keep internal docs up to date?',
                description:
                    'Hubql syncs documentation with your codebase using automation, ensuring your team always works with the latest information.',
            },
            {
                title: 'Is Hubql suitable for large teams?',
                description:
                    'Absolutely! Hubql scales with your team, offering features designed for both startups and enterprise organizations.',
            },
        ],
        section: [
            {
                title: 'The Importance of Internal Documentation',
                description: (
                    <div>
                        <p>
                            Internal documentation isn\'t just a nice-to-have;
                            it\'s the backbone of efficient teams. It helps:
                        </p>
                        <ul>
                            <li>New developers onboard faster.</li>
                            <li>Reduce miscommunication and knowledge gaps.</li>
                            <li>
                                Provide a single source of truth for your
                                codebase.With Hubql, creating and maintaining
                                internal docs becomes seamless and hassle-free.
                            </li>
                        </ul>
                    </div>
                ),
                imageUrl: '/product-page/internal-docs.svg',
            },
            {
                title: 'Documentation Meets AI',
                description: (
                    <div>
                        <p>
                            In the age of AI tools like ChatGPT and GitHub
                            Copilot, internal documentation isn't just for
                            humans. Well-structured docs:
                        </p>
                        <ul>
                            <li>
                                Improve AI-generated code suggestions by
                                providing better context.
                            </li>
                            <li>
                                Help AI tools debug and analyze code more
                                effectively.
                            </li>
                            <li>
                                Make it easier to integrate AI into your
                                workflows, saving time and effort. Hubql's tools
                                ensure your internal docs are optimized for both
                                humans and AI systems.
                            </li>
                        </ul>
                    </div>
                ),
                imageUrl: '/product-page/documentation.svg',
            },
            {
                title: 'Faster Onboarding, Better Productivity',
                description: (
                    <div>
                        <p>
                            Onboarding new developers is a challenge for any
                            team, especially in growing organizations. Hubql's
                            internal documentation helps:
                        </p>
                        <ul>
                            <li>
                                New hires understand project structures and
                                workflows faster.
                            </li>
                            <li>
                                Teams save hours on training by providing
                                self-serve resources.
                            </li>
                            <li>
                                Ensure consistency across projects and teams.
                                With plugins for Astro and NextJS, setting up
                                internal docs has never been easier.
                            </li>
                        </ul>
                    </div>
                ),
                imageUrl: '/product-page/faster.svg',
            },
            {
                title: 'How Hubql Makes Internal Documentation Easy',
                description: (
                    <div>
                        <p>Hubql supports your team with:</p>
                        <ul>
                            <li>
                                Astro and NextJS Plugins: Generate interactive,
                                customizable internal docs with minimal setup.
                            </li>
                            <li>
                                Markdown and OpenAPI Support: Automatically
                                create rich documentation directly from your
                                existing codebase.
                            </li>
                            <li>
                                Always Up-to-Date: Keep your docs in sync with
                                your code using automation tools built into
                                Hubql.
                            </li>
                        </ul>
                    </div>
                ),
                imageUrl: '/product-page/easy-docs.svg',
            },
        ],
    }
    return (
        <Layout data={data}>
            <ProductPagesTemplate content={content} />
        </Layout>
    )
}
