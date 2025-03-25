interface ShareButtonsProps {
    title: string
    url: string
}

export const ShareButtons = ({ title, url }: ShareButtonsProps) => {
    const encodedUrl = encodeURIComponent(url)
    const encodedTitle = encodeURIComponent(title)

    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`
    const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`

    const linkStyle =
        'flex items-center gap-2 hover:px-2 py-1 text-xs bg-transparent text-neutral-400 rounded-xs hover:bg-neutral-800 font-orbitron font-semibold transition-all duration-300'

    return (
        <div>
            <p className="text-white text-lg font-semibold mb-0">Share on</p>
            <div className="flex gap-2">
                <a
                    href={twitterShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkStyle}
                >
                    Twitter
                </a>
                <a
                    href={linkedinShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkStyle}
                >
                    LinkedIn
                </a>
            </div>
        </div>
    )
}
