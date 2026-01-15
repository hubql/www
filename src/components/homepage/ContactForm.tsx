'use client'

import { Turnstile } from '@marsidev/react-turnstile'
import { ArrowIcon, Button } from '../kit/Button'
import { useState } from 'react'

export const ContactForm = () => {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')
    const [token, setToken] = useState<string | null>(null)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (!token) {
            setError('Please complete the CAPTCHA')
            return
        }

        setLoading(true)
        setError('')

        const formData = {
            firstName: e.currentTarget.firstName.value,
            company: e.currentTarget.company.value,
            email: e.currentTarget.email.value,
            message: e.currentTarget.message.value,
            token,
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (!response.ok) throw new Error(data.message || data.error)

            setSuccess(true)
        } catch (err) {
            setError(
                err instanceof Error ? err.message : 'Failed to send message'
            )
        } finally {
            setLoading(false)
        }
    }

    if (success) {
        return (
            <div className="w-full flex-1 p-8 text-center">
                <p className="text-accent-500 text-lg">
                    Thank you, your message has been sent successfully!
                </p>
            </div>
        )
    }

    return (
        <div className="w-full flex-1 px-2">
            <form onSubmit={handleSubmit}>
                <div className="w-full flex flex-col gap-4 justify-start items-start max-w-screen-sm mx-auto pb-12 pt-4">
                    <div className="w-full grid grid-cols-1 gap-4 ">
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            className="py-2 px-3 w-full rounded-md border border-neutral-700"
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            id="company"
                            name="company"
                            required
                            className="py-2 px-3 w-full rounded-md border border-neutral-700"
                            placeholder="Company"
                        />
                    </div>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="py-2 px-3 w-full rounded-md border border-neutral-700"
                        placeholder="Email"
                    />

                    <textarea
                        id="message"
                        name="message"
                        required
                        className="py-2 px-3 w-full rounded-md border border-neutral-700 h-32"
                        placeholder="Your message"
                    />
                    <Turnstile
                        siteKey={
                            process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ''
                        }
                        onSuccess={(token) => setToken(token)}
                    />

                    <div className="w-full flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                        <Button type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                        </Button>
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <div className="mb-8 text-left text-[16px] pb-8 pt-2">
                        <p className="mb-0 text-neutral-400">
                            or email us at{' '}
                            <a
                                href="mailto:hello@hubql.com"
                                className="underline text-white"
                            >
                                hello@hubql.com
                            </a>
                            , you can also&nbsp;
                            <a
                                href="https://cal.com/hubql-tobias/hubql-contact"
                                className="underline text-white"
                            >
                                schedule a meeting here
                            </a>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    )
}
