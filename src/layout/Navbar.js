import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';
import { login, logout, onUserStateChanged } from '../api/firebase';
import { GoMoon, GoSun } from 'react-icons/go';
import useLightMode from '../hooks/use-light-mode-hook';

function Navbar() {
  const [user, setUser] = useState(null);
  const { lightMode, toggleLightMode } = useLightMode();

  useEffect(() => {
    onUserStateChanged(setUser);
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
        {lightMode ? (
          <GoMoon className={classes.modeIcon} onClick={toggleLightMode} />
        ) : (
          <GoSun className={classes.modeIcon} onClick={toggleLightMode} />
        )}
        {!user ? (
          <button className={classes.menuLink} onClick={handleLogin}>
            Login
          </button>
        ) : (
          <>
            <img
              className={classes.photo}
              src={user.photoURL}
              alt='user thumbnail'
            />
            <button className={classes.menuLink} onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Navbar;
