import clsx from 'clsx'
import Image from 'next/image'
import * as React from 'react'
import type { Template } from 'tinacms'
import { tinaField } from 'tinacms/dist/react'
import {
    LandingsBlocksGallery,
    PagesBlocksGallery,
} from '../../../tina/__generated__/types'

export const ImageGallery = ({
    data,
}: {
    data: PagesBlocksGallery | LandingsBlocksGallery
}) => {
    const items =
        data.gallery &&
        data.gallery.map((photo, index) => {
            const colSpan = () => {
                switch (photo?.colSpan) {
                    case 1:
                        return 'lg:col-span-1'
                    case 2:
                        return 'lg:col-span-2'
                    case 3:
                        return 'lg:col-span-3'
                    case 4:
                        return 'lg:col-span-4'
                    case 5:
                        return 'lg:col-span-5'
                    case 6:
                        return 'lg:col-span-6'
                    case 7:
                        return 'lg:col-span-7'
                    case 8:
                        return 'lg:col-span-8'
                    case 9:
                        return 'lg:col-span-9'
                    case 10:
                        return 'lg:col-span-10'
                    case 11:
                        return 'lg:col-span-11'
                    case 12:
                        return 'lg:col-span-12'
                    default:
                        return null
                }
            }
            return (
                <div
                    key={'gallery' + index}
                    className={clsx('w-full', colSpan())}
                >
                    <div
                        className={clsx(
                            'flex flex-col w-full gap-3 border border-transparent rounded-lg p-4'
                        )}
                        data-tina-field={tinaField(data, 'gallery', index)}
                    >
                        {photo?.image?.src && (
                            <div className=" relative aspect-square rounded-lg bg-zinc-800 p-1">
                                <Image
                                    fill={true}
                                    src={photo?.image?.src ?? ''}
                                    alt={photo?.image?.alt ?? ''}
                                    style={{
                                        maxWidth: '100%',
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            )
        })

    const gridLayout =
        'w-full grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-8 items-center'

    return (
        <div className="w-full max-w-7xl px-8 mx-auto">
            <div className="flex h-full w-full items-center">
                <div className={clsx(gridLayout)}>{items}</div>
            </div>
        </div>
    )
}

export const imageGalleryBlockSchema: Template = {
    name: 'gallery',
    label: 'Image Gallery',
    ui: {
        previewSrc: '',
    },
    fields: [
        {
            label: 'Gallery',
            name: 'gallery',
            type: 'object',
            list: true,
            ui: {
                defaultItem: {
                    colSpan: 4,
                },
                itemProps: (item) => ({ label: item.label }),
            },
            fields: [
                {
                    type: 'object',
                    label: 'Image',
                    name: 'image',
                    fields: [
                        {
                            name: 'src',
                            label: 'Image Source',
                            type: 'image',
                        },
                        {
                            name: 'alt',
                            label: 'Alt Text',
                            type: 'string',
                        },
                    ],
                },
                {
                    label: 'colSpan',
                    name: 'colSpan',
                    type: 'number',
                },
            ],
        },
    ],
}
