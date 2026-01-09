import { ReactNode, CSSProperties } from 'react'

type HighlightTextProps = {
    text: string
    wordsToHighlight?: string
    highlightColor?: string
    className?: string
    style?: CSSProperties
    'data-tina-field'?: string
    as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div'
}

export const HighlightText = ({
    text,
    wordsToHighlight,
    highlightColor = 'var(--primary)',
    className,
    style,
    'data-tina-field': dataTinaField,
    as: Component = 'span',
}: HighlightTextProps) => {
    if (!wordsToHighlight || !text) {
        return (
            <Component
                className={className}
                style={style}
                data-tina-field={dataTinaField}
            >
                {text}
            </Component>
        )
    }

    const words = wordsToHighlight
        .split(',')
        .map((word) => word.trim())
        .filter((word) => word.length > 0)

    if (words.length === 0) {
        return (
            <Component
                className={className}
                style={style}
                data-tina-field={dataTinaField}
            >
                {text}
            </Component>
        )
    }

    const parts: ReactNode[] = []
    let lastIndex = 0
    let key = 0

    const createRegex = (word: string) => {
        const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        return new RegExp(`\\b${escaped}\\b`, 'gi')
    }

    const allMatches: Array<{ index: number; length: number; word: string }> =
        []

    words.forEach((word) => {
        const regex = createRegex(word)
        let match
        while ((match = regex.exec(text)) !== null) {
            allMatches.push({
                index: match.index,
                length: match[0].length,
                word: match[0],
            })
        }
    })

    allMatches.sort((a, b) => a.index - b.index)

    const mergedMatches: Array<{ start: number; end: number }> = []
    for (const match of allMatches) {
        const start = match.index
        const end = start + match.length

        if (mergedMatches.length === 0) {
            mergedMatches.push({ start, end })
        } else {
            const last = mergedMatches[mergedMatches.length - 1]
            if (start <= last.end) {
                last.end = Math.max(last.end, end)
            } else {
                mergedMatches.push({ start, end })
            }
        }
    }

    mergedMatches.forEach((match) => {
        if (match.start > lastIndex) {
            parts.push(
                <span key={`text-${key++}`}>
                    {text.substring(lastIndex, match.start)}
                </span>
            )
        }

        parts.push(
            <span key={`highlight-${key++}`} style={{ color: highlightColor }}>
                {text.substring(match.start, match.end)}
            </span>
        )

        lastIndex = match.end
    })

    if (lastIndex < text.length) {
        parts.push(
            <span key={`text-${key++}`}>{text.substring(lastIndex)}</span>
        )
    }

    return (
        <Component
            className={className}
            style={style}
            data-tina-field={dataTinaField}
        >
            {parts}
        </Component>
    )
}
