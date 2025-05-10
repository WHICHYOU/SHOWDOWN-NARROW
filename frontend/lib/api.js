// lib/api.js for Mock Data and votes/page.tsx
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export const getAllShowdowns = async () => {
  const response = await axios.get(`${API_URL}/showdowns`);
  return response.data; // <- Fixed: backend returns the list directly
};

export const getShowdownsByCategory = async (category) => {
  const all = await getAllShowdowns();
  return all.filter((s) => s.category === category);
};

// // lib/api.js
// import axios from "axios";

// const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

// export const getAllShowdowns = async () => {
//   const response = await axios.get(`${API_URL}/showdowns`);
//   return response.data.showdowns; // important: unpack from .showdowns
// };

// export const getShowdownsByCategory = async (category) => {
//   const all = await getAllShowdowns();
//   return all.filter((s) => s.category === category);
// };
