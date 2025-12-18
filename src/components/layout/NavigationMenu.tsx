'use client'

import Link from 'next/link'
import { footerNav } from './Footer'
import {
    NavigationMenu as NavigationMenuRoot,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '../kit/NavigationMenu'
import { ChevronDown } from 'lucide-react'

export function NavigationMenu({ data }: { data: any[] }) {
    const servicesCategory = footerNav.nav.find(
        (category) => category.label === 'Services'
    )

    return (
        <div className="hidden lg:block relative">
            <NavigationMenuRoot>
                <NavigationMenuList className="flex-wrap">
                    {data.map((item, index) => {
                        const isServices = item.label === 'Services'
                        const hasServices =
                            isServices &&
                            servicesCategory &&
                            servicesCategory.nav &&
                            servicesCategory.nav.length > 0

                        if (hasServices) {
                            return (
                                <NavigationMenuItem
                                    key={`item-${item.label}-${index}`}
                                >
                                    <NavigationMenuTrigger>
                                        {item.label}{' '}
                                        <ChevronDown className="w-4 h-4 ml-1.5 font-black" />
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[280px] gap-1 p-2 ">
                                            <li key="service-all">
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        href="/services"
                                                        className="flex flex-col rounded-sm px-3 py-2 text-sm hover:bg-neutral-800"
                                                    >
                                                        <span className="font-medium">
                                                            All services
                                                        </span>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                            {servicesCategory.nav.map(
                                                (link: any, i: number) => (
                                                    <li key={`service-${i}`}>
                                                        <NavigationMenuLink
                                                            asChild
                                                        >
                                                            <Link
                                                                href={`/${link.href}`}
                                                                className="flex flex-col rounded-sm px-3 py-2 text-sm hover:bg-neutral-800"
                                                            >
                                                                <span className="font-medium">
                                                                    {link.label}
                                                                </span>
                                                            </Link>
                                                        </NavigationMenuLink>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            )
                        }

                        return (
                            <NavigationMenuItem
                                key={`item-${item.label}-${index}`}
                            >
                                <NavigationMenuLink
                                    asChild
                                    className={navigationMenuTriggerStyle}
                                >
                                    {item.isExternal ? (
                                        <a href={`/${item.href}`}>
                                            {item.label}
                                        </a>
                                    ) : (
                                        <Link href={`/${item.href}`}>
                                            {item.label}
                                        </Link>
                                    )}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        )
                    })}
                </NavigationMenuList>
            </NavigationMenuRoot>
        </div>
    )
}
