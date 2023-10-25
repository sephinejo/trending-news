import NewsShow from './NewsShow';

function NewsList(news) {
  const renderedNews = news.news.map((newsObj) => {
    return <NewsShow key={Math.random()} news={newsObj} />;
  });

  return <div>{renderedNews}</div>;
}

export default NewsList;
