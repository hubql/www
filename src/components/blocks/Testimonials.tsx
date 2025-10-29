import { Section } from '../kit/Section'
import { motion } from 'framer-motion'
import { tinaField } from 'tinacms/dist/react'
import Image from 'next/image'
import type { Template } from 'tinacms'
import type { PagesBlocksTestimonials } from '../../../tina/__generated__/types'

export const Testimonials = ({ data }: { data: PagesBlocksTestimonials }) => {
    return (
        <Section
            title={data.title ?? 'Our Results'}
            className="!divide-none"
            titleClassName="pt-20 text-[18px] text-normal font-thin"
            contentClassName="!flex !flex-col justify-center items-center !divide-none pb-24"
            data-tina-field={tinaField(data, 'title')}
        >
            {data.subtitle && (
                <p
                    className="text-neutral-400 text-[14px] max-w-[300px] text-center mx-auto"
                    data-tina-field={tinaField(data, 'subtitle')}
                >
                    {data.subtitle}
                </p>
            )}

            <div className="flex xl:flex-row flex-col gap-4 items-center mt-2">
                {data.testimonials?.map((testimonial: any, index: number) => (
                    <motion.div
                        key={`testimonial-${testimonial?.name}-${index}`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.3 + index * 0.1,
                            type: 'spring',
                            stiffness: 100,
                            damping: 10,
                        }}
                    >
                        <Testimonial item={testimonial} />
                    </motion.div>
                ))}
            </div>
        </Section>
    )
}

const Testimonial = ({
    item,
}: {
    item: {
        name?: string
        company?: string
        text?: string
        image?: string
    }
}) => {
    return (
        <div className="flex flex-col gap-3 bg-neutral-900 p-4 w-[400px] text-neutral-400">
            {item.image && (
                <div className="w-14 h-14 relative">
                    <Image
                        src={item.image}
                        alt={item.name ?? 'Testimonial image'}
                        fill
                        className="object-cover"
                        data-tina-field={tinaField(item, 'image')}
                    />
                </div>
            )}

            {item.text && (
                <p
                    className="hyphens-auto text-sm m-0 py-2"
                    data-tina-field={tinaField(item, 'text')}
                >
                    {item.text}
                </p>
            )}

            {(item.name || item.company) && (
                <p
                    className="text-white text-sm m-0"
                    data-tina-field={tinaField(item, 'name')}
                >
                    {item.name}
                    {''}
                    {item.company && (
                        <>
                            <span className="text-[#3ECF8E]"> @</span>{' '}
                            {item.company}
                        </>
                    )}
                </p>
            )}
        </div>
    )
}

export const testimonialsBlockSchema: Template = {
    name: 'Testimonials',
    label: 'Testimonials',
    ui: {
        previewSrc: '',
        defaultItem: {
            title: 'Our Results',
            testimonials: [
                {
                    name: 'Dan Starns',
                    company: 'rconnect.tech',
                    text: 'Fantastic work! Hubql Labs delivered a stunning logo and website. Highly recommended!',
                    image: '',
                },
                {
                    name: 'Patrick Wings',
                    company: 'GROWSaaS',
                    text: 'I highly recommend Hubql Labs for their fast and perfect execution.',
                    image: '',
                },
                {
                    name: 'Darius',
                    company: 'Fintech',
                    text: 'Hubql Labs has been an excellent long-term partner for us.',
                    image: '',
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
            type: 'string',
            label: 'Subtitle',
            name: 'subtitle',
            ui: {
                component: 'textarea',
            },
        },
        {
            type: 'object',
            label: 'Testimonials',
            name: 'testimonials',
            list: true,
            ui: {
                itemProps: (item) => ({
                    label: item?.name
                        ? `${item.name} (${item.company})`
                        : 'Testimonial',
                }),
            },
            fields: [
                {
                    type: 'string',
                    label: 'Name',
                    name: 'name',
                },
                {
                    type: 'string',
                    label: 'Company',
                    name: 'company',
                },
                {
                    type: 'string',
                    label: 'Text',
                    name: 'text',
                    ui: { component: 'textarea' },
                },
                {
                    type: 'image',
                    label: 'Image',
                    name: 'image',
                },
            ],
        },
    ],
}
