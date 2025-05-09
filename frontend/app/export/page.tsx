/*
 🔹 /export — Data Download
 ✅ Purpose: Let users export their vote history + tags
 ✅ UI: Button for downloading JSON
 ✅ Intent: “Take your data with you”
*/

'use client'
import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function ExportPage() {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    const id = localStorage.getItem("user_id")
    if (!id) return
    fetch(`/users/${id}/votes`)
      .then(res => res.json())
      .then(setData)
  }, [])

  const download = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "my_showdown_data.json"
    a.click()
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <Card>
        <CardHeader><CardTitle>Export Your Vote Data</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <p>You can download all your voting history and tags as JSON.</p>
          <Button onClick={download}>Download JSON</Button>
        </CardContent>
      </Card>
    </div>
  )
}