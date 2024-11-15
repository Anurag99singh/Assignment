// src/api/newsApi.js
import axios from "axios";

const API_KEY = "7761b8773a124629aec0c31b4b6fb537";
const BASE_URL = "https://newsapi.org/v2/top-headlines";

export const getNewsByCategory = async (category) => {
  const response = await axios.get(BASE_URL, {
    params: {
      category,
      country: "us", // You can specify any country
      apiKey: API_KEY,
    },
  });
  return response.data.articles;
};
