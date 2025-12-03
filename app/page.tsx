import Header from "@/components/header"
import Hero from "@/components/hero"
import QuickExplore from "@/components/quick-explore"
import CulturalSpotlight from "@/components/cultural-spotlight"
import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"
import FeaturedStories from "@/components/home/featured-stories"
import InteractiveMap from "@/components/home/interactive-map"
import CultureStats from "@/components/home/culture-stats"
import Testimonials from "@/components/home/testimonials"
import UpcomingEvents from "@/components/home/upcoming-events"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CultureStats />
      <QuickExplore />
      <InteractiveMap />
      <CulturalSpotlight />
      <FeaturedStories />
      <UpcomingEvents />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  )
}
