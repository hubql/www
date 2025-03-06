import { Section } from '../kit/Section'

export const WhyHubql = () => {
    return (
        <Section
            title="Why choose Hubql"
            contentClassName="grid max-lg:grid-cols-1 lg:grid-cols-3 gap-4 divide-x divide-neutral-800"
        >
            {WhyHubqlCards.map((card) => (
                <WhyHubqlCard key={card.title} card={card} />
            ))}
        </Section>
    )
}

const WhyHubqlCards = [
    {
        title: 'Modern Tech Stack',
        description:
            'We leverage Next.js, Supabase, AWS, and Vercel to build high-performance applications.',
    },
    {
        title: 'Modern Tech Stack',
        description:
            'We leverage Next.js, Supabase, AWS, and Vercel to build high-performance applications.',
    },
    {
        title: 'Modern Tech Stack',
        description:
            'We leverage Next.js, Supabase, AWS, and Vercel to build high-performance applications.',
    },
]

const WhyHubqlCard = ({ card }: { card: any }) => {
    return (
        <div className="flex flex-col justify-between items-start p-4">
            <h3 className="text-lg font-bold">{card.title}</h3>
            <p className="text-sm text-neutral-400">{card.description}</p>
        </div>
    )
}
