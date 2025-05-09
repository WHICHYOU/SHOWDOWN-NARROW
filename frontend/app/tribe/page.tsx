/*
 🔹 /tribe — Tribe Metadata Toggle
 ✅ Purpose: Let users opt in/out of public identity tags
 ✅ UI: Switch + optional emoji and tagline
 ✅ Intent: “Describe your taste tribe”
*/

"use client";
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";

export default function TribeSettings() {
  const [enabled, setEnabled] = useState(false);
  const [tagline, setTagline] = useState("");
  const [emoji, setEmoji] = useState("");

  useEffect(() => {
    const id = localStorage.getItem("user_id");
    if (!id) return;
    fetch(`/tribe/${id}`)
      .then((res) => res.json())
      .then((d) => {
        setEnabled(d.enabled);
        setTagline(d.tagline);
        setEmoji(d.emoji);
      });
  }, []);

  const save = async () => {
    const id = localStorage.getItem("user_id");
    await fetch(`/tribe/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ enabled, tagline, emoji }),
    });
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Tribe Identity</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            <Switch checked={enabled} onCheckedChange={setEnabled} />
            <span>Show my tribe metadata</span>
          </div>
          <Input
            placeholder="Optional emoji"
            value={emoji}
            onChange={(e) => setEmoji(e.target.value)}
          />
          <Input
            placeholder="Tagline (e.g. Minimal Maximalist)"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
          />
          <button
            onClick={save}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </CardContent>
      </Card>
    </div>
  );
}
