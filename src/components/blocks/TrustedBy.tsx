import Image from 'next/image'
import { cn } from '../util/cn'
import { Section } from '../kit/Section'
import { motion } from 'framer-motion'
import { tinaField } from 'tinacms/dist/react'
import type { Template } from 'tinacms'
import type { PagesBlocksTrustedBy } from '../../../tina/__generated__/types'

export const TrustedBy = ({
    data,
}: {
    data: PagesBlocksTrustedBy
}) => {
    return (
        <Section
            title={data.title ?? 'Trusted by companies around the world'}
            data-tina-field={tinaField(data, 'title')}
            contentClassName="grid max-lg:grid-cols-3 lg:grid-cols-3"
            delay={0.2}
        >
            {data.companies?.map((item, index) => (
                <div key={index} className="flex items-center justify-center p-2">
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
                            className={cn(item?.filter ?? '', 'p-2')}
                            src={item?.logo ?? ''}
                            alt={item?.name ?? ''}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={{ objectFit: 'contain' }}
                            loading="eager"
                        />
                    </motion.div>
                </div>
            ))}
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
                    logo: '/customers/GrowSaas',
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