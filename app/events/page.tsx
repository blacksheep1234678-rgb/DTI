"use client"

import { useState, useMemo } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollAnimationWrapper from "@/components/scroll-animation-wrapper"
import EnhancedFilterPanel from "@/components/enhanced-filter-panel"
import { Calendar, MapPin } from "lucide-react"

const eventsData = [
  {
    id: 1,
    title: "Kathakali Performance Night",
    culture: "Kathakali Dance",
    category: "Performing Arts",
    date: "2024-11-15",
    time: "7:00 PM",
    location: "Kochi Cultural Center, Kerala",
    description:
      "Experience the mesmerizing Kathakali dance performance with elaborate costumes and traditional music.",
    image: "/kathakali-performance-stage.jpg",
    attendees: 342,
    featured: true,
  },
  {
    id: 2,
    title: "Rajasthani Folk Music Festival",
    culture: "Rajasthani Folk Music",
    category: "Music",
    date: "2024-11-20",
    time: "6:00 PM",
    location: "Jaipur Heritage Fort, Rajasthan",
    description: "A celebration of traditional Rajasthani folk music with performances by renowned musicians.",
    image: "/rajasthani-folk-festival.jpg",
    attendees: 1250,
    featured: true,
  },
  {
    id: 3,
    title: "Pattachitra Art Workshop",
    culture: "Bengal Pattachitra",
    category: "Visual Arts",
    date: "2024-11-10",
    time: "10:00 AM",
    location: "Kolkata Art Studio, West Bengal",
    description: "Learn the traditional techniques of Pattachitra painting from master artists.",
    image: "/bengal-pattachitra-exhibition.jpg",
    attendees: 85,
    featured: false,
  },
  {
    id: 4,
    title: "Kolam Design Competition",
    culture: "Tamil Kolam",
    category: "Visual Arts",
    date: "2024-11-08",
    time: "8:00 AM",
    location: "Chennai Cultural Complex, Tamil Nadu",
    description: "Showcase your kolam designs and compete with artists from across the region.",
    image: "/tamil-kolam-festival.jpg",
    attendees: 156,
    featured: false,
  },
  {
    id: 5,
    title: "Bhangra Dance Workshop",
    culture: "Punjabi Bhangra",
    category: "Performing Arts",
    date: "2024-11-25",
    time: "5:00 PM",
    location: "Punjab Cultural Institute, Punjab",
    description: "Learn the energetic steps and rhythms of traditional Bhangra dance.",
    image: "/punjabi-bhangra-festival.jpg",
    attendees: 203,
    featured: false,
  },
  {
    id: 6,
    title: "Odissi Dance Recital",
    culture: "Odissi Dance",
    category: "Performing Arts",
    date: "2024-11-18",
    time: "7:30 PM",
    location: "Bhubaneswar Temple Theater, Odisha",
    description: "A graceful presentation of classical Odissi dance with spiritual themes.",
    image: "/odissi-temple-performance.jpg",
    attendees: 267,
    featured: false,
  },
  {
    id: 7,
    title: "Lavani Performance & Discussion",
    culture: "Marathi Lavani",
    category: "Performing Arts",
    date: "2024-11-22",
    time: "6:00 PM",
    location: "Mumbai Cultural Hall, Maharashtra",
    description: "Experience Lavani performances followed by a discussion on its cultural significance.",
    image: "/marathi-lavani-festival.jpg",
    attendees: 198,
    featured: false,
  },
  {
    id: 8,
    title: "Yakshagana Night Festival",
    culture: "Yakshagana",
    category: "Performing Arts",
    date: "2024-11-28",
    time: "8:00 PM",
    location: "Bangalore Open Air Theater, Karnataka",
    description: "An all-night theatrical experience with Yakshagana performances and traditional cuisine.",
    image: "/yakshagana-stage-setup.jpg",
    attendees: 512,
    featured: false,
  },
]

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedCulture, setSelectedCulture] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"calendar" | "list">("list")

  const categories = Array.from(new Set(eventsData.map((e) => e.category)))
  const cultures = Array.from(new Set(eventsData.map((e) => e.culture)))
  const recommendedCategories = categories.slice(0, 3).map((cat) => ({ label: cat, value: cat }))

  const filteredEvents = useMemo(() => {
    return eventsData.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = !selectedCategory || event.category === selectedCategory
      const matchesCulture = !selectedCulture || event.culture === selectedCulture
      return matchesSearch && matchesCategory && matchesCulture
    })
  }, [searchQuery, selectedCategory, selectedCulture])

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/20 to-secondary/20 py-12 px-4">
        <ScrollAnimationWrapper animationType="fade-in-up">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Cultural Events & Festivals
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover and attend cultural events, festivals, and workshops celebrating India's diverse heritage.
            </p>
          </div>
        </ScrollAnimationWrapper>
      </section>

      {/* View Mode Toggle */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode("calendar")}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                viewMode === "calendar"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              <Calendar size={18} className="inline mr-2" />
              Calendar
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                viewMode === "list"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              <MapPin size={18} className="inline mr-2" />
              List
            </button>
          </div>
          <div className="text-sm text-muted-foreground">
            {filteredEvents.length} event{filteredEvents.length !== 1 ? "s" : ""}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1 space-y-6">
            <ScrollAnimationWrapper animationType="slide-in-left" delay={100}>
              <EnhancedFilterPanel
                title="Category"
                searchPlaceholder="Search events..."
                categories={categories.map((cat) => ({ label: cat, value: cat }))}
                recommendedTags={recommendedCategories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                onSearchChange={setSearchQuery}
                searchQuery={searchQuery}
                onClearFilters={() => {
                  setSelectedCategory(null)
                  setSelectedCulture(null)
                  setSearchQuery("")
                }}
              />
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animationType="slide-in-left" delay={200}>
              <EnhancedFilterPanel
                title="Culture"
                categories={cultures.map((cult) => ({ label: cult, value: cult }))}
                selectedCategory={selectedCulture}
                onCategoryChange={setSelectedCulture}
                onClearFilters={() => {
                  setSelectedCategory(null)
                  setSelectedCulture(null)
                  setSearchQuery("")
                }}
              />
            </ScrollAnimationWrapper>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <ScrollAnimationWrapper animationType="slide-in-right" delay={100}>
              <div className="space-y-6">
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((event, index) => (
                    <ScrollAnimationWrapper key={event.id} animationType="fade-in-up" delay={index * 50}>
                      <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition">
                        <div className="flex flex-col md:flex-row">
                          <img
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            className="w-full md:w-48 h-48 object-cover"
                          />
                          <div className="p-6 flex-1">
                            <h3 className="font-serif text-lg font-bold text-foreground mb-2">{event.title}</h3>
                            <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
                            <div className="flex flex-wrap gap-4 text-sm mb-4">
                              <div className="flex items-center gap-2">
                                <Calendar size={16} className="text-primary" />
                                <span>
                                  {event.date} at {event.time}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin size={16} className="text-primary" />
                                <span>{event.location}</span>
                              </div>
                            </div>
                            <div className="flex gap-2 flex-wrap">
                              <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                                {event.category}
                              </span>
                              <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">
                                {event.culture}
                              </span>
                              <span className="text-xs text-muted-foreground">{event.attendees} attending</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollAnimationWrapper>
                  ))
                ) : (
                  <ScrollAnimationWrapper animationType="fade-in-up">
                    <div className="text-center py-12">
                      <p className="text-lg text-muted-foreground mb-4">No events found matching your filters.</p>
                      <button
                        onClick={() => {
                          setSearchQuery("")
                          setSelectedCategory(null)
                          setSelectedCulture(null)
                        }}
                        className="text-primary hover:text-primary/80 transition"
                      >
                        Clear filters
                      </button>
                    </div>
                  </ScrollAnimationWrapper>
                )}
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
