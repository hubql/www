import clsx from 'clsx'

export const Badge = ({
    children,
    className,
}: {
    children?: any
    className?: string
}) => {
    return (
        <div
            className={clsx(
                'px-4 py-1 rounded-full bg-accent-600/10 border border-accent-600/50 text-accent-600 dark:bg-accent-100/10 border dark:border-accent-100/50 dark:text-accent-100 w-fit text-sm  ',
                className
            )}
        >
            {children}
        </div>
    )
}
