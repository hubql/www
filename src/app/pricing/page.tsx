import { Layout } from '../../components/layout/Layout'
import { BecomeBacker } from '../../components/pricing/BecomeBacker'
import { PricingAboveFold } from '../../components/pricing/PricingAboveFold'
import { Faq } from '../../components/templates/Faq'
import PricingTable from '../../components/util/PricingTable'

export default function Pricing() {
    const data = {
        title: 'Pricing | Hubql',
        seoTitle: 'Pricing | Hubql',
        seoDescription:
            'Support the development of Hubql and work with us to empower developers.',
    }

    const faqs = [
        {
            title: 'What is the difference between Open Source and a subscription plan?',
            description:
                'The library and tools are the same in all cases. The only difference is the subscription plan offers additional support and help us maintain the libraries.',
        },
        {
            title: 'We cannot afford the subscription plan. What can we do?',
            description:
                'Talk to us, especially if your are an early stage startup, open-source project or educational institution. You can reach us at info@hubql.com',
        },
        {
            title: 'I have a billing question. How can I get in touch with you?',
            description:
                'Reach out to us at info@hubql.com and we will get back to you as soon as possible.',
        },
        {
            title: 'What means Prioritized GitHub Issues?',
            description:
                'Prioritized GitHub Issues is a feature that helps you to mark and prioritize your GitHub issues and get them resolved quicker including private feedback and comments in our roadmap.',
        },
        {
            title: 'Can I use Hubql for commercial products without a subscription?',
            description:
                'Yes, Hubql is available under Apache 2.0 license. We only ask for a subscription for you to fund and  support the development of the library as a team benefiting from Hubql.',
        },
    ]

    return (
        <Layout data={data}>
            <PricingAboveFold />
            <BecomeBacker colorAccent={false} align="center" />
            <PricingTable />
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 gap-16">
                <Faq faqs={faqs} />
            </div>
        </Layout>
    )
}
