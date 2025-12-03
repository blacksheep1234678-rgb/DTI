import Link from "next/link"
import { Clock, Eye, User } from "lucide-react"

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

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <Link href={`/blog/${post.id}`}>
      <div className="group cursor-pointer bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all hover:shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Image */}
          <div className="md:col-span-1 overflow-hidden h-48 md:h-auto">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content */}
          <div className="md:col-span-2 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-muted-foreground">{post.culture}</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition mb-2">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
            </div>

            {/* Meta */}
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <User size={14} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{post.readTime} min read</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Eye size={14} />
                <span>{post.views}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
