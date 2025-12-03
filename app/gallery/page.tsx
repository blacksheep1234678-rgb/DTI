"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    title: "Kathakali Makeup",
    image: "/kathakali-makeup-closeup.jpg",
    category: "Dance",
    region: "Kerala",
  },
  {
    id: 2,
    title: "Kathakali Costume",
    image: "/kathakali-costume-detail.jpg",
    category: "Dance",
    region: "Kerala",
  },
  {
    id: 3,
    title: "Kathakali Performance",
    image: "/kathakali-performance-stage.jpg",
    category: "Dance",
    region: "Kerala",
  },
  {
    id: 4,
    title: "Rajasthani Musicians",
    image: "/rajasthani-musicians-performance.jpg",
    category: "Music",
    region: "Rajasthan",
  },
  {
    id: 5,
    title: "Rajasthani Instruments",
    image: "/rajasthani-instruments-display.jpg",
    category: "Music",
    region: "Rajasthan",
  },
  {
    id: 6,
    title: "Rajasthani Folk Festival",
    image: "/rajasthani-folk-festival.jpg",
    category: "Music",
    region: "Rajasthan",
  },
  {
    id: 7,
    title: "Bengal Pattachitra Detail",
    image: "/bengal-pattachitra-detail.jpg",
    category: "Art",
    region: "West Bengal",
  },
  {
    id: 8,
    title: "Bengal Pattachitra Colors",
    image: "/bengal-pattachitra-colors.jpg",
    category: "Art",
    region: "West Bengal",
  },
  {
    id: 9,
    title: "Tamil Kolam Pattern",
    image: "/tamil-kolam-patterns.jpg",
    category: "Art",
    region: "Tamil Nadu",
  },
  {
    id: 10,
    title: "Punjabi Bhangra Dancers",
    image: "/punjabi-bhangra-dance.jpg",
    category: "Dance",
    region: "Punjab",
  },
  {
    id: 11,
    title: "Odissi Dance Pose",
    image: "/odissi-dance-performance.jpg",
    category: "Dance",
    region: "Odisha",
  },
  {
    id: 12,
    title: "Indian Festival Colors",
    image: "/indian-festival-celebration.jpg",
    category: "Festival",
    region: "Pan-India",
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[0] | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const openLightbox = (item: (typeof galleryItems)[0], index: number) => {
    setSelectedImage(item)
    setSelectedIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    const newIndex = (selectedIndex - 1 + galleryItems.length) % galleryItems.length
    setSelectedImage(galleryItems[newIndex])
    setSelectedIndex(newIndex)
  }

  const goToNext = () => {
    const newIndex = (selectedIndex + 1) % galleryItems.length
    setSelectedImage(galleryItems[newIndex])
    setSelectedIndex(newIndex)
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 py-12 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Gallery Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Multimedia Gallery</h1>
            <p className="text-lg text-muted-foreground">
              Explore our collection of stunning cultural artifacts, performances, and traditions
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(item, index)}
                className="group cursor-pointer rounded-lg overflow-hidden border border-border hover:shadow-xl transition"
              >
                <div className="relative overflow-hidden h-64">
                  <div
                    className="absolute inset-0 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      backgroundImage: `url('${item.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <div className="bg-white/20 backdrop-blur p-4 rounded-full">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm3.6 10L9 6.4v7.2L13.6 10z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <div className="flex gap-2">
                    <span className="inline-block bg-muted text-muted-foreground px-2 py-1 rounded text-xs">
                      {item.category}
                    </span>
                    <span className="inline-block bg-muted text-muted-foreground px-2 py-1 rounded text-xs">
                      {item.region}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-white/70 transition"
            >
              <X size={32} />
            </button>

            {/* Image */}
            <div className="relative rounded-lg overflow-hidden">
              <div
                className="w-full h-96 md:h-[600px]"
                style={{
                  backgroundImage: `url('${selectedImage.image}')`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>

            {/* Image Info */}
            <div className="mt-6 text-white">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2">{selectedImage.title}</h2>
              <div className="flex gap-3">
                <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                  {selectedImage.category}
                </span>
                <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                  {selectedImage.region}
                </span>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex items-center justify-between px-4 pointer-events-none">
              <button
                onClick={goToPrevious}
                className="bg-white/20 hover:bg-white/30 backdrop-blur text-white p-3 rounded-full transition pointer-events-auto"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={goToNext}
                className="bg-white/20 hover:bg-white/30 backdrop-blur text-white p-3 rounded-full transition pointer-events-auto"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur text-white px-4 py-2 rounded-full text-sm">
              {selectedIndex + 1} / {galleryItems.length}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
