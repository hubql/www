import { Layout } from '../../components/layout/Layout'
import { Section } from '../../components/kit/Section'

export default function Events() {
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
                <h1 className="text-4xl font-bold font-lexend px-4 pt-8">
                    Events
                </h1>
                <p className="text-muted-foreground px-4 pt-4 max-w-3xl">
                    We are excited to be part of many communities and to be able
                    to share Hubql with the world.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-4 pt-8">
                    {events.map((event, index) => (
                        <div key={'event-' + index} className="w-full">
                            <a
                                href={event.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full h-full border border-neutral-800 hover:border-neutral-700 rounded-lg p-6 bg-neutral-900 hover:bg-neutral-800 transition-all duration-200"
                            >
                                <div className="flex flex-col gap-3">
                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                        <h2 className="text-neutral-50 text-xl font-semibold">
                                            {event.title}
                                        </h2>
                                        <p className="text-neutral-400 text-sm">
                                            {event.date}
                                        </p>
                                    </div>
                                    <p className="text-neutral-400 text-sm">
                                        {event.location}
                                    </p>
                                    <p className="text-neutral-400 text-base leading-relaxed">
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
