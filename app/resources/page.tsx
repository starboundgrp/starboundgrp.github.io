"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { Search, Download, Heart, Share2, Eye, ImageIcon, Video, FileText, Palette } from "lucide-react"
import Image from "next/image"

const mockResources = [
  {
    id: 1,
    title: "Cinematic LUT Pack",
    type: "Video",
    category: "Color Grading",
    downloads: 1234,
    likes: 89,
    author: "ProEditor",
    thumbnail: "/placeholder.svg?height=200&width=300",
    tags: ["LUT", "Cinematic", "Color Grading"],
  },
  {
    id: 2,
    title: "Abstract Backgrounds",
    type: "Image",
    category: "Backgrounds",
    downloads: 2156,
    likes: 156,
    author: "DesignMaster",
    thumbnail: "/placeholder.svg?height=200&width=300",
    tags: ["Abstract", "Backgrounds", "Colorful"],
  },
  {
    id: 3,
    title: "Motion Graphics Pack",
    type: "Video",
    category: "Motion Graphics",
    downloads: 987,
    likes: 67,
    author: "AnimationPro",
    thumbnail: "/placeholder.svg?height=200&width=300",
    tags: ["Motion", "Graphics", "Animation"],
  },
  {
    id: 4,
    title: "Typography Templates",
    type: "Template",
    category: "Typography",
    downloads: 1567,
    likes: 123,
    author: "TypeExpert",
    thumbnail: "/placeholder.svg?height=200&width=300",
    tags: ["Typography", "Templates", "Design"],
  },
  {
    id: 5,
    title: "Sound Effects Library",
    type: "Audio",
    category: "Audio",
    downloads: 3421,
    likes: 234,
    author: "SoundDesigner",
    thumbnail: "/placeholder.svg?height=200&width=300",
    tags: ["Audio", "SFX", "Sound Design"],
  },
  {
    id: 6,
    title: "Vintage Film Overlays",
    type: "Video",
    category: "Overlays",
    downloads: 876,
    likes: 45,
    author: "VintageCreator",
    thumbnail: "/placeholder.svg?height=200&width=300",
    tags: ["Vintage", "Film", "Overlays"],
  },
]

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedType, setSelectedType] = useState("all")

  const filteredResources = mockResources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory
    const matchesType = selectedType === "all" || resource.type === selectedType

    return matchesSearch && matchesCategory && matchesType
  })

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Video":
        return <Video className="h-4 w-4" />
      case "Image":
        return <ImageIcon className="h-4 w-4" />
      case "Template":
        return <FileText className="h-4 w-4" />
      case "Audio":
        return <Palette className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            Premium Resources
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover high-quality assets for your creative projects. Download premium images, videos, templates, and
            more.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 mb-8 border border-orange-200">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search resources, tags, or creators..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Color Grading">Color Grading</SelectItem>
                <SelectItem value="Backgrounds">Backgrounds</SelectItem>
                <SelectItem value="Motion Graphics">Motion Graphics</SelectItem>
                <SelectItem value="Typography">Typography</SelectItem>
                <SelectItem value="Audio">Audio</SelectItem>
                <SelectItem value="Overlays">Overlays</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Video">Video</SelectItem>
                <SelectItem value="Image">Image</SelectItem>
                <SelectItem value="Template">Template</SelectItem>
                <SelectItem value="Audio">Audio</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredResources.length} of {mockResources.length} resources
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredResources.map((resource) => (
            <Card
              key={resource.id}
              className="group hover:shadow-lg transition-all duration-300 border-orange-200 bg-white/80 backdrop-blur-sm"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={resource.thumbnail || "/placeholder.svg"}
                  alt={resource.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2">
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white flex items-center gap-1">
                    {getTypeIcon(resource.type)}
                    {resource.type}
                  </Badge>
                </div>
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="bg-white/90 text-gray-700">
                    {resource.category}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Button size="sm" className="bg-white text-gray-800 hover:bg-gray-100">
                    <Eye className="mr-2 h-4 w-4" />
                    Preview
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 text-gray-800">{resource.title}</h3>
                <p className="text-sm text-gray-600 mb-2">by {resource.author}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {resource.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-orange-200 text-orange-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Download className="h-4 w-4" />
                    {resource.downloads.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    {resource.likes}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="ghost" className="text-gray-600 hover:text-red-500">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-gray-600 hover:text-blue-500">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
                  >
                    <Download className="mr-1 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No resources found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or browse all resources.</p>
          </div>
        )}
      </div>
    </div>
  )
}
