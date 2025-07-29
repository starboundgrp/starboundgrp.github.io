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
import { Progress } from "@/components/ui/progress"
import {
  Upload,
  FileImage,
  FileVideo,
  FileText,
  Music,
  X,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  ArrowRight,
} from "lucide-react"
import { Header } from "@/components/header"

export default function UploadPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    type: "",
    tags: "",
    license: "",
    price: "free",
  })
  const [isUploading, setIsUploading] = useState(false)
  const [uploadComplete, setUploadComplete] = useState(false)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    setSelectedFiles(files)
  }

  const removeFile = (index: number) => {
    setSelectedFiles((files) => files.filter((_, i) => i !== index))
  }

  const handleSubmit = async () => {
    setIsUploading(true)

    // Simulate upload progress
    for (let i = 0; i <= 100; i += 10) {
      setUploadProgress(i)
      await new Promise((resolve) => setTimeout(resolve, 200))
    }

    setIsUploading(false)
    setUploadComplete(true)
    setCurrentStep(3)
  }

  const getFileIcon = (file: File) => {
    if (file.type.startsWith("image/")) return <FileImage className="h-8 w-8 text-blue-500" />
    if (file.type.startsWith("video/")) return <FileVideo className="h-8 w-8 text-purple-500" />
    if (file.type.startsWith("audio/")) return <Music className="h-8 w-8 text-green-500" />
    return <FileText className="h-8 w-8 text-gray-500" />
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            Upload Resources
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Share your creative work with the Starbound community and help fellow creators
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    currentStep >= step
                      ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step === 3 && uploadComplete ? <CheckCircle className="h-6 w-6" /> : step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-16 h-1 mx-2 ${
                      currentStep > step ? "bg-gradient-to-r from-yellow-500 to-orange-500" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Step 1: File Upload */}
          {currentStep === 1 && (
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-800">Step 1: Upload Files</CardTitle>
                <CardDescription>Select the files you want to share with the community</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* File Upload Area */}
                <div className="border-2 border-dashed border-orange-300 rounded-lg p-8 text-center hover:border-orange-400 transition-colors">
                  <Upload className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Drag and drop your files here</h3>
                  <p className="text-gray-600 mb-4">or click to browse your computer</p>
                  <input
                    type="file"
                    multiple
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                    accept="image/*,video/*,audio/*,.psd,.ai,.ae"
                  />
                  <label htmlFor="file-upload">
                    <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white cursor-pointer">
                      Choose Files
                    </Button>
                  </label>
                  <p className="text-sm text-gray-500 mt-2">
                    Supported formats: Images, Videos, Audio, PSD, AI, AE templates
                  </p>
                </div>

                {/* Selected Files */}
                {selectedFiles.length > 0 && (
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800">Selected Files ({selectedFiles.length})</h4>
                    <div className="space-y-2">
                      {selectedFiles.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-white rounded-lg border border-orange-200"
                        >
                          <div className="flex items-center space-x-3">
                            {getFileIcon(file)}
                            <div>
                              <p className="font-medium text-gray-800">{file.name}</p>
                              <p className="text-sm text-gray-600">{formatFileSize(file.size)}</p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-end">
                  <Button
                    onClick={() => setCurrentStep(2)}
                    disabled={selectedFiles.length === 0}
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
                  >
                    Next Step
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Resource Details */}
          {currentStep === 2 && (
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-800">Step 2: Resource Details</CardTitle>
                <CardDescription>Provide information about your resource to help others discover it</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Resource Title *</Label>
                    <Input
                      id="title"
                      placeholder="Enter a descriptive title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="border-orange-200 focus:border-orange-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                    >
                      <SelectTrigger className="border-orange-200">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="effects">Visual Effects</SelectItem>
                        <SelectItem value="graphics">Graphics & UI</SelectItem>
                        <SelectItem value="templates">Templates</SelectItem>
                        <SelectItem value="textures">Textures & Overlays</SelectItem>
                        <SelectItem value="audio">Audio & Music</SelectItem>
                        <SelectItem value="color">Color Grading</SelectItem>
                        <SelectItem value="transitions">Transitions</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="type">Resource Type *</Label>
                    <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                      <SelectTrigger className="border-orange-200">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="video">Video File</SelectItem>
                        <SelectItem value="image">Image/Photo</SelectItem>
                        <SelectItem value="template">Project Template</SelectItem>
                        <SelectItem value="audio">Audio File</SelectItem>
                        <SelectItem value="preset">Preset/LUT</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="license">License Type *</Label>
                    <Select
                      value={formData.license}
                      onValueChange={(value) => setFormData({ ...formData, license: value })}
                    >
                      <SelectTrigger className="border-orange-200">
                        <SelectValue placeholder="Select license" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="commercial">Commercial Use</SelectItem>
                        <SelectItem value="personal">Personal Use Only</SelectItem>
                        <SelectItem value="attribution">Attribution Required</SelectItem>
                        <SelectItem value="royalty-free">Royalty Free</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your resource, how to use it, and what makes it special..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="min-h-32 border-orange-200 focus:border-orange-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <Input
                    id="tags"
                    placeholder="Enter tags separated by commas (e.g., cinematic, light leaks, transitions)"
                    value={formData.tags}
                    onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                    className="border-orange-200 focus:border-orange-400"
                  />
                  <p className="text-sm text-gray-600">
                    Tags help others discover your resource. Use relevant keywords.
                  </p>
                </div>

                <div className="space-y-4">
                  <Label>Pricing</Label>
                  <div className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="free"
                        checked={formData.price === "free"}
                        onCheckedChange={() => setFormData({ ...formData, price: "free" })}
                      />
                      <Label htmlFor="free">Free</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="premium"
                        checked={formData.price === "premium"}
                        onCheckedChange={() => setFormData({ ...formData, price: "premium" })}
                      />
                      <Label htmlFor="premium">Premium</Label>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-800">Review Process</h4>
                      <p className="text-sm text-yellow-700">
                        All uploads go through a manual review process to ensure quality and compliance. You'll be
                        notified once your resource is approved or if any changes are needed.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(1)}
                    className="border-orange-300 text-orange-600 hover:bg-orange-50"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    disabled={
                      !formData.title ||
                      !formData.category ||
                      !formData.type ||
                      !formData.description ||
                      !formData.license
                    }
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
                  >
                    Submit for Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Upload Complete */}
          {currentStep === 3 && (
            <Card className="border-orange-200">
              <CardContent className="text-center py-12">
                {isUploading ? (
                  <div className="space-y-6">
                    <Upload className="h-16 w-16 text-orange-500 mx-auto animate-bounce" />
                    <h3 className="text-2xl font-bold text-gray-800">Uploading Your Resource</h3>
                    <div className="max-w-md mx-auto">
                      <Progress value={uploadProgress} className="h-3" />
                      <p className="text-sm text-gray-600 mt-2">{uploadProgress}% complete</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                    <h3 className="text-2xl font-bold text-gray-800">Upload Successful!</h3>
                    <p className="text-gray-600 max-w-md mx-auto">
                      Your resource has been submitted for review. You'll receive an email notification once it's been
                      approved and is live on the platform.
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md mx-auto">
                      <h4 className="font-semibold text-blue-800 mb-2">What happens next?</h4>
                      <ul className="text-sm text-blue-700 space-y-1 text-left">
                        <li>• Our team will review your submission within 24-48 hours</li>
                        <li>• You'll receive an email with the review status</li>
                        <li>• If approved, your resource will go live immediately</li>
                        <li>• You can track the status in your profile</li>
                      </ul>
                    </div>
                    <div className="flex justify-center space-x-4">
                      <Button
                        onClick={() => {
                          setCurrentStep(1)
                          setSelectedFiles([])
                          setFormData({
                            title: "",
                            description: "",
                            category: "",
                            type: "",
                            tags: "",
                            license: "",
                            price: "free",
                          })
                          setUploadComplete(false)
                          setUploadProgress(0)
                        }}
                        variant="outline"
                        className="border-orange-300 text-orange-600 hover:bg-orange-50"
                      >
                        Upload Another
                      </Button>
                      <Button
                        onClick={() => (window.location.href = "/profile")}
                        className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
                      >
                        View Profile
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
