"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Showdown {
  id?: string;
  left: string;
  right: string;
  category?: string;
}

export default function MatchScores() {
  const [matches, setMatches] = useState<Showdown[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const baseUrl =
          process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
        const response = await fetch(`${baseUrl}/showdowns`);
        const data: Showdown[] = await response.json();

        const sampleMatches = data.slice(0, 10); // ✅ Preview mode: no category filtering
        setMatches(sampleMatches);
      } catch (err) {
        console.error("Match fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Top Showdown Matches</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p>Loading...</p>
          ) : matches.length === 0 ? (
            <p>No showdowns available.</p>
          ) : (
            <ul className="space-y-2">
              {matches.map((item, idx) => (
                <li key={`${item.left}-${item.right}-${idx}`}>
                  <span className="font-semibold">{item.left}</span> vs{" "}
                  <span className="font-semibold">{item.right}</span>
                </li>
              ))}
            </ul>
          )}
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
