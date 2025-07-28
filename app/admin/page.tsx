"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
import { Header } from "@/components/header"
import { Shield, Clock, CheckCircle, XCircle, Eye, User, Calendar } from "lucide-react"
import Image from "next/image"

const mockPendingSubmissions = [
  {
    id: 1,
    title: "Professional Cinematic LUTs",
    author: "ColorGrader Pro",
    authorEmail: "colorgrader@example.com",
    type: "Video",
    category: "Color Grading",
    uploadDate: "2024-01-22",
    fileSize: "45.2 MB",
    description:
      "A collection of 20 professional cinematic LUTs for video color grading. Perfect for creating moody, cinematic looks in your footage.",
    tags: ["LUT", "Cinematic", "Color Grading", "Professional"],
    thumbnail: "/placeholder.svg?height=200&width=300",
    license: "Commercial Use Allowed",
  },
  {
    id: 2,
    title: "Abstract Motion Backgrounds Pack",
    author: "MotionDesigner",
    authorEmail: "motion@example.com",
    type: "Video",
    category: "Backgrounds",
    uploadDate: "2024-01-21",
    fileSize: "128.7 MB",
    description:
      "10 high-quality abstract motion backgrounds in 4K resolution. Great for presentations, social media, and video projects.",
    tags: ["Abstract", "Motion", "Backgrounds", "4K"],
    thumbnail: "/placeholder.svg?height=200&width=300",
    license: "Personal Use Only",
  },
  {
    id: 3,
    title: "Typography Animation Templates",
    author: "TypeAnimator",
    authorEmail: "type@example.com",
    type: "Template",
    category: "Typography",
    uploadDate: "2024-01-20",
    fileSize: "67.3 MB",
    description:
      "After Effects templates for animated typography. Includes 15 different animation styles with easy customization.",
    tags: ["Typography", "Animation", "After Effects", "Templates"],
    thumbnail: "/placeholder.svg?height=200&width=300",
    license: "Attribution Required",
  },
]

const mockRecentActions = [
  {
    id: 1,
    action: "approved",
    resourceTitle: "Vintage Film Overlays",
    author: "FilmMaker",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    action: "rejected",
    resourceTitle: "Low Quality Textures",
    author: "NewUser123",
    timestamp: "4 hours ago",
  },
  {
    id: 3,
    action: "approved",
    resourceTitle: "Corporate Music Pack",
    author: "AudioPro",
    timestamp: "1 day ago",
  },
]

