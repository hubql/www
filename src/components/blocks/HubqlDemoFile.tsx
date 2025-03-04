export const HubqlDemoFile = ({ fileId }: { fileId: string }) => {
    if (!fileId) return null
    return (
        <iframe
            src={'https://app.hubql.com/demo?file=' + fileId}
            className="m-auto w-[90%] h-[700px]"
        ></iframe>
    )
}
