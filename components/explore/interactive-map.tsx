"use client"

import { useState } from "react"

interface InteractiveMapProps {
  selectedState: string | null
  onStateSelect: (state: string | null) => void
  states: string[]
}

const stateCoordinates: Record<string, { x: number; y: number }> = {
  Kerala: { x: 75, y: 85 },
  Rajasthan: { x: 35, y: 40 },
  "West Bengal": { x: 85, y: 35 },
  "Tamil Nadu": { x: 78, y: 88 },
  Punjab: { x: 30, y: 15 },
  Odisha: { x: 82, y: 50 },
  Maharashtra: { x: 50, y: 60 },
  Karnataka: { x: 65, y: 75 },
}

export default function InteractiveMap({ selectedState, onStateSelect, states }: InteractiveMapProps) {
  const [hoveredState, setHoveredState] = useState<string | null>(null)

  return (
    <div className="bg-card rounded-lg p-6 border border-border">
      <h3 className="font-serif text-xl font-bold text-foreground mb-4">Select Region</h3>
      <div className="relative w-full aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg overflow-hidden border border-border">
        {/* SVG Map Background */}
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          {/* Simplified India outline */}
          <path
            d="M 30 15 L 40 10 L 50 12 L 60 8 L 70 15 L 75 20 L 80 25 L 85 35 L 88 45 L 90 55 L 88 65 L 85 75 L 80 85 L 75 90 L 65 92 L 55 95 L 45 96 L 35 94 L 25 90 L 20 80 L 18 70 L 15 60 L 12 50 L 10 40 L 12 30 L 15 20 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-border"
          />

          {/* State markers */}
          {states.map((state) => {
            const coords = stateCoordinates[state]
            if (!coords) return null

            const isSelected = selectedState === state
            const isHovered = hoveredState === state

            return (
              <g key={state}>
                <circle
                  cx={coords.x}
                  cy={coords.y}
                  r={isSelected || isHovered ? 3 : 2}
                  fill={isSelected ? "rgb(212, 165, 116)" : isHovered ? "rgb(107, 142, 35)" : "rgb(160, 82, 45)"}
                  className="cursor-pointer transition-all"
                  onMouseEnter={() => setHoveredState(state)}
                  onMouseLeave={() => setHoveredState(null)}
                  onClick={() => onStateSelect(isSelected ? null : state)}
                />
              </g>
            )
          })}
        </svg>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur rounded p-3 text-xs space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-foreground">Selected</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <span className="text-foreground">Hover</span>
          </div>
        </div>
      </div>

      {/* Selected State Display */}
      {selectedState && (
        <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
          <p className="text-sm font-semibold text-foreground">Selected: {selectedState}</p>
          <button
            onClick={() => onStateSelect(null)}
            className="text-xs text-primary hover:text-primary/80 mt-2 transition"
          >
            Clear selection
          </button>
        </div>
      )}
    </div>
  )
}
