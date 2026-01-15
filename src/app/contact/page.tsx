import { AboveFold2 } from '../../components/blocks/AboveFold2'
import { SectionCta } from '../../components/blocks/SectionCta'
import { ContactForm } from '../../components/homepage/ContactForm'
import { Layout } from '../../components/layout/Layout'

const dataAboveFold2 = {
    tag: 'Contact Us',
    title: 'Think software.Think Hubql.',
    paragraph:
        "We're here to help. Whether you have questions about your web project, our development and automation services, availability, pricing, or potential partnerships, our team is ready to talk.",
}

const dataCta = {
    title: 'What kind of web solution are you looking to build?',
    paragraph:
        "Explore our portfolio to see how we design and build web platforms, Supabase-powered systems, and automated workflows. If our work resonates with you, reach out below and we'll get back to you shortly.",
    buttonOne: {
        label: 'Our Work',
        link: '/portfolio',
    },
}

export default function Contact() {
    return (
        <Layout data={[]}>
            <AboveFold2 data={dataAboveFold2} />
            <ContactForm />
            <SectionCta data={dataCta} />
        </Layout>
    )
}
