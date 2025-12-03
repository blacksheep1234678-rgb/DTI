import Link from "next/link"
import { Mail, Facebook, Instagram, Twitter, Youtube, Heart, Sparkles } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/95 text-background py-16 px-4 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-lg">
                <Sparkles className="text-white" size={20} />
              </div>
              <h3 className="font-serif text-2xl font-bold">Threads of India</h3>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Preserving and celebrating the rich cultural heritage of India through community-driven storytelling.
            </p>
            <div className="flex items-center gap-1 text-sm text-background/70">
              <span>Made with</span>
              <Heart className="text-red-400 fill-red-400" size={14} />
              <span>in India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/explore"
                  className="text-background/80 hover:text-background hover:translate-x-1 inline-block transition-all duration-300"
                >
                  States & Regions
                </Link>
              </li>
              <li>
                <Link
                  href="/explore?category=tribes"
                  className="text-background/80 hover:text-background hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Tribal Cultures
                </Link>
              </li>
              <li>
                <Link
                  href="/explore?category=festivals"
                  className="text-background/80 hover:text-background hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Festivals
                </Link>
              </li>
              <li>
                <Link
                  href="/explore?category=cuisine"
                  className="text-background/80 hover:text-background hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Cuisine
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-background/80 hover:text-background hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Community</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/contribute"
                  className="text-background/80 hover:text-background hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Contribute
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-background/80 hover:text-background hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Stories & Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-background/80 hover:text-background hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/contribute#guidelines"
                  className="text-background/80 hover:text-background hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Guidelines
                </Link>
              </li>
              <li>
                <Link
                  href="/contribute#leaderboard"
                  className="text-background/80 hover:text-background hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Top Contributors
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Stay Connected</h4>
            <p className="text-background/80 text-sm mb-4 leading-relaxed">
              Get updates on new cultural stories, events, and community highlights.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-lg bg-background/20 text-background placeholder:text-background/50 text-sm border border-background/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground p-2.5 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/50">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-background/80 text-sm">© 2025 Threads of India. All rights reserved.</p>
            <p className="text-background/60 text-xs mt-1">A cultural preservation initiative</p>
          </div>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-background/70 hover:text-background transition-all duration-300 hover:scale-110 p-2 hover:bg-primary/20 rounded-lg"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="#"
              className="text-background/70 hover:text-background transition-all duration-300 hover:scale-110 p-2 hover:bg-primary/20 rounded-lg"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="#"
              className="text-background/70 hover:text-background transition-all duration-300 hover:scale-110 p-2 hover:bg-primary/20 rounded-lg"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </Link>
            <Link
              href="#"
              className="text-background/70 hover:text-background transition-all duration-300 hover:scale-110 p-2 hover:bg-primary/20 rounded-lg"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
