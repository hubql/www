import { Turnstile } from '@marsidev/react-turnstile'
import { ArrowIcon } from '../kit/Button'

export const ContactForm = () => {
    async function handleSubmit(e: any) {
        e.preventDefault()
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
        }

        const response = await fetch('/api/submitToNotion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })

        const data = await response.json()
        alert(data.message)
    }

    return (
        <div className="w-full flex-1 border-neutral-800">
            <form onSubmit={handleSubmit}>
                <div className="w-full flex flex-col gap-2 justify-start items-start">
                    <div className="w-full flex flex-col lg:flex-row gap-4 items-start lg:items-center rounded-md">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="py-2 px-3 w-full rounded-sm border border-neutral-700"
                            placeholder="Enter email"
                        />

                        <Turnstile
                            siteKey={
                                process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ''
                            }
                        />

                        <button
                            type="submit"
                            className="button relative hover:decoration-none transition-transform ease-in hover:-translate-y-1 hover:icon:-translate-x-1 h-[44px] pl-4 pr-16 rounded-sm flex flex-row items-center justify-between text-base py-3  font-normal bg-accent-500 !text-white w-fit !no-underline"
                        >
                            Join mailing list
                            <div className="icon absolute inset-y-auto right-4">
                                <ArrowIcon />
                            </div>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
