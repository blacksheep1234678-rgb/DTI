import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface Culture {
  id: string
  name: string
  state: string
  category: string
  description: string
  image: string
}

interface CultureGridProps {
  cultures: Culture[]
}

export default function CultureGrid({ cultures }: CultureGridProps) {
  if (cultures.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground mb-4">No cultures found matching your filters.</p>
        <p className="text-sm text-muted-foreground">Try adjusting your selection.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {cultures.map((culture) => (
        <Link key={culture.id} href={`/culture/${culture.id}`}>
          <div className="group cursor-pointer h-full bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all hover:shadow-lg">
            {/* Image */}
            <div className="relative overflow-hidden h-48 bg-muted">
              <img
                src={culture.image || "/placeholder.svg"}
                alt={culture.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition">
                    {culture.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{culture.state}</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{culture.description}</p>

              <div className="flex items-center justify-between">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                  {culture.category}
                </span>
                <ArrowRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
