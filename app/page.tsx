import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import VideoWorkflow from "@/components/video-workflow"
import Pricing from "@/components/pricing"
import TrustedBy from "@/components/trusted-by"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <VideoWorkflow />
      <Pricing />
      <TrustedBy />
      <Footer />
    </main>
  )
}
