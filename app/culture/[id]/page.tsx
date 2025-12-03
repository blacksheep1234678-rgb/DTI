"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CultureDetailTabs from "@/components/culture/culture-detail-tabs"
import { ArrowLeft, Share2, Heart } from "lucide-react"
import Link from "next/link"

const culturesData: Record<
  string,
  {
    id: string
    name: string
    state: string
    region: string
    category: string
    description: string
    image: string
    fullDescription: string
    history: string
    significance: string
    gallery: string[]
    videos: { title: string; url: string }[]
    stories: { title: string; author: string; content: string }[]
  }
> = {
  "kerala-kathakali": {
    id: "kerala-kathakali",
    name: "Kathakali Dance",
    state: "Kerala",
    region: "South",
    category: "Performing Arts",
    description: "Ancient classical dance form with elaborate costumes and makeup",
    image: "/kathakali-dance-performance.jpg",
    fullDescription:
      "Kathakali is one of the oldest classical dance forms of India, originating in Kerala. It is known for its elaborate costumes, intricate hand gestures (mudras), and expressive facial movements. The performance typically tells stories from Hindu epics like the Mahabharata and Ramayana.",
    history:
      "Kathakali emerged in the 16th century in Kerala as a synthesis of various art forms. It was patronized by the royal families of Kochi and Travancore. The art form has been passed down through generations and is now recognized as a UNESCO Intangible Cultural Heritage.",
    significance:
      "Kathakali represents the pinnacle of classical Indian dance and is a symbol of Kerala's cultural identity. It combines dance, music, and drama in a unique way that captivates audiences worldwide.",
    gallery: [
      "/kathakali-dance-performance.jpg",
      "/kathakali-makeup-closeup.jpg",
      "/kathakali-costume-detail.jpg",
      "/kathakali-performance-stage.jpg",
    ],
    videos: [
      { title: "Kathakali Performance Highlights", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "Kathakali Mudras Tutorial", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    ],
    stories: [
      {
        title: "The Legend of Kathakali",
        author: "Ravi Kumar",
        content:
          "Kathakali originated from the royal courts of Kerala, where it was performed during festivals and celebrations. The art form was initially performed only by men, who would spend years mastering the intricate movements and expressions...",
      },
      {
        title: "My Journey Learning Kathakali",
        author: "Priya Nair",
        content:
          "I started learning Kathakali at the age of 8. The training was rigorous, involving daily practice of mudras, facial expressions, and body movements. After 15 years of dedication, I performed my first solo performance...",
      },
    ],
  },
  "rajasthan-folk": {
    id: "rajasthan-folk",
    name: "Rajasthani Folk Music",
    state: "Rajasthan",
    region: "North",
    category: "Music",
    description: "Traditional folk music with vibrant instruments and storytelling",
    image: "/rajasthani-folk-music.jpg",
    fullDescription:
      "Rajasthani folk music is a vibrant expression of the desert culture of Rajasthan. It features traditional instruments like the sarangi, dholak, and morchang, and tells stories of love, valor, and daily life in the desert.",
    history:
      "Rajasthani folk music has roots dating back centuries, with origins in the nomadic communities of the Thar Desert. It was traditionally performed by traveling musicians and has evolved over time while maintaining its authentic character.",
    significance:
      "This music form is integral to Rajasthani identity and is performed during festivals, weddings, and celebrations. It preserves the history and values of the Rajasthani people.",
    gallery: [
      "/rajasthani-folk-music.jpg",
      "/rajasthani-musicians-performance.jpg",
      "/rajasthani-instruments-display.jpg",
      "/rajasthani-folk-festival.jpg",
    ],
    videos: [
      { title: "Rajasthani Folk Music Performance", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "Traditional Rajasthani Instruments", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    ],
    stories: [
      {
        title: "The Sarangi Player's Tale",
        author: "Mohan Singh",
        content:
          "My grandfather was a renowned sarangi player in Rajasthan. He taught me the art of creating music from the strings. Every note tells a story of the desert, of love, and of the struggles of our people...",
      },
    ],
  },
  "bengal-art": {
    id: "bengal-art",
    name: "Bengal Pattachitra",
    state: "West Bengal",
    region: "East",
    category: "Visual Arts",
    description: "Intricate scroll paintings depicting mythological stories",
    image: "/bengal-pattachitra-art.jpg",
    fullDescription:
      "Pattachitra is an ancient art form from Bengal, featuring intricate scroll paintings on cloth. These paintings depict mythological stories, religious themes, and scenes from daily life with remarkable detail and vibrant colors.",
    history:
      "Pattachitra has been practiced in Bengal for over a thousand years. It was traditionally created by artisans who would travel from village to village, displaying their paintings and telling stories to audiences.",
    significance:
      "Pattachitra is a living tradition that connects people to their cultural heritage. It represents the artistic excellence and storytelling traditions of Bengal.",
    gallery: [
      "/bengal-pattachitra-art.jpg",
      "/bengal-pattachitra-detail.jpg",
      "/bengal-pattachitra-colors.jpg",
      "/bengal-pattachitra-exhibition.jpg",
    ],
    videos: [
      { title: "Pattachitra Painting Process", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "Pattachitra Stories and Meanings", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    ],
    stories: [
      {
        title: "Preserving Pattachitra",
        author: "Anita Dey",
        content:
          "As a Pattachitra artist, I feel a responsibility to preserve this ancient art form. I teach young students the traditional techniques and encourage them to add their own creative touch while respecting the heritage...",
      },
    ],
  },
  "tamil-kolam": {
    id: "tamil-kolam",
    name: "Tamil Kolam",
    state: "Tamil Nadu",
    region: "South",
    category: "Visual Arts",
    description: "Colorful geometric patterns created with rice flour and colors",
    image: "/tamil-kolam-patterns.jpg",
    fullDescription:
      "Kolam is a traditional art form from Tamil Nadu where women create intricate geometric patterns on the ground using rice flour, colored powders, and flowers. These patterns are created daily, especially during festivals and auspicious occasions.",
    history:
      "Kolam has been part of Tamil culture for thousands of years. It is believed to bring prosperity and ward off evil. The art form has evolved from simple patterns to complex geometric designs.",
    significance:
      "Kolam is more than just decoration; it is a spiritual practice and a form of artistic expression. It represents the creativity and cultural values of Tamil women.",
    gallery: [
      "/tamil-kolam-patterns.jpg",
      "/tamil-kolam-closeup.jpg",
      "/tamil-kolam-festival.jpg",
      "/tamil-kolam-traditional.jpg",
    ],
    videos: [
      { title: "How to Draw Kolam", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "Kolam Patterns and Meanings", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    ],
    stories: [
      {
        title: "My Grandmother's Kolam",
        author: "Lakshmi Iyer",
        content:
          "Every morning, my grandmother would wake up early to draw kolam at our doorstep. She taught me the patterns and their meanings. Now, I continue this tradition and teach my children...",
      },
    ],
  },
  "punjab-bhangra": {
    id: "punjab-bhangra",
    name: "Punjabi Bhangra",
    state: "Punjab",
    region: "North",
    category: "Performing Arts",
    description: "Energetic dance and music celebrating harvest and joy",
    image: "/punjabi-bhangra-dance.jpg",
    fullDescription:
      "Bhangra is a vibrant dance and music form from Punjab, traditionally performed during the harvest festival of Baisakhi. It is characterized by energetic movements, rhythmic drumming, and joyful celebration.",
    history:
      "Bhangra originated as a celebration of the harvest season in Punjab. It was performed by farmers to express joy and gratitude for a good harvest. Over time, it has evolved into a global phenomenon.",
    significance:
      "Bhangra is a symbol of Punjabi culture and pride. It represents the spirit of celebration, community, and joy that is central to Punjabi identity.",
    gallery: [
      "/punjabi-bhangra-dance.jpg",
      "/punjabi-bhangra-performance.jpg",
      "/punjabi-bhangra-festival.jpg",
      "/punjabi-bhangra-costumes.jpg",
    ],
    videos: [
      { title: "Bhangra Dance Tutorial", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "Bhangra Festival Celebration", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    ],
    stories: [
      {
        title: "Bhangra in My Heart",
        author: "Simran Kaur",
        content:
          "Growing up in Punjab, Bhangra was part of every celebration. I learned to dance from my mother and grandmother. Now, I teach Bhangra to children around the world, spreading the joy of our culture...",
      },
    ],
  },
  "odisha-odissi": {
    id: "odisha-odissi",
    name: "Odissi Dance",
    state: "Odisha",
    region: "East",
    category: "Performing Arts",
    description: "Graceful classical dance form with fluid movements",
    image: "/odissi-dance-performance.jpg",
    fullDescription:
      "Odissi is a classical dance form from Odisha, known for its graceful movements, fluid body motions, and spiritual themes. It is one of the eight classical dance forms of India and is often performed in temples.",
    history:
      "Odissi has its roots in the temples of Odisha, where it was performed as a form of worship. It was traditionally performed by devadasis (temple dancers) and has been recognized as a classical art form.",
    significance:
      "Odissi represents the spiritual and artistic heritage of Odisha. It is a form of devotion and artistic expression that connects dancers and audiences to the divine.",
    gallery: [
      "/odissi-dance-performance.jpg",
      "/odissi-dancer-closeup.jpg",
      "/odissi-temple-performance.jpg",
      "/odissi-costume-jewelry.jpg",
    ],
    videos: [
      { title: "Odissi Dance Performance", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "Odissi Mudras and Movements", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    ],
    stories: [
      {
        title: "Dancing in the Temple",
        author: "Deepa Mishra",
        content:
          "I have been performing Odissi in temples since I was a child. The spiritual connection I feel while dancing is indescribable. Every performance is a prayer, a meditation, and a celebration of our heritage...",
      },
    ],
  },
  "maharashtra-lavani": {
    id: "maharashtra-lavani",
    name: "Marathi Lavani",
    state: "Maharashtra",
    region: "West",
    category: "Performing Arts",
    description: "Spirited folk dance with rhythmic movements and songs",
    image: "/marathi-lavani-dance.jpg",
    fullDescription:
      "Lavani is a spirited folk dance and music form from Maharashtra, characterized by rhythmic movements, colorful costumes, and witty songs. It is traditionally performed by women and is a celebration of femininity and joy.",
    history:
      "Lavani has been part of Maharashtrian culture for centuries. It was traditionally performed in courts and at celebrations. The art form has evolved while maintaining its authentic character and social significance.",
    significance:
      "Lavani is a powerful form of cultural expression and social commentary. It celebrates women's strength and creativity while preserving Maharashtrian traditions.",
    gallery: [
      "/marathi-lavani-dance.jpg",
      "/marathi-lavani-performance.jpg",
      "/marathi-lavani-costumes.jpg",
      "/marathi-lavani-festival.jpg",
    ],
    videos: [
      { title: "Lavani Dance Performance", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "Lavani Songs and Stories", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    ],
    stories: [
      {
        title: "The Spirit of Lavani",
        author: "Meera Joshi",
        content:
          "Lavani is not just a dance; it is a voice for women. Through Lavani, we express our joys, sorrows, and dreams. I am proud to be a Lavani performer and to carry forward this beautiful tradition...",
      },
    ],
  },
  "karnataka-yakshagana": {
    id: "karnataka-yakshagana",
    name: "Yakshagana",
    state: "Karnataka",
    region: "South",
    category: "Performing Arts",
    description: "Theatrical art form combining dance, music, and storytelling",
    image: "/yakshagana-performance.jpg",
    fullDescription:
      "Yakshagana is a theatrical art form from Karnataka that combines dance, music, dialogue, and storytelling. It is performed in open-air venues and tells stories from Hindu epics with elaborate costumes and makeup.",
    history:
      "Yakshagana has been performed in Karnataka for over 500 years. It evolved from temple rituals and has become a major form of entertainment and cultural expression in the region.",
    significance:
      "Yakshagana is a complete art form that preserves stories, values, and traditions of Karnataka. It is a living tradition that continues to evolve while maintaining its cultural roots.",
    gallery: [
      "/yakshagana-performance.jpg",
      "/yakshagana-makeup-closeup.jpg",
      "/yakshagana-costume-detail.jpg",
      "/yakshagana-stage-setup.jpg",
    ],
    videos: [
      { title: "Yakshagana Performance", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "Yakshagana Makeup and Costumes", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    ],
    stories: [
      {
        title: "A Night of Yakshagana",
        author: "Rajesh Rao",
        content:
          "Watching Yakshagana for the first time was magical. The performers transported us to a different world with their elaborate costumes, expressive movements, and powerful storytelling. I was mesmerized...",
      },
    ],
  },
}

export default function CultureDetailPage() {
  const params = useParams()
  const cultureId = params.id as string
  const culture = culturesData[cultureId]
  const [liked, setLiked] = useState(false)

  if (!culture) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-serif font-bold text-foreground mb-4">Culture Not Found</h1>
          <Link href="/explore" className="text-primary hover:text-primary/80 transition">
            Back to Explore
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img src={culture.image || "/placeholder.svg"} alt={culture.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />

        {/* Back Button */}
        <Link
          href="/explore"
          className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-background/90 backdrop-blur px-4 py-2 rounded-lg hover:bg-background transition"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </Link>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">{culture.name}</h1>
          <p className="text-white/90 text-lg">
            {culture.state} • {culture.region} • {culture.category}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Action Buttons */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setLiked(!liked)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
              liked ? "bg-accent text-accent-foreground" : "bg-muted text-foreground hover:bg-muted/80"
            }`}
          >
            <Heart size={20} fill={liked ? "currentColor" : "none"} />
            {liked ? "Liked" : "Like"}
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-foreground hover:bg-muted/80 transition">
            <Share2 size={20} />
            Share
          </button>
        </div>

        {/* Description */}
        <div className="mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed">{culture.fullDescription}</p>
        </div>

        {/* Tabs Section */}
        <CultureDetailTabs culture={culture} />

        {/* History and Significance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">History</h3>
            <p className="text-muted-foreground leading-relaxed">{culture.history}</p>
          </div>
          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Significance</h3>
            <p className="text-muted-foreground leading-relaxed">{culture.significance}</p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
