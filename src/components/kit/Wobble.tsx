'use client'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { cn } from '../util/cn'

export const WobbleCard = ({
    children,
    containerClassName,
    className,
}: {
    children: React.ReactNode
    containerClassName?: string
    className?: string
}) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)

    const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
        const { clientX, clientY } = event
        const rect = event.currentTarget.getBoundingClientRect()
        const x = (clientX - (rect.left + rect.width / 2)) / 20
        const y = (clientY - (rect.top + rect.height / 2)) / 20
        setMousePosition({ x, y })
    }
    return (
        <motion.section
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
                setIsHovering(false)
                setMousePosition({ x: 0, y: 0 })
            }}
            style={{
                transform: isHovering
                    ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)`
                    : 'translate3d(0px, 0px, 0) scale3d(1, 1, 1)',
                transition: 'transform 0.1s ease-out',
            }}
            className={cn(
                'mx-auto w-full h-full relative rounded-md overflow-hidden',
                containerClassName
            )}
        >
            <div
                className="relative  h-full [background-image:radial-gradient(88%_100%_at_top,rgba(0,0,0,0.5),rgba(0,0,0,0))]  sm:mx-0 sm:rounded-md overflow-hidden"
                style={{
                    boxShadow:
                        '0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)',
                }}
            >
                <motion.div className={cn('h-full px-2 py-8 ', className)}>
                    {children}
                </motion.div>
            </div>
        </motion.section>
    )
}
