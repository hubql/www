import { Section } from '../kit/Section'
import { BlurredBlob } from '../kit/BlurredBlob'
import { motion } from 'framer-motion'
import { Cta } from '../templates/Cta'
export const Services = () => {
    return (
        <Section
            title="Our Services"
            className="divide-none"
            titleClassName="py-6"
            contentClassName="z-10 grid grid-cols-1 lg:grid-cols-1  gap-4 pb-12 px-2 pt-0 flex flex-col"
            delay={2}
        >
            {ServicesCards.map((card, index) => (
                <ServicesCard
                    key={'cardService-' + index}
                    card={card}
                    index={index}
                />
            ))}

            <BlurredBlob className="-right-60 -bottom-60" />

        </Section>
    )
}

const ServicesCards = [
    {
        "title": "Research & Development",
        "description": "We explore, prototype, and build cutting-edge software solutions that push the boundaries of technology. Our team helps companies experiment with new ideas, validate concepts, and bring innovative products to life.",
        "list": [
            "Rapid prototyping and proof-of-concept development for new product ideas.",
            "Exploration of emerging technologies such as AI, Web3, and automation.",
            "Technical feasibility studies and software architecture validation.",
            "Building internal tools and experimental software products."
        ]
    },
    {
        "title": "Developer Experience Consulting & Tooling",
        "description": "We help engineering teams optimize their workflow, improve internal tooling, and enhance developer experience. Our solutions streamline documentation, automation, and efficiency in software development.",
        "list": [
            "Custom-built developer tools to improve API documentation and testing.",
            "API reference generation and automated API documentation systems.",
            "Optimizing CI/CD pipelines for faster deployments and better automation.",
            "Enhancing developer onboarding with better documentation and DX strategies."
        ]
    },
    {
        "title": "Product Design",
        "description": "We create user-centered digital experiences that blend functionality with aesthetics. From wireframes to final UI/UX, we ensure that your product is intuitive, engaging, and built for success.",
        "list": [
            "End-to-end UI/UX design for web applications and SaaS platforms.",
            "Wireframing and prototyping to refine user journeys and flows.",
            "Design systems and component libraries for consistent branding.",
            "User research and testing to validate usability and engagement."
        ]
    },
    {
        "title": "Web Development",
        "description": "We build high-quality, modern web applications tailored to your business needs. Our expertise spans across front-end, back-end, and full-stack development using the latest technologies.",
        "list": [
            "Custom web applications using Next.js, React, and Tailwind CSS.",
            "Backend development with Node.js, Supabase, and AWS.",
            "API development and third-party integrations for seamless connectivity.",
            "Performance optimization and security best practices for scalable web apps."
        ]
    },
    {
        "title": "API Development & Documentation",
        "description": "We craft high-quality APIs and provide automated documentation solutions to improve developer experience and streamline API adoption.",
        "list": [
            "Custom API development with REST, GraphQL, and WebSockets.",
            "Automated API documentation using OpenAPI and Markdown-based workflows.",
            "API management, security, and versioning best practices.",
            "Integration with API clients and developer portals for seamless adoption."
        ]
    },
    {
        "title": "Growth & Marketing Services (in Partnership with GROWSaaS)",
        "description": "In collaboration with GROWSaaS, we help SaaS and tech companies scale with expert marketing strategies, performance campaigns, and SEO optimization.",
        "list": [
            "Performance Marketing (SEA/SEM) – Google Ads & conversion-optimized campaigns.",
            "Content Marketing – High-quality blog content, whitepapers, and case studies.",
            "Search Engine Optimization (SEO) – Keyword research, on-page SEO, and visibility optimization.",
            "Social Media Marketing – LinkedIn strategies to engage decision-makers and generate leads.",
            "Go-to-Market Strategy (Germany) – Strategic roadmap for launching in the DACH region.",
            "Website Behavior Analysis – Improve conversions with in-depth UX and analytics insights."
        ]
    }

]

const ServicesCard = ({ card, index }: { card: any; index: number }) => {
    return (
        <motion.div
            className="relative z-10 grid grid-cols-1 lg:grid-cols-2 bg-black/40 backdrop-blur-lg max-w-screen-lg !border border-neutral-800 mx-auto"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.5,
                delay: 2.2 + index * 0.2,
                type: 'spring',
                stiffness: 100,
                damping: 10,
            }}
        >
            <div className="flex flex-col justify-center p-8 h-full">
                <h2 className="text-lg font-bold font-orbitron tracking-wide">
                    {card.title}
                </h2>
                <p className="text-neutral-400 text-base">{card.description}</p>
            </div>
            <ul className="flex flex-col gap-2 text-neutral-400 text-base list-disc p-8 h-full">
                {card.list.map((item: string) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            {
                index % 2 !== 0 && (
                    <Cta
                        ctaTitle="Get in touch"
                        ctaButtonText="Contact Us"
                        ctaButtonUrl="/contact"
                    />
                )
            }
        </motion.div>
    )
}
