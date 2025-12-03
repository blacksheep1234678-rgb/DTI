"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, CheckCircle } from "lucide-react"

export default function ContributionForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    culture: "",
    type: "",
    title: "",
    description: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", culture: "", type: "", title: "", description: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="bg-card rounded-lg p-8 border border-border">
      <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Submit Your Contribution</h2>

      {submitted ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
            <CheckCircle size={32} className="text-secondary" />
          </div>
          <h3 className="font-serif text-xl font-bold text-foreground mb-2">Thank You!</h3>
          <p className="text-muted-foreground mb-4">
            Your contribution has been submitted for review. We'll notify you once it's published.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          {/* Culture and Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Culture/Region</label>
              <Select
                value={formData.culture}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, culture: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a culture" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kathakali">Kathakali Dance</SelectItem>
                  <SelectItem value="rajasthani">Rajasthani Folk Music</SelectItem>
                  <SelectItem value="pattachitra">Bengal Pattachitra</SelectItem>
                  <SelectItem value="kolam">Tamil Kolam</SelectItem>
                  <SelectItem value="bhangra">Punjabi Bhangra</SelectItem>
                  <SelectItem value="odissi">Odissi Dance</SelectItem>
                  <SelectItem value="lavani">Marathi Lavani</SelectItem>
                  <SelectItem value="yakshagana">Yakshagana</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Contribution Type</label>
              <Select
                value={formData.type}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, type: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="story">Personal Story</SelectItem>
                  <SelectItem value="history">Historical Information</SelectItem>
                  <SelectItem value="recipe">Recipe</SelectItem>
                  <SelectItem value="photo">Photo/Artwork</SelectItem>
                  <SelectItem value="research">Research</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Title</label>
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Give your contribution a title"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Description</label>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Share your story, knowledge, or experience in detail..."
              rows={6}
              required
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Attach Files (Optional)</label>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition cursor-pointer">
              <Upload size={32} className="mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Drag and drop files here or click to browse</p>
              <p className="text-xs text-muted-foreground mt-1">Supported: Images, PDFs (Max 10MB)</p>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-semibold transition"
          >
            Submit Contribution
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting, you agree to our community guidelines and terms of service.
          </p>
        </form>
      )}
    </div>
  )
}
