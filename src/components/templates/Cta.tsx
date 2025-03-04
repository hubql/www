import { Button } from '../kit/Button'

export const Cta = ({
    ctaTitle,
    ctaDescription,
    ctaButtonText,
    ctaButtonUrl,
}: {
    ctaTitle: string
    ctaDescription?: string
    ctaButtonText: string
    ctaButtonUrl: string
}) => {
    if (!ctaButtonUrl) return null
    return (
        <div className="relative w-full flex justify-center pt-32 pb-24 overflow-clip">
            <div className=" w-full max-w-5xl mx-auto  ">
                <div className="flex flex-col gap-6 items-center text-center px-8">
                    <h2 className="text-4xl mb-0">{ctaTitle}</h2>
                    {ctaDescription && (
                        <p className="text-base text-neutral-400 max-w-sm m-auto">
                            {ctaDescription}
                        </p>
                    )}
                    <Button icon="arrow" href={ctaButtonUrl}>
                        {ctaButtonText}
                    </Button>
                </div>
            </div>
            <div className="absolute -bottom-60 -left-60 z-10 bg-accent-100 opacity-10 blur-[100px] rounded-full w-[600px] h-[600px]" />
        </div>
    )
}
