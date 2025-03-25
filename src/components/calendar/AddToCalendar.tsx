import { format } from 'date-fns'
import { useEffect, useState } from 'react'

interface CalendarEvent {
    eventDate: string
    startTime: string
    endTime: string
    url: string
}

export const AddToCalendar = ({ event }: { event: CalendarEvent }) => {
    const [formattedDate, setFormattedDate] = useState(event.eventDate)

    useEffect(() => {
        try {
            const date = new Date(event.eventDate)
            if (!isNaN(date.getTime())) {
                setFormattedDate(format(date, 'EEEE, MMMM do yyyy'))
            }
        } catch (error) {
            console.error('Date formatting error:', error)
        }
    }, [event.eventDate])

    return (
        <a
            href={event.url}
            className="flex flex-col items-start hover:px-4 py-2 text-sm bg-transparent text-neutral-400 rounded-md hover:bg-neutral-800 font-orbitron font-semibold transition-all duration-300 text-[14px] text-white text-left data-[state=open]:bg-neutral-800 data-[state=open]:px-4"
        >
            <span className="font-semibold mb-0 text-lg">{formattedDate} </span>
            <span className="text-neutral-400 mb-0">
                {' '}
                {`${event.startTime} to ${event.endTime} GMT`}
            </span>
        </a>
    )
}
