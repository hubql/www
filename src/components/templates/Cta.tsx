import { Button, styleVariant } from '../kit/Button'
import { cn } from '../util/cn'

export const Cta = ({
    ctaTitle,
    ctaDescription,
    ctaButtonText,
    ctaButtonUrl,
    className,
    titleClassName,
    blob = true,
    buttonVariant = 'contain',
    containerClassName,
}: {
    ctaTitle?: string
    ctaDescription?: string
    ctaButtonText: string
    ctaButtonUrl: string
    className?: string
    titleClassName?: string
    blob?: boolean
    buttonVariant?: styleVariant
    containerClassName?: string
}) => {
    if (!ctaButtonUrl) return null
    return (
        <div
            className={cn(
                'relative w-full flex justify-center pt-32 pb-24 overflow-clip',
                className
            )}
        >
            <div className={'w-full max-w-5xl mx-auto'}>
                <div
                    className={cn(
                        'flex flex-col gap-6 items-center text-center px-8',
                        containerClassName
                    )}
                >
                    {ctaTitle && (
                        <h2
                            className={cn(
                                'text-4xl mb-0 font-orbitron',
                                titleClassName
                            )}
                        >
                            {ctaTitle}
                        </h2>
                    )}
                    {ctaDescription && (
                        <p className="text-base text-neutral-400 max-w-sm m-auto">
                            {ctaDescription}
                        </p>
                    )}
                    <Button
                        icon="arrow"
                        href={ctaButtonUrl}
                        variant={buttonVariant}
                        size="sm"
                    >
                        {ctaButtonText}
                    </Button>
                </div>
            </div>
            {blob && (
                <div className="absolute -bottom-60 -left-60 bg-accent-100 opacity-10 blur-[100px] rounded-full w-[600px] h-[600px] z-[-1]" />
            )}
        </div>
    )
}
