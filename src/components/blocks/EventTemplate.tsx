import { clsx } from 'clsx'
import Image from 'next/image'
import React from 'react'
import { Tweet } from 'react-tweet'
import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text'
import { AddToCalendar } from '../calendar/AddToCalendar'

const components = {
    JumpTarget: (props: { target: string }) => {
        return (
            <a
                //@ts-expect-error name
                name={`${props.target}`}
            ></a>
        )
    },
    TwitterCard: (props: { twitter: string | undefined }) => {
        return (
            <div className={'w-full flex justify-center'}>
                <Tweet id={props.twitter ?? ''} />
            </div>
        )
    },
    Image: (props: {
        image: { src: string; caption: string; size: boolean; alt: string }
    }) => {
        if (!props.image) return null
        const sizeStyle = props.image.size ? 'cover' : 'contain'
        const hasCaption = props.image.caption !== '' && props.image.caption
        return (
            <div className="mb-16">
                <figure
                    className={
                        'relative aspect-video flex flex-col items-center'
                    }
                >
                    <Image
                        src={props.image.src}
                        alt={props.image.alt}
                        fill={true}
                        quality={100}
                        priority={false}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{
                            objectFit: sizeStyle,
                            maxWidth: '100%',
                            height: 'auto',
                        }}
                    />
                    {hasCaption && (
                        <figcaption className="absolute -bottom-6 w-max text-center text-zinc-500 text-[14px]  ">
                            {props.image.caption}
                        </figcaption>
                    )}
                </figure>
            </div>
        )
    },
    Cta: () => {
        return (
            <div className="pt-8">
                <p className="pt-16 border-t border-zinc-700">
                    Thank you for taking the time to read our latest changelog
                    post. We&apos;re excited about the improvements and updates
                    we&apos;ve made, and we can&apos;t wait to hear your
                    thoughts and feedback.
                    <br />
                    <br />
                    <strong className="text-zinc-50">
                        Ready to get started?
                    </strong>{' '}
                    -{' '}
                    <a href="https://app.hubql.com" target="_blank">
                        Join Hubql
                    </a>
                    <br />
                    <br />
                    If you like our product and want to be part of the
                    discussion, we invite you to join our Discord community.
                    These are the perfect places to connect with fellow users,
                    share your ideas, report any issues you encounter, and stay
                    up-to-date with the latest developments.
                    <br /> Click on the link below to join our Discord server
                    and become a part of our community:
                    <br />
                    <br />{' '}
                    <a href="https://discord.gg/NjAwH6VkwY" target="_blank">
                        Join Our Discord
                    </a>
                    <br />
                    <br />
                    Additionally, we invite you to connect with us on LinkedIn
                    for more networking and updates. Follow our LinkedIn page to
                    stay informed about our company&apos;s news, job
                    opportunities, and industry insights. <br />
                    <br />
                    <a
                        href="https://www.linkedin.com/company/hubql/"
                        target="_blank"
                    >
                        Connect with Us on LinkedIn
                    </a>
                    <br />
                    <br />
                    We value your input, and your participation will help us
                    make our product even better. Let&apos;s build software
                    together! We look forward to seeing you in our App, Discord
                    or LinkedIn.
                </p>
            </div>
        )
    },
}

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
            <div className="title-section grid grid-cols-3 gap-4 border-b border-neutral-800 divide-x divide-neutral-800">
                <div className="col-span-2 flex flex-col px-4 py-16">
                    {props.content?.eventCategory?.name && (
                        <p
                            className="select-none px-4 py-1 rounded-full w-fit text-sm bg-neutral-800 font-semibold"
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
                                title: props.content.title,
                                eventDate: props.content.eventDate,
                                startTime: props.content.eventStartTime,
                                endTime: props.content.eventEndTime,
                                location: `${props.content.location}, ${props.content.city}, ${props.content.country}`,
                                description: props.content.description,
                            }}
                        />
                    </div>
                    <a href={`#venue-location`}>
                        <div className="hover:bg-neutral-800 rounded-md hover:px-4 py-2 w-fit text-[14px] font-semibold text-neutral-400 transition-all duration-300">
                            <span className="text-white">
                                {props.content?.location}
                            </span>{' '}
                            <br />
                            {`${props.content?.city}, ${props.content?.country}`}
                        </div>
                    </a>
                </div>
                <div>
                    <div className="w-full flex flex-col gap-4">
                        {props.content?.heroImage && (
                            <div className="relative w-full aspect-square">
                                <Image
                                    src={props.content?.heroImage}
                                    alt="logo"
                                    fill={true}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="w-full max-w-3xl mx-auto prose prose-headings:text-black dark:prose-headings:text-zinc-50 dark:prose-p:text-zinc-300 prose-p:text-zinc-800 prose-a:text-accent-500 prose-p:text-md prose-p:font-normal    prose-li:text-md prose-li:text-zinc-800 dark:prose-li:text-zinc-300 prose-p:text-zinc-800 prose-p:text-md prose-p:font-normal    prose-li:text-md prose-li:text-zinc-800 dark:prose-li:text-zinc-300 pt-16">
                <TinaMarkdown
                    content={props.content.body}
                    components={components}
                />
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
