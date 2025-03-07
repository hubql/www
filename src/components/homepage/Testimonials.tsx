import { useEffect } from 'react'
import { Section } from '../kit/Section'
import { motion, useAnimation, useMotionValue } from 'framer-motion'

export const Testimonials = () => {
    const controls = useAnimation()
    const x = useMotionValue(0)

    useEffect(() => {
        controls.start({
            x: [0, -1000],
            transition: {
                duration: 30,
                ease: 'linear',
            },
        })
    }, [controls])

    return (
        <Section
            title="Our results"
            className="!divide-none"
            contentClassName="!flex !flex-row overflow-hidden justify-center items-center !divide-none pb-8"
        >
            <div className="absolute z-10 top-0 left-0 w-[300px] h-full bg-gradient-to-r from-black to-transparent" />
            <motion.div
                className="flex flex-row gap-4 items-center h-fit"
                style={{ x }}
                animate={controls}
                initial={{ x: 0 }}
                onMouseEnter={() => {
                    controls.stop()
                }}
                onMouseLeave={() => {
                    const currentX = x.get()
                    controls.start({
                        x: [currentX, -1000],
                        transition: {
                            duration: 30 * (1 + currentX / 1000),
                            ease: 'linear',
                        },
                    })
                }}
            >
                <div className="flex gap-4 min-w-max h-fit flex-row items-center">
                    {testimonials.map((testimonial, index) => (
                        <Testimonial
                            key={'testimonial-' + testimonial.name + index}
                            {...testimonial}
                        />
                    ))}
                </div>
            </motion.div>
            <div className="absolute z-10 top-0 right-0 w-[300px] h-full bg-gradient-to-l from-black to-transparent" />
        </Section>
    )
}

const Testimonial = ({
    name,
    company,
    text,
}: {
    name: string
    company: string
    text: string
}) => {
    return (
        <div className="flex flex-col gap-4 bg-neutral-950 p-4 pb-0 border border-neutral-800 w-full max-w-xl h-fit text-neutral-400">
            <p className="hyphens-auto break-all">{text}</p>
            <div className="flex flex-row items-center gap-2 text-white">
                <p>{name}</p> -<p>{company}</p>
            </div>
        </div>
    )
}

const testimonials = [
    {
        name: 'Dan Starns',
        company: 'rconnect.tech',
        text: 'Fantastic work! MVPforge delivered a stunning logo and website. Highly recommended for top-notch design and implementation!',
    },
    {
        name: 'Patrick Wings',
        company: 'GrowSaaS',
        text: 'I highly recommend MVPforge for their fast and perfect execution in redesigning and implementing our website. They delivered a design and software that perfectly captured our brand essence, contributing significantly to our business success.',
    },
    {
        name: 'Dan Starns',
        company: 'rconnect.tech',
        text: 'Fantastic work! MVPforge delivered a stunning logo and website. Highly recommended for top-notch design and implementation!',
    },
]
