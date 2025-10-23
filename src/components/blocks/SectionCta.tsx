import * as React from 'react'
import type { Template } from 'tinacms'
import { tinaField } from 'tinacms/dist/react'
import type { PagesBlocksSectionCta } from '../../../tina/__generated__/types'
import { Actions } from '../util/Actions'

export const SectionCta = ({ data }: { data: PagesBlocksSectionCta }) => {
    return (
        <div className="relative w-full flex justify-center  pt-32 pb-24 border-t border-zinc-100 dark:border-zinc-800 overflow-clip">
            <div className=" w-full max-w-5xl mx-auto  ">
                <div className="flex flex-col gap-6 items-center text-center px-8">
                    {data.title && (
                        <h2
                            data-tina-field={tinaField(data, 'title')}
                            className={`w-full relative text-3xl lg:text-4xl leading-tight lg:leading-tight font-medium   text-black dark:text-white font-orbitron`}
                        >
                            {data.title}
                        </h2>
                    )}
                    {data.paragraph && (
                        <p
                            data-tina-field={tinaField(data, 'paragraph')}
                            className={`text-lg text-zinc-900 dark:text-zinc-400 mx-auto max-w-3xl`}
                        >
                            {data.paragraph}
                        </p>
                    )}
                    {data.actions && (
                        <Actions
                            className="justify-center py-2"
                            actions={data.actions}
                            data-tina-field={tinaField(data, 'actions')}
                        />
                    )}
                </div>
            </div>
            <div className="absolute -bottom-60 -left-60 z-10 bg-accent-100 opacity-10 blur-[100px] rounded-full w-[600px] h-[600px]" />
        </div>
    )
}

export const sectionCtaBlockSchema: Template = {
    name: 'SectionCta',
    label: 'Section CTA',
    ui: {
        previewSrc: '',
        defaultItem: {
            title: 'Ready to turbo-charge your next software development project?',
            paragraph:
                'Get started today for free and stay up to date with your upcoming new features and integrations with your favorite services.',
            actions: [
                {
                    label: 'Get started',
                    type: 'button',
                    icon: true,
                    link: 'https://cloud.hubql.com',
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
                    link: 'https://cloud.hubql.com',
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
    ],
}
