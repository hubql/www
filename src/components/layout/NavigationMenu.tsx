'use client'

import Link from 'next/link'
import * as React from 'react'

export function NavigationMenu({ data }: { data: any }) {
    return (
        <div className="hidden lg:block absolute left-[14%] -translate-x-1/4">
            <div className=" flex items-center justify-start gap-1">
                {data.map((item: any, index: number) => {
                    return (
                        <div
                            key={`item-${item.label}+${index}`}
                            className="text-sm font-bold flex items-center justify-center gap-2"
                        >
                            {item.isExternal ? (
                                <a href={`/${item.href}`}>{item.label}</a>
                            ) : (
                                <Link href={`/${item.href}`}>
                                    <div className="px-2 py-1 cursor-pointer hover:bg-neutral-800 text-sm font-normal tracking-wide font-lexend-400 rounded-sm">
                                        {item.label}
                                    </div>
                                </Link>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
