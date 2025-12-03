"use client"

import { useParams } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowLeft, Clock, Eye, User, Share2, Heart } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const blogPosts: Record<
  string,
  {
    id: number
    title: string
    excerpt: string
    content: string
    author: string
    category: string
    culture: string
    date: string
    readTime: number
    image: string
    views: number
  }
> = {
  "1": {
    id: 1,
    title: "The Lost Art of Kathakali Makeup",
    excerpt: "Exploring the intricate techniques and symbolism behind traditional Kathakali makeup...",
    content: `Kathakali makeup, known as 'Mukhathezhuthu', is one of the most distinctive features of this classical dance form. Each color and pattern has deep symbolic meaning.

The red represents courage and nobility, while green symbolizes virtue and calmness. The makeup process itself is an art form that takes hours to complete. Master makeup artists spend years perfecting their craft, learning to blend colors and create precise patterns that enhance the dancer's expressions.

The process begins with a base of rice paste and turmeric, which is applied to the entire face. Then, different colors are carefully applied in specific patterns. The eyes are outlined with thick black lines, and the eyebrows are shaped to enhance the dancer's expressions. The lips are painted red, and the cheeks are highlighted with specific colors depending on the character being portrayed.

Each character in Kathakali has a specific makeup design. The hero characters have predominantly red makeup, while the villain characters have green makeup with red accents. The makeup not only beautifies the face but also helps the audience understand the character's nature and role in the story.

The art of Kathakali makeup is being preserved by dedicated artists who continue to train new generations. These artists are custodians of a tradition that dates back centuries and continues to captivate audiences around the world.`,
    author: "Ravi Kumar",
    category: "Performing Arts",
    culture: "Kathakali Dance",
    date: "2024-10-15",
    readTime: 8,
    image: "/kathakali-makeup-closeup.jpg",
    views: 3421,
  },
  "2": {
    id: 2,
    title: "My Grandmother's Kolam Patterns",
    excerpt: "A personal journey documenting family kolam traditions passed through generations...",
    content: `Every morning before dawn, my grandmother would wake up and create intricate kolam patterns at our doorstep. These weren't just decorations; they were prayers, blessings, and expressions of our family's values.

Each pattern told a story, and each color had meaning. Through her teachings, I learned that kolam is a meditation, a way of connecting with our ancestors and the divine. The geometric patterns represent the cycle of life, the interconnectedness of all beings, and the harmony of the universe.

My grandmother taught me that the act of creating kolam is as important as the final product. It's a time for reflection, gratitude, and connection with the divine. She would wake up early, prepare the rice flour, and begin drawing patterns with precision and grace. Every line, every curve, every color was intentional and meaningful.

Now, I continue this tradition with my own children, ensuring that these beautiful patterns and their meanings are preserved for future generations. I've documented many of my grandmother's patterns and created a collection that I hope to share with the world. Through kolam, we keep our culture alive and pass on the wisdom of our ancestors.

The beauty of kolam lies not just in its visual appeal but in the spiritual and cultural significance it carries. It's a living tradition that connects us to our past and guides us toward the future.`,
    author: "Lakshmi Iyer",
    category: "Visual Arts",
    culture: "Tamil Kolam",
    date: "2024-10-12",
    readTime: 6,
    image: "/tamil-kolam-patterns.jpg",
    views: 2856,
  },
}

export default function BlogPostPage() {
  const params = useParams()
  const postId = params.id as string
  const post = blogPosts[postId]
  const [liked, setLiked] = useState(false)

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-serif font-bold text-foreground mb-4">Story Not Found</h1>
          <Link href="/blog" className="text-primary hover:text-primary/80 transition">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />

        {/* Back Button */}
        <Link
          href="/blog"
          className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-background/90 backdrop-blur px-4 py-2 rounded-lg hover:bg-background transition"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </Link>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">{post.title}</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-border">
          <div className="flex items-center gap-2 text-muted-foreground">
            <User size={18} />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock size={18} />
            <span>{post.readTime} min read</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Eye size={18} />
            <span>{post.views} views</span>
          </div>
          <span className="text-muted-foreground">{formattedDate}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setLiked(!liked)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
              liked ? "bg-accent text-accent-foreground" : "bg-muted text-foreground hover:bg-muted/80"
            }`}
          >
            <Heart size={20} fill={liked ? "currentColor" : "none"} />
            {liked ? "Liked" : "Like"}
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-foreground hover:bg-muted/80 transition">
            <Share2 size={20} />
            Share
          </button>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none mb-12">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-muted-foreground leading-relaxed mb-6 text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 pt-8 border-t border-border">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full">
            {post.category}
          </span>
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary text-sm font-semibold rounded-full">
            {post.culture}
          </span>
        </div>
      </div>

      <Footer />
    </main>
  )
}
