"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ContributionForm from "@/components/contribute/contribution-form"
import CommunityHighlights from "@/components/contribute/community-highlights"
import ContributorLeaderboard from "@/components/contribute/contributor-leaderboard"
import { Heart, Users, Award, BookOpen, Camera, ChefHat, Music } from "lucide-react"

export default function ContributePage() {
  const [activeTab, setActiveTab] = useState<"contribute" | "community">("contribute")

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with decorative elements */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Decorative pattern background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/20 rounded-full" />
          <div className="absolute top-40 right-20 w-48 h-48 border-2 border-secondary/20 rounded-full" />
          <div className="absolute bottom-20 left-1/4 w-24 h-24 border-2 border-accent/20 rounded-full" />
          {/* Mandala-inspired decorative element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5">
            <div className="absolute inset-0 border-2 border-primary rounded-full" />
            <div className="absolute inset-8 border-2 border-primary rounded-full" />
            <div className="absolute inset-16 border-2 border-primary rounded-full" />
            <div className="absolute inset-24 border-2 border-primary rounded-full" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Heart size={16} className="fill-primary" />
            <span className="text-sm font-medium">Be Part of Something Meaningful</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
            Your Heritage, <span className="text-primary">Your Story</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Every recipe, dance, song, and tradition you share helps preserve India's cultural tapestry for generations
            to come. Join 2,500+ contributors making a difference.
          </p>

          {/* Contribution types showcase */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { icon: BookOpen, label: "Stories" },
              { icon: Camera, label: "Photos" },
              { icon: ChefHat, label: "Recipes" },
              { icon: Music, label: "Music" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2"
              >
                <item.icon size={16} className="text-primary" />
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Navigation - Clean and minimal */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 py-2">
            <button
              onClick={() => setActiveTab("contribute")}
              className={`px-6 py-3 rounded-xl font-semibold transition ${
                activeTab === "contribute"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              Submit Contribution
            </button>
            <button
              onClick={() => setActiveTab("community")}
              className={`px-6 py-3 rounded-xl font-semibold transition ${
                activeTab === "community"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              Community
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {activeTab === "contribute" ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <ContributionForm />
            </div>

            {/* Sidebar with visual cards */}
            <div className="space-y-6">
              {/* Impact stats card */}
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 border border-primary/20">
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">Your Impact Matters</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-background/50 rounded-xl">
                    <div className="text-3xl font-bold text-primary mb-1">2,500+</div>
                    <div className="text-xs text-muted-foreground">Contributors</div>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-xl">
                    <div className="text-3xl font-bold text-secondary mb-1">8,000+</div>
                    <div className="text-xs text-muted-foreground">Stories Shared</div>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-xl">
                    <div className="text-3xl font-bold text-accent mb-1">150+</div>
                    <div className="text-xs text-muted-foreground">Cultures Documented</div>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-xl">
                    <div className="text-3xl font-bold text-foreground mb-1">500K+</div>
                    <div className="text-xs text-muted-foreground">Monthly Readers</div>
                  </div>
                </div>
              </div>

              {/* Benefits card */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Award size={24} className="text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground">Why Contribute?</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Preserve heritage for future generations",
                    "Share your unique perspective",
                    "Connect with cultural enthusiasts",
                    "Earn community recognition badges",
                    "Get featured on our homepage",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Guidelines card */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <Users size={24} className="text-secondary" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground">Guidelines</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Be respectful and inclusive",
                    "Verify your information",
                    "Give credit to sources",
                    "Original content only",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            <CommunityHighlights />
            <ContributorLeaderboard />
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}
