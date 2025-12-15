import { useTina } from 'tinacms/dist/react'
import client from '../../tina/__generated__/client'
import { Layout } from '../components/layout/Layout'
import { Blocks } from '../components/util/Blocks'

export default function TeamPage(props: {
    query: any
    variables: any
    data: any
    header: any
    footer: any
}) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    })

    return (
        <Layout data={data.pages}>
            <Blocks {...data.pages} />
        </Layout>
    )
}

export const getStaticProps = async () => {
    const { data, query, variables } = await client.queries.pages({
        relativePath: 'team.mdx',
    })

    const res = await client.queries.global({ relativePath: 'settings.json' })
    const header = res.data.global.header
    const footer = res.data.global.footer

    return {
        props: {
            data,
            query,
            variables,
            header,
            footer,
        },
    }
}
