/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-08 16:10:09
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-04-21 16:55:25
 * @Description: Entrance of js of the webpage
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
// import components
import HomeIndex from './components/Home/Index';
import ResultIndex from './components/Result/Index';
import DetailIndex from './components/Detail/Index';
import PostReview from './components/Detail/PostReview';
import {createHashRouter, RouterProvider} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// import common css
import './styles/common.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Define the route
const router = createHashRouter([
  {
    path: '/',
    element: <HomeIndex />
  },
  {
    path: '/result/:placeID',
    element: <ResultIndex />
  },
  {
    path: '/place/:id',
    element: <DetailIndex />
  },
  {
    path: '/postReview/:id',
    element: <PostReview />
  }
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
