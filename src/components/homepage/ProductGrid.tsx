import { Grid, ArrowUpDown, BookMarked, Network, MoveRight } from 'lucide-react'
import Link from 'next/link'

export const ProductGrid = () => {
    return (
        <div>
            <div className="w-full">
                <div className="max-w-screen-xl mx-auto">
                    <h2 className="text-xl text-center font-semibold py-6 px-4 mb-0">
                        Our tools to elevate developer experience in your team
                        and your API consumers
                    </h2>
                </div>
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 px-0 w-full divide-y divide-neutral-800">
                {cards.map((item, index) => (
                    <Link
                        href={item.link}
                        key={index + 't'}
                        className="w-full h-full first:border-t first:border-neutral-800 [&:nth-child(2n)]:border-l [&:nth-child(2n)]:border-neutral-800"
                    >
                        <div className="lg:bg-black p-6  w-full lg:hover:bg-neutral-900 transition-transform ease-in h-full">
                            <div className="flex flex-row justify-start items-center gap-2 mb-2">
                                {item.icon}
                                <h2 className="text-xl mb-0">{item.title}</h2>
                            </div>
                            <p className="text-neutral-400 text-sm">
                                {item.description}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-zinc-50 ">
                                Learn more
                                <MoveRight className="text-accent-500 w-5 h-5" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

const cards = [
    {
        title: 'Hubql Grid - Docs Automation',
        description:
            'Generate and automate the creation of meaningful documentation in Markdown for developers and LLMs alike.',
        link: '/product/hubql-grid',
        icon: <Grid className="h-5 stroke-accent-100 " />,
    },
    {
        title: 'Hubql Client - Instant API Client',
        description:
            'Test your APIs quickly based on your OpenAPI specifications. No need to manually maintain custom request collections in silos.',
        link: '/product/api-client',
        icon: <ArrowUpDown className="h-5 stroke-accent-100" />,
    },
    {
        title: 'Hubql Ref - Hosted API Reference',
        description:
            'Turn your OpenAPI specification into a beautiful reference website and deploy for your API consumers to instantly try your API.',
        link: '/product/api-reference-hosting',
        icon: <BookMarked className="h-5 stroke-accent-100" />,
    },
    {
        title: 'Hubql Lens - Schema Visualizer',
        description:
            'Visualize your data and API schema in beautiful, and interactive graphs.',
        link: '/product/api-reference-hosting',
        icon: <Network className="h-5 stroke-accent-100" />,
    },
]
