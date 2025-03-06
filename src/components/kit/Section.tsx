import { cn } from '../util/cn'

export const Section = ({
    children,
    className,
    title,
    contentClassName,
    titleClassName,
}: {
    children: React.ReactNode
    className?: string
    title: string
    contentClassName?: string
    titleClassName?: string
}) => {
    return (
        <div
            className={cn(
                'relative w-full flex flex-col items-center justify-center divide-y divide-neutral-800 overflow-hidden',
                className
            )}
        >
            <div
                className={cn(
                    'w-full flex flex-row items-center justify-center',
                    titleClassName
                )}
            >
                <h2 className="text-lg font-bold text-center py-6 px-4 mb-0 font-orbitron tracking-wide">
                    {title}
                </h2>
            </div>
            <div
                className={cn(
                    'w-full grid max-lg:grid-cols-1 lg:grid-cols-4 gap-4 max-lg:divide-y max-lg:divide-neutral-800 lg:divide-x divide-neutral-800',
                    contentClassName
                )}
            >
                {children}
            </div>
        </div>
    )
}
