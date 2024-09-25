// import React, { useEffect, useState } from "react";
import styles from "./Categories.module.css";
import { useLocation } from "react-router-dom";
// import axios from "axios";
import Spinner from "../../components/spinner/Spinner";
import NewsCard from "../../components/newsCard/NewsCard";
import useNews from "../../hooks/useNews";
const Categories = () => {
  // const [news, setNews] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [filter, setFilter] = useState("");
  
  const { state } = useLocation();
  const { news, loading, filter, setFilter, handleSubmit } = useNews(state.category);

  // const apiKey = process.env.REACT_APP_API_KEY;
  // const url = `https://newsapi.org/v2/top-headlines?country=us&category=${state.category}&apiKey=${apiKey}`;
  // const filterUrl = `https://newsapi.org/v2/top-headlines?country=${filter}&category=${state.category}&apiKey=${apiKey}`;

  // const getNews = async (API) => {
  //   setLoading(true);
  //   try {
  //     const { data } = await axios(API);
  //     setNews(data.articles);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   getNews(filterUrl);
  //   setFilter("");
  // };

  // useEffect(() => {
  //   getNews(url);
  // }, []);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            type="text"
            placeholder="ex:us,tr,jp,mx.."
          />
          <button type="submit">Filter Country</button>
        </form>
      </div>
      <div className={styles.right}>
        {loading && <Spinner />}
        {news.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
