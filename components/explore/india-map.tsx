"use client"

import { useState } from "react"

interface IndiaMapProps {
  selectedState: string | null
  onStateSelect: (state: string) => void
  states: string[]
}

export default function IndiaMap({ selectedState, onStateSelect, states }: IndiaMapProps) {
  const [hoveredState, setHoveredState] = useState<string | null>(null)

  return (
    <div className="bg-card rounded-lg p-6 border border-border space-y-4">
      <h3 className="font-serif text-lg font-bold text-foreground">Select State</h3>

      {/* State Buttons Grid */}
      <div className="grid grid-cols-3 gap-2">
        {states.map((state) => (
          <button
            key={state}
            onClick={() => onStateSelect(state)}
            onMouseEnter={() => setHoveredState(state)}
            onMouseLeave={() => setHoveredState(null)}
            className={`px-2 py-1 rounded text-xs font-semibold transition ${
              selectedState === state
                ? "bg-primary text-primary-foreground"
                : hoveredState === state
                  ? "bg-primary/30 text-primary"
                  : "bg-muted text-foreground hover:bg-muted/80"
            }`}
          >
            {state.split(" ")[0]}
          </button>
        ))}
      </div>

      {/* Selected State Info */}
      {selectedState && (
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
          <p className="text-sm font-semibold text-primary">{selectedState}</p>
          <p className="text-xs text-muted-foreground mt-1">Click to explore cultures from this state</p>
        </div>
      )}
    </div>
  )
}
