'use client'

import { PostHogProvider } from 'posthog-js/react'
import posthog from 'posthog-js'
import { ThemeProvider } from '../kit/ThemeProvider'

if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host:
            process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
        loaded: (posthog) => {
            if (process.env.NODE_ENV === 'development') posthog.debug()
        },
    })
}

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <PostHogProvider client={posthog}>
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        </PostHogProvider>
    )
}
