import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import type { Template } from 'tinacms'
import { tinaField } from 'tinacms/dist/react'
import { PagesBlocksProjectReferences } from '../../../tina/__generated__/types'
import { ExternalLink } from 'lucide-react'

export const ProjectReferences = ({
    data,
}: {
    data: PagesBlocksProjectReferences
}) => {
    const items =
        data.projects &&
        data.projects.map((project, index) => {
            const colSpan = () => {
                switch (project?.colSpan) {
                    case 1:
                        return 'lg:col-span-1'
                    case 2:
                        return 'lg:col-span-2'
                    case 3:
                        return 'lg:col-span-3'
                    case 4:
                        return 'lg:col-span-4'
                    case 5:
                        return 'lg:col-span-5'
                    case 6:
                        return 'lg:col-span-6'
                    default:
                        return 'lg:col-span-4'
                }
            }

            const hasUrl = project?.url && project.url !== ''

            const cardContent = (
                <>
                    {project?.image?.src && (
                        <div className="relative w-full aspect-video rounded-lg bg-neutral-800 overflow-hidden mb-4">
                            <Image
                                fill={true}
                                src={project?.image?.src ?? ''}
                                alt={
                                    project?.image?.alt ?? project?.title ?? ''
                                }
                                className="object-cover"
                                style={{
                                    maxWidth: '100%',
                                }}
                            />
                        </div>
                    )}
                    <div className="flex flex-col gap-3">
                        <div className="flex items-start justify-between gap-2">
                            <h3 className="text-neutral-50 text-xl font-semibold">
                                {project?.title}
                            </h3>
                            {hasUrl && (
                                <ExternalLink className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-1" />
                            )}
                        </div>
                        {project?.description && (
                            <p className="text-neutral-400 text-base leading-relaxed">
                                {project?.description}
                            </p>
                        )}
                        {project?.tags && project.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.tags.map((tag, tagIndex) => (
                                    <span
                                        key={`tag-${index}-${tagIndex}`}
                                        className="px-3 py-1 text-xs font-medium bg-neutral-800 text-neutral-300 rounded-full border border-neutral-700"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </>
            )

            return (
                <div
                    key={'project-' + index}
                    className={clsx('w-full', colSpan())}
                    data-tina-field={tinaField(data, 'projects', index)}
                >
                    {hasUrl ? (
                        <Link
                            href={project.url ?? '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full h-full border border-neutral-800 hover:border-neutral-700 rounded-lg p-6 bg-neutral-900 hover:bg-neutral-800 transition-all duration-200"
                        >
                            {cardContent}
                        </Link>
                    ) : (
                        <div className="block w-full h-full border border-neutral-800 rounded-lg p-6 bg-neutral-900">
                            {cardContent}
                        </div>
                    )}
                </div>
            )
        })

    const gridLayout =
        'w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch'

    return (
        <div className="w-full max-w-7xl px-8 mx-auto py-16">
            <div className="flex h-full w-full items-center">
                <div className={clsx(gridLayout)}>{items}</div>
            </div>
        </div>
    )
}

export const projectReferencesBlockSchema: Template = {
    name: 'projectReferences',
    label: 'Project References',
    ui: {
        previewSrc: '',
    },
    fields: [
        {
            label: 'Projects',
            name: 'projects',
            type: 'object',
            list: true,
            ui: {
                defaultItem: {
                    title: 'Project Title',
                    description: 'Project description',
                    url: '',
                    colSpan: 4,
                    tags: [],
                },
                itemProps: (item) => ({
                    label: item?.title || 'Project',
                }),
            },
            fields: [
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
                    label: 'Title',
                    name: 'title',
                    type: 'string',
                },
                {
                    label: 'Description',
                    name: 'description',
                    type: 'string',
                    ui: {
                        component: 'textarea',
                    },
                },
                {
                    label: 'URL',
                    name: 'url',
                    type: 'string',
                    ui: {
                        description:
                            'External URL to the project (optional). Leave empty if no link.',
                    },
                },
                {
                    label: 'Tags',
                    name: 'tags',
                    type: 'string',
                    list: true,
                    ui: {
                        description: 'Add tags to categorize the project',
                    },
                },
                {
                    label: 'Column Span',
                    name: 'colSpan',
                    type: 'number',
                    ui: {
                        description:
                            'Number of columns this project spans (1-12, default: 4)',
                    },
                },
            ],
        },
    ],
}
