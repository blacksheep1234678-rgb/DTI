"use client"

import { Sparkles, Users, MapPin, Calendar } from "lucide-react"

const stats = [
  { icon: MapPin, value: "28+", label: "States & Territories", color: "text-primary" },
  { icon: Users, value: "700+", label: "Tribal Communities", color: "text-secondary" },
  { icon: Calendar, value: "3000+", label: "Festivals Celebrated", color: "text-accent" },
  { icon: Sparkles, value: "22", label: "Official Languages", color: "text-primary" },
]

export default function CultureStats() {
  return (
    <section className="py-16 px-4 bg-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-background/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} className={stat.color} />
                </div>
                <div className="text-4xl md:text-5xl font-serif font-bold text-background mb-2">{stat.value}</div>
                <div className="text-sm text-background/70">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
