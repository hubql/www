import { Layout } from '@/src/components/layout/Layout'
import { FormattedDate } from '@/src/components/util/FormattedDate'
import client from '@/tina/__generated__/client'
import { Rss } from 'lucide-react'
import Link from 'next/link'
import { Key } from 'react'
import { EventList } from '@/src/components/events/EventList'

export default function Blog({
    events,
}: {
    events: {
        upcoming: any[]
        past: any[]
    }
}) {
    const data = {
        seoTitle: 'Hubql Events',
        seoDescription: 'Read our events and announcements on the Hubql blog',
    }

    return (
        <Layout data={data}>
            <section className="w-full lg:max-w-7xl mx-auto">
                <div className="px-4 py-8">
                    <div className="flex items-center gap-2 mb-2">
                        <Rss className="w-7 h-7 stroke-accent-100" />
                        <h1 className="text-3xl text-white font-semibold mb-0 font-orbitron">
                            Events
                        </h1>
                    </div>
                    <p className="text-neutral-400 text-base max-w-md">
                        We are excited to be part of many communities and to be
                        able to share Hubql with the world.
                    </p>
                </div>

                <EventList
                    events={events.upcoming}
                    sectionTitle="Upcoming Events"
                />
                <EventList events={events.past} sectionTitle="Past Events" />
            </section>
        </Layout>
    )
}

export const getStaticProps = async () => {
    const eventsResponse = await client.queries.eventsConnection({
        sort: '-eventDate',
        filter: {
            eventDate: {
                after: new Date().toISOString(),
            },
        },
    })

    const pastEventsResponse = await client.queries.eventsConnection({
        sort: '-eventDate',
        filter: {
            eventDate: {
                before: new Date().toISOString(),
            },
        },
    })

    return {
        props: {
            events: {
                upcoming:
                    eventsResponse.data.eventsConnection.edges?.map(
                        (edge: any) => edge.node
                    ) || [],
                past:
                    pastEventsResponse.data.eventsConnection.edges?.map(
                        (edge: any) => edge.node
                    ) || [],
            },
        },
    }
}
