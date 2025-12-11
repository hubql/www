import Image from 'next/image'
import { cn } from '../util/cn'
import { Section } from '../kit/Section'
import { motion } from 'framer-motion'
import { tinaField } from 'tinacms/dist/react'
import type { Template } from 'tinacms'
import type { PagesBlocksTrustedBy } from '../../../tina/__generated__/types'

export const TrustedBy = ({ data }: { data: PagesBlocksTrustedBy }) => {
    return (
        <Section
            title=""
            data-tina-field={tinaField(data, 'title')}
            contentClassName="flex flex-col gap-4 py-12"
            delay={0.2}
        >
            <div className="flex flex-col md:flex-row gap-16 justify-center items-center">
                {data.companies?.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center w-[130px]"
                    >
                        <motion.div
                            className="relative w-full aspect-video h-10"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.3 + index * 0.09,
                                type: 'spring',
                                stiffness: 100,
                                damping: 10,
                            }}
                            data-tina-field={tinaField(item)}
                        >
                            <Image
                                title={item?.name ?? ''}
                                className={cn(
                                    item?.filter ?? '',
                                    'object-contain'
                                )}
                                src={item?.logo ?? ''}
                                alt={item?.name ?? ''}
                                fill
                                sizes="100vh"
                                loading="eager"
                            />
                        </motion.div>
                    </div>
                ))}
            </div>

            <motion.h2
                className="col-span-full text-[12px] font-normal text-center font-lexend text-[#ABABAB]"
                data-tina-field={tinaField(data, 'title')}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    delay: 0.6,
                    ease: 'easeInOut',
                }}
            >
                {data.title ?? 'Trusted by companies around the world'}
            </motion.h2>
        </Section>
    )
}

export const trustedByBlockSchema: Template = {
    name: 'TrustedBy',
    label: 'Trusted By',
    ui: {
        previewSrc: '',
        defaultItem: {
            title: 'Trusted by companies around the world',
            companies: [
                {
                    name: 'RevitPay',
                    logo: '/customers/RevitPay.png',
                    filter: 'contrast-[0%] saturate-0 brightness-100',
                },
                {
                    name: 'Rocket Connect',
                    logo: '/customers/RConnect.png',
                    filter: 'contrast-[100%] saturate-0 brightness-[50%]',
                },
                {
                    name: 'GrowSaaS',
                    logo: '/customers/GrowSaas.png',
                    filter: 'saturate-0 brightness-100',
                },
            ],
        },
    },

    fields: [
        {
            type: 'string',
            label: 'Title',
            name: 'title',
        },
        {
            label: 'Companies',
            name: 'companies',
            type: 'object',
            list: true,
            fields: [
                {
                    label: 'Name',
                    name: 'name',
                    type: 'string',
                },
                {
                    label: 'Logo',
                    name: 'logo',
                    type: 'image',
                },
                {
                    label: 'Filter (Tailwind classes)',
                    name: 'filter',
                    type: 'string',
                },
            ],
        },
    ],
}
