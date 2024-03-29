import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

//Import Routes
import Landing from './Pages/Landing';
import CalculatorPage from './Pages/Calculator'
import Explanation from './Pages/Explanation'
import ChartPage from './Pages/Chart'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    children: [
      {
        index: true,
        element: <CalculatorPage />
      },
      {
        path: "Explanation",
        element: <Explanation />,
      },
      {
        path: "Calculator",
        element: <CalculatorPage />,
      },
      {
        path: "Chart",
        element: <ChartPage />,
      }]
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
