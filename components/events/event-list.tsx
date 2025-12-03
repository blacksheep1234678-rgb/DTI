import { Calendar, MapPin, Users } from "lucide-react"

interface Event {
  id: number
  title: string
  culture: string
  category: string
  date: string
  time: string
  location: string
  description: string
  image: string
  attendees: number
  featured: boolean
}

interface EventListProps {
  events: Event[]
}

export default function EventList({ events }: EventListProps) {
  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground mb-4">No events found matching your filters.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {events.map((event) => {
        const eventDate = new Date(event.date)
        const formattedDate = eventDate.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })

        return (
          <div
            key={event.id}
            className={`rounded-lg overflow-hidden border transition hover:shadow-lg cursor-pointer ${
              event.featured ? "bg-primary/5 border-primary/30" : "bg-card border-border"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Image */}
              <div className="md:col-span-1 overflow-hidden h-48 md:h-auto">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="md:col-span-3 p-6 flex flex-col justify-between">
                <div>
                  {event.featured && (
                    <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-3">
                      Featured
                    </div>
                  )}
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">{event.title}</h3>
                  <p className="text-muted-foreground mb-4">{event.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {event.category}
                    </span>
                    <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full">
                      {event.culture}
                    </span>
                  </div>
                </div>

                {/* Meta Information */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={16} />
                    <div>
                      <p className="font-semibold text-foreground">{formattedDate}</p>
                      <p className="text-xs">{event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={16} />
                    <p className="font-semibold text-foreground">{event.location}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users size={16} />
                    <p className="font-semibold text-foreground">{event.attendees} attending</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
