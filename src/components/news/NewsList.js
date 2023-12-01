import { useState } from 'react';
import LoadMore from '../button/LoadMore';
import NewsShow from './NewsShow';
import classes from './NewsList.module.css';

const ARTICLES_PER_SHOW = 20;

function NewsList(news) {
  const [next, setNext] = useState(ARTICLES_PER_SHOW);
  const renderedNews = news.news.slice(0, next).map((newsObj) => {
    return <NewsShow key={Math.random()} news={newsObj} />;
  });

  const loadMoreHandler = () => {
    setNext(next + ARTICLES_PER_SHOW);
  };

  return (
    <div>
      {renderedNews}

      {news.news.length > next && next <= 100 ? (
        <LoadMore onClick={loadMoreHandler} />
      ) : (
        <p className={classes.endMessage}>End of the Articles</p>
      )}
    </div>
  );
}

export default NewsList;
