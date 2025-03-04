import { motion } from 'framer-motion'
import Image from 'next/image'
import { Visualization } from '../animation/Visualization'
import { Button } from '../kit/Button'
import { Spotlight } from '../kit/Spotlight'
import { WobbleCard } from '../kit/Wobble'
import { ContactForm } from './ContactForm'
import { BarChart, BookOpen, Presentation, Users } from 'lucide-react'

const comingContent = [
    {
        title: 'API Reference',
        desc: 'Generate beautiful API references automatically and make them available in one-click deploy. A great way to explain or share with your API consumers!',
        asset: (
            <Image
                src={'/client-landing-page/api-reference.png'}
                placeholder="blur"
                blurDataURL="/client-landing-page/api-reference.png"
                width={539}
                height={184}
                alt="API reference"
                style={{
                    maxWidth: '100%',
                    height: 'auto',
                }}
            />
        ),
        url: '/product/api-reference-hosting',
        icon: <BookOpen className="h-5 stroke-accent-100" />,
    },
    {
        title: 'API Metrics',
        desc: 'Review API metrics right inside your API test client using Hubql. Get insights into your API performance without context-switching and make your API faster than ever.',
        asset: (
            <Image
                src={'/client-landing-page/monitoring.png'}
                placeholder="blur"
                blurDataURL="/client-landing-page/monitoring.png"
                width={539}
                height={184}
                alt="API Metrics"
                style={{
                    maxWidth: '100%',
                    height: 'auto',
                }}
            />
        ),
        url: '/solutions/api-metrics',
        icon: <BarChart className="h-5 stroke-accent-100" />,
    },
    {
        title: 'API Collaboration',
        desc: 'Work together with your team members on the same API collection. Share your API collection with your team members to test faster together.',
        asset: (
            <Image
                src={'/client-landing-page/api-collaboration.png'}
                placeholder="blur"
                blurDataURL="/client-landing-page/api-collaboration.png"
                alt="api collaboration"
                width={539}
                height={184}
                style={{
                    maxWidth: '100%',
                    height: 'auto',
                }}
            />
        ),
        url: '/solutions/api-collaboration',
        icon: <Users className="h-5 stroke-accent-100" />,
    },
    {
        title: 'API Visualization',
        desc: 'Make API schema available as easy-to-understand visualizations. Share your API schema with your team members in a visual way and collaborate.',
        asset: <Visualization />,
        url: '/solutions/api-visualization',
        icon: <Presentation className="h-5 stroke-accent-100" />,
    },
]

export const ComingSoon = () => {
    return (
        <div className="relative w-full">
            <Spotlight
                className="-top-40 right-0 md:left-60 md:-top-20 z-0"
                fill="#52525b"
            />
            <div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: 'easeInOut',
                    }}
                    className="relative pb-32"
                >
                    <div className="flex flex-col gap-2 items-start justify-start text-left">
                        <h2
                            data-tina-field=""
                            className="relative text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white"
                        >
                            More coming soon to your Hubs
                        </h2>
                        <p className="text-neutral-400 text-base">
                            Connect with us our social media and to build better
                            tools for you, together.
                        </p>
                        <div className="w-full flex flex-col lg:flex-row items-start lg:items-center gap-8 text-base">
                            <a
                                href="https://www.linkedin.com/company/hubql/"
                                target="_blank"
                                className=" underline underline-offset-4"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://twitter.com/HubqlHQ"
                                target="_blank"
                                className=" underline underline-offset-4"
                            >{`X (formely Twitter)`}</a>
                        </div>
                    </div>
                </motion.div>
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-32">
                    {comingContent.map((item, index) => (
                        <div
                            key={'cs-' + index}
                            className="col-span-1 h-full bg-black"
                        >
                            <div className="flex flex-row items-center gap-2 mb-2">
                                {item.icon}
                                <h3 className="text-xl mb-0">{item.title}</h3>
                            </div>
                            <p className="text-base text-neutral-400">
                                {item.desc}
                            </p>
                            {item.url && (
                                <Button
                                    icon="arrow"
                                    size="sm"
                                    href={item.url}
                                    variant="ghost"
                                    className="ml-auto underline underline-offset-4"
                                >
                                    Learn more
                                </Button>
                            )}
                            <div className="w-full p-4 flex items-center justify-center">
                                {item.asset}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
