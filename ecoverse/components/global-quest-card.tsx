import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Users, Clock } from "lucide-react"

interface GlobalQuestCardProps {
  title: string
  description: string
  progress: number
  participants: number
  daysLeft: number
}

export default function GlobalQuestCard({
  title,
  description,
  progress,
  participants,
  daysLeft,
}: GlobalQuestCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>

        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="h-4 w-4 mr-1" />
            <span>{participants.toLocaleString()} participants</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            <span>{daysLeft} days left</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
        <Button variant="outline">Learn More</Button>
        <Button>Join Quest</Button>
      </CardFooter>
    </Card>
  )
}
