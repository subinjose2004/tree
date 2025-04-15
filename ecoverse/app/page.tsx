"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, Leaf, TreeDeciduous, Users, BarChart3, GamepadIcon, Settings, LogOut } from "lucide-react"
import ForestVisualization from "@/components/forest-visualization"
import EcoActionsList from "@/components/eco-actions-list"
import GlobalQuestCard from "@/components/global-quest-card"
import LeaderboardPreview from "@/components/leaderboard-preview"
import PlantTreeModal from "@/components/plant-tree-modal"
import { useToast } from "@/components/ui/use-toast"

export default function Home() {
  const [plantTreeOpen, setPlantTreeOpen] = useState(false)
  const { toast } = useToast()

  return (
    <main className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="flex items-center gap-2 font-semibold">
            <TreeDeciduous className="h-5 w-5 text-green-600" />
            <span>EcoVerse</span>
          </div>
          <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link
              href="/profile"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Profile
            </Link>
            <Link
              href="/games"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Games
            </Link>
            <Link
              href="/marketplace"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Marketplace
            </Link>
          </nav>
          <div className="ml-auto flex items-center space-x-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Leaf className="h-4 w-4 text-green-600" />
              <span>1,250 EP</span>
            </Button>
            <Button size="sm" onClick={() => setPlantTreeOpen(true)}>
              Plant a Tree
            </Button>
            <Link href="/settings">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Settings className="h-4 w-4" />
                <span className="sr-only">Settings</span>
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <LogOut className="h-4 w-4" />
                <span className="sr-only">Logout</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container py-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Your Forest</h2>
                <Button variant="outline" size="sm">
                  Expand Land
                </Button>
              </div>
              <ForestVisualization />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Green Score</h2>
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold">78</span>
                  </div>
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      className="text-muted stroke-current"
                      strokeWidth="10"
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                    />
                    <circle
                      className="text-green-500 stroke-current"
                      strokeWidth="10"
                      strokeLinecap="round"
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                      strokeDasharray="251.2"
                      strokeDashoffset="55.264"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Level 8 Eco Warrior</p>
                  <p className="text-xs text-muted-foreground mt-1">22 points until next level</p>
                </div>
                <div className="grid grid-cols-3 w-full gap-2 mt-2">
                  <div className="flex flex-col items-center">
                    <TreeDeciduous className="h-5 w-5 text-green-600" />
                    <span className="text-xs mt-1">42 Trees</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Award className="h-5 w-5 text-amber-500" />
                    <span className="text-xs mt-1">12 Badges</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Users className="h-5 w-5 text-blue-500" />
                    <span className="text-xs mt-1">18 Friends</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="actions">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="actions" className="flex items-center gap-2">
              <Leaf className="h-4 w-4" />
              <span>Eco Actions</span>
            </TabsTrigger>
            <TabsTrigger value="quests" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>Quests</span>
            </TabsTrigger>
            <TabsTrigger value="games" className="flex items-center gap-2">
              <GamepadIcon className="h-4 w-4" />
              <span>Mini Games</span>
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              <span>Leaderboard</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="actions" className="mt-4">
            <EcoActionsList />
          </TabsContent>

          <TabsContent value="quests" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <GlobalQuestCard
                title="Heal the Amazon"
                description="Join 50,000 EcoVerse users to plant 100,000 virtual trees and help fund real reforestation efforts in the Amazon."
                progress={65}
                participants={32450}
                daysLeft={12}
              />
              <GlobalQuestCard
                title="Ocean Cleanup Challenge"
                description="Track your plastic reduction efforts and help remove 5 tons of plastic from the ocean."
                progress={28}
                participants={18320}
                daysLeft={23}
              />
            </div>
          </TabsContent>

          <TabsContent value="games" className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Eco Puzzle",
                  description: "Solve puzzles to restore ecosystems",
                  reward: "25 EP",
                  image: "/placeholder.svg?height=150&width=250",
                },
                {
                  title: "Forest Defender",
                  description: "Tower defense game to protect forests",
                  reward: "30 EP",
                  image: "/placeholder.svg?height=150&width=250",
                },
                {
                  title: "Recycle Rush",
                  description: "Sort recyclables against the clock",
                  reward: "20 EP",
                  image: "/placeholder.svg?height=150&width=250",
                },
              ].map((game, index) => (
                <Card key={index}>
                  <CardContent className="p-0">
                    <img
                      src={game.image || "/placeholder.svg"}
                      alt={game.title}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold">{game.title}</h3>
                      <p className="text-sm text-muted-foreground">{game.description}</p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          Reward: {game.reward}
                        </span>
                        <Button size="sm">Play</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="leaderboard" className="mt-4">
            <LeaderboardPreview />
          </TabsContent>
        </Tabs>
      </div>

      <PlantTreeModal open={plantTreeOpen} onOpenChange={setPlantTreeOpen} />
    </main>
  )
}
