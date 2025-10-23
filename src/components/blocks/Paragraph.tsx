import { PagesBlocksParagraph } from '@/tina/__generated__/types'
import { Template } from 'tinacms'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { cn } from '../util/cn'
import { ColoredText } from './ColoredText'

export const Paragraph = ({ data }: { data: PagesBlocksParagraph }) => {
    const components = {
        ColoredText,
    }

    return (
        <div
            className={cn(
                'w-full max-w-4xl mx-auto px-8 flex justify-center',
                data.css
            )}
        >
            <TinaMarkdown content={data.content} components={components} />
        </div>
    )
}

export const paragraphBlockSchema: Template = {
    name: 'paragraph',
    label: 'Paragraph',
    fields: [
        {
            type: 'rich-text',
            label: 'Content',
            name: 'content',
            isBody: true,
            templates: [
                {
                    name: 'ColoredText',
                    label: 'Colored Text',
                    fields: [
                        {
                            type: 'string',
                            name: 'text',
                            label: 'Text',
                        },
                        {
                            type: 'string',
                            name: 'className',
                            label: 'ClassName',
                        },
                    ],
                },
            ],
        },
        {
            type: 'string',
            label: 'css',
            name: 'css',
        },
    ],
}
