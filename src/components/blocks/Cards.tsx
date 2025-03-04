import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import type { Template } from 'tinacms'
import { tinaField } from 'tinacms/dist/react'
import {
    LandingsBlocksCards,
    PagesBlocksCards,
} from '../../../tina/__generated__/types'

export const Cards = ({
    data,
}: {
    data: PagesBlocksCards | LandingsBlocksCards
}) => {
    const items =
        data.cards &&
        data.cards.map((action, index) => {
            const hasLink = action?.link !== ''
            const colSpan = () => {
                switch (action?.colSpan) {
                    case 1:
                        return 'lg:col-span-1'
                    case 2:
                        return 'lg:col-span-2'
                    case 3:
                        return 'lg:col-span-3'
                    case 4:
                        return 'lg:col-span-4'
                    case 5:
                        return 'lg:col-span-5'
                    case 6:
                        return 'lg:col-span-6'
                    case 7:
                        return 'lg:col-span-7'
                    case 8:
                        return 'lg:col-span-8'
                    case 9:
                        return 'lg:col-span-9'
                    case 10:
                        return 'lg:col-span-10'
                    case 11:
                        return 'lg:col-span-11'
                    case 12:
                        return 'lg:col-span-12'
                    default:
                        return null
                }
            }
            return (
                <div className="contents" key={'card' + index}>
                    {hasLink && (
                        <Link
                            href={action?.link ?? ''}
                            className={clsx('w-full', colSpan())}
                        >
                            <div
                                className={clsx(
                                    'flex flex-col w-full gap-3 border border-transparent hover:border-zinc-700 rounded-lg p-4'
                                )}
                                data-tina-field={tinaField(
                                    data,
                                    'cards',
                                    index
                                )}
                            >
                                {action?.icon?.src && (
                                    <div className=" relative w-12 h-12 rounded-lg  bg-zinc-800 p-1">
                                        <Image
                                            fill={true}
                                            src={action?.icon?.src ?? ''}
                                            alt={action?.icon?.alt ?? ''}
                                            style={{
                                                maxWidth: '100%',
                                                height: 'auto',
                                            }}
                                        />
                                    </div>
                                )}
                                <h3 className="text-zinc-50 text-lg">
                                    {action?.title}
                                </h3>
                                <p className="text-zinc-400 text-lg">
                                    {action?.paragraph}
                                </p>
                            </div>
                        </Link>
                    )}
                    {!hasLink && (
                        <div
                            className={clsx(
                                colSpan(),
                                'flex flex-col w-full h-full gap-3 border border-zinc-700 rounded-lg p-4'
                            )}
                            key={'l' + index}
                            data-tina-field={tinaField(data, 'cards', index)}
                        >
                            {action?.icon?.src && (
                                <div className=" relative w-full rounded-lg aspect-video bg-zinc-800 p-1">
                                    <Image
                                        fill={true}
                                        src={action?.icon?.src ?? ''}
                                        alt={action?.icon?.alt ?? ''}
                                        className="object-contain p-4"
                                        style={{
                                            maxWidth: '100%',
                                            height: 'auto',
                                        }}
                                    />
                                </div>
                            )}
                            <h3 className="text-zinc-50 text-lg">
                                {action?.title}
                            </h3>
                            <p className="text-zinc-400 text-lg">
                                {action?.paragraph}
                            </p>
                        </div>
                    )}
                </div>
            )
        })

    const gridLayout =
        'w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'

    return (
        <div className="w-full border-y border-zinc-800">
            <div className="w-full max-w-7xl px-8 mx-auto py-28">
                <div className="flex h-full w-full items-center">
                    <div className={clsx(gridLayout)}>{items}</div>
                </div>
            </div>
        </div>
    )
}

export const cardsBlockSchema: Template = {
    name: 'cards',
    label: 'Cards',
    ui: {
        previewSrc: '',
    },
    fields: [
        {
            label: 'Cards',
            name: 'cards',
            type: 'object',
            list: true,
            ui: {
                defaultItem: {
                    title: 'Card title',
                    paragraph: 'Enter paragraph',
                    link: '',
                    colSpan: 4,
                },
                itemProps: (item) => ({ label: item.label }),
            },
            fields: [
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
                    label: 'colSpan',
                    name: 'colSpan',
                    type: 'number',
                },
            ],
        },
    ],
}
