import { useTina } from 'tinacms/dist/react'
import client from '../../tina/__generated__/client'
import { Layout } from '../components/layout/Layout'
import { Blocks } from '../components/util/Blocks'
import { TrustedBy } from '../components/homepage/TrustedBy'
import { AboveFold } from '../components/homepage/AboveFold'
import { ProductGrid } from '../components/homepage/ProductGrid'
import { WhyHubql } from '../components/homepage/WhyHubql'
import { Services } from '../components/homepage/Services'
import { TechStack } from '../components/homepage/TechStack'
import { Testimonials } from '../components/homepage/Testimonials'
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
            <Services />
            <ProductGrid />
            <WhyHubql />
            <TechStack />
            <Testimonials />
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
