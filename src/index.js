import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from 'react-router-dom';
import Footer from './routes/Footer/Footer';
import Navbar from './Component/Navbar/Navbar';
import Home from './routes/Home/Home';
import Safety from './routes/Safety';
import Security from './routes/Security';
import Guildline from './routes/Guildline';
import Contact from './routes/Contact';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'safety',
        element: <Safety />,
      },
      {
        path: 'security',
        element: <Security />,
      },
      {
        path: 'guildline',
        element: <Guildline />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
