import { PagesBlocksImage } from '@/tina/__generated__/types'
import Image from 'next/image'
import { Template } from 'tinacms'
import { cn } from '../util/cn'

export const ImageComponent = ({ data }: { data: PagesBlocksImage }) => {
    return (
        <div
            className={cn(
                'relative w-full max-w-4xl mx-auto flex justify-center px-8',
                data.css
            )}
        >
            <Image
                src={data.src ?? ''}
                alt={data.alt ?? ''}
                width={data.width ?? 400}
                height={data.height ?? 300}
                style={{
                    maxWidth: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                }}
            />
        </div>
    )
}

export const imageBlockSchema: Template = {
    name: 'image',
    label: 'Image',
    fields: [
        {
            name: 'src',
            label: 'Image Source',
            type: 'image',
        },
        {
            name: 'alt',
            label: 'Alt Text',
            type: 'string',
        },
        {
            type: 'number',
            label: 'width',
            name: 'width',
        },
        {
            type: 'number',
            label: 'height',
            name: 'height',
        },
        {
            type: 'string',
            label: 'css',
            name: 'css',
        },
    ],
}
