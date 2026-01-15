import { ImageResponse } from 'next/og'
import { headers } from 'next/headers'
import { OG_IMAGE_BASE64 } from '../lib/ogimage-base64'
import { LEXEND_BOLD_FONT_BASE64 } from '../lib/lexend-bold-base64'
import client from '@/tina/__generated__/client'

export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image({
    params,
}: {
    params?: Promise<{ filename?: string[] }>
}) {
    let title = 'Build Software Together'

    try {
        let filename = 'home.mdx'
        const headersList = await headers()
        const referer = headersList.get('referer')

        if (params) {
            const resolvedParams = await params
            if (resolvedParams?.filename) {
                const path = Array.isArray(resolvedParams.filename)
                    ? resolvedParams.filename.join('/')
                    : resolvedParams.filename
                if (path) {
                    filename = `${path}.mdx`
                }
            }
        } else if (referer && !referer.includes('opengraph-image')) {
            try {
                const url = new URL(referer)
                const pathname = url.pathname.replace(/\/$/, '') || '/'
                if (pathname !== '/') {
                    filename = `${pathname.replace(/^\//, '')}.mdx`
                }
            } catch {
                // Invalid URL, use default
            }
        }

        const { data } = await client.queries.pages({
            relativePath: filename,
        })
        title = data.pages.seoTitle || data.pages.title || title
    } catch (error) {
        // If page not found or error, use default title
    }

    const cleanTitle = title
        .slice(0, 100)
        .replace(/\s*\|\s*Hubql(\s+Labs)?$/i, '')

    const bgBase64 = `data:image/png;base64,${OG_IMAGE_BASE64}`
    const fontData = Buffer.from(LEXEND_BOLD_FONT_BASE64, 'base64')

    const fontSize =
        cleanTitle.length > 50 ? 36 : cleanTitle.length > 30 ? 48 : 64

    return new ImageResponse(
        <div
            style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                position: 'relative',
            }}
        >
            <img
                src={bgBase64}
                alt=""
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
            />
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    fontSize,
                    fontFamily: 'Lexend',
                    fontWeight: 700,
                    letterSpacing: '-0.025em',
                    color: 'white',
                    padding: '0 80px',
                    lineHeight: 1.2,
                    textAlign: 'left',
                    position: 'relative',
                    zIndex: 1,
                    width: '80%',
                }}
            >
                {cleanTitle}
            </div>
        </div>,
        {
            ...size,
            fonts: [
                {
                    name: 'Lexend',
                    data: fontData,
                    weight: 700,
                    style: 'normal',
                },
            ],
        }
    )
}
