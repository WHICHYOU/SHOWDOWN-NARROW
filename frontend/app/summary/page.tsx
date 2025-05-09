/*
 🔹 /summary — Tag Summary Page
 ✅ Purpose: Show user’s most common tags
 ✅ UI: Badge grid
 ✅ Intent: “What words describe your choices?”
*/

'use client'
import { useEffect, useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SummaryTags() {
  const [tags, setTags] = useState<string[]>([])

  useEffect(() => {
    const id = localStorage.getItem("user_id")
    if (!id) return
    fetch(`/users/${id}/top-tags`)
      .then(res => res.json())
      .then(setTags)
  }, [])

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader><CardTitle>Your Most Used Tags</CardTitle></CardHeader>
        <CardContent className="flex gap-2 flex-wrap">
          {tags.map((tag, i) => (
            <Badge key={i}>{tag}</Badge>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}