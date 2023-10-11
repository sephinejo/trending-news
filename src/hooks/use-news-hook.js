import { useContext } from 'react';
import NewsContext from '../context/news';

function useNewsContext() {
  return useContext(NewsContext);
}

export default useNewsContext;
