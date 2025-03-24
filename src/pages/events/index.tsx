import { Layout } from '@/src/components/layout/Layout'
import { FormattedDate } from '@/src/components/util/FormattedDate'
import client from '@/tina/__generated__/client'
import { Rss } from 'lucide-react'
import Link from 'next/link'
import { Key } from 'react'

export default function Blog({
    events,
    header,
    footer,
}: {
    events: any
    header: any
    footer: any
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
                <ul className="w-full grid grid-cols-1 divide-y divide-neutral-800 border-y border-neutral-800 ">
                    {events &&
                        events
                            .slice(0)
                            .reverse()
                            .map(
                                (
                                    post: {
                                        slug: any
                                        data: {
                                            _sys: any
                                            heroImage: string | undefined
                                            title: string
                                            pubDate: any
                                            category: any
                                            seoDescription: string
                                            eventDate: any
                                        }
                                    },
                                    index: Key | null | undefined
                                ) => (
                                    <li
                                        className="blog-card w-full hover:bg-zinc-900 transition-all ease-in cursor-pointer"
                                        key={'events-link' + index}
                                    >
                                        <Link
                                            href={`/events/${post?.data?._sys?.filename}`}
                                            className="w-full grid grid-cols-1 md:grid-cols-12 gap-2 px-4 pt-8 pb-4"
                                        >
                                            <div className="col-span-12 lg:col-span-8">
                                                <h2 className="text-zinc-50 text-left lg:text-left leading-tight text-lg font-semibold font-orbitron">
                                                    {post.data.title}
                                                </h2>
                                                <p className="date text-zinc-400 text-right lg:text-left leading-relaxed text-base max-lg:hidden">
                                                    {post.data.seoDescription}
                                                </p>
                                            </div>
                                            <div className="col-span-12 lg:col-span-2 flex lg:justify-end h-full items-center">
                                                <div className="select-none bg-zinc-800 rounded-full px-3 py-1 text-base text-zinc-50 flex items-center justify-center w-fit h-fit">
                                                    {post?.data?.category
                                                        ?.name ?? ''}
                                                </div>
                                            </div>
                                            <div className="col-span-12 lg:col-span-2 flex lg:justify-end h-full items-center">
                                                <p className="date text-zinc-400 text-right leading-relaxed text-base">
                                                    <FormattedDate
                                                        date={
                                                            post.data.eventDate
                                                        }
                                                    />
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            )}
                </ul>
            </section>
        </Layout>
    )
}

export const getStaticProps = async () => {
    const eventsResponse = await client.queries.eventsConnection({
        sort: 'pubDate',
        filter: {
            pubDate: {
                before: new Date().toISOString(),
            },
        },
    })
    // @ts-ignore
    const eventArray = eventsResponse.data.eventsConnection.edges.map(
        (event: any) => {
            return { data: event?.node }
        }
    )
    const events = []
    const map = new Map()
    for (const item of eventArray) {
        if (!map.has(item.data?.id)) {
            map.set(item.data?.id, true) // set any value to Map
            events.push(item)
        }
    }
    const resSetting = await client.queries.global({
        relativePath: 'settings.json',
    })
    const header = resSetting.data.global.header
    const footer = resSetting.data.global.footer

    return {
        props: {
            events,
            header,
            footer,
        },
    }
}
