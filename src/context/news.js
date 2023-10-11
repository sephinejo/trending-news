import { createContext, useCallback, useState } from 'react';
import axios from 'axios';

const NewsContext = createContext();

const API_KEY = '15982c6daa9949a0afe5eaccf6b4e12b';

function Provider({ children }) {
  const [news, setNews] = useState([]);

  const fetchNews = useCallback(async () => {
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    );

    setNews(res.data.articles.slice(0, 10));
  }, []);

  const valueToShare = {
    news,
    fetchNews,
  };

  return (
    <NewsContext.Provider value={valueToShare}>{children}</NewsContext.Provider>
  );
}

export { Provider };
export default NewsContext;
