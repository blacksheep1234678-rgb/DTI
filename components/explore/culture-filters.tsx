"use client"

import { X } from "lucide-react"

interface CultureFiltersProps {
  categories: string[]
  regions: string[]
  selectedCategory: string | null
  selectedRegion: string | null
  onCategoryChange: (category: string | null) => void
  onRegionChange: (region: string | null) => void
  onClearFilters: () => void
}

export default function CultureFilters({
  categories,
  regions,
  selectedCategory,
  selectedRegion,
  onCategoryChange,
  onRegionChange,
  onClearFilters,
}: CultureFiltersProps) {
  const hasActiveFilters = selectedCategory || selectedRegion

  return (
    <div className="bg-card rounded-lg p-6 border border-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-serif text-xl font-bold text-foreground">Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="text-xs text-primary hover:text-primary/80 flex items-center gap-1 transition"
          >
            <X size={14} />
            Clear
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* Category Filter */}
        <div>
          <label className="text-sm font-semibold text-foreground block mb-3">Category</label>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(selectedCategory === category ? null : category)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Region Filter */}
        <div>
          <label className="text-sm font-semibold text-foreground block mb-3">Region</label>
          <div className="space-y-2">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => onRegionChange(selectedRegion === region ? null : region)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                  selectedRegion === region
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
