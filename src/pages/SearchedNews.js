import NewsList from '../components/news/NewsList';
import classes from './SearchedNews.module.css';
import useNewsContext from '../hooks/use-news-hook';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function SearchedNews() {
  const params = useParams().query;
  const { searchNews, searchedNews } = useNewsContext();

  useEffect(() => {
    searchNews(params);
  }, [params]);

  return (
    <div className={classes.container}>
      <h1>
        Matched News on <u>{params}</u>
      </h1>
      <NewsList news={searchedNews} />
    </div>
  );
}

export default SearchedNews;
