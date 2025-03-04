import { motion } from 'framer-motion'

export const OpenAPISpec = () => {
    return (
        <div className="w-full px-1">
            <div className="w-full border border-neutral-700 rounded-lg p-2 text-sm">
                <motion.div
                    className="max-w-10/12 overflow-x-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.2,
                        duration: 0.2,
                        ease: 'easeIn',
                    }}
                >
                    <pre>
                        <code>
                            {`openapi: "3.0.0"
info:
   version: 1.0.0
   title: My Petstore
serers:   
   - url: http://localhost:3000/v1
   - url: https://my.petstore.io/v1`}
                        </code>
                    </pre>
                </motion.div>
            </div>
        </div>
    )
}
