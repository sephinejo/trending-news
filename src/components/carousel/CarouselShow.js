import { Link } from 'react-router-dom';
import classes from './CarouselShow.module.css';

function CarouselShow({ news, current }) {
  const { title, author, description, publishedAt, url, urlToImage } = news;

  return (
    <div
      className={classes.carouselItem}
      style={{ transform: `translate(-${current * 100}%)` }}
      onClick={() => (window.location.href = url)}
    >
      <img className={classes.carouselImg} src={urlToImage} alt='' />
      <h2 className={classes.carouselTitle}>{title}</h2>
      <p className={classes.carouselDesc}>{description}</p>
      <small className={classes.carouselInfo}>
        {author}, {publishedAt}
      </small>
    </div>
  );
}

export default CarouselShow;
