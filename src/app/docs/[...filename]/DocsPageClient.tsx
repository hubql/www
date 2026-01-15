'use client'

import { DocsTemplate } from '@/src/components/blocks/DocsTemplate'
import { DocsMenu } from '@/src/components/layout/DocsMenu'
import { DocsLayout } from '@/src/components/layout/DocsLayout'
import { useTina } from 'tinacms/dist/react'

export function DocsPageClient(props: {
    query: any
    variables: any
    data: any
    footer: any
    header: any
}) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    })
    const header = props.header
    const footer = props.footer

    return (
        <DocsLayout data={data.docs} header={header}>
            <div className=" w-full h-fit text-center my-20 mx-auto">
                Available soon...
            </div>
        </DocsLayout>
    )

    // Uncomment when docs are ready
    // return (
    //     <DocsLayout data={data.docs} header={header}>
    //         <div className="progress"></div>
    //         <div className="relative w-full h-fit flex flex-row overflow-visible">
    //             <DocsMenu />
    //             <DocsTemplate content={data.docs} footer={footer} />
    //         </div>
    //     </DocsLayout>
    // )
}
