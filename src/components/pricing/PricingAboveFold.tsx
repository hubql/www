import { Sparkles } from 'lucide-react'

export const PricingAboveFold = () => {
    return (
        <div className="pricingAboveFold w-full mx-auto max-w-screen-xl pt-16 pb-16 px-2 lg:px-8 border-b border-neutral-800">
            <div className="grid gird-cols-1 lg:grid-cols-2 gap-32">
                <div className="h-full flex flex-col items-start justify-start">
                    <div className="flex items-center gap-2 mb-2">
                        {' '}
                        <Sparkles className="text-accent-100 w-5 h-5" />
                        <h1 className="text-left text-accent-100 text-base font-semibold mb-0 uppercase">
                            Pricing
                        </h1>
                    </div>

                    <h2 className="text-4xl font-bold">
                        DX tools for teams, not seats.
                    </h2>
                    <p className="text-base text-neutral-400">
                        Hubql empowers API teams to document, test, and deliver
                        faster — redefining developer experience for human
                        workflows and intelligent systems.
                    </p>
                </div>
                <div className="text-base text-neutral-400">
                    <p>
                        Hubql is an open-source project maintained by a
                        dedicated team of engineers and designers who believe in
                        the power of APIs to transform the way we work. Our
                        mission is to empower API teams to deliver faster, more
                        efficient though collaboration and efficient workflows.
                    </p>
                    <p>
                        To maintain and ensure sustainability of the library,
                        Hubql offers subscription plans for teams to support the
                        development. In return, we provide additional support,
                        prioritized GitHub and other benefits as listed below.
                    </p>
                </div>
            </div>
        </div>
    )
}
