import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Signup  from './components/Signup';
import Login from './components/Login';

const router = createBrowserRouter([
  {
  path:'/',
  element:<Layout/>,
  children:[
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/Signup',
      element:<Signup/>
    },

  ]
},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
