"use client"

import { useState, useEffect } from "react"
import { ChevronRight, Sparkles } from "lucide-react"
import Link from "next/link"

const heroImages = [
  "/indian-classical-dance-performance.jpg",
  "/indian-tribal-art-and-crafts.jpg",
  "/indian-festival-celebration.jpg",
]

const cultureFacts = [
  "22 official languages & 1600+ dialects",
  "36 UNESCO World Heritage Sites",
  "700+ tribes with unique traditions",
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const [currentFact, setCurrentFact] = useState(0)

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    const factTimer = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % cultureFacts.length)
    }, 3000)

    return () => {
      clearInterval(imageTimer)
      clearInterval(factTimer)
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-24 h-24 rounded-full opacity-20 animate-floating-particles"
            style={{
              background: `radial-gradient(circle, ${i % 2 === 0 ? "var(--saffron)" : "var(--red)"}, transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              filter: "blur(20px)",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/30 animate-scale-in-bounce">
          <Sparkles className="text-yellow-300" size={16} />
          <span className="text-white text-sm font-medium">{cultureFacts[currentFact]}</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 animate-fade-in-up drop-shadow-2xl leading-tight">
          Threads of India
        </h1>
        <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-2xl mx-auto animate-fade-in-up drop-shadow-lg font-light leading-relaxed">
          Dive into the rich tapestry of India's cultures—from vibrant state traditions to remote tribal heritage.
          Discover, learn, and share your own stories.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
          <Link href="/explore">
            <button className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 w-full sm:w-auto hover:scale-105 hover:shadow-md shadow-md">
              Explore Cultures
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <Link href="/contribute">
            <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-semibold backdrop-blur-md transition-all duration-300 w-full sm:w-auto hover:scale-105 border-2 border-white/40 hover:border-white/60 shadow-md">
              Contribute Your Story
            </button>
          </Link>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentImage
                ? "bg-primary w-10 h-2.5 shadow-lg shadow-primary/70"
                : "bg-white/60 w-2.5 h-2.5 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
