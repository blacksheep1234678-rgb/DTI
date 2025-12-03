"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const regions = [
  {
    id: "north",
    name: "North India",
    states: ["Punjab", "Rajasthan", "Uttar Pradesh", "Himachal Pradesh"],
    cultures: 12,
    color: "bg-primary",
  },
  {
    id: "south",
    name: "South India",
    states: ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh"],
    cultures: 15,
    color: "bg-secondary",
  },
  {
    id: "east",
    name: "East India",
    states: ["West Bengal", "Odisha", "Bihar", "Jharkhand"],
    cultures: 10,
    color: "bg-accent",
  },
  { id: "west", name: "West India", states: ["Maharashtra", "Gujarat", "Goa"], cultures: 8, color: "bg-primary" },
  {
    id: "central",
    name: "Central India",
    states: ["Madhya Pradesh", "Chhattisgarh"],
    cultures: 6,
    color: "bg-secondary",
  },
  {
    id: "northeast",
    name: "Northeast India",
    states: ["Assam", "Meghalaya", "Nagaland", "Manipur"],
    cultures: 20,
    color: "bg-accent",
  },
]

export default function InteractiveMap() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null)

  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Explore by Region</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the unique cultural tapestry of each region
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region) => (
            <div
              key={region.id}
              className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer"
              onMouseEnter={() => setActiveRegion(region.id)}
              onMouseLeave={() => setActiveRegion(null)}
            >
              <div className={`w-3 h-3 rounded-full ${region.color} mb-4`} />
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {region.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {region.states.slice(0, 3).join(", ")}
                {region.states.length > 3 ? ` +${region.states.length - 3} more` : ""}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">{region.cultures} cultures</span>
                <Link href="/explore" className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
