"use client";
import React, { useEffect, useState } from "react";

interface Showdown {
  id?: string;
  left: string;
  right: string;
  category?: string;
}

const ComparePage = () => {
  const [showdowns, setShowdowns] = useState<Showdown[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShowdowns = async () => {
      try {
        const baseUrl =
          process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
        const response = await fetch(`${baseUrl}/showdowns`);
        const { showdowns } = await response.json(); // ✅ fix here

        setShowdowns(showdowns.slice(0, 10)); // ✅ use extracted array
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchShowdowns();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Compare Profiles</h1>
      {loading ? (
        <p>Loading Compare Profiles...</p>
      ) : showdowns.length === 0 ? (
        <p>No showdowns available.</p>
      ) : (
        <div className="space-y-4">
          {showdowns.map((showdown, idx) => (
            <div
              key={`${showdown.left}-${showdown.right}-${idx}`}
              className="border-b pb-4"
            >
              <h2 className="font-semibold">
                {showdown.left} vs {showdown.right}
              </h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ComparePage;

// 'use client';
// import React from 'react';

// const ComparePage = () => {
//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold">Compare Profiles</h1>
//     </div>
//   );
// };

// export default ComparePage;
