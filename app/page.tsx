import Header from "@/components/header"
import Hero from "@/components/hero"
import QuickExplore from "@/components/quick-explore"
import CulturalSpotlight from "@/components/cultural-spotlight"
import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <QuickExplore />
      <CulturalSpotlight />
      <CallToAction />
      <Footer />
    </main>
  )
}
