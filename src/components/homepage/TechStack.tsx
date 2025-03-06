import Image from 'next/image'
import { Section } from '../kit/Section'

export const TechStack = () => {
    return (
        <Section
            title="Tech Stack"
            contentClassName="grid grid-cols-4 gap-4 divide-x divide-neutral-800"
        >
            {TechStackItems.map((item) => (
                <TechStackItem key={item.name} {...item} />
            ))}
        </Section>
    )
}

const TechStackItem = ({
    name,
    description,
    image,
}: {
    name: string
    description: string
    image: string[]
}) => {
    return (
        <div>
            <div className="flex flex-row items-center justify-start gap-2">
                {image.map((item) => (
                    <Image src={item} alt={name} width={64} height={64} />
                ))}
            </div>
            <h2>{name}</h2>
        </div>
    )
}

const TechStackItems = [
    {
        name: 'Next.js',
        description:
            'Next.js is a React framework for building server-side rendered (SSR) web applications.',
        image: ['/nextjs.png', '/nextjs.png', '/nextjs.png', '/nextjs.png'],
    },
]
