"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface GalleryImage {
  src: string
  alt: string
  title?: string
}

interface GalleryProps {
  images: GalleryImage[]
}

export default function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg cursor-pointer group border border-primary/20"
            onClick={() => openModal(image)}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={600}
                height={400}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            {image.title && (
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <h3 className="text-white font-medium">{image.title}</h3>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={closeModal}>
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300 focus:outline-none"
              onClick={closeModal}
            >
              <X className="h-8 w-8" />
              <span className="sr-only">Close</span>
            </button>
            <div className="relative overflow-hidden rounded-lg bg-background/10 backdrop-blur-sm border border-primary/20">
              <div className="relative h-[70vh]">
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
              {selectedImage.title && (
                <div className="p-4 bg-background/20 backdrop-blur-sm">
                  <h3 className="text-lg font-medium text-white">{selectedImage.title}</h3>
                  <p className="text-white/70">{selectedImage.alt}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

