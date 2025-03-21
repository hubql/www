import { MailIcon } from 'lucide-react'
import { HeroBg } from '../animation/HeroBg'
import { Button } from '../kit/Button'
import { motion } from 'framer-motion'
export const AboveFold = () => {
    return (
        <div className="hero relative w-full lg:min-h-[500px] lg:h-[500px] lg:max-h-[500px] flex flex-col items-start justify-center">
            <motion.div
                className="pt-8 absolute top-0 left-0 lg:relative w-fit h-fit flex flex-col z-10 px-8 max-lg:bg-black/10 max-lg:backdrop-blur-sm"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.1, ease: 'easeIn' }}
            >
                <h1 className="text-white text-3xl lg:text-5xl font-bold lg:font-medium text-left font-orbitron tracking-wide max-w-4xl">
                    Intelligent Software Solutions for Fast-Moving Companies
                </h1>
                <p className="max-w-xl text-neutral-400 text-base lg:text-xl">
                    Hubql is a software services company delivering excellent
                    web applications, APIs, and open-source tools. We help
                    fast-moving teams build software with precision.
                </p>
                <div className="flex flex-wrap items-start w-fit gap-y-2 gap-x-2 justify-center p-[2px] rounded-sm mt-4">
                    <Button href="/contact" icon={'arrow'}>
                        Build with us
                    </Button>
                </div>
            </motion.div>
            <HeroBg />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 bottom-[0] px-0 w-full lg:divide-x divide-neutral-800 border-0 border-neutral-800"></div>
        </div>
    )
}
