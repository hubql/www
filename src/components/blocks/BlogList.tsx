import Link from 'next/link'
import { Template } from 'tinacms'
import { tinaField } from 'tinacms/dist/react'
import { PagesBlocksFeaturedblog } from '../../../tina/__generated__/types'
import { MoveRight } from 'lucide-react'

export const FeaturedBlog = ({
    data,
    posts,
}: {
    data: PagesBlocksFeaturedblog
    posts: any
}) => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center text-center py-2 px-8">
                <div className="flex flex-row gap-2 justify-center items-center">
                    <h2
                        className="text-[16px] font-normal text-black dark:text-white font-lexend pt-6"
                        data-tina-field={tinaField(data, 'title')}
                    >
                        {data.title}
                    </h2>
                </div>
                <p
                    className="font-lexend text-neutral-400 text-[14px] max-w-[420px]"
                    data-tina-field={tinaField(data, 'paragraph')}
                >
                    {data.paragraph}
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center px-6 items-center font-lexend">
                {posts?.map((item: any, index: number) => (
                    <BlogCard item={item} key={'blog-card' + index} />
                ))}
            </div>
            <Link
                href={'/blog'}
                className="text-center text-[14px] w-full flex justify-center items-center gap-2 text-black dark:text-white py-8 font-lexend hover:opacity-80"
            >
                See all our blog articles
                <MoveRight className="w-4 h-4 text-[#3ECF8E]" />
            </Link>
        </div>
    )
}

const BlogCard = ({ item }: { item: any }) => {
    return (
        <Link href={`/blog/${item._sys.filename}`}>
            <div className="bg-neutral-900 hover:bg-neutral-800 rounded-sm gap-2 cursor-pointer h-full w-full">
                <div className="p-6 flex flex-col h-full">
                    <h3 className="text-[18px] font-normal font-lexend text-black dark:text-white">
                        {item.title}
                    </h3>
                    <p className="font-lexend text-[14px] text-neutral-400 dark:text-neutral-400 line-clamp-3 font-normal">
                        {item.seoDescription}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-black dark:text-white mt-auto font-lexend pt-6 hover:opacity-80">
                        Learn more
                        <MoveRight className="w-4 h-4 text-[#3ECF8E] " />
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
