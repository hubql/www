import { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  Dialog,
  DialogContent,
} from "./dialog"
import { X } from 'lucide-react'

export const ImageModal = ({ 
  isOpen, 
  onClose, 
  images,
  currentIndex
}: { 
  isOpen: boolean
  onClose: () => void
  images: Array<{ src: string; alt: string }>
  currentIndex: number
}) => {
  const [activeIndex, setActiveIndex] = useState(currentIndex)

  useEffect(() => {
    setActiveIndex(currentIndex)
  }, [currentIndex])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setActiveIndex(prev => prev > 0 ? prev - 1 : images.length - 1)
      } else if (e.key === 'ArrowRight') {
        setActiveIndex(prev => prev < images.length - 1 ? prev + 1 : 0)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, images.length])

  if (!images.length) return null

  const currentImage = images[activeIndex]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="!max-w-full !max-h-full w-full h-full p-0 border-0 bg-transparent shadow-none"
        showCloseButton={false}
      >
        <div className="flex h-full bg-black/80 backdrop-blur-sm">
          <div className="flex-1 flex items-center justify-center p-4">
            <div className="relative max-w-[70vw] max-h-[90vh]">
              <button
                onClick={onClose}
                className="absolute -top-2 -right-2 z-10 w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center hover:bg-neutral-800 transition-colors"
              >
                <X className="w-4 h-4 text-white" />
                <span className="sr-only">Close</span>
              </button>
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  width={1200}
                  height={800}
                  className="object-contain max-w-full max-h-full"
                  priority
                />
              </div>
            </div>
          </div>
          
          <div className="w-80 backdrop-blur-sm p-4 overflow-y-auto max-h-[100vh]">
            <div className="space-y-2">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`relative w-full aspect-[4/3] rounded-lg cursor-pointer transition-all duration-200 ${
                    index === activeIndex 
                      ? 'ring-1 ring-white/20 shadow-lg scale-105' 
                      : 'hover:scale-105 hover:shadow-md'
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 320px) 100vw, 320px"
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
