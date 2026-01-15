'use client'

import { PostTemplate } from '@/src/components/blocks/PostTemplate'
import { Layout } from '@/src/components/layout/Layout'
import Link from 'next/link'
import { ChevronLeftIcon } from 'tinacms'
import { useTina } from 'tinacms/dist/react'

export function BlogPostClient(props: {
    query: any
    variables: any
    data: any
    footer: any
    header: any
}) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    })
    const header = props.header
    const footer = props.footer

    return (
        <Layout data={data.post}>
            <div className="progress"></div>
            <PostTemplate content={data.post} />
            <div className="fixed bottom-[80px] right-[16px]">
                <Link href={'/blog'}>
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
