import classes from './NewsShow.module.css';

function NewsShow({ news }) {
  const { title, author, description, publishedAt, urlToImage, url } = news;

  return (
    <div
      className={classes.newsShow}
      onClick={() => (window.location.href = url)}
    >
      <img className={classes.newsImg} src={urlToImage} alt='' />
      <h3>{title}</h3>
      <p>{description}</p>
      <small>
        {author}, {publishedAt}
      </small>
    </div>
  );
}

export default NewsShow;
