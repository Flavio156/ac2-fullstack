import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// 1 - configurando router
import{
  createBrowserRouter,
  RouterProvider

} from "react-router-dom";

import Home from './assets/routes/Home';
import Contact from './assets/routes/Contact';
import ErrorPage from './assets/routes/ErrorPage';
import ContactDetails from './assets/routes/ContactDetails';

//const router = createBrowserRouter([
//  {
//    path: "/",
//    element: <Home />   
//  },
//  {
//    path: "contact",
//    element: <Contact />
//  },
//]);

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />,
    // 3 - pagina de erro
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // 5 - nested routes - identificado unico
      {
        path: "/contact/:id",
        element: <ContactDetails />,
      },
    ],   
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
