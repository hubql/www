import { CheckIcon, CopyIcon } from 'lucide-react'
import { useRef, useState } from 'react'

export const LocalFirst = () => {
    const [copied, setCopied] = useState(false)

    const copyToClipboard = () => {
        navigator.clipboard.writeText('pnpm add @hubql/nestjs')
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 2000)
    }

    return (
        <div className="max-w-10/12 w-full px-4 flex items-center justify-between  py-3 rounded-lg border border-neutral-700 text-base">
            pnpm add @hubql/nestjs
            <button
                onClick={copyToClipboard}
                className="text-white text-sm bg-transparent px-2 py-1 rounded-md active:bg-neutral-600 h-6 flex items-center"
            >
                {copied ? (
                    <div className="flex gap-2 items-center">
                        <CheckIcon className="w-3 h-3" />
                        Code Copied!
                    </div>
                ) : (
                    <div className="flex gap-2 items-center">
                        <CopyIcon className="w-3 h-3" />
                        Copy
                    </div>
                )}
            </button>
        </div>
    )
}
