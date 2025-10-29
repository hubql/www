import { motion } from 'framer-motion'
import { Button } from '../kit/Button'
import { tinaField } from 'tinacms/dist/react'
import type { Template } from 'tinacms'
import type { PagesBlocksAboveFold } from '../../../tina/__generated__/types'
import Image from 'next/image'

export const AboveFold = ({ data }: { data: PagesBlocksAboveFold }) => {
    return (
        <div className="flex flex-wrap items-start w-fit justify-start overflow-hidden relative z-0 w-full border-b border-border min-h-[500px]">
            <div className="relative z-10 w-full max-w-7xl mx-auto">
                <motion.div
                    className="py-32 relative w-fit h-fit flex flex-col z-10 px-8 h-full"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.1, ease: 'easeIn' }}
                >
                    {data.title && (
                        <h1
                            className="text-white text-[42px] font-bold text-left font-orbitron tracking-wide max-w-4xl mb-[16px]"
                            data-tina-field={tinaField(data, 'title')}
                        >
                            {data.title}
                        </h1>
                    )}

                    {data.paragraph && (
                        <p
                            className="max-w-2xl text-white-400 text-[16px] font-lexend"
                            data-tina-field={tinaField(data, 'paragraph')}
                        >
                            {data.paragraph}
                        </p>
                    )}

                    {(data.buttonOne || data.buttonTwo) && (
                        <div className="flex flex-wrap text-[14px] items-start w-fit gap-y-2 gap-x-2 justify-center p-[2px] rounded-sm mt-4">
                            {data.buttonOne && (
                                <Button
                                    href={data.buttonOne.link ?? '/'}
                                    data-tina-field={tinaField(
                                        data,
                                        'buttonOne'
                                    )}
                                    size="sm"
                                >
                                    {data.buttonOne.label}
                                </Button>
                            )}

                            {data.buttonTwo && (
                                <Button
                                    href={data.buttonTwo.link ?? '/'}
                                    data-tina-field={tinaField(
                                        data,
                                        'buttonTwo'
                                    )}
                                    size="sm"
                                    variant="grey"
                                >
                                    {data.buttonTwo.label}
                                </Button>
                            )}
                        </div>
                    )}
                </motion.div>
            </div>
            <div className="absolute inset-0 z-0">
                <Image
                    src="/home/hero-above-fold.svg"
                    alt="Above Fold"
                    fill
                    priority
                    className="object-cover"
                />
            </div>
        </div>
    )
}

export const aboveFoldBlockSchema: Template = {
    name: 'AboveFold',
    label: 'Above Fold',
    ui: {
        previewSrc: '',
        defaultItem: {
            title: 'We Build Your Ideas into Scalable Web Apps with Supabase.',
            paragraph:
                'Hubql specializes in Supabase development, creating collaboration platforms and 3D web experiences that help startups move fast—from prototype to launch.',
            buttonOne: {
                label: 'Start your project',
                link: '/contact',
            },
            buttonTwo: {
                label: 'Learn more',
                link: '/about',
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
            label: 'Paragraph',
            name: 'paragraph',
            ui: {
                component: 'textarea',
            },
        },
        {
            label: 'Button One',
            name: 'buttonOne',
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
        {
            label: 'Button Two',
            name: 'buttonTwo',
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
