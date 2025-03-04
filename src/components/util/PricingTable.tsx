import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '../kit/Button'
import { cn } from './cn'
import { Check } from 'lucide-react'

const PricingTable = () => {
    const [isMonthly, setIsMonthly] = useState(true)

    const activeStyle =
        'bg-accent-100 text-white dark:bg-accent-500 dark:text-white'
    const normalStyle = 'bg-black text-white border border-neutral-800'

    return (
        <div className="pricingTable w-full ">
            <section className="max-w-7xl mx-auto">
                <h2 className="text-center text-xl lg:text-2xl font-bold mt-8">
                    Transparent pricing, no surprises
                </h2>
                <div className="grid grid-cols-2 max-w-[200px] mx-auto mb-8 text-sm font-bold mt-4">
                    <button
                        className={cn(
                            'px-4 py-2 rounded-l-sm',
                            isMonthly ? activeStyle : normalStyle
                        )}
                        onClick={() => setIsMonthly(true)}
                    >
                        Monthly
                    </button>
                    <button
                        className={cn(
                            'px-4 py-2 rounded-r-sm',
                            !isMonthly ? activeStyle : normalStyle
                        )}
                        onClick={() => setIsMonthly(false)}
                    >
                        Yearly
                    </button>
                </div>
                <Plan plan={pricing} monthly={isMonthly} />
            </section>
        </div>
    )
}

const Plan = ({ plan, monthly }: { plan: any; monthly: boolean }) => {
    return (
        <div
            id="pricing-table"
            className="w-full pb-8 mx-auto max-w-sreen-lg lg:py-0 "
        >
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-y border-neutral-800">
                {plan.map(
                    (
                        item: {
                            featured: any
                            priceMonthly: any
                            priceYearly: any
                            type: string
                            desc: string
                            features: any[]
                            href: {
                                monthly: string
                                yearly: string
                            }
                        },
                        index: string
                    ) => {
                        const cardStyle = item.featured
                            ? 'w-full h-full flex flex-col mx-auto text-left text-white bg-neutral-900/70 border-r border-neutral-800 justify-between'
                            : 'w-full h-full flex flex-col mx-auto text-left text-white bg-black border-r last:border-r-0 border-neutral-800 justify-between'

                        const price = monthly
                            ? item?.priceMonthly
                            : item?.priceYearly
                        return (
                            <div
                                key={'plan-' + index}
                                className={cn('p-8', cardStyle)}
                            >
                                <div>
                                    <h3 className="mb-1 text-2xl font-semibold">
                                        {item.type}
                                    </h3>
                                    <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                        {item.desc}
                                    </p>
                                    <div className="flex justify-start items-baseline my-4 text-zinc-800 dark:text-white">
                                        <span className="mr-2 text-2xl font-extrabold">
                                            {item.type === 'Enterprise'
                                                ? 'Custom'
                                                : price + ' EUR'}
                                        </span>
                                        {item.type !== 'Enterprise' &&
                                            (monthly ? (
                                                <span>/month</span>
                                            ) : (
                                                <span>/year</span>
                                            ))}
                                    </div>

                                    <ul
                                        role="list"
                                        className="mb-4 space-y-2 text-left !pl-1"
                                    >
                                        {item.features?.map((item, index) => (
                                            <li
                                                key={'planFeat-' + index}
                                                className="flex items-start space-x-3 text-zinc-900 dark:text-zinc-400 text-base"
                                            >
                                                <div className="min-w-5 min-h-5 ">
                                                    <Check className="w-5 h-5 stroke-accent-100" />
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Button
                                    href={
                                        monthly
                                            ? item.href?.monthly
                                            : item.href?.yearly
                                    }
                                    icon="arrow"
                                    className="w-full"
                                >
                                    {item.type !== 'Enterprise'
                                        ? 'Sign Up'
                                        : 'Talk to us'}
                                </Button>
                            </div>
                        )
                    }
                )}
            </div>
            <div className="w-full grid grid-cols-12 px-8 py-16 justify-center items-center border-b border-neutral-800">
                <div className="col-span-12 lg:col-span-3">
                    <h3 className="text-2xl font-bold">Open Source</h3>
                </div>
                <div className="col-span-12 lg:col-span-9 text-neutral-900 dark:text-neutral-400 text-base">
                    Our tools are available as open source. No subscription
                    required, it is free.
                    <br /> Paid Hubql subscriptions help us to fund development
                    and maintenance of the library under Apache 2.0 license.
                    <br />
                    If you use Hubql in your project commercially, please
                    consider a subscription or sponsor us on GitHub.
                </div>
            </div>
        </div>
    )
}

export default PricingTable

const pricing = [
    {
        type: 'Starter',
        desc: 'For smaller teams & startups using Hubql to build commercial products.',
        priceMonthly: 149,
        priceYearly: 1490,
        features: [
            'Email Support',
            'Prioritized GitHub Issues',
            'Keep the library running and maintained under an Apache 2.0 License',
        ],
        href: {
            monthly: 'https://billing.hubql.com/b/cN215M4et4kX3leeUZ',
            yearly: 'https://billing.hubql.com/b/9AQaGmbGV4kX6xqdQW',
        },
        featured: false,
    },
    {
        type: 'Pro',
        desc: 'For growing teams using Hubql that appreciate extra support crafting professional products.',
        priceMonthly: 475,
        priceYearly: 4750,
        features: [
            'Email Support',
            'Prioritized GitHub Issues & Roadmap Access',
            'Keep the library running and maintained under an Apache 2.0 License',
            'Individual Onboarding & Monthly check-in call with Hubql',
        ],
        href: {
            monthly: 'https://billing.hubql.com/b/00g5m2dP3eZBf3W148',
            yearly: 'https://billing.hubql.com/b/28o4hY5ix5p17Bu6or',
        },
        featured: true,
    },
    {
        type: 'Enterprise',
        desc: 'Large teams & enterprises who want direct support & consulting from the Hubql team.',
        features: [
            'Private Slack Channel Support',
            'Request Customization',
            'Dedicated Support Engineer',
            'Custom Billing Requirements',
        ],
        href: {
            monthly:
                'https://hubql.notion.site/13ecf350629f80329233ff53c9b436ea?pvs=105',
            yearly: 'https://hubql.notion.site/13ecf350629f80329233ff53c9b436ea?pvs=105',
        },
        featured: false,
    },
]
