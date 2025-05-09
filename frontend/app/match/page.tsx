/*
 🔹 /match — Instant Summary Page
 ✅ Purpose: Automatically shows your top taste matches
 ✅ UI: Auto-loaded score list
 ✅ Intent: “Who is most like me?”
*/

"use client";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function MatchScores() {
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const id = localStorage.getItem("user_id");
    if (!id) return;
    fetch(`/match/${id}`)
      .then((res) => res.json())
      .then(setResults);
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Top Taste Matches</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-1">
            {results.map((r, i) => (
              <li key={i}>
                <span className="font-semibold">{r.username}</span>:{" "}
                {r.match_score}%
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
