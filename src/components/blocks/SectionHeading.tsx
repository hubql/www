import * as React from 'react'
import type { Template } from 'tinacms'
import { tinaField } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import type {
    LandingsBlocksSectionheading,
    PagesBlocksSectionheading,
} from '../../../tina/__generated__/types'
import { Actions } from '../util/Actions'

export const SectionHeading = ({
    data,
}: {
    data: PagesBlocksSectionheading | LandingsBlocksSectionheading
}) => {
    return (
        <div className="relative w-full overflow-hidden flex justify-center pt-32 border-t border-zinc-800">
            <div className=" w-full max-w-4xl mx-auto  ">
                <div className="flex flex-col gap-3 items-center text-center px-8">
                    {data.title && (
                        <h2
                            data-tina-field={tinaField(data, 'title')}
                            className={`w-full relative text-5xl lg:text-6xl   font-medium `}
                        >
                            {data.title}
                        </h2>
                    )}
                    {data.paragraph && (
                        <p
                            data-tina-field={tinaField(data, 'paragraph')}
                            className={`text-lg text-zinc-400 mx-auto`}
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
        </div>
    )
}

export const sectionHeadingBlockSchema: Template = {
    name: 'sectionheading',
    label: 'Section Heading',
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
