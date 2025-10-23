import clsx from 'clsx'
import Image from 'next/image'
import * as React from 'react'
import type { Template } from 'tinacms'
import { tinaField } from 'tinacms/dist/react'
import { PagesBlocksHero } from '../../../tina/__generated__/types'
import { Actions } from '../util/Actions'

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stopColor="#333" offset="20%" />
      <stop stopColor="#222" offset="50%" />
      <stop stopColor="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
    typeof window === 'undefined'
        ? Buffer.from(str).toString('base64')
        : window.btoa(str)

export const Hero = ({ data }: { data: PagesBlocksHero }) => {
    return (
        <div className="relative w-full overflow-hidden flex justify-center">
            <div className="w-full max-w-7xl mx-auto py-16 lg:pt-20 border-x border-zinc-100 dark:border-zinc-800">
                <div className="flex flex-col items-start text-left">
                    {data.title && (
                        <h1
                            data-tina-field={tinaField(data, 'title')}
                            className={`w-full relative text-5xl lg:text-7xl   px-4 lg:px-8 text-black dark:text-white`}
                        >
                            {data.title}
                        </h1>
                    )}
                    {data.paragraph && (
                        <p
                            data-tina-field={tinaField(data, 'paragraph')}
                            className={`text-lg max-w-xl px-4 lg:px-8 text-zinc-900 dark:text-zinc-400`}
                        >
                            {data.paragraph}
                        </p>
                    )}
                    {data.actions && (
                        <Actions
                            className="justify-center py-2   px-4 lg:px-8"
                            actions={data.actions}
                        />
                    )}
                    {data?.image?.src && (
                        <div className={'relative w-full mt-8'}>
                            <Image
                                src={data?.image?.src ?? ''}
                                alt={data?.image?.alt ?? ''}
                                width={1280}
                                height={720}
                                data-tina-field={tinaField(data, 'image')}
                                priority={true}
                                placeholder={`data:image/svg+xml;base64,${toBase64(
                                    shimmer(1280, 725)
                                )}`}
                                className={clsx(
                                    data.image?.border
                                        ? 'border border-zinc-700'
                                        : '',
                                    'rounded-lg '
                                )}
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    objectFit: 'contain',
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export const heroBlockSchema: Template = {
    name: 'hero',
    label: 'Hero',
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
                {
                    name: 'border',
                    label: 'Border?',
                    type: 'boolean',
                },
            ],
        },
    ],
}
