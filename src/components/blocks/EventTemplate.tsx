import Image from 'next/image'
import React from 'react'
import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text'
import { AddToCalendar } from '../calendar/AddToCalendar'
import { ShareButtons } from '../social/ShareButtons'

interface EventTemplateProps {
    content: {
        body: TinaMarkdownContent | TinaMarkdownContent[]
        title: string
        pubDate: string
        eventDate: any
        eventCategory?: {
            name?: string
            color?: string
        }
        heroImage?: string
        eventStartTime?: string
        eventEndTime?: string
        city: string
        country: string
        location: string
        url: string
        image: string
        description: string
        map: string
    }
}

export const EventTemplate = (props: EventTemplateProps) => {
    return (
        <div>
            <div className="title-section w-full flex xl:flex-row flex-col border-b border-neutral-800 divide-x divide-neutral-800">
                <div className="w-full xl:w-2/3 flex flex-col pl-4 lg:pl-16 pr-4 lg:pr-8 py-12">
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
                    <h1 className="text-left text-2xl lg:text-3xl font-bold   text-black dark:text-white font-orbitron mb-4">
                        {props.content.title}
                    </h1>

                    <div className="flex items-center gap-4 mb-4">
                        <AddToCalendar
                            eventDate={props.content.eventDate}
                            startTime={props.content.eventStartTime ?? ''}
                            endTime={props.content.eventEndTime ?? ''}
                            url={props.content.url}
                        />
                    </div>
                    <a href={`#venue-location`}>
                        <div className="hover:bg-neutral-800 rounded-sm hover:px-4 py-2 w-fit text-[14px]  text-neutral-400 transition-all duration-300">
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
                            url={props.content.url}
                        />
                    </div>
                </div>

                <div className="w-full xl:w-1/3">
                    {props.content?.heroImage && (
                        <div className="relative w-full aspect-square">
                            <Image
                                src={props.content?.heroImage}
                                alt="logo"
                                fill={true}
                                sizes="(max-width: 400px) 100vw, (max-width: 400px) 50vw, 33vw"
                                style={{ objectFit: 'cover' }}
                                className="max-lg:p-3"
                                priority={true}
                            />
                        </div>
                    )}
                </div>
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
