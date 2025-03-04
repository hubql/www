import Image from 'next/image'
import React, { useMemo } from 'react'
import { Tweet } from 'react-tweet'
import { TinaMarkdownContent } from 'tinacms/dist/rich-text'
import { IFrame } from './IFrame'
import { cn } from '../util/cn'
import { Footer } from '../layout/Footer'

const renderComponent = (componentType: string, props: any) => {
    switch (componentType) {
        case 'EmbeddedIframe':
            return <IFrame title={props.title} url={props.url} />
        case 'JumpTarget':
            return (
                <a
                    //@ts-expect-error name
                    name={`${props.target}`}
                ></a>
            )
        case 'TwitterCard':
            return (
                <div className={'w-full flex justify-center'}>
                    <Tweet id={props.twitter ?? ''} />
                </div>
            )
        case 'Image':
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
                            style={{
                                objectFit: sizeStyle,
                                maxWidth: '100%',
                                height: 'auto',
                            }}
                        />
                        {hasCaption && (
                            <figcaption className="absolute -bottom-6 w-max text-center text-neutral-500 text-[14px]  ">
                                {props.image.caption}
                            </figcaption>
                        )}
                    </figure>
                </div>
            )
        case 'Cta':
            return (
                <div className="pt-8">
                    <p className="pt-16 border-t border-neutral-700">
                        Thank you for taking the time to read our latest
                        changelog post. We&apos;re excited about the
                        improvements and updates we&apos;ve made, and we
                        can&apos;t wait to hear your thoughts and feedback.
                        <br />
                        <br />
                        <strong className="text-neutral-50">
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
                        These are the perfect places to connect with fellow
                        users, share your ideas, report any issues you
                        encounter, and stay up-to-date with the latest
                        developments.
                        <br /> Click on the link below to join our Discord
                        server and become a part of our community:
                        <br />
                        <br />{' '}
                        <a href="https://discord.gg/NjAwH6VkwY" target="_blank">
                            Join Our Discord
                        </a>
                        <br />
                        <br />
                        Additionally, we invite you to connect with us on
                        LinkedIn for more networking and updates. Follow our
                        LinkedIn page to stay informed about our company&apos;s
                        news, job opportunities, and industry insights. <br />
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
                        together! We look forward to seeing you in our App,
                        Discord or LinkedIn.
                    </p>
                </div>
            )
        default:
            return null
    }
}

// Helper function to generate stable keys
const generateKey = (prefix: string, index: number, identifier?: string) =>
    `${prefix}-${index}${identifier ? `-${identifier}` : ''}`

