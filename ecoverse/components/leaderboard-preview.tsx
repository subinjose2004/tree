import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const leaderboardData = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    score: 12450,
    trees: 124,
    rank: 1,
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    score: 11280,
    trees: 112,
    rank: 2,
  },
  {
    id: 3,
    name: "Emma Williams",
    avatar: "/placeholder.svg?height=40&width=40",
    score: 10950,
    trees: 109,
    rank: 3,
  },
  {
    id: 4,
    name: "David Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    score: 9870,
    trees: 98,
    rank: 4,
  },
  {
    id: 5,
    name: "Olivia Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    score: 9340,
    trees: 93,
    rank: 5,
  },
  {
    id: 6,
    name: "You",
    avatar: "/placeholder.svg?height=40&width=40",
    score: 7820,
    trees: 78,
    rank: 18,
    isCurrentUser: true,
  },
]

export default function LeaderboardPreview() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle>Leaderboard</CardTitle>
          <Button variant="ghost" size="sm">
            View Full
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="global">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="global">Global</TabsTrigger>
            <TabsTrigger value="friends">Friends</TabsTrigger>
            <TabsTrigger value="local">Local</TabsTrigger>
          </TabsList>

          <TabsContent value="global" className="mt-4">
            <div className="space-y-4">
              {leaderboardData.map((user) => (
                <div
                  key={user.id}
                  className={`flex items-center p-2 rounded-lg ${user.isCurrentUser ? "bg-muted" : ""}`}
                >
                  <div className="w-8 text-center font-medium">#{user.rank}</div>
                  <Avatar className="h-10 w-10 border">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="ml-3 flex-1">
                    <div className="font-medium">{user.name}</div>
                    <div className="text-xs text-muted-foreground">{user.trees} trees planted</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{user.score.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">Green Score</div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="friends">
            <div className="h-[300px] flex items-center justify-center">
              <p className="text-muted-foreground">Connect with friends to see their rankings</p>
            </div>
          </TabsContent>

          <TabsContent value="local">
            <div className="h-[300px] flex items-center justify-center">
              <p className="text-muted-foreground">Enable location to see local rankings</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
