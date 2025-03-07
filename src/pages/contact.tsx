import { ContactForm } from '../components/homepage/ContactForm'

import { Layout } from '../components/layout/Layout'

export default function Contact() {

    return (
        <Layout data={[]}>
            <h1 className="text-4xl font-bold font-orbitron p-4 text-center my-2 font-orbitron">Contact</h1>

            <ContactForm />

        </Layout>
    )
}


