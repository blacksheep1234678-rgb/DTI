"use client"

import Link from "next/link"
import { MapPin, Music, Utensils, Palette, ArrowRight } from "lucide-react"

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
    color: "bg-accent",
  },
]

export default function QuickExplore() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Quick Explore</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start your journey through India's cultural diversity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {exploreTiles.map((tile) => {
            const Icon = tile.icon
            return (
              <Link key={tile.id} href="/explore">
                <div className="group cursor-pointer h-full">
                  <div className="relative overflow-hidden rounded-2xl mb-4 h-52 shadow-md">
                    <div
                      className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundImage: `url('${tile.image}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div
                        className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${tile.color} mb-3`}
                      >
                        <Icon size={20} className="text-white" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-white mb-1">{tile.title}</h3>
                      <p className="text-sm text-white/80">{tile.description}</p>
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight size={16} className="text-white" />
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
