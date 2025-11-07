'use client'

import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'

const Spline = dynamic(
    () => import('@splinetool/react-spline').then((mod) => mod.default),
    { ssr: false }
)

export const SplineScene = ({ scene }: { scene: string }) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return <Spline scene={scene} />
}
