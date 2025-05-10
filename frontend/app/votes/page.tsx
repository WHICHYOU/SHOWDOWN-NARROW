"use client";
import React, { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface Showdown {
  id?: string;
  left: string;
  right: string;
  category?: string;
}

const VoteHistoryPage = () => {
  const { toast } = useToast();
  const [votes, setVotes] = useState<Showdown[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVotes = async () => {
      try {
        const baseUrl =
          process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
        const response = await fetch(`${baseUrl}/showdowns`);
        if (!response.ok) throw new Error(`HTTP error ${response.status}`);
        const data = await response.json();

        const showdownList = Array.isArray(data.showdowns)
          ? data.showdowns
          : Array.isArray(data)
          ? data
          : [];

        const recentVotes = showdownList.slice(0, 5);
        setVotes(recentVotes);

        toast({
          title: "Vote history loaded",
          description: `Showing ${recentVotes.length} recent showdowns.`,
        });
      } catch (error) {
        console.error("Failed to fetch votes", error);
        toast({
          title: "Error",
          description: "Failed to fetch vote history.",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchVotes();
  }, [toast]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Your Vote History</h1>
      {loading ? (
        <p>Loading...</p>
      ) : votes.length === 0 ? (
        <p>No recent votes found. Try voting first.</p>
      ) : (
        <ul className="space-y-2">
          {votes.map((v, idx) => (
            <li key={`${v.left}-${v.right}-${idx}`}>
              <span className="font-medium">{v.left}</span> &gt;{" "}
              <span className="font-medium">{v.right}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VoteHistoryPage;
