import { Star, MessageCircle, Eye } from "lucide-react"

const highlights = [
  {
    id: 1,
    author: "Ravi Kumar",
    title: "The Lost Art of Kathakali Makeup",
    excerpt: "A deep dive into the traditional makeup techniques used in Kathakali performances...",
    culture: "Kathakali Dance",
    views: 2543,
    comments: 18,
    featured: true,
  },
  {
    id: 2,
    author: "Priya Nair",
    title: "My Grandmother's Kolam Patterns",
    excerpt: "Documenting the unique kolam patterns passed down through three generations of my family...",
    culture: "Tamil Kolam",
    views: 1892,
    comments: 12,
    featured: true,
  },
  {
    id: 3,
    author: "Mohan Singh",
    title: "Rajasthani Folk Music: A Living Tradition",
    excerpt: "Exploring how traditional folk music continues to thrive in modern Rajasthan...",
    culture: "Rajasthani Folk Music",
    views: 1456,
    comments: 9,
    featured: false,
  },
  {
    id: 4,
    author: "Anita Dey",
    title: "Pattachitra: Stories on Canvas",
    excerpt: "The symbolism and storytelling techniques in traditional Bengal Pattachitra paintings...",
    culture: "Bengal Pattachitra",
    views: 1234,
    comments: 7,
    featured: false,
  },
]

export default function CommunityHighlights() {
  return (
    <div>
      <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Featured Contributions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {highlights.map((item) => (
          <div
            key={item.id}
            className={`rounded-lg p-6 border transition hover:shadow-lg cursor-pointer ${
              item.featured ? "bg-primary/5 border-primary/30" : "bg-card border-border"
            }`}
          >
            {item.featured && (
              <div className="flex items-center gap-2 mb-3">
                <Star size={16} className="text-primary fill-primary" />
                <span className="text-xs font-semibold text-primary">Featured</span>
              </div>
            )}
            <h3 className="font-serif text-lg font-bold text-foreground mb-2 hover:text-primary transition">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">{item.excerpt}</p>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                {item.culture}
              </span>
              <span className="text-xs text-muted-foreground">By {item.author}</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Eye size={14} />
                <span>{item.views}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle size={14} />
                <span>{item.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
