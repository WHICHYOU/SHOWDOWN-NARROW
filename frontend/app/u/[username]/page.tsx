"use client";
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PublicProfile({
  params,
}: {
  params: { username: string };
}) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(`/public-profile/${params.username}`)
      .then((res) => res.json())
      .then(setData);
  }, [params.username]);

  if (!data) return <p className="text-center mt-10">Loading profile...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>@{params.username}'s Top Preferences</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-1">
            {data.top_choices.map((item: string, i: number) => (
              <li key={i}>
                #{i + 1}: {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {data.tags && (
        <Card>
          <CardHeader>
            <CardTitle>Frequent Tags</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2 flex-wrap">
            {data.tags.map((tag: string, i: number) => (
              <Badge key={i}>{tag}</Badge>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
