"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Upload, Download, Heart, Eye, Award, Star, Clock, CheckCircle, XCircle, AlertCircle, Edit } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"

const mockUserData = {
  name: "John Creator",
  email: "john@example.com",
  joinDate: "January 2024",
  avatar: "/placeholder-user.jpg",
  stats: {
    uploads: 24,
    downloads: 15420,
    likes: 892,
    views: 45600,
  },
  level: "Pro Creator",
  nextLevel: "Master Creator",
  levelProgress: 75,
}

const mockUploads = [
  {
    id: 1,
    title: "Cinematic Light Leaks Pack",
    status: "approved",
    uploadDate: "2024-01-15",
    downloads: 1250,
    likes: 89,
    views: 3400,
    thumbnail: "/placeholder.svg?height=150&width=200",
  },
  {
    id: 2,
    title: "Motion Graphics Templates",
    status: "pending",
    uploadDate: "2024-01-20",
    downloads: 0,
    likes: 0,
    views: 0,
    thumbnail: "/placeholder.svg?height=150&width=200",
  },
  {
    id: 3,
    title: "Color Grading LUTs",
    status: "rejected",
    uploadDate: "2024-01-18",
    downloads: 0,
    likes: 0,
    views: 0,
    thumbnail: "/placeholder.svg?height=150&width=200",
    rejectionReason:
      "File quality doesn't meet our standards. Please ensure all LUTs are properly calibrated and include preview images.",
  },
  {
    id: 4,
    title: "Vintage Film Textures",
    status: "approved",
    uploadDate: "2024-01-10",
    downloads: 780,
    likes: 45,
    views: 2100,
    thumbnail: "/placeholder.svg?height=150&width=200",
  },
]

