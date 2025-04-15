import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { GamepadIcon, Trophy, Clock, Star, Leaf } from "lucide-react"

export default function GamesPage() {
  return (
    <main className="container py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Mini Games</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Leaf className="h-4 w-4 text-green-600" />
            <span>1,250 EP</span>
          </Button>
        </div>
      </div>

      <p className="text-muted-foreground">
        Play eco-themed games to earn Energy Points (EP) and help grow your virtual forest
      </p>

      <Tabs defaultValue="all">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Games</TabsTrigger>
          <TabsTrigger value="puzzle">Puzzle</TabsTrigger>
          <TabsTrigger value="action">Action</TabsTrigger>
          <TabsTrigger value="strategy">Strategy</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Eco Puzzle",
                description: "Solve puzzles to restore ecosystems and earn EP",
                image: "/placeholder.svg?height=200&width=350",
                category: "Puzzle",
                reward: "25 EP",
                time: "5 min",
                difficulty: "Easy",
              },
              {
                title: "Forest Defender",
                description: "Tower defense game to protect forests from deforestation",
                image: "/placeholder.svg?height=200&width=350",
                category: "Strategy",
                reward: "30 EP",
                time: "10 min",
                difficulty: "Medium",
              },
              {
                title: "Recycle Rush",
                description: "Sort recyclables against the clock to earn points",
                image: "/placeholder.svg?height=200&width=350",
                category: "Action",
                reward: "20 EP",
                time: "3 min",
                difficulty: "Easy",
              },
              {
                title: "Ocean Cleanup",
                description: "Remove plastic from the ocean in this action game",
                image: "/placeholder.svg?height=200&width=350",
                category: "Action",
                reward: "35 EP",
                time: "8 min",
                difficulty: "Medium",
              },
              {
                title: "Climate Challenge",
                description: "Strategy game about balancing resources and climate impact",
                image: "/placeholder.svg?height=200&width=350",
                category: "Strategy",
                reward: "50 EP",
                time: "15 min",
                difficulty: "Hard",
              },
              {
                title: "Wildlife Rescue",
                description: "Puzzle game about helping endangered animals",
                image: "/placeholder.svg?height=200&width=350",
                category: "Puzzle",
                reward: "40 EP",
                time: "12 min",
                difficulty: "Medium",
              },
            ].map((game, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <img src={game.image || "/placeholder.svg"} alt={game.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{game.title}</h3>
                      <Badge variant="outline" className="bg-green-50">
                        {game.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{game.description}</p>

                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <div className="flex flex-col items-center p-2 bg-muted rounded-lg">
                        <Leaf className="h-4 w-4 text-green-600" />
                        <span className="text-xs font-medium mt-1">{game.reward}</span>
                        <span className="text-xs text-muted-foreground">Reward</span>
                      </div>
                      <div className="flex flex-col items-center p-2 bg-muted rounded-lg">
                        <Clock className="h-4 w-4 text-blue-600" />
                        <span className="text-xs font-medium mt-1">{game.time}</span>
                        <span className="text-xs text-muted-foreground">Time</span>
                      </div>
                      <div className="flex flex-col items-center p-2 bg-muted rounded-lg">
                        <Star className="h-4 w-4 text-amber-500" />
                        <span className="text-xs font-medium mt-1">{game.difficulty}</span>
                        <span className="text-xs text-muted-foreground">Difficulty</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full gap-2">
                    <GamepadIcon className="h-4 w-4" />
                    <span>Play Now</span>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="puzzle" className="mt-6">
          <div className="h-[300px] flex items-center justify-center">
            <p className="text-muted-foreground">Puzzle games will be displayed here</p>
          </div>
        </TabsContent>

        <TabsContent value="action" className="mt-6">
          <div className="h-[300px] flex items-center justify-center">
            <p className="text-muted-foreground">Action games will be displayed here</p>
          </div>
        </TabsContent>

        <TabsContent value="strategy" className="mt-6">
          <div className="h-[300px] flex items-center justify-center">
            <p className="text-muted-foreground">Strategy games will be displayed here</p>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Tournaments & Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Weekly Eco Challenge</h3>
                <Badge>Active</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Complete all eco games this week to earn bonus EP and a special tree variety
              </p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-amber-500" />
                  <span className="font-medium">200 EP + Rare Cherry Blossom</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>3 days left</span>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>2/6 games</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "33%" }}></div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0">
              <Button className="w-full">View Challenge</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Forest Defender Tournament</h3>
                <Badge variant="outline">Coming Soon</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Compete against other players in our strategy game tournament
              </p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-amber-500" />
                  <span className="font-medium">500 EP + Legendary Baobab</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Starts in 5 days</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0">
              <Button variant="outline" className="w-full">
                Register
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  )
}
