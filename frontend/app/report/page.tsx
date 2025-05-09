"use client";
import React, { useRef } from "react";
import html2canvas from "html2canvas";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ReportPage() {
  const cardRef = useRef<HTMLDivElement>(null);

  const download = async () => {
    if (!cardRef.current) return;
    const canvas = await html2canvas(cardRef.current);
    const link = document.createElement("a");
    link.download = "taste-card.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <Card ref={cardRef}>
        <CardHeader>
          <CardTitle>Your Taste Snapshot</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            This is your unique taste card. Download and share it!
          </p>
        </CardContent>
      </Card>
      <div className="mt-4 flex justify-center">
        <Button onClick={download}>Download as PNG</Button>
      </div>
    </div>
  );
}
