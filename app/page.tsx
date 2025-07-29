"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Play, ImageIcon, Video, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"

export default function StarboundHomepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.jpg"
              alt="Starbound 2024 Logo"
              width={120}
              height={120}
              className="rounded-2xl shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
            Starbound 2024
          </h1>
          <p className="text-2xl md:text-3xl text-orange-700 mb-8 font-medium">Where your editor dreams await</p>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover, download, and share premium editing resources. Join our community of creators and elevate your
            projects with high-quality assets and tutorials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/resources">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 text-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Browse Resources
              </Button>
            </Link>
            <Link href="/tutorial-lab">
              <Button
                size="lg"
                variant="outline"
                className="border-orange-300 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Tutorials
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            Everything You Need to Create
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <ImageIcon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-orange-800">Premium Images</CardTitle>
                <CardDescription>
                  High-resolution stock photos, graphics, and design elements for your projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 4K+ resolution images</li>
                  <li>• Commercial license included</li>
                  <li>• Regular new uploads</li>
                  <li>• Curated collections</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Video className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-orange-800">Video Assets</CardTitle>
                <CardDescription>
                  Motion graphics, stock footage, and video templates for professional editing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• HD & 4K video clips</li>
                  <li>• After Effects templates</li>
                  <li>• Motion backgrounds</li>
                  <li>• Transition packs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-orange-800">Tutorial Lab</CardTitle>
                <CardDescription>
                  Learn from experts and share your knowledge with step-by-step tutorials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Expert-led courses</li>
                  <li>• Community uploads</li>
                  <li>• Interactive learning</li>
                  <li>• Skill certifications</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-2">
                50K+
              </div>
              <p className="text-gray-600">Active Creators</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-2">
                100K+
              </div>
              <p className="text-gray-600">Resources Shared</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-2">
                5K+
              </div>
              <p className="text-gray-600">Video Tutorials</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-2">
                1M+
              </div>
              <p className="text-gray-600">Downloads</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-yellow-900 to-orange-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/logo.jpg" alt="Starbound 2024 Logo" width={32} height={32} className="rounded-lg" />
                <div>
                  <h3 className="font-bold text-lg">Starbound 2024</h3>
                  <p className="text-sm text-yellow-200">Where your editor dreams await</p>
                </div>
              </div>
              <p className="text-yellow-100 text-sm">
                Empowering creators with premium resources and knowledge sharing.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-yellow-100">
                <li>
                  <Link href="/resources" className="hover:text-white transition-colors">
                    Images
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:text-white transition-colors">
                    Videos
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:text-white transition-colors">
                    Templates
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:text-white transition-colors">
                    Graphics
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Learn</h4>
              <ul className="space-y-2 text-sm text-yellow-100">
                <li>
                  <Link href="/tutorial-lab" className="hover:text-white transition-colors">
                    Tutorial Lab
                  </Link>
                </li>
                <li>
                  <Link href="/tutorial-lab" className="hover:text-white transition-colors">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="hover:text-white transition-colors">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-yellow-100">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-yellow-700 mt-8 pt-8 text-center text-sm text-yellow-200">
            <p>&copy; 2024 Starbound 2024. All rights reserved. Where your editor dreams await.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
