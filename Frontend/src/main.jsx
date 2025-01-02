
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Success from './Success';  // Import the Success component
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: <App />, // This renders the signup form in App
  },
  {
    path: "success",
    element: <Success />,  // Route for the success page
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

