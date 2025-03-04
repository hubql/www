'use client'

import Link from 'next/link'
import * as React from 'react'

import Image from 'next/image'
import {
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenu,
} from '../kit/DropdownMenu'
import { ChevronDown } from 'lucide-react'

export function NavigationMenu({ data }: { data: any }) {
    return (
        <div className="hidden lg:block">
            <div className=" flex items-center justify-start gap-1">
                {data.map((item: any, index: number) => {
                    const hasSecondaryLinks = item?.nav && item.nav.length > 0
                    return (
                        <div
                            key={`item-${item.label}+${index}`}
                            className="text-sm font-bold"
                        >
                            {hasSecondaryLinks && (
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="group px-2 py-1 pr-1 text-sm  hover:text-accent-100  data-[state=open]:text-accent-100 focus-visible:outline-none flex items-center gap-1">
                                        {item.label}
                                        <ChevronDown className="ml-auto h-3 w-3 stroke-white group-data-[state=open]:rotate-180 transition-all duration-300" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        align="start"
                                        side="bottom"
                                        sideOffset={14}
                                    >
                                        <ul>
                                            {item.nav.map(
                                                (
                                                    subItem: any,
                                                    index: number
                                                ) => {
                                                    const hasIcon =
                                                        subItem?.icon && (
                                                            <Image
                                                                src={
                                                                    subItem.icon
                                                                }
                                                                height={34}
                                                                width={34}
                                                                alt={
                                                                    subItem.icon
                                                                }
                                                                style={{
                                                                    maxWidth:
                                                                        '100%',
                                                                    height: 'auto',
                                                                }}
                                                            />
                                                        )
                                                    return (
                                                        <DropdownMenuItem
                                                            key={`subItem-${subItem.label}+${index}`}
                                                            className="cursor-pointer transition-colors !bg-transparent"
                                                        >
                                                            <Link
                                                                href={`/${subItem.href}`}
                                                                className="w-full text-neutral-400 hover:text-white flex items-center gap-3"
                                                            >
                                                                <div>
                                                                    {
                                                                        subItem?.icon
                                                                    }
                                                                </div>
                                                                <div>
                                                                    {
                                                                        subItem.label
                                                                    }
                                                                </div>
                                                            </Link>
                                                        </DropdownMenuItem>
                                                    )
                                                }
                                            )}
                                        </ul>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            )}
                            {!hasSecondaryLinks &&
                                (item.isExternal ? (
                                    <a href={`/${item.href}`}>{item.label}</a>
                                ) : (
                                    <Link href={`/${item.href}`}>
                                        <div className="px-2 py-1 cursor-pointer hover:text-accent-100 text-sm font-bold">
                                            {item.label}
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
