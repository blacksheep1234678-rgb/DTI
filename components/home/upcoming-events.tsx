"use client"

import Link from "next/link"
import { ArrowRight, Calendar, MapPin } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Kathakali Performance Night",
    date: "Nov 15",
    time: "7:00 PM",
    location: "Kochi, Kerala",
    image: "/kathakali-performance-stage.jpg",
    attendees: 342,
  },
  {
    id: 2,
    title: "Rajasthani Folk Music Festival",
    date: "Nov 20",
    time: "6:00 PM",
    location: "Jaipur, Rajasthan",
    image: "/rajasthani-folk-festival.jpg",
    attendees: 1250,
  },
  {
    id: 3,
    title: "Bhangra Dance Workshop",
    date: "Nov 25",
    time: "5:00 PM",
    location: "Punjab",
    image: "/punjabi-bhangra-festival.jpg",
    attendees: 203,
  },
]

export default function UpcomingEvents() {
  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Upcoming Events</h2>
            <p className="text-lg text-muted-foreground max-w-xl">Join cultural celebrations happening across India</p>
          </div>
          <Link
            href="/events"
            className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 transition font-medium"
          >
            View all events <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2 text-center">
                  <div className="text-lg font-bold text-foreground">{event.date.split(" ")[1]}</div>
                  <div className="text-xs text-muted-foreground uppercase">{event.date.split(" ")[0]}</div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">{event.attendees} attending</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition font-medium"
          >
            View all events <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
