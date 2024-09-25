import axios from "axios";

export const fetchNews = async () => {
  try {
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
    const { data } = await axios(url);
    return data.articles;
  } catch (error) {
    throw error;
  }
};
