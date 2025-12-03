"use client"

import { useState, useMemo } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollAnimationWrapper from "@/components/scroll-animation-wrapper"
import EnhancedFilterPanel from "@/components/enhanced-filter-panel"
import IndiaMap from "@/components/explore/india-map"

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
  const recommendedCategories = categories.slice(0, 3).map((cat) => ({ label: cat, value: cat }))

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <ScrollAnimationWrapper animationType="fade-in-up">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Explore Cultures</h1>
            <p className="text-lg text-muted-foreground">
              Discover the rich cultural heritage across India's regions and states
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar with Map and Filters */}
          <div className="lg:col-span-1 space-y-8">
            <ScrollAnimationWrapper animationType="slide-in-left" delay={100}>
              <IndiaMap selectedState={selectedState} onStateSelect={setSelectedState} states={states} />
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animationType="slide-in-left" delay={200}>
              <EnhancedFilterPanel
                title="Category"
                searchPlaceholder="Search cultures..."
                categories={categories.map((cat) => ({ label: cat, value: cat }))}
                recommendedTags={recommendedCategories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                onSearchChange={setSearchQuery}
                searchQuery={searchQuery}
                onClearFilters={() => {
                  setSelectedState(null)
                  setSelectedCategory(null)
                  setSelectedRegion(null)
                  setSearchQuery("")
                }}
              />
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animationType="slide-in-left" delay={300}>
              <EnhancedFilterPanel
                title="Region"
                categories={regions.map((reg) => ({ label: reg, value: reg }))}
                selectedCategory={selectedRegion}
                onCategoryChange={setSelectedRegion}
                onClearFilters={() => {
                  setSelectedState(null)
                  setSelectedCategory(null)
                  setSelectedRegion(null)
                  setSearchQuery("")
                }}
              />
            </ScrollAnimationWrapper>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <ScrollAnimationWrapper animationType="slide-in-right" delay={100}>
              <div className="mb-6">
                <p className="text-muted-foreground">
                  Showing {filteredCultures.length} of {culturesData.length} cultures
                </p>
              </div>
            </ScrollAnimationWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCultures.map((culture, index) => (
                <ScrollAnimationWrapper key={culture.id} animationType="scale-in" delay={index * 50} className="h-full">
                  <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition h-full">
                    <img
                      src={culture.image || "/placeholder.svg"}
                      alt={culture.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-serif text-lg font-bold text-foreground mb-2">{culture.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{culture.description}</p>
                      <div className="flex gap-2 flex-wrap">
                        <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">{culture.state}</span>
                        <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">
                          {culture.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </ScrollAnimationWrapper>
              ))}
            </div>

            {filteredCultures.length === 0 && (
              <ScrollAnimationWrapper animationType="fade-in-up">
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground mb-4">No cultures found matching your filters.</p>
                  <button
                    onClick={() => {
                      setSelectedState(null)
                      setSelectedCategory(null)
                      setSelectedRegion(null)
                      setSearchQuery("")
                    }}
                    className="text-primary hover:text-primary/80 transition"
                  >
                    Clear filters
                  </button>
                </div>
              </ScrollAnimationWrapper>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
