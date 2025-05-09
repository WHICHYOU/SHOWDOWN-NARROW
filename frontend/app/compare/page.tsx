"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type CompareResult = {
  match_percentage: number;
  shared: string[];
  different: string[];
};

export default function ComparePage() {
  const [userA, setUserA] = useState("");
  const [userB, setUserB] = useState("");
  const [result, setResult] = useState<CompareResult | null>(null);

  const compare = async () => {
    const res = await fetch(`/compare/${userA}/${userB}`);
    const data = await res.json();
    setResult(data);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Compare Friends</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Username A"
            value={userA}
            onChange={(e) => setUserA(e.target.value)}
          />
          <Input
            placeholder="Username B"
            value={userB}
            onChange={(e) => setUserB(e.target.value)}
          />
          <Button onClick={compare}>Compare</Button>
          {result && (
            <div className="space-y-2 mt-4 text-sm">
              <p>
                Match: <strong>{result.match_percentage}%</strong>
              </p>
              <p>Shared: {result.shared.join(", ")}</p>
              <p>Different: {result.different.join(", ")}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
