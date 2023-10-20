import { useEffect } from 'react';
import useNewsContext from './hooks/use-news-hook';
import NewsList from './components/news/NewsList';
import Top10Carousel from './components/carousel/Top10Carousel';
import Header from './layout/Header';

function App() {
  const { fetchNews } = useNewsContext();

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return (
    <div>
      <Header />
      <Top10Carousel />
      {/* <NewsList /> */}
    </div>
  );
}

export default App;
