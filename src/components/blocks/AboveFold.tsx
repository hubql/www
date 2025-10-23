import { motion } from 'framer-motion'
import { HeroBg } from '../animation/HeroBg'
import { Button } from '../kit/Button'
import { tinaField } from 'tinacms/dist/react'
import type { Template } from 'tinacms'
import type { PagesBlocksAboveFold } from '../../../tina/__generated__/types'

export const AboveFold = ({ data }: { data: PagesBlocksAboveFold }) => {
    return (
        <div className="flex flex-wrap items-start w-fit gap-y-2 gap-x-2 justify-start p-[2px] rounded-sm mt-4 w-full overflow-hidden relative z-0">
            <motion.div
                className="pt-24 pb-24 absolute top-0 left-0 lg:relative w-fit h-fit flex flex-col z-10 px-8 max-lg:bg-black/10 max-lg:backdrop-blur-sm h-full"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.1, ease: 'easeIn' }}
            >
                {data.title && (
                    <h1
                        className="text-white text-3xl lg:text-5xl font-bold lg:font-medium text-left font-orbitron tracking-wide max-w-4xl"
                        data-tina-field={tinaField(data, 'title')}
                    >
                        {data.title}
                    </h1>
                )}

                {data.paragraph && (
                    <p
                        className="max-w-xl text-neutral-400 text-base lg:text-xl"
                        data-tine-field={tinaField(data, 'paragraph')}
                    >
                        {data.paragraph}
                    </p>
                )}

                {data.button && (
                    <div className="flex flex-wrap items-start w-fit gap-y-2 gap-x-2 justify-center p-[2px] rounded-sm mt-4">
                        <Button
                            href={data.button.link ?? '/'}
                            icon={'arrow'}
                            data-tina-field={tinaField(data, 'button')}
                        >
                            {data.button.label}
                        </Button>
                    </div>
                )}
            </motion.div>
            <HeroBg />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 bottom-[0] px-0 w-full lg:divide-x divide-neutral-800 border-0 border-neutral-800"></div>
        </div>
    )
}

export const aboveFoldBlockSchema: Template = {
    name: 'AboveFold',
    label: 'Above Fold',
    ui: {
        previewSrc: '',
        defaultItem: {
            title: 'Intelligent Software Solutions for Fast-Moving Companies',
            paragraph:
                'Hubql is a software services company delivering excellent web applications, APIs, and open-source tools. We help fast-moving teams build software with precision.',
            button: {
                label: 'Build with us',
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
            label: 'Paragraph',
            name: 'paragraph',
            ui: {
                component: 'textarea',
            },
        },
        {
            label: 'Button',
            name: 'button',
            type: 'object',
            fields: [
                {
                    label: 'label',
                    name: 'label',
                    type: 'string',
                },

                {
                    label: 'link',
                    name: 'link',
                    type: 'string',
                },
            ],
        },
    ],
}
