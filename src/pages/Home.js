import { useEffect } from 'react';
import Top10Carousel from '../components/carousel/Top10Carousel';
import useNewsContext from '../hooks/use-news-hook';
import classes from './Home.module.css';
import SideMenu from '../components/sideMenu/SideMenu';

function Home() {
  const { fetchMainNews } = useNewsContext();

  useEffect(() => {
    fetchMainNews();
  }, [fetchMainNews]);

  return (
    <div>
      <section className={classes.homeMain}>
        <Top10Carousel />
        <SideMenu />
      </section>
    </div>
  );
}

export default Home;
