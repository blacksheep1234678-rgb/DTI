"use client"

import { useState } from "react"
import { Search, X } from "lucide-react"

interface FilterOption {
  label: string
  value: string
}

interface EnhancedFilterPanelProps {
  title: string
  searchPlaceholder?: string
  categories: FilterOption[]
  recommendedTags?: FilterOption[]
  selectedCategory?: string | null
  onCategoryChange: (category: string | null) => void
  onSearchChange?: (query: string) => void
  onClearFilters: () => void
  searchQuery?: string
}

export default function EnhancedFilterPanel({
  title,
  searchPlaceholder = "Search...",
  categories,
  recommendedTags = [],
  selectedCategory,
  onCategoryChange,
  onSearchChange,
  onClearFilters,
  searchQuery = "",
}: EnhancedFilterPanelProps) {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div className="bg-card rounded-lg p-6 border border-border space-y-6">
      {/* Search Bar */}
      {onSearchChange && (
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">Search</label>
          <div className="relative">
            <Search size={18} className="absolute left-3 top-3 text-muted-foreground" />
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-muted text-foreground rounded-lg border border-border focus:outline-none focus:border-primary transition"
            />
          </div>
        </div>
      )}

      {/* Recommended Tags */}
      {recommendedTags.length > 0 && (
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">Popular Filters</label>
          <div className="flex flex-wrap gap-2">
            {recommendedTags.map((tag) => (
              <button
                key={tag.value}
                onClick={() => onCategoryChange(tag.value)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                  selectedCategory === tag.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Category Filter */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold text-foreground">{title}</label>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs text-muted-foreground hover:text-foreground transition"
          >
            {isExpanded ? "Hide" : "Show"}
          </button>
        </div>
        {isExpanded && (
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => onCategoryChange(selectedCategory === category.value ? null : category.value)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                  selectedCategory === category.value
                    ? "bg-primary/20 text-primary font-semibold"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Clear Filters */}
      {(selectedCategory || searchQuery) && (
        <button
          onClick={onClearFilters}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition text-sm font-medium"
        >
          <X size={16} />
          Clear Filters
        </button>
      )}
    </div>
  )
}
