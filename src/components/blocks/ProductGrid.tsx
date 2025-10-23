import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Section } from '../kit/Section'
import { tinaField } from 'tinacms/dist/react'
import type { Template } from 'tinacms'
import type { PagesBlocksProductGrid } from '../../../tina/__generated__/types'

export const ProductGrid = ({
    data,
}: {
    data: PagesBlocksProductGrid
}) => {
    return (
        <Section
            title={data.title ?? 'Powerful Open-Source Developer Tools, Built by Hubql.'}
            contentClassName="grid grid-cols-1 lg:grid-cols-2 gap-0 px-0 w-full divide-y divide-neutral-800 border-b border-neutral-800"
            data-tina-field={tinaField(data, 'title')}
        >
            {data.productCards?.map((item: any, index: number) => (
                <Link
                    href={item?.link ?? '#'}
                    key={'productgrid-' + (item?.title ?? '') + index}
                    className="w-full h-full first:border-t first:border-neutral-800 [&:nth-child(2n)]:border-l [&:nth-child(2n)]:border-neutral-800"
                    data-tina-field={tinaField(item)}
                >
                    <div className="lg:bg-black p-6 w-full lg:hover:bg-neutral-900 transition-transform ease-in h-full flex flex-col justify-between">
                        <div className="flex flex-col">
                            <div
                                className="flex flex-row justify-start items-center gap-2 mb-2"
                                data-tina-field={tinaField(item, 'icon')}
                            >
                                {item?.icon && (
                                    <Image
                                        src={item.icon}
                                        alt={item.title ?? 'Product logo'}
                                        width={120}
                                        height={24}
                                    />
                                )}
                            </div>

                            {item?.title && (
                                <div
                                    className="flex flex-row justify-start items-center gap-2 mb-2"
                                    data-tina-field={tinaField(item, 'title')}
                                >
                                    <h2 className="text-lg mb-0">{item.title}</h2>
                                </div>
                            )}

                            {item?.description && (
                                <p
                                    className="text-neutral-400 text-base"
                                    data-tina-field={tinaField(item, 'description')}
                                >
                                    {item.description}
                                </p>
                            )}
                        </div>

                        <div className="flex items-center gap-4 text-sm text-zinc-50">
                            Learn more
                            <MoveRight className="text-accent-500 w-5 h-5" />
                        </div>
                    </div>
                </Link>
            ))}
        </Section>
    )
}

export const productGridBlockSchema: Template = {
    name: 'ProductGrid',
    label: 'Product Grid',
    ui: {
        previewSrc: '',
        defaultItem: {
            title: 'Powerful Open-Source Developer Tools, Built by Hubql.',
            productCards: [
                {
                    title: 'Hubql Grid - Docs Automation',
                    description:
                        'Generate and automate the creation of meaningful documentation in Markdown for developers and LLMs alike.',
                    link: '/product/hubql-grid',
                    icon: '/product-logos/hubql-grid.svg',
                },
                {
                    title: 'Hubql Client - Instant API Client',
                    description:
                        'Test your APIs quickly based on your OpenAPI specifications. No need to manually maintain custom request collections in silos.',
                    link: '/product/api-client',
                    icon: '/product-logos/hubql-client.svg',
                },
                {
                    title: 'Hubql Ref - Hosted API Reference',
                    description:
                        'Turn your OpenAPI specification into a beautiful reference website and deploy for your API consumers to instantly try your API.',
                    link: '/product/api-reference-hosting',
                    icon: '/product-logos/hubql-ref.svg',
                },
                {
                    title: 'Hubql Lens - Schema Visualizer',
                    description:
                        'Visualize your data and API schema in beautiful, and interactive graphs.',
                    link: '/product/api-reference-hosting',
                    icon: '/product-logos/hubql-lens.svg',
                },
            ],
        },
    },
    fields: [
        {
            type: 'string',
            label: 'Title',
            name: 'title',
        },
        {
            type: 'object',
            label: 'Product Cards',
            name: 'productCards',
            list: true,
            ui: {
                itemProps: (item) => ({
                    label: item?.title || 'Product Card',
                }),
            },
            fields: [
                {
                    type: 'string',
                    label: 'Title',
                    name: 'title',
                },
                {
                    type: 'string',
                    label: 'Description',
                    name: 'description',
                    ui: {
                        component: 'textarea',
                    },
                },
                {
                    type: 'string',
                    label: 'Link',
                    name: 'link',
                },
                {
                    type: 'image',
                    label: 'Icon',
                    name: 'icon',
                },
            ],
        },
    ],
}