"use client";

import { useState } from "react";

// Shared type definition
export interface Showdown {
  id: string;
  left: string;
  right: string;
  category?: string;
  submitted_by: string;
}

interface Props {
  showdown: Showdown;
}

export default function ShowdownCard({ showdown }: Props) {
  const [voted, setVoted] = useState<null | "left" | "right">(null);

  const handleVote = (choice: "left" | "right") => {
    if (voted) return;
    setVoted(choice);
  };

  return (
    <div className="border rounded-2xl shadow p-6 flex flex-col items-center space-y-4">
      <div className="text-sm text-gray-500">
        {showdown.category || "General"}
      </div>
      <div className="grid grid-cols-2 gap-4 w-full">
        <button
          className={`p-4 border rounded-xl ${
            voted === "left" ? "bg-green-200" : "hover:bg-green-100"
          }`}
          onClick={() => handleVote("left")}
          disabled={!!voted}
        >
          {showdown.left}
        </button>
        <button
          className={`p-4 border rounded-xl ${
            voted === "right" ? "bg-blue-200" : "hover:bg-blue-100"
          }`}
          onClick={() => handleVote("right")}
          disabled={!!voted}
        >
          {showdown.right}
        </button>
      </div>
      {voted && (
        <div className="text-xs text-gray-600">
          You voted: <strong>{voted}</strong>
        </div>
      )}
    </div>
  );
}
