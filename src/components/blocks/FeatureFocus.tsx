import clsx from 'clsx'
import Image from 'next/image'
import * as React from 'react'
import type { Template } from 'tinacms'
import { tinaField } from 'tinacms/dist/react'
import { PagesBlocksFeaturefocus } from '../../../tina/__generated__/types'
import { Chevron } from '../icons/Chevron'

export const FeatureFocus = ({ data }: { data: PagesBlocksFeaturefocus }) => {
    const items =
        data.actions &&
        data.actions.map((action, index) => {
            const hasLink = action?.link !== ''
            const content = (
                <div
                    className="flex flex-col w-full  gap-3 border border-transparent hover:border-zinc-700 rounded-lg p-4"
                    data-tina-field={tinaField(data, 'actions', index)}
                >
                    {action?.icon?.src && (
                        <div className=" relative w-8 h-8 rounded-lg  bg-zinc-800 p-1">
                            <Image
                                fill={true}
                                src={action?.icon?.src ?? ''}
                                alt={action?.icon?.alt ?? ''}
                                priority={false}
                                quality={100}
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                        </div>
                    )}
                    <div className="flex gap-1 items-center">
                        <h3 className="text-zinc-50 text-lg mb-0">
                            {action?.title}
                        </h3>
                        <div className="w-5 h-5 flex items-center justify-center">
                            <Chevron className="stroke-accent-500 w-4 h-4" />
                        </div>
                    </div>
                    <p className="text-zinc-400 text-lg">{action?.paragraph}</p>
                </div>
            )
            if (hasLink) {
                return (
                    <a
                        key={'feature-focus' + index}
                        href={action?.link ?? ''}
                        className="w-full"
                    >
                        {content}
                    </a>
                )
            }
            return (
                <div key={'feature-focus' + index} className="w-full">
                    {content}
                </div>
            )
        })

    const gridLayout =
        data.actions &&
        data.actions.length > 2 &&
        'grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'
    const cardLayout =
        data.actions &&
        data.actions.length < 2 &&
        'flex flex-col gap-8 items-center'

    return (
        <div className="w-full max-w-7xl px-8 mx-auto pt-16 pb-28">
            <div className="grid lg:grid-cols-2 gap-8 ">
                <div
                    className={clsx(
                        data.cardTitle === null
                            ? ''
                            : 'border border-zinc-700 ',
                        'rounded-lg flex flex-col justify-center items-center lg:w-full md:w-[590px] w-full mx-auto'
                    )}
                >
                    {data.image !== null && (
                        <div
                            className={clsx(
                                data.cardTitle === null
                                    ? 'aspect-square'
                                    : 'aspect-video',
                                'relative w-full '
                            )}
                        >
                            <Image
                                height={332}
                                width={590}
                                src={data.image?.src ?? ''}
                                alt={data.image?.alt ?? ''}
                                data-tina-field={tinaField(data, 'image')}
                                quality={100}
                                priority={false}
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                        </div>
                    )}
                    {data.cardTitle && (
                        <div className="w-full border-t border-zinc-700 pt-8 pb-4 px-8 flex flex-col gap-1 items-start">
                            <div className="flex gap-1 items-center">
                                <h2
                                    className="text-lg mb-0"
                                    data-tina-field={tinaField(
                                        data,
                                        'cardTitle'
                                    )}
                                >
                                    {data.cardTitle}
                                </h2>
                                <div className="w-5 h-5 flex items-center justify-center">
                                    <Chevron className="stroke-accent-500 w-4 h-4" />
                                </div>
                            </div>
                            <p
                                className="text-lg text-zinc-400"
                                data-tina-field={tinaField(
                                    data,
                                    'cardParagraph'
                                )}
                            >
                                {data.cardParagraph}
                            </p>
                        </div>
                    )}
                </div>
                <div className="flex h-full w-full items-center">
                    <div className={clsx(cardLayout, gridLayout)}>{items}</div>
                </div>
            </div>
        </div>
    )
}

export const featureFocusBlockSchema: Template = {
    name: 'featurefocus',
    label: 'FeatureFocus',
    ui: {
        previewSrc: '',
        defaultItem: {
            title: 'This Big Text is Totally Awesome',
            paragraph:
                'Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.',
        },
    },
    fields: [
        {
            type: 'string',
            label: 'Card Title',
            name: 'cardTitle',
        },
        {
            type: 'string',
            label: 'Card Paragraph',
            name: 'cardParagraph',
            ui: {
                component: 'textarea',
            },
        },
        {
            label: 'Actions',
            name: 'actions',
            type: 'object',
            list: true,
            ui: {
                defaultItem: {
                    title: 'Action title',
                    paragraph: 'Enter paragraph',
                    link: '/',
                },
                itemProps: (item) => ({ label: item.label }),
            },
            fields: [
                {
                    label: 'Title',
                    name: 'title',
                    type: 'string',
                },
                {
                    label: 'Paragraph',
                    name: 'paragraph',
                    type: 'string',
                    ui: {
                        component: 'textarea',
                    },
                },
                {
                    label: 'Link',
                    name: 'link',
                    type: 'string',
                },
                {
                    type: 'object',
                    label: 'Icon',
                    name: 'icon',
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
}
