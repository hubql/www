import client from '@/tina/__generated__/client'
import { notFound, redirect } from 'next/navigation'
import { DynamicPageClient } from './DynamicPageClient'

const customPages = [
    'product/api-client',
    'visualization',
    'templates',
    'data-schema-visualization',
    'contact',
    'events',
    'products',
    'services',
]

export async function generateStaticParams() {
    const result = await client.queries.pagesConnection({
        filter: {
            title: {
                startsWith: '',
            },
        },
    })

    const pagePaths =
        result?.data?.pagesConnection?.edges
            ?.filter((page: any) => {
                if (customPages.includes(page?.node?._sys.filename ?? '')) {
                    return false
                }
                return true
            })
            .map((page: any) => {
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

export default async function DynamicPage({
    params,
}: {
    params: Promise<{ filename: string[] }>
}) {
    const resolvedParams = await params
    const filename = Array.isArray(resolvedParams.filename)
        ? resolvedParams.filename.join('/')
        : resolvedParams.filename

    // Exclude Next.js internal paths and system files
    if (
        filename.startsWith('_next/') ||
        filename.startsWith('_') ||
        filename.includes('.webpack.') ||
        filename.includes('.hot-update.') ||
        filename.includes('.json') ||
        filename.includes('.js') ||
        filename.includes('.css') ||
        filename.includes('.map') ||
        filename.includes('.ico') ||
        filename.includes('.png') ||
        filename.includes('.jpg') ||
        filename.includes('.jpeg') ||
        filename.includes('.gif') ||
        filename.includes('.svg') ||
        filename.includes('.woff') ||
        filename.includes('.woff2') ||
        filename.includes('.ttf') ||
        filename.includes('.eot')
    ) {
        notFound()
    }

    try {
        const { query, data, variables } = await client.queries.pages({
            relativePath: `${filename}.mdx`,
        })
        const resSetting = await client.queries.global({
            relativePath: 'settings.json',
        })
        const header = resSetting.data.global.header
        const footer = resSetting.data.global.footer

        return (
            <DynamicPageClient
                query={query}
                data={data}
                variables={variables}
                header={header}
                footer={footer}
                params={resolvedParams}
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
