import { Button } from '../components/kit/Button'
import { Layout } from '../components/layout/Layout'

export default function Contact() {

    return (
        <Layout data={[]}>
            <h1>Contact</h1>
            <form>
                <div className="grid grid-cols-2 gap-4">
                    <input name="name" />
                    <input name="email" />
                </div>
                <input name="message" />
                <Button >Send</Button>
            </form>
        </Layout>
    )
}


