export const IFrame = ({ url, title }: { url: string; title: string }) => {
    if (!url || !title) return null
    return (
        <div className="relative w-full h-[800px] overflow-visible my-16">
            <iframe
                src={url}
                className="absolute top-0 left-[50%] w-full lg:w-[calc(100vw-400px)] h-[800px] translate-x-[-50%] border-0 rounded-lg"
                title={title}
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
        </div>
    )
}
