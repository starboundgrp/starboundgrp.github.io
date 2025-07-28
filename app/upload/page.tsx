"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Header } from "@/components/header"
import { Upload, AlertCircle, CheckCircle, X } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function UploadPage() {
  const [uploadStep, setUploadStep] = useState(1)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    type: "",
    tags: "",
    license: "",
    file: null as File | null,
    thumbnail: null as File | null,
  })
  const [dragActive, setDragActive] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData({ ...formData, file: e.dataTransfer.files[0] })
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] })
    }
  }

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, thumbnail: e.target.files[0] })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate upload process
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    setUploadStep(3)
  }

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      category: "",
      type: "",
      tags: "",
      license: "",
      file: null,
      thumbnail: null,
    })
    setUploadStep(1)
    setSubmitSuccess(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            Upload Resource
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Share your creative assets with the Starbound community. All uploads go through a review process to ensure
            quality.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${uploadStep >= 1 ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white" : "bg-gray-200 text-gray-500"}`}
            >
              1
            </div>
            <div
              className={`w-16 h-1 ${uploadStep >= 2 ? "bg-gradient-to-r from-yellow-500 to-orange-500" : "bg-gray-200"}`}
            ></div>
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${uploadStep >= 2 ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white" : "bg-gray-200 text-gray-500"}`}
            >
              2
            </div>
            <div
              className={`w-16 h-1 ${uploadStep >= 3 ? "bg-gradient-to-r from-yellow-500 to-orange-500" : "bg-gray-200"}`}
            ></div>
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${uploadStep >= 3 ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white" : "bg-gray-200 text-gray-500"}`}
            >
              3
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          {uploadStep === 1 && (
            <Card className="border-orange-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-orange-800">Upload Your File</CardTitle>
                <CardDescription>
                  Select the main file you want to share. Supported formats: Images (JPG, PNG, GIF), Videos (MP4, MOV),
                  Audio (MP3, WAV), Templates (PSD, AE)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                    dragActive
                      ? "border-orange-400 bg-orange-50"
                      : formData.file
                        ? "border-green-400 bg-green-50"
                        : "border-gray-300 hover:border-orange-300"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  {formData.file ? (
                    <div className="space-y-4">
                      <CheckCircle className="h-12 w-12 text-green-500 mx-auto" />
                      <div>
                        <p className="font-semibold text-green-700">{formData.file.name}</p>
                        <p className="text-sm text-gray-500">{(formData.file.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setFormData({ ...formData, file: null })}
                        className="border-red-300 text-red-600 hover:bg-red-50"
                      >
                        <X className="h-4 w-4 mr-2" />
                        Remove
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto" />
                      <div>
                        <p className="text-lg font-semibold text-gray-700">Drag and drop your file here</p>
                        <p className="text-gray-500">or click to browse</p>
                      </div>
                      <Input
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        id="file-upload"
                        accept="image/*,video/*,audio/*,.psd,.aep"
                      />
                      <Label htmlFor="file-upload">
                        <Button
                          type="button"
                          className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
                          asChild
                        >
                          <span>Choose File</span>
                        </Button>
                      </Label>
                    </div>
                  )}
                </div>

                {formData.file && (
                  <div className="mt-6">
                    <Button
                      onClick={() => setUploadStep(2)}
                      className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
                    >
                      Continue to Details
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {uploadStep === 2 && (
            <Card className="border-orange-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-orange-800">Resource Details</CardTitle>
                <CardDescription>Provide information about your resource to help others discover it.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      placeholder="Enter a descriptive title for your resource"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your resource, how it can be used, and any special features"
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) => setFormData({ ...formData, category: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="backgrounds">Backgrounds</SelectItem>
                          <SelectItem value="color-grading">Color Grading</SelectItem>
                          <SelectItem value="motion-graphics">Motion Graphics</SelectItem>
                          <SelectItem value="typography">Typography</SelectItem>
                          <SelectItem value="audio">Audio</SelectItem>
                          <SelectItem value="overlays">Overlays</SelectItem>
                          <SelectItem value="templates">Templates</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="type">Type *</Label>
                      <Select
                        value={formData.type}
                        onValueChange={(value) => setFormData({ ...formData, type: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="image">Image</SelectItem>
                          <SelectItem value="video">Video</SelectItem>
                          <SelectItem value="audio">Audio</SelectItem>
                          <SelectItem value="template">Template</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tags">Tags</Label>
                    <Input
                      id="tags"
                      placeholder="Enter tags separated by commas (e.g., cinematic, dark, moody)"
                      value={formData.tags}
                      onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="thumbnail">Thumbnail/Preview Image</Label>
                    <Input id="thumbnail" type="file" accept="image/*" onChange={handleThumbnailChange} />
                    <p className="text-sm text-gray-500">
                      Upload a preview image to help users understand your resource
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="license">License *</Label>
                    <Select
                      value={formData.license}
                      onValueChange={(value) => setFormData({ ...formData, license: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select license" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="commercial">Commercial Use Allowed</SelectItem>
                        <SelectItem value="personal">Personal Use Only</SelectItem>
                        <SelectItem value="attribution">Attribution Required</SelectItem>
                        <SelectItem value="creative-commons">Creative Commons</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      Your resource will be reviewed by our team before being published. This usually takes 1-3 business
                      days.
                    </AlertDescription>
                  </Alert>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the terms of service and confirm that I have the right to share this content
                    </Label>
                  </div>

                  <div className="flex space-x-4">
                    <Button type="button" variant="outline" onClick={() => setUploadStep(1)} className="flex-1">
                      Back
                    </Button>
                    <Button
                      type="submit"
                      disabled={
                        isSubmitting ||
                        !formData.title ||
                        !formData.description ||
                        !formData.category ||
                        !formData.type ||
                        !formData.license
                      }
                      className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
                    >
                      {isSubmitting ? "Submitting..." : "Submit for Review"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {uploadStep === 3 && submitSuccess && (
            <Card className="border-green-200 bg-green-50/80 backdrop-blur-sm">
              <CardContent className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-green-800 mb-4">Upload Successful!</h2>
                <p className="text-green-700 mb-6">
                  Your resource "{formData.title}" has been submitted for review. You'll receive an email notification
                  once it's approved and published.
                </p>
                <div className="space-y-4">
                  <div className="bg-white/80 rounded-lg p-4 text-left">
                    <h3 className="font-semibold text-gray-800 mb-2">What happens next?</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Our team will review your submission within 1-3 business days</li>
                      <li>• You'll receive an email with the review status</li>
                      <li>• If approved, your resource will be published on the platform</li>
                      <li>• You can track your uploads in your profile page</li>
                    </ul>
                  </div>
                  <div className="flex space-x-4">
                    <Button
                      onClick={resetForm}
                      className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
                    >
                      Upload Another Resource
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-orange-300 text-orange-600 hover:bg-orange-50 bg-transparent"
                      asChild
                    >
                      <a href="/profile">View My Profile</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
