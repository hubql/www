import { Template } from "tinacms"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../kit/Accordion"
import { PagesBlocksSectionAccordion } from "@/tina/__generated__/types"
import Image from "next/image"
import { useState } from "react"
import { ImageModal } from "../kit/ImageModal"

export const SectionAccordion = ({ data }: { data: PagesBlocksSectionAccordion }) => {
    const [modalState, setModalState] = useState<{ 
        isOpen: boolean
        images: Array<{ src: string; alt: string }>
        currentIndex: number
    }>({
        isOpen: false,
        images: [],
        currentIndex: 0
    })

    const openModal = (images: Array<{ src: string; alt: string }>, currentIndex: number) => {
        setModalState({
            isOpen: true,
            images,
            currentIndex
        })
    }

    const closeModal = () => {
        setModalState({
            isOpen: false,
            images: [],
            currentIndex: 0
        })
    }

    return (
        <div className="w-full px-8 py-16">
            <h2>{data.sectionAccordiontitle}</h2>
            <p>{data.sectionAccordionDescription}</p>

            {data?.sectionAccordionItems?.length && data?.sectionAccordionItems?.length > 0 && (
                <div>
                    <Accordion type="single" collapsible>
                        {data?.sectionAccordionItems?.map((item: any, index: number) => {
                            return (
                                <AccordionItem key={item.index + item.value} value={item.value}>
                                    <AccordionTrigger className="group px-8">
                                        <h3 className="group-hover:text-neutral-50 text-neutral-500 transition-colors duration-200 text-2xl group-hover:scale-110 transition-all ease-in group-data-[state=open]:text-neutral-50 group-data-[state=open]:scale-110">{item.title || 'No title'}</h3>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                                            <p className="px-8 max-w-3xl text-neutral-400 text-lg">{item.description || 'No description'}</p>
                                            {item.imageList && item.imageList.length > 0 && (
                                                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 col-span-2 bg-neutral-400/10 rounded-xs p-4">
                                                    {item.imageList.map((image: any, index: number) => {
                                                        const allImages = item.imageList.map((img: any) => ({
                                                            src: img.image,
                                                            alt: img.title || 'Accordion image'
                                                        }))
                                                        
                                                        return (<div key={index}
                                                            className="relative w-full aspect-[4/3] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                                                            onClick={() => openModal(allImages, index)}>
                                                            <Image
                                                                src={image.image}
                                                                alt={image.title || 'Accordion image'}
                                                                fill
                                                                sizes="100vh"
                                                            />
                                                        </div>
                                                        )
                                                    })}
                                                </div>
                                            )}</div>
                                    </AccordionContent>
                                </AccordionItem>
                            )
                        })}
                    </Accordion>
                </div>
            )}
            
            {modalState.isOpen && (
                <ImageModal
                    isOpen={modalState.isOpen}
                    onClose={closeModal}
                    images={modalState.images}
                    currentIndex={modalState.currentIndex}
                />
            )}
        </div>
    )
}


export const sectionAccordionBlock: Template = {
    name: 'SectionAccordion',
    label: 'Section Accordion',
    fields: [
        {
            type: 'string',
            label: 'Title',
            name: 'sectionAccordiontitle',
            ui: {
                component: 'textarea',
            },
        },
        {
            type: 'string',
            label: 'Description',
            name: 'sectionAccordionDescription',
            ui: {
                component: 'textarea',
            },
        },
        {
            type: 'object',
            label: 'Accordion Items',
            name: 'sectionAccordionItems',
            list: true,
            fields: [
                {
                    type: "string",
                    label: "value",
                    name: "value",
                },
                {
                    type: 'string',
                    label: 'Title',
                    name: 'title',
                },
                {
                    type: 'string',
                    label: 'Description',
                    name: 'description',
                    ui: {
                        component: 'textarea',
                    },
                },
                {
                    type: 'object',
                    label: 'Image',
                    name: 'imageList',
                    list: true,
                    fields: [
                        {
                            type: 'image',
                            label: 'Image',
                            name: 'image',
                        }
                    ]
                }
            ],
        },

    ],
}