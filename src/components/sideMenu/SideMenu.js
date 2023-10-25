import { useContext } from 'react';
import classes from './SideMenu.module.css';
import { AiFillCaretRight } from 'react-icons/ai';
import NewsContext from '../../context/news';
import { useNavigate } from 'react-router-dom';

function SideMenu() {
  const { fetchCategoryNews } = useContext(NewsContext);
  const navigate = useNavigate();

  const clickHandler = async (e) => {
    await fetchCategoryNews(e.target.innerText);
    navigate(`news/category/${e.target.innerText.toLowerCase()}`);
  };

  return (
    <nav className={classes.sideMenuContainer}>
      <h4 className={classes.sideMenuTitle}>Categories</h4>
      <ul className={classes.sideMenuList}>
        <li className={classes.sideMenuItem} onClick={clickHandler}>
          <AiFillCaretRight />
          Business
        </li>
        <li className={classes.sideMenuItem} onClick={clickHandler}>
          <AiFillCaretRight />
          Entertainment
        </li>
        <li className={classes.sideMenuItem} onClick={clickHandler}>
          <AiFillCaretRight />
          General
        </li>
        <li className={classes.sideMenuItem} onClick={clickHandler}>
          <AiFillCaretRight />
          Health
        </li>
        <li className={classes.sideMenuItem} onClick={clickHandler}>
          <AiFillCaretRight />
          Science
        </li>
        <li className={classes.sideMenuItem} onClick={clickHandler}>
          <AiFillCaretRight />
          Sports
        </li>
        <li
          to='/category/technology'
          className={classes.sideMenuItem}
          onClick={clickHandler}
        >
          <AiFillCaretRight />
          Technology
        </li>
      </ul>
    </nav>
  );
}

export default SideMenu;
