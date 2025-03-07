import { Layout } from '../components/layout/Layout'
import { BecomeBacker } from '../components/pricing/BecomeBacker'
import { PricingAboveFold } from '../components/pricing/PricingAboveFold'
import { Faq } from '../components/templates/Faq'
import PricingTable from '../components/util/PricingTable'


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
            description: 'Tobias will be speaking at FOSSASIA 2025 to present Hubql Grid',
            date: '13th March 2025',
            location: 'Bangkok, Thailand',
            link: 'https://eventyay.com/e/4c0e0c27/session/9799',
        },
    ]

    return (
        <Layout data={data}>
            <div>
                <h1 className="text-4xl font-bold font-orbitron p-4">Events</h1>
                <p className="text-neutral-400 p-4">
                    We are excited to be part of many communities and to be able to share Hubql with the world.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                    {
                        events.map((event, index) => (
                            <div key={'event-' + index} className="border border-neutral-800 p-4">
                                <a href={event.link} target="_blank" rel="noopener noreferrer">
                                    <div className="flex gap-2">
                                        <h2 className="text-2xl font-bold font-orbitron">{event.title}</h2>
                                        |
                                        <p className="text-neutral-400">{event.date}</p>
                                        |
                                        <p className="text-neutral-400">{event.location}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p className="text-neutral-400">{event.description}</p>
                                    </div>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}
