import clsx from 'clsx'
import * as React from 'react'
import { tinaField } from 'tinacms/dist/react'
import { Button } from '../kit/Button'

export const Actions = ({
    actions,
    className = '',
}: {
    actions: any
    className?: string
}) => {
    return (
        <div
            className={clsx(
                `flex flex-wrap items-center gap-y-4 gap-x-6`,
                className
            )}
        >
            {actions &&
                actions.map(function (
                    action: {
                        link: string | undefined
                        label:
                            | string
                            | number
                            | boolean
                            | React.ReactElement<
                                  any,
                                  string | React.JSXElementConstructor<any>
                              >
                            | Iterable<React.ReactNode>
                            | React.ReactPortal
                            | React.PromiseLikeOfReactNode
                            | null
                            | undefined
                    },
                    index: React.Key | null | undefined
                ) {
                    let element
                    element = (
                        <Button
                            key={'actions' + index}
                            href={action.link ? action.link : '/'}
                            data-tina-field={tinaField(action)}
                            icon="arrow"
                        >
                            {action.label}
                        </Button>
                    )
                    if (action.label === '##PRODUCTHUNT##') {
                        return (
                            <a
                                key="producthunt"
                                href="https://www.producthunt.com/posts/hubql?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-hubql"
                                target="_blank"
                            >
                                <img
                                    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=424313&theme=dark"
                                    alt="Hubql - Turn&#0032;data&#0032;models&#0032;and&#0032;APIs&#0032;into&#0032;diagrams&#0032;and&#0032;documentation | Product Hunt"
                                    style={{
                                        width: '232px',
                                        height: '50px',
                                    }}
                                    width="232"
                                    height="50"
                                />
                            </a>
                        )
                    }
                    return element
                })}
        </div>
    )
}
