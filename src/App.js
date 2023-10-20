import { Outlet } from 'react-router-dom';
import { Provider } from './context/news';
import Navbar from './layout/Navbar';

function App() {
  return (
    <Provider>
      <Navbar />
      <Outlet />
    </Provider>
  );
}

export default App;
