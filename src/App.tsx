import styles from './App.module.scss'
import { useState } from 'react';
import { CanvasParameters } from './types';
import Header from './Shared/Header/Header';
import Homepage from './Pages/Homepage/Homepage';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { canvas, homepage } from './routes';
import ErrorPage from './Shared/ErrorPage/ErrorPage';
import CanvasPage from './Pages/CanvasPage/CanvasPage';

const App = () => {
  const initialCanvasParameters: CanvasParameters = {
    rows: 15,
    columns: 15,
    baseColor: 'white',
    gridColor: '#ededed'
  }

  const [canvasParameters, setCanvasParameters] = useState<CanvasParameters>(initialCanvasParameters)
  const [drawingColor, setDrawingColor] = useState<string>('#ededed')


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to={homepage} />,
      errorElement: <ErrorPage />
    },
    {
      path: homepage,
      element: <App />,
      errorElement: <ErrorPage />
    },
    {
      path: canvas,
      element: <CanvasPage />,
      errorElement: <ErrorPage />

    }
  ]);
  return (
    <RouterProvider router={router} />

  );
}

export default App;
