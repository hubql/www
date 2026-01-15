'use client'

import { MoveUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'

export const OpenSource = () => {
    const [stars, setStars] = useState<number | null>(null)

    useEffect(() => {
        const fetchStarCount = async () => {
            try {
                const response = await fetch(
                    'https://api.github.com/repos/hubql/hubql'
                )
                if (response.ok) {
                    const data = await response.json()
                    setStars(data.stargazers_count)
                } else {
                    console.error('Failed to fetch star count')
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchStarCount()
    }, [])

    const linkList = [
        {
            star: stars ?? '10',
            text: 'stars only on GitHub',
            link: 'https://github.com/hubql/hubql',
        },
        {
            title: 'Apache 2.0',
            text: 'open source license',
            link: 'https://github.com/hubql/hubql/blob/main/LICENSE',
        },
    ]

    return (
        <div className="w-full">
            <div className="max-w-screen-xl mx-auto border-y border-neutral-800">
                <div className="w-full flex flex-col lg:grid lg:grid-cols-2 grid-rows-5 lg:aspect-video ">
                    <div className="group max-md:aspect-square max-lg:aspect-video cursor-container relative overflow-clip w-full row-span-3 md:row-span-4 col-span-2 flex flex-col items-center justify-center border-b border-neutral-800">
                        <div className="relative z-10 flex flex-col items-center justify-center h-fit w-fit">
                            <div className="max-w-lg text-center text-xl md:text-3xl px-4 font-bold leading-normal">
                                <h3 className="text-accent-100 font-orbitron font-bold leading-normal tracking-widest pb-2 text-xl md:text-3xl">
                                    Open source for impact
                                </h3>
                                <p className="mb-0">
                                    Hubql is Apache 2.0 licensed with source
                                    available to view, contribute and self-host.
                                </p>
                            </div>
                        </div>
                        <div
                            className="max-md:hidden absolute z-0 w-[420px] h-[420px] rounded-full opacity-30  group-hover:scale-105 transition-all ease-in duration-300"
                            style={{
                                border: '4px solid transparent',
                                boxShadow:
                                    '0 0 100px 10px rgba(18, 234, 97, 0.5), 0 0 20px rgba(18, 234, 97, 1)',
                            }}
                        />
                    </div>
                    {linkList.map((item, index) => (
                        <LinkItem
                            key={item.text + index}
                            star={item.star}
                            title={item.title}
                            text={item.text}
                            link={item.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

const LinkItem = ({
    star,
    title,
    text,
    link,
}: {
    star?: number | string | undefined
    title?: string
    text: string
    link: string
}) => {
    return (
        <a
            className="max-lg:min-h-[140px] col-span-2 lg:col-span-1 max-lg:last:border-t relative group lg:last:border-l border-neutral-800 w-full h-full flex flex-col items-center justify-center row-span-2 md:row-span-1 transition-all ease-in overflow-clip"
            href={link}
        >
            <span className="font-bold text-white text-2xl lg:text-4xl font-orbitron">
                {star && star}
                {title && title}
            </span>
            <div className="flex flex-col gap-0 items-center">
                <p className="text-base font-normal text-neutral-400 mb-0">
                    {text}
                </p>
                {star && (
                    <span className="stroke-accent-100 text-sm block max-lg:text-xs">
                        Help us reach new heights 🙏
                    </span>
                )}
            </div>
            <MoveUpRight className="group-hover:opacity-100 scale-0 group-hover:scale-100 ocapity-0 w-8 h-8  stroke-accent-100 absolute top-4 right-4 transition-all ease-in" />
            <div className="group-hover:opacity-20 scale-0 group-hover:scale-100 opacity-0 w-72 h-72 bg-accent-500 absolute -top-32 -right-32 transition-all ease-in blur-2xl origin-top-right rounded-full"></div>
        </a>
    )
}
