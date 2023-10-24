import { useEffect } from 'react';
import Top10Carousel from '../components/carousel/Top10Carousel';
import useNewsContext from '../hooks/use-news-hook';
import classes from './Home.module.css';
import Search from '../components/search/Search';
import SubNavbar from '../components/sideMenu/SideMenu';

function Home() {
  const { fetchMainNews, searchNews } = useNewsContext();

  useEffect(() => {
    fetchMainNews();
  }, [fetchMainNews]);

  const searchHandler = async (query) => {
    const data = await searchNews(query);
    console.log(data);
  };

  return (
    <div>
      <Search onSearch={searchHandler} />
      <section className={classes.homeMain}>
        <Top10Carousel />
        <SubNavbar />
      </section>
    </div>
  );
}

export default Home;
