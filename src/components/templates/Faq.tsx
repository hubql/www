import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../kit/Accordion'

export const Faq = ({
    faqs = [],
}: {
    faqs: {
        title: string
        description: string | JSX.Element
    }[]
}) => {
    return (
        <div className="w-full">
            <div className="border-b border-neutral-800 py-4">
                <h2 className="text-2xl px-4">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((item: any, index: number) => (
                    <AccordionItem
                        key={'faq-item-' + index}
                        value={'faq-item-' + index}
                        className="px-4 last:border-b-0"
                    >
                        <AccordionTrigger className="py-4 flex items-end">
                            <h3 className="text-left text-base font-normal mb-0 break-words">
                                {item.title}
                            </h3>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-col gap-2 line-clamp-4 text-neutral-400 pb-4 w-full break-words max-w-lg text-base">
                                <p>{item.description}</p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}
