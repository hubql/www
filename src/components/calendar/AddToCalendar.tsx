import { Calendar } from 'lucide-react'
import React, { useState } from 'react'

interface CalendarEvent {
    title: string
    eventDate: string
    startTime: string
    endTime: string
    location: string
    description: string
}

export const AddToCalendar = ({ event }: { event: CalendarEvent }) => {
    const [isOpen, setIsOpen] = useState(false)

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
    const isoString = event.eventDate?.substring(0, 10)

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 hover:px-4 py-2 text-sm bg-transparent text-neutral-400 rounded-md hover:bg-neutral-800 font-orbitron font-semibold transition-all duration-300"
            >
                <Calendar className="w-4 h-4" />
                <p className="text-[14px] text-white mb-0">
                    {`${isoString} ${event.startTime} to ${event.endTime} GMT`}
                </p>
            </button>

            {isOpen && (
                <div className="absolute top-full mt-2 w-48 bg-white dark:bg-zinc-800 rounded-md shadow-lg border border-zinc-200 dark:border-zinc-700">
                    <a
                        href={generateGoogleCalendarUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700"
                    >
                        Google Calendar
                    </a>
                    <button
                        onClick={generateIcsFile}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700"
                    >
                        Other Calendars
                    </button>
                </div>
            )}
        </div>
    )
}
