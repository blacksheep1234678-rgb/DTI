"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function CallToAction() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary via-accent to-primary" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className={`text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6 scroll-animate-fade-in-up ${isVisible ? "visible" : ""} drop-shadow-lg`}
        >
          Share Your Story
        </h2>
        <p
          className={`text-lg text-primary-foreground/95 mb-8 max-w-2xl mx-auto scroll-animate-slide-in-left ${isVisible ? "visible" : ""} drop-shadow-md`}
        >
          Be part of preserving India's cultural heritage. Contribute your photos, videos, stories, and traditions to
          our growing archive.
        </p>
        <Link href="/contribute">
          <button
            className={`bg-primary-foreground hover:bg-primary-foreground/90 text-primary px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 mx-auto transition-all duration-300 hover:scale-105 hover:shadow-md shadow-md scroll-animate-scale-in ${isVisible ? "visible" : ""}`}
          >
            Start Contributing
            <ArrowRight size={20} />
          </button>
        </Link>
      </div>
    </section>
  )
}
