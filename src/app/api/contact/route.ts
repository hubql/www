import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { email, firstName, company, message, token } = body

        if (!email || !firstName || !company || !message || !token) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        // Validate Turnstile token
        const turnstileResponse = await fetch(
            'https://challenges.cloudflare.com/turnstile/v0/siteverify',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    secret: process.env.TURNSTILE_SECRET,
                    response: token,
                    remoteip:
                        request.headers.get('CF-Connecting-IP') ||
                        request.headers.get('x-forwarded-for')?.split(',')[0] ||
                        null,
                }),
            }
        )

        const turnstileData = await turnstileResponse.json()
        if (!turnstileData.success) {
            return NextResponse.json(
                { error: 'Invalid token' },
                { status: 400 }
            )
        }

        const notionDatabaseId = process.env.NOTION_DB_ID
        const integrationToken = process.env.NOTION_SECRET

        const response = await fetch('https://api.notion.com/v1/pages', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${integrationToken}`,
                'Notion-Version': '2021-05-13',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                parent: { database_id: notionDatabaseId },
                properties: {
                    Firstname: {
                        title: [
                            {
                                text: {
                                    content: firstName,
                                },
                            },
                        ],
                    },
                    Company: {
                        rich_text: [{ text: { content: company } }],
                    },
                    Email: {
                        email: email,
                    },
                    Message: {
                        rich_text: [{ text: { content: message } }],
                    },
                },
            }),
        })

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`)
        }

        const data = await response.json()
        return NextResponse.json({
            message: 'Success! Entry added to Notion.',
            data,
        })
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 })
        }
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
