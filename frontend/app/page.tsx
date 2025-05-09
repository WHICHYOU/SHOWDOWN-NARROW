"use client";
import React, { useEffect, useState } from "react";

const LandingPage = () => {
  const [showdowns, setShowdowns] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShowdowns = async () => {
      try {
        const baseUrl =
          process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
        const response = await fetch(`${baseUrl}/technology_showdowns`);
        const data = await response.json();
        setShowdowns(data);
      } catch (error) {
        console.error("Error fetching showdowns:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchShowdowns();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome to Yoister</h1>
      <p className="text-muted-foreground mt-2">You are what you choose.</p>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Featured Technology Showdowns</h2>
        <ul>
          {showdowns.map((showdown) => (
            <li key={showdown.id} className="mt-4">
              <h3 className="font-medium">
                {showdown.left} vs. {showdown.right}
              </h3>
              <p>Category: {showdown.category}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;

// "use client";
// import React from "react";

// const LandingPage = () => {
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">Welcome to Yoister</h1>
//       <p className="text-muted-foreground mt-2">You are what you choose.</p>
//     </div>
//   );
// };

// export default LandingPage;
