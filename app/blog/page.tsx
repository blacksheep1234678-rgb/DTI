"use client"

import { useState, useMemo } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollAnimationWrapper from "@/components/scroll-animation-wrapper"
import EnhancedFilterPanel from "@/components/enhanced-filter-panel"
import FeaturedPost from "@/components/blog/featured-post"

const blogPosts = [
  {
    id: 1,
    title: "The Lost Art of Kathakali Makeup",
    excerpt: "Exploring the intricate techniques and symbolism behind traditional Kathakali makeup...",
    content:
      "Kathakali makeup, known as 'Mukhathezhuthu', is one of the most distinctive features of this classical dance form. Each color and pattern has deep symbolic meaning. The red represents courage and nobility, while green symbolizes virtue and calmness. The makeup process itself is an art form that takes hours to complete. Master makeup artists spend years perfecting their craft, learning to blend colors and create precise patterns that enhance the dancer's expressions.",
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
    content:
      "Every morning before dawn, my grandmother would wake up and create intricate kolam patterns at our doorstep. These weren't just decorations; they were prayers, blessings, and expressions of our family's values. Each pattern told a story, and each color had meaning. Through her teachings, I learned that kolam is a meditation, a way of connecting with our ancestors and the divine. Now, I continue this tradition with my own children, ensuring that these beautiful patterns and their meanings are preserved for future generations.",
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
    content:
      "Rajasthani folk music is more than just entertainment; it's a living archive of history, culture, and human experience. From the deserts of Jaisalmer to the palaces of Jaipur, folk musicians continue to perform songs that have been passed down through generations. These songs tell stories of love, valor, hardship, and celebration. Despite modernization, many communities are working to preserve these traditions by teaching young people the traditional instruments and songs. The sarangi, dholak, and morchang continue to produce sounds that connect us to our heritage.",
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
    content:
      "Pattachitra paintings are visual narratives that have been created for over a thousand years. Each painting tells a story from Hindu mythology or depicts scenes from daily life. The artists use natural colors derived from plants, minerals, and earth. The process of creating a Pattachitra is meticulous and time-consuming. Artists must first prepare the cloth, then sketch the design, and finally apply colors with precision. Every element in the painting has symbolic meaning, and the composition follows traditional rules that have been refined over centuries.",
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
    content:
      "Growing up in Punjab, Bhangra was part of every celebration. From harvest festivals to weddings, the rhythmic beats of the dhol drum would fill the air, and everyone would join in the dance. I learned Bhangra from my mother and grandmother, who taught me not just the steps but the spirit behind them. Bhangra is about joy, community, and gratitude. Now, I teach Bhangra to children around the world, and I see how this dance brings people together, transcending cultural and geographical boundaries. It's a beautiful way to share our heritage.",
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
    content:
      "Odissi dance has its roots in the temples of Odisha, where it was performed as a form of worship. The movements are fluid and graceful, designed to express devotion and spirituality. When I perform Odissi in temples, I feel a deep spiritual connection. Every movement is a prayer, every expression a meditation. The dance tells stories of the divine, and through it, I connect with something greater than myself. This spiritual dimension is what makes Odissi unique among classical dance forms. It's not just about technical perfection; it's about touching the soul.",
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
    content:
      "Lavani is not just a dance; it is a voice for women. Through Lavani, women express their joys, sorrows, and dreams. The dance form has a long history of social commentary and has been used to address important social issues. Lavani performers are known for their wit, humor, and powerful presence on stage. The colorful costumes, rhythmic movements, and witty songs create an unforgettable experience. As a Lavani performer, I feel a responsibility to keep this tradition alive and to use it as a platform for women's voices and empowerment.",
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
    content:
      "Watching Yakshagana for the first time was magical. The performers transported us to a different world with their elaborate costumes, expressive movements, and powerful storytelling. Yakshagana is a complete art form that combines dance, music, dialogue, and drama. The performers spend years training to master the various aspects of this art form. The makeup and costumes are as important as the performance itself, with each element carefully designed to enhance the storytelling. Yakshagana performances typically last through the night, and audiences remain captivated from beginning to end.",
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
  const recommendedCategories = categories.slice(0, 3).map((cat) => ({ label: cat, value: cat }))

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

  const featuredPost = blogPosts.find((post) => post.featured)

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/20 to-secondary/20 py-12 px-4">
        <ScrollAnimationWrapper animationType="fade-in-up">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Stories & Insights</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover personal stories, historical insights, and cultural perspectives from our community of writers
              and cultural enthusiasts.
            </p>
          </div>
        </ScrollAnimationWrapper>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <ScrollAnimationWrapper animationType="scale-in">
          <FeaturedPost post={featuredPost} />
        </ScrollAnimationWrapper>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <ScrollAnimationWrapper animationType="slide-in-left" delay={100}>
              <EnhancedFilterPanel
                title="Category"
                searchPlaceholder="Search stories..."
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

          {/* Blog Posts */}
          <div className="lg:col-span-3">
            <ScrollAnimationWrapper animationType="slide-in-right" delay={100}>
              <div className="mb-6">
                <p className="text-muted-foreground">
                  Showing {filteredPosts.length} of {blogPosts.length} stories
                </p>
              </div>
            </ScrollAnimationWrapper>

            {filteredPosts.length > 0 ? (
              <div className="space-y-6">
                {filteredPosts.map((post, index) => (
                  <ScrollAnimationWrapper key={post.id} animationType="fade-in-up" delay={index * 50}>
                    <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition p-6">
                      <div className="flex gap-4">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1">
                          <h3 className="font-serif text-lg font-bold text-foreground mb-2">{post.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{post.excerpt}</p>
                          <div className="flex gap-2 flex-wrap text-xs">
                            <span className="bg-primary/20 text-primary px-2 py-1 rounded">{post.category}</span>
                            <span className="bg-secondary/20 text-secondary px-2 py-1 rounded">{post.culture}</span>
                            <span className="text-muted-foreground">{post.readTime} min read</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimationWrapper>
                ))}
              </div>
            ) : (
              <ScrollAnimationWrapper animationType="fade-in-up">
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground mb-4">No stories found matching your filters.</p>
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
        </div>
      </div>

      <Footer />
    </main>
  )
}
