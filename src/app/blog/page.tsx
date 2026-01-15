import { Layout } from '@/src/components/layout/Layout'
import { FormattedDate } from '@/src/components/util/FormattedDate'
import client from '@/tina/__generated__/client'
import { Rss } from 'lucide-react'
import Link from 'next/link'

async function getPosts() {
    const postsResponse = await client.queries.postConnection({
        sort: 'pubDate',
        filter: {
            pubDate: {
                before: new Date().toISOString(),
            },
        },
    })
    // @ts-ignore
    const postArray = postsResponse.data.postConnection.edges.map((post) => {
        return { data: post?.node }
    })
    const posts = []
    const map = new Map()
    for (const item of postArray) {
        if (!map.has(item.data?.id)) {
            map.set(item.data?.id, true)
            posts.push(item)
        }
    }
    return posts
}

export default async function BlogPage() {
    const posts = await getPosts()
    const resSetting = await client.queries.global({
        relativePath: 'settings.json',
    })
    const header = resSetting.data.global.header
    const footer = resSetting.data.global.footer

    const data = {
        seoTitle: 'Hubql Blog with news and announcements',
        seoDescription: 'Read our news and announcements on the Hubql blog',
    }

    return (
        <Layout data={data}>
            <section className="w-full lg:max-w-7xl mx-auto min-h-screen">
                <div className="px-4 py-8">
                    <div className="flex items-center gap-2 mb-2">
                        <Rss className="w-7 h-7 stroke-accent-100" />
                        <h1 className="text-3xl text-white font-semibold mb-0 font-lexend">
                            Blog
                        </h1>
                    </div>
                    <p className="text-neutral-400 text-base max-w-md">
                        Explore our blog and understand what we are up to at
                        Hubql and why we do what we do.
                    </p>
                </div>
                <ul className="w-full grid grid-cols-1 divide-y divide-neutral-800 border-y border-neutral-800 ">
                    {posts &&
                        posts
                            .slice(0)
                            .reverse()
                            .map((post: any, index: number) => (
                                <li
                                    className="blog-card w-full hover:bg-neutral-900 transition-all ease-in cursor-pointer"
                                    key={'blog-link' + index}
                                >
                                    <Link
                                        href={`/blog/${post?.data?._sys?.filename}`}
                                        className="w-full grid grid-cols-1 md:grid-cols-12 gap-2 px-4 pt-8 pb-4"
                                    >
                                        <div className="col-span-12 lg:col-span-8">
                                            <h2 className="text-neutral-50 text-left lg:text-left leading-tight text-lg font-semibold font-lexend">
                                                {post.data.title}
                                            </h2>
                                            <p className="date text-neutral-400 text-right lg:text-left leading-relaxed text-base max-lg:hidden">
                                                {post.data.seoDescription}
                                            </p>
                                        </div>
                                        <div className="col-span-12 lg:col-span-2 flex lg:justify-end h-full items-center">
                                            <div className="select-none bg-neutral-800 rounded-full px-3 py-1 text-base text-neutral-50 flex items-center justify-center w-fit h-fit">
                                                {post?.data?.category?.name ??
                                                    ''}
                                            </div>
                                        </div>
                                        <div className="col-span-12 lg:col-span-2 flex lg:justify-end h-full items-center">
                                            <p className="date text-neutral-400 text-right leading-relaxed text-base">
                                                <FormattedDate
                                                    date={post.data.pubDate}
                                                />
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                </ul>
            </section>
        </Layout>
    )
}
