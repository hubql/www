import client from '@/tina/__generated__/client'
import { HomeClient } from './HomeClient'

async function getData() {
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
            map.set(item?.node?.id, true)
            posts.push(item?.node)
        }
    }
    return posts
}

export default async function HomePage() {
    const { data, query, variables } = await client.queries.pages({
        relativePath: 'home.mdx',
    })

    const res = await client.queries.global({ relativePath: 'settings.json' })
    const header = res.data.global.header
    const footer = res.data.global.footer
    const posts = await getData()

    return (
        <HomeClient
            data={data}
            query={query}
            variables={variables}
            header={header}
            footer={footer}
            posts={posts}
        />
    )
}
