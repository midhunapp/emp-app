import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import StandingpageLayout  from '../layout/standingpageLayout'
import LoginPage from '../pages/loginPage';

const router = createBrowserRouter([
    {
      path:"/",
      element: <StandingpageLayout />,
      /*errorElement: <ErrorPage />,*/
      children: [  
        {
          path: '/login',
          element: <LoginPage />
        }
      ]
    }
  ])
  export default router;

