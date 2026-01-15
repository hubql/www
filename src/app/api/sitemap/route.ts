import client from '@/tina/__generated__/client'
import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function GET() {
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

    return new NextResponse(xml, {
        status: 200,
        headers: {
            'Content-Type': 'text/xml',
            'Cache-control': 'stale-while-revalidate, s-maxage=3600',
        },
    })
}
