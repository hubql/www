import { DaysDate } from '../util/FormattedDate'

interface CalendarEvent {
    eventDate: string
    startTime: string
    endTime: string
    url: string
}

export const AddToCalendar = ({
    eventDate,
    startTime,
    endTime,
    url,
}: CalendarEvent) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-start hover:px-4 py-2 text-sm bg-transparent text-neutral-400 rounded-sm hover:bg-neutral-800 font-orbitron font-semibold transition-all duration-300 text-[14px] text-white text-left data-[state=open]:bg-neutral-800 data-[state=open]:px-4"
        >
            <span className="font-semibold mb-0 text-lg">
                {DaysDate({ data: eventDate })}
            </span>
            <span className="text-neutral-400 mb-0">
                {' '}
                {`${startTime} to ${endTime} GMT`}
            </span>
        </a>
    )
}
