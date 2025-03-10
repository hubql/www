import { Services } from '../components/homepage/Services'
import { Layout } from '../components/layout/Layout'

export default function ServicesPage(props: {
    query: any
    variables: any
    data: any
    header: any
    footer: any
    posts: any
}) {
    const data = {
        title: 'Services | Hubql Labs',
        seoTitle: 'Services | Hubql Labs',
        seoDescription:
            'Hubql Labs services range from custom software development to consulting and training.',
    }

    return (
        <Layout data={data}>
            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-4xl font-bold pt-8 font-orbitron p-4 mb-0">
                    Services - Hubql Labs
                </h1>
                <p className="text-neutral-400 p-4 pt-0">
                    Under the name of Hubql Labs we offer a range of services to
                    help you build your products ranging from consulting to
                    training and custom development.
                </p>
            </div>
            <Services />
        </Layout>
    )
}
