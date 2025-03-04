import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { motion } from 'framer-motion'

export const HeroBg = () => {
    return (
        <div className="relative lg:absolute z-0 w-full h-[500px] lg:h-[500px] overflow-clip">
            <div className="bg-[url(/home/hero-bg.png)] bg-no-repeat bg-contain bg-center bg-opacity-20  h-[500px]">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, ease: 'easeIn', delay: 1 }}
                    className={'relative z-10'}
                >
                    <DotLottieReact
                        src="/home/bg-hero.json"
                        width={1920}
                        height={500}
                        loop
                        autoplay
                        className="max-lg:mt-[120px] h-[500px]"
                    />
                </motion.div>
            </div>
        </div>
    )
}
