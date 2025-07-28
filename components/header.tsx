"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Menu, X, User, Settings, LogOut, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
    setIsLoginOpen(false)
  }

  const handleAdminLogin = () => {
    setIsLoggedIn(true)
    setIsAdmin(true)
    setIsLoginOpen(false)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setIsAdmin(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Starbound 2024 Logo" width={40} height={40} className="rounded-lg" />
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                Starbound 2024
              </h1>
              <p className="text-xs text-orange-600">Where your editor dreams await</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/resources" className="text-gray-700 hover:text-orange-600 transition-colors">
              Resources
            </Link>
            <Link href="/tutorial-lab" className="text-gray-700 hover:text-orange-600 transition-colors">
              Tutorial Lab
            </Link>
            <Link href="/community" className="text-gray-700 hover:text-orange-600 transition-colors">
              Community
            </Link>
            <Link href="/upload" className="text-gray-700 hover:text-orange-600 transition-colors">
              Upload
            </Link>

            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                {isAdmin && (
                  <Link href="/admin">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-red-300 text-red-600 hover:bg-red-50 bg-transparent"
                    >
                      <Shield className="mr-2 h-4 w-4" />
                      Admin
                    </Button>
                  </Link>
                )}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">John Creator</p>
                        <p className="text-xs leading-none text-muted-foreground">john@example.com</p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/profile">
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <>
                <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="border-orange-300 text-orange-600 hover:bg-orange-50 bg-transparent"
                    >
                      Sign In
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Welcome to Starbound 2024</DialogTitle>
                      <DialogDescription>Sign in to access premium resources and upload your content</DialogDescription>
                    </DialogHeader>
                    <Tabs defaultValue="signin" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="signin">Sign In</TabsTrigger>
                        <TabsTrigger value="signup">Sign Up</TabsTrigger>
                      </TabsList>
                      <TabsContent value="signin" className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="your@email.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password">Password</Label>
                          <Input id="password" type="password" />
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                            onClick={handleLogin}
                          >
                            Sign In
                          </Button>
                          <Button
                            variant="outline"
                            className="border-red-300 text-red-600 hover:bg-red-50 bg-transparent"
                            onClick={handleAdminLogin}
                          >
                            Admin
                          </Button>
                        </div>
                      </TabsContent>
                      <TabsContent value="signup" className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" placeholder="Your Name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email-signup">Email</Label>
                          <Input id="email-signup" type="email" placeholder="your@email.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password-signup">Password</Label>
                          <Input id="password-signup" type="password" />
                        </div>
                        <Button
                          className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                          onClick={handleLogin}
                        >
                          Create Account
                        </Button>
                      </TabsContent>
                    </Tabs>
                  </DialogContent>
                </Dialog>
                <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white">
                  Get Started
                </Button>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-orange-200 pt-4">
            <nav className="flex flex-col space-y-3">
              <Link href="/resources" className="text-gray-700 hover:text-orange-600 transition-colors">
                Resources
              </Link>
              <Link href="/tutorial-lab" className="text-gray-700 hover:text-orange-600 transition-colors">
                Tutorial Lab
              </Link>
              <Link href="/community" className="text-gray-700 hover:text-orange-600 transition-colors">
                Community
              </Link>
              <Link href="/upload" className="text-gray-700 hover:text-orange-600 transition-colors">
                Upload
              </Link>
              {!isLoggedIn && (
                <div className="flex space-x-2 pt-2">
                  <Button
                    variant="outline"
                    className="flex-1 border-orange-300 text-orange-600 hover:bg-orange-50 bg-transparent"
                    onClick={() => setIsLoginOpen(true)}
                  >
                    Sign In
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white">
                    Get Started
                  </Button>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
