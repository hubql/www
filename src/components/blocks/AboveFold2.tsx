import { motion } from 'framer-motion'
import { Button } from '../kit/Button'
import { tinaField } from 'tinacms/dist/react'
import type { Template } from 'tinacms'
import type { PagesBlocksAboveFold2 } from '../../../tina/__generated__/types'
import Image from 'next/image'

export const AboveFold2 = ({ data }: { data: PagesBlocksAboveFold2 }) => {
    return (
        <div className="flex flex-wrap items-start w-fit justify-start overflow-hidden relative z-0 w-full">
            <div className="relative z-10 w-full max-w-7xl mx-auto">
                <div className="w-full flex flex-col items-center justify-center gap-0">
                    <div className="w-full h-full flex items-center justify-center col-span-2">
                        <motion.div
                            className="lg:pt-32 lg:pb-24 pt-12 pb-8 relative w-fit h-fit flex flex-col z-10 lg:px-8 px-2 h-full lg:items-center justify-center"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.2,
                                delay: 0.1,
                                ease: 'easeIn',
                            }}
                        >
                            {data.tag && (
                                <div
                                    className="text-[14px] font-orbitron uppercase font-black  text-primary mb-4 lg:mb-8 tracking-widest"
                                    data-tina-field={tinaField(data, 'tag')}
                                >
                                    {data.tag}
                                </div>
                            )}
                            {data.title && (
                                <h1
                                    className="text-white text-[40px] font-bold lg:text-center font-lexend max-w-4xl mb-[16px]"
                                    data-tina-field={tinaField(data, 'title')}
                                >
                                    {data.title}
                                </h1>
                            )}

                            {data.paragraph && (
                                <p
                                    className="max-w-2xl text-neutral-400 font-lexend lg:text-center"
                                    data-tina-field={tinaField(
                                        data,
                                        'paragraph'
                                    )}
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
                </div>
            </div>
        </div>
    )
}

export const aboveFoldBlockSchema2: Template = {
    name: 'AboveFold2',
    label: 'Above Fold 2',
    ui: {
        previewSrc: '',
        defaultItem: {
            title: 'We Build Your Ideas into Scalable Web Apps with Supabase.',
            paragraph:
                'Hubql specializes in Supabase development, creating collaboration platforms and 3D web experiences that help startups move fast—from prototype to launch.',
            tag: 'Supabase Development',
            buttonOne: {
                label: 'Book a Call',
                link: '/contact',
            },
            buttonTwo: {
                label: 'Our Work',
                link: '/portfolio',
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
            type: 'string',
            label: 'Tag',
            name: 'tag',
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
