"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AdminShowdowns() {
  const [left, setLeft] = useState("");
  const [right, setRight] = useState("");
  const [cat, setCat] = useState("");

  const add = async () => {
    await fetch("/showdowns", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        left,
        right,
        category: cat,
        submitted_by: "admin",
      }),
    });
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Add Showdown</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Input
            placeholder="Left item"
            value={left}
            onChange={(e) => setLeft(e.target.value)}
          />
          <Input
            placeholder="Right item"
            value={right}
            onChange={(e) => setRight(e.target.value)}
          />
          <Input
            placeholder="Category"
            value={cat}
            onChange={(e) => setCat(e.target.value)}
          />
          <Button onClick={add}>Submit</Button>
        </CardContent>
      </Card>
    </div>
  );
}
