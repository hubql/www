import type { Metadata } from 'next'
import Script from 'next/script'
import { Providers } from '../components/providers/Providers'
import './globals.css'

const isProd = process.env.DOPPLER_ENVIRONMENT === 'production'
const gtmId = process.env.NEXT_PUBLIC_GTM_ID
const termlyId = process.env.NEXT_PUBLIC_TERMLY_ID

export const metadata: Metadata = {
    metadataBase: new URL('https://www.hubql.com'),
    title: {
        default: 'Hubql',
        template: '%s | Hubql',
    },
    description: 'Build Software Together',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                {isProd && gtmId && (
                    <Script
                        id="gtm"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
             })(window,document,'script','dataLayer','${gtmId}');`,
                        }}
                    />
                )}
                {isProd && termlyId && (
                    <Script
                        id="termly"
                        strategy="afterInteractive"
                        type="text/javascript"
                        src="https://app.termly.io/embed.min.js"
                        data-auto-block="on"
                        data-website-uuid={termlyId}
                    />
                )}
            </head>
            <body>
                {isProd && gtmId && (
                    <noscript>
                        <iframe
                            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
                            height="0"
                            width="0"
                            style={{ display: 'none', visibility: 'hidden' }}
                        />
                    </noscript>
                )}
                <Script
                    id="koala-snippet"
                    dangerouslySetInnerHTML={{
                        __html: `!function(t){var k="ko",i=(window.globalKoalaKey=window.globalKoalaKey||k);if(window[i])return;var ko=(window[i]=[]);["identify","track","removeListeners","on","off","qualify","ready"].forEach(function(t){ko[t]=function(){var n=[].slice.call(arguments);return n.unshift(t),ko.push(n),ko}});var n=document.createElement("script");n.async=!0,n.setAttribute("src","https://cdn.getkoala.com/v1/${process.env.NEXT_PUBLIC_KOALA_KEY}/sdk.js"),(document.body || document.head).appendChild(n)}();`,
                    }}
                />
                <Providers>
                    <main>{children}</main>
                </Providers>
            </body>
        </html>
    )
}
