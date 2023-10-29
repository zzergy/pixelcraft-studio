import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './font.css'
import 'semantic-ui-css/semantic.min.css'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import { homepage } from './routes';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={homepage} />,
  },
  {
    path: homepage,
    element: <App />
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
