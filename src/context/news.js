import { createContext, useCallback, useState } from 'react';
import axios from 'axios';

const NewsContext = createContext();

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

function NewsProvider({ children }) {
  const [mainNews, setMainNews] = useState([]);
  const [searchedNews, setSearchedNews] = useState([]);
  const [categoryNews, setCategoryNews] = useState([]);

  const fetchMainNews = useCallback(async () => {
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    );

    setMainNews(res.data.articles.slice(0, 10));
  }, []);

  const searchNews = async (query) => {
    const res = await axios.get(
      `https://newsapi.org/v2/everything?q=${query}&language=en&apiKey=${API_KEY}`
    );

    setSearchedNews(res.data.articles);
    return res.data.articles;
  };

  const fetchCategoryNews = async (category) => {
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?category=${category}&language=en&apiKey=${API_KEY}`
    );

    setCategoryNews(res.data.articles);
    return res.data.articles;
  };

  const valueToShare = {
    mainNews,
    searchedNews,
    categoryNews,
    fetchMainNews,
    searchNews,
    fetchCategoryNews,
  };

  return (
    <NewsContext.Provider value={valueToShare}>{children}</NewsContext.Provider>
  );
}

export { NewsProvider };
export default NewsContext;
