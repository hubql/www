import Link from 'next/link'
import { FormattedDate } from '../util/FormattedDate'

interface EventListProps {
    events: any[]
    sectionTitle: string
}

export const EventList = ({ events, sectionTitle }: EventListProps) => {
    if (events.length === 0) return null

    return (
        <section className={sectionTitle === 'Upcoming Events' ? 'mb-16' : ''}>
            <h2 className="text-2xl font-bold mb-4 px-4">{sectionTitle}</h2>
            <ul className="w-full grid grid-cols-1 divide-y divide-neutral-800 border-y border-neutral-800">
                {events.map((post, index) => (
                    <li
                        className="blog-card w-full hover:bg-neutral-900 transition-all ease-in cursor-pointer"
                        key={`${sectionTitle
                            .toLowerCase()
                            .replace(' ', '-')}-event-${index}`}
                    >
                        <Link
                            href={`/events/${post?._sys?.filename}`}
                            className="w-full grid grid-cols-1 md:grid-cols-12 gap-2 px-4 py-8"
                        >
                            <div className="col-span-12 lg:col-span-7">
                                <h2 className="text-neutral-50 text-left lg:text-left leading-tight text-lg font-semibold font-orbitron tracking-widest">
                                    {post.title}
                                </h2>
                                <p className="date text-neutral-400 text-right lg:text-left leading-relaxed text-base max-lg:hidden">
                                    {post.seoDescription}
                                </p>
                            </div>
                            {post?.eventCategory?.name && (
                                <div className="col-span-12 lg:col-span-3 flex lg:justify-center h-full items-center">
                                    <div
                                        className="select-none bg-neutral-900 rounded-full px-3 py-1 text-sm flex items-center justify-center w-fit h-fit font-orbitron tracking-widest font-semibold"
                                        style={{
                                            color: post?.eventCategory?.color,
                                        }}
                                    >
                                        {post.eventCategory.name}
                                    </div>
                                </div>
                            )}
                            <div className="col-span-12 lg:col-span-2 flex lg:justify-end h-full items-center">
                                <p className="date text-neutral-400 text-right leading-relaxed text-base">
                                    <FormattedDate date={post.eventDate} />
                                </p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}
