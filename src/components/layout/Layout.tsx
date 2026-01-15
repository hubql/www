'use client'

import { Footer } from './Footer'
import { Header } from './Header'
import { usePathname } from 'next/navigation'
import { Noto_Sans } from 'next/font/google'
import { Orbitron } from 'next/font/google'
import { Lexend } from 'next/font/google'

const noto = Noto_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-noto',
})

const orbitron = Orbitron({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-orbitron',
})

const lexend = Lexend({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-lexend',
})

export const Layout = ({ children, data }: { children: any; data?: any }) => {
    const pathname = usePathname()
    const domain = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.hubql.com'
    const canonicalUrl = domain + (pathname || '').replace(/\?.*/, '')

    return (
        <div
            className={`bg-background ${noto.variable} ${orbitron.variable} ${lexend.variable} font-noto`}
        >
            <div className="w-full overflow-x-hidden flex h-full">
                <div className="relative w-full flex flex-col h-full min-h-screen items-start">
                    <Header />
                    <div className="relative z-10 w-full flex-1">
                        {children}
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
