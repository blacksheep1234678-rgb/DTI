"use client"

import { X } from "lucide-react"

interface BlogFiltersProps {
  categories: string[]
  cultures: string[]
  selectedCategory: string | null
  selectedCulture: string | null
  onCategoryChange: (category: string | null) => void
  onCultureChange: (culture: string | null) => void
  onClearFilters: () => void
}

export default function BlogFilters({
  categories,
  cultures,
  selectedCategory,
  selectedCulture,
  onCategoryChange,
  onCultureChange,
  onClearFilters,
}: BlogFiltersProps) {
  const hasActiveFilters = selectedCategory || selectedCulture

  return (
    <div className="bg-card rounded-lg p-6 border border-border space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-serif text-lg font-bold text-foreground">Filters</h3>
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

      {/* Culture Filter */}
      <div>
        <label className="text-sm font-semibold text-foreground block mb-3">Culture</label>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {cultures.map((culture) => (
            <button
              key={culture}
              onClick={() => onCultureChange(selectedCulture === culture ? null : culture)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                selectedCulture === culture
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {culture}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
