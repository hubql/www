import Image from 'next/image'
import { cn } from '../util/cn'
import { Section } from '../kit/Section'
import { motion } from 'framer-motion'
export const TrustedBy = () => {
    const companies = [
        {
            name: 'RevitPay',
            logo: '/revitpay-logo.png',
            filter: 'contrast-[0%] saturate-0 brightness-100',
        },
        {
            name: 'Rocket Connect',
            logo: '/rocket-connect-logo.png',
            filter: 'contrast-[100%] saturate-0 brightness-[50%]',
        },
        {
            name: 'Soon, your team?',
            logo: '/green-mess.png',
            filter: ' saturate-0 brightness-100',
        },
    ]
    return (
        <Section
            title="Trusted by companies around the world"
            contentClassName="grid max-lg:grid-cols-3 lg:grid-cols-3 divide-x divide-neutral-800 border-y border-neutral-800"
            delay={1}
        >
            {companies.map((item, index) => (
                <div
                    key={index}
                    className="flex items-center justify-center p-2"
                >
                    <motion.div
                        className="relative w-full aspect-video h-12"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 1.5 + index * 0.09,
                            type: 'spring',
                            stiffness: 100,
                            damping: 10,
                        }}
                    >
                        <Image
                            title={item.name}
                            className={cn(item.filter, 'p-2')}
                            src={item.logo}
                            alt={item.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={{
                                objectFit: 'contain',
                            }}
                            loading="eager"
                        />
                    </motion.div>
                </div>
            ))}
        </Section>
    )
}
