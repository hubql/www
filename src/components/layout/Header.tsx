import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '../kit/Button'
import { HubqlLogo } from '../kit/HubqlLogo'
import { cn } from '../util/cn'
import { NavigationMenu } from './NavigationMenu'

export const Header = () => {
    const pathname = usePathname()
    if (!pathname) return null
    const isDocs = pathname.includes('/docs/')

    return (
        <header className="w-full sticky top-0 z-50 lg:top-0 left-0 z-50 h-fit  border-b border-border">
            <div
                className={cn(
                    'w-full max-w-7xl mx-auto bg-background px-2 py-2',
                    isDocs && 'max-w-full'
                )}
            >
                <nav className="w-full mx-auto flex items-center justify-between h-14 relative">
                    <div className="w-fit h-full flex items-center justify-start">
                        <div className="pl-2 mr-2 ">
                            <Link href="/" title="Go to the main page">
                                <HubqlLogo className={'w-[90px]'} />
                            </Link>
                        </div>
                    </div>
                    <NavigationMenu data={headerNav.nav} />
                    <div className="h-full flex items-center lg:gap-2 gap-1">
                        <Button
                            href="/contact"
                            size="sm"
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
                                    href="/contact"
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
            label: 'Services',
            href: 'services',
            nav: null,
        },
        {
            __typename: 'GlobalHeaderNav',
            isExternal: null,
            label: 'About',
            href: 'about',
            nav: null,
        },
        {
            __typename: 'GlobalHeaderNav',
            isExternal: null,
            label: 'Blog',
            href: 'blog',
            nav: null,
        },
    ],
    ctaLabel: 'Start your project',
}
