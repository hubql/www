import { Section } from '../kit/Section'
import { motion } from 'framer-motion'

export const Testimonials = () => {
    return (
        <Section
            title="Our results"
            className="!divide-none"
            contentClassName="!flex !flex-row overflow-hidden justify-center items-center !divide-none pb-8"
        >
            <div className="absolute z-10 top-0 left-0 w-[300px] h-full bg-gradient-to-r from-black to-transparent" />
            <div className="flex flex-row gap-4 items-center">
                <div className="flex gap-4 min-w-max flex-row items-center">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.3 + index * 0.1,
                                type: 'spring',
                                stiffness: 100,
                                damping: 10,
                            }}
                        >
                            <Testimonial
                                key={'testimonial-' + testimonial.name + index}
                                {...testimonial}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
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
        <div className="flex flex-col gap-4 bg-neutral-950 p-4 pb-0 border border-neutral-800  w-[334px] text-neutral-400 items-center justify-center">
            <p className="hyphens-auto text-sm">{text}</p>
            <div className="flex flex-row items-center gap-2 text-white text-sm">
                <p>
                    {name} @ {company}
                </p>
            </div>
        </div>
    )
}

const testimonials = [
    {
        name: 'Dan Starns',
        company: 'rconnect.tech',
        text: 'Fantastic work! Hubql Labs delivered a stunning logo and website. Highly recommended for top-notch design and implementation!',
    },
    {
        name: 'Patrick Wings',
        company: 'GrowSaaS',
        text: 'I highly recommend Hubql Labs for their fast and perfect execution in redesigning and implementing our website. They delivered a design and software that perfectly captured our brand essence, contributing significantly to our business success.',
    },
    {
        name: 'Darius',
        company: 'Fintech',
        text: 'Hubql Labs has been an excellent long-term partner for us to build APIs and backend systems.',
    },
]
