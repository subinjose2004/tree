import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, UserPlus, Users, UserCheck, UserX, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function FriendsPage() {
  return (
    <main className="container py-6 space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Friends</h1>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search friends..." className="pl-8" />
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add Friend
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>All Friends</span>
          </TabsTrigger>
          <TabsTrigger value="requests" className="flex items-center gap-2">
            <UserCheck className="h-4 w-4" />
            <span>Friend Requests</span>
          </TabsTrigger>
          <TabsTrigger value="suggestions" className="flex items-center gap-2">
            <UserPlus className="h-4 w-4" />
            <span>Suggestions</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Friends (18)</CardTitle>
              <CardDescription>People you've connected with on EcoVerse</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {[
                  {
                    name: "Sarah Johnson",
                    username: "@sarahj",
                    avatar: "/placeholder.svg?height=40&width=40",
                    level: 12,
                    trees: 124,
                    online: true,
                  },
                  {
                    name: "Michael Chen",
                    username: "@mikechen",
                    avatar: "/placeholder.svg?height=40&width=40",
                    level: 10,
                    trees: 112,
                    online: false,
                  },
                  {
                    name: "Emma Williams",
                    username: "@emmaw",
                    avatar: "/placeholder.svg?height=40&width=40",
                    level: 9,
                    trees: 109,
                    online: true,
                  },
                  {
                    name: "David Rodriguez",
                    username: "@davidr",
                    avatar: "/placeholder.svg?height=40&width=40",
                    level: 8,
                    trees: 98,
                    online: false,
                  },
                  {
                    name: "Olivia Smith",
                    username: "@olivias",
                    avatar: "/placeholder.svg?height=40&width=40",
                    level: 7,
                    trees: 93,
                    online: false,
                  },
                ].map((friend, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="h-10 w-10 border">
                          <AvatarImage src={friend.avatar || "/placeholder.svg"} alt={friend.name} />
                          <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        {friend.online && (
                          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                        )}
                      </div>
                      <div>
                        <div className="font-medium">{friend.name}</div>
                        <div className="text-xs text-muted-foreground">{friend.username}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-sm">Level {friend.level}</div>
                        <div className="text-xs text-muted-foreground">{friend.trees} trees</div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Visit
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="requests" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Friend Requests (3)</CardTitle>
              <CardDescription>People who want to connect with you</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {[
                  {
                    name: "Alex Thompson",
                    username: "@alext",
                    avatar: "/placeholder.svg?height=40&width=40",
                    level: 6,
                    mutualFriends: 3,
                  },
                  {
                    name: "Jessica Lee",
                    username: "@jesslee",
                    avatar: "/placeholder.svg?height=40&width=40",
                    level: 8,
                    mutualFriends: 5,
                  },
                  {
                    name: "Ryan Garcia",
                    username: "@ryang",
                    avatar: "/placeholder.svg?height=40&width=40",
                    level: 4,
                    mutualFriends: 2,
                  },
                ].map((request, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 border">
                        <AvatarImage src={request.avatar || "/placeholder.svg"} alt={request.name} />
                        <AvatarFallback>{request.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{request.name}</div>
                        <div className="text-xs text-muted-foreground">
                          Level {request.level} • {request.mutualFriends} mutual friends
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <UserX className="h-4 w-4 mr-1" />
                        Decline
                      </Button>
                      <Button size="sm">
                        <UserCheck className="h-4 w-4 mr-1" />
                        Accept
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="suggestions" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Friend Suggestions</CardTitle>
              <CardDescription>People you might want to connect with</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {[
                  {
                    name: "Sophia Martinez",
                    username: "@sophiam",
                    avatar: "/placeholder.svg?height=40&width=40",
                    level: 9,
                    mutualFriends: 4,
                    trees: 87,
                  },
                  {
                    name: "Ethan Wilson",
                    username: "@ethanw",
                    avatar: "/placeholder.svg?height=40&width=40",
                    level: 7,
                    mutualFriends: 2,
                    trees: 65,
                  },
                  {
                    name: "Ava Brown",
                    username: "@avab",
                    avatar: "/placeholder.svg?height=40&width=40",
                    level: 11,
                    mutualFriends: 6,
                    trees: 110,
                  },
                  {
                    name: "Noah Taylor",
                    username: "@noaht",
                    avatar: "/placeholder.svg?height=40&width=40",
                    level: 5,
                    mutualFriends: 1,
                    trees: 42,
                  },
                ].map((suggestion, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 border">
                        <AvatarImage src={suggestion.avatar || "/placeholder.svg"} alt={suggestion.name} />
                        <AvatarFallback>{suggestion.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{suggestion.name}</div>
                        <div className="text-xs text-muted-foreground">
                          Level {suggestion.level} • {suggestion.trees} trees
                        </div>
                        <div className="text-xs text-muted-foreground">{suggestion.mutualFriends} mutual friends</div>
                      </div>
                    </div>
                    <Button size="sm">
                      <UserPlus className="h-4 w-4 mr-1" />
                      Add
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}
