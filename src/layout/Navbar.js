import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';
import { login, logout, onUserStateChanged } from '../api/firebase';

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onUserStateChanged((user) => {
      setUser(user);
    });
  }, []);

  const handleLogin = () => {
    login().then(setUser);
  };

  const handleLogout = () => {
    logout().then(setUser);
  };

  return (
    <header className={classes.header}>
      <Link to='/' className={classes.logo}>
        <img
          className={classes.logoIcon}
          src='favicon.png'
          alt='Trending News'
        />
        <h1 className={classes.logoText}>Trending News</h1>
      </Link>
      <div className={classes.menu}>
        {!user ? (
          <button className={classes.menuLink} onClick={handleLogin}>
            Login
          </button>
        ) : (
          <button className={classes.menuLink} onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </header>
  );
}

export default Navbar;
