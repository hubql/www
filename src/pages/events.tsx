import { Layout } from '../components/layout/Layout'
import { Section } from '../components/kit/Section'

export default function Services(props: {
    query: any
    variables: any
    data: any
    header: any
    footer: any
    posts: any
}) {
    const data = {
        title: 'Services | Hubql Labs',
        seoTitle: 'Services | Hubql Labs',
        seoDescription:
            'Hubql Labs services range from custom software development to consulting and training.',
    }

    const events = [
        {
            title: 'FOSSASIA 2025',
            description:
                'Tobias will be speaking at FOSSASIA 2025 to present Hubql Grid',
            date: '13th March 2025',
            location: 'Bangkok, Thailand',
            link: 'https://eventyay.com/e/4c0e0c27/session/9799',
        },
    ]

    return (
        <Layout data={data}>
            <Section
                className="w-full"
                contentClassName="w-full flex flex-col items-start justify-start"
            >
                <h1 className="text-4xl font-bold font-orbitron px-4 pt-8">
                    Events
                </h1>
                <p className="text-muted-foreground px-4 pt-4 max-w-3xl">
                    We are excited to be part of many communities and to be able
                    to share Hubql with the world.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 w-full">
                    {events.map((event, index) => (
                        <div
                            key={'event-' + index}
                            className="border border-neutral-800 p-4"
                        >
                            <a
                                href={event.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="flex gap-2">
                                    <h2 className="text-2xl font-bold font-orbitron">
                                        {event.title}
                                    </h2>
                                    |
                                    <p className="text-neutral-400">
                                        {event.date}
                                    </p>
                                    |
                                    <p className="text-neutral-400">
                                        {event.location}
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="text-neutral-400">
                                        {event.description}
                                    </p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </Section>
        </Layout>
    )
}
