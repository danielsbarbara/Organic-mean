import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//Imports global styles which import tailwind
import './index.css';

//Page Imports
import { ErrorPage } from './pages/ErrorPage';
import { ContactPage } from './pages/ContactPage';
import { LandingPage } from './pages/LandingPage';
import { Root } from './pages/Root';
import { ProductsPage } from './pages/ProductsPage';
import { ComponentsPage } from './pages/Components';
import Aboutme from './pages/Aboutme';

//Creates the router for the website
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "contacts",
        element: <ContactPage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "components",
        element: <ComponentsPage />,
      },
      {
        path: "aboutme",
        element: <Aboutme/>
      }
    ],
  },
]);

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
