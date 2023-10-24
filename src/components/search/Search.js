import { useState } from 'react';
import classes from './Search.module.css';
import { BsSearch } from 'react-icons/bs';

function Search({ onSearch }) {
  const [query, setQuery] = useState('');

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={submitHandler} className={classes.searchForm}>
      <BsSearch className={classes.searchIcon} />
      <input
        type='text'
        className={classes.searchInput}
        name='query'
        value={query}
        placeholder='Search an article.....'
        onChange={changeHandler}
      ></input>
      <button type='submit' className={classes.searchBtn}>
        Search
      </button>
    </form>
  );
}

export default Search;
