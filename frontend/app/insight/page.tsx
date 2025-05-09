/*
 🔹 /insight — Archetype Summary
 ✅ Purpose: Deliver a high-level identity based on vote graph
 ✅ UI: Title + description
 ✅ Intent: “You are a Minimalist Idealist”
*/

'use client'
import { useEffect, useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function InsightPage() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    const id = localStorage.getItem("user_id")
    if (!id) return
    fetch(`/users/${id}/insight`)
      .then(res => res.json())
      .then(setData)
  }, [])

  if (!data) return <p className="text-center mt-10">Analyzing your taste...</p>

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader><CardTitle>Your Archetype</CardTitle></CardHeader>
        <CardContent>
          <h2 className="text-lg font-semibold">{data.archetype}</h2>
          <p className="text-muted-foreground">{data.description}</p>
        </CardContent>
      </Card>
    </div>
  )
}