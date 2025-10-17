import { tinaField } from 'tinacms/dist/react'
import Image from 'next/image'
import { Template } from 'tinacms'
import { PagesBlocksSectionTeam } from '../../../tina/__generated__/types'
export const SectionTeam = ({ data }: { data: PagesBlocksSectionTeam }) => {
    return (
        <div className="relative w-full flex flex-col items-center justify-center divide-y divide-neutral-800 overflow-hidden bprder">
            <div className="w-full max-w-7xl mx-auto">
                <div className="w-full flex flex-col gap-16 pt-20">
                    <div className="w-full flex flex-col gap-4 justify-between items-start h-full px-6">
                        {data.heading?.text && (
                            <h2
                                className="w-full text-left"
                                data-tina-field={tinaField(data, 'heading')}
                            >
                                {data.heading?.text}
                            </h2>
                        )}
                        {data.teamContent?.text && (
                            <p
                                className="text-secondary-foreground max-w-2xl text-left"
                                data-tina-field={tinaField(data, 'teamContent')}
                            >
                                {data.teamContent?.text}
                            </p>
                        )}
                    </div>
                    <div className="w-full rounded-3xl">
                        {data.teamMembers && (
                            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 w-full divide-x divide-neutral-800 border-t border-neutral-800">
                                {data.teamMembers.map(
                                    (member, index: number) => (
                                        <div
                                            key={`team-member-${index}`}
                                            className="flex flex-col items-center text-center gap-4  rounded-sm px-8 pb-4 pt-8 w-full"
                                        >
                                            <div className="relative w-full aspect-square rounded-sm mb-4">
                                                <Image
                                                    src={
                                                        member?.image ||
                                                        '/homepage/agent-image-default.jpg'
                                                    }
                                                    alt={member?.name || ''}
                                                    className="rounded-sm mb-4"
                                                    fill
                                                    sizes="100vw"
                                                    data-tina-field={tinaField(
                                                        member,
                                                        'image'
                                                    )}
                                                />
                                            </div>
                                            <div className="flex flex-col items-center text-center gap-1 h-full w-full">
                                                <h3
                                                    className="text-lg font-semibold text-left w-full"
                                                    data-tina-field={tinaField(
                                                        member,
                                                        'name'
                                                    )}
                                                >
                                                    {member?.name}
                                                </h3>
                                                <p
                                                    className="text-base text-muted-foreground text-left w-full"
                                                    data-tina-field={tinaField(
                                                        member,
                                                        'description'
                                                    )}
                                                >
                                                    {member?.description}
                                                </p>
                                            </div>
                                            <p
                                                className="text-lg text-foreground text-left w-full font-bold"
                                                data-tina-field={tinaField(
                                                    member,
                                                    'role'
                                                )}
                                            >
                                                {member?.role}
                                            </p>
                                        </div>
                                    )
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const sectionTeamBlock: Template = {
    name: 'SectionTeam',
    label: 'Section Team',
    fields: [
        {
            type: 'object',
            label: 'Heading',
            name: 'heading',
            fields: [
                {
                    type: 'string',
                    ui: {
                        component: 'textarea',
                    },
                    label: 'Heading Text',
                    name: 'text',
                },
                {
                    type: 'string',
                    label: 'Highlight Words (comma-separated)',
                    name: 'highlightWords',
                    description:
                        'Enter words to highlight in the heading, separated by commas',
                },
            ],
        },
        {
            type: 'object',
            label: 'Team Content',
            name: 'teamContent',
            fields: [
                {
                    type: 'string',
                    ui: {
                        component: 'textarea',
                    },
                    label: 'Team Content Text',
                    name: 'text',
                },
                {
                    type: 'string',
                    label: 'Highlight Words (comma-separated)',
                    name: 'highlightWords',
                    description:
                        'Enter words to highlight in the team content, separated by commas',
                },
            ],
        },
        {
            type: 'object',
            label: 'Team Members',
            name: 'teamMembers',
            list: true,
            fields: [
                {
                    type: 'string',
                    label: 'Name',
                    name: 'name',
                },
                {
                    type: 'string',
                    label: 'Description',
                    name: 'description',
                    ui: {
                        component: 'textarea',
                    },
                },
                {
                    type: 'string',
                    label: 'Role',
                    name: 'role',
                },
                {
                    type: 'image',
                    name: 'image',
                    label: 'Image',
                    ui: {
                        component: 'image',
                        defaultValue: '/homepage/agent-image-default.jpg',
                    },
                },
            ],
        },
    ],
}
