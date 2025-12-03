"use client"

import Link from "next/link"
import { MapPin, Music, Utensils, Palette } from "lucide-react"
import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const exploreTiles = [
  {
    id: "states",
    title: "State Traditions",
    description: "Explore the unique cultures of India's 28 states",
    icon: MapPin,
    image: "/indian-state-cultural-symbols.jpg",
    color: "bg-primary",
  },
  {
    id: "tribes",
    title: "Tribal Heritage",
    description: "Discover the ancient wisdom of tribal communities",
    icon: Palette,
    image: "/indian-tribal-art-patterns.jpg",
    color: "bg-accent",
  },
  {
    id: "festivals",
    title: "Festivals & Rituals",
    description: "Celebrate the vibrant festivals across India",
    icon: Music,
    image: "/indian-festival-celebration-colors.jpg",
    color: "bg-secondary",
  },
  {
    id: "cuisine",
    title: "Culinary Arts",
    description: "Taste the diverse flavors of Indian cuisine",
    icon: Utensils,
    image: "/indian-traditional-cuisine-dishes.jpg",
    color: "bg-red-700",
  },
]

export default function QuickExplore() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 px-4 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 scroll-animate-fade-in-up ${isVisible ? "visible" : ""}`}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Quick Explore</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start your journey through India's cultural diversity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {exploreTiles.map((tile, index) => {
            const Icon = tile.icon
            return (
              <Link key={tile.id} href="/explore">
                <div
                  className={`group cursor-pointer h-full transition-all duration-300 hover:scale-105 scroll-animate-scale-in ${isVisible ? "visible" : ""}`}
                  style={{ animationDelay: `${isVisible ? index * 0.1 : 0}s` }}
                  onMouseEnter={() => setHoveredId(tile.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="relative overflow-hidden rounded-lg mb-4 h-48 shadow-lg">
                    <div
                      className="absolute inset-0 transition-transform duration-500 group-hover:scale-125"
                      style={{
                        backgroundImage: `url('${tile.image}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent group-hover:from-black/70 transition-all duration-300" />
                    <div
                      className={`absolute inset-0 ${tile.color} opacity-0 group-hover:opacity-30 transition-all duration-300`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-white font-semibold text-sm drop-shadow-lg animate-bounce-in">
                        Click to explore
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div
                      className={`${tile.color} p-3 rounded-lg flex-shrink-0 transition-all duration-300 group-hover:scale-125 group-hover:shadow-sm`}
                    >
                      <Icon size={24} className="text-white transition-transform duration-300 group-hover:rotate-12" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {tile.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 group-hover:text-foreground/70 transition-colors duration-300">
                        {tile.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
