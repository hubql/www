'use client'

import { FC, createElement, useEffect } from 'react'

const TermlyScriptWrapper: FC<{ dataId: string }> = ({ dataId }) => {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://app.termly.io/embed-policy.min.js'
        script.async = true
        document.body.appendChild(script)
    }, [])

    if (!dataId) {
        return null
    }
    return createElement('div', {
        name: 'termly-embed',
        'data-id': dataId,
        'data-type': 'iframe',
    })
}

export default TermlyScriptWrapper
