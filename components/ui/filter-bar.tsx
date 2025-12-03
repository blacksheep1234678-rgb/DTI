"use client"

import { useState } from "react"
import { Search, X, ChevronDown } from "lucide-react"

interface FilterOption {
  label: string
  value: string
}

interface FilterGroup {
  id: string
  label: string
  options: FilterOption[]
  selected: string | null
  onChange: (value: string | null) => void
}

interface FilterBarProps {
  searchPlaceholder?: string
  searchQuery: string
  onSearchChange: (query: string) => void
  filterGroups: FilterGroup[]
  onClearAll: () => void
  resultCount?: number
  totalCount?: number
}

export default function FilterBar({
  searchPlaceholder = "Search...",
  searchQuery,
  onSearchChange,
  filterGroups,
  onClearAll,
  resultCount,
  totalCount,
}: FilterBarProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const hasActiveFilters = filterGroups.some((g) => g.selected) || searchQuery

  return (
    <div className="bg-card rounded-2xl border border-border p-4 mb-8">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-background text-foreground rounded-xl border border-border focus:outline-none focus:border-primary transition"
          />
        </div>

        {/* Filter Dropdowns */}
        <div className="flex flex-wrap gap-2">
          {filterGroups.map((group) => (
            <div key={group.id} className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === group.id ? null : group.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition font-medium text-sm ${
                  group.selected
                    ? "bg-primary/10 border-primary text-primary"
                    : "bg-background border-border text-foreground hover:border-primary/50"
                }`}
              >
                {group.selected || group.label}
                <ChevronDown
                  size={16}
                  className={`transition-transform ${openDropdown === group.id ? "rotate-180" : ""}`}
                />
              </button>

              {openDropdown === group.id && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setOpenDropdown(null)} />
                  <div className="absolute top-full left-0 mt-2 min-w-[180px] bg-card border border-border rounded-xl shadow-lg z-50 py-2 max-h-64 overflow-y-auto">
                    {group.selected && (
                      <button
                        onClick={() => {
                          group.onChange(null)
                          setOpenDropdown(null)
                        }}
                        className="w-full px-4 py-2 text-left text-sm text-muted-foreground hover:bg-muted transition"
                      >
                        Clear selection
                      </button>
                    )}
                    {group.options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          group.onChange(option.value)
                          setOpenDropdown(null)
                        }}
                        className={`w-full px-4 py-2 text-left text-sm transition ${
                          group.selected === option.value
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-foreground hover:bg-muted"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}

          {hasActiveFilters && (
            <button
              onClick={onClearAll}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-muted text-foreground hover:bg-muted/80 transition text-sm font-medium"
            >
              <X size={16} />
              Clear
            </button>
          )}
        </div>
      </div>

      {resultCount !== undefined && totalCount !== undefined && (
        <div className="mt-4 pt-4 border-t border-border text-sm text-muted-foreground">
          Showing {resultCount} of {totalCount} results
        </div>
      )}
    </div>
  )
}
