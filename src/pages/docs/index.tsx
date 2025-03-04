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

export default function Docs({ header, footer }: { header: any; footer: any }) {
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
            url: 'https://github.com/hubql/hubql', //link to a form?
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

    return (
        <Layout data={data}>
            <section className="w-full">
                <div className="w-full flex items-center  gap-12">
                    <div className="flex flex-col gap-0 pt-16 pb-12 px-4">
                        <div className="flex items-center justify-start gap-2 mb-2">
                            <BookOpen className="w-8 h-8 stroke-accent-100" />
                            <h1 className="text-3xl text-white !leading-none mb-0">
                                Hubql Docs
                            </h1>
                        </div>
                        <p className="text-neutral-400 text-base">
                            Learn how to started with Hubql through docs and
                            resources.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center border-y border-neutral-800">
                        <div className="flex flex-col gap-0w-full col-span-12 lg:col-span-8">
                            <div className="overflow-hidden prose-h4:text-2xl cursor-pointer hover:bg-neutral-900 hhover:shadow-xl transition-transform ease-in  py-4 ">
                                <Link
                                    href={`/docs/quickstarts/get-started`}
                                    className="w-full p-4"
                                >
                                    <div className="relative px-4 pb-2 pt-1 flex flex-col items-start justify-center gap-4">
                                        <div className="w-full flex items-center justify-start gap-2">
                                            <div
                                                className={cn(
                                                    'w-1 h-5 rounded-full',
                                                    'bg-accent-100'
                                                )}
                                            />
                                            <h2 className="text-2xl mb-0 mt-0">
                                                Getting started
                                            </h2>
                                        </div>

                                        <p className="text-sm text-neutral-400">
                                            Discover the fastest way to try
                                            Hubql in just a few minutes.
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="border-l border-neutral-800 h-full flex flex-col justify-center col-span-12 lg:col-span-4">
                            <div>
                                <div className="w-full mx-auto flex justify-center !bg-transparent mb-4 gap-4">
                                    {[
                                        {
                                            name: 'Javascript',
                                            image: '/js.png',
                                            href: '/docs/quickstarts/cdn',
                                        },
                                        {
                                            name: 'NestJS',
                                            image: '/nest.svg',
                                            href: '/docs/quickstarts/nestjs',
                                        },
                                        {
                                            name: 'Elysia',
                                            image: '/elysia.svg',
                                            href: '/docs/quickstarts/elysia',
                                        },
                                        // {
                                        //   name: "Express",
                                        //   image: "/express.svg",
                                        //   href: "/plugins/express",
                                        // },
                                        // {
                                        //   name: "JS",
                                        //   image: "/js.svg",
                                        //   href: "/plugins/js",
                                        // },
                                        {
                                            name: 'Hubql Cloud',
                                            image: '/hubql-logo.png',
                                            href: '/cloud',
                                        },
                                    ].map((item, index) => {
                                        return (
                                            <div
                                                className=""
                                                key={'plugin' + index}
                                            >
                                                <Link
                                                    href={item.href}
                                                    className="flex grayscale"
                                                >
                                                    <Image
                                                        title={item.name}
                                                        src={item.image}
                                                        width={40}
                                                        height={40}
                                                        alt={item.name}
                                                        className="mr-2 center"
                                                        style={{
                                                            maxWidth: '100%',
                                                            height: 'auto',
                                                        }}
                                                    />
                                                </Link>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-xl py-8 px-4 mb-0">
                        What do you want to know?
                    </h2>
                    <ul className="w-full grid grid-cols-1 lg:grid-cols-3 border-y border-neutral-800">
                        {docsCategory.map((category, index) => (
                            <li
                                key={'categoryMenu-' + index}
                                className=" w-full col-span-6 lg:col-span-1 overflow-hidden border-r last:border-r-0 border-neutral-800 prose-h4:text-2xl cursor-pointer hover:bg-neutral-900  hover:shadow-xl transition-transform ease-in"
                            >
                                <Link
                                    href={`/docs/${category.categoryUrl}`}
                                    className="w-full p-4"
                                >
                                    <div className="relative px-4 pb-2 pt-1 flex flex-col items-start justify-center gap-4">
                                        <div className="w-full flex items-center justify-start gap-2">
                                            <div
                                                className={cn(
                                                    'w-1 h-5 rounded-full',
                                                    category.color
                                                )}
                                            />
                                            <h2 className="text-2xl mb-0">
                                                {category.name}
                                            </h2>
                                        </div>

                                        <p className="text-sm text-neutral-400 mb-0">
                                            {category.description}
                                        </p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl py-8 px-4 mb-0">Other resources</h2>
                    <ul className="w-full grid grid-cols-1 lg:grid-cols-3 border-y border-neutral-800">
                        {otherlinks.map((category, index) => (
                            <li
                                key={'categoryMenu-' + index}
                                className=" w-full col-span-6 lg:col-span-1 overflow-hidden border-r last:border-r-0 border-neutral-800 prose-h4:text-2xl cursor-pointer hover:bg-neutral-900  hover:shadow-xl transition-transform ease-in"
                            >
                                <Link
                                    href={category.url}
                                    className="w-full p-4"
                                >
                                    <div className="relative px-4 pb-2 pt-1 flex flex-col items-start justify-center gap-4">
                                        <div className="w-full flex items-center justify-start gap-2">
                                            <div
                                                className={cn(
                                                    'w-1 h-5 rounded-full bg-amber-500'
                                                )}
                                            />
                                            <p className="mb-0">
                                                {category.name}
                                            </p>
                                        </div>

                                        <span className="text-sm text-neutral-400">
                                            {category.description}
                                        </span>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <div className="flex flex-col lg:flex-row items-start lg:items-start justify-center text-left lg:text-center">
                        <div className="flex flex-col gap-2 items-start lg:items-start justify-start text-left py-8 px-4">
                            <h2 className="text-xl mt-16">Intro to Hubql</h2>
                            <p className="text-neutral-400 text-base text-left">
                                Build in combination with industry standards
                                like OpenAPI and emerging tech like local-first
                                bringing you the best and most efficient way to
                                develop APIs together.
                            </p>
                            <Button
                                href="https://cloud.hubql.com"
                                size="md"
                                icon="arrow"
                                className="w-full lg:w-fit "
                            >
                                Try Hubql
                            </Button>
                        </div>
                        <div className="w-full h-full overflow-hidden border-l border-neutral-800 h-full">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube-nocookie.com/embed/KAsjv4w66Yo?si=roKdoT3iWsD-Q-_2"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="aspect-video w-full h-full"
                            ></iframe>{' '}
                            <p className="text-neutral-400 text-sm text-center mt-1">
                                Watch a short demo (2min)
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export const getStaticProps = async () => {
    const resSetting = await client.queries.global({
        relativePath: 'settings.json',
    })
    const header = resSetting.data.global.header
    const footer = resSetting.data.global.footer

    return {
        props: {
            header,
            footer,
        },
    }
}
