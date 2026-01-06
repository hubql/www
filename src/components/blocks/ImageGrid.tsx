'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import type { Template } from 'tinacms'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { tinaField } from 'tinacms/dist/react'
import { cn } from '../util/cn'

type Card = {
    id: number
    src?: string | null
    alt?: string | null
}

type ImageWithLoaderProps = {
    src: string
    alt: string
    sizes: string
    preload: boolean
    className?: string
}

const ImageWithLoader = ({
    src,
    alt,
    sizes,
    preload,
    className,
}: ImageWithLoaderProps) => {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(false)
    }, [src])

    return (
        <>
            {!isLoaded && (
                <div className="absolute inset-0 bg-zinc-800 animate-pulse" />
            )}
            <Image
                key={src}
                src={src}
                alt={alt}
                fill
                preload={preload}
                sizes={sizes}
                className={cn(
                    className,
                    'transition-opacity duration-300',
                    isLoaded ? 'opacity-100' : 'opacity-0'
                )}
                onLoad={() => setIsLoaded(true)}
            />
        </>
    )
}

export const ImageGrid = ({ data }: { data: any }) => {
    const cards: Card[] =
        data.cards?.map((card: any, index: number) => ({
            id: index,
            src: card?.image?.src ?? '',
            alt: card?.image?.alt ?? '',
        })) ?? []

    const isSingleImage = cards.length === 1
    const isRightToLeft = data.layout === 'right'
    const priorityLoading = data.priority ?? false

    const contentSection = (
        <div
            className={cn(
                'lg:col-span-7 flex items-center',
                isRightToLeft && 'lg:order-2'
            )}
            data-tina-field={tinaField(data, 'content')}
        >
            {data.content && (
                <div className="prose prose-invert max-w-none leading-relaxed">
                    <TinaMarkdown content={data.content} />
                </div>
            )}
        </div>
    )

    const imageSection = (
        <div className={cn('lg:col-span-5', isRightToLeft && 'lg:order-1')}>
            {isSingleImage ? (
                <div className="grid grid-cols-2 gap-4 mt-8">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className={cn(
                                'relative overflow-hidden rounded-lg col-span-2 row-span-2 aspect-video'
                            )}
                            data-tina-field={tinaField(data, 'cards', i)}
                        >
                            <ImageWithLoader
                                src={card.src ?? ''}
                                alt={card.alt ?? 'thumbnail'}
                                preload={priorityLoading}
                                sizes="(max-width: 1024px) 100vw, 42vw"
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="columns-1 md:columns-2 gap-4 space-y-4 mt-8">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className={cn(
                                'relative overflow-hidden rounded-lg mb-4 break-inside-avoid aspect-[4/3]'
                            )}
                            data-tina-field={tinaField(data, 'cards', i)}
                        >
                            <ImageWithLoader
                                src={card.src ?? ''}
                                className="object-cover"
                                alt={card.alt ?? 'thumbnail'}
                                preload={priorityLoading}
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 21vw"
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )

    return (
        <div className="w-full h-full py-16 px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                {contentSection}
                {imageSection}
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
            label: 'Layout',
            name: 'layout',
            type: 'string',
            options: [
                { label: 'Left to Right', value: 'left' },
                { label: 'Right to Left', value: 'right' },
            ],
            ui: {
                defaultValue: 'left',
            },
        },
        {
            name: 'priority',
            label: 'Priority Loading',
            type: 'boolean',
            description:
                'Enable for above-the-fold images to improve performance',
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
