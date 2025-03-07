import { Layout } from '@/src/components/layout/Layout'
import { ProductPagesTemplate } from '../../components/templates/ProductPagesTemplate'

export default function ApiReference() {
    const data = {
        seoTitle: 'Hubql Ref - API Reference Hosting',
        seoDescription:
            'Host your API reference documentation with Hubql Ref and turn your OpenAPI specification into a beautiful API reference.',
    }

    const content = {
        title: 'Hubql Ref - Hosted API Reference Documentation',
        description:
            "Working with API reference docs has never been easier. Hubql API reference library turns your API specification into easily readable bits and let's your users test your API right in the browser.",
        meetingUrl: 'https://go.hubql.com/www-api-reference',
        // videoTitle: 'Video Title',
        // videoDescription:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        // videoUrl: 'https://www.youtube.com/watch?v=KAsjv4w66Yo',
        // tryNowUrl: 'https://cloud.hubql.com',
        ctaButtonText: 'Contact Us',
        ctaButtonUrl:
            '/contact',
        ctaTitle: 'Ready?',
        ctaDescription:
            'Use Hubql Ref to publish your API documentation today.',
        faqs: [
            {
                title: 'What is Hubql Ref?',
                description:
                    'Hubql Ref is a library that turns your API specification into easily readable bits and let’s your users test your API right in the browser.',
            },
            {
                title: 'How to learn more about Hubql Ref?',
                description: (
                    <p>
                        Reach out to us here:
                        <br />
                        <a href="/contact">
                            Join now
                        </a>
                    </p>
                ),
            },
        ],
        section: [
            {
                title: 'Your OpenAPI specification turns into a beautiful API reference',
                description:
                    'No manual work required we auto-convert your spec to a fully functional API reference.',
                imageUrl: '/product-page/openapi-specification.png',
            },
            {
                title: 'Elegant example payloads and responses',
                description:
                    'Generated useful payload and response examples sourced from API specification and help your API consumers find their way quicker.',
                imageUrl:
                    '/product-page/elegant-example-payloads-and-responses.png',
            },
            {
                title: 'Integrated API Testing Client',
                description:
                    'Let your users test and try your APIs right from your API reference.',
                imageUrl: '/product-page/integrated-api-testing-client.png',
            },
            {
                title: 'Publish your API reference to the world, public or private',
                description:
                    'Deploy your hosted API reference to your API users under your own domain or you can use hubqlref domain to share your API reference.',
                imageUrl: '/product-page/publish-your-api-reference.png',
            },
        ],
    }
    return (
        <Layout data={data}>
            <ProductPagesTemplate content={content} />
        </Layout>
    )
}
