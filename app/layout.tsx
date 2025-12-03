import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Threads of India - Explore, Celebrate, Contribute",
  description:
    "Dive into the rich tapestry of India's cultures—from vibrant state traditions to remote tribal heritage.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
