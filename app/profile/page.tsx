"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Header } from "@/components/header"
import {
  Upload,
  Download,
  Heart,
  Eye,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Edit,
  Calendar,
  Award,
} from "lucide-react"
import Image from "next/image"

const mockUserData = {
  name: "John Creator",
  email: "john@example.com",
  joinDate: "January 2024",
  avatar: "/placeholder.svg?height=100&width=100",
  stats: {
    uploads: 24,
    downloads: 15420,
    likes: 892,
    views: 45230,
  },
  badges: ["Top Contributor", "Video Expert", "Community Helper"],
}

const mockUploads = [
  {
    id: 1,
    title: "Cinematic Color Grading Pack",
    type: "Video",
    status: "approved",
    uploadDate: "2024-01-15",
    downloads: 1234,
    likes: 89,
    views: 3456,
    thumbnail: "/placeholder.svg?height=150&width=200",
  },
  {
    id: 2,
    title: "Abstract Motion Backgrounds",
    type: "Video",
    status: "pending",
    uploadDate: "2024-01-20",
    downloads: 0,
    likes: 0,
    views: 0,
    thumbnail: "/placeholder.svg?height=150&width=200",
  },
  {
    id: 3,
    title: "Typography Animation Pack",
    type: "Template",
    status: "rejected",
    uploadDate: "2024-01-18",
    downloads: 0,
    likes: 0,
    views: 0,
    thumbnail: "/placeholder.svg?height=150&width=200",
    rejectionReason:
      "File quality does not meet our standards. Please ensure all templates are properly organized and include source files.",
  },
  {
    id: 4,
    title: "Vintage Film Overlays",
    type: "Video",
    status: "approved",
    uploadDate: "2024-01-10",
    downloads: 876,
    likes: 45,
    views: 2134,
    thumbnail: "/placeholder.svg?height=150&width=200",
  },
]

const mockFavorites = [
  {
    id: 1,
    title: "Professional LUT Collection",
    author: "ColorMaster",
    type: "Video",
    thumbnail: "/placeholder.svg?height=150&width=200",
  },
  {
    id: 2,
    title: "Minimalist UI Elements",
    author: "DesignPro",
    type: "Template",
    thumbnail: "/placeholder.svg?height=150&width=200",
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
        <Card className="border-orange-200 bg-white/80 backdrop-blur-sm mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src={mockUserData.avatar || "/placeholder.svg"} alt={mockUserData.name} />
                <AvatarFallback className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-2xl">
                  {mockUserData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <h1 className="text-3xl font-bold text-gray-800">{mockUserData.name}</h1>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-orange-300 text-orange-600 hover:bg-orange-50 bg-transparent"
                  >
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Profile
                  </Button>
                </div>

                <p className="text-gray-600 mb-4">{mockUserData.email}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {mockUserData.badges.map((badge) => (
                    <Badge key={badge} className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                      <Award className="mr-1 h-3 w-3" />
                      {badge}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="mr-2 h-4 w-4" />
                  Joined {mockUserData.joinDate}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-orange-200 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Upload className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">{mockUserData.stats.uploads}</div>
              <div className="text-sm text-gray-600">Uploads</div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Download className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">{mockUserData.stats.downloads.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Downloads</div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Heart className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">{mockUserData.stats.likes}</div>
              <div className="text-sm text-gray-600">Likes</div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Eye className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">{mockUserData.stats.views.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Views</div>
            </CardContent>
          </Card>
        </div>

        {/* Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="uploads">My Uploads</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-orange-200 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-orange-800">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <div>
                        <p className="font-medium text-gray-800">Resource Approved</p>
                        <p className="text-sm text-gray-600">Cinematic Color Grading Pack was approved</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Upload className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="font-medium text-gray-800">New Upload</p>
                        <p className="text-sm text-gray-600">Abstract Motion Backgrounds submitted for review</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Heart className="h-5 w-5 text-red-500" />
                      <div>
                        <p className="font-medium text-gray-800">New Likes</p>
                        <p className="text-sm text-gray-600">Your resources received 15 new likes</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-orange-800">Upload Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Approved</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-gray-200 rounded-full">
                          <div className="w-20 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">18</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Pending</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-gray-200 rounded-full">
                          <div className="w-4 h-2 bg-yellow-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">3</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Rejected</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-gray-200 rounded-full">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">3</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="uploads">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockUploads.map((upload) => (
                <Card key={upload.id} className="border-orange-200 bg-white/80 backdrop-blur-sm">
                  <div className="relative">
                    <Image
                      src={upload.thumbnail || "/placeholder.svg"}
                      alt={upload.title}
                      width={200}
                      height={150}
                      className="w-full h-32 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className={`${getStatusColor(upload.status)} flex items-center gap-1`}>
                        {getStatusIcon(upload.status)}
                        {upload.status}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2 text-gray-800">{upload.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <Badge variant="outline" className="border-orange-200 text-orange-700">
                        {upload.type}
                      </Badge>
                      <span>{upload.uploadDate}</span>
                    </div>

                    {upload.status === "approved" && (
                      <div className="grid grid-cols-3 gap-2 text-xs text-gray-500 mb-3">
                        <div className="text-center">
                          <Download className="h-3 w-3 mx-auto mb-1" />
                          {upload.downloads}
                        </div>
                        <div className="text-center">
                          <Heart className="h-3 w-3 mx-auto mb-1" />
                          {upload.likes}
                        </div>
                        <div className="text-center">
                          <Eye className="h-3 w-3 mx-auto mb-1" />
                          {upload.views}
                        </div>
                      </div>
                    )}

                    {upload.status === "rejected" && upload.rejectionReason && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-3">
                        <p className="text-xs text-red-700">
                          <strong>Rejection Reason:</strong> {upload.rejectionReason}
                        </p>
                      </div>
                    )}

                    <div className="flex gap-2">
                      {upload.status === "approved" && (
                        <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent">
                          View Details
                        </Button>
                      )}
                      {upload.status === "rejected" && (
                        <Button
                          size="sm"
                          className="flex-1 text-xs bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
                        >
                          Re-upload
                        </Button>
                      )}
                      {upload.status === "pending" && (
                        <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent" disabled>
                          Under Review
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="favorites">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockFavorites.map((favorite) => (
                <Card key={favorite.id} className="border-orange-200 bg-white/80 backdrop-blur-sm">
                  <div className="relative">
                    <Image
                      src={favorite.thumbnail || "/placeholder.svg"}
                      alt={favorite.title}
                      width={200}
                      height={150}
                      className="w-full h-32 object-cover rounded-t-lg"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2 text-gray-800">{favorite.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">by {favorite.author}</p>
                    <Badge variant="outline" className="border-orange-200 text-orange-700 mb-3">
                      {favorite.type}
                    </Badge>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="flex-1 text-xs bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
                      >
                        Download
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs bg-transparent">
                        <Heart className="h-3 w-3 text-red-500" />
                      </Button>
                    </div>
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
