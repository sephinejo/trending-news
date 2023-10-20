import useNewsContext from '../../hooks/use-news-hook';
import NewsShow from './NewsShow';

function NewsList() {
  const { news } = useNewsContext();

  const renderedNews = news.map((newsObj) => {
    return <NewsShow key={Math.random()} news={newsObj} />;
  });

  return <div>{renderedNews}</div>;
}

export default NewsList;
