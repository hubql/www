import satori from 'satori'
import { Resvg, initWasm } from '@resvg/resvg-wasm'
import type { NextApiRequest, NextApiResponse } from 'next'
import { OG_IMAGE_BASE64 } from '../../lib/ogimage-base64'

let wasmInitPromise: Promise<void> | null = null
let wasmInitialized = false

const ensureWasmInitialized = async (baseUrl: string) => {
    if (wasmInitialized) {
        return
    }

    if (wasmInitPromise) {
        try {
            await wasmInitPromise
            return
        } catch (error) {
            wasmInitPromise = null
        }
    }

    wasmInitPromise = (async () => {
        const wasmPaths = [
            `https://cdn.jsdelivr.net/npm/@resvg/resvg-wasm@2.6.2/index_bg.wasm`,
            `https://unpkg.com/@resvg/resvg-wasm@2.6.2/index_bg.wasm`,
        ]

        for (const wasmUrl of wasmPaths) {
            try {
                const wasmResponse = await fetch(wasmUrl)
                if (wasmResponse.ok) {
                    const wasmBuffer = await wasmResponse.arrayBuffer()
                    try {
                        await initWasm(wasmBuffer)
                        wasmInitialized = true
                        return
                    } catch (initError: any) {
                        if (
                            initError.message?.includes(
                                'already initialized'
                            ) ||
                            initError.message?.includes(
                                'already been initialized'
                            )
                        ) {
                            wasmInitialized = true
                            return
                        }
                        throw initError
                    }
                }
            } catch (error) {
                console.error(`Failed to load WASM from ${wasmUrl}:`, error)
                continue
            }
        }

        throw new Error('Failed to load WASM from any source')
    })()

    try {
        await wasmInitPromise
    } catch (error) {
        wasmInitPromise = null
        wasmInitialized = false
        throw error
    }
}

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

        const protocol = req.headers['x-forwarded-proto'] || 'http'
        const host = req.headers.host || 'localhost:3000'
        const baseUrl = `${protocol}://${host}`

        const bgBase64 = `data:image/png;base64,${OG_IMAGE_BASE64}`

        const fontResponse = await fetch(`${baseUrl}/fonts/Lexend-Bold.ttf`)
        const fontData = await fontResponse.arrayBuffer()

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
                        data: Buffer.from(fontData),
                        weight: 700,
                        style: 'normal',
                    },
                ],
            }
        )

        await ensureWasmInitialized(baseUrl)

        try {
            const resvg = new Resvg(svg, {
                fitTo: {
                    mode: 'width',
                    value: 1200,
                },
            })
            const pngData = resvg.render()
            const pngBuffer = Buffer.from(pngData.asPng())

            res.setHeader('Content-Type', 'image/png')
            res.setHeader(
                'Cache-Control',
                'public, max-age=31536000, immutable'
            )
            res.status(200)
            res.end(pngBuffer)
        } catch (renderError: any) {
            console.error('Resvg render error:', renderError)
            throw renderError
        }
    } catch (e: any) {
        console.error(`OG image generation failed:`, e)
        res.status(500).send(`Failed to generate the image: ${e.message}`)
    }
}
