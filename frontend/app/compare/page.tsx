'use client'
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

interface CompareResult {
  match_percentage: number
  shared?: string[]
  different?: string[]
}

export default function Compare() {
  const [a, setA] = useState("")
  const [b, setB] = useState("")
  const [res, setRes] = useState<CompareResult | null>(null)

  const compare = async () => {
    const r = await fetch(`/compare/${a}/${b}`)
    const d = await r.json()
    setRes(d)
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <Card>
        <CardHeader><CardTitle>Compare Friends</CardTitle></CardHeader>
        <CardContent className="space-y-2">
          <Input placeholder="Username A" value={a} onChange={e => setA(e.target.value)} />
          <Input placeholder="Username B" value={b} onChange={e => setB(e.target.value)} />
          <Button onClick={compare}>Compare</Button>
        </CardContent>
      </Card>
      {res && (
        <Card className="mt-4">
          <CardHeader><CardTitle>Result</CardTitle></CardHeader>
          <CardContent>
            <p>Match: {res.match_percentage}%</p>
            <p>Shared: {res.shared?.join(", ")}</p>
            <p>Different: {res.different?.join(", ")}</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}