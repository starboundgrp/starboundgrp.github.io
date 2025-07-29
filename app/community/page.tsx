"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {
  MessageSquare,
  Heart,
  Share2,
  TrendingUp,
  Users,
  Award,
  Calendar,
  Search,
  Plus,
  ThumbsUp,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"

const mockPosts = [
  {
    id: 1,
    author: "ColorMaster Pro",
    avatar: "/placeholder-user.jpg",
    timestamp: "2 hours ago",
    content:
      "Just finished working on a new color grading technique that gives footage a vintage film look. The key is in the highlight rolloff and shadow detail preservation. What's your favorite approach to vintage grading?",
    image: "/placeholder.svg?height=300&width=500",
    likes: 45,
    comments: 12,
    shares: 8,
    tags: ["color grading", "vintage", "technique"],
  },
  {
    id: 2,
    author: "MotionDesigner",
    avatar: "/placeholder-user.jpg",
    timestamp: "5 hours ago",
    content:
      "Excited to share my latest motion graphics project! This piece combines 2D and 3D elements to create a dynamic brand animation. The client loved the energy and flow. Always pushing creative boundaries! 🚀",
    image: "/placeholder.svg?height=300&width=500",
    likes: 78,
    comments: 23,
    shares: 15,
    tags: ["motion graphics", "branding", "animation"],
  },
  {
    id: 3,
    author: "AudioExpert",
    avatar: "/placeholder-user.jpg",
    timestamp: "1 day ago",
    content:
      "Pro tip: When mixing dialogue, always use a high-pass filter around 80-100Hz to remove unwanted low-end rumble. This simple technique can dramatically improve clarity and prevent muddiness in your mix.",
    likes: 92,
    comments: 18,
    shares: 34,
    tags: ["audio", "mixing", "dialogue", "tips"],
  },
  {
    id: 4,
    author: "EditPro",
    avatar: "/placeholder-user.jpg",
    timestamp: "2 days ago",
    content:
      "Working on a documentary about ocean conservation. The challenge is balancing the beauty of marine life with the harsh reality of pollution. Storytelling through editing is such a powerful tool for change.",
    image: "/placeholder.svg?height=300&width=500",
    likes: 156,
    comments: 31,
    shares: 42,
    tags: ["documentary", "editing", "storytelling", "conservation"],
  },
]

const mockTopCreators = [
  {
    id: 1,
    name: "ColorMaster Pro",
    avatar: "/placeholder-user.jpg",
    specialty: "Color Grading",
    followers: 12500,
    uploads: 89,
    badge: "Expert",
  },
  {
    id: 2,
    name: "MotionDesigner",
    avatar: "/placeholder-user.jpg",
    specialty: "Motion Graphics",
    followers: 9800,
    uploads: 67,
    badge: "Pro",
  },
  {
    id: 3,
    name: "AudioExpert",
    avatar: "/placeholder-user.jpg",
    specialty: "Audio Engineering",
    followers: 8900,
    uploads: 45,
    badge: "Expert",
  },
  {
    id: 4,
    name: "EditPro",
    avatar: "/placeholder-user.jpg",
    specialty: "Video Editing",
    followers: 11200,
    uploads: 78,
    badge: "Master",
  },
  {
    id: 5,
    name: "UIAnimator",
    avatar: "/placeholder-user.jpg",
    specialty: "UI Animation",
    followers: 7600,
    uploads: 34,
    badge: "Pro",
  },
]

