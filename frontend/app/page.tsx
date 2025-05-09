import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="max-w-md w-full text-center">
        <CardHeader><CardTitle>Welcome to Showdown</CardTitle></CardHeader>
        <CardContent>
          <p className="mb-4">Make choices. Discover your preferences.</p>
          <Button asChild><a href="/taste-match">Start</a></Button>
        </CardContent>
      </Card>
    </div>
  )
}