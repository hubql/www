import Head from 'next/head'
import { Header } from './Header'

export const DocsLayout = ({
    children,
    header,
    data,
}: {
    children: any
    header: any
    data?: any
}) => {
    return (
        <>
            <Head>
                <title>{data.seoTitle}</title>
                <meta name="description" content={data.seoDescription} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/settings/16x16.png" sizes="16x16" />
                <link rel="icon" href="/settings/32x32.png" sizes="32x32" />
                <link rel="icon" href="/settings/96x96.png" sizes="96x96" />
                <link rel="apple-touch-icon" href="/settings/180x180.png" />
                <link rel="manifest" href="/manifest.webmanifest" />

                <meta property="og:title" content={data.seoTitle} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://www.hubql.com`} />
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
                <meta
                    property="twitter:url"
                    content={`https://www.hubql.com`}
                />
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
            <div>
                <Header />
                <div className="w-full">{children}</div>
            </div>
        </>
    )
}
