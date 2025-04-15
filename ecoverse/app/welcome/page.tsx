import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TreeDeciduous, Leaf, Award, Users, Globe } from "lucide-react"

export default function WelcomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <TreeDeciduous className="h-5 w-5 text-green-600" />
            <span>EcoVerse</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-green-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Grow Your Virtual Forest, Make a Real Impact
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  EcoVerse is a gamified social platform where your eco-friendly actions grow virtual forests and fund
                  real-world environmental projects.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/signup">
                    <Button size="lg" className="w-full sm:w-auto">
                      Get Started
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      I Already Have an Account
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[350px] rounded-xl overflow-hidden bg-green-200 border">
                <div className="absolute inset-0 flex items-center justify-center">
                  <TreeDeciduous className="h-24 w-24 text-green-600" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-green-300/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="text-muted-foreground md:text-xl">
                  Turn everyday eco-friendly actions into a fun, rewarding experience
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-4 bg-green-100 rounded-full">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Complete Eco Actions</h3>
                <p className="text-muted-foreground">
                  Track your daily eco-friendly activities like cycling, recycling, and conserving energy to earn Energy
                  Points (EP).
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-4 bg-green-100 rounded-full">
                  <TreeDeciduous className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Grow Your Forest</h3>
                <p className="text-muted-foreground">
                  Use your earned EP to plant and grow virtual trees in your personal forest, creating a digital
                  ecosystem.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-4 bg-green-100 rounded-full">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Make Real Impact</h3>
                <p className="text-muted-foreground">
                  As your virtual forest grows, we partner with environmental organizations to plant real trees and fund
                  conservation efforts.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Features</h2>
                <p className="text-muted-foreground md:text-xl">
                  Explore the many ways EcoVerse makes sustainability engaging and rewarding
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="flex flex-col space-y-2">
                <TreeDeciduous className="h-6 w-6 text-green-600" />
                <h3 className="text-lg font-bold">Virtual Forests</h3>
                <p className="text-sm text-muted-foreground">
                  Create and customize your own virtual forest with different tree species and layouts.
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <Award className="h-6 w-6 text-amber-500" />
                <h3 className="text-lg font-bold">Achievements & Quests</h3>
                <p className="text-sm text-muted-foreground">
                  Complete challenges and earn badges as you progress on your eco-friendly journey.
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <Users className="h-6 w-6 text-blue-500" />
                <h3 className="text-lg font-bold">Social Community</h3>
                <p className="text-sm text-muted-foreground">
                  Connect with friends, share your progress, and participate in global environmental initiatives.
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <Leaf className="h-6 w-6 text-green-600" />
                <h3 className="text-lg font-bold">Real-World Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Track your carbon offset and see how your virtual actions translate to real environmental benefits.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <Link href="/signup">
                <Button size="lg">Join EcoVerse Today</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 py-6 md:py-10">
          <div className="flex items-center gap-2 font-semibold">
            <TreeDeciduous className="h-5 w-5 text-green-600" />
            <span>EcoVerse</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} EcoVerse. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
