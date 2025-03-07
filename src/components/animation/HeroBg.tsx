import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
export const HeroBg = () => {
    return (
        <div className="relative lg:absolute z-0 w-full h-[500px] lg:h-[500px] overflow-clip">
            <div className="w-full h-[500px]">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, ease: 'easeIn', delay: 1 }}
                    className={'relative z-10 w-full h-full'}
                >
                    <DotLottieReact
                        src="/home/bg-hero.json"
                        width={700}
                        height={500}
                        loop
                        autoplay
                        className="max-lg:mt-[120px] h-[500px] absolute top-[10%] right-0 scale-150"
                    />
                </motion.div>
                <div className="absolute  top-[10%] right-20 max-lg:mt-[120px] h-[500px]">
                    <Image
                        src="/home/hero-bg.png"
                        alt="Hero Background"
                        width={700}
                        height={500}
                        className="w-full h-full object-contain scale-150"
                        loading="eager"
                    />
                </div>
            </div>
        </div>
    )
}
