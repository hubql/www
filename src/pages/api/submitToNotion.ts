export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        return res.status(405).end()
    }

    try {
        const { name, email } = req.body
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
                    Name: {
                        title: [
                            {
                                text: {
                                    content: name,
                                },
                            },
                        ],
                    },
                    Email: {
                        email: email,
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
