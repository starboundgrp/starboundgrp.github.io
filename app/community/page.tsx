"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Users, MessageSquare, Heart, Share2, TrendingUp, Award, Eye, MessageCircle } from "lucide-react"
import Image from "next/image"

const mockCommunityPosts = [
  {
    id: 1,
    author: "ColorMaster Pro",
    avatar: "/placeholder.svg?height=40&width=40",
    timestamp: "2 hours ago",
    content:
      "Just finished working on this cinematic color grade for a short film. The key was balancing the warm highlights with cool shadows to create that moody atmosphere. What do you think?",
    image: "/placeholder.svg?height=300&width=500",
    likes: 89,
    comments: 23,
    shares: 12,
    tags: ["Color Grading", "Cinematic", "Tutorial"],
  },
  {
    id: 2,
    author: "MotionDesigner",
    avatar: "/placeholder.svg?height=40&width=40",
    timestamp: "5 hours ago",
    content:
      "New motion graphics pack is live! 🎉 Spent weeks perfecting these transitions. Free download for the first 100 people - link in my profile!",
    image: "/placeholder.svg?height=300&width=500",
    likes: 156,
    comments: 45,
    shares: 28,
    tags: ["Motion Graphics", "Free", "Transitions"],
  },
  {
    id: 3,
    author: "AudioPro",
    avatar: "/placeholder.svg?height=40&width=40",
    timestamp: "1 day ago",
    content:
      "Sound design tip: Layer multiple ambient sounds at different frequencies to create depth. Here's a breakdown of how I created this forest atmosphere using 7 different audio layers.",
    likes: 67,
    comments: 18,
    shares: 9,
    tags: ["Sound Design", "Tips", "Audio"],
  },
]

const mockTopCreators = [
  {
    id: 1,
    name: "ColorMaster Pro",
    avatar: "/placeholder.svg?height=60&width=60",
    followers: 12500,
    uploads: 89,
    specialty: "Color Grading",
    badge: "Expert",
  },
  {
    id: 2,
    name: "MotionDesigner",
    avatar: "/placeholder.svg?height=60&width=60",
    followers: 8900,
    uploads: 156,
    specialty: "Motion Graphics",
    badge: "Pro",
  },
  {
    id: 3,
    name: "FilmEditor",
    avatar: "/placeholder.svg?height=60&width=60",
    followers: 15200,
    uploads: 67,
    specialty: "Video Editing",
    badge: "Master",
  },
  {
    id: 4,
    name: "AudioPro",
    avatar: "/placeholder.svg?height=60&width=60",
    followers: 6700,
    uploads: 134,
    specialty: "Sound Design",
    badge: "Expert",
  },
]

