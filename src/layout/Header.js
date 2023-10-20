import classes from './Header.module.css';

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img
          className={classes.logoIcon}
          src='favicon.png'
          alt='trending news logo'
        />
        <h1 className={classes.logoText}>Trending News</h1>
      </div>
      <div className={classes.menu}>
        <a className={classes.menuLink} href='/'>
          Login
        </a>
      </div>
    </header>
  );
}

export default Header;
