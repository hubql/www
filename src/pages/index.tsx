import { useTina } from 'tinacms/dist/react'
import client from '../../tina/__generated__/client'
import { Layout } from '../components/layout/Layout'
import { Blocks } from '../components/util/Blocks'
import { HeroBg } from '../components/animation/HeroBg'
import Link from 'next/link'
import { Network, ArrowUpDown, BookMarked, Grid } from 'lucide-react'
import { BecomeBacker } from '../components/pricing/BecomeBacker'
import { OpenSource } from '../components/homepage/OpenSource'
import { TrustedBy } from '../components/homepage/TrustedBy'
import { Chevron } from '../components/icons/Chevron'
import { AboveFold } from '../components/homepage/AboveFold'
import { ProductGrid } from '../components/homepage/ProductGrid'

export default function Home(props: {
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
            {/* TODO VIDEO */}
            <OpenSource />
            <BecomeBacker align="center" />
            {/* TODO SOCIAL WALL */}
            <Blocks {...data.pages} posts={posts} />
        </Layout>
    )
}

export async function getData() {
    const postsResponse = await client.queries.postConnection({
        last: 3,
        sort: 'pubDate',
        filter: {
            pubDate: {
                before: new Date().toISOString(),
            },
        },
    })
    const posts = []
    const map = new Map()
    for (const item of postsResponse?.data?.postConnection?.edges ?? []) {
        if (!map.has(item?.node?.id)) {
            map.set(item?.node?.id, true) // set any value to Map
            posts.push(item?.node)
        }
    }
    return posts
}

export const getStaticProps = async () => {
    const { data, query, variables } = await client.queries.pages({
        relativePath: 'home.mdx',
    })

    const res = await client.queries.global({ relativePath: 'settings.json' })
    const header = res.data.global.header
    const footer = res.data.global.footer
    const posts = await getData()
    return {
        props: {
            data,
            query,
            variables,
            header,
            footer,
            posts,
        },
    }
}
