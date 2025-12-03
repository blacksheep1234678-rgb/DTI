"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageIcon, Play, BookOpen } from "lucide-react"

interface Culture {
  gallery: string[]
  videos: { title: string; url: string }[]
  stories: { title: string; author: string; content: string }[]
}

interface CultureDetailTabsProps {
  culture: Culture
}

export default function CultureDetailTabs({ culture }: CultureDetailTabsProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <Tabs defaultValue="gallery" className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-8">
        <TabsTrigger value="gallery" className="flex items-center gap-2">
          <ImageIcon size={18} />
          <span className="hidden sm:inline">Gallery</span>
        </TabsTrigger>
        <TabsTrigger value="videos" className="flex items-center gap-2">
          <Play size={18} />
          <span className="hidden sm:inline">Videos</span>
        </TabsTrigger>
        <TabsTrigger value="stories" className="flex items-center gap-2">
          <BookOpen size={18} />
          <span className="hidden sm:inline">Stories</span>
        </TabsTrigger>
      </TabsList>

      {/* Gallery Tab */}
      <TabsContent value="gallery" className="space-y-6">
        <div className="bg-card rounded-lg overflow-hidden border border-border">
          <img
            src={culture.gallery[selectedImage] || "/placeholder.svg"}
            alt={`Gallery ${selectedImage + 1}`}
            className="w-full h-96 object-cover"
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {culture.gallery.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative overflow-hidden rounded-lg border-2 transition ${
                selectedImage === index ? "border-primary" : "border-border hover:border-primary/50"
              }`}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-24 object-cover"
              />
            </button>
          ))}
        </div>
      </TabsContent>

      {/* Videos Tab */}
      <TabsContent value="videos" className="space-y-6">
        {culture.videos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {culture.videos.map((video, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden border border-border">
                <div className="relative w-full pt-[56.25%] bg-muted">
                  <iframe
                    src={video.url}
                    title={video.title}
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-foreground">{video.title}</h4>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-center py-8">No videos available yet.</p>
        )}
      </TabsContent>

      {/* Stories Tab */}
      <TabsContent value="stories" className="space-y-6">
        {culture.stories.length > 0 ? (
          <div className="space-y-6">
            {culture.stories.map((story, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border">
                <h4 className="font-serif text-xl font-bold text-foreground mb-2">{story.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">By {story.author}</p>
                <p className="text-muted-foreground leading-relaxed">{story.content}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-center py-8">No stories available yet.</p>
        )}
      </TabsContent>
    </Tabs>
  )
}
