import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Marques from './components/Marques';
import NotFound from './components/NotFound';
import Cars from './components/Cars';
import NewCar from './components/NewCar';
import Marque from './components/Marque';
import Car from './components/Car';
import ErrorPage from './components/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path:'/marques',
    element: <Marques />
  },
  {
    path:'/marques/:name',
    element: <Marque />
  },
  {
    path:'/cars',
    element: <Cars />, 
  },
  {
    path:'/cars/:model',
    element: <Car />
  },
  {
    path: "/cars/new",
    element: <NewCar />
  }

])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
