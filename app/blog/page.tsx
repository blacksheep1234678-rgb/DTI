"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FilterBar from "@/components/ui/filter-bar"
import { Clock, User, Eye, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Lost Art of Kathakali Makeup",
    excerpt: "Exploring the intricate techniques and symbolism behind traditional Kathakali makeup...",
    author: "Ravi Kumar",
    category: "Performing Arts",
    culture: "Kathakali Dance",
    date: "2024-10-15",
    readTime: 8,
    image: "/kathakali-makeup-closeup.jpg",
    featured: true,
    views: 3421,
  },
  {
    id: 2,
    title: "My Grandmother's Kolam Patterns",
    excerpt: "A personal journey documenting family kolam traditions passed through generations...",
    author: "Lakshmi Iyer",
    category: "Visual Arts",
    culture: "Tamil Kolam",
    date: "2024-10-12",
    readTime: 6,
    image: "/tamil-kolam-patterns.jpg",
    featured: true,
    views: 2856,
  },
  {
    id: 3,
    title: "Rajasthani Folk Music: A Living Tradition",
    excerpt: "How traditional folk music continues to thrive and evolve in modern Rajasthan...",
    author: "Mohan Singh",
    category: "Music",
    culture: "Rajasthani Folk Music",
    date: "2024-10-10",
    readTime: 7,
    image: "/rajasthani-folk-music.jpg",
    featured: false,
    views: 2134,
  },
  {
    id: 4,
    title: "Pattachitra: Stories on Canvas",
    excerpt: "Understanding the symbolism and storytelling techniques in Bengal Pattachitra paintings...",
    author: "Anita Dey",
    category: "Visual Arts",
    culture: "Bengal Pattachitra",
    date: "2024-10-08",
    readTime: 9,
    image: "/bengal-pattachitra-art.jpg",
    featured: false,
    views: 1987,
  },
  {
    id: 5,
    title: "Bhangra in My Heart",
    excerpt: "Growing up with Bhangra: A personal story of cultural pride and celebration...",
    author: "Simran Kaur",
    category: "Performing Arts",
    culture: "Punjabi Bhangra",
    date: "2024-10-05",
    readTime: 5,
    image: "/punjabi-bhangra-dance.jpg",
    featured: false,
    views: 1654,
  },
  {
    id: 6,
    title: "Dancing in the Temple",
    excerpt: "The spiritual connection between Odissi dance and temple worship...",
    author: "Deepa Mishra",
    category: "Performing Arts",
    culture: "Odissi Dance",
    date: "2024-10-02",
    readTime: 7,
    image: "/odissi-dance-performance.jpg",
    featured: false,
    views: 1432,
  },
  {
    id: 7,
    title: "The Spirit of Lavani",
    excerpt: "How Lavani empowers women and preserves Maharashtrian cultural identity...",
    author: "Meera Joshi",
    category: "Performing Arts",
    culture: "Marathi Lavani",
    date: "2024-09-28",
    readTime: 6,
    image: "/marathi-lavani-dance.jpg",
    featured: false,
    views: 1289,
  },
  {
    id: 8,
    title: "A Night of Yakshagana",
    excerpt: "The magic of Yakshagana: A complete theatrical experience...",
    author: "Rajesh Rao",
    category: "Performing Arts",
    culture: "Yakshagana",
    date: "2024-09-25",
    readTime: 8,
    image: "/yakshagana-performance.jpg",
    featured: false,
    views: 1156,
  },
]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedCulture, setSelectedCulture] = useState<string | null>(null)

  const categories = Array.from(new Set(blogPosts.map((post) => post.category)))
  const cultures = Array.from(new Set(blogPosts.map((post) => post.culture)))

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = !selectedCategory || post.category === selectedCategory
      const matchesCulture = !selectedCulture || post.culture === selectedCulture
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

  const featuredPosts = filteredPosts.filter((p) => p.featured)
  const regularPosts = filteredPosts.filter((p) => !p.featured)

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero - Different style from Explore page */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4">Stories & Insights</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Personal narratives, historical insights, and cultural perspectives from our community
          </p>
        </div>
      </section>

      {/* Featured Story - Large hero card */}
      {featuredPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 -mt-8 relative z-20 mb-12">
          <Link href={`/blog/${featuredPosts[0].id}`}>
            <div className="group relative rounded-3xl overflow-hidden shadow-xl">
              <div className="aspect-[21/9] md:aspect-[3/1]">
                <img
                  src={featuredPosts[0].image || "/placeholder.svg"}
                  alt={featuredPosts[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    Featured Story
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                    {featuredPosts[0].category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {featuredPosts[0].title}
                </h2>
                <p className="text-white/80 text-sm md:text-base mb-4 max-w-2xl">{featuredPosts[0].excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-white/70">
                  <span className="flex items-center gap-1">
                    <User size={14} /> {featuredPosts[0].author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {featuredPosts[0].readTime} min read
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye size={14} /> {featuredPosts[0].views.toLocaleString()} views
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <FilterBar
          searchPlaceholder="Search stories..."
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          filterGroups={filterGroups}
          onClearAll={() => {
            setSearchQuery("")
            setSelectedCategory(null)
            setSelectedCulture(null)
          }}
          resultCount={filteredPosts.length}
          totalCount={blogPosts.length}
        />

        {/* Stories Grid - Magazine style layout */}
        {regularPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Link href={`/blog/${post.id}`} key={post.id}>
                <article className={`group h-full ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
                  <div
                    className={`relative overflow-hidden rounded-2xl mb-4 ${index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}
                  >
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md font-medium">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.culture}</span>
                  </div>
                  <h3
                    className={`font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2 ${index === 0 ? "text-2xl" : "text-lg"}`}
                  >
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User size={14} /> {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} /> {post.readTime} min
                      </span>
                    </div>
                    <ArrowRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-primary"
                    />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground mb-4">No stories found matching your filters.</p>
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
