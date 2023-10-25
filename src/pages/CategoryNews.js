import { useParams } from 'react-router-dom';
import NewsList from '../components/news/NewsList';
import useNewsContext from '../hooks/use-news-hook';
import classes from './CategoryNews.module.css';
import { useEffect } from 'react';

function CategoryNews() {
  const { categoryNews, fetchCategoryNews } = useNewsContext();
  const category = useParams().categoryName;

  useEffect(() => {
    fetchCategoryNews(category);
  }, [category]);

  return (
    <div className={classes.container}>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} News</h1>
      <NewsList news={categoryNews} />
    </div>
  );
}

export default CategoryNews;