const mockFavorites = [
  {
    id: 1,
    title: "Professional Transitions Pack",
    author: "ProEditor",
    thumbnail: "/placeholder.svg?height=150&width=200",
    downloads: 2300,
    likes: 156,
  },
  {
    id: 2,
    title: "Minimal UI Elements",
    author: "DesignMaster",
    thumbnail: "/placeholder.svg?height=150&width=200",
    downloads: 1890,
    likes: 234,
  },
  {
    id: 3,
    title: "Ambient Sound Library",
    author: "AudioPro",
    thumbnail: "/placeholder.svg?height=150&width=200",
    downloads: 1560,
    likes: 98,
  },
]

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview")

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "rejected":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return <AlertCircle className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800 border-green-200"
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "rejected":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <Card className="border-orange-200 mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <Avatar className="w-32 h-32">
                <AvatarImage src={mockUserData.avatar || "/placeholder.svg"} alt={mockUserData.name} />
                <AvatarFallback className="text-2xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                  {mockUserData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">{mockUserData.name}</h1>
                    <p className="text-gray-600 mb-2">{mockUserData.email}</p>
                    <p className="text-sm text-gray-500">Member since {mockUserData.joinDate}</p>
                  </div>
                  <Button className="mt-4 md:mt-0 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Profile
                  </Button>
                </div>

                {/* Level Progress */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{mockUserData.level}</span>
                    <span className="text-sm text-gray-500">
                      {mockUserData.levelProgress}% to {mockUserData.nextLevel}
                    </span>
                  </div>
                  <Progress value={mockUserData.levelProgress} className="h-2" />
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-white/50 rounded-lg border border-orange-200">
                    <Upload className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-800">{mockUserData.stats.uploads}</div>
                    <div className="text-sm text-gray-600">Uploads</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 rounded-lg border border-orange-200">
                    <Download className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-800">
                      {mockUserData.stats.downloads.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Downloads</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 rounded-lg border border-orange-200">
                    <Heart className="h-6 w-6 text-red-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-800">{mockUserData.stats.likes}</div>
                    <div className="text-sm text-gray-600">Likes</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 rounded-lg border border-orange-200">
                    <Eye className="h-6 w-6 text-purple-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-800">{mockUserData.stats.views.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Views</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-white/80 border border-orange-200">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 data-[state=active]:text-white"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="uploads"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 data-[state=active]:text-white"
            >
              My Uploads
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 data-[state=active]:text-white"
            >
              Favorites
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-800">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="font-medium">Resource Approved</p>
                      <p className="text-sm text-gray-600">"Cinematic Light Leaks Pack" was approved</p>
                      <p className="text-xs text-gray-500">2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Upload className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="font-medium">New Upload</p>
                      <p className="text-sm text-gray-600">Submitted "Motion Graphics Templates"</p>
                      <p className="text-xs text-gray-500">5 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-yellow-500" />
                    <div>
                      <p className="font-medium">Achievement Unlocked</p>
                      <p className="text-sm text-gray-600">Reached 1000 total downloads</p>
                      <p className="text-xs text-gray-500">1 week ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-800">Achievements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">First Upload</p>
                      <p className="text-sm text-gray-600">Successfully uploaded your first resource</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Download className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Popular Creator</p>
                      <p className="text-sm text-gray-600">Reached 1000+ downloads</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Community Favorite</p>
                      <p className="text-sm text-gray-600">Received 500+ likes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* My Uploads Tab */}
          <TabsContent value="uploads" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">My Uploads ({mockUploads.length})</h2>
              <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white">
                <Upload className="mr-2 h-4 w-4" />
                Upload New
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockUploads.map((upload) => (
                <Card key={upload.id} className="border-orange-200 hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <Image
                      src={upload.thumbnail || "/placeholder.svg"}
                      alt={upload.title}
                      width={200}
                      height={150}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className={`${getStatusColor(upload.status)} border`}>
                        <div className="flex items-center space-x-1">
                          {getStatusIcon(upload.status)}
                          <span className="capitalize">{upload.status}</span>
                        </div>
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 text-gray-800 line-clamp-2">{upload.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Uploaded on {new Date(upload.uploadDate).toLocaleDateString()}
                    </p>

                    {upload.status === "rejected" && upload.rejectionReason && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-3">
                        <p className="text-sm text-red-700">
                          <strong>Rejection Reason:</strong> {upload.rejectionReason}
                        </p>
                      </div>
                    )}

                    {upload.status === "approved" && (
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                        <span className="flex items-center">
                          <Download className="h-4 w-4 mr-1" />
                          {upload.downloads.toLocaleString()}
                        </span>
                        <span className="flex items-center">
                          <Heart className="h-4 w-4 mr-1" />
                          {upload.likes}
                        </span>
                        <span className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {upload.views.toLocaleString()}
                        </span>
                      </div>
                    )}

                    <div className="flex gap-2">
                      {upload.status === "approved" && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-orange-300 text-orange-600 hover:bg-orange-50 bg-transparent"
                        >
                          View Live
                        </Button>
                      )}
                      {upload.status === "rejected" && (
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
                        >
                          Re-upload
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gray-300 text-gray-600 hover:bg-gray-50 bg-transparent"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Favorites Tab */}
          <TabsContent value="favorites" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">My Favorites ({mockFavorites.length})</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockFavorites.map((favorite) => (
                <Card key={favorite.id} className="border-orange-200 hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <Image
                      src={favorite.thumbnail || "/placeholder.svg"}
                      alt={favorite.title}
                      width={200}
                      height={150}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-3 right-3">
                      <Button size="sm" variant="ghost" className="bg-white/80 hover:bg-white text-red-500">
                        <Heart className="h-4 w-4 fill-current" />
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 text-gray-800 line-clamp-2">{favorite.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">by {favorite.author}</p>

                    <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                      <span className="flex items-center">
                        <Download className="h-4 w-4 mr-1" />
                        {favorite.downloads.toLocaleString()}
                      </span>
                      <span className="flex items-center">
                        <Heart className="h-4 w-4 mr-1" />
                        {favorite.likes}
                      </span>
                    </div>

                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
