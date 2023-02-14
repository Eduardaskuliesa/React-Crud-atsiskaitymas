import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'components/layout/navbar-layout';
import HomePage from 'pages/home-page/home-page';
import BeefPage from 'pages/solo-beef-card-page';
import routes from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarLayout />,
    children: [
      {
        path: routes.HomePage,
        element: <HomePage />,
      },
      {
        path: routes.BeefPage.routePath,
        element: <BeefPage />,
      },
    ],
  },
]);

export default router;
