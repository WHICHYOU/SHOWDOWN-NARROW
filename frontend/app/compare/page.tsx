// Mock data. Real page commented out.

"use client";
import React, { useEffect, useState } from "react";

// Define the types for the data structure
interface Showdown {
  id: number;
  left: string;
  right: string;
  category: string;
}

const ComparePage = () => {
  const [showdowns, setShowdowns] = useState<Showdown[]>([]); // Define the type of showdowns
  const [loading, setLoading] = useState(true);

  // Fetch showdowns data from the mock API
  useEffect(() => {
    const fetchShowdowns = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/technology_showdowns"
        ); // Mock API URL
        const data: Showdown[] = await response.json();
        setShowdowns(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchShowdowns();
  }, []);

  if (loading) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-bold">Loading Compare Profiles...</h1>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Compare Profiles</h1>
      <div className="space-y-4">
        {showdowns.length === 0 ? (
          <p>No showdowns available.</p>
        ) : (
          showdowns.map((showdown) => (
            <div key={showdown.id} className="border-b pb-4">
              <h2 className="font-semibold">
                {showdown.left} vs {showdown.right}
              </h2>
              <p className="text-sm text-muted-foreground">
                {showdown.category || "General"}
              </p>
            </div>
          ))
        )}
      </div>
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