const mockDiscussions = [
  {
    id: 1,
    title: "Best practices for 4K video compression?",
    author: "VideoEditor123",
    replies: 23,
    views: 456,
    lastActivity: "2 hours ago",
    category: "Video Editing",
  },
  {
    id: 2,
    title: "Color grading workflow for different skin tones",
    author: "ColorGrader",
    replies: 18,
    views: 789,
    lastActivity: "4 hours ago",
    category: "Color Grading",
  },
  {
    id: 3,
    title: "After Effects vs Cinema 4D for motion graphics",
    author: "MotionArtist",
    replies: 34,
    views: 1234,
    lastActivity: "1 day ago",
    category: "Motion Graphics",
  },
]

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("feed")

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Master":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "Expert":
        return "bg-red-100 text-red-800 border-red-200"
      case "Pro":
        return "bg-blue-100 text-blue-800 border-blue-200"
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
            Community
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with fellow creators, share your work, and learn from the best in the industry.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-orange-200 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Users className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">50K+</div>
              <div className="text-sm text-gray-600">Active Members</div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <MessageSquare className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">12K</div>
              <div className="text-sm text-gray-600">Discussions</div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Share2 className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">25K</div>
              <div className="text-sm text-gray-600">Shared Projects</div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">98%</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="feed">Community Feed</TabsTrigger>
                <TabsTrigger value="discussions">Discussions</TabsTrigger>
              </TabsList>

              <TabsContent value="feed" className="space-y-6">
                {mockCommunityPosts.map((post) => (
                  <Card key={post.id} className="border-orange-200 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      {/* Post Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <Avatar>
                          <AvatarImage src={post.avatar || "/placeholder.svg"} alt={post.author} />
                          <AvatarFallback className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                            {post.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800">{post.author}</h3>
                          <p className="text-sm text-gray-500">{post.timestamp}</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Post Content */}
                      <p className="text-gray-700 mb-4">{post.content}</p>

                      {/* Post Image */}
                      {post.image && (
                        <div className="mb-4 rounded-lg overflow-hidden">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt="Post content"
                            width={500}
                            height={300}
                            className="w-full h-64 object-cover"
                          />
                        </div>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="border-orange-200 text-orange-700">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Post Actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-6">
                          <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors">
                            <Heart className="h-4 w-4" />
                            <span className="text-sm">{post.likes}</span>
                          </button>
                          <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors">
                            <MessageCircle className="h-4 w-4" />
                            <span className="text-sm">{post.comments}</span>
                          </button>
                          <button className="flex items-center gap-2 text-gray-600 hover:text-green-500 transition-colors">
                            <Share2 className="h-4 w-4" />
                            <span className="text-sm">{post.shares}</span>
                          </button>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-orange-300 text-orange-600 hover:bg-orange-50 bg-transparent"
                        >
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="discussions" className="space-y-4">
                {mockDiscussions.map((discussion) => (
                  <Card
                    key={discussion.id}
                    className="border-orange-200 bg-white/80 backdrop-blur-sm hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 mb-2 hover:text-orange-600 cursor-pointer">
                            {discussion.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                            <span>by {discussion.author}</span>
                            <Badge variant="outline" className="border-orange-200 text-orange-700">
                              {discussion.category}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <MessageCircle className="h-4 w-4" />
                              {discussion.replies} replies
                            </span>
                            <span className="flex items-center gap-1">
                              <Eye className="h-4 w-4" />
                              {discussion.views} views
                            </span>
                            <span>Last activity {discussion.lastActivity}</span>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-orange-300 text-orange-600 hover:bg-orange-50 bg-transparent"
                        >
                          Join Discussion
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Creators */}
            <Card className="border-orange-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Top Creators
                </CardTitle>
                <CardDescription>Most active community members this month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockTopCreators.map((creator, index) => (
                  <div key={creator.id} className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={creator.avatar || "/placeholder.svg"} alt={creator.name} />
                        <AvatarFallback className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                          {creator.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {index < 3 && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-xs text-white font-bold">
                          {index + 1}
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium text-gray-800">{creator.name}</h4>
                        <Badge className={getBadgeColor(creator.badge)}>{creator.badge}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{creator.followers.toLocaleString()} followers</span>
                        <span>{creator.uploads} uploads</span>
                      </div>
                      <p className="text-xs text-gray-500">{creator.specialty}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      Follow
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card className="border-orange-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Trending Topics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">#ColorGrading</span>
                  <Badge variant="outline" className="border-orange-200 text-orange-700">
                    234 posts
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">#MotionGraphics</span>
                  <Badge variant="outline" className="border-orange-200 text-orange-700">
                    189 posts
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">#VideoEditing</span>
                  <Badge variant="outline" className="border-orange-200 text-orange-700">
                    156 posts
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">#SoundDesign</span>
                  <Badge variant="outline" className="border-orange-200 text-orange-700">
                    98 posts
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">#AfterEffects</span>
                  <Badge variant="outline" className="border-orange-200 text-orange-700">
                    87 posts
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-orange-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-orange-800">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Start Discussion
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-orange-300 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Project
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-orange-300 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Find Collaborators
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
