import clsx from 'clsx'
import Image from 'next/image'
import * as React from 'react'
import type { Template } from 'tinacms'
import { tinaField } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import type { PagesBlocksFeaturefocusSimple } from '../../../tina/__generated__/types'
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

export const FeatureFocusSimple = ({
    data,
}: {
    data: PagesBlocksFeaturefocusSimple
}) => {
    const markdown = data.richtext && data.richtext !== ''
    return (
        <div className=" border-t border-zinc-800">
            <div className="w-full max-w-7xl mx-auto lg:px-0 overflow-hidden xl:overflow-visible">
                <div
                    className={clsx(
                        'grid lg:grid-cols-12 gap-8 py-32 border-zinc-100 dark:border-zinc-800',
                        data.imageSide ? 'border-l' : 'border-r'
                    )}
                >
                    <div
                        className={clsx(
                            'rounded-lg flex flex-col  col-span-1 lg:col-span-7',
                            data.imageSide
                                ? 'order-last'
                                : 'order-last lg:order-first',
                            data.image?.imageBorder
                                ? 'border border-zinc-700'
                                : 'border-none'
                        )}
                    >
                        <div className={clsx('relative aspect-video w-full')}>
                            <Image
                                fill={true}
                                src={data.image?.src ?? ''}
                                className={clsx(
                                    data.image?.imageSize
                                        ? 'object-contain p-2'
                                        : 'object-cover',
                                    'h-full w-full'
                                )}
                                alt={data.image?.alt ?? ''}
                                data-tina-field={tinaField(data, 'image')}
                                placeholder={`data:image/svg+xml;base64,${toBase64(
                                    shimmer(900, 600)
                                )}`}
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                        </div>
                    </div>
                    <div
                        className={clsx(
                            'flex h-full w-full items-start flex-col justify-center gap-1 col-span-1 lg:col-span-5 px-4 lg:px-8 '
                        )}
                    >
                        <h3
                            className="text-4xl   text-black dark:text-white"
                            data-tina-field={tinaField(data, 'title')}
                        >
                            {data.title}
                        </h3>
                        {data.paragraph && (
                            <p
                                className="text-lg text-zinc-900 dark:text-zinc-400"
                                data-tina-field={tinaField(data, 'paragraph')}
                            >
                                {data.paragraph}
                            </p>
                        )}
                        {data.richtext && (
                            <div
                                className={
                                    'w-full max-w-full prose prose-h1:text-1xl prose-h1:leading-normal prose-headings:text-zinc-50 prose-p:text-zinc-400 prose-p:text-sans prose-p:mb-1 prose-li:text-sans propse-a:text-sans prose-li:text-zinc-400 prose-blockquote:text-zinc-400 prose-blockquote:text-lg prose-blockquote:leading-loose prose-blockquote:font-normal prose-p:leading-normal prose-strong:text-white'
                                }
                                data-tina-field={tinaField(data, 'richtext')}
                            >
                                <TinaMarkdown content={data.richtext} />
                            </div>
                        )}
                        {data.actions && (
                            <Actions
                                className="justify-center py-2"
                                actions={data.actions}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const featureFocusSimpleBlockSchema: Template = {
    name: 'featurefocusSimple',
    label: 'FeatureFocusSimple',
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
            type: 'rich-text',
            label: 'rich text',
            name: 'richtext',
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
            ui: {
                defaultItem: {
                    label: 'image',
                    src: '/blog-placeholder-2.jpg',
                    imageSize: false,
                    imageBorder: true,
                },
            },
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
                    type: 'boolean',
                    label: 'Fit image to box',
                    name: 'imageSize',
                },
                {
                    type: 'boolean',
                    label: 'border?',
                    name: 'imageBorder',
                },
            ],
        },
        {
            type: 'boolean',
            label: 'Image on the Right',
            name: 'imageSide',
        },
    ],
}
