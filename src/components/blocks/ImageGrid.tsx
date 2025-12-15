'use client'
import { motion } from 'framer-motion'
import type { Template } from 'tinacms'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { tinaField } from 'tinacms/dist/react'
import { cn } from '../util/cn'

type Card = {
    id: number
    src?: string | null
    alt?: string | null
}

export const ImageGrid = ({ data }: { data: any }) => {
    const cards: Card[] =
        data.cards?.map((card: any, index: number) => ({
            id: index,
            src: card?.image?.src ?? '',
            alt: card?.image?.alt ?? '',
        })) ?? []

    return (
        <div className="w-full h-full py-16 px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
                <div
                    className="lg:col-span-7 flex items-center"
                    data-tina-field={tinaField(data, 'content')}
                >
                    {data.content && (
                        <div className="prose prose-invert max-w-none leading-relaxed">
                            <TinaMarkdown content={data.content} />
                        </div>
                    )}
                </div>
                <div className="lg:col-span-5">
                    <div className="columns-1 md:columns-2 gap-4 space-y-4 mt-8">
                        {cards.map((card, i) => (
                            <div
                                key={i}
                                className={cn(
                                    'relative overflow-hidden rounded-lg mb-4 break-inside-avoid'
                                )}
                                data-tina-field={tinaField(data, 'cards', i)}
                            >
                                <motion.img
                                    src={card.src ?? ''}
                                    className="w-full h-auto object-cover"
                                    alt={card.alt ?? 'thumbnail'}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const imageGridBlockSchema: Template = {
    name: 'imageGrid',
    label: 'Image Grid',
    ui: {
        previewSrc: '',
    },
    fields: [
        {
            type: 'rich-text',
            label: 'Content',
            name: 'content',
        },
        {
            label: 'Images',
            name: 'cards',
            type: 'object',
            list: true,
            fields: [
                {
                    type: 'object',
                    label: 'Image',
                    name: 'image',
                    fields: [
                        {
                            name: 'src',
                            label: 'Image Source',
                            type: 'image',
                        },
                        {
                            name: 'alt',
                            label: 'Alt Text',
                            type: 'string',
                        },
                    ],
                },
            ],
        },
    ],
}
