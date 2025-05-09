// Mock Data. Real code commented out below.

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
    fetch("http://localhost:8000/technology_showdowns")
      .then((res) => res.json())
      .then((data: Showdown[]) => {
        setVotes(data.slice(0, 5)); // Simulate a vote history of 5 items
        toast({
          title: "Loaded mock vote history",
          description: `Showing ${data.slice(0, 5).length} recent items.`,
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
