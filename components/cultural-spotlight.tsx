"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const culturalSpotlights = [
  {
    id: 1,
    title: "Kathakali Dance",
    region: "Kerala",
    description:
      "An ancient form of classical Indian dance-drama, known for its elaborate costumes and expressive hand gestures.",
    trivia: "A single Kathakali performance can last up to 8 hours!",
    image: "/kathakali-dance-performance.jpg",
    color: "from-red-600 to-orange-600",
  },
  {
    id: 2,
    title: "Rajasthani Folk Music",
    region: "Rajasthan",
    description:
      "The vibrant musical traditions of the desert state, featuring traditional instruments and soulful melodies.",
    trivia: "Rajasthani folk songs often tell stories of love, valor, and daily life.",
    image: "/rajasthani-folk-music.jpg",
    color: "from-yellow-600 to-orange-600",
  },
  {
    id: 3,
    title: "Bengal Pattachitra Art",
    region: "West Bengal",
    description:
      "A traditional scroll painting art form featuring mythological and religious themes with intricate details.",
    trivia: "Pattachitra paintings are created on cloth using natural colors and brushes made from animal hair.",
    image: "/bengal-pattachitra-art.jpg",
    color: "from-blue-600 to-purple-600",
  },
  {
    id: 4,
    title: "Tamil Kolam",
    region: "Tamil Nadu",
    description:
      "Intricate geometric patterns drawn on the ground using rice flour, symbolizing prosperity and welcome.",
    trivia: "Kolams are traditionally drawn by women every morning as a form of artistic expression.",
    image: "/tamil-kolam-patterns.jpg",
    color: "from-pink-600 to-red-600",
  },
]

export default function CulturalSpotlight() {
  const [currentSpotlight, setCurrentSpotlight] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const { ref, isVisible } = useScrollAnimation()

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
    <section className="py-20 px-4 bg-card/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 scroll-animate-fade-in-up ${isVisible ? "visible" : ""}`}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Cultural Spotlight</h2>
          <p className="text-lg text-muted-foreground">Discover fascinating traditions and trivia from across India</p>
        </div>

        <div
          className={`relative rounded-2xl overflow-hidden shadow-2xl scroll-animate-glow-pulse ${isVisible ? "visible" : ""}`}
        >
          {/* Background Image with Parallax */}
          <div
            className="absolute inset-0 transition-all duration-700"
            style={{
              backgroundImage: `url('${spotlight.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-r ${spotlight.color} opacity-70 transition-all duration-700`}
          />
          {/* Additional shimmer overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Content */}
          <div className="relative z-10 px-6 md:px-12 py-16 md:py-24 text-white">
            <div className="max-w-2xl">
              <div className="inline-block bg-white/25 backdrop-blur px-4 py-2 rounded-full mb-4 border border-white/30 animate-bounce-in">
                <p className="text-sm font-semibold">{spotlight.region}</p>
              </div>
              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-4 animate-slide-in-left drop-shadow-lg">
                {spotlight.title}
              </h3>
              <p className="text-lg text-white/95 mb-6 animate-slide-in-right drop-shadow-md">
                {spotlight.description}
              </p>

              <div className="bg-white/15 backdrop-blur border border-white/40 rounded-lg p-4 mb-8 animate-float-up shadow-lg hover:shadow-xl hover:bg-white/20 transition-all duration-300">
                <p className="text-sm font-semibold text-white/80 mb-2">Did you know?</p>
                <p className="text-white font-medium">{spotlight.trivia}</p>
              </div>

              <button className="bg-white text-foreground hover:bg-white/95 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-white/30 animate-bounce-in">
                Learn More
              </button>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 z-20 flex gap-3">
            <button
              onClick={goToPrevious}
              className="bg-white/25 hover:bg-white/40 backdrop-blur text-white p-3 rounded-full transition-all duration-300 border border-white/30 hover:border-white/50 hover:scale-110 hover:shadow-lg hover:shadow-white/30"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goToNext}
              className="bg-white/25 hover:bg-white/40 backdrop-blur text-white p-3 rounded-full transition-all duration-300 border border-white/30 hover:border-white/50 hover:scale-110 hover:shadow-lg hover:shadow-white/30"
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
                  index === currentSpotlight
                    ? "bg-white w-8 h-2 shadow-lg shadow-white/50"
                    : "bg-white/50 w-2 h-2 hover:bg-white/70 hover:shadow-md"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
