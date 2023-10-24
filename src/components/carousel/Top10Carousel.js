import { useEffect, useState } from 'react';
import useNewsContext from '../../hooks/use-news-hook';
import CarouselShow from './CarouselShow';
import classes from './Top10Carousel.module.css';

function Top10Carousel() {
  const [current, setCurrent] = useState(0);
  const { mainNews } = useNewsContext();

  const carouselInfiniteScroll = () => {
    if (current === mainNews.length - 1) {
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

  const renderedNews = mainNews.map((newsEl, i) => {
    return <CarouselShow key={i} news={newsEl} current={current} />;
  });

  return (
    <div className={classes.carouselOuter}>
      <div className={classes.carouselContainer}>{renderedNews}</div>
    </div>
  );
}

export default Top10Carousel;
