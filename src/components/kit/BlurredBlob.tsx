import { cn } from '../util/cn'

export const BlurredBlob = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                'absolute  z-0 bg-accent-100 opacity-10 blur-[100px] rounded-full w-[600px] h-[600px]',
                className ? className : '-bottom-60 -left-60'
            )}
        />
    )
}
