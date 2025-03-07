import { motion } from 'framer-motion'
import {
    PanelLeft,
    BookOpen,
    Users,
    TerminalSquare,
    Bookmark,
    Command,
    Joystick,
    ArrowUpDown,
    BookMarked,
    Monitor,
    Grid,
    Network,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const SubNav = () => {
    const router = useRouter()
    const navLinks = [
        {
            // name: 'Hubql Grid',
            path: '/product/hubql-grid',
            icon: <Image
                src="/product-logos/hubql-grid.svg"
                alt="Hubql Grid"
                width={75}
                height={15}
            />,
        },
        {
            // name: 'Hubql Client',
            path: '/product/api-client',
            icon: <Image
                src="/product-logos/hubql-client.svg"
                alt="Hubql Grid"
                width={100}
                height={15}
            />,
        },
        {
            // name: 'Hubql Ref',
            path: '/product/api-reference-hosting',
            icon: <Image
                src="/product-logos/hubql-ref.svg"
                alt="Hubql Grid"
                width={75}
                height={15}
            />,
        },
        {
            // name: 'Hubql Lens',
            path: '/product/schema-visualizer',
            icon: <Image
                src="/product-logos/hubql-lens.svg"
                alt="Hubql Grid"
                width={80}
                height={15}
            />,
        },
    ]

    return (
        <nav className="hidden fixed md:flex justify-center w-full top-[56px] mx-auto z-40 ">
            <div className="max-w-screen-xl w-full mx-auto border-b border-x border-neutral-800 bg-black/70 backdrop-blur-lg  space-x-2  px-4 lg:px-8 md:flex justify-center">
                {navLinks.map((link) => (
                    <Link key={link.path} href={link.path} className="relative">
                        <div
                            className={`inline-flex text-neutral-400  text-sm hover:text-neutral-300 py-4 px-2 gap-2 items-center ${router.pathname === link.path
                                ? 'text-white'
                                : ''
                                }`}
                        >
                            {link.icon}
                        </div>
                        {router.pathname === link.path && (
                            <motion.div
                                layoutId="underline"
                                className="absolute  h-[1px] bg-accent-300 left-0 right-0 rounded-lg bottom-0"
                                transition={{
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 30,
                                }}
                            />
                        )}
                    </Link>
                ))}
            </div>
        </nav>
    )
}
