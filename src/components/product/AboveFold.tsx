import { HeroBg } from '../animation/HeroBg'

export const AboveFold = () => {
    return (
        <div className="hero relative w-full lg:min-h-[500px] lg:h-[500px] lg:max-h-[500px] flex flex-col items-start justify-center">
            <div className="pt-8 absolute top-0 left-0 lg:relative w-fit h-fit flex flex-col z-10 px-8 max-lg:bg-black/10 max-lg:backdrop-blur-sm">
                <h1 className="text-white text-3xl lg:text-5xl font-bold lg:font-medium text-left tracking-wide font-orbitron">
                    You code, we craft docs
                    <br /> — elevating DX beyond code.
                </h1>
                <p className="max-w-xl text-neutral-400 text-base lg:text-xl">
                    Hubql is an open-source platform for documentation
                    automation, and distribution that is streamlined for teams
                    and designed for AI-native workflows.
                </p>
                <div className="flex flex-wrap items-start w-fit gap-y-2 gap-x-2 justify-center p-[2px] rounded-sm mt-4"></div>
            </div>
            <HeroBg />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 bottom-[0] px-0 w-full lg:divide-x divide-neutral-800 border-0 border-neutral-800"></div>
        </div>
    )
}
