import { Section } from '../kit/Section'
import { tinaField } from 'tinacms/dist/react'
import type { Template } from 'tinacms'
import type { PagesBlocksWhyHubql } from '../../../tina/__generated__/types'

export const WhyHubql = ({
    data,
}: {
    data: PagesBlocksWhyHubql
}) => {
    return (
        <div className='pt-24'>
            <Section
                title={data.title ?? 'Why choose Hubql'}
                contentClassName="max-lg:grid-cols-1 lg:grid-cols-3 gap-4 divide-x divide-neutral-800 pb-24"
                data-tina-field={tinaField(data, 'title')}
            >
                {data.WhyHubqlCards?.map((card: any, index: number) => (
                    <WhyHubqlCard
                        key={`whyhubql-${card?.title ?? 'card'}-${index}`}
                        card={card}
                        index={index}
                    />
                ))}
            </Section>
        </div>
    )
}

const WhyHubqlCard = ({
    card,
    index,
}: {
    card: any
    index: number
}) => {
    return (
        <div className="flex flex-col items-center justify-center p-4 text-center">
            {card?.title && (
                <h3
                    className="text-[18px] font-bold font-lexend font-thin"
                    data-tina-field={tinaField(card, 'title')}
                >
                    {card.title}
                </h3>
            )}

            {card?.description && (
                <p
                    className="text-[14px] text-neutral-400 max-w-xs"
                    data-tina-field={tinaField(card, 'description')}
                >
                    {card.description}
                </p>
            )}
        </div>
    )
}

export const whyHubqlBlockSchema: Template = {
    name: 'WhyHubql',
    label: 'Why Hubql',
    ui: {
        previewSrc: '',
        defaultItem: {
            title: 'Why choose Hubql',
            WhyHubqlCards: [
                {
                    title: 'Modern Tech Stack for your Future',
                    description:
                        'We leverage the latest and greatest technologies to build high-performance applications.',
                },
                {
                    title: 'Experienced Product Builders',
                    description:
                        'We have a proven track record of building successful products.',
                },
                {
                    title: 'Fast & Easy to Work With',
                    description:
                        'Our team is dedicated with quick turnaround times and a focus on precision in our work and communication.',
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
            label: 'WhyHubql Cards',
            name: 'WhyHubqlCards',
            list: true,
            ui: {
                itemProps: (item) => ({
                    label: item?.title || 'Card',
                }),
            },
            fields: [
                {
                    type: 'string',
                    label: 'Title',
                    name: 'title',
                },
                {
                    type: 'string',
                    label: 'Description',
                    name: 'description',
                    ui: {
                        component: 'textarea',
                    },
                },
            ],
        },
    ],
}