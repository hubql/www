export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        return res.status(405).end()
    }

    try {
        const { email, firstName, company, message, token } = req.body
        if (!email || !firstName || !company || !message || !token) {
            return res.status(400).json({ error: 'Missing required fields' })
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
                        req.headers['CF-Connecting-IP'] ||
                        req.headers['x-forwarded-for'] ||
                        req.connection.remoteAddress,
                }),
            }
        )

        const turnstileData = await turnstileResponse.json()
        if (!turnstileData.success) {
            return res.status(400).json({ error: 'Invalid token' })
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
        return res
            .status(200)
            .json({ message: 'Success! Entry added to Notion.', data })
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message })
        }
    }
}
