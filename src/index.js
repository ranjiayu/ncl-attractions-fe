import React from 'react';
import ReactDOM from 'react-dom/client';
import HomeIndex from './components/Home/Index';
import ResultIndex from './components/Result/Index';
import DetailIndex from './components/Detail/Index';
import {createHashRouter, RouterProvider} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createHashRouter([
  {
    path: '/',
    element: <HomeIndex />
  },
  {
    path: '/result',
    element: <ResultIndex />
  },
  {
    path: '/place',
    element: <DetailIndex />
  },
]);


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
