"use client"

import Link from "next/link"
import { ArrowRight, Clock, User } from "lucide-react"

const stories = [
  {
    id: 1,
    title: "The Lost Art of Kathakali Makeup",
    excerpt: "Exploring the intricate techniques and symbolism behind traditional Kathakali makeup...",
    author: "Ravi Kumar",
    readTime: 8,
    image: "/kathakali-makeup-closeup.jpg",
    category: "Performing Arts",
  },
  {
    id: 2,
    title: "My Grandmother's Kolam Patterns",
    excerpt: "A personal journey documenting family kolam traditions passed through generations...",
    author: "Lakshmi Iyer",
    readTime: 6,
    image: "/tamil-kolam-patterns.jpg",
    category: "Visual Arts",
  },
  {
    id: 3,
    title: "Rajasthani Folk Music: A Living Tradition",
    excerpt: "How traditional folk music continues to thrive and evolve in modern Rajasthan...",
    author: "Mohan Singh",
    readTime: 7,
    image: "/rajasthani-folk-music.jpg",
    category: "Music",
  },
]

export default function FeaturedStories() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Featured Stories</h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Personal narratives and insights from our community
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 transition font-medium"
          >
            View all stories <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Link href={`/blog/${story.id}`} key={story.id}>
              <article className="group h-full">
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1 rounded-full">
                      {story.category}
                    </span>
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {story.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{story.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User size={14} /> {story.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {story.readTime} min
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition font-medium"
          >
            View all stories <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
