"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Search, Play, Clock, User, Star, Upload } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"

const mockTutorials = [
  {
    id: 1,
    title: "Advanced Color Grading Techniques",
    instructor: "ColorMaster Pro",
    duration: "45 min",
    level: "Advanced",
    category: "Color Grading",
    rating: 4.9,
    views: 12500,
    thumbnail: "/placeholder.svg?height=200&width=300",
    description:
      "Master professional color grading techniques used in Hollywood films. Learn advanced color theory, LUT creation, and cinematic looks.",
    tags: ["color grading", "advanced", "cinematic", "professional"],
    featured: true,
  },
  {
    id: 2,
    title: "Motion Graphics Fundamentals",
    instructor: "MotionDesigner",
    duration: "32 min",
    level: "Beginner",
    category: "Motion Graphics",
    rating: 4.7,
    views: 8900,
    thumbnail: "/placeholder.svg?height=200&width=300",
    description:
      "Learn the basics of motion graphics design. Perfect for beginners starting their journey in animation and motion design.",
    tags: ["motion graphics", "beginner", "animation", "after effects"],
    featured: false,
  },
  {
    id: 3,
    title: "Professional Video Editing Workflow",
    instructor: "EditPro",
    duration: "28 min",
    level: "Intermediate",
    category: "Video Editing",
    rating: 4.8,
    views: 15600,
    thumbnail: "/placeholder.svg?height=200&width=300",
    description:
      "Optimize your video editing workflow for maximum efficiency. Learn organization, shortcuts, and professional techniques.",
    tags: ["video editing", "workflow", "professional", "efficiency"],
    featured: true,
  },
  {
    id: 4,
    title: "Audio Mixing for Video",
    instructor: "AudioExpert",
    duration: "38 min",
    level: "Intermediate",
    category: "Audio",
    rating: 4.6,
    views: 6700,
    thumbnail: "/placeholder.svg?height=200&width=300",
    description:
      "Master audio mixing techniques specifically for video content. Learn EQ, compression, and spatial audio.",
    tags: ["audio", "mixing", "video", "sound design"],
    featured: false,
  },
  {
    id: 5,
    title: "Creating Cinematic Transitions",
    instructor: "TransitionMaster",
    duration: "22 min",
    level: "Intermediate",
    category: "Effects",
    rating: 4.9,
    views: 11200,
    thumbnail: "/placeholder.svg?height=200&width=300",
    description:
      "Create stunning cinematic transitions that elevate your video content. Learn advanced masking and keyframe techniques.",
    tags: ["transitions", "cinematic", "effects", "advanced"],
    featured: false,
  },
  {
    id: 6,
    title: "UI Animation Principles",
    instructor: "UIAnimator",
    duration: "35 min",
    level: "Beginner",
    category: "UI/UX",
    rating: 4.8,
    views: 9800,
    thumbnail: "/placeholder.svg?height=200&width=300",
    description:
      "Learn the fundamental principles of UI animation. Create smooth, purposeful animations that enhance user experience.",
    tags: ["ui animation", "principles", "ux", "design"],
    featured: true,
  },
]

