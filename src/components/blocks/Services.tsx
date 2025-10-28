import { Section } from '../kit/Section'
import { BlurredBlob } from '../kit/BlurredBlob'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../kit/Accordion'
import { Cta } from '../templates/Cta'
import type { Template } from 'tinacms'
import type { PagesBlocksServices } from '../../../tina/__generated__/types'
import { tinaField } from 'tinacms/dist/react'

export const Services = ({ data }: { data: PagesBlocksServices }) => {
    return (
        <Section
            title={data.title ?? 'What We Build for Founders and Startups'}
            className="divide-none"
            titleClassName="py-6 text-[16px] text-normal"
            contentClassName="z-10 flex flex-col gap-4 pb-12 px-2 pt-0"
            delay={0}
            data-tina-field={tinaField(data, 'title')}
        >
            <Accordion type="single" collapsible className="w-full space-y-4">
                {data.servicesCards?.map((card, index) => (
                    <AccordionItem
                        key={'service-' + index}
                        value={'service-' + index}
                        className="relative z-10 bg-[#171717] max-w-screen-lg mx-auto rounded"
                        data-tina-field={tinaField(card)}
                    >
                        <AccordionTrigger className="py-4 px-8 flex justify-between items-center">
                            <h3 className="text-[16px] font-normal font-lexend break-words m-0">
                                {card?.title}
                            </h3>
                        </AccordionTrigger>

                        <AccordionContent>
                            <div className="flex flex-col lg:flex-row gap-8 px-8 py-2 pb-4">
                                <div className="flex-1 flex flex-col gap-2">
                                    {card?.description && (
                                        <p
                                            className="text-neutral-400 text-lexend text-[14px]"
                                            data-tina-field={tinaField(card, 'description')}
                                        >
                                            {card?.description}
                                        </p>
                                    )}
                                    <Cta
                                        ctaButtonText={data.cta?.label ?? 'Contact Us'}
                                        ctaButtonUrl={data.cta?.link ?? '/contact'}
                                        className="py-0 justify-start"
                                        titleClassName="text-md font-bol4d font-lexend"
                                        containerClassName="justify-start items-start px-0"
                                        blob={false}
                                    />
                                </div>

                                {card?.list && (
                                    <ul
                                        className="flex-1 flex flex-col gap-0 text-neutral-400 text-lexend list-disc"
                                        data-tina-field={tinaField(card, 'list')}
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

            <BlurredBlob className="-right-60 -bottom-60" />
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
