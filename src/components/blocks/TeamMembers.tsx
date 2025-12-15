import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import { ExternalLink } from 'lucide-react'
import type { Template } from 'tinacms'
import { tinaField } from 'tinacms/dist/react'
import type { PagesBlocksTeamMembers } from '../../../tina/__generated__/types'

export const TeamMembers = ({
    data,
}: {
    data: PagesBlocksTeamMembers | any
}) => {
    const items =
        data.members &&
        data.members.map((member: any, index: number) => {
            const hasUrl = member?.url && member.url !== ''

            const cardContent = (
                <div className="block w-full h-full border border-neutral-800 rounded-lg p-6 bg-neutral-900">
                    <div className="flex flex-col gap-4">
                        {member?.image?.src && (
                            <div className="relative w-24 h-24 rounded-full bg-neutral-800 overflow-hidden mb-1">
                                <Image
                                    fill={true}
                                    src={member?.image?.src ?? ''}
                                    alt={
                                        member?.image?.alt ?? member?.name ?? ''
                                    }
                                    className="object-cover"
                                    style={{
                                        maxWidth: '100%',
                                    }}
                                />
                            </div>
                        )}
                        <div className="flex items-start justify-between gap-2">
                            <div className="flex flex-col gap-1">
                                <h3 className="text-neutral-50 text-lg font-semibold">
                                    {member?.name}
                                </h3>
                                {member?.role && (
                                    <p className="text-neutral-300 text-sm">
                                        {member.role}
                                    </p>
                                )}
                            </div>
                            {hasUrl && (
                                <ExternalLink className="w-4 h-4 text-neutral-400 flex-shrink-0 mt-1" />
                            )}
                        </div>
                        {member?.bio && (
                            <p className="text-neutral-400 text-sm leading-relaxed mt-1">
                                {member.bio}
                            </p>
                        )}
                        {member?.tags && member.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-2">
                                {member.tags.map(
                                    (tag: string, tagIndex: number) => (
                                        <span
                                            key={`member-tag-${index}-${tagIndex}`}
                                            className="px-3 py-1 text-xs font-medium bg-neutral-800 text-neutral-300 rounded-full border border-neutral-700"
                                        >
                                            {tag}
                                        </span>
                                    )
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )

            return (
                <div
                    key={'member-' + index}
                    className="w-full"
                    data-tina-field={tinaField(data, 'members', index)}
                >
                    {hasUrl ? (
                        <Link
                            href={member.url ?? '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full h-full"
                        >
                            {cardContent}
                        </Link>
                    ) : (
                        cardContent
                    )}
                </div>
            )
        })

    const columns = data.columns ?? 3

    const gridLayout = clsx(
        'w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch',
        columns === 2 && 'lg:grid-cols-2',
        columns === 3 && 'lg:grid-cols-3',
        columns === 4 && 'lg:grid-cols-4',
        columns > 4 && 'lg:grid-cols-4'
    )

    return (
        <div className="w-full max-w-7xl px-8 mx-auto py-4">
            <div className="flex flex-col gap-8 w-full">
                {data.heading && (
                    <div className="w-full">
                        <h1
                            className="text-3xl md:text-4xl font-semibold text-neutral-50"
                            data-tina-field={tinaField(data, 'heading')}
                        >
                            {data.heading}
                        </h1>
                        {data.subheading && (
                            <p
                                className="mt-2 text-neutral-400 max-w-2xl"
                                data-tina-field={tinaField(data, 'subheading')}
                            >
                                {data.subheading}
                            </p>
                        )}
                    </div>
                )}
                <div className="flex h-full w-full items-center">
                    <div className={clsx(gridLayout)}>{items}</div>
                </div>
            </div>
        </div>
    )
}

export const teamMembersBlockSchema: Template = {
    name: 'TeamMembers',
    label: 'Team Members',
    ui: {
        previewSrc: '',
    },
    fields: [
        {
            label: 'Columns',
            name: 'columns',
            type: 'number',
            ui: {
                description:
                    'Number of columns on large screens (2-4, default: 3)',
            },
        },
        {
            label: 'Heading',
            name: 'heading',
            type: 'string',
        },
        {
            label: 'Subheading',
            name: 'subheading',
            type: 'string',
            ui: {
                component: 'textarea',
            },
        },
        {
            label: 'Members',
            name: 'members',
            type: 'object',
            list: true,
            ui: {
                defaultItem: {
                    name: 'Team Member',
                    role: 'Role',
                    bio: 'Short bio',
                    tags: [],
                },
                itemProps: (item) => ({
                    label: item?.name || 'Member',
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
                    label: 'Name',
                    name: 'name',
                    type: 'string',
                },
                {
                    label: 'Role',
                    name: 'role',
                    type: 'string',
                },
                {
                    label: 'Bio',
                    name: 'bio',
                    type: 'string',
                    ui: {
                        component: 'textarea',
                    },
                },
                {
                    label: 'External URL',
                    name: 'url',
                    type: 'string',
                    ui: {
                        description:
                            'Optional external link for this member (e.g. LinkedIn, personal site)',
                    },
                },
                {
                    label: 'Tags',
                    name: 'tags',
                    type: 'string',
                    list: true,
                    ui: {
                        description: 'Add tags or skills for this member',
                    },
                },
            ],
        },
    ],
}
