import clsx from 'clsx'
import * as React from 'react'
import type { Template } from 'tinacms'
import { tinaField } from 'tinacms/dist/react'
import {
    LandingsBlocksAboutCards,
    PagesBlocksAboutCards,
} from '../../../tina/__generated__/types'

export const AboutCards = ({
    data,
    blockIndex,
}: {
    data: PagesBlocksAboutCards | LandingsBlocksAboutCards
    blockIndex: number
}) => {
    const items =
        data.cards &&
        data.cards.map((card, index) => {
            const colSpan = () => {
                switch (card?.colSpan) {
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
                <div
                    key={'about-card' + blockIndex + index}
                    className={clsx(
                        'w-full border-accent-500 border-l-4 col-span-12',
                        colSpan()
                    )}
                >
                    <div>
                        <div
                            className={clsx(
                                'flex flex-col w-full gap-3 border border-transparent rounded-lg p-4'
                            )}
                            data-tina-field={tinaField(data, 'cards', index)}
                        >
                            <div>
                                <p className="text-zinc-50 text-2xl">
                                    {card?.cards?.label}
                                </p>
                                <p className="text-zinc-400 text-4xl mb-0">
                                    {card?.cards?.number}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

    const gridLayout =
        'w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'

    return (
        <div className="w-full max-w-7xl px-8 mx-auto py-28">
            <div className="max-w-2xl mx-auto pb-16">
                <h1 className="text-zinc-50 text-4xl text-center">
                    {data?.title}
                </h1>
                <p className="text-zinc-400 text-xl text-center">
                    {data?.paragraph}
                </p>
            </div>
            <div className="flex h-full w-full items-center">
                <div className={clsx(gridLayout)}>{items}</div>
            </div>
        </div>
    )
}

export const aboutCardsBlockSchema: Template = {
    name: 'aboutCards',
    label: 'About Cards',
    ui: {
        previewSrc: '',
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
            label: 'Cards',
            name: 'cards',
            type: 'object',
            list: true,
            ui: {
                defaultItem: {
                    title: 'Card title',
                    paragraph: 'Enter paragraph',
                    colSpan: 3,
                },
                itemProps: (item) => ({ label: item.label }),
            },
            fields: [
                {
                    type: 'object',
                    label: 'cards',
                    name: 'cards',
                    fields: [
                        {
                            label: 'Label',
                            name: 'label',
                            type: 'string',
                        },
                        {
                            label: 'Number',
                            name: 'number',
                            type: 'string',
                        },
                    ],
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
