import Image from 'next/image'
import { Section } from '../kit/Section'
import { cn } from '../util/cn'
import { classNames } from 'tinacms'

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
    className,
}: {
    name: string
    description: string
    image: string[]
    className?: string
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
                        className={cn('h-10 w-10', className)}
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
        name: 'HTML',
        description:
            'Next.js is a React framework for building server-side rendered (SSR) web applications.',
        image: ['/techstack/html.svg'],
    },
    {
        name: 'Tailwind CSS',
        description:
            'Next.js is a React framework for building server-side rendered (SSR) web applications.',
        image: ['/techstack/tailwind.svg'],
    },
    {
        name: 'React',
        description:
            'Next.js is a React framework for building server-side rendered (SSR) web applications.',
        image: ['/techstack/react.svg'],
    },
    {
        name: 'Node',
        className: 'bg-white  p-1',
        description:
            'Next.js is a React framework for building server-side rendered (SSR) web applications.',
        image: ['/techstack/nodejs.svg'],
    },
    {
        name: 'Elysia',
        description:
            'Next.js is a React framework for building server-side rendered (SSR) web applications.',
        image: ['/techstack/elysia.svg'],
    },
    {
        name: 'Supabase',
        description:
            'Next.js is a React framework for building server-side rendered (SSR) web applications.',
        image: ['/techstack/supabase.svg'],
    },
    {

        name: 'AWS',
        className: 'bg-white p-1',
        description:
            'Next.js is a React framework for building server-side rendered (SSR) web applications.',
        image: ['/techstack/aws.svg'],
    },


]
