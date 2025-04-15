"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Leaf, TreeDeciduous } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

interface PlantTreeModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function PlantTreeModal({ open, onOpenChange }: PlantTreeModalProps) {
  const [selectedTree, setSelectedTree] = useState("oak")
  const [isPlanting, setIsPlanting] = useState(false)

  const trees = [
    {
      id: "oak",
      name: "Oak Tree",
      description: "Majestic and long-living tree",
      cost: 100,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "maple",
      name: "Maple Tree",
      description: "Vibrant autumn colors",
      cost: 120,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "pine",
      name: "Pine Tree",
      description: "Evergreen conifer with needle-like leaves",
      cost: 90,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "cherry",
      name: "Cherry Blossom",
      description: "Beautiful flowering tree",
      cost: 150,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const handlePlantTree = () => {
    setIsPlanting(true)

    // Simulate API call
    setTimeout(() => {
      setIsPlanting(false)
      onOpenChange(false)

      const selectedTreeData = trees.find((tree) => tree.id === selectedTree)

      toast({
        title: "Tree planted successfully!",
        description: `You've planted a ${selectedTreeData?.name}. -${selectedTreeData?.cost} EP`,
      })
    }, 1500)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Plant a New Tree</DialogTitle>
          <DialogDescription>
            Choose a tree species to add to your forest. Different trees have different costs and benefits.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <RadioGroup value={selectedTree} onValueChange={setSelectedTree} className="space-y-3">
            {trees.map((tree) => (
              <div key={tree.id} className="flex items-center space-x-2 border rounded-lg p-3">
                <RadioGroupItem value={tree.id} id={tree.id} />
                <img src={tree.image || "/placeholder.svg"} alt={tree.name} className="w-12 h-12 object-cover mx-2" />
                <div className="flex-1">
                  <Label htmlFor={tree.id} className="font-medium">
                    {tree.name}
                  </Label>
                  <p className="text-sm text-muted-foreground">{tree.description}</p>
                </div>
                <div className="flex items-center text-sm font-medium">
                  <Leaf className="h-4 w-4 text-green-600 mr-1" />
                  {tree.cost} EP
                </div>
              </div>
            ))}
          </RadioGroup>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handlePlantTree} disabled={isPlanting} className="gap-2">
            {isPlanting ? (
              <>Planting...</>
            ) : (
              <>
                <TreeDeciduous className="h-4 w-4" />
                Plant Tree
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
