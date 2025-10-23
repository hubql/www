import { PagesBlocksVshero } from '@/tina/__generated__/types'
import { Template } from 'tinacms'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { SparklesCore } from '../kit/Sparkles'
import { Spotlight } from '../kit/Spotlight'
import { ColoredText } from './ColoredText'

export const VsHero = ({ data }: { data: PagesBlocksVshero }) => {
    const components = {
        ColoredText,
    }

    return (
        <div className=" w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center overflow-hidden  h-[60vh]">
            <div className="relative w-full  h-full flex flex-col">
                <Spotlight
                    className="-top-40 right-0 md:left-[25%] md:-top-20 z-0"
                    fill="white"
                />
                <SparklesCore
                    background="transparent"
                    minSize={0.2}
                    maxSize={0.8}
                    particleDensity={10}
                    className="absolute z-0 w-full h-full"
                    particleColor="#ffffff"
                />
                <div className="absolute z-0 pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <div className="relative z-10w-full pt-32 pb-8 flex flex-col items-center max-w-2xl mx-auto  h-full">
                    <div className="relative mb-4">
                        <h1 className="text-center !leading-0">
                            {data.company}
                            <span className="italic text-accent-100 absolute -right-8 top-[40%] text-4xl underline underline-offset-8">
                                to
                            </span>
                            <br /> Hubql
                        </h1>
                    </div>
                    <div className="scroll-component prose text-neutral-300 text-lg prose-strong:text-xl prose-strong:font-bold prose-strong:text-white text-center prose-strong:!leading-0 !m-0">
                        <TinaMarkdown
                            content={data.description}
                            components={components}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export const vsHeroBlockSchema: Template = {
    name: 'vshero',
    label: 'VS Hero',
    fields: [
        {
            type: 'string',
            label: 'Hubql VS',
            name: 'company',
        },
        {
            type: 'rich-text',
            label: 'Description',
            name: 'description',
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
    ],
}
