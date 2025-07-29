"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Download, Heart, Share2, Eye } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"

const mockResources = [
  {
    id: 1,
    title: "Cinematic Light Leaks Pack",
    type: "Video",
    category: "Effects",
    downloads: 1250,
    likes: 89,
    author: "ProEditor",
    thumbnail: "/placeholder.svg?height=200&width=300",
    tags: ["cinematic", "light leaks", "effects", "transitions"],
  },
  {
    id: 2,
    title: "Minimal UI Graphics Set",
    type: "Image",
    category: "Graphics",
    downloads: 2100,
    likes: 156,
    author: "DesignMaster",
    thumbnail: "/placeholder.svg?height=200&width=300",
    tags: ["ui", "minimal", "graphics", "interface"],
  },
  {
    id: 3,
    title: "Color Grading LUTs Collection",
    type: "Template",
    category: "Color",
    downloads: 890,
    likes: 67,
    author: "ColorGuru",
    thumbnail: "/placeholder.svg?height=200&width=300",
    tags: ["color grading", "luts", "cinematic", "film"],
  },
  {
    id: 4,
    title: "Motion Graphics Templates",
    type: "Video",
    category: "Templates",
    downloads: 1560,
    likes: 112,
    author: "MotionPro",
    thumbnail: "/placeholder.svg?height=200&width=300",
    tags: ["motion graphics", "templates", "after effects", "animation"],
  },
  {
    id: 5,
    title: "Vintage Film Textures",
    type: "Image",
    category: "Textures",
    downloads: 780,
    likes: 45,
    author: "VintageVibe",
    thumbnail: "/placeholder.svg?height=200&width=300",
    tags: ["vintage", "film", "textures", "overlay"],
  },
  {
    id: 6,
    title: "Sound Effects Library",
    type: "Audio",
    category: "Audio",
    downloads: 2300,
    likes: 189,
    author: "AudioMaster",
    thumbnail: "/placeholder.svg?height=200&width=300",
    tags: ["sound effects", "audio", "sfx", "library"],
  },
]

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedType, setSelectedType] = useState("all")
  const [sortBy, setSortBy] = useState("popular")

  const filteredResources = mockResources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || resource.category.toLowerCase() === selectedCategory
    const matchesType = selectedType === "all" || resource.type.toLowerCase() === selectedType

    return matchesSearch && matchesCategory && matchesType
  })

  const sortedResources = [...filteredResources].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.downloads - a.downloads
      case "recent":
        return b.id - a.id
      case "likes":
        return b.likes - a.likes
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            Resources Library
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover thousands of premium editing resources created by our community of talented creators
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 mb-8 border border-orange-200">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search resources, tags, or creators..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-lg border-orange-200 focus:border-orange-400"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40 border-orange-200">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="effects">Effects</SelectItem>
                  <SelectItem value="graphics">Graphics</SelectItem>
                  <SelectItem value="templates">Templates</SelectItem>
                  <SelectItem value="textures">Textures</SelectItem>
                  <SelectItem value="audio">Audio</SelectItem>
                  <SelectItem value="color">Color</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-32 border-orange-200">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="video">Video</SelectItem>
                  <SelectItem value="image">Image</SelectItem>
                  <SelectItem value="template">Template</SelectItem>
                  <SelectItem value="audio">Audio</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-32 border-orange-200">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Popular</SelectItem>
                  <SelectItem value="recent">Recent</SelectItem>
                  <SelectItem value="likes">Most Liked</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {sortedResources.length} of {mockResources.length} resources
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedResources.map((resource) => (
            <Card
              key={resource.id}
              className="group hover:shadow-xl transition-all duration-300 border-orange-200 overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={resource.thumbnail || "/placeholder.svg"}
                  alt={resource.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">{resource.type}</Badge>
                </div>
                <div className="absolute top-3 right-3">
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
                <h3 className="font-semibold text-lg mb-2 text-gray-800 line-clamp-2">{resource.title}</h3>
                <p className="text-sm text-gray-600 mb-3">by {resource.author}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {resource.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-orange-200 text-orange-700">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span className="flex items-center">
                    <Download className="h-4 w-4 mr-1" />
                    {resource.downloads.toLocaleString()}
                  </span>
                  <span className="flex items-center">
                    <Heart className="h-4 w-4 mr-1" />
                    {resource.likes}
                  </span>
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-orange-300 text-orange-600 hover:bg-orange-50 bg-transparent"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-orange-300 text-orange-600 hover:bg-orange-50 bg-transparent"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-orange-300 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg bg-transparent"
          >
            Load More Resources
          </Button>
        </div>
      </div>
    </div>
  )
}
