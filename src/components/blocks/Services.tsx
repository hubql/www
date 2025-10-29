import { Section } from '../kit/Section'
import { BlurredBlob } from '../kit/BlurredBlob'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../kit/Accordion'
import { Cta } from '../templates/Cta'
import type { Template } from 'tinacms'
import type { PagesBlocksServices } from '../../../tina/__generated__/types'
import { tinaField } from 'tinacms/dist/react'
import * as LucideIcons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const getIcon = (iconName: string | undefined): LucideIcon | null => {
    if (!iconName) return null
    const IconComponent = (
        LucideIcons as unknown as Record<string, LucideIcon>
    )[iconName]
    return IconComponent || null
}

export const Services = ({ data }: { data: PagesBlocksServices }) => {
    return (
        <Section
            title={data.title ?? 'What We Build for Founders and Startups'}
            className="divide-none"
            titleClassName="pt-32 pb-2 text-[16px] text-normal font-thin"
            contentClassName="z-10 flex flex-col gap-4 pb-12 px-2"
            delay={0}
            data-tina-field={tinaField(data, 'title')}
        >
            {data.subtitle && (
                <p
                    className="text-neutral-400 text-[14px] max-w-md text-center mx-auto"
                    data-tina-field={tinaField(data, 'subtitle')}
                >
                    {data.subtitle}
                </p>
            )}

            <Accordion type="single" collapsible className="w-full">
                {data.servicesCards?.map((card, index) => (
                    <AccordionItem
                        key={'service-' + index}
                        value={'service-' + index}
                        className="relative z-10 bg-[#171717] hover:bg-neutral-800 max-w-[1240px] mx-auto rounded"
                        data-tina-field={tinaField(card)}
                    >
                        <AccordionTrigger className="py-6 px-8 flex justify-between items-center">
                            <div className="flex items-center gap-8">
                                {card?.icon &&
                                    (() => {
                                        const IconComponent = getIcon(card.icon)
                                        return IconComponent ? (
                                            <IconComponent
                                                className="w-5 h-5 text-primary"
                                                data-tina-field={tinaField(
                                                    card,
                                                    'icon'
                                                )}
                                            />
                                        ) : null
                                    })()}
                                <h3 className="text-[18px] font-normal font-lexend break-words m-0">
                                    {card?.title}
                                </h3>
                            </div>
                        </AccordionTrigger>

                        <AccordionContent>
                            <div className="flex flex-col lg:flex-row gap-8 px-8 pb-8">
                                <div className="flex-1 flex flex-col gap-10">
                                    {card?.description && (
                                        <p
                                            className="text-neutral-400 text-lexend text-[14px]"
                                            data-tina-field={tinaField(
                                                card,
                                                'description'
                                            )}
                                        >
                                            {card?.description}
                                        </p>
                                    )}
                                    <Cta
                                        ctaButtonText={
                                            data.cta?.label ?? 'Contact Us'
                                        }
                                        ctaButtonUrl={
                                            data.cta?.link ?? '/contact'
                                        }
                                        className="py-0 justify-start text-normal"
                                        titleClassName="text-md font-bol4d font-lexend"
                                        containerClassName="justify-start items-start px-0"
                                        blob={false}
                                        inlineStyle
                                    />
                                </div>

                                {card?.list && (
                                    <ul
                                        className="flex-1 flex flex-col gap-0 text-neutral-400 text-lexend list-disc"
                                        data-tina-field={tinaField(
                                            card,
                                            'list'
                                        )}
                                    >
                                        {card?.list
                                            .filter(Boolean)
                                            .map((item, itemIndex) => (
                                                <li key={itemIndex}>{item}</li>
                                            ))}
                                    </ul>
                                )}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </Section>
    )
}

export const servicesBlockSchema: Template = {
    name: 'Services',
    label: 'Services',
    ui: {
        previewSrc: '',
        defaultItem: {
            title: 'What We Build for Founders and Startups',
            subtitle:
                'We help startups and founders by building innovative solutions that scale and make an impact.',
            servicesCards: [
                {
                    title: 'Research & Development',
                    description:
                        'We explore, prototype, and build cutting-edge software solutions that push the boundaries of technology.',
                    list: [
                        'Rapid prototyping and proof-of-concept development for new product ideas.',
                        'Exploration of emerging technologies such as AI, Web3, and automation.',
                        'Technical feasibility studies and software architecture validation.',
                        'Building internal tools and experimental software products.',
                    ],
                    icon: 'Code',
                },
                {
                    title: 'Web Development',
                    description:
                        'We build high-quality, modern web applications tailored to your business needs.',
                    list: [
                        'Custom web applications using Next.js, React, and Tailwind CSS.',
                        'Backend development with Node.js, Supabase, and AWS.',
                        'API development and third-party integrations for seamless connectivity.',
                        'Performance optimization and security best practices for scalable web apps.',
                    ],
                    icon: 'Globe',
                },
            ],
            cta: {
                label: 'Contact Us',
                link: '/contact',
            },
        },
    },
    fields: [
        {
            type: 'string',
            label: 'Title',
            name: 'title',
        },
        {
            type: 'string',
            label: 'Subtitle',
            name: 'subtitle',
            ui: {
                component: 'textarea',
            },
        },
        {
            label: 'Service Cards',
            name: 'servicesCards',
            type: 'object',
            list: true,
            ui: {
                itemProps: (item) => ({
                    label: item?.title || 'Service Card',
                }),
            },
            fields: [
                {
                    label: 'Title',
                    name: 'title',
                    type: 'string',
                },
                {
                    label: 'Description',
                    name: 'description',
                    type: 'string',
                    ui: {
                        component: 'textarea',
                    },
                },
                {
                    label: 'List Items',
                    name: 'list',
                    type: 'string',
                    list: true,
                },
                {
                    type: 'string',
                    label: 'Icon',
                    name: 'icon',
                    ui: {
                        description:
                            'Enter a Lucide icon name (e.g., Code, Rocket, Zap, Database)',
                    },
                },
            ],
        },
        {
            label: 'CTA',
            name: 'cta',
            type: 'object',
            fields: [
                {
                    label: 'Label',
                    name: 'label',
                    type: 'string',
                },
                {
                    label: 'Link',
                    name: 'link',
                    type: 'string',
                },
            ],
        },
    ],
}
