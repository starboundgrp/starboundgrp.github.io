"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Shield, Clock, CheckCircle, XCircle, Eye, User, Calendar, FileText, Users } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"

const mockPendingSubmissions = [
  {
    id: 1,
    title: "Advanced Color Grading Pack",
    author: "ColorMaster Pro",
    authorEmail: "colormaster@example.com",
    uploadDate: "2024-01-22",
    type: "Template",
    category: "Color Grading",
    description:
      "Professional color grading LUTs and presets for cinematic looks. Includes 50+ LUTs optimized for different lighting conditions and moods.",
    files: ["color_pack.zip", "preview_images.zip", "documentation.pdf"],
    fileSize: "245 MB",
    thumbnail: "/placeholder.svg?height=200&width=300",
    tags: ["color grading", "luts", "cinematic", "professional"],
  },
  {
    id: 2,
    title: "Minimal UI Animation Pack",
    author: "UIDesigner",
    authorEmail: "uidesigner@example.com",
    uploadDate: "2024-01-21",
    type: "Video",
    category: "Graphics",
    description:
      "Clean and modern UI animations for web and mobile applications. After Effects project files included with easy customization options.",
    files: ["ui_animations.aep", "rendered_videos.zip", "fonts.zip"],
    fileSize: "180 MB",
    thumbnail: "/placeholder.svg?height=200&width=300",
    tags: ["ui", "animations", "minimal", "after effects"],
  },
  {
    id: 3,
    title: "Vintage Film Grain Overlays",
    author: "FilmVintage",
    authorEmail: "filmvintage@example.com",
    uploadDate: "2024-01-20",
    type: "Video",
    category: "Effects",
    description:
      "Authentic vintage film grain overlays captured from real 16mm and 35mm film stock. Perfect for adding organic texture to digital footage.",
    files: ["film_grain_4k.mov", "film_grain_hd.mov", "usage_guide.pdf"],
    fileSize: "1.2 GB",
    thumbnail: "/placeholder.svg?height=200&width=300",
    tags: ["vintage", "film grain", "overlay", "texture"],
  },
]

const mockRecentActions = [
  {
    id: 1,
    action: "approved",
    resourceTitle: "Cinematic Transitions Pack",
    author: "TransitionPro",
    date: "2024-01-22",
    reviewer: "Admin",
  },
  {
    id: 2,
    action: "rejected",
    resourceTitle: "Low Quality Sound Pack",
    author: "AudioUser",
    date: "2024-01-22",
    reviewer: "Admin",
    reason: "Audio quality below standards",
  },
  {
    id: 3,
    action: "approved",
    resourceTitle: "Modern Logo Templates",
    author: "LogoDesigner",
    date: "2024-01-21",
    reviewer: "Admin",
  },
]

