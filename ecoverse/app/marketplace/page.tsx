import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Filter, TreeDeciduous, Flower2, Cloud, Bird, Leaf } from "lucide-react"

export default function MarketplacePage() {
  return (
    <main className="container py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Marketplace</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Leaf className="h-4 w-4 text-green-600" />
            <span>1,250 EP</span>
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search marketplace..." className="pl-8" />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="trees">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="trees" className="flex items-center gap-2">
            <TreeDeciduous className="h-4 w-4" />
            <span>Trees</span>
          </TabsTrigger>
          <TabsTrigger value="plants" className="flex items-center gap-2">
            <Flower2 className="h-4 w-4" />
            <span>Plants</span>
          </TabsTrigger>
          <TabsTrigger value="animals" className="flex items-center gap-2">
            <Bird className="h-4 w-4" />
            <span>Animals</span>
          </TabsTrigger>
          <TabsTrigger value="environment" className="flex items-center gap-2">
            <Cloud className="h-4 w-4" />
            <span>Environment</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="trees" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              {
                name: "Oak Tree",
                description: "Majestic and long-living tree",
                price: 100,
                image: "/placeholder.svg?height=200&width=200",
                rarity: "Common",
              },
              {
                name: "Cherry Blossom",
                description: "Beautiful flowering tree",
                price: 150,
                image: "/placeholder.svg?height=200&width=200",
                rarity: "Uncommon",
              },
              {
                name: "Redwood",
                description: "Towering ancient giant",
                price: 300,
                image: "/placeholder.svg?height=200&width=200",
                rarity: "Rare",
              },
              {
                name: "Baobab",
                description: "Iconic African tree",
                price: 250,
                image: "/placeholder.svg?height=200&width=200",
                rarity: "Uncommon",
              },
              {
                name: "Maple Tree",
                description: "Vibrant autumn colors",
                price: 120,
                image: "/placeholder.svg?height=200&width=200",
                rarity: "Common",
              },
              {
                name: "Wisteria",
                description: "Cascading purple flowers",
                price: 200,
                image: "/placeholder.svg?height=200&width=200",
                rarity: "Uncommon",
              },
              {
                name: "Bonsai Pine",
                description: "Miniature artistic tree",
                price: 350,
                image: "/placeholder.svg?height=200&width=200",
                rarity: "Rare",
              },
              {
                name: "Willow Tree",
                description: "Graceful weeping branches",
                price: 180,
                image: "/placeholder.svg?height=200&width=200",
                rarity: "Uncommon",
              },
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full aspect-square object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                          item.rarity === "Common"
                            ? "bg-green-100 text-green-800"
                            : item.rarity === "Uncommon"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {item.rarity}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="font-medium text-sm flex items-center">
                        <Leaf className="h-4 w-4 text-green-600 mr-1" />
                        {item.price} EP
                      </span>
                      <span className="text-xs text-muted-foreground">Plants a real tree at 500 EP</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full">Purchase</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="plants" className="mt-6">
          <div className="h-[300px] flex items-center justify-center">
            <p className="text-muted-foreground">Explore plants and flowers for your EcoVerse</p>
          </div>
        </TabsContent>

        <TabsContent value="animals" className="mt-6">
          <div className="h-[300px] flex items-center justify-center">
            <p className="text-muted-foreground">Add wildlife to your virtual ecosystem</p>
          </div>
        </TabsContent>

        <TabsContent value="environment" className="mt-6">
          <div className="h-[300px] flex items-center justify-center">
            <p className="text-muted-foreground">Customize your environment with water features, rocks, and more</p>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}
