import Link from "next/link"
import { Clock, Eye, User, ArrowRight } from "lucide-react"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  author: string
  category: string
  culture: string
  date: string
  readTime: number
  image: string
  views: number
}

interface FeaturedPostProps {
  post: BlogPost
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <Link href={`/blog/${post.id}`}>
        <div className="group cursor-pointer relative overflow-hidden rounded-lg border border-primary/30 bg-gradient-to-r from-primary/10 to-secondary/10 hover:border-primary transition-all">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image */}
            <div className="overflow-hidden h-64 md:h-auto">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  Featured
                </span>
                <span className="text-xs text-muted-foreground">{post.culture}</span>
              </div>

              <h2 className="font-serif text-3xl font-bold text-foreground group-hover:text-primary transition mb-4">
                {post.title}
              </h2>

              <p className="text-muted-foreground mb-6">{post.excerpt}</p>

              <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Eye size={16} />
                  <span>{post.views}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                <span>Read Story</span>
                <ArrowRight size={20} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  )
}
