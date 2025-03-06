import Head from 'next/head'
import { Footer } from './Footer'
import { Header } from './Header'
import { useRouter } from 'next/router'

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
            <div className={'bg-black'}>
                <Header />
                <div className="w-full">
                    <div className="relative w-full overflow-x-hidden  bg-grid-neutral-800 ">
                        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-gradient-to-r from-black/90 from-[0.2%] via-transparent via-50% to-black/90 to-[99.2%] z-0"></div>
                        <div className="relative z-10 w-full max-w-screen-xl mx-auto border-x border-neutral-800 bg-black">
                            {children}{' '}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
