// lib/api.js
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export const getAllShowdowns = async () => {
  const response = await axios.get(`${API_URL}/showdowns`);
  return response.data.showdowns; // important: unpack from .showdowns
};

export const getShowdownsByCategory = async (category) => {
  const all = await getAllShowdowns();
  return all.filter((s) => s.category === category);
};

// // lib/api.js for mock test
// import axios from "axios";

// const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

// export const getTechnologyShowdowns = async () => {
//   const response = await axios.get(`${API_URL}/technology_showdowns`);
//   return response.data;
// };

// export const getFoodBeverageShowdowns = async () => {
//   const response = await axios.get(`${API_URL}/food_beverage_showdowns`);
//   return response.data;
// };

// export const getEntertainmentShowdowns = async () => {
//   const response = await axios.get(`${API_URL}/entertainment_showdowns`);
//   return response.data;
// };

// export const getFashionLifestyleShowdowns = async () => {
//   const response = await axios.get(`${API_URL}/fashion_lifestyle_showdowns`);
//   return response.data;
// };

// export const getTravelAdventureShowdowns = async () => {
//   const response = await axios.get(`${API_URL}/travel_adventure_showdowns`);
//   return response.data;
// };
