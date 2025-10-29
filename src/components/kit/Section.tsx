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
            ref={ref}
            className={cn(
                'relative w-full flex flex-col items-center justify-center overflow-hidden',
                className
            )}
        >
            <div className="w-full max-w-7xl mx-auto">
                <motion.h2
                    className={cn(
                        'text-[16px] font-normal py-2 text-center px-4 mb-0 font-lexend text-[#ABABAB]',
                        titleClassName
                    )}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                        opacity: isInView ? 1 : 0,
                        x: isInView ? 0 : -10,
                    }}
                    transition={{
                        duration: 0.2,
                        delay: delay ? delay : 0.2,
                        ease: 'easeIn',
                    }}
                >
                    {title}
                </motion.h2>

                <motion.div
                    className={cn(
                        'w-full grid max-lg:grid-cols-1 lg:grid-cols-4',
                        contentClassName
                    )}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                        opacity: isInView ? 1 : 0,
                        x: isInView ? 0 : -10,
                    }}
                    transition={{
                        duration: 0.2,
                        delay: delay ? delay : 0.5,
                        ease: 'easeIn',
                    }}
                >
                    {children}
                </motion.div>
            </div>
        </div>
    )
}
