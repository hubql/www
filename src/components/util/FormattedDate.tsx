export const FormattedDate = (data: any) => {
    const event = new Date(data.date)
    return (
        <time suppressHydrationWarning dateTime={event.toISOString()}>
            {event.toLocaleDateString('en-us', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            })}
        </time>
    )
}
