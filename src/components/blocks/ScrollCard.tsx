import { Variants, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Template } from 'tinacms'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { PagesBlocksScrollCard } from '../../../tina/__generated__/types'
import { Button } from '../kit/Button'
import { ColoredText } from './ColoredText'

export const ScrollCard = ({ data }: { data: PagesBlocksScrollCard }) => {
    const cardVariants: Variants = {
        offscreen: {
            opacity: 0.3,
        },
        onscreen: {
            opacity: 1,
        },
    }

    const components = {
        ColoredText,
    }

    return (
        <div>
            <div className="relative w-full pt-8 pb-28">
                <div className="flex-col w-full dark:bg-black bg-white  dark:bg-dot-white/[0.1] bg-dot-black/[0.1] relative flex items-center justify-center">
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
                    {data.cards?.map((item: any, index: number) => (
                        <div
                            key={'scroll-card' + index}
                            className="min-h-[60vh] flex items-center"
                        >
                            <motion.div
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: false, amount: 0.5 }}
                                className="relative w-full grid grid-cols-12 items-start text-center justify-between px-8 h-fit mx-auto max-w-7xl py-32 gap-4 md:gap-0 "
                                variants={cardVariants}
                            >
                                <div className="col-start-1 col-end-12 md:col-start-1 md:col-end-5 lg:col-start-2 lg:col-end-6 sticky top-[64px] flex flex-col items-start justify-start gap-2">
                                    <div className="w-7 h-7 rounded-full bg-accent-400 flex items-center justify-center text-white text-sm">
                                        {index + 1}
                                    </div>
                                    <h2
                                        data-tina-field={item?.title}
                                        className="w-full relative text-3xl lg:text-3xl lg:leading-tight leading-tight text-left font-black"
                                    >
                                        {item?.title}
                                    </h2>
                                </div>
                                <div className="col-start-1 col-end-12 lg:col-start-7 lg:col-end-13 md:col-start-6 md:col-end-13 flex flex-col items-start justify-center gap-4">
                                    <div
                                        data-tina-field={item?.description}
                                        className="propse prose-p:text-neutral-400 text-base text-left space-y-6"
                                    >
                                        <TinaMarkdown
                                            content={item.description}
                                            components={components}
                                        />
                                    </div>
                                    {item?.externalLink && (
                                        <Link
                                            href={item?.externalLink?.url ?? ''}
                                            className="w-full flex items-center justify-start gap-4 text-lg hover:opacity-80"
                                        >
                                            {item?.externalLink?.image && (
                                                <Image
                                                    src={
                                                        item?.externalLink
                                                            ?.image?.src ?? ''
                                                    }
                                                    alt={
                                                        item?.externalLink
                                                            ?.image?.alt ?? ''
                                                    }
                                                    width={64}
                                                    height={64}
                                                    className="rounded-lg border-2 border-neutral-700 h-16 w-16"
                                                    style={{
                                                        maxWidth: '100%',
                                                        height: 'auto',
                                                    }}
                                                />
                                            )}
                                            <div className="flex gap-2 items-center prose prose-strong:font-semibold prose-strong:text-neutral-400 text-left text-white">
                                                <TinaMarkdown
                                                    content={
                                                        item.externalLink.label
                                                    }
                                                    components={components}
                                                />
                                            </div>
                                            <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    )}
                                    {item?.button && (
                                        <Button
                                            href={item?.button?.url ?? '#'}
                                            icon="arrow"
                                        >
                                            {item?.button?.label}
                                        </Button>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export const scrollCardBlockSchema: Template = {
    name: 'scrollCard',
    label: 'Scroll Card',
    fields: [
        {
            type: 'object',
            label: 'Cards',
            name: 'cards',
            list: true,
            fields: [
                {
                    type: 'string',
                    label: 'Title',
                    name: 'title',
                },
                {
                    type: 'rich-text',
                    label: 'Description',
                    name: 'description',
                    isBody: true,
                    templates: [
                        {
                            name: 'ColoredText',
                            label: 'Colored Text',
                            fields: [
                                {
                                    type: 'string',
                                    name: 'text',
                                    label: 'Text',
                                },
                                {
                                    type: 'string',
                                    name: 'className',
                                    label: 'ClassName',
                                },
                            ],
                        },
                    ],
                },
                {
                    type: 'object',
                    label: 'Button',
                    name: 'button',
                    fields: [
                        {
                            type: 'string',
                            label: 'Button Label',
                            name: 'label',
                        },
                        {
                            type: 'string',
                            label: 'Button Url',
                            name: 'url',
                        },
                    ],
                },
                {
                    type: 'object',
                    label: 'Link',
                    name: 'externalLink',
                    fields: [
                        {
                            type: 'rich-text',
                            label: 'Label',
                            name: 'label',
                            isBody: true,
                        },
                        {
                            type: 'string',
                            label: 'Link Url',
                            name: 'url',
                        },
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
        },
    ],
}
