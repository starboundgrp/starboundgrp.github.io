"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { Search, Play, Clock, BookOpen, Star, Upload } from "lucide-react"
import Image from "next/image"

const mockTutorials = [
  {
    id: 1,
    title: "Advanced Color Grading Techniques",
    instructor: "ColorMaster Pro",
    duration: "45 min",
    level: "Advanced",
    rating: 4.8,
    students: 1234,
    category: "Color Grading",
    thumbnail: "/placeholder.svg?height=200&width=300",
    description: "Master professional color grading techniques used in Hollywood films.",
    tags: ["Color Grading", "DaVinci Resolve", "Professional"],
  },
  {
    id: 2,
    title: "Motion Graphics Fundamentals",
    instructor: "AnimationExpert",
    duration: "32 min",
    level: "Beginner",
    rating: 4.6,
    students: 2156,
    category: "Motion Graphics",
    thumbnail: "/placeholder.svg?height=200&width=300",
    description: "Learn the basics of creating stunning motion graphics from scratch.",
    tags: ["Motion Graphics", "After Effects", "Beginner"],
  },
  {
    id: 3,
    title: "Cinematic Editing Workflow",
    instructor: "FilmEditor",
    duration: "58 min",
    level: "Intermediate",
    rating: 4.9,
    students: 987,
    category: "Video Editing",
    thumbnail: "/placeholder.svg?height=200&width=300",
    description: "Create cinematic sequences with professional editing techniques.",
    tags: ["Video Editing", "Premiere Pro", "Cinematic"],
  },
  {
    id: 4,
    title: "Typography Animation Mastery",
    instructor: "TypeAnimator",
    duration: "41 min",
    level: "Intermediate",
    rating: 4.7,
    students: 1567,
    category: "Typography",
    thumbnail: "/placeholder.svg?height=200&width=300",
    description: "Bring your text to life with advanced typography animation techniques.",
    tags: ["Typography", "Animation", "After Effects"],
  },
  {
    id: 5,
    title: "Sound Design for Video",
    instructor: "AudioPro",
    duration: "36 min",
    level: "Beginner",
    rating: 4.5,
    students: 3421,
    category: "Audio",
    thumbnail: "/placeholder.svg?height=200&width=300",
    description: "Learn how to create immersive soundscapes for your video projects.",
    tags: ["Sound Design", "Audio", "Mixing"],
  },
  {
    id: 6,
    title: "VFX Compositing Basics",
    instructor: "VFXMaster",
    duration: "52 min",
    level: "Advanced",
    rating: 4.8,
    students: 876,
    category: "VFX",
    thumbnail: "/placeholder.svg?height=200&width=300",
    description: "Master the art of visual effects compositing and integration.",
    tags: ["VFX", "Compositing", "After Effects"],
  },
]

const featuredTutorials = mockTutorials.slice(0, 3)

export default function TutorialLabPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")

  const filteredTutorials = mockTutorials.filter((tutorial) => {
    const matchesSearch =
      tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutorial.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutorial.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || tutorial.category === selectedCategory
    const matchesLevel = selectedLevel === "all" || tutorial.level === selectedLevel

    return matchesSearch && matchesCategory && matchesLevel
  })

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800 border-green-200"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Advanced":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            Tutorial Lab
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Master new skills with our comprehensive video tutorials. Learn from industry experts and elevate your
            creative projects.
          </p>
        </div>

        {/* Featured Tutorials */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Featured Tutorials</h2>
            <Button variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50 bg-transparent">
              <Upload className="mr-2 h-4 w-4" />
              Upload Tutorial
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredTutorials.map((tutorial) => (
              <Card
                key={tutorial.id}
                className="group hover:shadow-lg transition-all duration-300 border-orange-200 bg-white/80 backdrop-blur-sm"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={tutorial.thumbnail || "/placeholder.svg"}
                    alt={tutorial.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="h-8 w-8 text-gray-800 ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">Featured</Badge>
                  </div>
                  <div className="absolute bottom-2 right-2">
                    <Badge className="bg-black/70 text-white">
                      <Clock className="mr-1 h-3 w-3" />
                      {tutorial.duration}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 text-gray-800 line-clamp-2">{tutorial.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">by {tutorial.instructor}</p>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{tutorial.rating}</span>
                      <span className="text-sm text-gray-500">({tutorial.students})</span>
                    </div>
                    <Badge className={getLevelColor(tutorial.level)}>{tutorial.level}</Badge>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Search and Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 mb-8 border border-orange-200">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search tutorials, instructors, or topics..."
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
                <SelectItem value="Motion Graphics">Motion Graphics</SelectItem>
                <SelectItem value="Video Editing">Video Editing</SelectItem>
                <SelectItem value="Typography">Typography</SelectItem>
                <SelectItem value="Audio">Audio</SelectItem>
                <SelectItem value="VFX">VFX</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredTutorials.length} of {mockTutorials.length} tutorials
          </p>
        </div>

        {/* Tutorials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTutorials.map((tutorial) => (
            <Card
              key={tutorial.id}
              className="group hover:shadow-lg transition-all duration-300 border-orange-200 bg-white/80 backdrop-blur-sm"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={tutorial.thumbnail || "/placeholder.svg"}
                  alt={tutorial.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="h-6 w-6 text-gray-800 ml-0.5" />
                  </div>
                </div>
                <div className="absolute top-2 left-2">
                  <Badge variant="secondary" className="bg-white/90 text-gray-700">
                    {tutorial.category}
                  </Badge>
                </div>
                <div className="absolute bottom-2 right-2">
                  <Badge className="bg-black/70 text-white">
                    <Clock className="mr-1 h-3 w-3" />
                    {tutorial.duration}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 text-gray-800 line-clamp-2">{tutorial.title}</h3>
                <p className="text-sm text-gray-600 mb-2">by {tutorial.instructor}</p>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">{tutorial.description}</p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {tutorial.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-orange-200 text-orange-700">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{tutorial.rating}</span>
                    <span className="text-sm text-gray-500">({tutorial.students})</span>
                  </div>
                  <Badge className={getLevelColor(tutorial.level)}>{tutorial.level}</Badge>
                </div>

                <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Tutorial
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTutorials.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <BookOpen className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No tutorials found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or browse all tutorials.</p>
          </div>
        )}
      </div>
    </div>
  )
}
