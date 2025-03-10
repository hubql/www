import { useRef } from 'react'
import { cn } from '../util/cn'
import { motion, useInView } from 'framer-motion'
export const Section = ({
    children,
    className,
    title,
    contentClassName,
    titleClassName,
    delay,
}: {
    children: React.ReactNode
    className?: string
    title: string
    contentClassName?: string
    titleClassName?: string
    delay?: number
}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <div
            className={cn(
                'relative w-full flex flex-col items-center justify-center divide-y divide-neutral-800 overflow-hidden',
                className
            )}
        >
            <div
                ref={ref}
                className={cn(
                    'w-full flex flex-row items-center justify-center',
                    titleClassName
                )}
            >
                <motion.h2
                    className="text-lg font-bold text-center py-6 px-4 mb-0 font-orbitron tracking-wide"
                    initial={{ opacity: 0, x: isInView ? -10 : -10 }}
                    animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 0 }}
                    transition={{
                        duration: 0.2,
                        delay: delay ? delay : isInView ? 0.2 : 0,
                        ease: 'easeIn',
                    }}
                >
                    {title}
                </motion.h2>
            </div>
            <motion.div
                className={cn(
                    'w-full grid max-lg:grid-cols-1 lg:grid-cols-4 gap-4 max-lg:divide-y max-lg:divide-neutral-800 lg:divide-x divide-neutral-800',
                    contentClassName
                )}
                initial={{ opacity: 0, x: isInView ? -10 : -10 }}
                animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 0 }}
                transition={{
                    duration: 0.2,
                    delay: delay ? delay : isInView ? 0.5 : 0,
                    ease: 'easeIn',
                }}
            >
                {children}
            </motion.div>
        </div>
    )
}
