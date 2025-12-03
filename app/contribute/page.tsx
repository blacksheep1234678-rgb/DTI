"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollAnimationWrapper from "@/components/scroll-animation-wrapper"
import ContributionForm from "@/components/contribute/contribution-form"
import CommunityHighlights from "@/components/contribute/community-highlights"
import ContributorLeaderboard from "@/components/contribute/contributor-leaderboard"
import { Users, Heart, Share2 } from "lucide-react"

export default function ContributePage() {
  const [activeTab, setActiveTab] = useState<"contribute" | "community">("contribute")

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/20 to-secondary/20 py-12 px-4">
        <ScrollAnimationWrapper animationType="fade-in-up">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Share Your Cultural Heritage
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Contribute your stories, photos, and knowledge to help preserve and celebrate India's diverse cultures.
              Join our growing community of cultural enthusiasts and historians.
            </p>
          </div>
        </ScrollAnimationWrapper>
      </section>

      {/* Tab Navigation */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("contribute")}
              className={`py-4 px-2 font-semibold border-b-2 transition ${
                activeTab === "contribute"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Submit Contribution
            </button>
            <button
              onClick={() => setActiveTab("community")}
              className={`py-4 px-2 font-semibold border-b-2 transition ${
                activeTab === "community"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
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
              <ScrollAnimationWrapper animationType="slide-in-left">
                <ContributionForm />
              </ScrollAnimationWrapper>
            </div>

            {/* Info Cards */}
            <div className="space-y-6">
              <ScrollAnimationWrapper animationType="slide-in-right" delay={100}>
                <div className="bg-card rounded-lg p-6 border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Heart size={24} className="text-primary" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-foreground">Why Contribute?</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Preserve cultural heritage for future generations</li>
                    <li>• Share your unique perspective and knowledge</li>
                    <li>• Connect with like-minded cultural enthusiasts</li>
                    <li>• Get recognized in our community</li>
                  </ul>
                </div>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper animationType="slide-in-right" delay={200}>
                <div className="bg-card rounded-lg p-6 border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <Share2 size={24} className="text-secondary" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-foreground">What to Share?</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Personal stories and experiences</li>
                    <li>• Historical facts and research</li>
                    <li>• Photos and artwork</li>
                    <li>• Recipes and traditions</li>
                  </ul>
                </div>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper animationType="slide-in-right" delay={300}>
                <div className="bg-card rounded-lg p-6 border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Users size={24} className="text-accent" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-foreground">Community Guidelines</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Be respectful and inclusive</li>
                    <li>• Verify your information</li>
                    <li>• Give credit to sources</li>
                    <li>• No spam or promotional content</li>
                  </ul>
                </div>
              </ScrollAnimationWrapper>
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            <ScrollAnimationWrapper animationType="fade-in-up">
              <CommunityHighlights />
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper animationType="fade-in-up" delay={200}>
              <ContributorLeaderboard />
            </ScrollAnimationWrapper>
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}
