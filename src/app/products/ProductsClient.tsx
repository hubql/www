'use client'

import { useTina } from 'tinacms/dist/react'
import { AboveFold } from '../../components/product/AboveFold'
import { OpenSource } from '../../components/product/OpenSource'
import { ProductGrid } from '../../components/homepage/ProductGrid'
import { TrustedBy } from '../../components/product/TrustedBy'
import { Layout } from '../../components/layout/Layout'
import { BecomeBacker } from '../../components/pricing/BecomeBacker'
import { Blocks } from '../../components/util/Blocks'

export function ProductsClient(props: {
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
            <AboveFold />
            <TrustedBy />
            <ProductGrid />
            <OpenSource />
            <BecomeBacker align="center" />
            <Blocks {...data.pages} posts={posts} />
        </Layout>
    )
}
