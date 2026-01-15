'use client'

import { useTina } from 'tinacms/dist/react'
import { Layout } from '../components/layout/Layout'
import { Blocks } from '../components/util/Blocks'

export function HomeClient(props: {
    query: any
    variables: any
    data: any
    header: any
    footer: any
    posts: any
}) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    })

    const { posts } = props

    return (
        <Layout data={data.pages}>
            <Blocks {...data.pages} posts={posts} />
        </Layout>
    )
}
