import { format } from 'date-fns'
import { Popover, PopoverContent, PopoverTrigger } from '../kit/popover'

interface CalendarEvent {
    title: string
    eventDate: string
    startTime: string
    endTime: string
    location: string
    description: string
}

export const AddToCalendar = ({ event }: { event: CalendarEvent }) => {
    const generateGoogleCalendarUrl = () => {
        const params = new URLSearchParams({
            action: 'TEMPLATE',
            text: event.title,
            dates: `${event.startTime.replace(
                /[-:]/g,
                ''
            )}/${event.endTime.replace(/[-:]/g, '')}`,
            location: event.location,
            details: event.description,
        })
        return `https://calendar.google.com/calendar/render?${params.toString()}`
    }

    const generateIcsFile = () => {
        const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${event.startTime.replace(/[-:]/g, '')}
DTEND:${event.endTime.replace(/[-:]/g, '')}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`

        const blob = new Blob([icsContent], {
            type: 'text/calendar;charset=utf-8',
        })
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', `${event.title}.ics`)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)
    }

    const formatEventDate = (dateString: string) => {
        const date = new Date(dateString)
        return format(date, 'EEEE, MMMM do yyyy')
    }

    return (
        <Popover>
            <PopoverTrigger className="flex flex-col items-start hover:px-4 py-2 text-sm bg-transparent text-neutral-400 rounded-md hover:bg-neutral-800 font-orbitron font-semibold transition-all duration-300 text-[14px] text-white text-left data-[state=open]:bg-neutral-800 data-[state=open]:px-4">
                <p className="font-semibold mb-0 text-lg">
                    {formatEventDate(event.eventDate)}{' '}
                </p>
                <p className="text-neutral-400 mb-0">
                    {' '}
                    {`${event.startTime} to ${event.endTime} GMT`}
                </p>
            </PopoverTrigger>
            <PopoverContent>
                <a
                    href={generateGoogleCalendarUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm hover:bg-neutral-800"
                >
                    Google Calendar
                </a>
                <button
                    onClick={generateIcsFile}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-neutral-800"
                >
                    Other Calendars
                </button>
            </PopoverContent>
        </Popover>
    )
}
