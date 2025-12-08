export const runtime = 'edge'

export default async function handler(req: Request) {
    if (req.method !== 'POST') {
        return new Response(null, { status: 405 })
    }

    try {
        const body = await req.json()
        const { email, firstName, company, message, token } = body
        if (!email || !firstName || !company || !message || !token) {
            return new Response(
                JSON.stringify({ error: 'Missing required fields' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
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
                        req.headers.get('CF-Connecting-IP') ||
                        req.headers.get('x-forwarded-for') ||
                        '',
                }),
            }
        )

        const turnstileData = await turnstileResponse.json()
        if (!turnstileData.success) {
            return new Response(JSON.stringify({ error: 'Invalid token' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            })
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
            const errorText = await response.text()
            throw new Error(`Error: ${response.statusText} - ${errorText}`)
        }

        const data = await response.json()
        return new Response(
            JSON.stringify({
                message: 'Success! Entry added to Notion.',
                data,
            }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        )
    } catch (error) {
        console.error('Contact form error:', error)
        if (error instanceof Error) {
            return new Response(JSON.stringify({ error: error.message }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            })
        }
        return new Response(
            JSON.stringify({ error: 'Unknown error occurred' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        )
    }
}
