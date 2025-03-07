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

    const content = data.pages ?? data.landings

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
    'services'
]
export const getStaticPaths = async () => {
    const [result, resultLanding] = await Promise.all([
        client.queries.pagesConnection({
            filter: {
                title: {
                    startsWith: '',
                },
            },
        }),
        client.queries.landingsConnection({
            filter: {
                title: {
                    startsWith: '',
                },
            },
        }),
    ])
    const landingPaths =
        resultLanding?.data?.landingsConnection?.edges?.map((page) => {
            return {
                params: {
                    filename: [
                        page?.node?._sys.relativePath.replace('.mdx', ''),
                    ],
                },
            }
        }) ?? []
    const pagePaths =
        result?.data?.pagesConnection?.edges
            ?.filter((page) => {
                if (customPages.includes(page?.node?._sys.filename ?? '')) {
                    return false
                }
                return true
            })
            .map((page) => {
                return {
                    params: {
                        filename: [
                            page?.node?._sys.relativePath.replace('.mdx', ''),
                        ],
                    },
                }
            }) ?? []

    return {
        paths: [...landingPaths, ...pagePaths],
        fallback: 'blocking',
    }
}

export const getStaticProps = async ({ params }: { params: any }) => {
    try {
        const { query, data, variables } = await Promise.any([
            client.queries.pages({
                relativePath: `${params.filename.join('/')}.mdx`,
            }),
            client.queries.landings({
                relativePath: `${params.filename.join('/')}.mdx`,
            }),
        ])
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
