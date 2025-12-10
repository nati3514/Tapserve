"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [currentFrame, setCurrentFrame] = useState(0)

  const frames = [
    {
      title: "Desktop POS Dashboard",
      description: "Manage your entire restaurant from a powerful desktop interface",
      image: "/desktoppos.png",
    },
    {
      title: "Kitchen Display System",
      description: "Real-time order updates for your kitchen team",
      image: "/kitchenorder.png",
    },
    {
      title: "Mobile QR Ordering",
      description: "Customers scan and order directly from their table",
      image: "/qrmenu.png",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length)
    }, 10000)
    return () => clearInterval(timer)
  }, [])

  const nextFrame = () => setCurrentFrame((prev) => (prev + 1) % frames.length)
  const prevFrame = () => setCurrentFrame((prev) => (prev - 1 + frames.length) % frames.length)

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              All-in-One POS and Inventory System for Restaurants
            </h1>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Run your restaurant smarter with one system that handles everything — from orders and payments to kitchen
              operations, customer loyalty, and real-time inventory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="http://49.13.221.24:5173/login">
                  Get Started
                </a>
              </Button>
              {/* <Button size="lg" variant="outline">
                View Demo
              </Button> */}
            </div>
          </div>

          {/* Right Carousel */}
          <div className="relative animate-fade-in">
            <div className="bg-muted rounded-2xl aspect-video overflow-hidden relative shadow-lg">
              <img
                src={frames[currentFrame].image || "/placeholder.svg"}
                alt={frames[currentFrame].title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              {/* Frame label */}
              <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
                {frames[currentFrame].title}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prevFrame}
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Previous frame"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Indicators */}
              <div className="flex gap-2">
                {frames.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentFrame(idx)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      idx === currentFrame ? "bg-primary" : "bg-border"
                    }`}
                    aria-label={`Go to frame ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextFrame}
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Next frame"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
