import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Section } from '../kit/Section'

export const ProductGrid = () => {
    return (
        <Section
            title="Powerful Open-Source Developer Tools, Built by Hubql."
            contentClassName="grid grid-cols-1 lg:grid-cols-2 gap-0 px-0 w-full divide-y divide-neutral-800 border-b border-neutral-800"
        >
            {cards.map((item, index) => (
                <Link
                    href={item.link}
                    key={'productgrid-' + item.title + index}
                    className="w-full h-full first:border-t first:border-neutral-800 [&:nth-child(2n)]:border-l [&:nth-child(2n)]:border-neutral-800"
                >
                    <div className="lg:bg-black p-6  w-full lg:hover:bg-neutral-900 transition-transform ease-in h-full flex flex-col justify-between">
                        <div className="flex flex-col">
                            <div className="flex flex-row justify-start items-center gap-2 mb-2">
                                {item.icon}
                            </div>
                            <div className="flex flex-row justify-start items-center gap-2 mb-2">
                                <h2 className="text-lg mb-0">{item.title}</h2>
                            </div>
                            <p className="text-neutral-400 text-base">
                                {item.description}
                            </p>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-zinc-50 ">
                            Learn more
                            <MoveRight className="text-accent-500 w-5 h-5" />
                        </div>
                    </div>
                </Link>
            ))}
        </Section>
    )
}

const cards = [
    {
        title: 'Hubql Grid - Docs Automation',
        description:
            'Generate and automate the creation of meaningful documentation in Markdown for developers and LLMs alike.',
        link: '/product/hubql-grid',
        icon: (
            <Image
                src="/product-logos/hubql-grid.svg"
                alt="Hubql Grid"
                width={100}
                height={20}
            />
        ),
    },
    {
        title: 'Hubql Client - Instant API Client',
        description:
            'Test your APIs quickly based on your OpenAPI specifications. No need to manually maintain custom request collections in silos.',
        link: '/product/api-client',
        icon: (
            <Image
                src="/product-logos/hubql-client.svg"
                alt="Hubql Client"
                width={120}
                height={20}
            />
        ),
    },
    {
        title: 'Hubql Ref - Hosted API Reference',
        description:
            'Turn your OpenAPI specification into a beautiful reference website and deploy for your API consumers to instantly try your API.',
        link: '/product/api-reference-hosting',
        icon: (
            <Image
                src="/product-logos/hubql-ref.svg"
                alt="Hubql Ref"
                width={100}
                height={20}
            />
        ),
    },
    {
        title: 'Hubql Lens - Schema Visualizer',
        description:
            'Visualize your data and API schema in beautiful, and interactive graphs.',
        link: '/product/api-reference-hosting',
        icon: (
            <Image
                src="/product-logos/hubql-lens.svg"
                alt="Hubql Lens"
                width={100}
                height={20}
            />
        ),
    },
]
