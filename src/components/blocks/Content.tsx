import clsx from 'clsx'
import type { Template } from 'tinacms'
import { tinaField } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import type { PagesBlocksContent } from '../../../tina/__generated__/types'
import { Button } from '../kit/Button'
import PricingTable from '../util/PricingTable'

const components = {
    Button: (props: { label: string | undefined; link: string }) => {
        return (
            <Button href={props.link ?? ''} icon="arrow">
                {props.label ?? ''}
            </Button>
        )
    },
    Divider: () => {
        return <hr className="py-4 border-zinc-700" />
    },
    PricingTable: () => {
        return <PricingTable />
    },
}

export const Content = ({ data }: { data: PagesBlocksContent }) => {
    return (
        <div
            className={clsx(
                data.fullWidth ? 'w-full' : 'max-w-3xl  px-4  lg:px-8 py-0',
                'mx-auto'
            )}
        >
            <div
                className={clsx(
                    'w-full max-w-full prose prose-h1:text-5xl prose-h1:leading-normal prose-a:text-accent-500 prose-headings:text-black dark:prose-headings:text-white prose-p:text-zinc-900 dark:prose-p:text-zinc-400 prose-p:text-sans prose-p:mb-1 prose-li:text-sans propse-a:text-sans prose-li:text-zinc-400 prose-blockquote:text-zinc-400 prose-blockquote:text-lg prose-blockquote:leading-loose prose-blockquote:font-normal prose-p:leading-normal prose-strong:text-black dark:prose-strong:text-white'
                )}
                data-tina-field={tinaField(data, 'body')}
            >
                <TinaMarkdown content={data.body} components={components} />
            </div>
        </div>
    )
}

export const contentBlockSchema: Template = {
    name: 'content',
    label: 'Content',
    ui: {
        previewSrc: '',
    },
    fields: [
        {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            templates: [
                {
                    name: 'Button',
                    label: 'Button Card',
                    fields: [
                        {
                            name: 'label',
                            label: 'label',
                            type: 'string',
                        },
                        {
                            name: 'link',
                            label: 'Url',
                            type: 'string',
                        },
                    ],
                },
                {
                    name: 'Divider',
                    label: 'Divider',
                    fields: [
                        {
                            name: 'divider',
                            label: 'Divider',
                            type: 'string',
                        },
                    ],
                },
                {
                    name: 'PricingTable',
                    label: 'Pricing Table',
                    fields: [{ name: 'empty', label: 'empty', type: 'string' }],
                },
            ],
        },
        { name: 'fullWidth', label: 'full width?', type: 'boolean' },
    ],
}
