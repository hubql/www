import { ComingSoon } from '@/src/components/homepage/ComingSoon'
import { Button } from '@/src/components/kit/Button'
import { Layout } from '@/src/components/layout/Layout'
import { FormattedDate } from '@/src/components/util/FormattedDate'
import { cn } from '@/src/components/util/cn'
import client from '@/tina/__generated__/client'
import { BookOpen } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Key } from 'react'

export default async function DocsPage() {
    const resSetting = await client.queries.global({
        relativePath: 'settings.json',
    })
    const header = resSetting.data.global.header
    const footer = resSetting.data.global.footer

    const data = {
        seoTitle: 'Hubql Docs',
        seoDescription:
            'Learn how to get up and running with Hubql through tutorials, APIs and platform resources.',
    }

    const docsCategory = [
        {
            name: 'Introduction',
            categoryUrl: 'introduction/overview',
            description:
                'Welcome to Hubql Docs! this is where you will find official information on how to use Hubql API client in your projects.',
            color: 'bg-accent-100',
        },
        {
            name: 'Request',
            categoryUrl: 'request/overview',
            description:
                'Welcome to Hubql Docs! this is where you will find official information on how to use Hubql API client in your projects.',
            color: 'bg-accent-100',
        },
        {
            name: 'Response',
            categoryUrl: 'response/overview',
            description:
                'Welcome to Hubql Docs! this is where you will find official information on how to use Hubql API client in your projects.',
            color: 'bg-accent-100',
        },
    ]

    const otherlinks = [
        {
            name: 'Hubql Support',
            url: '/support',
            description:
                'Welcome to Hubql Docs! this is where you will find official information on how to use Hubql API client in your projects.',
        },
        {
            name: 'Bugs and feature requests',
            url: 'https://github.com/hubql/hubql',
            description:
                'Welcome to Hubql Docs! this is where you will find official information on how to use Hubql API client in your projects.',
        },
        {
            name: 'Hubql Blog',
            url: '/blog',
            description:
                'Welcome to Hubql Docs! this is where you will find official information on how to use Hubql API client in your projects.',
        },
    ]

    return (
        <Layout data={data}>
            <div className=" w-full h-fit text-center my-20 mx-auto">
                Available soon...
            </div>
        </Layout>
    )

    // Uncomment when docs are ready
    // return (
    //     <Layout data={data}>
    //         <section className="w-full">
    //             {/* ... rest of the component ... */}
    //         </section>
    //     </Layout>
    // )
}
