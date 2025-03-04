import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

const isProd = process.env.DOPPLER_ENVIRONMENT === 'production'
const gtmId = process.env.NEXT_PUBLIC_GTM_ID
const termlyId = process.env.NEXT_PUBLIC_TERMLY_ID
export default function Document() {
    return (
        <Html lang="en">
            {isProd ? (
                <Head>
                    <Script
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
             })(window,document,'script','dataLayer','${gtmId}');`,
                        }}
                        id="tagmanager"
                    ></Script>
                    <Script
                        strategy="afterInteractive"
                        type="text/javascript"
                        src="https://app.termly.io/embed.min.js"
                        data-auto-block="on"
                        data-website-uuid={termlyId}
                    ></Script>
                </Head>
            ) : (
                <Head />
            )}

            <body>
                {isProd && (
                    <noscript>
                        <iframe
                            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
                            height="0"
                            width="0"
                            style={{ display: 'none', visibility: 'hidden' }}
                        ></iframe>
                    </noscript>
                )}

                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
