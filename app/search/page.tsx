"use client"

import { useState, useMemo } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Search, Filter, X } from "lucide-react"

const allContent = [
  {
    id: 1,
    title: "Kathakali Dance Performance",
    type: "video",
    category: "Dance",
    region: "Kerala",
    description: "An ancient classical dance-drama form with elaborate costumes",
    image: "/kathakali-dance-performance.jpg",
    tags: ["dance", "kerala", "classical"],
  },
  {
    id: 2,
    title: "Rajasthani Folk Music",
    type: "audio",
    category: "Music",
    region: "Rajasthan",
    description: "Traditional folk melodies from the desert state",
    image: "/rajasthani-folk-music.jpg",
    tags: ["music", "rajasthan", "folk"],
  },
  {
    id: 3,
    title: "Bengal Pattachitra Art",
    type: "image",
    category: "Art",
    region: "West Bengal",
    description: "Traditional scroll painting with mythological themes",
    image: "/bengal-pattachitra-art.jpg",
    tags: ["art", "bengal", "painting"],
  },
  {
    id: 4,
    title: "Tamil Kolam Patterns",
    type: "image",
    category: "Art",
    region: "Tamil Nadu",
    description: "Intricate geometric patterns drawn with rice flour",
    image: "/tamil-kolam-patterns.jpg",
    tags: ["art", "tamil", "kolam"],
  },
  {
    id: 5,
    title: "Punjabi Bhangra Dance",
    type: "video",
    category: "Dance",
    region: "Punjab",
    description: "Energetic folk dance celebrating harvest season",
    image: "/punjabi-bhangra-dance.jpg",
    tags: ["dance", "punjab", "bhangra"],
  },
  {
    id: 6,
    title: "Odissi Dance Performance",
    type: "video",
    category: "Dance",
    region: "Odisha",
    description: "Classical dance form with graceful movements",
    image: "/odissi-dance-performance.jpg",
    tags: ["dance", "odisha", "classical"],
  },
]

const categories = ["All", "Dance", "Music", "Art", "Craft", "Cuisine"]
const regions = ["All", "Kerala", "Rajasthan", "West Bengal", "Tamil Nadu", "Punjab", "Odisha"]
const types = ["All", "image", "video", "audio"]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedRegion, setSelectedRegion] = useState("All")
  const [selectedType, setSelectedType] = useState("All")
  const [showFilters, setShowFilters] = useState(false)

  const filteredResults = useMemo(() => {
    return allContent.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
      const matchesRegion = selectedRegion === "All" || item.region === selectedRegion
      const matchesType = selectedType === "All" || item.type === selectedType

      return matchesSearch && matchesCategory && matchesRegion && matchesType
    })
  }, [searchQuery, selectedCategory, selectedRegion, selectedType])

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("All")
    setSelectedRegion("All")
    setSelectedType("All")
  }

  const hasActiveFilters =
    searchQuery || selectedCategory !== "All" || selectedRegion !== "All" || selectedType !== "All"

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 py-12 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Search Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Search & Discover</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Explore thousands of cultural artifacts, performances, and traditions from across India
            </p>

            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search by title, description, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Filter Toggle & Results Count */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition"
              >
                <Filter size={18} />
                <span>Filters</span>
              </button>
              <p className="text-sm text-muted-foreground">
                {filteredResults.length} result{filteredResults.length !== 1 ? "s" : ""} found
              </p>
            </div>
          </div>

          {/* Filters Section */}
          {showFilters && (
            <div className="mb-8 p-6 rounded-lg border border-border bg-card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-lg font-bold text-foreground">Filters</h3>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition"
                  >
                    <X size={16} />
                    Clear all
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Category</label>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <label key={cat} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          value={cat}
                          checked={selectedCategory === cat}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="w-4 h-4 rounded border-border"
                        />
                        <span className="text-sm text-foreground">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Region Filter */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Region</label>
                  <div className="space-y-2">
                    {regions.map((region) => (
                      <label key={region} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="region"
                          value={region}
                          checked={selectedRegion === region}
                          onChange={(e) => setSelectedRegion(e.target.value)}
                          className="w-4 h-4 rounded border-border"
                        />
                        <span className="text-sm text-foreground">{region}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Type Filter */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Media Type</label>
                  <div className="space-y-2">
                    {types.map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="type"
                          value={type}
                          checked={selectedType === type}
                          onChange={(e) => setSelectedType(e.target.value)}
                          className="w-4 h-4 rounded border-border"
                        />
                        <span className="text-sm text-foreground capitalize">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Results Grid */}
          {filteredResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResults.map((item) => (
                <div
                  key={item.id}
                  className="group rounded-lg overflow-hidden border border-border hover:shadow-lg transition bg-card"
                >
                  <div className="relative overflow-hidden h-48">
                    <div
                      className="absolute inset-0 group-hover:scale-110 transition-transform duration-300"
                      style={{
                        backgroundImage: `url('${item.image}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
                    <div className="absolute top-3 right-3">
                      <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold capitalize">
                        {item.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2 group-hover:text-primary transition">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                    <div className="flex items-center justify-between">
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
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-4">No results found</p>
              <button onClick={clearFilters} className="text-primary hover:text-primary/80 font-semibold transition">
                Clear filters and try again
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
