// Mock Data. votes/page.tsx only for now.

"use client";

import { useEffect, useState } from "react";
import { getAllShowdowns } from "@/lib/api";
import ShowdownCard, { Showdown } from "@/components/ShowdownCard";
import axios from "axios";

export default function VotesPage() {
  const [showdowns, setShowdowns] = useState<Showdown[]>([]);

  useEffect(() => {
    getAllShowdowns().then(setShowdowns);
  }, []);

  const handleVote = async (id: string, winner: "left" | "right") => {
    console.log(`Voted on ${id}: ${winner}`);

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/votes/${id}/tags`, {
        field: winner,
        tags: [],
      });
    } catch (err) {
      console.error("Vote failed", err);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Vote on Showdowns</h1>
      {showdowns.length === 0 ? (
        <p>No showdowns yet. Please add some in the admin panel.</p>
      ) : (
        showdowns.map((s) => (
          <div key={s.id}>
            <ShowdownCard showdown={s} />
            <div className="mt-4">
              <button onClick={() => handleVote(s.id, "left")}>
                Vote for {s.left}
              </button>
              <button onClick={() => handleVote(s.id, "right")}>
                Vote for {s.right}
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

// "use client";
// import React, { useEffect, useState } from "react";
// import { useToast } from "@/components/ui/use-toast";

// interface Showdown {
//   id?: string;
//   left: string;
//   right: string;
//   category?: string;
// }

// const VoteHistoryPage = () => {
//   const { toast } = useToast();
//   const [votes, setVotes] = useState<Showdown[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchVotes = async () => {
//       try {
//         const baseUrl =
//           process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
//         const response = await fetch(`${baseUrl}/showdowns`);
//         if (!response.ok) throw new Error(`HTTP error ${response.status}`);
//         const data = await response.json();

//         const showdownList = Array.isArray(data.showdowns)
//           ? data.showdowns
//           : Array.isArray(data)
//           ? data
//           : [];

//         const recentVotes = showdownList.slice(0, 5);
//         setVotes(recentVotes);

//         toast({
//           title: "Vote history loaded",
//           description: `Showing ${recentVotes.length} recent showdowns.`,
//         });
//       } catch (error) {
//         console.error("Failed to fetch votes", error);
//         toast({
//           title: "Error",
//           description: "Failed to fetch vote history.",
//         });
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchVotes();
//   }, [toast]);

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold mb-4">Your Vote History</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : votes.length === 0 ? (
//         <p>No recent votes found. Try voting first.</p>
//       ) : (
//         <ul className="space-y-2">
//           {votes.map((v, idx) => (
//             <li key={`${v.left}-${v.right}-${idx}`}>
//               <span className="font-medium">{v.left}</span> &gt;{" "}
//               <span className="font-medium">{v.right}</span>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default VoteHistoryPage;
