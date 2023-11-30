import { useState } from 'react';
import LoadMore from '../button/LoadMore';
import NewsShow from './NewsShow';

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
      {next <= 100 ? (
        <LoadMore onClick={loadMoreHandler} />
      ) : (
        <p style={{ textAlign: 'center', marginTop: '50px' }}>
          End of Articles
        </p>
      )}
    </div>
  );
}

export default NewsList;
