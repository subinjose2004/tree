"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Bike,
  Recycle,
  Droplets,
  Bus,
  Plus,
  TreeDeciduous,
  GamepadIcon,
  Share2,
  MapPin,
  CheckCircle2,
  XCircle,
} from "lucide-react"

const ecoActions = [
  {
    id: 1,
    title: "Plant a Maple Tree",
    icon: TreeDeciduous,
    points: 120,
    description: "Plant a maple tree in your virtual forest",
    color: "text-green-500",
    bgColor: "bg-green-100",
    locationBased: false,
  },
  {
    id: 2,
    title: "Bike to Work",
    icon: Bike,
    points: 25,
    description: "Reduce carbon emissions by cycling instead of driving",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    locationBased: true,
    location: "San Francisco, CA",
  },
  {
    id: 3,
    title: "Play Eco Puzzle",
    icon: GamepadIcon,
    points: 25,
    description: "Complete one round of the Eco Puzzle mini-game",
    color: "text-purple-500",
    bgColor: "bg-purple-100",
    locationBased: false,
  },
  {
    id: 4,
    title: "Share Your Forest",
    icon: Share2,
    points: 15,
    description: "Share your forest progress with friends on social media",
    color: "text-cyan-500",
    bgColor: "bg-cyan-100",
    locationBased: false,
  },
  {
    id: 5,
    title: "Visit Local Recycling Center",
    icon: Recycle,
    points: 30,
    description: "Drop off recyclables at the center on Market Street",
    color: "text-emerald-500",
    bgColor: "bg-emerald-100",
    locationBased: true,
    location: "San Francisco, CA",
  },
  {
    id: 6,
    title: "Use Reusable Water Bottle",
    icon: Droplets,
    points: 10,
    description: "Avoid single-use plastic bottles for the day",
    color: "text-yellow-500",
    bgColor: "bg-yellow-100",
    locationBased: false,
  },
  {
    id: 7,
    title: "Take Public Transport",
    icon: Bus,
    points: 20,
    description: "Use BART or Muni instead of driving",
    color: "text-orange-500",
    bgColor: "bg-orange-100",
    locationBased: true,
    location: "San Francisco, CA",
  },
]

export default function EcoActionsList() {
  const [completedActions, setCompletedActions] = useState<number[]>([])
  const [dailyProgress, setDailyProgress] = useState(30)

  const handleCompleteAction = (actionId: number) => {
    if (completedActions.includes(actionId)) {
      return
    }

    const action = ecoActions.find((a) => a.id === actionId)
    if (action) {
      setCompletedActions([...completedActions, actionId])
      setDailyProgress(Math.min(100, dailyProgress + action.points / 2))
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-medium">Daily Eco Goal</h3>
          <p className="text-sm text-muted-foreground">Complete eco-friendly actions to earn EP</p>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium">{dailyProgress}%</div>
          <div className="text-xs text-muted-foreground">
            {completedActions.length} of {ecoActions.length} actions completed
          </div>
        </div>
      </div>

      <Progress value={dailyProgress} className="h-2" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {ecoActions.map((action) => (
          <Card key={action.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex items-center p-4">
                <div className={`${action.bgColor} p-3 rounded-lg mr-4`}>
                  <action.icon className={`h-5 w-5 ${action.color}`} />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{action.title}</h4>
                  <p className="text-xs text-muted-foreground">{action.description}</p>
                  {action.locationBased && (
                    <div className="flex items-center mt-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{action.location}</span>
                    </div>
                  )}
                </div>
                <div className="ml-4 flex flex-col items-end">
                  <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                    +{action.points} EP
                  </span>

                  {completedActions.includes(action.id) ? (
                    <div className="flex items-center mt-2 text-green-600">
                      <CheckCircle2 className="h-4 w-4 mr-1" />
                      <span className="text-xs font-medium">Completed</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-end gap-2 mt-2">
                      <div className="flex items-center text-amber-600">
                        <XCircle className="h-4 w-4 mr-1" />
                        <span className="text-xs font-medium">Incomplete</span>
                      </div>
                      <Button size="sm" variant="default" onClick={() => handleCompleteAction(action.id)}>
                        Complete
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="border-dashed">
          <CardContent className="p-4 flex items-center justify-center h-full">
            <Button variant="ghost" className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              <span>Add Custom Eco Action</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
