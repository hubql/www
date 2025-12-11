import { useTina } from 'tinacms/dist/react'
import client from '../../tina/__generated__/client'
import { Layout } from '../components/layout/Layout'
import { Blocks } from '../components/util/Blocks'

export default function Index(props: {
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
export const getStaticPaths = async () => {
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
                    params: {
                        filename: relativePath ? relativePath.split('/') : [],
                    },
                }
            }) ?? []

    return {
        paths: pagePaths,
        fallback: 'blocking',
    }
}

export const getStaticProps = async ({ params }: { params: any }) => {
    if (!params || !params.filename) {
        return {
            notFound: true,
        }
    }

    const filename = Array.isArray(params.filename)
        ? params.filename.join('/')
        : params.filename

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
        return {
            notFound: true,
        }
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

        return {
            props: {
                variables: variables,
                data: data,
                query: query,
                header,
                footer,
                params,
            },
        }
    } catch (error: any) {
        const hasNotFound = error?.errors?.find((error: any) =>
            error.message.includes('Unable to find record')
        )
        if (hasNotFound) {
            return {
                redirect: {
                    destination: '/404',
                    permanent: false,
                },
            }
        }
        throw error
    }
}
