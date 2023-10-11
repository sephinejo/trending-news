import { useEffect } from 'react';
import useNewsContext from './hooks/use-news-hook';
import NewsList from './components/NewsList';
import Top10Carousel from './components/Top10Carousel';

function App() {
  const { fetchNews } = useNewsContext();

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return (
    <div>
      <h1>Reading News Trend</h1>
      <Top10Carousel />
      {/* <NewsList /> */}
    </div>
  );
}

export default App;
