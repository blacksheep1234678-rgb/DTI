"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Lightbulb } from "lucide-react"

const culturalSpotlights = [
  {
    id: 1,
    title: "Kathakali Dance",
    region: "Kerala",
    description:
      "An ancient form of classical Indian dance-drama, known for its elaborate costumes and expressive hand gestures.",
    trivia: "A single Kathakali performance can last up to 8 hours!",
    image: "/kathakali-dance-performance.jpg",
  },
  {
    id: 2,
    title: "Rajasthani Folk Music",
    region: "Rajasthan",
    description:
      "The vibrant musical traditions of the desert state, featuring traditional instruments and soulful melodies.",
    trivia: "Rajasthani folk songs often tell stories of love, valor, and daily life.",
    image: "/rajasthani-folk-music.jpg",
  },
  {
    id: 3,
    title: "Bengal Pattachitra Art",
    region: "West Bengal",
    description:
      "A traditional scroll painting art form featuring mythological and religious themes with intricate details.",
    trivia: "Pattachitra paintings are created on cloth using natural colors and brushes made from animal hair.",
    image: "/bengal-pattachitra-art.jpg",
  },
  {
    id: 4,
    title: "Tamil Kolam",
    region: "Tamil Nadu",
    description:
      "Intricate geometric patterns drawn on the ground using rice flour, symbolizing prosperity and welcome.",
    trivia: "Kolams are traditionally drawn by women every morning as a form of artistic expression.",
    image: "/tamil-kolam-patterns.jpg",
  },
]

export default function CulturalSpotlight() {
  const [currentSpotlight, setCurrentSpotlight] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => {
      setCurrentSpotlight((prev) => (prev + 1) % culturalSpotlights.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [autoPlay])

  const goToPrevious = () => {
    setAutoPlay(false)
    setCurrentSpotlight((prev) => (prev - 1 + culturalSpotlights.length) % culturalSpotlights.length)
  }

  const goToNext = () => {
    setAutoPlay(false)
    setCurrentSpotlight((prev) => (prev + 1) % culturalSpotlights.length)
  }

  const spotlight = culturalSpotlights[currentSpotlight]

  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Cultural Spotlight</h2>
          <p className="text-lg text-muted-foreground">Discover fascinating traditions and trivia from across India</p>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div
            className="absolute inset-0 transition-all duration-700"
            style={{
              backgroundImage: `url('${spotlight.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />

          <div className="relative z-10 px-8 md:px-16 py-16 md:py-24 text-white">
            <div className="max-w-xl">
              <span className="inline-block bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full mb-4">
                {spotlight.region}
              </span>
              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-4">{spotlight.title}</h3>
              <p className="text-lg text-white/90 mb-6">{spotlight.description}</p>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Lightbulb size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/80 mb-1">Did you know?</p>
                  <p className="text-white">{spotlight.trivia}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 z-20 flex gap-2">
            <button
              onClick={goToPrevious}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goToNext}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="absolute bottom-6 left-6 z-20 flex gap-2">
            {culturalSpotlights.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoPlay(false)
                  setCurrentSpotlight(index)
                }}
                className={`rounded-full transition-all duration-300 ${
                  index === currentSpotlight ? "bg-white w-8 h-2" : "bg-white/50 w-2 h-2 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
