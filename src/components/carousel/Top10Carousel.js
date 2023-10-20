import { useEffect, useState } from 'react';
import useNewsContext from '../../hooks/use-news-hook';
import CarouselShow from './CarouselShow';

function Top10Carousel() {
  const [current, setCurrent] = useState(0);
  const { news } = useNewsContext();

  const carouselInfiniteScroll = () => {
    if (current === news.length - 1) {
      return setCurrent(0);
    }
    return setCurrent(current + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 5000);
    return () => clearInterval(interval);
  });

  const renderedNews = news.map((newsEl, i) => {
    return <CarouselShow key={i} news={newsEl} current={current} />;
  });

  return (
    <div className='carousel-outer'>
      <div className='carousel-container'>{renderedNews}</div>
    </div>
  );
}

export default Top10Carousel;
