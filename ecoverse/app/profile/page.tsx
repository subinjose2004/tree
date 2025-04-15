import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { TreeDeciduous, Award, Users, Settings, Share2, MapPin, Calendar, Leaf } from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  return (
    <main className="container py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">My Profile</h1>
        <Link href="/settings">
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 border-4 border-green-100">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>

              <h2 className="mt-4 text-xl font-bold">zubn</h2>
              <p className="text-sm text-muted-foreground">Level 8 Eco Warrior</p>

              <div className="flex items-center mt-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                <span>INDIA, CA</span>
              </div>

              <div className="flex items-center mt-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                <span>Member since April 2025</span>
              </div>

              <div className="flex gap-2 mt-4">
                <Link href="/friends">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Users className="h-4 w-4" />
                    <span>Friends</span>
                  </Button>
                </Link>
                <Button size="sm" className="gap-1">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </Button>
              </div>

              <div className="w-full mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Green Score</span>
                  <span className="text-sm font-medium">7,820</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "78%" }}></div>
                </div>
                <p className="text-xs text-muted-foreground mt-1 text-right">22% until next level</p>
              </div>

              <div className="grid grid-cols-3 w-full gap-2 mt-6">
                <div className="flex flex-col items-center p-2 bg-muted rounded-lg">
                  <TreeDeciduous className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium mt-1">42</span>
                  <span className="text-xs text-muted-foreground">Trees</span>
                </div>
                <div className="flex flex-col items-center p-2 bg-muted rounded-lg">
                  <Award className="h-5 w-5 text-amber-500" />
                  <span className="text-sm font-medium mt-1">12</span>
                  <span className="text-xs text-muted-foreground">Badges</span>
                </div>
                <div className="flex flex-col items-center p-2 bg-muted rounded-lg">
                  <Users className="h-5 w-5 text-blue-500" />
                  <span className="text-sm font-medium mt-1">18</span>
                  <span className="text-xs text-muted-foreground">Friends</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>My EcoVerse</CardTitle>
            <CardDescription>Track your eco-friendly journey</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="achievements">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="impact">Impact</TabsTrigger>
              </TabsList>

              <TabsContent value="achievements" className="mt-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Early Bird",
                      description: "Joined during launch month",
                      icon: Award,
                      color: "bg-amber-100 text-amber-700",
                    },
                    {
                      title: "Tree Hugger",
                      description: "Planted 25+ trees",
                      icon: TreeDeciduous,
                      color: "bg-green-100 text-green-700",
                    },
                    {
                      title: "Eco Warrior",
                      description: "Completed 100+ eco actions",
                      icon: Leaf,
                      color: "bg-emerald-100 text-emerald-700",
                    },
                    {
                      title: "Social Butterfly",
                      description: "Connected with 10+ friends",
                      icon: Users,
                      color: "bg-blue-100 text-blue-700",
                    },
                    {
                      title: "Quest Master",
                      description: "Completed 5 global quests",
                      icon: Award,
                      color: "bg-purple-100 text-purple-700",
                    },
                    {
                      title: "Carbon Reducer",
                      description: "Saved 500kg of CO₂",
                      icon: Leaf,
                      color: "bg-cyan-100 text-cyan-700",
                    },
                  ].map((badge, index) => (
                    <div key={index} className="flex flex-col items-center p-4 border rounded-lg">
                      <div className={`p-3 rounded-full ${badge.color}`}>
                        <badge.icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-2 font-medium text-center">{badge.title}</h3>
                      <p className="text-xs text-muted-foreground text-center mt-1">{badge.description}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="activity" className="mt-4">
                <div className="space-y-4">
                  {[
                    { action: "Planted an Oak tree", date: "Today", points: 100 },
                    { action: "Completed 'Bike to Work' action", date: "Yesterday", points: 25 },
                    { action: "Joined 'Heal the Amazon' quest", date: "2 days ago", points: 50 },
                    { action: "Completed 'Recycle Materials' action", date: "3 days ago", points: 15 },
                    { action: "Earned 'Tree Hugger' badge", date: "1 week ago", points: 200 },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-2 rounded-full">
                          <Leaf className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <div className="font-medium">{activity.action}</div>
                          <div className="text-xs text-muted-foreground">{activity.date}</div>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-green-50">
                        +{activity.points} EP
                      </Badge>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="impact" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Carbon Offset</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">840kg</div>
                      <p className="text-sm text-muted-foreground">CO₂ equivalent saved</p>
                      <div className="mt-4 text-xs text-muted-foreground">
                        Equal to planting 42 real trees or not driving for 3 months
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Real-World Impact</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">5 Trees</div>
                      <p className="text-sm text-muted-foreground">Planted through our NGO partners</p>
                      <div className="mt-4 text-xs text-muted-foreground">
                        Your virtual actions have funded real reforestation projects
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
