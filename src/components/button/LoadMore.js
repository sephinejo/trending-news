import classes from './LoadMore.module.css';

function LoadMore({ onClick }) {
  return (
    <button className={classes.loadMore} onClick={onClick}>
      Load More
    </button>
  );
}

export default LoadMore;
