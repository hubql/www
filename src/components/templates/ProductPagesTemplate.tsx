import Image from 'next/image'
import { TrailingScroll } from '../animation/TrailingScroll'
import { Button } from '../kit/Button'
import { Faq } from './Faq'
import { Cta } from './Cta'
import { useRef } from 'react'
import { SubNav } from './SubNav'
import { cn } from '../util/cn'

export interface ProductPage {
    title: string
    description: string
    tryNowUrl?: string
    meetingUrl?: string
    videoUrl?: string
    videoTitle?: string
    videoDescription?: string
    section: {
        title: string
        description: string | JSX.Element
        imageUrl: string | undefined
    }[]
    ctaTitle: string
    ctaDescription: string
    ctaButtonText: string
    ctaButtonUrl: string
    faqs: {
        title: string
        description: string | JSX.Element
    }[]
}

export const ProductPagesTemplate = ({ content }: { content: ProductPage }) => {
    const ref = useRef(null)
    return (
        <div className="w-full rselative flex items-center justify-center overflow-clip ">
            <SubNav />
            <div className="w-full relative z-0 grid gri-cols-1 divide-y divide-neutral-800 lg:mt-[52px]">
                <div className="relative w-full p-4 min-h-[400px] flex flex-col justify-center items-center overflow-clip">
                    <h1 className="text-center max-w-xl mx-auto text-2xl lg:text-4xl font-orbitron">
                        {content.title}
                    </h1>
                    <p className="text-center max-w-xl mx-auto text-base font-normal text-neutral-400">
                        {content.description}
                    </p>
                    <div className="flex flex-wrap items-start w-fit gap-y-2 gap-x-2 justify-center p-[2px] rounded-sm mt-4">
                        {content.tryNowUrl && (
                            <Button
                                href={content.tryNowUrl}
                                size="md"
                                icon="arrow"
                                className="w-full lg:w-fit"
                            >
                                Get started
                            </Button>
                        )}

                        <Button
                            href={content.meetingUrl}
                            size="md"
                            icon="arrow"
                            className="bg-neutral-900 w-full lg:w-fit"
                        >
                            Request a demo
                        </Button>
                    </div>
                    <div className="absolute -top-0.5 -left-0.5 z-10">
                        <div className="w-[10px] h-[1px] bg-accent-100 -ml-1" />
                        <div className="h-[10px] w-[1px] bg-accent-100 -mt-1" />
                    </div>
                    <div className="absolute bottom-0 right-0 z-10">
                        <div className="w-[10px] h-[1px] bg-accent-100 -mr-[14px] -mb-[8px]" />
                        <div className="h-[10px] w-[1px] bg-accent-100 -mb-[4px] ml-[6px]" />
                    </div>
                    <div className="absolute -top-60 -right-60 z-0 bg-accent-100 opacity-10 blur-[100px] rounded-full w-[600px] h-[600px]" />
                </div>
                {content.videoTitle && (
                    <div className="w-full grid grid-cols-1 lg:grid-cols-3  divide-x divide-neutral-800 min-h-[400px]">
                        <div className="w-full p-[50px] h-full flex flex-col justify-center items-start col-span-1">
                            <h2 className="text-2xl font-orbitron">{content.videoTitle}</h2>
                            <p className="text-base text-neutral-400">
                                {content.videoDescription}
                            </p>
                        </div>
                        <div className="w-full  p-[50px]  col-span-2">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube-nocookie.com/embed/KAsjv4w66Yo?si=roKdoT3iWsD-Q-_2"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="aspect-video w-full h-full"
                            ></iframe>{' '}
                        </div>
                    </div>
                )}

                <div ref={ref} className="relative pl-[18px] xl:pl-[88px]">
                    <TrailingScroll containerRef={ref} />
                    {content.section.map((section: any, index: number) => (
                        <div
                            className={cn(
                                ' w-full grid grid-cols-1 lg:grid-cols-2 gap-[50px] border-l border-b border-neutral-800',
                                section.imageUrl === undefined &&
                                'lg:grid-cols-1'
                            )}
                            key={'prd-section-' + index}
                        >
                            <div className="w-full p-8">
                                <h2 className="text-2xl font-orbitron">{section.title}</h2>
                                <div className="text-base text-neutral-400 prose">
                                    {section.description}
                                </div>
                            </div>
                            <div
                                className={cn(
                                    'w-full bg-neutral-950 bg-grid-neutral-600/[0.2] object-cover border-l border-neutral-800',
                                    section.imageUrl === undefined && 'hidden'
                                )}
                            >
                                <Image
                                    src={section.imageUrl}
                                    width={1200}
                                    height={300}
                                    alt={section.title}
                                    style={{
                                        maxWidth: '100%',
                                        height: 'auto',
                                    }}
                                />
                            </div>
                        </div>
                    ))}{' '}
                    <div className="border-l border-neutral-800">
                        {content.faqs.length > 0 && <Faq faqs={content.faqs} />}
                    </div>
                    <div className="border-l border-t border-neutral-800">
                        <Cta
                            ctaTitle={content.ctaTitle}
                            ctaDescription={content.ctaDescription}
                            ctaButtonText={content.ctaButtonText}
                            ctaButtonUrl={content.ctaButtonUrl}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
