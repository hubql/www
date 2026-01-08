export default function cloudflareImageLoader({
    src,
    width,
    quality,
}: {
    src: string
    width: number
    quality?: number
}) {
    // For absolute URLs (remote images), use Cloudflare Image Resizing
    if (src.startsWith('http://') || src.startsWith('https://')) {
        const params = [`width=${width}`]
        if (quality) {
            params.push(`quality=${quality}`)
        }
        // Use Cloudflare's image resizing service
        // Format: /cdn-cgi/image/width=X,quality=Y/https://example.com/image.jpg
        return `/cdn-cgi/image/${params.join(',')}/${src}`
    }

    // For local images, return as-is
    // Cloudflare will serve them from your static assets
    return src
}
