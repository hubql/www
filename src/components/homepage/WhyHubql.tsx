import { Section } from '../kit/Section'

export const WhyHubql = () => {
    return (
        <Section
            title="Why choose Hubql"
            contentClassName="grid max-lg:grid-cols-1 lg:grid-cols-3 gap-4 divide-x divide-neutral-800"
        >
            {WhyHubqlCards.map((card, index) => (
                <WhyHubqlCard
                    key={'whyhubql-' + card.title + index}
                    card={card}
                />
            ))}
        </Section>
    )
}

const WhyHubqlCards = [
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
]

const WhyHubqlCard = ({ card }: { card: any }) => {
    return (
        <div className="flex flex-col justify-between items-start p-4">
            <h3 className="text-lg font-bold font-orbitron">{card.title}</h3>
            <p className="text-sm text-neutral-400">{card.description}</p>
        </div>
    )
}
