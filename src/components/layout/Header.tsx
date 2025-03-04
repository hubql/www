import Link from 'next/link'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { Button } from '../kit/Button'
import { HubqlLogo } from '../kit/HubqlLogo'
import { NavigationMenu } from './NavigationMenu'
import { ArrowUpDown, BookMarked, Grid, Network } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from '../util/cn'

const iconStyle = 'h-3.5 w-3.5 stroke-accent-100'

export const Header = () => {
    const pathname = usePathname()
    if (!pathname) return null
    const isDocs = pathname.includes('/docs/')

    return (
        <header className="w-full sticky top-0 z-50 lg:top-0 left-0 z-50 h-14">
            <div
                className={cn(
                    'w-full max-w-7xl mx-auto bg-black/70 backdrop-blur-lg border-b border-neutral-800 border-x px-2',
                    isDocs && 'max-w-full'
                )}
            >
                <nav className="w-full mx-auto flex items-center justify-between h-14">
                    <div className="w-fit h-full flex items-center justify-start">
                        <div className=" mr-4 ">
                            <Link href="/" title="Go to the main page" passHref>
                                <HubqlLogo className={'w-[90px] h-[24px]'} />
                            </Link>
                        </div>
                        <NavigationMenu data={headerNav.nav} />
                    </div>
                    <div className="h-full flex items-center lg:gap-4 gap-1">
                        <Button
                            href="https://github.com/hubql/hubql"
                            variant="outlined"
                            size="sm"
                            icon="github"
                            className="hidden lg:flex"
                        >
                            GitHub
                        </Button>
                        <Button
                            href="https://hubql.notion.site/13ecf350629f80329233ff53c9b436ea?pvs=105"
                            size="sm"
                            icon="arrow"
                            className="hidden lg:flex"
                        >
                            {headerNav?.ctaLabel}
                        </Button>
                        <Mobile header={headerNav} />
                    </div>
                </nav>
            </div>
        </header>
    )
}

const Mobile = ({ header }: { header: any }) => {
    const [openMenu, setOpenMenu] = useState(false)
    useEffect(() => {
        if (openMenu) document.body.style.overflow = 'hidden'
        else document.body.style.overflow = 'auto'
    }, [openMenu])
    return (
        <div className="mobile block lg:hidden">
            <div className="dropdown" data-dropdown>
                <button
                    className="link flex items-center gap-2 text-sm px-2 py-2"
                    role="button"
                    id="btn-open-menu"
                    aria-label="Open menu"
                    data-dropdown-button
                    onClick={() => setOpenMenu(!openMenu)}
                >
                    {!openMenu && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="hamburg w-6 h-6 fill-zinc-50"
                            data-dropdown-button
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    )}

                    {openMenu && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="close-x w-6 h-6 fill-zinc-50"
                            data-dropdown-button
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    )}
                </button>
                {openMenu && (
                    <div className="dropdown-menu fixed top-[56px] left-0 w-screen h-[calc(100vh-56px)] bg-black z-10 text-zinc-50 overflow-y-auto pt-2">
                        <div className=" px-2 mx-auto flex flex-col justify-start h-full pb-2">
                            {header?.nav?.map(
                                (
                                    primaryLink: {
                                        nav: any[]
                                        label: string
                                        href: any
                                        isExternal?: boolean
                                    },
                                    index: string
                                ) => {
                                    const hasSecondaryLinks =
                                        primaryLink?.nav &&
                                        primaryLink.nav.length > 0
                                    return hasSecondaryLinks ? (
                                        <div key={'d' + index}>
                                            <button className="link flex items-center text-lg px-2 py-2  font-bold">
                                                {primaryLink?.label}
                                            </button>
                                            <div>
                                                <ul>
                                                    {primaryLink?.nav?.map(
                                                        (
                                                            secondaryLink,
                                                            index
                                                        ) => (
                                                            <li
                                                                key={
                                                                    'a' + index
                                                                }
                                                                className="link"
                                                            >
                                                                <a
                                                                    href={`/${secondaryLink?.href}`}
                                                                    className="block  text-lg px-2 py-1.5 text-zinc-300 hover:text-zinc-50 flex items-center gap-2"
                                                                    onClick={() =>
                                                                        setOpenMenu(
                                                                            false
                                                                        )
                                                                    }
                                                                >
                                                                    {
                                                                        secondaryLink?.icon
                                                                    }
                                                                    {
                                                                        secondaryLink?.label
                                                                    }
                                                                </a>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    ) : (
                                        !primaryLink?.isExternal && (
                                            <Link
                                                key={'l' + index}
                                                className="link flex items-center gap-2 text-lg px-2 py-2 font-bold"
                                                href={`/${primaryLink?.href}`}
                                                onClick={() =>
                                                    setOpenMenu(false)
                                                }
                                            >
                                                {primaryLink?.label}
                                            </Link>
                                        )
                                    )
                                }
                            )}
                            <div className="flex flex-col gap-2 mt-4">
                                <Button
                                    href="https://github.com/hubql/hubql"
                                    variant="outlined"
                                    size="sm"
                                    icon="github"
                                    className="w-full !text-lg"
                                >
                                    GitHub
                                </Button>
                                <Button
                                    href="https://hubql.notion.site/13ecf350629f80329233ff53c9b436ea?pvs=105"
                                    size="sm"
                                    icon="arrow"
                                    className="w-full !text-lg"
                                >
                                    {header?.ctaLabel}
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export const headerNav = {
    __typename: 'GlobalHeader',
    name: 'Hubql',
    nav: [
        {
            __typename: 'GlobalHeaderNav',
            isExternal: null,
            label: 'Product',
            href: '#',
            nav: [
                {
                    __typename: 'GlobalHeaderNavNav',
                    isExternal: null,
                    href: 'product/hubql-grid',
                    label: 'Hubql Grid',
                    icon: <Grid className={iconStyle} />,
                },
                {
                    __typename: 'GlobalHeaderNavNav',
                    isExternal: null,
                    href: 'product/api-client',
                    label: 'Hubql Client',
                    icon: <ArrowUpDown className={iconStyle} />,
                },
                {
                    __typename: 'GlobalHeaderNavNav',
                    isExternal: null,
                    href: 'product/api-reference-hosting',
                    label: 'Hubql Ref',
                    icon: <BookMarked className={iconStyle} />,
                },
                {
                    __typename: 'GlobalHeaderNavNav',
                    isExternal: null,
                    href: 'product/schema-visualizer',
                    label: 'Hubql Lens',
                    icon: <Network className={iconStyle} />,
                },
            ],
        },

        {
            __typename: 'GlobalHeaderNav',
            isExternal: null,
            label: 'Pricing',
            href: 'pricing',
            nav: null,
        },
        {
            __typename: 'GlobalHeaderNav',
            isExternal: null,
            label: 'Blog',
            href: 'blog',
            nav: null,
        },
        // {
        //     __typename: 'GlobalHeaderNav',
        //     isExternal: null,
        //     label: 'Docs',
        //     href: 'docs',
        //     nav: null,
        // },
    ],
    ctaLabel: 'Speak to us',
}
