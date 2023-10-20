function NewsShow({ news }) {
  const { title, author, description, publishedAt, urlToImage } = news;

  return (
    <div className='news-show'>
      <img className='news-img' src={urlToImage} alt='' />
      <h3>{title}</h3>
      <p>{description}</p>
      <small>
        {author}, {publishedAt}
      </small>
    </div>
  );
}

export default NewsShow;
