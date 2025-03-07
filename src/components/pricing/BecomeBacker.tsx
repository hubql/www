import { Backpack, HeartHandshake, MoveRight } from 'lucide-react'
import { Button } from '../kit/Button'
import { cn } from '../util/cn'

export const BecomeBacker = ({
    titleClassName,
    colorAccent = true,
    align = 'left',
}: {
    titleClassName?: string
    colorAccent?: boolean
    align?: 'left' | 'center'
}) => {
    const backerSpots: string | any[] = []

    const defaultBackerSpot = {
        name: 'Become a partner',
        description: 'Support our mission to empower developers.',
        link: 'https://hubql.notion.site/161cf350629f80eaa538e260157bae45?pvs=105',
    }

    const columns = 5
    const filledBackerSpots = [
        ...backerSpots,
        ...Array.from(
            { length: columns - backerSpots.length },
            () => defaultBackerSpot
        ),
    ].slice(0, columns)

    return (
        <div className="w-full">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1">
                <div className="relative flex flex-col overflow-clip py-16">
                    <div
                        className={cn(
                            'relative z-0 flex flex-col max-w-xl px-4 lg:px-6 lg:px-16',
                            titleClassName,
                            align === 'center' && 'max-w-full'
                        )}
                    >
                        <h2
                            className={cn(
                                'text-left text-2xl lg:text-3xl font-bold font-orbitron',
                                align === 'center' && 'text-center'
                            )}
                        >
                            Help and join as one of 5 selected founding partners
                        </h2>
                        <p
                            className={cn(
                                'text-base text-neutral-400 max-w-2xl mx-auto',
                                align === 'center' && 'text-center'
                            )}
                        >
                            For our open-source launch, we offer five slots at
                            3,500 EUR each for companies to work with us to
                            elevate your API team developer experience,
                            including lifetime Hubql Pro Plan access and other
                            benefits such as your company featured below and
                            across other channels.
                        </p>
                        <Button
                            className={cn(align === 'center' && 'm-auto')}
                            icon="arrow"
                            href="https://hubql.notion.site/161cf350629f80eaa538e260157bae45?pvs=105"
                        >
                            Become a Founding Partner
                        </Button>
                    </div>
                    {colorAccent && (
                        <div className="absolute -top-40 -right-40 z-10 bg-accent-100 opacity-10 blur-[100px] rounded-full w-[400px] h-[440px]" />
                    )}
                </div>
                <div className="w-full grid grid-cols-1 lg:grid-cols-5 max-lg:divide-y divide-neutral-800 border-y border-neutral-800">
                    {filledBackerSpots.map((item, index) => {
                        const isDefaultSpot =
                            item.name === defaultBackerSpot.name
                        return (
                            <a
                                href={item.link}
                                key={'backed-by-' + index}
                                className={` border-l border-neutral-800 first:border-l-0 flex flex-col items-start lg:items-center justify-center p-6 transition-transform ease-in hover:shadow-inner bg-black hover:bg-neutral-900 `}
                            >
                                <div className="flex flex-col items-center justify-center">
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="flex flex-col items-center justify-center"></div>
                                        <div className="text-left">
                                            <div className="flex flex-col items-start gap-1">
                                                {isDefaultSpot && (
                                                    <HeartHandshake className="w-8 h-8 stroke-accent-100 stroke-1" />
                                                )}
                                                <h2 className="text-lg mb-0 font-bold">
                                                    {item.name}
                                                </h2>
                                            </div>
                                            <p className="text-neutral-400 text-xs">
                                                {item.description}
                                            </p>
                                            {isDefaultSpot && (
                                                <div className="flex items-center gap-4 text-sm">
                                                    Register now
                                                    <MoveRight className="w-4 h-4" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
