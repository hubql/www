'use client'

import client from '@/tina/__generated__/client'
import Link from 'next/link'
import { Layout } from '../components/layout/Layout'
import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    const data = {
        seoTitle: 'Error | Hubql',
    }

    return (
        <Layout data={data}>
            <div className="max-w-2xl mx-auto h-[calc(100vh-80px)] flex flex-col items-center justify-center">
                <h1 className="text-4xl font-orbitron">
                    Sorry, something went wrong.
                </h1>
                <p className="text-lg text-center">
                    You can{' '}
                    <Link className="underline" href={'/'}>
                        return to our front page
                    </Link>{' '}
                    and browse more of our content.
                </p>
                <button
                    onClick={reset}
                    className="mt-4 px-4 py-2 bg-accent-100 text-white rounded"
                >
                    Try again
                </button>
            </div>
        </Layout>
    )
}
