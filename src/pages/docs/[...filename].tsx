import { DocsTemplate } from '@/src/components/blocks/DocsTemplate'
import { DocsMenu } from '@/src/components/layout/DocsMenu'
import { DocsLayout } from '@/src/components/layout/DocsLayout'
import { useTina } from 'tinacms/dist/react'
import client from '../../../tina/__generated__/client'

const DocsPage = (props: {
    query: any
    variables: any
    data: any
    footer: any
    header: any
    docs: any
}) => {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    })
    const header = props.header
    const footer = props.footer

    return (
        <DocsLayout data={data.docs} header={header}>
            <div className=" w-full h-fit text-center my-20 mx-auto">
                Available soon...
            </div>
        </DocsLayout>
    )

    return (
        <DocsLayout data={data.docs} header={header}>
            <div className="progress"></div>
            <div className="relative w-full h-fit flex flex-row overflow-visible">
                <DocsMenu />
                <DocsTemplate content={data.docs} footer={footer} />
            </div>
        </DocsLayout>
    )
}

export const getStaticPaths = async () => {
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
        result?.data?.docsConnection?.edges?.map((page) => {
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
        paths: [...pagePaths],
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

export default DocsPage
