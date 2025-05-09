"use client";
import React, { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

// Define the type of a vote item
interface VoteItem {
  id: number;
  choice: string;
}

const VoteHistoryPage = () => {
  const { toast } = useToast();
  const [votes, setVotes] = useState<VoteItem[]>([]); // 👈 Add type here

  useEffect(() => {
    // Simulate vote fetch
    setVotes([{ id: 1, choice: "Mac > Windows" }]);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Your Vote History</h1>
      <ul>
        {votes.map((v) => (
          <li key={v.id} className="text-sm">
            {v.choice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VoteHistoryPage;
