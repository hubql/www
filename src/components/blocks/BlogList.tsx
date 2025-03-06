import Image from 'next/image'
import Link from 'next/link'
import { Template } from 'tinacms'
import { tinaField } from 'tinacms/dist/react'
import {
    LandingsBlocksFeaturedblog,
    PagesBlocksFeaturedblog,
} from '../../../tina/__generated__/types'
import { Chevron } from '../icons/Chevron'
import { Rss } from 'lucide-react'

export const FeaturedBlog = ({
    data,
    posts,
}: {
    data: PagesBlocksFeaturedblog | LandingsBlocksFeaturedblog
    posts: any
}) => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="max-w-xl mx-r py-16 px-8">
                <div className="flex flex-row gap-2 justify-start items-center">
                    <Rss className="w-7 h-7 stroke-accent-100" />
                    <h2
                        className="text-left text-2xl lg:text-3xl font-bold   text-black dark:text-white font-orbitron"
                        data-tina-field={tinaField(data, 'title')}
                    >
                        {data.title}
                    </h2>
                </div>
                <p
                    className="text-left text-neutral-400 text-base mb-0 "
                    data-tina-field={tinaField(data, 'paragraph')}
                >
                    {data.paragraph}
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3  divide-x divide-neutral-800 border-y border-neutral-800">
                {posts?.map((item: any, index: number) => (
                    <BlogCard item={item} key={'blog-card' + index} />
                ))}
            </div>
            <Link
                href={'/blog'}
                className="text-neutral-50 hover:text-neutral-400 visited:text-neutral-50 text-center text-lg"
            >
                <div className="w-full flex justify-center items-center gap-2  text-black dark:text-white  py-8">
                    See all our blog articles
                    <Chevron className="text-accent-500 w-4 h-4" />
                </div>
            </Link>
        </div>
    )
}

const BlogCard = ({ item }: { item: any }) => {
    return (
        <Link href={`/blog/${item._sys.filename}`}>
            <div className="bg-black hover:bg-neutral-900 rounded-sm cursor-pointer h-full w-full">
                <div className="p-6 flex flex-col h-full">
                    {' '}
                    {/* Added flex flex-col and h-full */}
                    <h3 className="text-xl text-black dark:text-white ">
                        {item.title}
                    </h3>
                    <p className="text-base text-neutral-900 dark:text-neutral-400 line-clamp-3 font-normal">
                        {item.seoDescription}
                    </p>
                    <div className="flex items-center gap-1 text-sm text-black dark:text-white mt-auto">
                        {' '}
                        {/* Added mt-auto */}
                        View article
                        <Chevron className="text-accent-500 w-4 h-4" />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export const featuredBlog: Template = {
    name: 'featuredblog',
    label: 'FeaturedBlog',
    ui: {
        previewSrc: '',
        defaultItem: {
            title: 'This Big Text is Totally Awesome',
            paragraph:
                'Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.',
        },
    },
    fields: [
        {
            type: 'string',
            label: 'Title',
            name: 'title',
        },
        {
            type: 'string',
            label: 'Paragraph',
            name: 'paragraph',
            ui: {
                component: 'textarea',
            },
        },
    ],
}
