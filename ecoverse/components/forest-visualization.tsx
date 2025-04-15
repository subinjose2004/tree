"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, EyeOff, ZoomIn, ZoomOut } from "lucide-react"

export default function ForestVisualization() {
  const [zoom, setZoom] = useState(1)
  const [showLabels, setShowLabels] = useState(true)

  const handleZoomIn = () => {
    if (zoom < 1.5) setZoom(zoom + 0.1)
  }

  const handleZoomOut = () => {
    if (zoom > 0.5) setZoom(zoom - 0.1)
  }

  return (
    <div className="space-y-4">
      <Tabs defaultValue="forest">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="forest">Forest View</TabsTrigger>
          <TabsTrigger value="map">Map View</TabsTrigger>
        </TabsList>

        <TabsContent value="forest" className="mt-2">
          <div
            className="relative bg-gradient-to-b from-green-50 to-green-100 rounded-lg overflow-hidden"
            style={{ height: "350px" }}
          >
            <div className="absolute inset-0 p-4" style={{ transform: `scale(${zoom})`, transformOrigin: "center" }}>
              {/* This would be replaced with an actual interactive forest visualization */}
              <div className="grid grid-cols-6 gap-4 h-full">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={i} className="relative flex items-end justify-center">
                    {i % 5 === 0 && <div className="absolute bottom-0 w-16 h-16 bg-green-700 rounded-full -mb-2"></div>}
                    {i % 3 === 0 && (
                      <div className="absolute bottom-0 w-12 h-20 bg-green-600 rounded-t-full -mb-2"></div>
                    )}
                    {i % 2 === 0 && (
                      <div className="absolute bottom-0 w-10 h-14 bg-green-500 rounded-t-full -mb-2"></div>
                    )}
                    {showLabels && i % 4 === 0 && (
                      <div className="absolute bottom-0 mb-16 bg-white/80 rounded px-2 py-1 text-xs">Oak Tree</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-4 right-4 flex flex-col gap-2">
              <Button
                variant="secondary"
                size="icon"
                className="h-8 w-8 rounded-full bg-white/80"
                onClick={handleZoomIn}
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="h-8 w-8 rounded-full bg-white/80"
                onClick={handleZoomOut}
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="h-8 w-8 rounded-full bg-white/80"
                onClick={() => setShowLabels(!showLabels)}
              >
                {showLabels ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>

            <div className="absolute bottom-4 left-4 bg-white/80 rounded-lg px-3 py-2 text-xs">
              <div className="font-medium">Your Forest Stats</div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-1">
                <div>Trees: 42</div>
                <div>Species: 8</div>
                <div>Area: 2.5 acres</div>
                <div>CO₂ Offset: 840kg</div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="map" className="mt-2">
          <div className="bg-slate-100 rounded-lg overflow-hidden" style={{ height: "350px" }}>
            <div className="h-full w-full flex items-center justify-center">
              <div className="text-center">
                <p className="text-muted-foreground">Map view would show your forest location</p>
                <p className="text-xs text-muted-foreground mt-1">AR features would be available here</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between">
        <Button variant="outline" size="sm">
          Share Forest
        </Button>
        <Button size="sm">Plant New Tree (100 EP)</Button>
      </div>
    </div>
  )
}
