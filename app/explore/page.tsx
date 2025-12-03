"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FilterBar from "@/components/ui/filter-bar"
import { ArrowRight } from "lucide-react"

const culturesData = [
  {
    id: "kerala-kathakali",
    name: "Kathakali Dance",
    state: "Kerala",
    region: "South",
    category: "Performing Arts",
    description: "Ancient classical dance form with elaborate costumes and makeup",
    image: "/kathakali-dance-performance.jpg",
  },
  {
    id: "rajasthan-folk",
    name: "Rajasthani Folk Music",
    state: "Rajasthan",
    region: "North",
    category: "Music",
    description: "Traditional folk music with vibrant instruments and storytelling",
    image: "/rajasthani-folk-music.jpg",
  },
  {
    id: "bengal-art",
    name: "Bengal Pattachitra",
    state: "West Bengal",
    region: "East",
    category: "Visual Arts",
    description: "Intricate scroll paintings depicting mythological stories",
    image: "/bengal-pattachitra-art.jpg",
  },
  {
    id: "tamil-kolam",
    name: "Tamil Kolam",
    state: "Tamil Nadu",
    region: "South",
    category: "Visual Arts",
    description: "Colorful geometric patterns created with rice flour and colors",
    image: "/tamil-kolam-patterns.jpg",
  },
  {
    id: "punjab-bhangra",
    name: "Punjabi Bhangra",
    state: "Punjab",
    region: "North",
    category: "Performing Arts",
    description: "Energetic dance and music celebrating harvest and joy",
    image: "/punjabi-bhangra-dance.jpg",
  },
  {
    id: "odisha-odissi",
    name: "Odissi Dance",
    state: "Odisha",
    region: "East",
    category: "Performing Arts",
    description: "Graceful classical dance form with fluid movements",
    image: "/odissi-dance-performance.jpg",
  },
  {
    id: "maharashtra-lavani",
    name: "Marathi Lavani",
    state: "Maharashtra",
    region: "West",
    category: "Performing Arts",
    description: "Spirited folk dance with rhythmic movements and songs",
    image: "/marathi-lavani-dance.jpg",
  },
  {
    id: "karnataka-yakshagana",
    name: "Yakshagana",
    state: "Karnataka",
    region: "South",
    category: "Performing Arts",
    description: "Theatrical art form combining dance, music, and storytelling",
    image: "/yakshagana-performance.jpg",
  },
]

export default function ExplorePage() {
  const [selectedState, setSelectedState] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCultures = useMemo(() => {
    return culturesData.filter((culture) => {
      if (selectedState && culture.state !== selectedState) return false
      if (selectedCategory && culture.category !== selectedCategory) return false
      if (selectedRegion && culture.region !== selectedRegion) return false
      if (searchQuery && !culture.name.toLowerCase().includes(searchQuery.toLowerCase())) return false
      return true
    })
  }, [selectedState, selectedCategory, selectedRegion, searchQuery])

  const categories = Array.from(new Set(culturesData.map((c) => c.category)))
  const regions = Array.from(new Set(culturesData.map((c) => c.region)))
  const states = Array.from(new Set(culturesData.map((c) => c.state))).sort()

  const filterGroups = [
    {
      id: "category",
      label: "Category",
      options: categories.map((cat) => ({ label: cat, value: cat })),
      selected: selectedCategory,
      onChange: setSelectedCategory,
    },
    {
      id: "region",
      label: "Region",
      options: regions.map((reg) => ({ label: reg, value: reg })),
      selected: selectedRegion,
      onChange: setSelectedRegion,
    },
    {
      id: "state",
      label: "State",
      options: states.map((state) => ({ label: state, value: state })),
      selected: selectedState,
      onChange: setSelectedState,
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-foreground py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-background mb-4">Explore Cultures</h1>
          <p className="text-lg text-background/80 max-w-2xl">
            Discover the rich cultural heritage across India's regions and states
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <FilterBar
          searchPlaceholder="Search cultures..."
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          filterGroups={filterGroups}
          onClearAll={() => {
            setSelectedState(null)
            setSelectedCategory(null)
            setSelectedRegion(null)
            setSearchQuery("")
          }}
          resultCount={filteredCultures.length}
          totalCount={culturesData.length}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCultures.map((culture) => (
            <Link href={`/culture/${culture.id}`} key={culture.id}>
              <div className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={culture.image || "/placeholder.svg"}
                    alt={culture.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1 rounded-full">
                      {culture.region}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {culture.name}
                    </h3>
                    <ArrowRight
                      size={18}
                      className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{culture.description}</p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md font-medium">
                      {culture.state}
                    </span>
                    <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-md font-medium">
                      {culture.category}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredCultures.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground mb-4">No cultures found matching your filters.</p>
            <button
              onClick={() => {
                setSelectedState(null)
                setSelectedCategory(null)
                setSelectedRegion(null)
                setSearchQuery("")
              }}
              className="text-primary hover:text-primary/80 transition font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
      <Footer />
    </main>
  )
}