export default function AdminPage() {
  const [selectedSubmission, setSelectedSubmission] = useState<any>(null)
  const [reviewNote, setReviewNote] = useState("")
  const [activeTab, setActiveTab] = useState("pending")

  const handleApprove = (submissionId: number) => {
    console.log(`Approved submission ${submissionId}`)
    // Here you would typically make an API call to approve the submission
  }

  const handleReject = (submissionId: number, reason: string) => {
    console.log(`Rejected submission ${submissionId} with reason: ${reason}`)
    // Here you would typically make an API call to reject the submission
  }

  const getActionIcon = (action: string) => {
    switch (action) {
      case "approved":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "rejected":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return <Clock className="h-4 w-4 text-yellow-500" />
    }
  }

  const getActionColor = (action: string) => {
    switch (action) {
      case "approved":
        return "text-green-600"
      case "rejected":
        return "text-red-600"
      default:
        return "text-yellow-600"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Admin Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-12 w-12 text-red-500 mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
          </div>
          <p className="text-lg text-gray-600">Review and manage community submissions</p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-orange-200">
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">{mockPendingSubmissions.length}</div>
              <div className="text-sm text-gray-600">Pending Review</div>
            </CardContent>
          </Card>
          <Card className="border-orange-200">
            <CardContent className="p-6 text-center">
              <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">156</div>
              <div className="text-sm text-gray-600">Approved Today</div>
            </CardContent>
          </Card>
          <Card className="border-orange-200">
            <CardContent className="p-6 text-center">
              <XCircle className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">12</div>
              <div className="text-sm text-gray-600">Rejected Today</div>
            </CardContent>
          </Card>
          <Card className="border-orange-200">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">2,340</div>
              <div className="text-sm text-gray-600">Total Users</div>
            </CardContent>
          </Card>
        </div>

        {/* Admin Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-white/80 border border-orange-200">
            <TabsTrigger
              value="pending"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-orange-500 data-[state=active]:text-white"
            >
              Pending Review ({mockPendingSubmissions.length})
            </TabsTrigger>
            <TabsTrigger
              value="recent"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-orange-500 data-[state=active]:text-white"
            >
              Recent Actions
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-orange-500 data-[state=active]:text-white"
            >
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Pending Review Tab */}
          <TabsContent value="pending" className="space-y-6">
            <div className="grid gap-6">
              {mockPendingSubmissions.map((submission) => (
                <Card key={submission.id} className="border-orange-200">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Thumbnail */}
                      <div className="lg:w-64 flex-shrink-0">
                        <Image
                          src={submission.thumbnail || "/placeholder.svg"}
                          alt={submission.title}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{submission.title}</h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                              <span className="flex items-center">
                                <User className="h-4 w-4 mr-1" />
                                {submission.author}
                              </span>
                              <span className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {new Date(submission.uploadDate).toLocaleDateString()}
                              </span>
                            </div>
                            <div className="flex space-x-2 mb-3">
                              <Badge className="bg-blue-100 text-blue-800">{submission.type}</Badge>
                              <Badge className="bg-purple-100 text-purple-800">{submission.category}</Badge>
                              <Badge className="bg-gray-100 text-gray-800">{submission.fileSize}</Badge>
                            </div>
                          </div>
                          <Badge className="bg-yellow-100 text-yellow-800 border border-yellow-200">
                            <Clock className="h-3 w-3 mr-1" />
                            Pending
                          </Badge>
                        </div>

                        <p className="text-gray-700 mb-4 line-clamp-3">{submission.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {submission.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs border-orange-200 text-orange-700">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="mb-4">
                          <p className="text-sm font-medium text-gray-700 mb-2">Files:</p>
                          <div className="flex flex-wrap gap-2">
                            {submission.files.map((file, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                <FileText className="h-3 w-3 mr-1" />
                                {file}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-3">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent"
                                onClick={() => setSelectedSubmission(submission)}
                              >
                                <Eye className="mr-2 h-4 w-4" />
                                Preview
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl">
                              <DialogHeader>
                                <DialogTitle>{submission.title}</DialogTitle>
                                <DialogDescription>Detailed preview of the submission</DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <Image
                                  src={submission.thumbnail || "/placeholder.svg"}
                                  alt={submission.title}
                                  width={600}
                                  height={400}
                                  className="w-full h-64 object-cover rounded-lg"
                                />
                                <div className="grid md:grid-cols-2 gap-4">
                                  <div>
                                    <h4 className="font-semibold mb-2">Author Information</h4>
                                    <p>
                                      <strong>Name:</strong> {submission.author}
                                    </p>
                                    <p>
                                      <strong>Email:</strong> {submission.authorEmail}
                                    </p>
                                    <p>
                                      <strong>Upload Date:</strong>{" "}
                                      {new Date(submission.uploadDate).toLocaleDateString()}
                                    </p>
                                  </div>
                                  <div>
                                    <h4 className="font-semibold mb-2">Resource Details</h4>
                                    <p>
                                      <strong>Type:</strong> {submission.type}
                                    </p>
                                    <p>
                                      <strong>Category:</strong> {submission.category}
                                    </p>
                                    <p>
                                      <strong>File Size:</strong> {submission.fileSize}
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-2">Description</h4>
                                  <p className="text-gray-700">{submission.description}</p>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>

                          <Button
                            size="sm"
                            className="bg-green-500 hover:bg-green-600 text-white"
                            onClick={() => handleApprove(submission.id)}
                          >
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Approve
                          </Button>

                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-red-300 text-red-600 hover:bg-red-50 bg-transparent"
                              >
                                <XCircle className="mr-2 h-4 w-4" />
                                Reject
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Reject Submission</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Please provide a reason for rejecting "{submission.title}". This will be sent to the
                                  author.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <div className="space-y-4">
                                <div>
                                  <Label htmlFor="rejection-reason">Rejection Reason</Label>
                                  <Textarea
                                    id="rejection-reason"
                                    placeholder="Explain why this submission doesn't meet our standards..."
                                    value={reviewNote}
                                    onChange={(e) => setReviewNote(e.target.value)}
                                    className="mt-2"
                                  />
                                </div>
                              </div>
                              <AlertDialogFooter>
                                <AlertDialogCancel onClick={() => setReviewNote("")}>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => {
                                    handleReject(submission.id, reviewNote)
                                    setReviewNote("")
                                  }}
                                  className="bg-red-500 hover:bg-red-600"
                                >
                                  Reject Submission
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Recent Actions Tab */}
          <TabsContent value="recent" className="space-y-6">
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-orange-800">Recent Review Actions</CardTitle>
                <CardDescription>Latest approvals and rejections by the admin team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockRecentActions.map((action) => (
                    <div
                      key={action.id}
                      className="flex items-center justify-between p-4 bg-white/50 rounded-lg border border-orange-200"
                    >
                      <div className="flex items-center space-x-4">
                        {getActionIcon(action.action)}
                        <div>
                          <p className="font-medium text-gray-800">{action.resourceTitle}</p>
                          <p className="text-sm text-gray-600">by {action.author}</p>
                          {action.reason && <p className="text-sm text-red-600 mt-1">Reason: {action.reason}</p>}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-medium capitalize ${getActionColor(action.action)}`}>{action.action}</p>
                        <p className="text-sm text-gray-500">{new Date(action.date).toLocaleDateString()}</p>
                        <p className="text-xs text-gray-400">by {action.reviewer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-800">Review Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Total Reviews This Month</span>
                    <span className="font-bold">342</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Approval Rate</span>
                    <span className="font-bold text-green-600">87%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Average Review Time</span>
                    <span className="font-bold">18 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Pending Queue</span>
                    <span className="font-bold text-yellow-600">{mockPendingSubmissions.length}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-800">Popular Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Video Effects</span>
                    <span className="font-bold">45%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Graphics & UI</span>
                    <span className="font-bold">28%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Audio & Music</span>
                    <span className="font-bold">15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Templates</span>
                    <span className="font-bold">12%</span>
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
