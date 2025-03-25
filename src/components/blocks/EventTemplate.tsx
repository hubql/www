import Image from 'next/image'
import React from 'react'
import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text'
import { AddToCalendar } from '../calendar/AddToCalendar'
import { ShareButtons } from '../social/ShareButtons'

export const EventTemplate = (props: {
    content: {
        body: TinaMarkdownContent | TinaMarkdownContent[]
        title: string
        pubDate: string
        eventDate: string
        eventCategory: { name: string; color: string }
        heroImage: string
        eventStartTime: string
        eventEndTime: string
        city: string
        country: string
        location: string
        url: string
        image: string
        description: string
        map: string
    }
}) => {
    return (
        <div className="">
            <div className="title-section grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 border-b border-neutral-800 divide-x divide-neutral-800">
                <div className="xl:col-span-2 flex flex-col pl-4 lg:pl-16 pr-4 py-16">
                    {props.content?.eventCategory?.name && (
                        <p
                            className="select-none px-4 py-1 rounded-full w-fit text-sm bg-neutral-800 font-semibold mb-2"
                            style={{
                                color: props.content?.eventCategory?.color,
                            }}
                        >
                            {props.content?.eventCategory?.name}
                        </p>
                    )}
                    <h1 className="text-left text-2xl lg:text-4xl font-bold   text-black dark:text-white font-orbitron">
                        {props.content.title}
                    </h1>

                    <div className="flex items-center gap-4 mb-4">
                        <AddToCalendar
                            event={{
                                eventDate: props.content.eventDate,
                                startTime: props.content.eventStartTime,
                                endTime: props.content.eventEndTime,
                                url: props.content.url,
                            }}
                        />
                    </div>
                    <a href={`#venue-location`}>
                        <div className="hover:bg-neutral-800 rounded-md hover:px-4 py-2 w-fit text-[14px]  text-neutral-400 transition-all duration-300">
                            <span className="text-white text-lg font-semibold">
                                {props.content?.location}
                            </span>
                            <br />
                            {`${props.content?.city}, ${props.content?.country}`}
                        </div>
                    </a>

                    <div className="mt-4">
                        <ShareButtons
                            title={props.content.title}
                            url={
                                typeof window !== 'undefined'
                                    ? window.location.href.split('#')[0]
                                    : ''
                            }
                        />
                    </div>
                </div>

                {props.content?.heroImage && (
                    <div className="relative w-full h-full aspect-square">
                        <Image
                            src={props.content?.heroImage}
                            alt="logo"
                            fill={true}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={{ objectFit: 'cover' }}
                            className="max-lg:p-3"
                        />
                    </div>
                )}
            </div>
            <div className="w-full max-w-3xl px-4 mx-auto prose prose-headings:text-black dark:prose-headings:text-zinc-50 dark:prose-p:text-zinc-300 prose-p:text-zinc-800 prose-a:text-accent-500 prose-p:text-md prose-p:font-normal    prose-li:text-md prose-li:text-zinc-800 dark:prose-li:text-zinc-300 prose-p:text-zinc-800 prose-p:text-md prose-p:font-normal    prose-li:text-md prose-li:text-zinc-800 dark:prose-li:text-zinc-300 pt-16">
                <TinaMarkdown content={props.content.body} />
                <div
                    id="venue-location"
                    className="w-full h-[280px] relative rounded-md overflow-hidden mt-8 mb-16"
                >
                    <div
                        className="absolute inset-0 [&>iframe]:w-full [&>iframe]:h-full"
                        dangerouslySetInnerHTML={{ __html: props.content?.map }}
                    />
                </div>
            </div>
        </div>
    )
}
