import Image from 'next/image'
import { Section } from '../kit/Section'

export const TechStack = () => {
    return (
        <Section
            title="Tech Stack"
            contentClassName="grid grid-cols-4 gap-0 divide-x divide-y divide-neutral-800"
        >
            {TechStackItems.map((item, index) => (
                <TechStackItem key={'techstack-' + index} {...item} />
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
        <div className="flex flex-col items-center justify-center gap-2 p-4">
            <div className="flex flex-row items-center justify-start gap-2">
                {image.map((item, index) => (
                    <Image
                        src={item}
                        alt={name}
                        width={28}
                        height={28}
                        key={'techstackLogo-' + index}
                    />
                ))}
            </div>
            <h2 className="text-base font-bold font-orbitron tracking-wide mb-0">
                {name}
            </h2>
        </div>
    )
}

const TechStackItems = [
    {
        name: 'Figma',
        description:
            'Next.js is a React framework for building server-side rendered (SSR) web applications.',
        image: ['/techstack/figma.svg'],
    },
    {
        name: 'Figma',
        description:
            'Next.js is a React framework for building server-side rendered (SSR) web applications.',
        image: ['/techstack/figma.svg'],
    },
    {
        name: 'Figma',
        description:
            'Next.js is a React framework for building server-side rendered (SSR) web applications.',
        image: ['/techstack/figma.svg'],
    },
    {
        name: 'Figma',
        description:
            'Next.js is a React framework for building server-side rendered (SSR) web applications.',
        image: ['/techstack/figma.svg'],
    },
    {
        name: 'Figma',
        description:
            'Next.js is a React framework for building server-side rendered (SSR) web applications.',
        image: ['/techstack/figma.svg'],
    },
    {
        name: 'Figma',
        description:
            'Next.js is a React framework for building server-side rendered (SSR) web applications.',
        image: ['/techstack/figma.svg'],
    },
    {
        name: 'Figma',
        description:
            'Next.js is a React framework for building server-side rendered (SSR) web applications.',
        image: ['/techstack/figma.svg'],
    },
    {
        name: '',
        description: '',
        image: [],
    },
]
