import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NewsProvider } from './context/news';
import './index.css';
import App from './App';
import ErrorPage from './layout/ErrorPage';
import Home from './pages/Home';
import CategoryNews from './pages/CategoryNews';
import SearchedNews from './pages/SearchedNews';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'news/category/:categoryName', element: <CategoryNews /> },
      { path: '/news/:query', element: <SearchedNews /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <NewsProvider>
      <RouterProvider router={router} />
    </NewsProvider>
  </StrictMode>
);