const mockTrendingTopics = [
  { topic: "AI in Video Editing", posts: 234 },
  { topic: "Color Grading Techniques", posts: 189 },
  { topic: "Motion Graphics Trends", posts: 156 },
  { topic: "Audio Mixing Tips", posts: 134 },
  { topic: "Workflow Optimization", posts: 98 },
]

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("feed")
  const [newPost, setNewPost] = useState("")

  const getBadgeColor = (badge: string) => {
    switch (badge.toLowerCase()) {
      case "master":
        return "bg-purple-100 text-purple-800"
      case "expert":
        return "bg-red-100 text-red-800"
      case "pro":
        return "bg-blue-100 text-blue-800"
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
            Community Hub
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with fellow creators, share your work, and learn from the best in the industry
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-orange-200 text-center">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">50,234</div>
              <div className="text-sm text-gray-600">Active Members</div>
            </CardContent>
          </Card>
          <Card className="border-orange-200 text-center">
            <CardContent className="p-6">
              <MessageSquare className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">12,456</div>
              <div className="text-sm text-gray-600">Discussions</div>
            </CardContent>
          </Card>
          <Card className="border-orange-200 text-center">
            <CardContent className="p-6">
              <TrendingUp className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">8,901</div>
              <div className="text-sm text-gray-600">Posts This Week</div>
            </CardContent>
          </Card>
          <Card className="border-orange-200 text-center">
            <CardContent className="p-6">
              <Award className="h-8 w-8 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">1,234</div>
              <div className="text-sm text-gray-600">Expert Contributors</div>
            </CardContent>
          </Card>
        </div>

        {/* Community Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-white/80 border border-orange-200">
            <TabsTrigger
              value="feed"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 data-[state=active]:text-white"
            >
              Community Feed
            </TabsTrigger>
            <TabsTrigger
              value="creators"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 data-[state=active]:text-white"
            >
              Top Creators
            </TabsTrigger>
            <TabsTrigger
              value="trending"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 data-[state=active]:text-white"
            >
              Trending Topics
            </TabsTrigger>
          </TabsList>

          {/* Community Feed Tab */}
          <TabsContent value="feed" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Main Feed */}
              <div className="lg:col-span-2 space-y-6">
                {/* Create Post */}
                <Card className="border-orange-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" alt="You" />
                        <AvatarFallback className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                          JC
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <Textarea
                          placeholder="Share your latest project, ask a question, or start a discussion..."
                          value={newPost}
                          onChange={(e) => setNewPost(e.target.value)}
                          className="min-h-20 border-orange-200 focus:border-orange-400 resize-none"
                        />
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-orange-300 text-orange-600 hover:bg-orange-50 bg-transparent"
                            >
                              <Image className="h-4 w-4 mr-2" />
                              Photo
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-orange-300 text-orange-600 hover:bg-orange-50 bg-transparent"
                            >
                              <MessageSquare className="h-4 w-4 mr-2" />
                              Poll
                            </Button>
                          </div>
                          <Button
                            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
                            disabled={!newPost.trim()}
                          >
                            Post
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Posts */}
                {mockPosts.map((post) => (
                  <Card key={post.id} className="border-orange-200 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      {/* Post Header */}
                      <div className="flex items-center space-x-3 mb-4">
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
                          <p className="text-sm text-gray-600 flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {post.timestamp}
                          </p>
                        </div>
                      </div>

                      {/* Post Content */}
                      <p className="text-gray-700 mb-4">{post.content}</p>

                      {/* Post Image */}
                      {post.image && (
                        <div className="mb-4">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt="Post content"
                            width={500}
                            height={300}
                            className="w-full h-64 object-cover rounded-lg"
                          />
                        </div>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs border-orange-200 text-orange-700">
                            #{tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Post Actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="flex space-x-6">
                          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-red-500">
                            <Heart className="h-4 w-4 mr-2" />
                            {post.likes}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-500">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            {post.comments}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-green-500">
                            <Share2 className="h-4 w-4 mr-2" />
                            {post.shares}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Load More */}
                <div className="text-center">
                  <Button
                    variant="outline"
                    className="border-orange-300 text-orange-600 hover:bg-orange-50 bg-transparent"
                  >
                    Load More Posts
                  </Button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Actions */}
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-orange-800">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white">
                          <Plus className="mr-2 h-4 w-4" />
                          Start Discussion
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Start a New Discussion</DialogTitle>
                          <DialogDescription>
                            Share your thoughts, ask questions, or start a conversation with the community
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="discussion-title">Discussion Title</Label>
                            <Input id="discussion-title" placeholder="What's your discussion about?" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="discussion-content">Content</Label>
                            <Textarea
                              id="discussion-content"
                              placeholder="Share your thoughts, questions, or insights..."
                              className="min-h-32"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="discussion-tags">Tags</Label>
                            <Input id="discussion-tags" placeholder="Add relevant tags (comma separated)" />
                          </div>
                          <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
                            Start Discussion
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button
                      variant="outline"
                      className="w-full border-orange-300 text-orange-600 hover:bg-orange-50 bg-transparent"
                    >
                      <Search className="mr-2 h-4 w-4" />
                      Browse Topics
                    </Button>
                  </CardContent>
                </Card>

                {/* Trending This Week */}
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-orange-800">Trending This Week</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {mockTrendingTopics.slice(0, 5).map((topic, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">#{topic.topic}</span>
                        <Badge variant="outline" className="text-xs border-orange-200 text-orange-700">
                          {topic.posts} posts
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Top Creators Tab */}
          <TabsContent value="creators" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockTopCreators.map((creator) => (
                <Card key={creator.id} className="border-orange-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Avatar className="w-20 h-20 mx-auto mb-4">
                      <AvatarImage src={creator.avatar || "/placeholder.svg"} alt={creator.name} />
                      <AvatarFallback className="text-xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                        {creator.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <h3 className="font-bold text-lg text-gray-800 mb-2">{creator.name}</h3>
                    <p className="text-gray-600 mb-3">{creator.specialty}</p>

                    <Badge className={`${getBadgeColor(creator.badge)} mb-4`}>{creator.badge}</Badge>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <div className="font-bold text-gray-800">{creator.followers.toLocaleString()}</div>
                        <div className="text-gray-600">Followers</div>
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">{creator.uploads}</div>
                        <div className="text-gray-600">Uploads</div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
                      >
                        Follow
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-orange-300 text-orange-600 hover:bg-orange-50 bg-transparent"
                      >
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Trending Topics Tab */}
          <TabsContent value="trending" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-800">Hot Topics</CardTitle>
                  <CardDescription>Most discussed topics this week</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mockTrendingTopics.map((topic, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-white/50 rounded-lg border border-orange-200 hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">#{topic.topic}</h4>
                          <p className="text-sm text-gray-600">{topic.posts} posts</p>
                        </div>
                      </div>
                      <TrendingUp className="h-5 w-5 text-green-500" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-800">Community Guidelines</CardTitle>
                  <CardDescription>Keep our community awesome</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <ThumbsUp className="h-3 w-3 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Be Respectful</h4>
                        <p className="text-sm text-gray-600">Treat all community members with respect and kindness</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Share2 className="h-3 w-3 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Share Knowledge</h4>
                        <p className="text-sm text-gray-600">Help others learn and grow by sharing your expertise</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Award className="h-3 w-3 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Quality Content</h4>
                        <p className="text-sm text-gray-600">Share high-quality, relevant content that adds value</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
