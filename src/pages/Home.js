import { useEffect } from 'react';
import Top10Carousel from '../components/carousel/Top10Carousel';
import useNewsContext from '../hooks/use-news-hook';

function Home() {
  const { fetchNews } = useNewsContext();

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return (
    <div>
      <Top10Carousel />
    </div>
  );
}

export default Home;
