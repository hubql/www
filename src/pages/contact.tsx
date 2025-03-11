import { ContactForm } from '../components/homepage/ContactForm'

import { Layout } from '../components/layout/Layout'

export default function Contact() {
    return (
        <Layout data={[]}>
            <div>
                <h1 className="text-4xl font-bold tracking-widest pt-4 text-center mt-2 font-orbitron">
                    Contact
                </h1>
                <p className="text-center text-[16px] pb-8 border-neutral-800 text-neutral-400">
                    Reach out to us below and we will get back to you as soon as
                    possible.
                </p>
            </div>
            <ContactForm />
        </Layout>
    )
}
