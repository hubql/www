'use client'

import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'

const Spline = dynamic(
    () => import('@splinetool/react-spline').then((mod) => mod.default),
    {
        ssr: false,
        loading: () => <div className="w-full h-full" />,
    }
)

export const SplineScene = ({ scene }: { scene: string }) => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault()
            e.stopPropagation()
        }

        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 1) {
                e.preventDefault()
            }
        }

        container.addEventListener('wheel', handleWheel, { passive: false })
        container.addEventListener('touchmove', handleTouchMove, {
            passive: false,
        })

        return () => {
            container.removeEventListener('wheel', handleWheel)
            container.removeEventListener('touchmove', handleTouchMove)
        }
    }, [])

    return (
        <div ref={containerRef} className="w-full h-full">
            <Spline scene={scene} />
        </div>
    )
}
