import clsx from 'clsx'
import { ChevronRightIcon, Github } from 'lucide-react'
import Link from 'next/link'
import { cn } from '../util/cn'

type sizeVariant = 'sm' | 'md' | 'lg' | 'icon'
type iconVariant = 'arrow' | 'discord' | undefined | 'github'
export type styleVariant = 'contain' | 'outlined' | 'ghost' | 'grey'

export const Button = ({
    children,
    href,
    className,
    size = 'md',
    icon,
    variant = 'contain',
}: {
    children?: any
    href?: string
    className?: string
    size?: sizeVariant
    icon?: iconVariant
    variant?: styleVariant
}) => {
    const sizeSm = size === 'sm' && 'text-sm py-2 !px-3 font-normal gap-2'
    const sizeMd = size === 'md' && 'text-base py-3  font-normal gap-8'
    const sizeLg = size === 'lg' && 'text-base py-4 font-normal'
    const sizeIcon =
        size === 'icon' && 'text-base py-3 !px-0 aspect-square font-normal'
    const variantContain =
        variant === 'contain' && 'bg-accent-500 !text-white hover:bg-accent-300'
    const variantOutlined =
        variant === 'outlined' &&
        'bg-transparent !text-white hover:underline border border-border'
    const variantGhost =
        variant === 'ghost' && 'bg-transparent !text-white hover:bg-neutral-800'
    const variantGrey =
        variant === 'grey' && 'bg-[#404040] text-white hover:bg-[#505050]'

    const iconLoader = (icon: iconVariant) => {
        switch (icon) {
            case 'arrow':
                return <ChevronRightIcon className={'w-5 h-5'} />
            case 'discord':
                return <DiscordIcon />
            case 'github':
                return <GithubIcon className={'w-5 h-5'} />
            default:
                return
        }
    }

    const isExternal = href?.startsWith('http')

    const buttonContent = (
        <>
            {children}
            {icon && (
                <div
                    className={cn(
                        'icon ',
                        !sizeIcon &&
                            'group-hover:translate-x-1 transition-transform ease-in'
                    )}
                >
                    {iconLoader(icon)}
                </div>
            )}
        </>
    )

    const buttonClasses = clsx(
        'button group relative w-fit hover:decoration-none transition-all ease-in  focus:scale-95 min-h-[34px] px-4 rounded-md flex flex-row items-center justify-between font-lexend font-normal',
        variantContain,
        variantOutlined,
        variantGhost,
        variantGrey,
        className,
        sizeSm,
        sizeMd,
        sizeLg
    )

    return isExternal ? (
        <a
            href={href}
            className={buttonClasses}
            target="_blank"
            rel="noopener noreferrer"
        >
            {buttonContent}
        </a>
    ) : (
        <Link href={href ?? ''} className={buttonClasses}>
            {buttonContent}
        </Link>
    )
}

export const ArrowIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
        >
            <path
                fillRule="evenodd"
                d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
            />
        </svg>
    )
}

const DiscordIcon = () => {
    return (
        <svg
            width="17"
            height="12"
            viewBox="0 0 17 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={'fill-black dark:fill-white'}
        >
            <g clipPath="url(#clip0_1037_2083)">
                <path
                    d="M14.2536 1.00498C13.148 0.528727 11.981 0.190857 10.7821 0C10.6181 0.27595 10.4697 0.559867 10.3375 0.85056C9.06048 0.669492 7.76188 0.669492 6.4849 0.85056C6.35263 0.559897 6.2042 0.275984 6.04022 0C4.84062 0.192468 3.67278 0.531141 2.56616 1.00747C0.36923 4.066 -0.226323 7.04857 0.0714537 9.98879C1.35803 10.8833 2.79808 11.5635 4.329 12C4.67371 11.5637 4.97875 11.1009 5.24085 10.6164C4.74302 10.4415 4.26251 10.2256 3.80491 9.97136C3.92534 9.88916 4.04313 9.80448 4.15695 9.72229C5.48847 10.3115 6.94176 10.617 8.41317 10.617C9.88458 10.617 11.3379 10.3115 12.6694 9.72229C12.7845 9.81071 12.9023 9.89539 13.0214 9.97136C12.5629 10.226 12.0816 10.4423 11.5828 10.6177C11.8446 11.1019 12.1497 11.5644 12.4947 12C14.0269 11.5653 15.4681 10.8853 16.7549 9.99004C17.1043 6.58032 16.158 3.62516 14.2536 1.00498ZM5.61804 8.18057C4.78823 8.18057 4.10269 7.47198 4.10269 6.60025C4.10269 5.72852 4.76441 5.0137 5.61539 5.0137C6.46637 5.0137 7.14662 5.72852 7.13207 6.60025C7.11751 7.47198 6.46372 8.18057 5.61804 8.18057ZM11.2083 8.18057C10.3772 8.18057 9.69427 7.47198 9.69427 6.60025C9.69427 5.72852 10.356 5.0137 11.2083 5.0137C12.0606 5.0137 12.7356 5.72852 12.721 6.60025C12.7064 7.47198 12.054 8.18057 11.2083 8.18057Z"
                    fill="current"
                />
            </g>
            <defs>
                <clipPath id="clip0_1037_2083">
                    <rect width="17" height="12" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

const GithubIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_473_7)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.65123 0C3.86732 0 0 3.89583 0 8.71551C0 12.5681 2.47793 15.8293 5.91547 16.9835C6.34525 17.0703 6.50268 16.796 6.50268 16.5653C6.50268 16.3632 6.48851 15.6706 6.48851 14.949C4.08195 15.4686 3.5808 13.9101 3.5808 13.9101C3.19405 12.9 2.62101 12.6404 2.62101 12.6404C1.83334 12.1065 2.67839 12.1065 2.67839 12.1065C3.55211 12.1642 4.01058 13.0011 4.01058 13.0011C4.78391 14.3285 6.03004 13.9535 6.53136 13.7225C6.60291 13.1598 6.83223 12.7702 7.07572 12.5538C5.15631 12.3517 3.13685 11.6014 3.13685 8.25368C3.13685 7.30132 3.4804 6.52216 4.02475 5.91618C3.93886 5.69978 3.638 4.80498 4.11081 3.60736C4.11081 3.60736 4.84128 3.37645 6.48833 4.50199C7.19349 4.31121 7.92072 4.21416 8.65123 4.21334C9.3817 4.21334 10.1263 4.31446 10.8139 4.50199C12.4612 3.37645 13.1916 3.60736 13.1916 3.60736C13.6645 4.80498 13.3634 5.69978 13.2775 5.91618C13.8362 6.52216 14.1656 7.30132 14.1656 8.25368C14.1656 11.6014 12.1461 12.3372 10.2124 12.5538C10.5276 12.8279 10.7996 13.3473 10.7996 14.1699C10.7996 15.3386 10.7854 16.2766 10.7854 16.5651C10.7854 16.796 10.943 17.0703 11.3726 16.9837C14.8102 15.8291 17.2881 12.5681 17.2881 8.71551C17.3023 3.89583 13.4208 0 8.65123 0Z"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_473_7">
                    <rect width="17.3542" height="17" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}
