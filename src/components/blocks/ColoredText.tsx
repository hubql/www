import { cn } from '../util/cn'

export const ColoredText = ({
    text,
    className,
}: {
    text: string
    className: string
}) => {
    return <span className={cn(className)}>{text}</span>
}
