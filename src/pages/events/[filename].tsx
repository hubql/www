// THIS FILE HAS BEEN GENERATED WITH THE TINA CLI.
// This is a demo file once you have tina setup feel free to delete this file

import { EventTemplate } from '@/src/components/blocks/EventTemplate'
import { Layout } from '@/src/components/layout/Layout'
import Head from 'next/head'
import Link from 'next/link'
import { ChevronLeftIcon } from 'tinacms'
import { useTina } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import client from '../../../tina/__generated__/client'

const EventsPage = (props: {
    query: any
    variables: any
    data: any
    footer: any
    header: any
}) => {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    })
    const header = props.header
    const footer = props.footer

    return (
        <Layout data={data.events}>
            <div className="progress"></div>
            <EventTemplate content={data.events} />
            <div className="fixed bottom-[80px] right-[16px]">
                <Link passHref href={'/events'}>
                    <button
                        role="button"
                        className="flex text-[14px] text-zinc-50 gap-2 bg-zinc-700 rounded-full pl-1 pr-4 py-2 items-center cursor-pointer hover:bg-zinc-600 shadow-lg   hover:scale-105"
                    >
                        <ChevronLeftIcon
                            className={
                                'fill-zinc-300 h-4 w-4 stroke-2 stroke-zinc-300'
                            }
                        />
                        Back
                    </button>
                </Link>
            </div>
        </Layout>
    )
}

export const getStaticProps = async ({ params }: { params: any }) => {
    let data = {}
    let query = {}
    let variables = { relativePath: `${params.filename}.mdx` }
    try {
        const res = await client.queries.events(variables)
        query = res.query
        data = res.data
        variables = res.variables
    } catch {}

    const resSetting = await client.queries.global({
        relativePath: 'settings.json',
    })
    const header = resSetting.data.global.header
    const footer = resSetting.data.global.footer

    return {
        props: {
            variables: variables,
            data: data,
            query: query,
            header,
            footer,
        },
    }
}

export const getStaticPaths = async () => {
    const eventsListData = await client.queries.eventsConnection()

    return {
        //@ts-ignore
        paths: eventsListData.data.eventsConnection.edges.map((event) => ({
            params: { filename: event?.node?._sys.filename },
        })),
        fallback: 'blocking',
    }
}

export default EventsPage
