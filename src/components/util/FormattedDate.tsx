export const FormattedDate = (data: any) => {
    try {
        const event = new Date(data.date)
        if (isNaN(event.getTime())) {
            return <time>Invalid Date</time>
        }
        return (
            <time suppressHydrationWarning dateTime={event.toISOString()}>
                {event.toLocaleDateString('en-us', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                })}
            </time>
        )
    } catch (error) {
        console.error('Date formatting error:', error)
        return <time>Invalid Date</time>
    }
}

export const DaysDate = ({ data }: { data: any }) => {
    try {
        if (!data) {
            return <time>No Date Available</time>
        }

        const event = new Date(data)
        if (isNaN(event.getTime())) {
            return <time>Invalid Date</time>
        }

        return (
            <time suppressHydrationWarning dateTime={event.toISOString()}>
                {event
                    .toLocaleDateString('en-us', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })
                    .replace(/(\d+)(?=(,\s\d{4}))/, '$1th')}
            </time>
        )
    } catch (error) {
        console.error('Date formatting error:', error)
        return <time>Invalid Date</time>
    }
}