const renderChild = (child: any, parentKey: string) => {
    if (!child) return null
    if (child.text) return child.text

    switch (child.type) {
        case 'a':
            return child?.children?.map((subChild: any, index: number) => (
                <a
                    key={generateKey('link', index, child.url)}
                    href={child.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {renderChild(subChild, generateKey('link-child', index))}
                </a>
            ))
        case 'strong':
            return child?.children?.map((subChild: any, index: number) => (
                <strong key={generateKey('strong', index, parentKey)}>
                    {renderChild(subChild, generateKey('strong-child', index))}
                </strong>
            ))
        case 'li':
            return child?.children?.map((subChild: any, index: number) => (
                <li key={generateKey('li', index, parentKey)}>
                    {renderChild(subChild, generateKey('li-child', index))}
                </li>
            ))
        case 'img':
            return (
                <img
                    key={generateKey('img', 0, child.url)}
                    src={child.url}
                    alt={child.alt}
                />
            )
        default:
            return child?.children?.map((subChild: any, index: number) => (
                <span key={generateKey('text', index, parentKey)}>
                    {renderChild(subChild, generateKey('text-child', index))}
                </span>
            ))
    }
}

const ContentBlock = ({ child, index }: { child: any; index: number }) => {
    const key = generateKey(child.type, index)
    const commonProps = {
        key,
        className: 'text-lg font-normal text-black dark:text-white',
    }

    switch (child.type) {
        case 'h1':
        case 'h2':
        case 'h3':
            const HeadingTag = child.type
            const headingId = child.children[0]?.text
                ?.replaceAll(' ', '-')
                .toLowerCase()
            return (
                <HeadingTag
                    {...commonProps}
                    id={headingId}
                    className={`${
                        child.type === 'h1'
                            ? 'text-xl'
                            : child.type === 'h2'
                            ? 'text-lg'
                            : 'text-md'
                    } font-bold text-black dark:text-white`}
                >
                    {child.children?.map((subChild: any, subIndex: number) =>
                        renderChild(
                            subChild,
                            generateKey(`${child.type}-child`, subIndex)
                        )
                    )}
                </HeadingTag>
            )
        case 'p':
            return (
                <p {...commonProps}>
                    {child.children?.map((subChild: any, subIndex: number) =>
                        renderChild(subChild, generateKey('p-child', subIndex))
                    )}
                </p>
            )
        case 'ul':
        case 'ol':
            const ListTag = child.type
            return (
                <ListTag {...commonProps}>
                    {child.children?.map((subChild: any, subIndex: number) =>
                        renderChild(
                            subChild,
                            generateKey(`${child.type}-child`, subIndex)
                        )
                    )}
                </ListTag>
            )
        case 'mdxJsxFlowElement':
            return renderComponent(child.name, {
                ...child.props,
                key: generateKey('component', index, child.name),
            })
        default:
            return (
                <span {...commonProps}>
                    {child.children?.map((subChild: any, subIndex: number) =>
                        renderChild(
                            subChild,
                            generateKey('span-child', subIndex)
                        )
                    )}
                </span>
            )
    }
}

export const DocsTemplate = (props: {
    footer: any
    content: {
        body: TinaMarkdownContent | TinaMarkdownContent[]
        title: string
        category: { name: string }
    }
}) => {
    const body = Array.isArray(props.content.body)
        ? props.content.body
        : [props.content.body]

    const hasHeading = useMemo(
        () =>
            body.some((child: any) =>
                child.children?.some((subChild: any) =>
                    subChild.type?.includes('h')
                )
            ),
        [body]
    )

    const mainContent = useMemo(
        () => (
            <div className="max-w-full w-full pb-24 prose prose-headings:text-black dark:prose-headings:text-neutral-50 dark:prose-p:text-neutral-400 prose-p:text-neutral-800 prose-a:text-white prose-a:underline prose-a:underline-offset-4 prose-p:text-md prose-p:font-normal prose-li:text-md prose-li:text-neutral-800 dark:prose-li:text-neutral-300">
                <div className="w-full pt-8 lg:pt-0 pb-2 border-b border-neutral-800 mb-8">
                    <h1 className="text-left text-3xl mx-auto font-bold text-black dark:text-white">
                        {props.content.title}
                    </h1>
                </div>
                {(props.content.body as any).children?.map(
                    (child: any, index: number) => (
                        <ContentBlock
                            key={generateKey('block', index)}
                            child={child}
                            index={index}
                        />
                    )
                )}
            </div>
        ),
        [props.content.body, props.content.title]
    )

    const tableOfContents = useMemo(
        () =>
            hasHeading && (
                <div className="hidden col-span-4 top-0 right-0 z-10 border-l border-neutral-800 md:flex flex-col p-8 gap-2">
                    {(props.content.body as any).children?.map(
                        (child: any, index: number) => {
                            if (child.type?.includes('h')) {
                                const headingText = child.children[0]?.text
                                return (
                                    <a
                                        key={generateKey(
                                            'toc',
                                            index,
                                            headingText
                                        )}
                                        className="text-base text-neutral-400 hover:text-white hover:underline hover:underline-offset-4"
                                        href={`#${headingText
                                            ?.replaceAll(' ', '-')
                                            .toLowerCase()}`}
                                    >
                                        {headingText}
                                    </a>
                                )
                            }
                            return null
                        }
                    )}
                </div>
            ),
        [hasHeading, props.content.body]
    )

    return (
        <div className="relative w-full px-0 pt-16 mx-auto lg:pl-[320px]">
            <div
                className={cn(
                    'max-w-7xl mx-auto grid grid-cols-12 min-h-screen',
                    !hasHeading && '!max-w-5xl'
                )}
            >
                <div
                    className={cn(
                        'col-span-12 md:col-span-8 px-4 lg:px-8',
                        !hasHeading && 'md:!col-span-12'
                    )}
                >
                    {mainContent}
                </div>
                {tableOfContents}
            </div>
            <Footer />
        </div>
    )
}
