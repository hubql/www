import { MoveRight } from 'lucide-react'
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
    inlineStyle = false,
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
    inlineStyle?: boolean
}) => {
    if (!ctaButtonUrl) return null

    return (
        <span
            className={cn(
                'relative w-full flex justify-center pt-32 pb-24 overflow-clip',
                className
            )}
        >
            <span className="w-full max-w-5xl mx-auto">
                <span
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

                    {inlineStyle ? (
                        <span className="flex items-center gap-2 text-sm text-normal font-lexend cursor-pointer hover:opacity-80">
                            {ctaButtonText}
                            {ctaButtonUrl !== '#' ? (
                                <a href={ctaButtonUrl}>
                                    <MoveRight className="w-5 h-5 text-[#3ECF8E]" />
                                </a>
                            ) : (
                                <MoveRight className="w-5 h-5 text-[#3ECF8E]" />
                            )}
                        </span>
                    ) : (
                        <Button
                            icon="arrow"
                            href={ctaButtonUrl}
                            variant={buttonVariant}
                            size="sm"
                        >
                            {ctaButtonText}
                        </Button>
                    )}
                </span>
            </span>

            {blob && (
                <span className="absolute -bottom-60 -left-60 bg-accent-100 opacity-10 blur-[100px] rounded-full w-[600px] h-[600px] z-[-1]" />
            )}
        </span>
    )
}
