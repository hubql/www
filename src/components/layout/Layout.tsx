import Head from 'next/head'
import { Footer } from './Footer'
import { Header } from './Header'
import { useRouter } from 'next/router'
import { Noto_Sans } from 'next/font/google'
import { Orbitron } from 'next/font/google'

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

export const Layout = ({ children, data }: { children: any; data?: any }) => {
    const router = useRouter()
    const domain = 'https://www.hubql.com'
    const canonicalUrl = domain + router.asPath.replace(/\?.*/, '')

    return (
        <>
            <Head>
                <link rel="canonical" href={canonicalUrl} />

                <title>{data.seoTitle}</title>
                <meta name="description" content={data.seoDescription} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link
                    rel="icon"
                    href="/settings/hubql-favicon-new.png"
                    sizes="16x16"
                />
                <link
                    rel="icon"
                    href="/settings/hubql-favicon-new.png"
                    sizes="32x32"
                />
                <link
                    rel="icon"
                    href="/settings/hubql-favicon-new.png"
                    sizes="96x96"
                />
                <link
                    rel="apple-touch-icon"
                    href="/settings/hubql-favicon-new.png"
                />
                <link rel="manifest" href="/manifest.webmanifest" />
                {data.robots && <meta name="robots" content={data.robots} />}

                <meta property="og:title" content={data.seoTitle} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta
                    property="og:image"
                    content={
                        data.heroImage
                            ? data.heroImage
                            : `https://www.hubql.com/api/og${
                                  data.seoTitle != ''
                                      ? `?title=${data.seoTitle}`
                                      : ''
                              }`
                    }
                />
                <meta property="og:locale" content="en_US" />

                <meta property="twitter:title" content={data.seoTitle} />
                <meta property="twitter:type" content="website" />
                <meta property="twitter:url" content={canonicalUrl} />
                <meta
                    property="twitter:image"
                    content={
                        data.heroImage
                            ? data.heroImage
                            : '/settings/og-image-v1.png'
                    }
                />
                <meta property="twitter:locale" content="en_US" />
            </Head>
            <div
                className={`bg-black ${noto.variable} ${orbitron.variable} font-noto`}
            >
                <div className="relative w-full overflow-x-hidden  bg-grid-neutral-800 flex h-full">
                    <div
                        className="relative pointer-events-none flex  z-0  flex-1
                        bg-gradient-to-r from-black/10 to-black"
                    />
                    <div className="w-full  max-w-screen-xl mx-auto flex flex-col h-full">
                        <Header />
                        <div className="relative z-10 w-full  border-x border-neutral-800 bg-black divide-y divide-neutral-800">
                            {children}
                        </div>
                        <Footer />
                    </div>
                    <div className="relative pointer-events-none z-0 flex-1   bg-gradient-to-l from-black/10  to-black" />
                </div>
            </div>
        </>
    )
}
