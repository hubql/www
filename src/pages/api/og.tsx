import { ImageResponse } from '@vercel/og'

export const config = {
    runtime: 'edge',
}

export default async function handler(req: Request) {
    const { searchParams, origin } = new URL(req.url)

    const rawTitle =
        searchParams.get('title')?.slice(0, 100) || 'Build Software Together'
    const title = rawTitle.replace(/\s*\|\s*Hubql Labs$/i, '')

    const backgroundUrl = `${origin}/settings/ogimage.png`

    return new ImageResponse(
        (
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
                    src={backgroundUrl}
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
                        fontSize:
                            title.length > 50
                                ? 36
                                : title.length > 30
                                ? 48
                                : 64,
                        fontWeight: 600,
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
                    {title}
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    )
}
