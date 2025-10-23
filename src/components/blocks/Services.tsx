import { Section } from '../kit/Section'
import { BlurredBlob } from '../kit/BlurredBlob'
import { motion } from 'framer-motion'
import { Cta } from '../templates/Cta'
import type { Template } from 'tinacms'
import type { PagesBlocksServices } from '../../../tina/__generated__/types'
import { tinaField } from 'tinacms/dist/react'

export const Services = ({ data }: { data: PagesBlocksServices }) => {
    return (
        <Section
            title={data.title ?? 'Our Services'}
            className="divide-none"
            titleClassName="py-6"
            contentClassName="z-10 grid grid-cols-1 lg:grid-cols-1 gap-4 pb-12 px-2 pt-0 flex flex-col"
            delay={0}
            data-tina-field={tinaField(data, 'title')}
        >
            {data.servicesCards?.map((card, index) => (
                <motion.div
                    key={'cardService-' + index}
                    className="relative z-10 grid grid-cols-1 lg:grid-cols-2 bg-black/40 backdrop-blur-lg max-w-screen-lg !border border-neutral-800 mx-auto"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.2 + index * 0.2,
                        type: 'spring',
                        stiffness: 100,
                        damping: 10,
                    }}
                    data-tina-field={tinaField(card)}
                >
                    <div className="flex flex-col justify-center items-start p-8 h-full">
                        {card?.title && (
                            <h2
                                className="text-lg font-bold font-orbitron tracking-wide"
                                data-tina-field={tinaField(card, 'title')}
                            >
                                {card.title}
                            </h2>
                        )}

                        {card?.description && (
                            <p
                                className="text-neutral-400 text-base"
                                data-tina-field={tinaField(card, 'description')}
                            >
                                {card.description}
                            </p>
                        )}

                        <Cta
                            ctaButtonText={data.cta?.label ?? 'Contact Us'}
                            ctaButtonUrl={data.cta?.link ?? '/contact'}
                            className="py-0 justify-start"
                            titleClassName="text-lg font-bold font-orbitron tracking-wide"
                            containerClassName="justify-start items-start px-0"
                            blob={false}
                        />
                    </div>

                    {card?.list && (
                        <ul
                            className="flex flex-col gap-2 text-neutral-400 text-base list-disc p-8 h-full"
                            data-tina-field={tinaField(card, 'list')}
                        >
                            {card.list
                                .filter(Boolean)
                                .map((item, itemIndex) => (
                                    <li key={itemIndex}>{item}</li>
                                ))}
                        </ul>
                    )}
                </motion.div>
            ))}

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
            title: 'Our Services',
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
