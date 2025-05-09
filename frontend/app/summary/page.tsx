'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SummaryPage() {
  const [copied, setCopied] = useState(false)
  const shareText = "I chose 🐱 over 🐶, 🍜 over 🍕, Nike over Adidas. Who are you? → yoister.com"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <Card>
        <CardHeader><CardTitle>Summary</CardTitle></CardHeader>
        <CardContent>
          <p className="text-sm mb-4">{shareText}</p>
          <Button onClick={copyToClipboard}>
            {copied ? "✅ Copied!" : "📋 Copy for Social"}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}