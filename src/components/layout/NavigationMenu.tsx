'use client'

import Link from 'next/link'
import * as React from 'react'

export function NavigationMenu({ data }: { data: any }) {
    return (
        <div className="hidden lg:block">
            <div className=" flex items-center justify-start gap-1">
                {data.map((item: any, index: number) => {
                    return (
                        <div
                            key={`item-${item.label}+${index}`}
                            className="text-sm font-bold"
                        >
                            {item.isExternal ? (
                                <a href={`/${item.href}`}>{item.label}</a>
                            ) : (
                                <Link href={`/${item.href}`}>
                                    <div className="px-2 py-1 cursor-pointer hover:text-accent-100 text-sm font-bold tracking-wide  font-orbitron">
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
