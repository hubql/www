import { useRef } from 'react'
import { cn } from '../util/cn'
import { motion, useInView } from 'framer-motion'
import { tinaField } from 'tinacms/dist/react'

export const Section = ({
    children,
    className,
    title,
    contentClassName,
    titleClassName,
    delay,
    subtitle,
    subtitleClassName,
    data,
}: {
    children: React.ReactNode
    className?: string
    title?: string
    contentClassName?: string
    titleClassName?: string
    delay?: number
    subtitle?: string
    subtitleClassName?: string
    data?: any
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
            <div className="w-full max-w-7xl mx-auto max-2xl:px-4 py-16">
                {title && (
                    <motion.h2
                        className={cn(
                            'font-bold text-center px-4 mb-0 font-lexend text-foreground text-2xl',
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
                        data-tina-field={
                            data
                                ? tinaField(data, 'title')
                                : tinaField({ title }, 'title')
                        }
                    >
                        {title}
                    </motion.h2>
                )}
                {subtitle && (
                    <motion.p
                        className={cn(
                            'text-base font-normal text-center px-4 mb-0 font-lexend text-muted-foreground mt-2',
                            subtitleClassName
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
                        data-tina-field={
                            data
                                ? tinaField(data, 'subtitle')
                                : tinaField({ subtitle }, 'subtitle')
                        }
                    >
                        {subtitle}
                    </motion.p>
                )}

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
