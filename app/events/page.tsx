"use client"

import { useState, useMemo } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FilterBar from "@/components/ui/filter-bar"
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react"

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

  const categories = Array.from(new Set(eventsData.map((e) => e.category)))
  const cultures = Array.from(new Set(eventsData.map((e) => e.culture)))

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

  const filterGroups = [
    {
      id: "category",
      label: "Category",
      options: categories.map((cat) => ({ label: cat, value: cat })),
      selected: selectedCategory,
      onChange: setSelectedCategory,
    },
    {
      id: "culture",
      label: "Culture",
      options: cultures.map((cult) => ({ label: cult, value: cult })),
      selected: selectedCulture,
      onChange: setSelectedCulture,
    },
  ]

  const featuredEvents = filteredEvents.filter((e) => e.featured)
  const regularEvents = filteredEvents.filter((e) => !e.featured)

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-foreground py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-background mb-4">Cultural Events</h1>
          <p className="text-lg text-background/80 max-w-2xl">
            Discover and attend festivals, workshops, and performances celebrating India's heritage
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <FilterBar
          searchPlaceholder="Search events..."
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          filterGroups={filterGroups}
          onClearAll={() => {
            setSearchQuery("")
            setSelectedCategory(null)
            setSelectedCulture(null)
          }}
          resultCount={filteredEvents.length}
          totalCount={eventsData.length}
        />

        {/* Featured Events */}
        {featuredEvents.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Featured Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredEvents.map((event) => (
                <div
                  key={event.id}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-64 h-48 md:h-auto overflow-hidden flex-shrink-0">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                        Featured
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-1">{event.description}</p>
                      <div className="space-y-2 text-sm mb-4">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar size={14} className="text-primary" />
                          <span>
                            {event.date} at {event.time}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin size={14} className="text-primary" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users size={14} className="text-primary" />
                          <span>{event.attendees} attending</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md font-medium">
                          {event.category}
                        </span>
                        <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-md font-medium">
                          {event.culture}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Events */}
        {regularEvents.length > 0 && (
          <div>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">All Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularEvents.map((event) => (
                <div
                  key={event.id}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2 text-center">
                      <div className="text-lg font-bold text-foreground">{event.date.split("-")[2]}</div>
                      <div className="text-xs text-muted-foreground uppercase">Nov</div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
                      {event.title}
                    </h3>
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin size={14} className="text-primary flex-shrink-0" />
                        <span className="line-clamp-1">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={14} className="text-primary flex-shrink-0" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{event.attendees} attending</span>
                      <ArrowRight
                        size={16}
                        className="text-muted-foreground group-hover:text-primary transition-colors"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground mb-4">No events found matching your filters.</p>
            <button
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory(null)
                setSelectedCulture(null)
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
