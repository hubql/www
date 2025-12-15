import { Cta } from '../templates/Cta'
import Image from 'next/image'
import Link from 'next/link'
import { Section } from '../kit/Section'
import { tinaField } from 'tinacms/dist/react'
import type { Template } from 'tinacms'
import type { PagesBlocksServiceCards } from '../../../tina/__generated__/types'
import * as LucideIcons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const getIcon = (iconName: string | undefined): LucideIcon | null => {
    if (!iconName) return null
    const IconComponent = (
        LucideIcons as unknown as Record<string, LucideIcon>
    )[iconName]
    return IconComponent || null
}

const isImageUrl = (icon: string | undefined): boolean => {
    if (!icon) return false
    return icon.startsWith('/') || icon.startsWith('http') || icon.includes('.')
}

export const ServiceCards = ({ data }: { data: PagesBlocksServiceCards }) => {
    return (
        <Section
            title={
                data.title ??
                'Specialized in Collaboration and 3D Experiences on the Web.'
            }
            titleClassName="pt-20 text-[16px]"
            contentClassName="grid grid-cols-1 lg:grid-cols-2 px-0 w-full py-4 gap-4 px-2"
            data-tina-field={tinaField(data, 'title')}
        >
            {data.serviceCards?.map((item: any, index: number) => (
                <Link
                    href={item?.link ?? '#'}
                    key={'servicecards-' + (item?.title ?? '') + index}
                    className="lg:bg-background w-full transition-transform ease-in h-full flex flex-col justify-between"
                    data-tina-field={tinaField(item)}
                >
                    <span className="flex flex-col bg-[#171717] p-10 rounded-md lg:hover:bg-neutral-800 flex-1 w-full items-end h-full">
                        <span className="flex flex-col h-full">
                            <span className="flex flex-row items-center gap-3 mb-2">
                                {item?.icon &&
                                    (isImageUrl(item.icon) ? (
                                        <Image
                                            src={item.icon}
                                            alt={item.title ?? 'Service logo'}
                                            width={20}
                                            height={20}
                                            data-tina-field={tinaField(
                                                item,
                                                'icon'
                                            )}
                                        />
                                    ) : (
                                        (() => {
                                            const IconComponent = getIcon(
                                                item.icon
                                            )
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
                                    ))}
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
                                <p
                                    className="text-neutral-400 font-lexend text-[14px]"
                                    data-tina-field={tinaField(
                                        item,
                                        'description'
                                    )}
                                >
                                    {item.description}
                                </p>
                            )}
                        </span>

                        <Cta
                            ctaButtonText="Learn more"
                            ctaButtonUrl={'#'}
                            className="py-0 justify-start"
                            titleClassName="text-sm font-lexend"
                            containerClassName="justify-start items-start px-0"
                            blob={false}
                            inlineStyle
                        />
                    </span>
                </Link>
            ))}
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
            serviceCards: [
                {
                    title: 'Collaborative Web Application',
                    description:
                        'We help founders bring collaboration to life online. From live dashboards to shared creative spaces, we design and build web applications that turn teamwork into a product advantage — fast, reliable, and ready to scale.',
                    link: '/service/hubql-grid',
                    icon: '/customers/sc_arrow.png',
                },
                {
                    title: '3D Web Appplication',
                    description:
                        'We help startups bring products and experiences to life with interactive 3D on the web. From immersive product viewers to creative visualization tools, we design and build 3D web applications that turn complex ideas into engaging, high-impact user experiences',
                    link: '/service/api-client',
                    icon: '/customers/sc_3D.png',
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
                    type: 'string',
                    label: 'Icon',
                    name: 'icon',
                    ui: {
                        description:
                            'Enter an image URL/path (e.g., /image.png) or a Lucide icon name (e.g., Code, Rocket, Zap, Database)',
                    },
                },
            ],
        },
    ],
}
