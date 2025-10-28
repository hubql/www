import { Section } from '../kit/Section'
import { motion } from 'framer-motion'
import { tinaField } from 'tinacms/dist/react'
import type { Template } from 'tinacms'
import type { PagesBlocksTestimonials } from '../../../tina/__generated__/types'

export const Testimonials = ({
    data,
}: {
    data: PagesBlocksTestimonials
}) => {
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

            <div className="flex flex-row gap-4 overflow-x-auto items-center mt-2">
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
    }
}) => {
    return (
        <div className="flex flex-col gap-2 bg-neutral-900 p-6 pb-0 w-[334px] text-neutral-400 justify-center">
            {item.text && (
                <p
                    className="hyphens-auto text-sm"
                    data-tina-field={tinaField(item, 'text')}
                >
                    {item.text}
                </p>
            )}

            {(item.name || item.company) && (
                <div className="flex flex-row items-center gap-2 text-white text-sm">
                    <p data-tina-field={tinaField(item, 'name')}>
                        {item.name} {item.company && `@ ${item.company}`}
                    </p>
                </div>
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
            title: 'Our results',
            testimonials: [
                {
                    name: 'Dan Starns',
                    company: 'rconnect.tech',
                    text: 'Fantastic work! Hubql Labs delivered a stunning logo and website. Highly recommended for top-notch design and implementation!',
                },
                {
                    name: 'Patrick Wings',
                    company: 'GrowSaaS',
                    text: 'I highly recommend Hubql Labs for their fast and perfect execution in redesigning and implementing our website. They delivered a design and software that perfectly captured our brand essence, contributing significantly to our business success.',
                },
                {
                    name: 'Darius',
                    company: 'Fintech',
                    text: 'Hubql Labs has been an excellent long-term partner for us to build APIs and backend systems.',
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
                    label: item?.name ? `${item.name} (${item.company})` : 'Testimonial',
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
            ],
        },
    ],
}