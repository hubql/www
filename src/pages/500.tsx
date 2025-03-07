import React from 'react'

import client from '@/tina/__generated__/client'
import Link from 'next/link'
import { Layout } from '../components/layout/Layout'

export default function Error(props: { header: any; footer: any }) {
    const data = {
        seoTitle: 'Error | Hubql',
    }
    return (
        <Layout data={data}>
            <div className="max-w-2xl mx-auto h-[calc(100vh-80px)] flex flex-col items-center justify-center">
                <h1 className="text-4xl font-orbitron">Sorry, something went wrong.</h1>
                <p className="text-lg text-center">
                    You can{' '}
                    <Link className="underline" href={'/'}>
                        return to our front page
                    </Link>{' '}
                    and browse more of our content.
                </p>
            </div>
        </Layout>
    )
}

export const getStaticProps = async () => {
    const res = await client.queries.global({ relativePath: 'settings.json' })
    const header = res.data.global.header
    const footer = res.data.global.footer
    return {
        props: {
            header,
            footer,
        },
    }
}
