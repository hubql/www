import { motion } from 'framer-motion'
import Image from 'next/image'
import * as React from 'react'
import type { Template } from 'tinacms'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { PagesBlocksTemplateApiReference } from '../../../tina/__generated__/types'
import { Button } from '../kit/Button'
import { SparklesCore } from '../kit/Sparkles'
import { Spotlight } from '../kit/Spotlight'

export const TemplateApiReference = ({
    data,
}: {
    data: PagesBlocksTemplateApiReference
}) => {
    return (
        <div className="w-full flex flex-col">
            <div className=" w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
                <div className="relative w-full h-[50vh] flex flex-col">
                    <Spotlight
                        className="-top-40 right-0 md:left-60 md:-top-20 z-0"
                        fill="white"
                    />
                    <SparklesCore
                        background="transparent"
                        minSize={0.2}
                        maxSize={0.8}
                        particleDensity={10}
                        className="absolute z-0 w-full h-full"
                        particleColor="#ffffff"
                    />
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                    <div className="relative w-full overflow-hidden flex justify-center">
                        <div className="w-full max-w-7xl mx-auto pt-16 lg:pt-48 pb-0 px-4 sm:px-8">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.3,
                                    duration: 0.8,
                                    ease: 'easeIn',
                                }}
                                className="relative flex flex-col gap-4 items-center justify-center px-4"
                            >
                                <div className="flex flex-col gap-2 items-center">
                                    <h1
                                        data-tina-field=""
                                        className="relative text-5xl md:text-6xl lg:text-7xl font-normal   text-black dark:text-white text-center"
                                    >
                                        {data.title}
                                    </h1>
                                    <p className="text-neutral-400 text-center mx-auto max-w-3xl">
                                        {data.paragraph}
                                    </p>
                                    <div className="flex flex-wrap items-center gap-y-4 gap-x-6 justify-center bg-neutral-900 p-[2px] rounded-sm">
                                        <Button
                                            href="https://cloud.hubql.com"
                                            size="md"
                                            icon="arrow"
                                            className="w-full lg:w-fit"
                                        >
                                            Try Hubql
                                        </Button>
                                        <Button
                                            href="https://go.hubql.com/www-home"
                                            size="md"
                                            icon="arrow"
                                            className="bg-neutral-900 w-full lg:w-fit"
                                        >
                                            Schedule a demo
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full px-4 my-64">
                <div className="h-full w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                    <div className="relative z-10 flex flex-col gap-32 items-center justify-center ">
                        {data.section?.map((section, index) => {
                            return (
                                <div
                                    key={'section' + index}
                                    className="w-full grid grid-cols-12 items-center justify-between px-4 mx-auto max-w-screen-2xl "
                                >
                                    <div className="col-start-1 col-end-13 lg:col-start-2 lg:col-end-6 w-full mx-auto flex justify-center">
                                        <h2 className="text-3xl text-left font-black !leading-normal">
                                            {section?.title}
                                        </h2>
                                    </div>
                                    <div className="col-start-1 col-end-13 lg:col-start-7 lg:col-end-13 w-full mx-auto flex flex-col justify-center items-end mb-4 gap-4">
                                        <div className="relative w-full h-full aspect-[6/4]">
                                            {section?.image && (
                                                <Image
                                                    src={
                                                        section?.image?.src ??
                                                        ''
                                                    }
                                                    alt={
                                                        section?.image?.alt ??
                                                        ''
                                                    }
                                                    className="mr-2 object-cover rounded-xl border border-neutral-700"
                                                    fill
                                                    sizes="100vw"
                                                />
                                            )}
                                        </div>
                                        <div className="w-full relative grid grid-cols-12 items-start justify-between ">
                                            <div className="col-start-1 col-end-13 md:col-start-1 md:col-end-8 lg:col-start-1 lg:col-end-9 w-full relative flex flex-row items-start justify-start gap-2">
                                                <div className="h-[22px] w-1 rounded-full bg-accent-400 mt-3" />
                                                <div className="prose text-neutral-300 text-lg w-full">
                                                    <TinaMarkdown
                                                        content={
                                                            section?.content
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            {section?.button && (
                                                <div className="col-start-1 col-end-13 md:col-start-9 md:col-end-13 lg:col-start-9 lg:col-end-13 flex justify-end">
                                                    <Button
                                                        href={
                                                            section?.button
                                                                ?.url ?? ''
                                                        }
                                                        size="md"
                                                        icon="arrow"
                                                        className="w-full lg:w-fit"
                                                    >
                                                        {section?.button?.label}
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const templateApiReferenceBlockSchema: Template = {
    name: 'templateApiReference',
    label: 'Template API Reference',
    ui: {
        previewSrc: '',
        defaultItem: {
            title: 'This Big Text is Totally Awesome',
            paragraph:
                'Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.',
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
            label: 'Section',
            name: 'section',
            type: 'object',
            list: true,
            fields: [
                {
                    label: 'Title',
                    name: 'title',
                    type: 'string',
                },
                {
                    label: 'Content',
                    name: 'content',
                    type: 'rich-text',
                    isBody: true,
                },
                {
                    type: 'object',
                    label: 'Image',
                    name: 'image',
                    fields: [
                        {
                            name: 'src',
                            label: 'Image Source',
                            type: 'image',
                        },
                        {
                            name: 'alt',
                            label: 'Alt Text',
                            type: 'string',
                        },
                    ],
                },
                {
                    type: 'object',
                    label: 'Button',
                    name: 'button',
                    fields: [
                        {
                            name: 'label',
                            label: 'Button Label',
                            type: 'string',
                        },
                        {
                            name: 'url',
                            label: 'Button Url',
                            type: 'string',
                        },
                    ],
                },
            ],
        },
    ],
}
