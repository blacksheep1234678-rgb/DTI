"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, CheckCircle, ImageIcon, FileText, X, Sparkles } from "lucide-react"

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
  const [files, setFiles] = useState<File[]>([])
  const [currentStep, setCurrentStep] = useState(1)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", culture: "", type: "", title: "", description: "" })
      setFiles([])
      setCurrentStep(1)
    }, 4000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  const steps = [
    { num: 1, label: "About You" },
    { num: 2, label: "Your Story" },
    { num: 3, label: "Media" },
  ]

  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden">
      {/* Header with step indicator */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 border-b border-border">
        <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Share Your Contribution</h2>
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.num} className="flex items-center">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                    currentStep >= step.num ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {currentStep > step.num ? <CheckCircle size={18} /> : step.num}
                </div>
                <span
                  className={`text-sm font-medium hidden sm:block ${
                    currentStep >= step.num ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={`w-12 md:w-24 h-0.5 mx-4 ${currentStep > step.num ? "bg-primary" : "bg-border"}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {submitted ? (
        <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
          <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
            <CheckCircle size={40} className="text-secondary" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Thank You!</h3>
          <p className="text-muted-foreground mb-6 max-w-md">
            Your contribution has been submitted for review. We'll notify you via email once it's published.
          </p>
          <div className="flex items-center gap-2 text-sm text-primary">
            <Sparkles size={16} />
            <span>You're helping preserve cultural heritage!</span>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-6 md:p-8">
          {/* Step 1: About You */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="h-12"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="h-12"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Culture/Region *</label>
                  <Select
                    value={formData.culture}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, culture: value }))}
                  >
                    <SelectTrigger className="h-12">
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
                  <label className="block text-sm font-semibold text-foreground mb-2">Contribution Type *</label>
                  <Select
                    value={formData.type}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, type: value }))}
                  >
                    <SelectTrigger className="h-12">
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

              <div className="flex justify-end pt-4">
                <Button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  disabled={!formData.name || !formData.email}
                  className="px-8"
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Your Story */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Title *</label>
                <Input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Give your contribution a compelling title"
                  className="h-12"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Your Story *</label>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Share your story, knowledge, or experience in detail. The more you share, the more impact your contribution will have..."
                  rows={10}
                  className="resize-none"
                  required
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Tip: Include personal experiences, historical context, and why this matters to you.
                </p>
              </div>

              <div className="flex justify-between pt-4">
                <Button type="button" variant="outline" onClick={() => setCurrentStep(1)}>
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  disabled={!formData.title || !formData.description}
                  className="px-8"
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Media */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Attach Files (Optional)</label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-border rounded-2xl p-8 text-center hover:border-primary hover:bg-primary/5 transition cursor-pointer"
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Upload size={28} className="text-muted-foreground" />
                  </div>
                  <p className="font-medium text-foreground mb-1">Drop files here or click to browse</p>
                  <p className="text-sm text-muted-foreground">Images, PDFs up to 10MB each</p>
                </div>

                {files.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {files.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-muted rounded-xl px-4 py-3">
                        <div className="flex items-center gap-3">
                          {file.type.startsWith("image/") ? (
                            <ImageIcon size={18} className="text-primary" />
                          ) : (
                            <FileText size={18} className="text-primary" />
                          )}
                          <span className="text-sm text-foreground truncate max-w-[200px]">{file.name}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-muted-foreground hover:text-foreground transition"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="bg-muted/50 rounded-xl p-4">
                <h4 className="font-medium text-foreground mb-2">Review your submission</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>
                    <strong>Title:</strong> {formData.title}
                  </p>
                  <p>
                    <strong>Type:</strong> {formData.type || "Not selected"}
                  </p>
                  <p>
                    <strong>Culture:</strong> {formData.culture || "Not selected"}
                  </p>
                  <p>
                    <strong>Files:</strong> {files.length} attached
                  </p>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <Button type="button" variant="outline" onClick={() => setCurrentStep(2)}>
                  Back
                </Button>
                <Button type="submit" className="px-8">
                  Submit Contribution
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree to our community guidelines and terms of service.
              </p>
            </div>
          )}
        </form>
      )}
    </div>
  )
}