export default function AdminPage() {
  const [selectedSubmission, setSelectedSubmission] = useState<any>(null)
  const [reviewAction, setReviewAction] = useState<"approve" | "reject" | null>(null)
  const [rejectionReason, setRejectionReason] = useState("")
  const [adminNotes, setAdminNotes] = useState("")

  const handleReview = (submission: any, action: "approve" | "reject") => {
    setSelectedSubmission(submission)
    setReviewAction(action)
  }

  const submitReview = () => {
    // Here you would typically send the review decision to your backend
    console.log("Review submitted:", {
      submissionId: selectedSubmission?.id,
      action: reviewAction,
      rejectionReason,
      adminNotes,
    })

    // Reset form
    setSelectedSubmission(null)
    setReviewAction(null)
    setRejectionReason("")
    setAdminNotes("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Admin Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
            <p className="text-gray-600">Review and manage submitted resources</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-orange-200 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Clock className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">{mockPendingSubmissions.length}</div>
              <div className="text-sm text-gray-600">Pending Review</div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">156</div>
              <div className="text-sm text-gray-600">Approved Today</div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <XCircle className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">12</div>
              <div className="text-sm text-gray-600">Rejected Today</div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <User className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">1,234</div>
              <div className="text-sm text-gray-600">Total Users</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="pending">Pending Reviews</TabsTrigger>
            <TabsTrigger value="recent">Recent Actions</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="pending">
            <div className="space-y-6">
              {mockPendingSubmissions.map((submission) => (
                <Card key={submission.id} className="border-orange-200 bg-white/80 backdrop-blur-sm">
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
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{submission.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                              <span className="flex items-center gap-1">
                                <User className="h-4 w-4" />
                                {submission.author}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {submission.uploadDate}
                              </span>
                            </div>
                            <div className="flex gap-2 mb-3">
                              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                                {submission.type}
                              </Badge>
                              <Badge variant="outline" className="border-orange-200 text-orange-700">
                                {submission.category}
                              </Badge>
                              <Badge variant="outline" className="border-gray-200 text-gray-600">
                                {submission.fileSize}
                              </Badge>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent"
                                >
                                  <Eye className="mr-2 h-4 w-4" />
                                  Preview
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-4xl">
                                <DialogHeader>
                                  <DialogTitle>{submission.title}</DialogTitle>
                                  <DialogDescription>Full resource preview and details</DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <Image
                                    src={submission.thumbnail || "/placeholder.svg"}
                                    alt={submission.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-64 object-cover rounded-lg"
                                  />
                                  <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                      <strong>Author:</strong> {submission.author}
                                    </div>
                                    <div>
                                      <strong>Email:</strong> {submission.authorEmail}
                                    </div>
                                    <div>
                                      <strong>License:</strong> {submission.license}
                                    </div>
                                    <div>
                                      <strong>File Size:</strong> {submission.fileSize}
                                    </div>
                                  </div>
                                  <div>
                                    <strong>Description:</strong>
                                    <p className="mt-1 text-gray-600">{submission.description}</p>
                                  </div>
                                  <div>
                                    <strong>Tags:</strong>
                                    <div className="flex flex-wrap gap-1 mt-1">
                                      {submission.tags.map((tag) => (
                                        <Badge key={tag} variant="outline" className="text-xs">
                                          {tag}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-4 line-clamp-2">{submission.description}</p>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {submission.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs border-orange-200 text-orange-700">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-3">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                onClick={() => handleReview(submission, "approve")}
                                className="bg-green-600 hover:bg-green-700 text-white"
                              >
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Approve
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Approve Resource</DialogTitle>
                                <DialogDescription>
                                  Are you sure you want to approve "{submission.title}"?
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div>
                                  <Label htmlFor="admin-notes">Admin Notes (Optional)</Label>
                                  <Textarea
                                    id="admin-notes"
                                    placeholder="Add any notes for internal reference..."
                                    value={adminNotes}
                                    onChange={(e) => setAdminNotes(e.target.value)}
                                  />
                                </div>
                                <div className="flex gap-3">
                                  <Button
                                    onClick={submitReview}
                                    className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                                  >
                                    Confirm Approval
                                  </Button>
                                  <DialogTrigger asChild>
                                    <Button variant="outline" className="flex-1 bg-transparent">
                                      Cancel
                                    </Button>
                                  </DialogTrigger>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>

                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                onClick={() => handleReview(submission, "reject")}
                                variant="outline"
                                className="border-red-300 text-red-600 hover:bg-red-50"
                              >
                                <XCircle className="mr-2 h-4 w-4" />
                                Reject
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Reject Resource</DialogTitle>
                                <DialogDescription>
                                  Please provide a reason for rejecting "{submission.title}". This will be sent to the
                                  author.
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div>
                                  <Label htmlFor="rejection-reason">Rejection Reason *</Label>
                                  <Textarea
                                    id="rejection-reason"
                                    placeholder="Explain why this resource is being rejected..."
                                    value={rejectionReason}
                                    onChange={(e) => setRejectionReason(e.target.value)}
                                    required
                                  />
                                </div>
                                <div>
                                  <Label htmlFor="admin-notes-reject">Admin Notes (Optional)</Label>
                                  <Textarea
                                    id="admin-notes-reject"
                                    placeholder="Add any notes for internal reference..."
                                    value={adminNotes}
                                    onChange={(e) => setAdminNotes(e.target.value)}
                                  />
                                </div>
                                <div className="flex gap-3">
                                  <Button
                                    onClick={submitReview}
                                    disabled={!rejectionReason.trim()}
                                    className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                                  >
                                    Confirm Rejection
                                  </Button>
                                  <DialogTrigger asChild>
                                    <Button variant="outline" className="flex-1 bg-transparent">
                                      Cancel
                                    </Button>
                                  </DialogTrigger>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recent">
            <Card className="border-orange-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-orange-800">Recent Review Actions</CardTitle>
                <CardDescription>Latest approvals and rejections by admin team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockRecentActions.map((action) => (
                    <div
                      key={action.id}
                      className="flex items-center justify-between p-4 border border-orange-100 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        {action.action === "approved" ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500" />
                        )}
                        <div>
                          <p className="font-medium text-gray-800">
                            {action.action === "approved" ? "Approved" : "Rejected"}: {action.resourceTitle}
                          </p>
                          <p className="text-sm text-gray-600">by {action.author}</p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{action.timestamp}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-orange-200 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-orange-800">Review Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">This Week</span>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-gray-800">89 Reviews</div>
                        <div className="text-sm text-green-600">+12% from last week</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Approval Rate</span>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-gray-800">87%</div>
                        <div className="text-sm text-green-600">+3% from last week</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Avg. Review Time</span>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-gray-800">2.3 hours</div>
                        <div className="text-sm text-red-600">+0.5h from last week</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-orange-800">Popular Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Video Assets</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-16 h-2 bg-orange-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">45%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Images</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-12 h-2 bg-yellow-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">30%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Templates</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-8 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">20%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Audio</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">5%</span>
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
