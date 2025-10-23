import client from '../../../tina/__generated__/client'

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/xml')

    // Instructing the Vercel edge to cache the file
    res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')

    const pagesConnection = await client.queries.pagesConnection({
        first: 100,
        filter: {
            title: {
                startsWith: '',
            },
        },
    })
    const postConnection = await client.queries.postConnection({
        first: 100,
        filter: {
            title: {
                startsWith: '',
            },
        },
    })

    const getUrl = (relativePath: string) => {
        return `https://www.hubql.com/${relativePath.replace('.mdx', '')}`
    }
    const getUrls = (pages: any, posts: any) => {
        return [
            ...pages.map((page: any) => getUrl(page.node._sys.relativePath)),
            ...posts.map((page: any) =>
                getUrl('blog/' + page.node._sys.relativePath)
            ),
        ]
    }

    const urls = getUrls(
        pagesConnection.data?.pagesConnection?.edges ?? [],
        postConnection.data?.postConnection?.edges ?? []
    )
    // generate sitemap here
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
      ${urls
          ?.map((url) => {
              if (url === 'https://www.hubql.com/home') return null
              return `
            <url>
                <loc>${url}</loc>                
            </url>`
          })
          .join('')}
      </urlset>`

    res.end(xml)
}
