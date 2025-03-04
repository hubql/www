import { motion } from 'framer-motion'
import { Browser } from '../animation/Browser'
import { EnvVariable } from '../animation/EnvVariable'
import { LocalFirst } from '../animation/LocalFirst'
import { OpenAPISpec } from '../animation/OpenAPISpec'
import { Peer2Peer } from '../animation/Peer2Peer'
import { SelectWorkspace } from '../animation/SelectWorkspace'
import { Button } from '../kit/Button'
import { Spotlight } from '../kit/Spotlight'
import { WobbleCard } from '../kit/Wobble'

export const GridFeatures = () => {
    const features = [
        {
            title: 'OpenAPI Specification Import',
            desc: 'Start with any OpenAPI spec either through introspection via URL or using our server libraries passing your API schema.',
            image: <OpenAPISpec />,
        },
        {
            title: 'Local-first',
            desc: 'Hubql is built as local-first library storing your data offline. Our API client runs in browser only either as a local server plugin for example as NestJS plugin or distributed directly via CDN as JS library.',
            image: <LocalFirst />,
        },
        {
            title: 'Workspace and Hubs',
            desc: 'Organize your APIs in workspaces and Hubs. Share your API Hubs with your team members and collaborate on the same API collection.',
            image: <SelectWorkspace />,
        },
        {
            title: 'Environments and Variables',
            desc: 'Store your environment variables in your workspace and use them in your API requests. No need to copy-paste your variables anymore.',
            image: <EnvVariable />,
        },

        {
            title: 'Peer-to-Peer',
            desc: 'Shorten your feedback loops,  reduce friction, and have fewer meetings. We enable you to get instant feedback by sharing your local environment with others to unblock your development when feedback is needed.',
            image: <Peer2Peer />,
        },

        {
            title: 'Hosted Cloud version available',
            desc: 'We are offering a hosted cloud version of Hubql API Client for you to get started quickly. No need to install anything, just start developing your APIs. All data is stored locally in your browser.',
            image: <Browser />,
        },
    ]
    return (
        <div className="w-full pt-16 lg:pt-32 pb-32">
            <div className="flex-col w-full dark:bg-black bg-black  dark:bg-grid-neutral-300/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)] z-0"></div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: 'easeInOut',
                    }}
                    className="relative pb-32 z-10"
                    id="video"
                >
                    <div className="flex flex-col gap-2 items-start lg:items-center justify-center text-left lg:text-center mx-auto max-w-3xl">
                        <h2
                            data-tina-field=""
                            className="relative text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white"
                        >
                            API development re-imagined
                        </h2>
                        <p className="text-neutral-400  text-base">
                            Build in combination with industry standards like
                            OpenAPI and emerging tech like local-first bringing
                            you the best and most efficient way to develop APIs
                            together.
                        </p>
                        <div className="w-full h-full mt-16 rounded-xl overflow-hidden">
                            <p className="text-neutral-400 text-sm">
                                Watch a short demo (2min)
                            </p>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube-nocookie.com/embed/KAsjv4w66Yo?si=roKdoT3iWsD-Q-_2"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="aspect-video w-full h-full"
                            ></iframe>
                        </div>
                        <Button
                            href="https://cloud.hubql.com"
                            size="md"
                            icon="arrow"
                            className="w-full lg:w-fit mt-8"
                        >
                            Try Hubql
                        </Button>
                    </div>
                </motion.div>
                <div className="w-full bg-black pt-16">
                    <h2 className="mb-8 text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white text-center !leading-normal relative z-10">
                        Everything you need to ship APIs faster
                    </h2>
                    <div className=" relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 bg-black p-0">
                        {features.map((feature, index) => (
                            <div
                                key={'feat-' + index}
                                className="col-span-1 h-[400px] border border-neutral-900  w-full p-4 lg:p-6 flex flex-col gap-8"
                            >
                                <div className="w-full flex items-center justify-center min-h-[200px]">
                                    {feature.image}
                                </div>
                                <div className="w-full flex flex-col">
                                    <h3 className="text-xl truncate">
                                        {feature.title}
                                    </h3>
                                    <p className="text-base line-clamp-3 text-neutral-400">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
