import client from '@/tina/__generated__/client'
import { notFound } from 'next/navigation'
import { BlogPostClient } from './BlogPostClient'

export async function generateStaticParams() {
    const postsListData = await client.queries.postConnection()

    return (
        postsListData.data?.postConnection?.edges?.map((post: any) => ({
            filename: post?.node?._sys.filename,
        })) ?? []
    )
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ filename: string }>
}) {
    const resolvedParams = await params
    let data = {}
    let query = {}
    let variables = { relativePath: `${resolvedParams.filename}.mdx` }
    try {
        const res = await client.queries.post(variables)
        query = res.query
        data = res.data
        variables = res.variables
    } catch {
        notFound()
    }

    const resSetting = await client.queries.global({
        relativePath: 'settings.json',
    })
    const header = resSetting.data.global.header
    const footer = resSetting.data.global.footer

    return (
        <BlogPostClient
            query={query}
            data={data}
            variables={variables}
            header={header}
            footer={footer}
        />
    )
}
