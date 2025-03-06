import { Section } from '../kit/Section'
import { BlurredBlob } from '../kit/BlurredBlob'
export const Services = () => {
    return (
        <Section
            title="Our Services"
            className="divide-none"
            titleClassName="py-6"
            contentClassName="z-10 grid grid-cols-1 lg:grid-cols-1  gap-4 pb-12 px-2 pt-0 flex flex-col"
        >
            {ServicesCards.map((card, index) => (
                <ServicesCard key={'cardService-' + index} card={card} />
            ))}
            <BlurredBlob className="-right-60 -bottom-60" />
        </Section>
    )
}

const ServicesCards = [
    {
        title: 'Software Development',
        description:
            'We design and build scalable, cloud-based applications tailored to your business needs.',
        list: [
            'Web Applications & APIs: Custom-built solutions using Next.js, Supabase, and AWS.',
            'API Development & Integration: Create seamless API connections for fintech, SaaS, and insurtech companies.',
            'Automation & AI – Implementing intelligent, automated workflows to optimize business processes.',
        ],
    },
    {
        title: 'Software Development',
        description:
            'We design and build scalable, cloud-based applications tailored to your business needs.',
        list: [
            'Web Applications & APIs: Custom-built solutions using Next.js, Supabase, and AWS.',
            'API Development & Integration: Create seamless API connections for fintech, SaaS, and insurtech companies.',
            'Automation & AI – Implementing intelligent, automated workflows to optimize business processes.',
        ],
    },
]

const ServicesCard = ({ card }: { card: any }) => {
    return (
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 bg-black/40 backdrop-blur-lg max-w-screen-lg !border border-neutral-800 mx-auto">
            <div className="flex flex-col justify-center p-8 h-full">
                <h2 className="text-lg font-bold font-orbitron tracking-wide">
                    {card.title}
                </h2>
                <p className="text-neutral-400 text-base">{card.description}</p>
            </div>
            <ul className="flex flex-col gap-2 text-neutral-400 text-base list-disc p-8 h-full">
                {card.list.map((item: string) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
