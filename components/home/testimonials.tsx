"use client"

import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote: "This platform helped me reconnect with my cultural roots. The stories shared here are invaluable.",
    author: "Priya Sharma",
    role: "Cultural Researcher",
    avatar: "/indian-woman-professional.png",
  },
  {
    id: 2,
    quote: "I've learned so much about cultures beyond my own state. India's diversity is truly remarkable.",
    author: "Arjun Patel",
    role: "History Student",
    avatar: "/indian-student.png",
  },
  {
    id: 3,
    quote: "Contributing my grandmother's recipes felt like preserving a piece of history. Thank you!",
    author: "Meera Iyer",
    role: "Home Chef & Contributor",
    avatar: "/indian-woman-chef.png",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Voices from Our Community</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Hear from those who are preserving and celebrating Indian culture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-card rounded-2xl p-8 border border-border relative">
              <Quote size={32} className="text-primary/20 absolute top-6 right-6" />
              <p className="text-foreground mb-6 leading-relaxed relative z-10">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
