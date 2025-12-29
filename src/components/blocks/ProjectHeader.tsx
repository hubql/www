import { motion } from 'framer-motion'
import { tinaField } from 'tinacms/dist/react'
import type { Template } from 'tinacms'
import type { PagesBlocksProjectHeader } from '../../../tina/__generated__/types'
import { Button } from '../kit/Button'

export const ProjectHeader = ({ data }: { data: PagesBlocksProjectHeader }) => {
    return (
        <div className="relative w-full overflow-hidden flex justify-center py-16 lg:py-24">
            <div className="w-full max-w-3xl mx-auto px-4 lg:px-8 border-b border-border pb-20">
                <motion.div
                    className="flex flex-col items-start text-left"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                    {data.overview && (
                        <div
                            className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 font-orbitron"
                            data-tina-field={tinaField(data, 'overview')}
                        >
                            {data.overview}
                        </div>
                    )}

                    {data.projectName && (
                        <h1
                            className="lg:text-5xl text-3xl font-bold text-white mb-6 font-lexend text-wrap w-full break-all"
                            data-tina-field={tinaField(data, 'projectName')}
                        >
                            {data.projectName}
                        </h1>
                    )}

                    <div className="grid grid-cols-1 gap-8 w-full mb-8">
                        {data.agencyRole && (
                            <div>
                                <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-2">
                                    Agency Role
                                </h3>
                                <p
                                    className="text-lg"
                                    data-tina-field={tinaField(
                                        data,
                                        'agencyRole'
                                    )}
                                >
                                    {data.agencyRole}
                                </p>
                            </div>
                        )}

                        {data.product && (
                            <div>
                                <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-2">
                                    Product
                                </h3>
                                <p
                                    className="text-lg"
                                    data-tina-field={tinaField(data, 'product')}
                                >
                                    {data.product}
                                </p>
                            </div>
                        )}
                    </div>

                    {data.targetUsers && (
                        <div className="mb-8">
                            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-3">
                                Target Users
                            </h3>
                            <p
                                className="text-base"
                                data-tina-field={tinaField(data, 'targetUsers')}
                            >
                                {data.targetUsers}
                            </p>
                        </div>
                    )}

                    {data.website && (
                        <div
                            className="mt-4"
                            data-tina-field={tinaField(data, 'website')}
                        >
                            <Button
                                href={data.website}
                                variant="contain"
                                size="md"
                                icon="arrow"
                            >
                                Visit Website
                            </Button>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    )
}

export const projectHeaderBlockSchema: Template = {
    name: 'projectHeader',
    label: 'Project Header',
    ui: {
        previewSrc: '',
        defaultItem: {
            overview: 'Case Study',
            projectName: 'SchemaVisualizer.dev',
            agencyRole: 'Design & Development',
            product:
                'Web-based data schema visualization and collaboration tool',
            targetUsers:
                'Developers, architects, technical teams, product owners, and non-technical stakeholders',
            website: 'https://www.schemavisualizer.dev/',
        },
    },
    fields: [
        {
            type: 'string',
            label: 'Overview',
            name: 'overview',
        },
        {
            type: 'string',
            label: 'Project Name',
            name: 'projectName',
        },
        {
            type: 'string',
            label: 'Agency Role',
            name: 'agencyRole',
        },
        {
            type: 'string',
            label: 'Product',
            name: 'product',
            ui: {
                component: 'textarea',
            },
        },
        {
            type: 'string',
            label: 'Target Users',
            name: 'targetUsers',
            ui: {
                component: 'textarea',
            },
        },
        {
            type: 'string',
            label: 'Website URL',
            name: 'website',
        },
    ],
}
