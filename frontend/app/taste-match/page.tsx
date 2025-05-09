'use client'
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

interface MatchResult {
  username: string
  match_score: number
}

export default function TasteMatch() {
  const [u, setU] = useState("")
  const [r, setR] = useState<MatchResult[]>([])

  const fetchMatches = async () => {
    const res = await fetch(`/match/${u}`)
    const data = await res.json()
    setR(data)
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <Card>
        <CardHeader><CardTitle>Find Matches</CardTitle></CardHeader>
        <CardContent className="space-y-2">
          <Input placeholder="Your username" value={u} onChange={e => setU(e.target.value)} />
          <Button onClick={fetchMatches}>Find</Button>
          <ul>{r.map((m, i) => <li key={i}>{m.username} - {m.match_score}%</li>)}</ul>
        </CardContent>
      </Card>
    </div>
  )
}