import styles from './App.module.scss'
import { useState } from 'react';
import { CanvasParameters } from './types';
import Header from './Shared/Header/Header';
import Homepage from './Pages/Homepage/Homepage';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { canvas, homepage } from './routes';
import ErrorPage from './Shared/ErrorPage/ErrorPage';
import CanvasPage from './Pages/CanvasPage/CanvasPage';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  const router = createBrowserRouter([
    {
      path: homepage,
      element: <Homepage />,
      errorElement: <ErrorPage />
    },
    // {
    //   path: homepage,
    //   element: <App />,
    //   errorElement: <ErrorPage />
    // },
    {
      path: canvas,
      element: <CanvasPage />,
      errorElement: <ErrorPage />

    }
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
