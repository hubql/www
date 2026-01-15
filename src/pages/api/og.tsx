import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'
import { readFile } from 'fs/promises'
import { join } from 'path'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const title = (
            (Array.isArray(req.query.title)
                ? req.query.title[0]
                : req.query.title) || 'Build Software Together'
        )
            .slice(0, 100)
            .replace(/\s*\|\s*Hubql(\s+Labs)?$/i, '')

        // Read background image from filesystem
        const bgPath = join(process.cwd(), 'public', 'settings', 'ogimage.png')
        const bgBuffer = await readFile(bgPath)
        const bgBase64 = `data:image/png;base64,${bgBuffer.toString('base64')}`

        // Load Lexend Bold font
        const fontPath = join(
            process.cwd(),
            'public',
            'fonts',
            'Lexend-Bold.ttf'
        )
        const fontData = await readFile(fontPath)

        const svg = await satori(
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
                        fontSize:
                            title.length > 50
                                ? 36
                                : title.length > 30
                                ? 48
                                : 64,
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
                    {title}
                </div>
            </div>,
            {
                width: 1200,
                height: 630,
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

        const resvg = new Resvg(svg, {
            fitTo: {
                mode: 'width',
                value: 1200,
            },
        })
        const pngData = resvg.render()
        const pngBuffer = pngData.asPng()

        res.setHeader('Content-Type', 'image/png')
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
        res.status(200).send(pngBuffer)
    } catch (e: any) {
        console.error(`OG image generation failed:`, e)
        res.status(500).send(`Failed to generate the image: ${e.message}`)
    }
}
