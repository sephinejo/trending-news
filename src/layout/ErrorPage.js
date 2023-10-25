import { Link } from 'react-router-dom';
import classes from './ErrorPage.module.css';

function ErrorPage() {
  return (
    <div className={classes.errorContainer}>
      <p className={classes.errorTitle}>Page Not Found</p>
      <p className={classes.errorMessage}>Please go back to the homepage..</p>
      <Link to='/' className={classes.homeLink}>
        Home
      </Link>
    </div>
  );
}

export default ErrorPage;
