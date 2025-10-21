import Image from 'next/image'
import { Section } from '../kit/Section'
import { cn } from '../util/cn'
import { classNames } from 'tinacms'
import { tinaField } from 'tinacms/dist/react'
import type { Template } from 'tinacms'
import type { PagesBlocksTechStack } from '../../../tina/__generated__/types'

export const TechStack = ({
    data,
}: {
    data: PagesBlocksTechStack
}) => {
    return (
        <Section
            title = {data.title ?? 'Tech Stack'}
            contentClassName="grid grid-cols-4 gap-0 divide-x divide-y divide-neutral-800"
            data-tina-field={tinaField(data, 'title')}
        >
            {data.techStackItems?.map((item: any, index: number) => (
                <TechStackItem key={'techstack-' + index} item={item} />
            ))}
        </Section>
    )
}

const TechStackItem = ({
    item,
}: {
    item: {
        name?: string
        description?: string
        image?: string[]
        className?: string
    }
}) => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 p-4">
            <div className="flex flex-row items-center justify-start gap-2">
                {item.image?.map((img, index) => (
                    <Image
                    key={`techstackLogo-${index}`}
                    src={img}
                    alt={item.name ?? ''}
                    width={28}
                    height={28}
                    className={cn('h-10 w-10', item.className)}
                    data-tina-field={tinaField(item, 'image')}
                />
                ))}
            </div>

            {item.name && (
                <h2 
                    className="text-base font-bold font-orbitron tracking-wide mb-0"
                    data-tina-field={tinaField(item, 'name')}
                >
                    {item.name}
                </h2>
            )}
        </div>
    )
}

export const techStackBlockSchema: Template = {
    name: 'TechStack',
    label: 'Tech Stack',
    ui: {
        previewSrc: '',
        defaultItem: {
            title: 'Tech Stack',
            techStackItems: [
                {
                    name: 'Figma',
                    image: ['/techstack/figma.svg'],
                },
                {
                    name: 'HTML',
                    image: ['/techstack/html.svg'],
                },
                {
                    name: 'Tailwind CSS',
                    image: ['/techstack/tailwind.svg'],
                },
                {
                    name: 'React',
                    image: ['/techstack/react.svg'],
                },
                {
                    name: 'Node',
                    className: 'bg-white p-1',
                    image: ['/techstack/nodejs.svg'],
                },
                {
                    name: 'Elysia',
                    image: ['/techstack/elysia.svg'],
                },
                {
                    name: 'Supabase',
                    image: ['/techstack/supabase.svg'],
                },
                {
                    name: 'AWS',
                    className: 'bg-white p-1',
                    image: ['/techstack/aws.svg'],
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
            type: 'object',
            label: 'Tech Stack Items',
            name: 'techStackItems',
            list: true,
            ui: {
                itemProps: (item) => ({
                    label: item?.name || 'Tech Stack Item',
                }),
            },
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
                    label: 'Custom Class (optional)',
                    name: 'className',
                },
                {
                    type: 'image',
                    label: 'Image(s)',
                    name: 'image',
                    list: true,
                },
            ],
        },
    ],
}