"use client";

import React, { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface Showdown {
  id: number;
  left: string;
  right: string;
  category: string;
}

const VoteHistoryPage = () => {
  const { toast } = useToast();
  const [votes, setVotes] = useState<Showdown[]>([]);

  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

    fetch(`${baseUrl}/technology_showdowns`)
      .then((res) => res.json())
      .then((data: Showdown[]) => {
        const sample = data.slice(0, 5);
        setVotes(sample);

        toast({
          title: "Loaded mock vote history",
          description: `Showing ${sample.length} recent items.`,
        });
      })
      .catch((err) => {
        console.error("Failed to fetch vote history", err);
        toast({
          title: "Error",
          description: "Could not load vote history.",
        });
      });
  }, [toast]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Your Vote History</h1>
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
