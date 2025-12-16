import * as React from 'react'
import { Button } from '../kit/Button'
import { tinaField } from 'tinacms/dist/react'
import type { Template } from 'tinacms'
import type { PagesBlocksSectionCta } from '../../../tina/__generated__/types'

export const SectionCta = ({ data }: { data: PagesBlocksSectionCta }) => {
    return (
        <div className="relative w-full flex justify-center lg:py-28 py-20 font-lexend px-2">
            <div className=" w-full max-w-5xl mx-auto  ">
                <div className="flex flex-col items-center text-center bg-neutral-900 py-20 px-8 rounded-lg border border-neutral-800">
                    {data.title && (
                        <h2
                            data-tina-field={tinaField(data, 'title')}
                            className={`w-full relative text-4xl max-w-xl mx-auto`}
                        >
                            {data.title}
                        </h2>
                    )}
                    {data.paragraph && (
                        <p
                            data-tina-field={tinaField(data, 'paragraph')}
                            className={`text-sm text-neutral-400 mx-auto m-0 max-w-xl font-lexend`}
                        >
                            {data.paragraph}
                        </p>
                    )}
                    {(data.buttonOne || data.buttonTwo) && (
                        <div className="flex flex-wrap items-start w-fit gap-y-2 gap-x-2 justify-center p-2 rounded-sm mt-4">
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
                            {data.buttonTwo && data.buttonTwo.label && (
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
                </div>
            </div>
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
