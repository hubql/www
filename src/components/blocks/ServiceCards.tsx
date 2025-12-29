import { Cta } from '../templates/Cta'
import Image from 'next/image'
import Link from 'next/link'
import { Section } from '../kit/Section'
import { tinaField } from 'tinacms/dist/react'
import type { Template } from 'tinacms'
import type { PagesBlocksServiceCards } from '../../../tina/__generated__/types'
import * as LucideIcons from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

const kebabToPascal = (str: string): string => {
    return str
        .split('-')
        .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join('')
}

const extractIconName = (str: string): string => {
    return str.replace(/^<+/, '').replace(/>+/g, '').replace(/\/+/g, '').trim()
}

const getIcon = (iconName: string | undefined): LucideIcon | null => {
    if (!iconName) return null

    const icons = LucideIcons as unknown as Record<string, LucideIcon>
    const cleanedName = extractIconName(iconName)
    const trimmedName = cleanedName.trim()

    const variations = [
        trimmedName,
        kebabToPascal(trimmedName),
        trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1),
    ]

    for (const variation of variations) {
        if (icons[variation]) {
            return icons[variation]
        }
    }

    const iconKeys = Object.keys(icons)
    const lowerName = trimmedName.toLowerCase()
    const matchingIcon = iconKeys.find(
        (key) =>
            key.toLowerCase() === lowerName ||
            key.toLowerCase().replace(/-/g, '') === lowerName.replace(/-/g, '')
    )

    if (matchingIcon && icons[matchingIcon]) {
        return icons[matchingIcon]
    }

    return null
}

const getGridCols = (columns: number | undefined): string => {
    const cols = columns || 2
    const colMap: Record<number, string> = {
        2: 'lg:grid-cols-2',
        3: 'lg:grid-cols-3',
        4: 'lg:grid-cols-4',
    }
    return `grid grid-cols-1 ${
        colMap[cols] || colMap[2]
    } px-0 w-full py-4 gap-4 px-2`
}

export const ServiceCards = ({ data }: { data: PagesBlocksServiceCards }) => {
    const columns = (data as any).columns
    return (
        <Section
            title={
                data.title ??
                'Specialized in Collaboration and 3D Experiences on the Web.'
            }
            titleClassName="pt-20 text-[16px]"
            contentClassName={getGridCols(columns)}
            data-tina-field={tinaField(data, 'title')}
        >
            {data.serviceCards?.map((item: any, index: number) => {
                const hasLink = Boolean(
                    item?.link && item.link !== '#' && item.link.trim() !== ''
                )
                const key = 'servicecards-' + (item?.title ?? '') + index
                const wrapperClassName =
                    'lg:bg-background w-full transition-transform ease-in h-full flex flex-col justify-between'
                const cardClassName = `flex flex-col bg-[#171717] p-10 rounded-md flex-1 w-full items-end h-full ${
                    hasLink ? 'lg:hover:bg-neutral-800' : ''
                }`

                const cardContent = (
                    <span className={cardClassName}>
                        <span className="flex flex-col h-full w-full">
                            <span className="flex flex-row items-center gap-3 mb-2 max-w-[24x]">
                                {item?.image ? (
                                    <Image
                                        src={item.image}
                                        alt={item.title ?? 'Service logo'}
                                        width={28}
                                        height={28}
                                        data-tina-field={tinaField(
                                            item,
                                            'image'
                                        )}
                                    />
                                ) : item?.icon ? (
                                    (() => {
                                        const IconComponent = getIcon(item.icon)
                                        return IconComponent ? (
                                            <IconComponent
                                                className="w-5 h-5 text-primary"
                                                data-tina-field={tinaField(
                                                    item,
                                                    'icon'
                                                )}
                                            />
                                        ) : null
                                    })()
                                ) : null}
                                {item?.title && (
                                    <h3
                                        className="text-zinc-50 font-lexend text-[18px] mb-0"
                                        data-tina-field={tinaField(
                                            item,
                                            'title'
                                        )}
                                    >
                                        {item.title}
                                    </h3>
                                )}
                            </span>
                            {item?.description && (
                                <div
                                    className="prose text-neutral-400 font-lexend text-[14px]"
                                    data-tina-field={tinaField(
                                        item,
                                        'description'
                                    )}
                                >
                                    <TinaMarkdown content={item.description} />
                                </div>
                            )}
                        </span>

                        {hasLink && (
                            <span className="flex items-center gap-2 text-sm text-normal font-lexend cursor-pointer hover:opacity-80 w-full text-left">
                                Learn more{' '}
                                <ArrowRight className="w-4 h-4 text-primary" />
                            </span>
                        )}
                    </span>
                )

                if (hasLink) {
                    return (
                        <Link
                            key={key}
                            href={item.link}
                            className={wrapperClassName}
                            data-tina-field={tinaField(item)}
                        >
                            {cardContent}
                        </Link>
                    )
                }

                return (
                    <div
                        key={key}
                        className={wrapperClassName}
                        data-tina-field={tinaField(item)}
                    >
                        {cardContent}
                    </div>
                )
            })}
        </Section>
    )
}

export const serviceCardsBlockSchema: Template = {
    name: 'ServiceCards',
    label: 'Service Cards',
    ui: {
        previewSrc: '',
        defaultItem: {
            title: 'Powerful Open-Source Developer Tools, Built by Hubql.',
            columns: 2,
            serviceCards: [
                {
                    title: 'Collaborative Web Application',
                    description:
                        'We help founders bring collaboration to life online. From live dashboards to shared creative spaces, we design and build web applications that turn teamwork into a product advantage — fast, reliable, and ready to scale.',
                    link: '',
                    image: '',
                    icon: '',
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
            type: 'number',
            label: 'Columns',
            name: 'columns',
            ui: {
                description:
                    'Number of columns to display on large screens (2-4, default: 2)',
            },
        },
        {
            type: 'object',
            label: 'Service Cards',
            name: 'serviceCards',
            list: true,
            ui: {
                itemProps: (item) => ({
                    label: item?.title || 'Service Card',
                }),
            },
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
                },
                {
                    type: 'string',
                    label: 'Link',
                    name: 'link',
                },
                {
                    type: 'image',
                    label: 'Image',
                    name: 'image',
                },
                {
                    type: 'string',
                    label: 'Icon',
                    name: 'icon',
                    ui: {
                        description:
                            'Enter a Lucide icon name (e.g., ChartPie, chart-pie, <Glasses />, Code, Rocket, Zap, Database). Only used if no image is provided.',
                    },
                },
            ],
        },
    ],
}
