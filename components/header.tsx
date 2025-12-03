"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Search, Sparkles } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
            <Sparkles className="text-primary-foreground" size={20} />
          </div>
          <span className="font-serif text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hidden sm:inline">
            Threads of India
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/explore"
            className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
          >
            Explore
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/contribute"
            className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
          >
            Contribute
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/blog"
            className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
          >
            Stories
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/events"
            className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
          >
            Events
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/search"
            className="text-foreground hover:text-primary transition-all duration-300 p-2 hover:bg-primary/10 rounded-lg"
          >
            <Search size={20} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-all duration-300 hover:scale-105"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg animate-fade-in-up">
          <div className="px-4 py-4 space-y-1">
            <Link
              href="/explore"
              className="block text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 py-3 px-4 rounded-lg font-medium"
            >
              Explore
            </Link>
            <Link
              href="/contribute"
              className="block text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 py-3 px-4 rounded-lg font-medium"
            >
              Contribute
            </Link>
            <Link
              href="/blog"
              className="block text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 py-3 px-4 rounded-lg font-medium"
            >
              Stories
            </Link>
            <Link
              href="/events"
              className="block text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 py-3 px-4 rounded-lg font-medium"
            >
              Events
            </Link>
            <Link
              href="/search"
              className="block text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 py-3 px-4 rounded-lg font-medium"
            >
              Search
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
