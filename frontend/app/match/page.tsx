// Mocd Data. Real codes commented out.

"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Showdown {
  id: number;
  left: string;
  right: string;
  category: string;
}

export default function MatchScores() {
  const [matches, setMatches] = useState<Showdown[]>([]);

  useEffect(() => {
    // Simulate taste match aggregation by merging mock categories
    const endpoints = [
      "technology_showdowns",
      "food_beverage_showdowns",
      "entertainment_showdowns",
      "fashion_lifestyle_showdowns",
      "travel_adventure_showdowns",
    ];

    Promise.all(
      endpoints.map((endpoint) =>
        fetch(`http://localhost:8000/${endpoint}`).then((res) => res.json())
      )
    )
      .then((all) => all.flat())
      .then(setMatches);
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Top Taste Matches</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {matches.map((item) => (
              <li key={item.id}>
                <span className="font-semibold">{item.left}</span> vs{" "}
                <span className="font-semibold">{item.right}</span> —{" "}
                <span className="text-sm text-muted-foreground">
                  {item.category}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

// /*
//  🔹 /match — Instant Summary Page
//  ✅ Purpose: Automatically shows your top taste matches
//  ✅ UI: Auto-loaded score list
//  ✅ Intent: “Who is most like me?”
// */

// "use client";
// import { useEffect, useState } from "react";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// export default function MatchScores() {
//   const [results, setResults] = useState<any[]>([]);

//   useEffect(() => {
//     const id = localStorage.getItem("user_id");
//     if (!id) return;
//     fetch(`/match/${id}`)
//       .then((res) => res.json())
//       .then(setResults);
//   }, []);

//   return (
//     <div className="max-w-2xl mx-auto p-6 space-y-4">
//       <Card>
//         <CardHeader>
//           <CardTitle>Top Taste Matches</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <ul className="space-y-1">
//             {results.map((r, i) => (
//               <li key={i}>
//                 <span className="font-semibold">{r.username}</span>:{" "}
//                 {r.match_score}%
//               </li>
//             ))}
//           </ul>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
