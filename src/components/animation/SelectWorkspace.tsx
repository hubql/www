import { motion } from 'framer-motion'
import { CheckCircle2, ChevronDown, PlusCircle } from 'lucide-react'

export const SelectWorkspace = () => {
    return (
        <div className="w-10/12 flex flex-col gap-2">
            <div className="w-full flex items-center justify-between pl-3 pr-2 py-2 rounded-lg border border-neutral-700 text-sm">
                Acme Inc.
                <ChevronDown className="w-5 h-5" />
            </div>
            <motion.div
                className="w-full flex flex-col border border-neutral-700 rounded-lg "
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    delay: 0.8,
                    duration: 0.4,
                    ease: 'easeIn',
                }}
            >
                <div className="uppercase text-neutral-500 tracking-[8px] text-xs px-4 py-2">
                    Workspace
                </div>
                <div className="w-full flex gap-4 justify-between items-center text-sm  px-4 py-2 hover:text-white hover:bg-neutral-800 cursor-pointer">
                    Acme Inc. <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="text-sm text-neutral-400 hover:text-white hover:bg-neutral-800 cursor-pointer px-4 py-2">
                    Rocket Inc.
                </div>
                <div className="w-full flex gap-4 items-center text-neutral-400 text-sm  px-4 py-2">
                    <PlusCircle className="w-5 h-5" />
                    Create Workspace
                </div>
            </motion.div>
        </div>
    )
}
