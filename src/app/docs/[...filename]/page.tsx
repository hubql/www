import client from '@/tina/__generated__/client'
import { notFound, redirect } from 'next/navigation'
import { DocsPageClient } from './DocsPageClient'

export async function generateStaticParams() {
    const [result] = await Promise.all([
        client.queries.docsConnection({
            filter: {
                title: {
                    startsWith: '',
                },
            },
        }),
    ])
    const pagePaths =
        result?.data?.docsConnection?.edges?.map((page: any) => {
            const relativePath = page?.node?._sys.relativePath.replace(
                '.mdx',
                ''
            )
            return {
                filename: relativePath ? relativePath.split('/') : [],
            }
        }) ?? []

    return pagePaths
}

export default async function DocsPage({
    params,
}: {
    params: Promise<{ filename: string[] }>
}) {
    const resolvedParams = await params
    const filename = Array.isArray(resolvedParams.filename)
        ? resolvedParams.filename.join('/')
        : resolvedParams.filename

    try {
        const { query, data, variables } = await Promise.any([
            client.queries.docs({
                relativePath: `${filename}.mdx`,
            }),
        ])
        const resSetting = await client.queries.global({
            relativePath: 'settings.json',
        })
        const header = resSetting.data.global.header
        const footer = resSetting.data.global.footer

        return (
            <DocsPageClient
                query={query}
                data={data}
                variables={variables}
                header={header}
                footer={footer}
            />
        )
    } catch (error: any) {
        const hasNotFound = error?.errors?.find((error: any) =>
            error.message.includes('Unable to find record')
        )
        if (hasNotFound) {
            redirect('/404')
        }
        throw error
    }
}
