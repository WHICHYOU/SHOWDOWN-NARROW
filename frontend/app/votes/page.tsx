"use client";

import React, { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface Showdown {
  id: string;
  left: string;
  right: string;
  category: string;
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
        const data: Showdown[] = await response.json();

        const techVotes = data
          .filter((v) => v.category === "Technology")
          .slice(0, 5);

        setVotes(techVotes);

        toast({
          title: "Vote history loaded",
          description: `Showing ${techVotes.length} recent Technology showdowns.`,
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
      ) : (
        <ul className="space-y-2">
          {votes.map((v) => (
            <li key={v.id}>
              <span className="font-medium">{v.left}</span> &gt;{" "}
              <span className="font-medium">{v.right}</span>{" "}
              <span className="text-sm text-muted-foreground">
                ({v.category})
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VoteHistoryPage;

// "use client";
// import React, { useEffect, useState } from "react";
// import { useToast } from "@/components/ui/use-toast";

// // Define the type of a vote item
// interface VoteItem {
//   id: number;
//   choice: string;
// }

// const VoteHistoryPage = () => {
//   const { toast } = useToast();
//   const [votes, setVotes] = useState<VoteItem[]>([]); // 👈 Add type here

//   useEffect(() => {
//     // Simulate vote fetch
//     setVotes([{ id: 1, choice: "Mac > Windows" }]);
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold mb-4">Your Vote History</h1>
//       <ul>
//         {votes.map((v) => (
//           <li key={v.id} className="text-sm">
//             {v.choice}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default VoteHistoryPage;
