import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from './layout/Navbar';
import useNewsContext from './hooks/use-news-hook';
import Search from './components/search/Search';
import Footer from './layout/Footer';
import { LightModeProvider } from './context/LightMode';

function App() {
  const { searchNews } = useNewsContext();
  const navigate = useNavigate();

  const searchHandler = async (query) => {
    await searchNews(query);
    navigate(`news/${query}`);
  };

  return (
    <LightModeProvider>
      <Navbar />
      <Search onSearch={searchHandler} />
      <Outlet />
      <Footer />
    </LightModeProvider>
  );
}

export default App;
