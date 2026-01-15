import Image from 'next/image'
import Link from 'next/link'
import client from '@/tina/__generated__/client'
import { Chevron } from '../../../components/icons/Chevron'
import { Layout } from '../../../components/layout/Layout'

export default async function Glossary() {
    const res = await client.queries.global({ relativePath: 'settings.json' })
    const header = res.data.global.header
    const footer = res.data.global.footer

    const articles = [
        {
            title: 'What is an API',
            href: '/resources/glossaries/what-is-an-api',
            description:
                'An API (Application Programming Interface) is a set of rules and protocols that allow one software application to communicate with another. APIs are used to enable the integration of different software systems, allowing them to work together to achieve a common goal.',
            imageUrl: '/what-is-a-data-schema.png',
        },
        {
            title: 'What is HTTP Status Code 404',
            href: '/resources/glossaries/http-status-404',
            description:
                'HTTP Status Code 404 is a status code that is returned when a requested resource is not found on the server. This can happen when a URL is entered incorrectly or when the resource is not available.',
            imageUrl: '/http-status-404.png',
        },
    ]

    return (
        <Layout
            data={{
                seoTitle: 'API glossaries',
            }}
        >
            <div>
                <div>
                    <div className="relative w-full overflow-hidden flex justify-center">
                        <div className="w-full max-w-7xl px-8 mx-auto py-16 lg:py-20">
                            <div className="flex flex-col gap-6 items-center text-center">
                                <h1
                                    data-tina-field=""
                                    className="w-full relative text-4xl lg:text-6xl lg:leading-tight leading-tight font-medium  "
                                >
                                    API glossaries
                                </h1>

                                <p className=" relative text-2xl lg:text-2xl lg:leading-tight leading-tight font-medium  ">
                                    Learn more about API and related topics with
                                    our glossaries:
                                </p>
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    {articles.map((item, index) => (
                                        <div
                                            key={'resource-article-' + index}
                                            className="  font-medium"
                                        >
                                            <Link href={`${item.href}`}>
                                                <div className="bg-black border border-zinc-800 rounded-sm hover:border-zinc-100 cursor-pointer">
                                                    <div className="p-6">
                                                        <h3 className="text-xl">
                                                            {item.title}
                                                        </h3>
                                                        <Image
                                                            className="my-2"
                                                            src={item.imageUrl}
                                                            alt={item.title}
                                                            width={400}
                                                            height={400}
                                                            style={{
                                                                maxWidth:
                                                                    '100%',
                                                                height: 'auto',
                                                            }}
                                                        />
                                                        <p className="text-lg text-left text-zinc-400 line-clamp-3  ">
                                                            {item.description.substring(
                                                                0,
                                                                100
                                                            )}
                                                            ...
                                                        </p>
                                                        <div className="flex items-center gap-1 text-sm text-zinc-50 mt-2">
                                                            View article
                                                            <Chevron className="text-accent-500 w-4 h-4" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
