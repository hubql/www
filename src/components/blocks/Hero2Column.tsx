import Image from 'next/image'
import * as React from 'react'
import type { Template } from 'tinacms'
import { tinaField } from 'tinacms/dist/react'
import { PagesBlocksHero2Column } from '../../../tina/__generated__/types'
import { Actions } from '../util/Actions'

export const Hero2Column = ({ data }: { data: PagesBlocksHero2Column }) => {
    return (
        <div className="relative w-full overflow-hidden flex justify-center  border-zinc-100 dark:border-zinc-800">
            <div className="w-full max-w-7xl px-8 mx-auto pt-32  grid lg:grid-cols-2 gap-16 ">
                <div className="w-full flex flex-col items-start text-left order-first justify-center">
                    {data.title &&
                        (data?.headlineLevel === 'h2' ? (
                            <h2
                                data-tina-field={tinaField(data, 'title')}
                                className={`w-full relative text-3xl lg:text-5xl lg:leading-normal leading-normal font-medium   text-black dark:text-white`}
                            >
                                {data.title}
                            </h2>
                        ) : (
                            <h1
                                data-tina-field={tinaField(data, 'title')}
                                className={`w-full relative text-3xl lg:text-5xl lg:leading-normal leading-normal font-semibold`}
                            >
                                {data.title}
                            </h1>
                        ))}
                    {data.paragraph && (
                        <p
                            data-tina-field={tinaField(data, 'paragraph')}
                            className={`text-lg text-zinc-400 max-w-3xl text-left`}
                        >
                            {data.paragraph}
                        </p>
                    )}
                    {data.actions && (
                        <Actions
                            className="justify-center py-2"
                            actions={data.actions}
                        />
                    )}
                </div>
                {data.image && (
                    <div
                        data-tina-field={tinaField(data.image, 'src')}
                        className="relative w-full flex justify-center mt-8"
                    >
                        <div className="w-full aspect-video min-h-[400px]">
                            <Image
                                width={544}
                                height={400}
                                src={data.image.src ?? ''}
                                aria-hidden="true"
                                alt={data.image.alt ?? ''}
                                className="max-h-[100%]"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export const hubqlDemoFileSchema: Template = {
    name: 'hubqlDemoFile',
    label: 'Hubql Demo File',
    ui: {
        previewSrc: '',
        defaultItem: {
            fileId: '',
        },
    },
    fields: [
        {
            type: 'string',
            label: 'File Id',
            name: 'fileId',
        },
    ],
}

export const hero2ColumnBlockSchema: Template = {
    name: 'hero2Column',
    label: 'Hero 2 Column',
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
            options: ['h1', 'h2'],
            label: 'Headline level',
            name: 'headlineLevel',
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
            label: 'Actions',
            name: 'actions',
            type: 'object',
            list: true,
            ui: {
                defaultItem: {
                    label: 'Action title',
                    link: '/',
                },
                itemProps: (item) => ({ label: item.label }),
            },
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
    ],
}
