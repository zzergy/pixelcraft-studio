import Homepage from './Pages/Homepage/Homepage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { canvas, homepage } from './routes';
import ErrorPage from './Shared/ErrorPage/ErrorPage';
import CanvasPage from './Pages/CanvasPage/CanvasPage';
import { Provider } from 'react-redux';
import store from './store';
import { ConfigProvider } from 'antd';
import { customTheme } from './customTheme';

const App = () => {
  const router = createBrowserRouter([
    {
      path: homepage,
      element: <Homepage />,
      errorElement: <ErrorPage />
    },
    {
      path: canvas,
      element: <CanvasPage />,
      errorElement: <ErrorPage />

    }
  ]);

  return (
    <ConfigProvider theme={customTheme}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ConfigProvider>
  );
}

export default App;
