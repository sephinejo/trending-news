import { Link } from 'react-router-dom';

function CarouselShow({ news, current }) {
  const { title, author, description, publishedAt, url, urlToImage } = news;

  return (
    <div
      className='carousel-item'
      style={{ transform: `translate(-${current * 100}%)` }}
      onClick={() => (window.location.href = url)}
    >
      <h2>{title}</h2>
      <img className='carousel-img' src={urlToImage} alt='' />
      <p>{description}</p>
      <small>
        {author}, {publishedAt}
      </small>
    </div>
  );
}

export default CarouselShow;
