'use client'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function InsightPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card>
        <CardHeader><CardTitle>🪐 Your Taste Orbit</CardTitle></CardHeader>
        <CardContent className="text-sm space-y-4">
          <p>You orbit around: 🎧 Minimalist, ☕ Cozy, 🔥 Bold</p>
          <div className="w-full flex justify-center">
            <img src="/sample-orbit.png" alt="orbit graph" className="w-80 h-80" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}