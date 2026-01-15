'use client'

import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'

export const TrailingScroll = ({ containerRef }: { containerRef: any }) => {
    const { scrollYProgress } = useScroll()
    const [blah, setBlah] = useState(0)

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        if (!containerRef.current) return
        const containerTop = containerRef.current.getBoundingClientRect().top

        if (latest > 0) {
            const scrollPercent = containerTop > 1 ? 5 : containerTop * -1 + 100
            setBlah(scrollPercent || 0)
        }
    })

    return (
        <div className="absolute z-50 top-[100px] left-2 xl:left-10 right-0 w-[1px] xl:w-[2px] bg-neutral-700 h-[calc(100%-50px)] rounded-full overflow-hidden">
            <motion.div
                className="absolute z-50 left-0 right-0 w-[2px] bg-gradient-to-t from-accent-100 via-10% via-accent-400 to-black h-full origin-top rounded-full"
                animate={{ height: `${blah}px` }}
            />
        </div>
    )
}