export default function TutorialLabPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [sortBy, setSortBy] = useState("popular")

  const filteredTutorials = mockTutorials.filter((tutorial) => {
    const matchesSearch =
      tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutorial.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutorial.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory =
      selectedCategory === "all" || tutorial.category.toLowerCase().includes(selectedCategory.toLowerCase())
    const matchesLevel = selectedLevel === "all" || tutorial.level.toLowerCase() === selectedLevel

    return matchesSearch && matchesCategory && matchesLevel
  })

  const sortedTutorials = [...filteredTutorials].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.views - a.views
      case "rating":
        return b.rating - a.rating
      case "recent":
        return b.id - a.id
      case "duration":
        return Number.parseInt(a.duration) - Number.parseInt(b.duration)
      default:
        return 0
    }
  })

  const featuredTutorials = mockTutorials.filter((tutorial) => tutorial.featured)

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "beginner":
        return "bg-green-100 text-green-800"
      case "intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            Tutorial Lab
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Master new skills with expert-led tutorials and share your knowledge with the community
          </p>
        </div>

        {/* Featured Tutorials */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Featured Tutorials</h2>
            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
              <Star className="h-3 w-3 mr-1" />
              Editor's Choice
            </Badge>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTutorials.map((tutorial) => (
              <Card
                key={tutorial.id}
                className="group hover:shadow-xl transition-all duration-300 border-orange-200 overflow-hidden"
              >
                <div className="relative">
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
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">Featured</Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-black/70 text-white">
                      <Clock className="h-3 w-3 mr-1" />
                      {tutorial.duration}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800 line-clamp-2">{tutorial.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {tutorial.instructor}
                  </p>

                  <div className="flex items-center justify-between mb-3">
                    <Badge className={getLevelColor(tutorial.level)}>{tutorial.level}</Badge>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      {tutorial.rating}
                      <span className="ml-2">({tutorial.views.toLocaleString()} views)</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Tutorial
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Search and Filters */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 mb-8 border border-orange-200">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search tutorials, instructors, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-lg border-orange-200 focus:border-orange-400"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48 border-orange-200">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="color grading">Color Grading</SelectItem>
                  <SelectItem value="motion graphics">Motion Graphics</SelectItem>
                  <SelectItem value="video editing">Video Editing</SelectItem>
                  <SelectItem value="audio">Audio</SelectItem>
                  <SelectItem value="effects">Effects</SelectItem>
                  <SelectItem value="ui/ux">UI/UX</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-36 border-orange-200">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-36 border-orange-200">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Popular</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="recent">Recent</SelectItem>
                  <SelectItem value="duration">Duration</SelectItem>
                </SelectContent>
              </Select>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Tutorial
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg">
                  <DialogHeader>
                    <DialogTitle>Upload Your Tutorial</DialogTitle>
                    <DialogDescription>Share your knowledge with the Starbound community</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="tutorial-title">Tutorial Title</Label>
                      <Input id="tutorial-title" placeholder="Enter tutorial title" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tutorial-description">Description</Label>
                      <Textarea id="tutorial-description" placeholder="Describe what your tutorial covers" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tutorial-video">Video File</Label>
                      <Input id="tutorial-video" type="file" accept="video/*" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="tutorial-category">Category</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="color-grading">Color Grading</SelectItem>
                            <SelectItem value="motion-graphics">Motion Graphics</SelectItem>
                            <SelectItem value="video-editing">Video Editing</SelectItem>
                            <SelectItem value="audio">Audio</SelectItem>
                            <SelectItem value="effects">Effects</SelectItem>
                            <SelectItem value="ui-ux">UI/UX</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="tutorial-level">Difficulty Level</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">Beginner</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
                      Upload Tutorial
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {sortedTutorials.length} of {mockTutorials.length} tutorials
          </p>
        </div>

        {/* All Tutorials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedTutorials.map((tutorial) => (
            <Card
              key={tutorial.id}
              className="group hover:shadow-xl transition-all duration-300 border-orange-200 overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={tutorial.thumbnail || "/placeholder.svg"}
                  alt={tutorial.title}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="h-6 w-6 text-gray-800 ml-0.5" />
                  </div>
                </div>
                <div className="absolute top-2 right-2">
                  <Badge className="bg-black/70 text-white text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    {tutorial.duration}
                  </Badge>
                </div>
                {tutorial.featured && (
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs">
                      Featured
                    </Badge>
                  </div>
                )}
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-base mb-2 text-gray-800 line-clamp-2">{tutorial.title}</h3>
                <p className="text-sm text-gray-600 mb-2 flex items-center">
                  <User className="h-3 w-3 mr-1" />
                  {tutorial.instructor}
                </p>

                <div className="flex items-center justify-between mb-3">
                  <Badge className={`${getLevelColor(tutorial.level)} text-xs`}>{tutorial.level}</Badge>
                  <div className="flex items-center text-xs text-gray-600">
                    <Star className="h-3 w-3 text-yellow-500 mr-1" />
                    {tutorial.rating}
                  </div>
                </div>

                <p className="text-xs text-gray-500 mb-3">{tutorial.views.toLocaleString()} views</p>

                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
                >
                  <Play className="mr-2 h-3 w-3" />
                  Watch
                </Button>
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
            Load More Tutorials
          </Button>
        </div>
      </div>
    </div>
  )
}
