"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface ScrollAnimationWrapperProps {
  children: React.ReactNode
  animationType?: "fade-in-up" | "slide-in-left" | "slide-in-right" | "scale-in" | "rotate-in" | "glow-pulse"
  delay?: number
  className?: string
}

export default function ScrollAnimationWrapper({
  children,
  animationType = "fade-in-up",
  delay = 0,
  className = "",
}: ScrollAnimationWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  return (
    <div ref={ref} className={`scroll-animate-${animationType} ${isVisible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  )
}
