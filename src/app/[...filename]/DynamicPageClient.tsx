'use client'

import { useTina } from 'tinacms/dist/react'
import { Layout } from '../../components/layout/Layout'
import { Blocks } from '../../components/util/Blocks'

export function DynamicPageClient(props: {
    query: any
    variables: any
    data: any
    header: any
    params: any
    footer: any
}) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    })

    const content = data.pages

    return (
        <Layout data={content}>
            <Blocks {...content} />
        </Layout>
    )
}
