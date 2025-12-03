"use client"

import { ArrowRight, Sparkles, Users, Heart } from "lucide-react"
import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="py-24 px-4 bg-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
            <Sparkles size={16} />
            <span className="text-sm font-medium">Join 2,500+ Contributors</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-background mb-6 text-balance">
            Your Story Matters
          </h2>
          <p className="text-lg text-background/80 max-w-2xl mx-auto mb-8">
            Every tradition, recipe, and memory you share helps preserve India's cultural heritage for generations to
            come.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-background/20 text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Heart size={24} className="text-primary" />
            </div>
            <h3 className="font-semibold text-background mb-2">Preserve Heritage</h3>
            <p className="text-sm text-background/70">Document traditions before they fade</p>
          </div>
          <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-background/20 text-center">
            <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mx-auto mb-4">
              <Users size={24} className="text-secondary" />
            </div>
            <h3 className="font-semibold text-background mb-2">Connect Community</h3>
            <p className="text-sm text-background/70">Share with cultural enthusiasts worldwide</p>
          </div>
          <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-background/20 text-center">
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <Sparkles size={24} className="text-accent" />
            </div>
            <h3 className="font-semibold text-background mb-2">Get Recognized</h3>
            <p className="text-sm text-background/70">Earn badges and community recognition</p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/contribute">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-xl font-semibold inline-flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/30">
              Start Contributing
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
