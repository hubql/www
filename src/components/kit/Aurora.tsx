'use client'
import React, { ReactNode } from 'react'
import { cn } from '../util/cn'

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
    children: ReactNode
    showRadialGradient?: boolean
}

export const AuroraBackground = ({
    className,
    children,
    showRadialGradient = true,
    ...props
}: AuroraBackgroundProps) => {
    return (
        <div
            className={cn(
                'relative flex flex-col w-full  h-fit items-center justify-center bg-[#fff] dark:bg-transparent  text-slate-950 transition-bg',
                className
            )}
            {...props}
        >
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className={cn(
                        `
            [--white-gradient:repeating-linear-gradient(100deg,#ffffff_0%,#ffffff_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
           [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--black)_10%,#ffffff_15%,#ffffff_20%,#ffffff_25%,var(--black)_30%)]
            [background-image:var(--white-gradient),#ffffff]
            dark:[background-image:var(--dark-gradient),#ffffff]
            [background-size:500%,_400%]
            [background-position:100%_100%,100%_100%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:800%,_300%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform`,

                        showRadialGradient &&
                            `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
                    )}
                ></div>
            </div>
            {children}
        </div>
    )
}
